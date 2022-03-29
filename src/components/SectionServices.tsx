import React, { useState } from 'react';
import Container from '../template-parts/Container';
import ServicesCard from './ServicesCard';

type serviceCard = {
    title: string
    iconClass: string,
    description: string,
    highlighted: boolean
}

type cardData = serviceCard[];

const SectionServices = () => {
    const [cardData, setCardData] = useState<cardData>([{
        title: 'Digital Marketing',
        iconClass: 'icon-digital-marketing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique perspiciatis in corporis expedita molestias?',
        highlighted: false
    },
    {
        title: 'Product design',
        iconClass: 'icon-product-design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique perspiciatis in corporis expedita molestias?',
        highlighted: true
    },
    {
        title: 'Business Planning',
        iconClass: 'icon-business-planing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique perspiciatis in corporis expedita molestias?',
        highlighted: false
    }
    ]);

    return (
        <section id='services'>
            <Container>
                <h2 className="section-heading">Sasslar Services</h2>
                <div className="cards-container">
                    {
                        cardData.map(card => (
                            <ServicesCard key={card.title} data={card} />
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default SectionServices;
