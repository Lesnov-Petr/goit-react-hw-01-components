import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

const Friend = ({ friendList }) => {
  return (
    <section className="section">
      <FriendItem friendList={friendList} />
    </section>
  );
};

Friend.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Friend;
