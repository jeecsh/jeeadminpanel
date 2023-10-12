import "./home.scss";
import Navbar from "./../../components/navbar/Navbar";
import Sidebar from "./../../components/sidebar/Sidebar";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/chart/Chart";
import Tabel from "../../components/tabel/Tabel";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listcontainer">
          <div className="titttle">Latest transactions</div>
          <Tabel />
        </div>
      </div>
    </div>
  );
};

export default Home;
