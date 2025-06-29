import styles from './chip.module.scss';

type ChipProps = {
    label: string;
    color?: "default" | "primary" | "secondary" | "success" | "danger";
    onClick?: () => void;
    onDelete?: () => void;
};

export const Chip: React.FC<ChipProps> = ({
                                              label,
                                              color = "default",
                                              onClick,
                                              onDelete,
                                          }) => {
    return (
        <div
            className={`${styles.chip} ${styles[color]} ${
                onClick ? styles.clickable : ""
            }`}
            onClick={onClick}
        >
            <span>{label}</span>
            {onDelete && (
                <button className={styles.deleteButton} onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}>
                    ×
                </button>
            )}
        </div>
    );
};