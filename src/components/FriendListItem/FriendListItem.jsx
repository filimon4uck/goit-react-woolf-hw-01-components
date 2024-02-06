import style from './FriendListItem.style.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={`${style.status} ${
          isOnline ? style.active : style.unactive
        }`}
      ></span>
      <img className={style.avatar} src={avatar} alt={name} />
      <p className={style.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
