import ModalBackground from "./ModalBackground";

const ModalContainer = ({ children, isLoginUIModalOpen }: Readonly<{ children: React.ReactNode, isLoginUIModalOpen: (isOpen: boolean) => void }>) => {
    return(
        <ModalBackground isLoginUIModalOpen={isLoginUIModalOpen}>
            <div className="flex flex-col gap-2 w-11/12 md:w-8/12 lg:w-4/12 bg-neutral-100 m-auto p-4" onClick={
                (event) => {
                    event.stopPropagation(); //prevents isLoginUIModalOpen(false) from executing
                }
            }>
                <div className="self-end">
                    <button className="text-xl cursor-pointer" onClick={() => isLoginUIModalOpen(false)}>X</button>
                </div>
                { children }
            </div>
        </ModalBackground>
    );
}

export default ModalContainer;