import { FC } from 'react';
import cn from './Main.module.scss';

interface MainProps {
  className?: string;
}

export const Main: FC<MainProps> = (props) => {
  const { className } = props;

  return <div className={cn.Main}></div>;
};
