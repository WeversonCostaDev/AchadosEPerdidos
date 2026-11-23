import "./Hero.css";
import image from "..//../assets/banner-2.jpg";

function Hero(){
    return(
        <section className="hero">
            <img
                className="hero-image"
                src={image}
                alt=""
            />
        </section>
    );
}

export default Hero;