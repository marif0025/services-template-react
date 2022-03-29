
import React, { useState } from 'react'
import PortfolioGrid from './PortfolioGrid';
import Tab from './Tab';

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState('all');

    const changeTab = (tab: string) => {
        setActiveTab(tab);
    }

    const allTabData = [
        'https://source.unsplash.com/collection/149593/360x360',
        'https://source.unsplash.com/collection/9817627/360x360',
        'https://source.unsplash.com/collection/9887529/360x360',
        'https://source.unsplash.com/collection/3399214/360x360',
        'https://source.unsplash.com/collection/215208/360x360',
        'https://source.unsplash.com/collection/228071/360x360'
    ]
    const brandingTabData = [
        'https://source.unsplash.com/collection/564060/360x360',
        'https://source.unsplash.com/collection/8820632/360x360',
        'https://source.unsplash.com/collection/9612370/360x360',
        'https://source.unsplash.com/collection/3399214/360x360',
        'https://source.unsplash.com/collection/9817627/360x360',
    ]

    return (
        <>
            <ul className="tabs">
                <Tab text="all" isActive={activeTab === 'all'} changeTab={changeTab} />
                <Tab text="branding" isActive={activeTab === 'branding'} changeTab={changeTab} />
                <Tab text="websites" isActive={activeTab === 'websites'} changeTab={changeTab} />
                <Tab text="apps" isActive={activeTab === 'apps'} changeTab={changeTab} />
                <Tab text="corporate" isActive={activeTab === 'corporate'} changeTab={changeTab} />
            </ul>

            <PortfolioGrid isActive={activeTab === 'all'} imageUrls={allTabData} />
            <PortfolioGrid isActive={activeTab === 'branding'} imageUrls={brandingTabData} />
            <PortfolioGrid isActive={activeTab === 'websites'} imageUrls={allTabData} />
            <PortfolioGrid isActive={activeTab === 'apps'} imageUrls={brandingTabData} />
            <PortfolioGrid isActive={activeTab === 'corporate'} imageUrls={allTabData} />
        </>
    )
}

export default PortfolioTabs