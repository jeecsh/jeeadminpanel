import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="tittle">Total Revenue</h1>
        <MoreVertOutlinedIcon fontsize="small" />
      </div>
      <div className="bottom">
        <div className="featuerchart">
          {" "}
          <CircularProgressbar
            value={70}
            text={`70%`}
            strokeWidth={5}
           
          />
        </div>
        <p className="tittle"> tottal sales made today</p>
        <p className="amount"> 420$</p>
        <p className="desc">
          previous processing. last payments may not be included.{" "}
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemtittle">last update</div>
            <div className="itemresult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultamount">12.8k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtittle">last week</div>
            <div className="itemresult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">12.8k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtittle">last month</div>
            <div className="itemresult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">12.8k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
