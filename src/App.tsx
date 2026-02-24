
import React from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import CounterContainer from "./containers/CounterContainer";
import ErrorContainer from './containers/ErrorContainer';
import LoginContainer from './containers/LoginContainer';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeContainer />} >
                    <Route index element={null} />
                    <Route path="about" element={<AboutContainer />} />
                    <Route path="counters" element={<CounterContainer />} />
                    <Route path="login" element={<LoginContainer />} />
                </Route>
                <Route path="/404" element={<ErrorContainer />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    );
}


