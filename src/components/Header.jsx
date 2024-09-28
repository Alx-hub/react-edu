import logo from '/logo-name.svg'
import {useState} from "react";

export default function Head() {
    const name = 'Result'
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)
    return (
        <header>
            <img src={logo} alt={name}/>
            <time>{`Time: ${time.toLocaleTimeString()}`}</time>
        </header>
    )
}

