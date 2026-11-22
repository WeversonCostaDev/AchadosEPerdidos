import "./Logo.css";

interface LogoProps{
    src: string;
    alt: string;
}

function Logo({src, alt}: LogoProps){
    return(
        <div className="logo">
            <img src={src} alt={alt} />
        </div>
    );
}

export default Logo;