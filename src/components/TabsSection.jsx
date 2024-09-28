import Button from "./Button/Button.jsx";
import {useState} from "react";
import {differences} from "../data.js";

export default function TabsSection() {
    const [content, setContent] = useState('Нажми на кнопку')

    function handleClick(type) {
        setContent(type);
    }

    return (
        <section>
            <h3> Чем мы отличаемся от других
            </h3>
            <Button isActive={content === 'way'} onClick={() => {
                handleClick('way')
            }}>Подход</Button>
            <Button isActive={content === 'easy'} onClick={() => {
                handleClick('easy')
            }}>Доступность</Button>
            <Button isActive={content === 'program'} onClick={() => {
                handleClick('program')
            }}>Программа</Button>
            <Button isActive={content === 'education'} onClick={() => {
                handleClick('education')
            }}>Образование</Button>
            <p>{differences[content]}</p>
        </section>


    )
}