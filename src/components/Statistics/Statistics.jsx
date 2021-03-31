import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderColor: 'blueviolet',

  title: { display: 'flex', justifyContent: 'center' },
});

const Statistics = ({ statList, title }) => {
  const classes = useStyle();
  return (
    <section className={classes.statistics}>
      <h2 className={classes.title}>{title}</h2>
      <StatisticItem statList={statList} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
