import React, { FC } from 'react';
import banner from '@/public/img/png/banner.png';
import iconFacebook from '@/public/img/svg/icons/iconFacebook.svg';
import iconInstagram from '@/public/img/svg/icons/iconInstagram.svg';
import iconLinkedin from '@/public/img/svg/icons/iconLinkedin.svg';
import iconYoutube from '@/public/img/svg/icons/iconYoutube.svg';
import { changeAnchor } from '../helpers';
import style from './style.module.css';
import Image from 'next/image';

interface IDrawer {
  open: boolean;
  anchor: string;
  onClose: () => void;
}

const sections = [
  {
    title: 'MUJER',
  },
  {
    title: 'HOMBRE',
  },
  {
    title: 'OUTLE',
  },
  {
    title: 'CRÉDITO',
  },
  {
    title: 'FLY UP',
  },
];

export const Drawer: FC<IDrawer> = ({ open, anchor, onClose }) => {
  return (
    <div
      style={{}}
      tabIndex={-1}
      className={`${style.drawer} ${open && style.animate} ${
        !open && style.hidden
      } ${changeAnchor(anchor, style)}`}
    >
      {sections.map((section, i) => (
        <button key={i} className={style.btnSections}>
          {section.title}
        </button>
      ))}
      <div className={style.contentSocial}>
        <div className={style.containerSocial}>
          <button>
            <Image src={iconFacebook} alt={''} />
          </button>
          <button>
            <Image src={iconInstagram} alt={''} />
          </button>
          <button>
            <Image src={iconLinkedin} alt={''} />
          </button>
          <button>
            <Image src={iconYoutube} alt={''} />
          </button>
        </div>
        <Image src={banner} alt="banner" className={style.banner} />
      </div>
    </div>
  );
};
