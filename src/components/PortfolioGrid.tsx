
import PortfolioGridItem from './PortfolioGridItem';

const PortfolioGrid = ({ isActive, imageUrls }: { isActive?: Boolean, imageUrls: string[] }) => {
    return (
        <div className={isActive ? 'portfolio-grid tab--content is-active' : 'portfolio-grid tab--content'}>
            {
                imageUrls.map(url => (
                    <PortfolioGridItem key={url} src={url} />
                ))
            }
        </div>
    )
}

export default PortfolioGrid