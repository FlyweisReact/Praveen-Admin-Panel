import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./AdminPanel/components/Login/Login";
import { useEffect } from "react";
import MainDashBord from "./AdminPanel/components/Dashbord/MainHome";
import UserData from "./AdminPanel/components/UsersData/UserData";
import ViewUser from "./AdminPanel/components/UsersData/ViewUser";
import UserBooking from "./AdminPanel/components/UsersData/UserBooking";
import GetVehicle from "./AdminPanel/components/Vehicle/GetVehicle";
import UpdateVehicle from "./AdminPanel/components/Vehicle/UpdateVehicle";
import AddVehicle from "./AdminPanel/components/Vehicle/AddVehicle";
import Company from "./AdminPanel/components/CompanyCut/Company";
import Coupan from "./AdminPanel/components/Coupan/Coupan";
import GetPrivacy from "./AdminPanel/components/Privacy/GetPrivacy";
import Info from "./AdminPanel/components/Support/Info";
import Term from "./AdminPanel/components/Terms/Term";
import AddCoupan from "./AdminPanel/components/Coupan/AddCoupan";
import Notify from "./AdminPanel/components/Notify/Notify";
import NotifyDriver from "./AdminPanel/components/Notify/NotifyDriver";
import Driver from "./AdminPanel/components/Driver";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<MainDashBord />} />
        <Route path="/user" element={<UserData />} />
        <Route path="/veiwUser/:id" element={<ViewUser />} />
        <Route path="/coupan/:id" element={<Coupan />} />
        <Route path="/addCoupan/:id" element={<AddCoupan />} />
        <Route path="/vehicle" element={<GetVehicle />} />
        <Route path="/updateVehicle/:id" element={<UpdateVehicle />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/viewBooking/:id" element={<UserBooking />} />
        <Route path="/company" element={<Company />} />
        <Route path="/privacy" element={<GetPrivacy />} />
        <Route path="/info" element={<Info />} />
        <Route path="/term" element={<Term />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/notifyD" element={<NotifyDriver />} />
        <Route path="/Drivers" element={<Driver />} />
        


        
      </Routes>
    </>
  );
}

export default App;
