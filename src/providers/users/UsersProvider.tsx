import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { getInitState } from '../helpers/getInitState.ts';
import { IUserFormData, IUsersContext, IUser } from './types.ts';
import { generateId } from '../helpers/generateId.ts';

const initialState: IUser[] = [
  {
    id: generateId(),
    name: 'qweqr qwwe',
    age: 33,
    subscription: 'Other',
    isEmployed: true,
  },
  {
    id: generateId(),
    name: 'cxzc xcz',
    age: 33,
    subscription: 'Subscribed',
    isEmployed: true,
  },
  {
    id: generateId(),
    name: 'ghfgh gfhgf',
    age: 33,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
];

export const UsersContext = createContext<IUsersContext>({
  usersList: initialState,
  selectedUserId: '',
  setSelectedUserId: () => {},
  deleteUser: () => {},
  addUser: () => {},
  changeMod: false,
  setChangeMod: () => {},
  selectedUser: undefined,
  changeUser: () => {},
});

interface IUserProvider {
  children: ReactNode;
}

export const UsersContextProvider: FC<IUserProvider> = ({ children }) => {
  const [usersList, setUsersList] = useState<IUser[]>(
    getInitState(initialState)
  );

  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [changeMod, setChangeMod] = useState<boolean>(false);
  const selectedUser = usersList.find((u) => u.id === selectedUserId);

  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(usersList));
  }, [usersList]);

  const addUser = (User: IUserFormData) => {
    const userId = generateId();
    const newUser: IUser = {
      id: userId,
      name: User.name,
      age: User.age,
      subscription: User.subscription,
      isEmployed: User.isEmployed,
    };

    setUsersList((prevState) => {
      return [...prevState, newUser];
    });
  };

  const deleteUser = (userId: string) => {
    setUsersList((prevState) => prevState.filter((u) => u.id !== userId));
  };

  const changeUser = (User: IUserFormData) => {
    setUsersList((prevState) =>
      prevState.map((u) =>
        u.id === selectedUserId
          ? {
              ...u,
              name: User.name,
              age: User.age,
              subscription: User.subscription,
              isEmployed: User.isEmployed,
            }
          : u
      )
    );
  };

  const contextValue: IUsersContext = {
    usersList,
    addUser,
    deleteUser,
    selectedUserId,
    setSelectedUserId,
    changeMod,
    setChangeMod,
    selectedUser,
    changeUser,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};
