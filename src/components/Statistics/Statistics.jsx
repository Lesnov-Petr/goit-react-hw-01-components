import StatisticItem from "../StatisticItem/StatisticItem";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  statistics: {
    // display: "flex",
    // flexDirection: "column",
  },
  "stat-list": {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  title: { display: "flex", justifyContent: "center" },
});

const Statistics = ({ statList, title }) => {
  const classes = useStyle();
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes["stat-list"]}>
        <StatisticItem statList={statList} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
