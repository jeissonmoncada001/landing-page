import Image from 'next/image';
import lfg from '@/public/img/png/lfg.png';
import style from './style.module.css';

const Footer = () => {
  return (
    <div className={style.content}>
      <Image src={lfg} alt={''} width={200} height={200} />
      <p>CUERO POR Y PARA EL BIEN, CUERO SOSTENIBLE CON EL MUNDO ENTERO.</p>
    </div>
  );
};

export default Footer;
