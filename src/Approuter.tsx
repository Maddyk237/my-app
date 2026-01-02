import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/homepage";
import About from "./pages/About/about";
import Services from "./pages/Services/planTrip";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import TripBooking from "./pages/Booking/TripBooking";
import Test from "./pages/Test/Test";
import AddPackage from "./pages/AddPackage/AddPackage";
import EditPackage from "./pages/EditPackage/editPackage";
import BookingSuccess from "./pages/Booking/BookingSuccess";
import MyTrips from "./pages/Trips/MyTrips";
import AdminBookings from "./pages/Admin/AdminBookings";
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/services/booking" element={<TripBooking />} />
        <Route path="/addPackage" element={<AddPackage />} />
        <Route path="/editPackage/:id" element={<EditPackage />} />
        <Route
          path="/booking-success/:bookingId"
          element={<BookingSuccess />}
        />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
