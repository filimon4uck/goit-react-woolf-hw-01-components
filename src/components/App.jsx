import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import appStyle from './App.style.module.css';
export const App = () => {
  return (
    <div className={appStyle.container} style={appStyle}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title={'Upload stats'} stats={data}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
