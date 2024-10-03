import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useState} from "react";

export default function EffectSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }


    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Открыть информацию</Button>
            <Modal open={isModalOpen}>
                <h3>Modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum, eum impedit minus nihil
                    numquam perferendis, possimus quam repellendus sed sequi sunt totam voluptates. Architecto
                    consequuntur cum ducimus quaerat quas.</p>
                <Button onClick={()=>setIsModalOpen(false)}>Close</Button>
            </Modal>
        </section>
    )
}
