import Button from "./Button/Button.jsx";
import React from "react";

export default function FeedbackSection() {
    const [name, setName] = React.useState("");
    const [hasError, setHasError] = React.useState(false);

    function handleSetName(event) {
        setName(event.target.value);
        setHasError(event.target.value.trim().length === 0)
    }

    const [reason, setReason] = React.useState("error");
    return (<section>
        <h3>Обратная Связь</h3>

        <form>
            <label htmlFor="name">Ваше Имя</label>
            <input
                id="name"
                type="text"
                className='control'
                style={{
                    border: hasError ? '1px solid red' : null,
                }}
                value={name} onChange={handleSetName}
            />
            <label htmlFor="reason">Причина Обращения</label>
            <select id="reason" className='control' value={reason}
                    onChange={(event) => setReason(event.target.value)}>
                <option value="error">Ошибка</option>
                <option value="help">Нужна помощь</option>
                <option value="suggest">Предложение</option>
            </select>
            <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
        </form>
    </section>)
}