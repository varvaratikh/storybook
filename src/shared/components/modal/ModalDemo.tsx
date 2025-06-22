import { useState } from "react";
import {Modal} from "@shared/components";

export const ModalDemo = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setModalOpen(true)}>Открыть модалку</button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Привет 👋</h2>
                <p>Это модальное окно.</p>
            </Modal>
        </>
    );
};
