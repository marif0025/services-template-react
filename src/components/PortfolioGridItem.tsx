
const PortfolioGridItem = ({ src }: { src: string }) => {
    return (
        <div className="portfolio-grid-item">
            <img src={src} alt="Portfolio image" />
        </div>
    )
}

export default PortfolioGridItem