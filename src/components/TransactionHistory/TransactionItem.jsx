import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  cell: {
    padding: [10, 30, 10, 30],
  },
});

const classTable = (idx) => {
  const classTable = idx % 2 ? "white" : "black";
  return classTable;
};

const TransactionItem = ({ transation: { type, amount, currency }, idx }) => {
  const classes = useStyles();

  return (
    <tr className={classTable(idx)}>
      <td className={classes.cell}>{type}</td>
      <td className={classes.cell}>{amount}</td>
      <td className={classes.cell}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  idx: PropTypes.number.isRequired,
  transation: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionItem;
