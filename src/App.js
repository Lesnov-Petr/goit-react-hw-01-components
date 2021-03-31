import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./json/user.json";
import statisticalData from "./json/statistical-data.json";
import friendList from "./json/friendList.json";
import transations from "./json/transations.json";

function App() {
  return (
    <div className="App">
      <section className="account">
        <Profile
          name={user.name}
          avatar={user.avatar}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
        <Statistics statList={statisticalData} title="Upload stats" />
        <FriendList friendList={friendList} />
      </section>
      <section className="content">
        <TransactionHistory transations={transations} />
      </section>
    </div>
  );
}

export default App;
