import { Routes, Route, Navigate, Outlet, } from "react-router-dom"
// import all pages here
import { BrowserRouter as Router } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from '../App';


import Home from "../Pages/Home";
import Chat from "../Pages/Chat";
import About from "../Pages/About";
import Message from "../Pages/Message";
import FourOFour from "../Pages/Four0Four";
import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Register";
import Login from "../Pages/Login";



const PrivateRoutes = () => {
    return <>{localStorage.getItem('isAuth') ? <Outlet /> : <Navigate to='/login' />}</>
}


const RestrictedRoutes = (LS) => {
    return <>{!localStorage.getItem('isAuth') ? <Outlet /> : <Navigate to='/dashboard' />}</>
}




const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:id" element={<Message />} />
            <Route path="/about" element={<About />} />
            <Route path="not-found" element={<FourOFour />} />
            <Route path="*" element={<Navigate to="/not-found" />} />

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard /> } />
            </Route>
            
            <Route element={<RestrictedRoutes />}>
                <Route path="/register" element={<Register /> } />
                <Route path="/login" element={<Login /> } />
            </Route>



        </Routes>
    );
};

export default RouteComponent;