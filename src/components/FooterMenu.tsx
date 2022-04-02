
import React, { ReactNode } from 'react'

type Props = {
    title: string
    children?: ReactNode,
    classes?: string[]
}

const FooterMenu = ({ title, children }: Props) => {
    return (
        <div className="footer-item">
            <h3 className="footer-heading">
                {title}
            </h3>

            {children}
        </div>
    )
}

export default FooterMenu;
