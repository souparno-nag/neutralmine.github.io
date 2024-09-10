// components/Layout.js
import SideNavbar from '@/components/Sidebar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex gap-8  min-h-screen w-full">
            <div className="border"><SideNavbar /></div>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
