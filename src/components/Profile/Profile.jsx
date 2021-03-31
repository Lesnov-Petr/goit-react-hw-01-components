import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import PropTypes from "prop-types";
import StateList from "./StateList";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  profile: {
    width: "200px",
  },

  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#6f6df7",
  },

  label: { display: "block" },

  avatar: { display: "block", width: "100%", borderRadius: "50%" },

  tag: {
    margin: 0,
    color: "#ccc8c8",
  },

  location: {
    color: "#ccc8c8",
  },
});

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
  const stylesProfile = useStyles();

  return (
    <div className={stylesProfile.profile}>
      <CardActionArea>
        <Card>
          <div className={stylesProfile.description}>
            <img
              src={avatar}
              alt="Аватар пользователя"
              className={stylesProfile.avatar}
            />
            <p className="name">
              <b>{name}</b>
            </p>
            <p className={stylesProfile.tag}>@{tag}</p>
            <p className={stylesProfile.location}>{location}</p>
          </div>
          <StateList followers={followers} views={views} likes={likes} />
        </Card>
      </CardActionArea>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
