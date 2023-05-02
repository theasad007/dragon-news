import React from 'react';
import MenuBar from '../pages/Shared/MenuBar/MenuBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;