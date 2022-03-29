
type stat = {
    data: string,
    label: string
}

const StatsItem = ({ stat }: { stat: stat }) => {

    return (
        <div className="stat">
            <span className="num">{stat.data}</span>
            <span className="tag">{stat.label}</span>
        </div>
    )
}

export default StatsItem