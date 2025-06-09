import {useState} from "react";
import styles from "@pages/storybook/ui/style.module.scss";

export const Toggle = () => {
    const [on, setOn] = useState(false);
    return (
        <label className={styles.toggle}>
            <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
            <span>{on ? "Включено" : "Выключено"}</span>
        </label>
    );
};