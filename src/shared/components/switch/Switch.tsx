import styles from './switch.module.scss';
import clsx from 'clsx';

type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
};

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled = false, className }) => {
    const handleToggle = () => {
        if (!disabled) {
            onChange(!checked);
        }
    };

    return (
        <button
            type="button"
            className={clsx(styles.switch, {
                [styles.checked]: checked,
                [styles.disabled]: disabled,
                [className ?? '']: className,
            })}
            onClick={handleToggle}
            aria-pressed={checked}
            disabled={disabled}
        >
            <span className={styles.thumb} />
        </button>
    );
};
