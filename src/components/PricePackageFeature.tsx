
type pricePackageFeature = {
    text: string,
    available: boolean
}

const PricePackageFeature = ({ feature }: { feature: pricePackageFeature }) => {
    return (
        <li>
            {feature.text}
            <span className={feature.available ? 'feature-status available' : 'feature-status not-available'}></span>
        </li>
    )
}

export default PricePackageFeature