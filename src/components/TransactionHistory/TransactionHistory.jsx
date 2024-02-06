import style from './TransactionHistory.style.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={style['transaction-history']}>
      <thead>
        <tr>
          <th className={style.head}>Type</th>
          <th className={style.head}>Amount</th>
          <th className={style.head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={style['table-row']}>
              <td className={style['table-data']}>{type}</td>
              <td className={style['table-data']}>{amount}</td>
              <td className={style['table-data']}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
