
import Icon from './Icon';

type serviceCard = {
    title: string
    iconClass: string,
    description: string,
    highlighted: boolean
}

const ServicesCard = ({ data }: { data: serviceCard }) => {
    return (
        <div className={`card ${data.highlighted ? 'highlighted' : ''}`}>
            <div className="card--icon">
                <Icon name={data.iconClass} />
            </div>
            <h3 className="card--title">{data.title}</h3>
            <p className="card--desc">{data.description}</p>
        </div>
    )
}

export default ServicesCard;
