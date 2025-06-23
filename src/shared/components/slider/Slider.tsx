import styles from './slider.module.scss';

import clsx from 'clsx';
import {useState} from "react";

interface Slide {
    id: number;
    image: string;
    alt?: string;
}

interface SliderProps {
    slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slides}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={clsx(styles.slide, {
                            [styles.active]: index === currentIndex,
                        })}
                    >
                        <img src={slide.image} alt={slide.alt || 'Slide'} />
                    </div>
                ))}
            </div>
            <button className={styles.prev} onClick={prevSlide}>‹</button>
            <button className={styles.next} onClick={nextSlide}>›</button>
            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={clsx(styles.dot, {
                            [styles.activeDot]: index === currentIndex,
                        })}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};