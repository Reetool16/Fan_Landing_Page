import PlusIcon from "../../assets/img/plus_icon.png";

import "./Statistics.css";

const Statistics = ({ stats, statsText, statsDays }) => {
  return (
    <div className="stat">
      <div>
        <p>
          {statsText} <span>{statsDays}</span>
        </p>
        <h2>{stats}</h2>
      </div>
      <div>
        <img src={PlusIcon} alt="" />
      </div>
    </div>
  );
};

export default Statistics;
