import style from './button.module.scss';

interface ButtonProps {
    text: string;
}

export const Button = ({text} : ButtonProps) => {
    return(
        <button className={style.button} onClick={() => console.log('Press')}>{text}</button>
    )
}
