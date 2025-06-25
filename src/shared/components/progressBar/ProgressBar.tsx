import styles from './progressBar.module.scss';
import {useEffect, useState} from "react";

export const ProgressBar = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 1;
                }
                clearInterval(interval);
                return 100;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}