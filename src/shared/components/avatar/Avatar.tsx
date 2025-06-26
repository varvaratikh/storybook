import { useRef, useState } from "react";
import styles from "./avatar.module.scss";

export const Avatar: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImageSrc(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={styles.avatarContainer} onClick={handleClick}>
            <div className={styles.avatar}>
                {imageSrc ? (
                    <img src={imageSrc} alt="avatar" className={styles.image} />
                ) : (
                    <span className={styles.placeholder}>+</span>
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className={styles.fileInput}
            />
        </div>
    );
};
