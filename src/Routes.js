import React from "react";
import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// eslint-disable-next-line import/no-anonymous-default-export
const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesDOM>
            <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
            </RoutesDOM>
        </BrowserRouter>
    );
}

export default Routes;