import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  stats: {
    display: 'flex',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    listStyle: 'none',
    backgroundColor: '#6f6df7',
  },
  stats__stats: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
    '&:last-child': { marginRight: 0 },
  },
});

const StateList = ({ followers, views, likes }) => {
  const stylesProfile = useStyles();
  return (
    <ul className={stylesProfile.stats}>
      <li className={stylesProfile.stats__stats}>
        <span className={stylesProfile.label}>Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li className={stylesProfile.stats__stats}>
        <span className={stylesProfile.label}>Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li className={stylesProfile.stats__stats}>
        <span className={stylesProfile.label}>Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
};

StateList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default StateList;
