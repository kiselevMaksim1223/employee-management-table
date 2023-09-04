import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import s from './Checkbox.module.scss';
import { generateId } from '../../../providers/helpers/generateId.ts';
interface ICheckbox extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title: string;
}
const Checkbox: FC<ICheckbox> = ({ title, ...restProps }) => {
  const checkboxId = generateId();
  return (
    <>
      <input id={'checkbox' + checkboxId} name={'checkbox'} type={'checkbox'} className={s.checkbox} {...restProps} />
      <label htmlFor={'checkbox' + checkboxId}>{title}</label>
    </>
  );
};

export default Checkbox;
