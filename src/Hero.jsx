import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            vel consequuntur temporibus nemo modi voluptatibus itaque officia
            quia architecto iusto ad, eius ipsam repudiandae error enim earum.
            Libero nobis officia ex ea. Enim facere sapiente natus quis unde
            aspernatur, incidunt eligendi eos tempora ratione cum mollitia,
            voluptatem nostrum quas sed.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img'/>
        </div>
      </div>
    </section>
  );
};
export default Hero;
