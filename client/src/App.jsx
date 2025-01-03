import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import AboutUs from "./components/HeaderPart1/AboutUs";
import ContactUs from "./components/HeaderPart1/ContactUs";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage"; 
import Footer from "./components/Footer";
import FAQs from "./components/HeaderPart1/FAQs";
import VideoGallery from "./components/HeaderPart1/VideoGallery";
import MobileApps from "./components/HeaderPart1/MobileApp";
import WantToDonateBlood from "./components/HeaderPart2/WantToDonateBlood";
import BloodDonationCamps from "./components/HeaderPart2/BloodDonationCamps";
import DonorLogin from "./components/HeaderPart2/DonorLogin";
import CampAdminLogin from "./components/HeaderPart2/CampAdminLogin";
import VoluntaryDonorGroup from "./components/HeaderPart2/VoluntaryDonorGroup";
import BloodAvailability from "./components/HeaderPart2/BloodAvailability";
import BloodBankDirectory from "./components/HeaderPart2/BloodBankDirectory";
import ThalassemiaRequest from "./components/HeaderPart2/ThalassemiaRequest";
import LookingForBlood from "./components/HeaderPart2/LookingForBlood";
import RaktDaanLogin from "./components/HeaderPart3/RaktDaanLogin";
import AddYourBloodbank from "./components/AddYourBloodbank";
import ScrollProgress from "./components/utils/ScrollProgress";
import CampRegistration from "./components/CampRegistration";
import Gallery from "./components/HeaderPart1/ImageGallery";
import NotificationPage from "./components/HeaderPart1/Notification";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};
function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <Router>
      {isLoading ? (
        
        <div className="min-h-screen bg-gray-100">
          <LoadingPage />
        </div>
      ) : (
        <>
          {/* Render the main content after loading */}
          <ScrollProgress />
          {/* Render the main content after loading */}
          <Header />
          <main className="p-6">
              <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-RaktDaan" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/RaktDaan-faqs" element={<FAQs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/mobile-apps" element={<MobileApps />} />
              <Route path="/video-gallery" element={<VideoGallery />} />
              <Route path="/looking-for-blood" element={<LookingForBlood />} />
              <Route path="/RaktDaan-login" element={<RaktDaanLogin />} />
              <Route path="/add-your-bloodbank" element={<AddYourBloodbank />} />
              <Route path="/thalassemia-request" element={<ThalassemiaRequest />} />
              <Route path="/blood-availability" element={<BloodAvailability />} />
              <Route path="/blood-bank-directory" element={<BloodBankDirectory />} />
              <Route path="/want-to-donate-blood" element={<WantToDonateBlood />} />
              <Route path="/blood-donation-camps" element={<BloodDonationCamps />} />
              <Route path="/donor-login" element={<DonorLogin />} />
              <Route path="/camp-admin-login" element={<CampAdminLogin />} />
              <Route path="/voluntary-donor-group" element={<VoluntaryDonorGroup />} />
              <Route path="/register-voluntary-blood-camp" element={<CampRegistration />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/notifications" element={<NotificationPage />} />
            </Routes>
          </main>
          <Footer /> 
        </>
      )}
    </Router>
  );
}

export default App;
