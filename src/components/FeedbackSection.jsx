import Button from "./Button/Button.jsx";
import React, {useRef, useState} from "react";

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })

    function handleSetName(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))
    }



    function StateVsRef() {
        const inputRef = useRef();
        const [show, setShow] = useState(false);
        function handleKeyDown(event) {
            if (event.key === 'Enter') {
                setShow(true);
            }
        }

        return (
            <>
                <h3>Input Value: {show && inputRef.current.value} </h3>
                <input
                    ref={inputRef}
                    type='text'
                    className='control'
                    onKeyDown={handleKeyDown}
                />
            </>

        )
    }


    return (<section>
        <h3>Обратная Связь</h3>

        <form>
            <label htmlFor="name">Ваше Имя</label>
            <input
                id="name"
                type="text"
                className='control'
                style={{
                    border: form.hasError ? '1px solid red' : null,
                }}
                value={form.name} onChange={handleSetName}
            />
            <label htmlFor="reason">Причина Обращения</label>
            <select id="reason" className='control' value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({...prev, reason: event.target.value}))
                    }
            >
                <option value="error">Ошибка</option>
                <option value="help">Нужна помощь</option>
                <option value="suggest">Предложение</option>
            </select>
            <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
        </form>
        <StateVsRef/>
    </section>)
}