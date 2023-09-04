import s from './List.module.scss';
import styles from '../Layout/Layout.module.scss';
import { useContext } from 'react';
import { UsersContext } from '../../providers/users/UsersProvider.tsx';
const List = () => {
  const { usersList, setSelectedUserId, selectedUserId } =
    useContext(UsersContext);

  return (
    <div className={`${s.wrapper} ${styles.wrapperList}`}>
      <div className={s.tableWrapper}>
        <table className={`${s.table} ${styles.table}`}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Subscription</th>
              <th>Employment</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr
                key={user.id}
                className={`${s.row} ${styles.row} ${
                  user.id === selectedUserId ? `${s.active} ` : ''
                }`}
                onClick={() => setSelectedUserId(user.id)}
              >
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.subscription}</td>
                <td>{user.isEmployed ? 'Employed' : 'Unemployed'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
