import Pattern from "../../assets/img/Pattern.png";
import PatternDark from "../../assets/img/Pattern2.png";
import RightDarkArrow from "../../assets/img/arrow_right_dark.png";

import "./Roles.css";

const Roles = () => {
  const rolesData = [
    {
      title: "Content Nodes",
      description:
        "Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN",
      buttonText: "Deploy",
    },
    {
      title: "Orchestrators",
      description:
        "Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance",
      buttonTag: "Coming soon",
    },
    {
      title: "Validators",
      description:
        "Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.",
      buttonTag: "Coming soon",
    },
  ];

  return (
    <section className="roles">
      {rolesData.map((role, index) => (
        <div
          className={`role ${role.title.toLowerCase().replace(" ", "-")}`}
          key={index}
          style={{ position: "relative" }}
        >
          <h3
            className={`text-title ${role.title
              .toLowerCase()
              .replace(" ", "-")}-text`}
          >
            {role.title}
          </h3>
          <p
            className={`text-para ${role.title
              .toLowerCase()
              .replace(" ", "-")}-text`}
          >
            {role.description}
          </p>
          <div className="text-end">
            {role.buttonText ? (
              <button className="btn-text">
                {role.buttonText}{" "}
                <span>
                  <img src={RightDarkArrow} alt="dark arrow" />
                </span>
              </button>
            ) : null}
            {role.buttonTag && (
              <button
                className={`btn-tag ${role.title
                  .toLowerCase()
                  .replace(" ", "-")}-btntag`}
              >
                {role.buttonTag}
              </button>
            )}
          </div>
          <div style={{ position: "absolute", bottom: "0", left: "0" }}>
            {role.title === "Validators" ? (
              <img src={PatternDark} alt="dark_dot" />
            ) : (
              <img src={Pattern} alt="light_dot" />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Roles;
