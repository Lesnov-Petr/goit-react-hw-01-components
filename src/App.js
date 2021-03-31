import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friendList from './json/friendList.json';
import transations from './json/transations.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Friend from './components/Friend/Friend';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <section className="account">
        <Profile
          name={user.name}
          avatar={user.avatar}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics statList={statisticalData} title="Upload stats" />
        <Friend friendList={friendList} />
      </section>
      <section className="content">
        <TransactionHistory transations={transations} />
      </section>
    </div>
  );
}

export default App;
