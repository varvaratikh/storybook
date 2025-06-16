import styles from './tabs.module.scss';
import {ReactNode, useState} from "react";

type Tab = {
    label: string;
    content: ReactNode;
};

interface TabsProps {
    tabs: Tab[];
    defaultIndex?: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <div className={styles.tabs}>
            <div className={styles.tabList}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tabButton} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                {tabs[activeIndex]?.content}
            </div>
        </div>
    );
};