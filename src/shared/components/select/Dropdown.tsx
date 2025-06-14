import styles from './select.module.scss';
import {useEffect, useRef, useState} from "react";

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    onSelect: (option: Option) => void;
    placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder = 'Выберите элемент' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleOpen = () => setIsOpen(prev => !prev);
    const closeDropdown = () => {
        setIsOpen(false);
        setHighlightedIndex(null);
    };

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onSelect(option);
        closeDropdown();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'Enter') {
                setIsOpen(true);
                setHighlightedIndex(0);
                e.preventDefault();
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(prev =>
                    prev === null || prev === options.length - 1 ? 0 : prev + 1
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(prev =>
                    prev === null || prev === 0 ? options.length - 1 : prev - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (highlightedIndex !== null) {
                    handleSelect(options[highlightedIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                closeDropdown();
                break;
        }
    };

    useEffect(() => {
        if (highlightedIndex !== null && listRef.current) {
            const listItems = listRef.current.querySelectorAll('li');
            const item = listItems[highlightedIndex];
            item?.scrollIntoView({ block: 'nearest' });
        }
    }, [highlightedIndex]);

    return (
        <div className={styles.dropdown}>
            <button
                className={styles.dropdownButton}
                onClick={toggleOpen}
                onKeyDown={handleKeyDown}
                ref={buttonRef}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                {selectedOption?.label || placeholder}
            </button>

            {isOpen && (
                <ul
                    className={`${styles.dropdownList} ${isOpen ? styles.dropdownListOpen : ''}`}
                    role="listbox"
                    ref={listRef}
                    tabIndex={-1}
                >
                    {options.map((option, index) => (
                        <li
                            key={option.value}
                            role="option"
                            aria-selected={selectedOption?.value === option.value}
                            className={`${styles.dropdownItem} ${
                                highlightedIndex === index ? styles.highlighted : ''
                            }`}
                            onMouseDown={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};