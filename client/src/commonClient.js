// Cache environment variables to prevent redundant checks
const isProduction = import.meta.env.MODE === "production";
const PORT_LOCAL = "http://localhost:5000";
const PORT_PRODUCTON = import.meta.env.VITE_PORT_PRODUCTON;

// Conditional assignment for PORT_CLIENT, with early return strategy
export const PORT_CLIENT = isProduction && PORT_PRODUCTON 
  ? PORT_PRODUCTON 
  : PORT_LOCAL;
