import { FC } from 'react';
import cn from './Header.module.scss';
import logo from '../../images/logo.svg';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  // const uploadCoupons = () => {
  //   for (let i = 4001; i <= 4025; i++) {
  //     setTimeout(() => {
  //       const newTask = {
  //         value: `Н${i.toString()}`,
  //         discount: "1500",
  //         isUsed: false,
  //         city: "any",
  //         periods: [1, 3, 6, 12]
  //       };
  //       fetch("https://apitvoyskladcom.us.to/coupons", {
  //         method: "POST",
  //         headers: { "content-type": "application/json" },
  //         body: JSON.stringify(newTask)
  //       });
  //       console.log("sent " + i);
  //     }, (i - 4000) * 1500);
  //   }
  // };

  return (
    <section className={cn.Header}>
      {/*<button onClick={uploadCoupons}>upload</button>*/}
      <img src={logo} alt='tvoy sclad logo' className={cn.header__logo} />
      <a href='https://tvoysklad.com' className={cn.header__backButton}>Вернуться на главную</a>
    </section>
  );
};
