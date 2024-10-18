
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import UPSCLiveClass from "./components/LiveClasses/UPSCLiveClasses";
// import ViewerScreenContainer from "./liveStreaming/ViewerScreenContainer";

// import ProtectedRoute from "./Auth/ProtectedRoute";

// import { AuthProvider } from './Auth/AuthContext';
// import EmailBox from "./components/EmailBox";

// import ResetPasswordForm from "./components/ResetPasswordForm";

import Header from "./Components/Header";
import Book from "./Components/Book/Book";
import Wishlist from "./components/Book/Wishlist";
import Cart from "./components/Book/Cart";
import BillingForm from "./Components/Book/BillingForm";
// import ScheduledLiveClasses from "./components/LiveClasses/ScheduledLiveClasses";

import PaymentSuccess from "./components/Book/PaymentSuccess";
// import OrderTrack from "./components/Book/OrderTrack";
import OrderHistory from "./components/Book/OrderHistory";
import Footer from "./Components/Footer";
import EmailBox from "./Components/EmailBox";
import ResetPasswordForm from "./Components/ResetPasswordForm";
import { AuthProvider } from "./Components/Auth/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Toaster />
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} /> */}
            
            <Route path="/examAtlas/reset-password-token" element={<ResetPasswordForm/>} />

            {/* <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
           */}
            <Route path='/emailbox' element={<EmailBox/>}/>

            {/* payment gateway  */}
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            {/* <Route path="ordertrack" element={<OrderTrack/>}/> */}

            <Route path="/OrderHistory" element={<OrderHistory/>}/>
           
            {/* <Route
              path="/livecourse/upsc-live-class"
              element={<UPSCLiveClass />}
            />
            <Route
              path="/livecourse/upsc-live-class/:courseId"
              element={<ScheduledLiveClasses />}
            />
            <Route
              path="/livecourse/live/:meetingId/:token"
              element={<ViewerScreenContainer />}
            />
            <Route path="/currentaffairs" element={<CurrentAffairs />} />
            <Route path="/blog" element={<Blog />} /> */}


            <Route path="/" element={<Book />} />
            <Route path="/book" element={<Book />} />
            <Route path="/ecommerce/wishlist" element={<Wishlist/>}/>
            <Route path="/ecommerce/cart" element={<Cart/>}/>

            <Route path="/billingForm" element={<BillingForm/>}/>

            {/* <Route element={<ProtectedRoute />}>
              <Route path="/testseries" element={<TestSeries />} />
              <Route path="/livecourse" element={<LiveCourse />} />
            </Route> */}
          </Routes>
          <Footer/>
         
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
