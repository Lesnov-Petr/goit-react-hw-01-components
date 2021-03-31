import PropTypes from "prop-types";
import FriendItem from "../FriendItem/FriendItem";

const FriendList = ({ friendList }) => {
  return (
    <section className="section">
      <ul className="friendList">
        <FriendItem friendList={friendList} />
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
