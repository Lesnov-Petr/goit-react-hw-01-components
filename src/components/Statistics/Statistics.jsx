import StatisticItem from "../StatisticItem/StatisticItem";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
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
        {statList.map((stat, idx) => (
          <StatisticItem stat={stat} idx={idx} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
