import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import s from './Button.module.scss';
import styles from '../../Layout/Layout.module.scss';

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  onClick?: () => void;
}
const Button: FC<IButton> = ({ children, onClick, ...restProps }) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${s.button} ${styles.button}`}
      onClick={onClickHandler}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
