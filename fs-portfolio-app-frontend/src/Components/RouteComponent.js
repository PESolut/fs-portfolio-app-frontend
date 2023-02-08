import { Routes, Route, Navigate } from "react-router-dom"
// import all pages here
import Home from "../Pages/Home";
import Chat from "../Pages/Chat";
import About from "../Pages/About";
import Message from "../Pages/Message";
import FourOFour from "../Pages/Four0Four";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:id" element={<Message />} />
            <Route path="/about" element={<About />} />
            <Route path="not-found" element={<FourOFour />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
    );
};

export default RouteComponent;