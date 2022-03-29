
import Container from "../template-parts/Container"
import AboutImg from '../images/about.png';
import Icon from "./Icon";

const SectionAbout = () => {
    return (
        <section id="about" className="about-section sec-bg">
            <Container classes={['section-container']}>
                <div className="about-image"><img src={AboutImg} alt="About image" /></div>

                <div className="section-text">
                    <h3>How We Help Others to Achieve their Goals?</h3>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra sed sem eu mattis. Donec
                        fermentum elit sed velit scelerisque, ut maximus est ultricies. Nullam est lectus, blandit at
                        commodo ut, cursu s et magna.</p>

                    <div className="section-btn">
                        <a href="#about" className="btn btn-primary">About us</a>
                        <a href="#" className="btn-transparent">
                            <Icon name="icon-play" />
                            <span className="btn-text">Watch Video</span>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SectionAbout