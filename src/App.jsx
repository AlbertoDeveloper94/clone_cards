import Testimonio from "./components/Testimonio";
import Shan from "./assets/img/perfilCard1.png";
import sarah from "./assets/img/perfilCard2.png";
import emma from "./assets/img/perfilCard3.png";


function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

      <Testimonio
        fullName="Shawn Wang"
        job="Ingeniero de Software"
        img={Shan}
        alt="Foto de Shan"
        country="Singapur"
        work="Amazon"
        description='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
      ></Testimonio>
      <Testimonio
        fullName="Sarah Chima"
        job="Ingeniera de Software"
        img={sarah}
        alt="Foto de Sarah"
        country="Nigeria"
        work="ChatDesk"
        description='"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
      ></Testimonio>
      <Testimonio
        fullName="Emma Bostian"
        job="Ingeniera de Software"
        img={emma}
        alt="Foto de Emma"
        country="Suecia"
        work="Spotify"
        description='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
      ></Testimonio>
    </div>
  );
}
export default App;
