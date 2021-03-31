import { Fragment } from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const colors = ["#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const useStyle = createUseStyles({
  item: {
    padding: 5,
    "&:last-child": { marginRight: 0 },
  },

  label: { display: "block" },
});

const StatisticItem = ({ statList }) => {
  const classes = useStyle();
  return (
    <Fragment>
      {statList.map(({ id, label, percentage }, idx) => (
        <li
          className={classes.item}
          key={id}
          style={{
            backgroundColor: colors[idx],
          }}
        >
          <span className={classes.label}>{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </Fragment>
  );
};

StatisticItem.propTypes = {
  statList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default StatisticItem;
