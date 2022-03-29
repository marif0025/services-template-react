
import StatsItem from "./StatsItem";

const Stats = () => {
    const stats = [
        {
            data: '70+',
            label: 'Companies Launched'
        },
        {
            data: '90%',
            label: 'Success ratio'
        },
    ]

    return (
        <div className="stats">
            {
                stats.map((stat, index) => (
                    <StatsItem key={index} stat={stat} />
                ))
            }
        </div>
    )
}

export default Stats;
