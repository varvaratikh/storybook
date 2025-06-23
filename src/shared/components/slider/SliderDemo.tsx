import {Slider} from "@shared/components";

const slides = [
    { id: 1, image: 'https://via.placeholder.com/600x300?text=1' },
    { id: 2, image: 'https://via.placeholder.com/600x300?text=2' },
    { id: 3, image: 'https://via.placeholder.com/600x300?text=3' },
];

export const SliderDemo = () => {
    return <Slider slides={slides} />;
}