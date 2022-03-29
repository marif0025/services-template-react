
import React from 'react'
import Container from '../template-parts/Container'
import PortfolioTabs from './PortfolioTabs'

const SectionPortfolio = () => {
    return (
        <section id="portfolio">
            <Container classes={['ui--tab-wrap']}>
                <h2 className="section-heading">Portfolio</h2>

                <PortfolioTabs />
            </Container>
        </section>
    )
}

export default SectionPortfolio