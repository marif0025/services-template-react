
import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode,
    classes?: string[]
}

const Container = ({ children, classes }: Props) => {
    return (
        <div className={`container ${classes ? classes.map(c => c) : ''}`}>
            {children}
        </div>
    )
}

export default Container;
