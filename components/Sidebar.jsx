/** @format */
"use client";

import { useState } from "react";


import {
    ShoppingCart,
    LayoutDashboard,
    UsersRound,
    Settings,
    ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import { Nav } from "./ui/nav_dash";

export default function SideNavbar({ }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
            {!mobileWidth && (
                <div className="absolute right-[-20px] top-7">
                    <Button
                        onClick={toggleSidebar}
                        variant="secondary"
                        className=" rounded-full p-2"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                        href: "/"
                    },
                    {
                        title: "Users",
                        href: "/users",
                        icon: UsersRound,
                        variant: "ghost",
                        href: "/users"
                    },
                    // {
                    //     title: "Ordrs",
                    //     href: "/orders",
                    //     icon: ShoppingCart,
                    //     variant: "ghost",
                    //     href: "/orders"
                    // },
                    {
                        title: "Settings",
                        href: "/settings",
                        icon: Settings,
                        variant: "ghost",
                        href: "/settings"
                    }
                ]}
            />
        </div>
    );
}