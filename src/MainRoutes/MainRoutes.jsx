import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CatsPage from "../pages/CatsPage/CatsPage";
import FoxPage from "../pages/FoxPages/FoxPage";


const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='cats' element={<CatsPage />} />
                <Route path='foxs' element={<FoxPage />} />
            </Routes>
        </div>
    );
};

export default MainRoutes;