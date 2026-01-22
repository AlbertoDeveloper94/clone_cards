import "../styles/Testimonio.css";
function Testimonio({ fullName, job, description, img, alt, country, work }) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={img} alt={alt} />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{fullName}</strong> en {country}
        </p>
        <p className="cargo-testimonio">
          {job} en <strong>{work}</strong>
        </p>
        <p className="texto-testimonio">{description}</p>
      </div>
    </div>
  );
}

export default Testimonio;
