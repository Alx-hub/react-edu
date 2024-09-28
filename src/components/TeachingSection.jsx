import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";


export default function TeachingSection(props) {
    return (
        <section>
            <h3>Наш подход</h3>
            <ul>
                {ways.map((way) => (<WayToTeach key={way.title} {...way} />))}
            </ul>
            </section>
    )
}