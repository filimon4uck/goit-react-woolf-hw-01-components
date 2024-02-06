import style from './FriendList.style.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={style['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          ></FriendListItem>
        );
      })}
    </ul>
  );
};

export default FriendList;
