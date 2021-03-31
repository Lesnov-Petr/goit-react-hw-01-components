import { createUseStyles } from 'react-jss';

const colors = ['#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const useStyle = createUseStyles({
  item: {
    padding: 5,
    '&:last-child': { marginRight: 0 },
  },
  'stat-list': {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  label: { display: 'block' },
});

const StatisticItem = ({ statList }) => {
  const classes = useStyle();
  return (
    <ul className={classes['stat-list']}>
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
    </ul>
  );
};

export default StatisticItem;
