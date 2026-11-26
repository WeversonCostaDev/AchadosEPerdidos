import "./Logo.css";
import { Link } from "react-router-dom";


interface LogoProps{
    src: string;
    alt: string;
}

function Logo({src, alt}: LogoProps){
    return(
        <Link to="/" className="logo">
            <img src={src} alt={alt} />
        </Link>
    );
}

export default Logo;