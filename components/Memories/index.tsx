import Link from 'next/link';
import style from './style.module.css';
import Image from 'next/image';
import memo1 from '@/public/img/png/memo1.png';

const Memories = () => {
  return (
    <div className={style.content} id="memories">
      <div className={style.containerMemoriCausa}>
        <h1 className={style.title}>RUTA DE MOEMORIAS</h1>
        <Link href={''}>
          <video
            loop={true}
            className={style.video}
            src={require('@/public/video/causa-desk.mp4')}
            autoPlay={true}
            muted
          />
        </Link>
        <h2 className={style.subTitle}>CUERO/MATERIAL PRECIOSO</h2>
        <p className={style.descriptions}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          repellat molestias nobis ratione quasi quidem!
        </p>
        <Link href={''} className={style.memoriCausa}>
          Leer
        </Link>
      </div>
      <div className={style.containerMemori1}>
        <Link href={''}>
          <Image src={memo1} alt="memo1" className={style.memo1} />
        </Link>
        <div className={style.textMemori1}>
          <h2 className={style.subTitle}>RECONOCIMIENTOS</h2>
          <p className={style.descriptions}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            repellat molestias nobis ratione quasi quidem!
          </p>
          <Link href={''} className={style.memoriCausa}>
            Leer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Memories;
