import { ReactNode, useState } from 'react';
import styles from './tooltip.module.scss';

interface TooltipProps {
    children: ReactNode;
    text: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: React.FC<TooltipProps> = ({
                                                    children,
                                                    text,
                                                    position = 'top',
                                                }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div className={`${styles.tooltip} ${styles[position]}`}>
                    {text}
                </div>
            )}
        </div>
    );
};
