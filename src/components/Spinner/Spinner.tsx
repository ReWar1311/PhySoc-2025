import { FC } from 'react';
import './spinner.css';

type Props = {
  size?: number;
  className?: string;
}

const Spinner: FC<Props> = ({ size, className }) => {
  return (
    <div
      className={`spinner ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export { Spinner };