import { PButton, PModal } from "@porsche-design-system/components-react";
import { useState } from "react";

export const PopupButton = () => {
    const [openModal, setOpenModal] = useState(false);
    return <div>
        <PButton onClick={() => setOpenModal(true)}>Press me!</PButton>
        <PModal open={openModal} heading={"Modal"} onClose={() => setOpenModal(false)}>
            <div style={{width: "400px", height: "300px"}}>Hello from Modal!</div>
        </PModal>
    </div>;
};