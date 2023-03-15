import { FC } from 'react';
import cn from './BoxSizeItem.module.scss';


interface BoxSizeItemProps {
  mainSize: string;
  additionalSizes: string[];
  selected?: boolean;
}

export const BoxSizeItem: FC<BoxSizeItemProps> = (props) => {
  const { mainSize, additionalSizes, selected } = props;

  return <div className={[cn.BoxSizeItem, selected ? cn.selected : ''].join(' ')}>
    <span className={cn.mainSize}>{`${mainSize}м²`}</span>
    <div className={cn.additionalSizesConationer}>
      <span className={cn.additionalSizeItem}>3м²</span>
      <span className={cn.additionalSizeItem}>3м²</span>
    </div>
  </div>;
};
