import Container from "../template-parts/Container"
import PricingCard from "./PricingCard"

const SectionPricing = () => {
    const pricePackages = [
        {
            title: 'Starter',
            price: '29.99$',
            highLighted: false,
            features: [
                {
                    text: 'Free cloud storage',
                    available: true
                },
                {
                    text: 'Regular Updates',
                    available: true
                },
                {
                    text: 'Affordable Support',
                    available: false
                },
                {
                    text: 'Free Trail Version',
                    available: false
                },
                {
                    text: 'Unlimited storage',
                    available: false
                }
            ]
        },
        {
            title: 'Business',
            price: '49.99$',
            highLighted: true,
            features: [
                {
                    text: 'Free cloud storage',
                    available: true
                },
                {
                    text: 'Regular Updates',
                    available: true
                },
                {
                    text: 'Affordable Support',
                    available: true
                },
                {
                    text: 'Free Trail Version',
                    available: false
                },
                {
                    text: 'Unlimited storage',
                    available: false
                }
            ]
        },
        {
            title: 'Enterprise',
            price: '99.99$',
            highLighted: false,
            features: [
                {
                    text: 'Free cloud storage',
                    available: true
                },
                {
                    text: 'Regular Updates',
                    available: true
                },
                {
                    text: 'Affordable Support',
                    available: true
                },
                {
                    text: 'Free Trail Version',
                    available: true
                },
                {
                    text: 'Unlimited storage',
                    available: true
                }
            ]
        }
    ]

    return (
        <section id="pricing">
            <Container>
                <h2 className="section-heading">Pricing</h2>

                <div className="cards-container">
                    {
                        pricePackages.map(pricePackage => (
                            <PricingCard pricePackage={pricePackage} />
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default SectionPricing