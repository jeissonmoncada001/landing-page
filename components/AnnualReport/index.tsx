import style from './style.module.css';

const AnnualReport = () => {
  return (
    <div className={style.container}>
      <h1>INFORME ANUAL</h1>
      <p>
        En cueros Vélez apostamos al crecimiento social, ambiental y économico,
        a través de negocios sostenibles, que exaltan el talento y construyen
        país.
      </p>
      <button>DESCARGAR INFORME</button>
    </div>
  );
};

export default AnnualReport;
