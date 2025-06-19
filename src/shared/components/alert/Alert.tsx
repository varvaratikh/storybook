import { useEffect } from 'react';
import styles from './alert.module.scss';
import clsx from 'clsx';

export type AlertType = 'success' | 'error' | 'info' | 'warning';

interface AlertProps {
    type: AlertType;
    message: string;
    onClose: () => void;
    duration?: number;
}

export const Alert = ({ type, message, onClose, duration = 3000 }: AlertProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={clsx(styles.alert, styles[type])}>
            <span>{message}</span>
            <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
    );
};
