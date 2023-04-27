import { FC, useMemo } from 'react';
import cn from './Footer.module.scss';
import logo from '../../images/logo.svg';
import { useSelector } from 'react-redux';
import { getStore } from '../../store/mainSlice/getStore';

export const Footer: FC = () => {
  const store = useSelector(getStore);

  const footerText = useMemo(() => {
    if (store.addressId === 'K38') {
      return 'ИП Барбанакова Юлия Юрьевна | ИНН 3616 0479 9137 | ОГРНИП 32323 75000 68948'
    } else {
      return 'АО "ТВОЙ СКЛАД | ОГРН: 1222300006389 | ИНН: 2315224216 | КПП: 231501001'
    }
  }, [store.addressId]);

  return (
    <section className={cn.Footer}>
      {store.addressId && <span className={cn.text}>{footerText}</span>}
    </section>
  );
};
