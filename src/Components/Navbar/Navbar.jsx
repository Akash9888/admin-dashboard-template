import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmailIcon from "@mui/icons-material/Email";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search....." />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        <div className="counter">EN</div>
                    </div>
                    <div className="item">
                        <DarkModeIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">13</div>
                    </div>

                    <div className="item">
                        <EmailIcon className="icon" />
                        <div className="counter">4</div>
                    </div>
                    <div className="item">
                        <img
                            className="avatar"
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
