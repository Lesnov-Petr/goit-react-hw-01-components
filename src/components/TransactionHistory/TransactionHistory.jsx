import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import "./History.scss";

const useStyle = createUseStyles({
  tablet: {
    backgroundColor: "#30d5c8",
    color: "white",
  },
});

const TransactionHistory = ({ transations }) => {
  const classes = useStyle();
  return (
    <table className="transaction-history">
      <thead>
        <tr className={classes.tablet}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transations.map((transation, idx) => (
          <TransactionItem
            key={transation.id}
            transation={transation}
            idx={idx}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
