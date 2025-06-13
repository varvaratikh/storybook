import styles from './checkbox.module.scss';
import {useState} from "react";

export const Checkbox: React.FC<{ label?: string }> = ({ label }) => {

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked((prev) => !prev);
    }

    return(
        <label className={styles.checkboxWrapper}>
            <div
                className={`${styles.checkbox} ${checked ? styles.checked : ""}`}
                onClick={handleCheck}
            >
                {checked && (
                    <svg className={styles.checkmark} viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    )
}