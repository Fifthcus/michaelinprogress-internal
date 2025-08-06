import { createPortal } from "react-dom";

const ModalBackground = ({ children, isLoginUIModalOpen }: Readonly<{ children: React.ReactNode, isLoginUIModalOpen: (isOpen: boolean) => void }>) => {
    return createPortal(
        <div className="absolute top-0 left-0 w-full h-full mipi-portal" onClick={() => isLoginUIModalOpen(false)}>
            { children }
        </div>,
        document.getElementById("mipi-portal")!
    );
}

export default ModalBackground;