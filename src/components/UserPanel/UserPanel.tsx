import s from './UserPanel.module.scss';
import styles from '../Layout/Layout.module.scss';
import AddUserForm from '../AddUserForm/AddUserForm.tsx';
import Button from '../common/Button/Button.tsx';
import { useContext } from 'react';
import { UsersContext } from '../../providers/users/UsersProvider.tsx';
import Toggle from '../common/Toggle/Toggle.tsx';

const UserPanel = () => {
  const { selectedUserId, deleteUser, setChangeMod, changeMod } =
    useContext(UsersContext);
  const onClickDeleteHandler = () => {
    deleteUser(selectedUserId);
  };

  const onClickChangeUserHandler = () => {
    setChangeMod(!changeMod);
  };

  return (
    <div className={`${s.wrapper} ${styles.wrapperYala}`}>
      <AddUserForm />
      <Toggle />
      <Button onClick={onClickChangeUserHandler}>Change</Button>
      <Button onClick={onClickDeleteHandler}>Delete</Button>
    </div>
  );
};

export default UserPanel;
