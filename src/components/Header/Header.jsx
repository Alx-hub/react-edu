import logo from '/logo-name.svg'
import {useState} from "react";
import { styled } from 'styled-components';

//import './Header.css'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`
export default function Head() {
    const name = 'Result'
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)
    return (
        <HeaderContainer>
            <img src={logo} alt={name}/>
            <time>{`Time: ${time.toLocaleTimeString()}`}</time>
        </HeaderContainer>
    )
}

