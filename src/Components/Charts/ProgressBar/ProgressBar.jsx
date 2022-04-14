import React from "react";
import "./progressBar.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "react-circular-progressbar/dist/styles.css";
const ProgressBar = () => {
    return (
        <div className="progressBar-container">
            <div className="top">
                <h2>Total Revenue</h2>
                <MoreVertOutlinedIcon />
            </div>
            <div className="bottom">
                <div className="progress">
                    <CircularProgressbar value={70} text={"70%"} />
                </div>
                <p className="title">Total sales today</p>
                <p className="amount">$ 420</p>
                <p className="desc">
                    Previous transaction processing . Last payment may not be
                    included
                </p>

                <div className="achivement">
                    <div className="target">
                        <div className="achiv-title">Target</div>
                        <div className="percentage negative">
                            <KeyboardArrowUpIcon />
                            $20.5K
                        </div>
                    </div>
                    <div className="week">
                        <div className="achiv-title"> Last week</div>

                        <div className="percentage positive">
                            <KeyboardArrowUpIcon />
                            $20K
                        </div>
                    </div>
                    <div className="month">
                        <div className="achiv-title">Last month</div>

                        <div className="percentage positive">
                            <KeyboardArrowUpIcon />
                            $1445K
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
