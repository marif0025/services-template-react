
import React from 'react'
import Container from '../template-parts/Container';
import TestimonialSlider from './TestimonialSlider';

const SectionTestimonial = () => {
    return (
        <section id="testimonials" className="sec-bg">
            <Container>
                <h2 className="section-heading">Testimonials</h2>
                <div className="testimonial-container">
                    <TestimonialSlider />
                </div>
            </Container>
        </section>
    )
}

export default SectionTestimonial