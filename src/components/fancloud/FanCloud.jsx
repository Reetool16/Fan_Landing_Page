import Roles from "../roles/Roles";

import Globe from "../../assets/img/globe.png";
import Ellipse2715 from "../../assets/img/Ellipse 2715.png";
import GlobeBorder from "../../assets/img/Subtract.png";
import Ellipse2712 from "../../assets/img/Ellipse 2712.png";
import Ellipse2718 from "../../assets/img/Ellipse 2718.png";
import Ellipse2716 from "../../assets/img/Ellipse 2716.png";
import Ellipse2717 from "../../assets/img/Ellipse 2717.png";
import Ellipse2713 from "../../assets/img/Ellipse 2713.png";
import Ellipse2714 from "../../assets/img/Ellipse 2714.png";
import Ellipse2719 from "../../assets/img/Ellipse 2719.png";
import EyesHeart from "../../assets/img/eyes_heart.png";
import Heart from "../../assets/img/Heart.png";
import Sunglass from "../../assets/img/sunglass.png";
import Ellipse2723 from "../../assets/img/Ellipse 2723.png";
import Ellipse2720 from "../../assets/img/Ellipse 2720.png";
import Ellipse2724 from "../../assets/img/Ellipse 2724.png";
import Ellipse2721 from "../../assets/img/Ellipse 2721.png";
import Ellipse2722 from "../../assets/img/Ellipse 2722.png";
import OrangeDot from "../../assets/img/orange_dot.png";
import GreenDot from "../../assets/img/green_dot.png";
import BlueDot from "../../assets/img/blue_dot.png";
import LightGreenDot from "../../assets/img/light_green_dot.png";
import PinkDot from "../../assets/img/pink_dot.png";

import "./FanCloud.css";

const FanCloud = () => {
  return (
    <section className="fancloud">
      <div className="container">
        <h2 className="fancloud_head">
          FanCloud CDN network revolutionizes video infrastructure with
          community-driven innovation
        </h2>
        <p className="fancloud_para">
          FanCloud pioneers a new era of connectivity with its decentralized
          content delivery network (dCDN), leveraging a global network of
          community-powered nodes. By harnessing a decentralized architecture,
          dCDN drastically reduces data transfer and compute costs while
          enhancing load time. Join FanCloud's dCDN network and experience the
          future of seamless, secure, and community-driven consumption.
        </p>

        <div className="globe-container">
          <div className="globe_border">
            <img src={GlobeBorder} alt="" />
          </div>
          <img src={Globe} alt="Globe" className="globe" />
          <div className="border-images">
            <div className="border-image" style={{ zIndex: "999" }}>
              <img src={Ellipse2715} alt="fan1" />
            </div>
            <div
              className="border-image"
              style={{ "--angle": "-70deg", bottom: "30%" }}
            >
              <img src={Ellipse2712} alt=" fan2" />
            </div>
            <div
              className="border-image"
              style={{ "--angle": "246deg", bottom: "47%", left: "33%" }}
            >
              <img src={Ellipse2718} alt=" fan3" />
            </div>
            <div
              className="border-image"
              style={{ "--angle": "305deg", bottom: "60%", left: "29%" }}
            >
              <img src={Ellipse2716} alt="fan4" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "360deg",
                bottom: "92%",
                transform:
                  "rotate(var(--angle)) translate(390px) rotate(calc(-1* var(--angle))",
              }}
            >
              <img src={Ellipse2717} alt="fan5" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "331deg",
                transform:
                  " rotate(var(--angle)) translate(664px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={Ellipse2713} alt=" fan6" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "346deg",
                transform:
                  " rotate(var(--angle)) translate(700px) rotate(calc(-1* var(--angle)))",
                zIndex: "999",
              }}
            >
              <img src={Ellipse2714} alt="fan7" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "357deg",
                transform:
                  " rotate(var(--angle)) translate(710px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={Ellipse2719} alt="fan8" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "289deg",
                transform:
                  " rotate(var(--angle)) translate(388px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={EyesHeart} alt="emoji1" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "322deg",
                transform:
                  " rotate(var(--angle)) translate(681px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={Heart} alt="emoji2" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "337deg",
                transform:
                  " rotate(var(--angle)) translate(724px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={Sunglass} alt="emoji3" />
            </div>
            <div
              className="border-image"
              style={{
                left: "15%",
              }}
            >
              <img src={Ellipse2723} alt="fan9" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "346deg",
                transform:
                  " rotate(var(--angle)) translate(741px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={Ellipse2720} alt="fan10" />
            </div>
            <div
              className="border-image"
              style={{
                left: "12%",
                bottom: "9%",
              }}
            >
              <img src={Ellipse2724} alt="fan11" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "342deg",
                transform:
                  " rotate(var(--angle)) translate(790px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={Ellipse2721} alt="fan12" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "348deg",
                transform:
                  " rotate(var(--angle)) translate(800px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={Ellipse2722} alt="fan13" />
            </div>
            <div
              className="border-image"
              style={{
                left: "18%",
                bottom: "23.5%",
              }}
            >
              <img src={OrangeDot} alt="Dot1" />
            </div>
            <div
              className="border-image"
              style={{
                left: "18%",
                bottom: "10.5%",
              }}
            >
              <img src={GreenDot} alt="Dot2" />
            </div>
            <div
              className="border-image"
              style={{ "--angle": "-68deg", bottom: "20%" }}
            >
              <img src={BlueDot} alt="" />
            </div>
            <div
              className="border-image"
              style={{ "--angle": "296deg", bottom: "71%", left: "40%" }}
            >
              <img src={LightGreenDot} alt="Dot3" />
            </div>
            <div
              className="border-image"
              style={{
                "--angle": "349.7deg",
                transform:
                  " rotate(var(--angle)) translate(749px) rotate(calc(-1* var(--angle)))",
              }}
            >
              <img src={PinkDot} alt="Dot4" />
            </div>
          </div>
        </div>
      </div>
      <Roles />
    </section>
  );
};

export default FanCloud;
