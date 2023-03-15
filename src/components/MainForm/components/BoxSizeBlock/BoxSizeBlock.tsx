import { FC } from 'react';
import cn from './BoxSizeBlock.module.scss';
import { BoxSizeItem } from '../BoxSizeItem/BoxSizeItem';

interface BoxSizeBlockProps {
  className?: string;
}

export const BoxSizeBlock: FC<BoxSizeBlockProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn.BoxSizeBlock}>
      <h3 className={cn.boxSize__title}>Размер бокса*</h3>
      <div className={cn.boxSizeItemsContainer}>
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' selected />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
        <BoxSizeItem additionalSizes={['1']} mainSize='1' />
      </div>
    </div>
  );
};
