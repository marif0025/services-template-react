
type Reviewer = {
    name: string,
    role: string
}

type Review = {
    review: string,
    reviewer: Reviewer
}

const Testimonial = ({ review, reviewer }: Review) => {
    return (
        <div className="testimonial-slide">
            <span>“</span>

            <p className="desc">{review}</p>

            <div className="reviewer-details">
                <div className="avatar">
                    <img src="./assets/Images/avatar-1.png" alt="testimonial" />
                </div>

                <h3 className="reviewer-title">
                    {reviewer.name}
                </h3>

                <p className="reviewer-tag">
                    {reviewer.role}
                </p>
            </div>
        </div>
    )
}

export default Testimonial