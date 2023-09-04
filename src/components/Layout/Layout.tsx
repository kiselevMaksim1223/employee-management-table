import { FC, useContext } from 'react';
import List from '../List/List.tsx';
import UserPanel from '../UserPanel/UserPanel.tsx';
import s from './Layout.module.scss';
import { ThemeContext } from '../../providers/theme/ThemeProvider.tsx';

const Layout: FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={s.container}>
      <div className={`${s.wrapper} ${theme === 'light' ? s.light : ''}`}>
        <UserPanel />
        <List />
      </div>
    </div>
  );
};

export default Layout;
