import FriendItem from "../FriendItem/FriendItem";
import PropTypes from "prop-types";

const FriendList = ({ friendList }) => {
  return (
    <section className="section">
      <ul className="friendList">
        {friendList.map((friend) => (
          <FriendItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </section>
  );
};

FriendList.protoType = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
