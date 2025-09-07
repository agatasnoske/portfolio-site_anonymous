import { useState } from 'react'
import './Works.scss'
// tabs
import WorksSoloDevelopment from './WorksSoloDevelopment'
import WorksFrontUiux from './WorksFrontUiux'
import WorksUiux from './WorksUiux'
import WorksFrontEnd from './WorksFrontEnd'
import WorksWebDirection from './WorksWebDirection'
import WorksWebDesign from './WorksWebDesign'
import WorksVideo from './WorksVideo'
import WorksIllustration from './WorksIllustration'


export default function Works() {
    const tabs = [
        { label: ['Solo', 'Development'], component: <WorksSoloDevelopment /> },
        { label: ['Front-End', 'UI/UX Design'], component: <WorksFrontUiux /> },
        { label: ['UI/UX Design'], component: <WorksUiux /> },
        { label: ['Front-End'], component: <WorksFrontEnd /> },
        { label: ['Web Direction'], component: <WorksWebDirection /> },
        { label: ['Web Design'], component: <WorksWebDesign /> },
        { label: ['Video'], component: <WorksVideo /> },
    ]
    const [activeTab, setActiveTab] = useState(0)

    const tabContents = [
    <WorksSoloDevelopment key="Solo Development" />,
    <WorksFrontUiux key="Front-End & UI/UX Design" />,
    <WorksUiux key="UI/UX Design" />,
    <WorksFrontEnd key="Front-End" />,
    <WorksWebDirection key="Web Direction" />,
    <WorksWebDesign key="Web Design" />,
    <WorksVideo key="Video" />,
    <WorksIllustration key="Illustration" />,
    ]
    return (
    <div className="main fade">
    <ul className="tabs">
        {tabs.map((tab, index) => (
        <li
            key={index}
            className={`blink-on-hover ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
        >
            <p>
            {tab.label.map((line, i) => (
                <span key={i}>
                {line}
                {i !== tab.label.length - 1 && <br />}
                </span>
            ))}
            </p>
        </li>
        ))}
    </ul>
    <div className="tab-content">
        {tabContents[activeTab]}
    </div>
    </div>
    )
}
