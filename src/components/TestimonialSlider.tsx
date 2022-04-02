
import Slider from 'react-slick';
import Testimonial from './Testimonial';
import "slick-carousel/slick/slick.css";

const TestimonialSlider = () => {
    const reviews = [
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra sed sem eu mattis. Donec fermentum elit sed velit scelerisque, ut maximus est ultricies. Nullam est lectus, blandit at commodo ut, cursus et magna. In aliquet finibus neque, at eleifend elit lobortis ut.',

            reviewer: {
                name: 'Martin Desouza',
                role: 'Web Developer'
            }
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra sed sem eu mattis. Donec fermentum elit sed velit scelerisque, ut maximus est ultricies. Nullam est lectus, blandit at commodo ut, cursus et magna. In aliquet finibus neque, at eleifend elit lobortis ut.',

            reviewer: {
                name: 'Tom Hanks',
                role: 'Digital Marketer'
            }
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra sed sem eu mattis. Donec fermentum elit sed velit scelerisque, ut maximus est ultricies. Nullam est lectus, blandit at commodo ut, cursus et magna. In aliquet finibus neque, at eleifend elit lobortis ut.',

            reviewer: {
                name: 'Nathan Heirch',
                role: 'Graphic Designer'
            }
        }
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                reviews.map((review, index) => (
                    <Testimonial key={index} review={review.review} reviewer={review.reviewer} />

                ))
            }
        </Slider>
    )
}

export default TestimonialSlider