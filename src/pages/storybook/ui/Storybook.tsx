import styles from './style.module.scss';
import {useState} from "react";
import {COMPONENTS} from "@/constant/COMPONENTS.tsx";

const OPTIONS = Object.keys(COMPONENTS) as (keyof typeof COMPONENTS)[];

export const Storybook = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<keyof typeof COMPONENTS | null>(null);

    const handleSelect = (option: keyof typeof COMPONENTS) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.dropdown}>
                <button onClick={() => setIsOpen(!isOpen)} className={styles.dropdownButton}>
                    {selected || "Выбери компонент"}
                </button>
                {isOpen && (
                    <ul className={styles.dropdownList}>
                        {OPTIONS.map((option) => (
                            <li
                                key={option}
                                className={styles.dropdownItem}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {selected && (
                <div className={styles.preview}>
                    <h4>Превью компонента:</h4>
                    {COMPONENTS[selected]}
                </div>
            )}
        </div>
    );
}