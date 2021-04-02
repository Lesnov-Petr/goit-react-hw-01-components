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

const StatisticItem = ({ stat: { label, percentage }, idx }) => {
  const classes = useStyle();

  return (
    <>
      <li
        className={classes.item}
        style={{
          backgroundColor: colors[idx],
        }}
      >
        <span className={classes.label}>{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    </>
  );
};

StatisticItem.propTypes = {
  idx: PropTypes.number.isRequired,
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default StatisticItem;
