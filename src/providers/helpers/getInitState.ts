import { IUser } from '../users/UsersProvider.tsx';

export const getInitState = (initialState: User[]): User[] => {
  const userList = localStorage.getItem('usersList');

  return userList ? JSON.parse(userList) : initialState;
};
