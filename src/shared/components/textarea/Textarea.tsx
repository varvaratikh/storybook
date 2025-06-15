import style from './textarea.module.scss'
import {useState} from "react";

export const Textarea = () => {

    const [text, setText] = useState("");

    return(
        <textarea className={style.textarea} value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={3}
                  placeholder="Введите текст здесь"
        />
    )
}