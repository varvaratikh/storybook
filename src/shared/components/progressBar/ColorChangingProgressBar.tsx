import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.scss';

export const ColorChangingProgressBar: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 2;
                }
                clearInterval(interval);
                return 100;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const progressColor = progress < 50 ? '#b3ffab' : '#ff416a';

    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBarColor}
                style={{ width: `${progress}%`, backgroundColor: progressColor }}
            />
        </div>
    );
};