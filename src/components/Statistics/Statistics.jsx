import style from './Statistics.style.module.css';
import { getRandomColor } from 'random-color';
const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={style.item}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
