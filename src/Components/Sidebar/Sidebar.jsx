import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { ExitToApp } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="start">
                <span className="logo">AdminPanel</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <GroupIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <AcUnitIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="end">
                <div className="color-options"></div>
                <div className="color-options"></div>
            </div>
        </div>
    );
};

export default Sidebar;
