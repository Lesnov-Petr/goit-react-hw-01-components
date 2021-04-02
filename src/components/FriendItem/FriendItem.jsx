import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import "./Friend.scss";

const useStyles = createUseStyles({
  itemFriend: {
    display: "flex",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});

const status = (online) => {
  const status = ["status"];
  if (online) {
    status.push("isOnline");
    return status.join(" ");
  } else {
    status.push("isOffline");
    return status.join(" ");
  }
};

const FriendItem = ({ friend: { isOnline, avatar, name } }) => {
  const classes = useStyles();

  return (
    <>
      <li className={classes.itemFriend}>
        <p className={status(isOnline)}> </p>
        <img className={classes.avatar} src={avatar} alt={name} />
        <span>{name}</span>
      </li>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
export default FriendItem;
