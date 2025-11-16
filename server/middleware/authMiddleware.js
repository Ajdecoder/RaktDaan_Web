import jwt from 'jsonwebtoken';

// Protect route - verify JWT from Authorization header or cookie
export const protect = (req, res, next) => {
	try {
		let token;

		// Check Authorization header
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			token = req.headers.authorization.split(' ')[1];
		}

			// Fallback to cookie named jwttoken (try req.cookies if cookie-parser used, otherwise parse header)
			if (!token && req.cookies && req.cookies.jwttoken) {
				token = req.cookies.jwttoken;
			}

			if (!token && req.headers && req.headers.cookie) {
				// parse simple cookie header string
				const cookies = req.headers.cookie.split(';').map(c => c.trim());
				for (const c of cookies) {
					if (c.startsWith('jwttoken=')) {
						token = c.split('=')[1];
						break;
					}
				}
			}

		if (!token) {
			return res.status(401).json({ success: false, message: 'Not authorized, token missing', data: null });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded; // { id, role, iat, exp }
		return next();
	} catch (error) {
		return res.status(401).json({ success: false, message: 'Not authorized, token invalid', data: null });
	}
};

// Role based authorization middleware
export const authorizeRoles = (...roles) => {
	return (req, res, next) => {
		if (!req.user || !req.user.role) {
			return res.status(403).json({ success: false, message: 'Forbidden: no role found', data: null });
		}

		if (!roles.includes(req.user.role)) {
			return res.status(403).json({ success: false, message: 'Forbidden: insufficient permissions', data: null });
		}

		return next();
	};
};
