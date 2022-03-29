import PricePackageFeature from "./PricePackageFeature"

type pricePackageFeature = {
    text: string,
    available: boolean
}

type pricePackage = {
    title: string,
    price: string,
    highLighted: boolean,
    features: pricePackageFeature[]
}

const PricingCard = ({ pricePackage }: { pricePackage: pricePackage }) => {

    return (
        <div className={pricePackage.highLighted ? 'card highlighted' : 'card'}>
            <div className="card-header">
                <div className="card-title-small">
                    {pricePackage.title}
                </div>
                <p className="price-tag">{pricePackage.price}</p>
            </div>

            <ul className="package-features">
                {
                    pricePackage.features.map((feature, index) => (
                        <PricePackageFeature key={index} feature={feature} />
                    ))
                }
            </ul>

            <button className={pricePackage.highLighted ? "btn btn-default" : "btn btn-default btn-default-transparent"}>
                Buy Now
            </button>
        </div>
    )
}

export default PricingCard