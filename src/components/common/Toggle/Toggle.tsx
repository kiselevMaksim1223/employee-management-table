import { FC, useContext } from 'react';
import { ThemeContext } from '../../../providers/theme/ThemeProvider.tsx';
import s from './Toggle.module.scss';

const Toggle: FC = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={s.toggleSwitch}>
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className={s.switch} />
        Mode
      </label>
    </div>
  );
};

export default Toggle;
