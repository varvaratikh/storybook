import { useState } from 'react';
import styles from './progressBar.module.scss';

export const ButtonControlledProgressBar: React.FC = () => {
    const [progress, setProgress] = useState(0);

    const handleProgressChange = () => {
        if (progress < 100) {
            setProgress(progress + 10);
        }
    };

    return (
        <div>
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${progress}%` }}
                />
            </div>
            <button onClick={handleProgressChange}>Increase Progress</button>
        </div>
    );
};

