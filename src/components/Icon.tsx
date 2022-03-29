
import sprite from '../images/icons.svg';

type iconProp = {
    name: string
}

const Icon = ({ name }: iconProp) => {
    return (
        <i className='icon'>
            <svg><use xlinkHref={`${sprite}#${name}`}></use></svg>
        </i>
    )
}

export default Icon;
