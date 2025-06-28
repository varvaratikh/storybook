import styles from './badge.module.scss';
import clsx from "clsx";

type BadgeProps = {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'small' | 'default' | 'large';
    className?: string;
};

export const Badge: React.FC<BadgeProps> = ({
                                                text,
                                                variant = 'primary',
                                                size = 'default',
                                                className,
                                            }) => {
    return (
        <span
            className={clsx(
                styles.badge,
                styles[`badge--${variant}`],
                size !== 'default' && styles[`badge--${size}`],
                className
            )}
        >
      {text}
    </span>
    );
};