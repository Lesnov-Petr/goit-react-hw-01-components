import { createUseStyles } from 'react-jss';
import './History.scss';

const useStyle = createUseStyles({
  tablet: {
    backgroundColor: '#30d5c8',
    color: 'white',
  },
  cell: {
    padding: [10, 30, 10, 30],
  },
});

const classTablet = idx => {
  const classTablet = idx % 2 ? 'white' : 'black';
  return classTablet;
};

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
        {transations.map(({ type, amount, currency, id }, idx) => (
          <tr key={id} className={classTablet(idx)}>
            <td className={classes.cell}>{type}</td>
            <td className={classes.cell}>{amount}</td>
            <td className={classes.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
