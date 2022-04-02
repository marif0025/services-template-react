
const PortfolioGridItem = ({ src }: { src: string }) => {
    return (
        <div className="portfolio-grid-item">
            <img src={src} alt="Portfolio" />
        </div>
    )
}

export default PortfolioGridItem