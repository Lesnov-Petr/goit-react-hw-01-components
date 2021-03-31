import { createUseStyles } from 'react-jss';
import './Friend.scss';

const useStyles = createUseStyles({
  itemFriend: {
    display: 'flex',
    alignItems: 'center',
  },
  friendList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  avatar: {
    width: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});

const status = online => {
  const status = ['status'];
  if (online) {
    status.push('isOnline');
    return status.join(' ');
  } else {
    status.push('isOffline');
    return status.join(' ');
  }
};

const FriendItem = ({ friendList }) => {
  const classes = useStyles();

  return (
    <ul className={classes.friendList}>
      {friendList.map(friend => (
        <li className={classes.itemFriend} key={friend.id}>
          <p className={status(friend.isOnline)}> </p>
          <img
            className={classes.avatar}
            src={friend.avatar}
            alt={friend.name}
          />
          <span>{friend.name}</span>
        </li>
      ))}
    </ul>
  );
};
export default FriendItem;
