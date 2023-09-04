import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { getInitState } from '../helpers/getInitState.ts';
import { IUserFormData, IUsersContext, IUser } from './types.ts';
import { generateId } from '../helpers/generateId.ts';

const initialState: IUser[] = [
  {
    id: 'id_1693843360731',
    name: 'sadsad asdsa',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843362579',
    name: 'dsad asdasd',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843364390',
    name: 'dsadasdsad assa',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843380081',
    name: 'dsadsad sadas',
    age: 33,
    subscription: 'Subscribed',
    isEmployed: true,
  },
  {
    id: 'id_1693843402960',
    name: 'das dasdas',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843404428',
    name: 'dsad asd',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843405620',
    name: 'dsad asdas',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843406972',
    name: 'dsa dasdas',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843408200',
    name: 'dsa dasd as',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843409413',
    name: 'dsa dasd as',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843411491',
    name: 'd sad asd ',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843413173',
    name: ' dsad as ',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843414375',
    name: 'd sad asd as',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843415743',
    name: 'd sad as ',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843418874',
    name: 'dsa as as',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843420684',
    name: 'd sa as as',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843421864',
    name: 'd sa sa as',
    age: 18,
    subscription: 'Not subscribed',
    isEmployed: false,
  },
  {
    id: 'id_1693843422984',
    name: ' dsa dasd ',
    age: 18,
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
