import React from "react";
import "./widgets.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
const Widgets = ({ type }) => {
    let data;
    switch (type) {
        case "users":
            data = {
                type: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineOutlinedIcon
                        className="icon"
                        style={{
                            color: "green",
                            backgroundColor: "#80ed8d",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                type: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <AddShoppingCartOutlinedIcon
                        className="icon"
                        style={{
                            color: "FFF000",
                            backgroundColor: "#989564",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                type: "EARNINGS",
                isMoney: true,
                link: "See net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="icon"
                        style={{
                            color: "#E403F9",
                            backgroundColor: "#F1DCDC",
                        }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                type: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="icon"
                        style={{
                            color: "#0312FF",
                            backgroundColor: "#DCDEF4",
                        }}
                    />
                ),
            };
            break;
        default:
    }
    console.log(data);

    return (
        <div className="widget">
            <div className="lr left">
                <span className="title">{data?.type}</span>
                <span className="counter">{data?.isMoney ? "$ 788" : 788}</span>
                <span className="link">{data?.link}</span>
            </div>
            <div className="lr right">
                <div className="percentage negative">
                    <KeyboardArrowUpIcon />
                    +20%
                </div>

                {data?.icon}
            </div>
        </div>
    );
};

export default Widgets;
