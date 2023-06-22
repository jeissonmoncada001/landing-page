import Image from 'next/image';
import logo from '@/public/img/svg/logo.svg';
import bee from '@/public/img/svg/bee.svg';
import style from './style.module.css';
import { useState } from 'react';
import Banner from '../Banner';
import FirstSection from '../FirstSection';
import { Link } from 'react-scroll';

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className={style.container}>
        <video
          loop={true}
          className={style.backgroundVideo}
          src={require('@/public/video/desk.mp4')}
          autoPlay={true}
          muted
        />
        <div className={style.contentVideo}>
          <div
            style={{
              height: '100px',
            }}
          />
          <div
            style={{
              height: '100px',
            }}
          />
          <div
            style={{
              height: '100px',
            }}
          />
          <button className={style.btnModal} onClick={toggleModal}>
            VER VIDEO COMPLETO
          </button>
          {openModal && (
            <div className={style.containerModal} onClick={toggleModal}>
              <div className={style.contentModal}>
                <div className={style.background} />
                <iframe
                  src="https://www.youtube.com/embed/WVVmqqzFHJs"
                  className={style.video}
                />
              </div>
            </div>
          )}
          <div className={style.containerMore}>
            <div className={style.contentMore}>
              <Link
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                activeClass="active"
                to="banner"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button className={style.btnMore}>conoce más</button>
                <Image src={bee} alt="logo" height={40} />
              </Link>
            </div>
            <hr className={style.lineVertical} />
          </div>
        </div>
      </div>
      <Banner />
      <FirstSection />
    </>
  );
};

export default Hero;
