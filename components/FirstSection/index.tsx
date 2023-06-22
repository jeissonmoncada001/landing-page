import Counter from './counter';
import style from './style.module.css';
import { useEffect, useState } from 'react';

const FirstSection = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const handleDrop = () => {
    setOpenDrop(!openDrop);
  };
  return (
    <div className={style.container}>
      <div className={style.textDesktop}>
        <h3>
          YA SOMOS
          <strong>
            <Counter />
          </strong>
          PERSONAS UNIDAS AL MOMENTO
        </h3>
      </div>
      <div className={style.textMobile}>
        <h3>YA SOMOS</h3>
        <strong>
          <Counter />
        </strong>
        <h3>PERSONAS UNIDAS AL MOMENTO</h3>
      </div>
      <button onClick={handleDrop}>Quiero ser parte</button>
      {openDrop && (
        <div className={style.containerDrop}>
          <hr />
          <h1>SOY CONSCIENTE DE</h1>
          <p>Ser parte de una revolución por el medio ambiente.</p>
          <p>Consumir productos con procesos transparentes.</p>
          <p>Llevar conmigo piezas artesanales con alma e historia.</p>
          <p> Tener piezas que pueden permanecer en el tiempo. </p>
          <p>
            Aportar a la construcción de una sociedad que le da valor a lo
            humano.
          </p>
          <p>
            Soy consciente de mis decisiones de consumo y por eso me sumo al
            movimiento...
          </p>
          <strong>LEATHER FOR GOOD</strong>
          <hr />
          <button onClick={handleDrop}>Ocultar</button>
        </div>
      )}
    </div>
  );
};

export default FirstSection;
