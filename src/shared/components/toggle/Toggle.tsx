import styles from "./toggle.module.scss";

import { Moon, Sun } from 'lucide-react';
import {useState} from "react";

export const Toggle = () => {
    const [checked, setChecked] = useState(false);

    return (
        <button
            className={`${styles.switch} ${checked ? styles.checked : ''}`}
            onClick={() => setChecked(!checked)}
            aria-label="Toggle switch"
        >
              <span className={styles.icon}>
                {checked ? <Sun size={16} /> : <Moon size={16} />}
              </span>
            <span className={styles.circle} />
        </button>
    );
};
