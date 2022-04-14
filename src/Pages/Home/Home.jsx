import Chart from "../../Components/Charts/Chart/Chart";
import ProgressBar from "../../Components/Charts/ProgressBar/ProgressBar";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TableData from "../../Components/Table/TableData";

import Widgets from "../../Components/Widgets/Widgets";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className="widgets">
                    <Widgets type="users" />
                    <Widgets type="order" />
                    <Widgets type="earning" />
                    <Widgets type="balance" />
                </div>
                <div className="chart-progress">
                    <ProgressBar />
                    <Chart />
                </div>
                <div className="table-container">
                    <div className="title">Recent Transactions</div>
                    <TableData />
                </div>
            </div>
        </div>
    );
};

export default Home;
