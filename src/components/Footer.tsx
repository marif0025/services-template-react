
import React from 'react'
import Container from '../template-parts/Container'
import FooterMenu from './FooterMenu'
import Icon from './Icon'

const Footer = () => {
    return (
        <footer>
            <Container classes={['footer-content']}>
                <FooterMenu title="About">
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit.</p>

                    <div className="social-links">
                        <a href="#facebook" className="social-link fb">
                            <Icon name='icon-youtube' />
                        </a>
                        <a href="#facebook" className="social-link fb">
                            <Icon name='icon-twitter' />
                        </a>
                        <a href="#facebook" className="social-link fb">
                            <Icon name='icon-instagram' />
                        </a>
                    </div>
                </FooterMenu>

                <FooterMenu title='Solutions'>
                    <ul className="footer-menu">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Sources</a></li>
                        <li><a href="#">Sales Team</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Open Source</a></li>
                    </ul>
                </FooterMenu>

                <FooterMenu title='Resources'>
                    <ul className="footer-menu">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Sources</a></li>
                        <li><a href="#">Sales Team</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Open Source</a></li>
                    </ul>
                </FooterMenu>

                <FooterMenu title='Quick Links'>
                    <ul className="footer-menu">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Sources</a></li>
                        <li><a href="#">Sales Team</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Open Source</a></li>
                    </ul>
                </FooterMenu>
            </Container>

            <p className="copyright">
                SaasLar Copy rights &copy; Reserved.
            </p>
        </footer>
    )
}

export default Footer