import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCity from "../components/superAdmin/pages/AddCity";
import AddProduct from "../components/superAdmin/pages/AddProduct";
import AddServices from "../components/superAdmin/pages/AddServices";
import Banner from "../components/superAdmin/pages/Banner";
import AddTimeSlot from "../components/superAdmin/pages/AddTimeSlot";
import Header from "../components/superAdmin/header/Header";
import Sidebar from "../components/superAdmin/sidebar/Sidebar";
import ServiceEngineer from '../components/ServiceEngineerDir/ServiceEngineer'
import ServiceEngineer1 from '../components/ServiceEngineerDir/ServiceEngineer1'
import ServiceEngineer2 from '../components/ServiceEngineerDir/ServiceEngineer2'
import TechnicianMonitoring from '../components/ServiceEngineerDir/TechnicianMonitoring'
import TechnicianActivity from '../components/ServiceEngineerDir/TechnicianActivity'
import PendingServices from '../components/ServiceEngineerDir/PendingServices'
import ViewDetail from '../components/ServiceEngineerDir/ViewDetail'
import TechnicianProfileEdit from '../components/ServiceEngineerDir/TechnicianProfileEdit'
import RealTimeActivity from '../components/ServiceEngineerDir/RealTimeActivity'

const Dashboard = () => <h1>Dashboard</h1>

const AdminLayout = () => {
  return (
    <div className="flex ">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-grow ">
      {/* Header */}
      <Header />

      {/* Admin Routes */}
     <div className="p-5 bg-[#EBF2F1] min-h-screen">
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/city" element={<AddCity />} />
        <Route path="/product" element={<AddProduct />} />
        <Route path="/services" element={<AddServices />} />
        <Route path="/time-slot" element={<AddTimeSlot />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/serviceEngineer" element={<ServiceEngineer/>} />
        <Route path="/serviceEngineer1" element={<ServiceEngineer1/>} />
        <Route path="/serviceEngineer2" element={<ServiceEngineer2/>} />
        <Route path="/technicianMonitoring" element={<TechnicianMonitoring/>} />
        <Route path="/technicianActivity" element={<TechnicianActivity/>} />
        <Route path="/pendingServices" element={<PendingServices/>} />
        <Route path="/viewDetail" element={<ViewDetail/>} />
        <Route path="/technicianProfileEdit" element={<TechnicianProfileEdit/>} />
        <Route path="/technicianActivity/realTimeActivity" element={<RealTimeActivity/>} />
      </Routes>
     </div>
    </div>
  </div>
  );
};

export default AdminLayout;
