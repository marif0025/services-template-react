
import Container from '../template-parts/Container';
import StatsImage from '../images/image-stats.png';
import Stats from './Stats';

const SectionStats = () => {

    return (
        <section id="about-stats" className="about-section sec-bg">
            <Container classes={['section-container']}>
                <div className="section-text stats--text">
                    <h3>We work together to create unique experience</h3>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra sed sem eu mattis. Donec
                        fermentum elit.
                    </p>

                    <Stats />
                </div>

                <div className="about-image">
                    <img src={StatsImage} alt="stats" />
                </div>
            </Container>
        </section>
    )
}

export default SectionStats