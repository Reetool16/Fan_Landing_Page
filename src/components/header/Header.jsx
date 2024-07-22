import Statistics from "../stats/Statistics";

import Header1 from "../../assets/img/header_1.png";
import Header2 from "../../assets/img/header_2.png";
import Header3 from "../../assets/img/header_3.png";
import Header4 from "../../assets/img/header_4.png";
import Header5 from "../../assets/img/header_5.png";
import Header6 from "../../assets/img/header_6.png";
import Header7 from "../../assets/img/header_7.png";
import Header8 from "../../assets/img/header_8.png";
import Header9 from "../../assets/img/header_9.png";
import BoxShadow from "../../assets/img/header_shadow.png";
import RightArrow from "../../assets/img/arrow_right.png";

import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <header className="container">
        <h1>EMPOWERING THE DIGITAL ERA: DECENTRALIZING ENTERTAINMENT</h1>
        <p className="header_txt">
          Join the world's first DcPIN: Revolutionizing Content Streaming with
          faster, safer, and cheaper access
        </p>
        <button>
          Coming Soon
          <span>
            <img src={RightArrow} alt="arrow" />
          </span>
        </button>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "-54px" }}>
            <img src={Header1} alt="header1" />
          </div>
          <div
            style={{ position: "absolute", left: "350px", bottom: "-132px" }}
          >
            <img src={Header2} alt=" header2" />
          </div>
          <div
            style={{
              position: "absolute",
              right: "50%",
              left: "39%",
              top: "23px",
            }}
          >
            <img src={Header3} alt="  1" />
          </div>
          <div style={{ position: "absolute", right: "23%", top: "190px" }}>
            <img src={Header4} alt="  2" />
          </div>
          <div style={{ position: "absolute", right: "15%" }}>
            <img src={Header5} alt="  3" />
          </div>
          <div style={{ position: "absolute", right: "-20px", top: "156px" }}>
            <img src={Header6} alt="  4" />
          </div>
          <div style={{ position: "absolute", top: "-16px", left: "29%" }}>
            <img src={Header7} alt="  5" />
          </div>
          <div style={{ position: "absolute", top: "190px", right: "32%" }}>
            <img src={Header8} alt="  6" height={"37px"} />
          </div>
          <div style={{ position: "absolute", top: "210px", left: "40%" }}>
            <img src={Header9} alt="  7" />
          </div>
        </div>
        <div className="statistics">
          <div style={{ position: "relative" }}>
            <Statistics statsText={"No. of Node Operators"} stats={"2000"} />
            <img
              src={BoxShadow}
              alt=""
              style={{ position: "absolute", top: "0px", left: "0px" }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <Statistics
              statsText={"Data Transferred in TB"}
              stats={"12000"}
              statsDays={"(last 30 days)"}
            />
            <img
              src={BoxShadow}
              alt=""
              style={{ position: "absolute", top: "0px", left: "0px" }}
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
