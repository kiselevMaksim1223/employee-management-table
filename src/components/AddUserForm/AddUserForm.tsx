import { FC, FormEvent, useContext, useEffect, useState } from 'react';
import {
  IUserFormData,
  SubscriptionType,
} from '../../providers/users/types.ts';
import { UsersContext } from '../../providers/users/UsersProvider.tsx';
import Checkbox from '../common/Checkbox/Checkbox.tsx';
import s from './AddUserForm.module.scss';
import styles from '../Layout/Layout.module.scss';
import Button from '../common/Button/Button.tsx';

const AddUserForm: FC = () => {
  const { addUser, changeMod, setChangeMod, selectedUser, changeUser } =
    useContext(UsersContext);

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(18);
  const [subscription, setSubscription] =
    useState<SubscriptionType>('Not subscribed');
  const [isEmployed, setIsEmployed] = useState<boolean>(false);

  useEffect(() => {
    if (selectedUser && changeMod) {
      setName(selectedUser.name);
      setAge(selectedUser.age);
      setSubscription(selectedUser.subscription);
      setIsEmployed(selectedUser.isEmployed);
    }

    if (!changeMod) {
      setName('');
      setAge(18);
      setSubscription('Not subscribed');
      setIsEmployed(false);
      setChangeMod(false);
    }
  }, [changeMod, selectedUser]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Пожалуйста, введите корректные данные.');
      return;
    }

    const userData: IUserFormData = {
      name,
      age: age as number,
      subscription,
      isEmployed,
    };

    if (changeMod) {
      changeUser(userData);
    } else addUser(userData);

    setName('');
    setAge(18);
    setSubscription('Not subscribed');
    setIsEmployed(false);
    setChangeMod(false);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div>
        <input
          className={`${s.input} ${s.name} ${styles.input}`}
          type="text"
          placeholder={'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          className={`${s.input} ${s.age} ${styles.input}`}
          type="number"
          placeholder={'Age'}
          min={18}
          value={age}
          onChange={(e) => setAge(+e.target.value)}
        />
      </div>
      <div>
        <select
          className={`${s.select} ${styles.select}`}
          value={subscription}
          onChange={(e) => setSubscription(e.target.value as SubscriptionType)}
        >
          <option value="Subscribed">Subscribed</option>
          <option value="Not subscribed">Not subscribed</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <Checkbox
          title="Employed"
          checked={isEmployed}
          onChange={() => setIsEmployed(!isEmployed)}
        />
      </div>
      <span className={`${s.changeMod} ${changeMod ? s.on : ''}`}>
        Change mod!
      </span>
      <Button type="submit">{changeMod ? 'Save' : 'Insert'}</Button>
    </form>
  );
};

export default AddUserForm;
