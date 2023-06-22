import Image from 'next/image';
import style from './style.module.css';
import man from '@/public/img/png/man.png';
import woman from '@/public/img/png/woman.png';
import woman1 from '@/public/img/png/woman1.png';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.firstSection}>
          <p className={style.paragraph}>
            Nuestros cueros son un subproducto de la industria ganadera, por lo
            tanto, volvemos sostenible lo que podría ser contaminante, tratamos
            las pieles desde su origen con procesos amigables con el medio
            ambiente, hasta su uso responsable promovido a través de la
            restauración y el cuidado del cuero.
          </p>
          <video
            loop={true}
            className={style.piezasmemo}
            src={require('@/public/video/piezasmemo-desk.mp4')}
            autoPlay={true}
            muted
          />
          <Image src={woman} alt={''} className={style.woman} />
        </div>
        <div className={style.secondSection}>
          <div className={style.contentTitle}>
            <p>sostenibilidad</p>
            <hr className={style.separator} />
            <h1>Piezas que perduran</h1>
          </div>
          <div className={style.contentImg}>
            <div className={style.titleImg}>
              <Image src={woman1} alt={''} />
              <h4>Mujer</h4>
            </div>
            <div className={style.titleImg}>
              <Image src={man} alt={''} />
              <h4>Hombre</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerMore}>
        <Link
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          activeClass="active"
          to="memories"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <div className={style.contentMore}>
            <button className={style.btnMore}>conoce más</button>
            <svg
              width="50"
              height="40"
              viewBox="0 0 50 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11_17)">
                <path
                  d="M22.63 2.63002L23.11 4.89002C23.15 5.06002 23.08 5.25002 22.93 5.35002C22.67 5.52002 22.35 5.38002 22.28 5.09002L21.75 2.88002C21.71 2.72002 21.59 2.58002 21.44 2.52002L20.3 2.05002C19.86 1.87002 19.43 2.32002 19.62 2.75002L21.67 7.29002C21.77 7.51002 22 7.63002 22.23 7.59002L24.54 6.28002C24.59 6.25002 24.65 6.23002 24.71 6.22002C24.75 6.22002 24.79 6.22002 24.83 6.22002C24.89 6.23002 24.95 6.25002 25 6.28002L27.3 7.59002C27.53 7.64002 27.78 7.52002 27.88 7.29002L29.93 2.75002C30.13 2.32002 29.69 1.87002 29.25 2.05002L28.11 2.52002C27.95 2.58002 27.84 2.72002 27.8 2.88002L27.27 5.08002C27.22 5.30002 27.01 5.46002 26.78 5.42002C26.53 5.38002 26.38 5.14002 26.43 4.91002L26.91 2.64002C26.94 2.48002 26.9 2.32002 26.8 2.20002L25.21 0.26002H25.2C24.99 -0.0599805 24.52 -0.0599805 24.32 0.26002H24.31L22.72 2.21002C22.64 2.31002 22.6 2.47002 22.63 2.63002Z"
                  fill="#656565"
                />
                <path
                  d="M49.47 11.92C48.99 11 47.7 10.62 45.54 10.78H45.53L28.59 13.31C28.53 13.32 28.37 13.35 28.16 13.4L27.75 12.68C27.57 12.36 27.3 12.11 26.99 11.94C27.18 11.85 27.37 11.75 27.55 11.63L28.26 11.18C28.69 10.91 28.96 10.46 29 9.94003C29.04 9.42003 28.85 8.92003 28.47 8.58003L27.52 7.72003C27.48 7.68003 27.44 7.65003 27.4 7.61003C27.39 7.61003 27.38 7.61003 27.37 7.61003L25.08 6.29003C25.03 6.26003 24.97 6.23003 24.91 6.23003C24.87 6.23003 24.83 6.22003 24.79 6.23003C24.73 6.24003 24.67 6.26003 24.62 6.29003L22.31 7.59003C22.27 7.60003 22.24 7.59003 22.2 7.59003C22.16 7.63003 22.12 7.66003 22.08 7.70003C21.8 7.95003 21.56 8.17003 21.27 8.45003C20.85 8.86003 20.64 9.39003 20.68 9.95003C20.72 10.53 21.03 11.05 21.5 11.36L21.93 11.63C22.15 11.77 22.38 11.89 22.61 12C22.35 12.16 22.12 12.39 21.96 12.67L21.54 13.39C21.32 13.33 21.15 13.3 21.09 13.29L4.18001 10.6H4.15001C1.99001 10.43 0.700007 10.79 0.210007 11.71C-0.459993 12.97 0.450007 15.02 3.26001 18.57C5.76001 21.72 8.13001 22.11 9.12001 22.11C9.36001 22.11 9.52001 22.09 9.58001 22.08C10.02 22.04 15.97 21.48 21.49 18.3C21.53 18.28 21.57 18.25 21.61 18.23L21.91 18.76C22.01 18.94 22.15 19.1 22.3 19.24C21.73 19.99 20.07 22.38 19.34 25.86C18.79 28.47 18.72 32.05 20.54 36.08L20.53 36.1C20.53 36.1 20.54 36.11 20.56 36.12C21.38 37.93 22.59 39.83 24.3 41.78V42.14C24.3 42.35 24.47 42.52 24.68 42.52C24.89 42.52 25.06 42.35 25.06 42.14V41.85C30.88 35.51 31.15 29.66 30.34 25.85C29.6 22.38 27.91 20 27.32 19.25C27.47 19.12 27.6 18.96 27.71 18.78L28.01 18.26C28.05 18.28 28.08 18.31 28.12 18.33C33.62 21.56 39.57 22.18 40 22.22C40.06 22.23 40.22 22.25 40.45 22.25C41.44 22.25 43.82 21.89 46.34 18.76C49.2 15.23 50.13 13.19 49.47 11.92Z"
                  fill="#656565"
                />
                <path
                  d="M30.32 33.5201L29.95 32.8801L29.04 31.3101L28.13 32.8801L25.22 37.9201C25.11 38.1101 24.96 38.3201 24.78 38.3101C24.59 38.3201 24.45 38.1101 24.34 37.9201L21.43 32.8801L20.52 31.3101L19.61 32.8801L19.24 33.5201C19.02 33.8901 19.02 34.3601 19.24 34.7301L21.43 38.5201L24.34 43.5601C24.45 43.7501 24.58 43.9501 24.78 43.9501C24.96 43.9501 25.11 43.7501 25.22 43.5601L28.13 38.5201L30.32 34.7301C30.54 34.3601 30.54 33.8901 30.32 33.5201Z"
                  fill="#656565"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_17">
                  <rect width="49.67" height="43.94" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={style.lineVertical} />
          <div className={style.dot} />
        </Link>
      </div>
    </>
  );
};

export default About;
