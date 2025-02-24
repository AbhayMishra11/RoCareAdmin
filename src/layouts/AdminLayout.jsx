import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// kusuma's imports
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Dashboard from '../pages/modules/dashboard/Dashboard';
import City from '../pages/modules/city/City';
import AddCity from '../pages/modules/city/AddCity';
import Services from '../pages/modules/services/Services';
import AddService from '../pages/modules/services/AddService';
import Product from '../pages/modules/product/Product';
import TimeSlotAndDate from '../pages/modules/timeSlotAndDate/TimeSlotAndDate';
import Sidebar from '../components/superAdmin/sidebar/Sidebar';
import Header from '../components/superAdmin/header/Header';
import LoadingPage from '../pages/modules/LoadingPage';
import AddProduct from "../components/superAdmin/pages/AddProduct";
import AddServices from "../components/superAdmin/pages/AddServices";
import AddTimeSlot from "../components/superAdmin/pages/AddTimeSlot";
//Abhay's imports
import ServiceEngineer from '../components/ServiceEngineerDir/ServiceEngineer'
import ServiceEngineer1 from '../components/ServiceEngineerDir/ServiceEngineer1'
import ServiceEngineer2 from '../components/ServiceEngineerDir/ServiceEngineer2'
import TechnicianMonitoring from '../components/ServiceEngineerDir/TechnicianMonitoring'
import TechnicianActivity from '../components/ServiceEngineerDir/TechnicianActivity'
import PendingServices from '../components/ServiceEngineerDir/PendingServices'
import ViewDetail from '../components/ServiceEngineerDir/ViewDetail'
import TechnicianProfileEdit from '../components/ServiceEngineerDir/TechnicianProfileEdit'
import RealTimeActivity from '../components/ServiceEngineerDir/RealTimeActivity'
//Pinki's import
import PendingOrders from "../components/superAdmin/pages/PendingOrders";
import SendNotification from "../components/superAdmin/pages/SendNotification";
//Roushan imports
import Banner from "../components/superAdmin/pages/Banner";
import Testimonial from "../components/superAdmin/pages/Testimonial";
import InventoryManagement from "../components/superAdmin/pages/InventoryManagement";
import PaymentGateway from "../components/superAdmin/pages/Paymentgateway";
import Profile from "../components/superAdmin/pages/Profile";
import Setting from "../components/superAdmin/pages/Setting";
import PaymentGatewayForm from "../components/superAdmin/pages/AddCity";
import TestimonialForm from "../components/superAdmin/pages/TestimonialForm";
import Inventoryform from "../components/superAdmin/pages/Inventoryform";
import Coustmer from "../components/superAdmin/pages/Coustmer";
//Afsana's imports
import CancelledOrder from '../components/superAdmin/pages/CancelledOrder';
import CancelledOrderPreview from '../components/superAdmin/pages/CancelledOrderPreview';
import Offers from '../components/superAdmin/pages/Offers';
import CompleteOrders from '../components/superAdmin/pages/CompleteOrders'
 import CompleteOrdersPreview from '../components/superAdmin/pages/CompleteOrdersPreview'

const AdminLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />; //No layout applied here
  }
  const isHiddenPage = ['/', '/signup'].includes(location.pathname);
  return (
    <div className="flex ">
      {/* Sidebar */}
      {!isHiddenPage && <Sidebar />}

      {/* Main Content */}
      <div className="flex-grow ">
        {/* Header */}
        {!isHiddenPage && <Header />}

        {/* Admin Routes */}
        <div className="p-5 bg-[#EBF2F1] min-h-screen">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/city" element={<City />} />
            <Route path="/addcity" element={<AddCity />} />
            <Route path="/services" element={<Services />} />
            <Route path="/addservice" element={<AddService />} />
            <Route path="/product" element={<Product />} />
            <Route path="/timeslot" element={<TimeSlotAndDate />} />
            <Route path="/product" element={<AddProduct />} />
            <Route path="/services" element={<AddServices />} />
            <Route path="/time-slot" element={<AddTimeSlot />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/pending-orders" element={<PendingOrders />} />
            <Route path="/send-notification" element={<SendNotification />} />
            <Route path="/serviceEngineer" element={<ServiceEngineer />} />
            <Route path="/serviceEngineer1" element={<ServiceEngineer1 />} />
            <Route path="/serviceEngineer2" element={<ServiceEngineer2 />} />
            <Route path="/technicianMonitoring" element={<TechnicianMonitoring />} />
            <Route path="/technicianActivity" element={<TechnicianActivity />} />
            <Route path="/pendingServices" element={<PendingServices />} />
            <Route path="/viewDetail" element={<ViewDetail />} />
            <Route path="/technicianProfileEdit" element={<TechnicianProfileEdit />} />
            <Route path="/technicianActivity/realTimeActivity" element={<RealTimeActivity />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/Banners" element={<Banner />} />
            <Route path="/customers" element={<Coustmer />} />
            <Route path="/Inventory Management" element={<InventoryManagement />} />
            <Route path="/Payment Gateway" element={<PaymentGateway />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/Inventoryform" element={<Inventoryform />} />
            <Route path="/PaymentGatewayForm" element={<PaymentGatewayForm />} />
            <Route path="/TestimonialForm" element={<TestimonialForm />} />
            <Route path="/CompleteOrders" element={<CompleteOrders />} />
            <Route path="/CompleteOrdersPreview" element={<CompleteOrdersPreview />} />
            <Route path="/CancelledOrder" element={<CancelledOrder />} />
            <Route path="/CancelledOrderPreview" element={<CancelledOrderPreview />} />
            <Route path="/Offers" element={<Offers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
