
const Tab = ({ text, isActive, changeTab }: { text: string, isActive: boolean, changeTab: Function }) => {
    return (
        <li
            className={isActive ? 'tab is-active' : 'tab'}
            onClick={() => changeTab(text)}
        >
            {text}
        </li>
    )
}

export default Tab