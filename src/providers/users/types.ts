import { ReactNode } from 'react';

export interface IUserProvider {
  children: ReactNode;
}

export type SubscriptionType = 'Subscribed' | 'Not subscribed' | 'Other';
export interface IUser {
  id: string;
  name: string;
  age: number;
  subscription: SubscriptionType;
  isEmployed: boolean;
}

export interface IUserFormData {
  name: string;
  age: number;
  subscription: SubscriptionType;
  isEmployed: boolean;
}

export interface IUsersContext {
  usersList: IUser[];
  selectedUserId: string;
  setSelectedUserId: (selectedUserId: string) => void;
  deleteUser: (userId: string) => void;
  addUser: (newUser: IUserFormData) => void;
  changeMod: boolean;
  setChangeMod: (changeMod: boolean) => void;
  selectedUser: IUser | undefined;
  changeUser: (changedUser: IUserFormData) => void;
}
