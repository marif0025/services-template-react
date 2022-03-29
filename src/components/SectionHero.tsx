
import Container from '../template-parts/Container';
import ShowcaseImage from '../images/vector-1.png';

const SectionHero = () => {
    return (
        <header id="header">
            <Container>
                <div className="navbar">
                    <h2 className="logo">SaasLar</h2>
                    <ul className="menu">
                        <li className="menu-item"><a href="#services">Services</a></li>
                        <li className="menu-item"><a href="#about">About</a></li>
                        <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
                        <li className="menu-item"><a href="#pricing">Pricing</a></li>
                        <li className="menu-item"><a href="#testimonials">Testimonials</a></li>
                    </ul>

                    <div className="burger-menu"></div>
                </div>

                <div className="showcase">
                    <div className="showcase-textarea">
                        <h1>SAASLAR <br /> Digital Agency</h1>
                        <a href="#pricing" className="btn btn-primary">Hire Us</a>
                    </div>

                    <div className="showcase-img">
                        <img src={ShowcaseImage} alt="showcaseImg" />
                    </div>
                </div>

                <a href="#services" className="down-arrow"></a>
            </Container>
        </header>
    )
}

export default SectionHero