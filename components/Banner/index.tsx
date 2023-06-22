import Image from 'next/image';
import lfgLanding from '@/public/img/png/lfgLanding.png';
import style from './style.module.css';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className={style.contentBanner} id="banner">
      <Image src={lfgLanding} alt={''} className={style.lfgLanding} />
      <p className={style.paragraph}>
        Desde el inicio he sido parte de la humanidad, me he transformado siglo
        tras siglo entre manos de genios, artistas, inventores, y artesanos
        expertos, he dado vida a piezas que cuentan historias, he sido heredado
        de generación en generación como un material precioso que no se
        extingue, que no se acaba, que permanece. Estoy en el presente y seguiré
        en el futuro para
        <span>continuar este legado ancestral.</span>
      </p>
      <div className={style.scrollNavigator}>
        <Link href={''}>Piezas que perduran</Link>
        <Link href={''}>Ruta de memorias</Link>
        <Link href={''}>Informe anual</Link>
        <Link href={''}>Taller artesano</Link>
      </div>
    </div>
  );
};

export default Banner;
