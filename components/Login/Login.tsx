"use client"

import { useState } from "react";
import ModalContainer from "../utilities/ModalContainer";
import LoginForm from "./LoginForm";

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLoginUIModalOpen = (isOpen: boolean) => {
        setIsModalOpen(isOpen);
    }
    return(
        <>
            <button className="bg-blue-400 border border-blue-400 text-gray-50 py-2 px-6 rounded-lg cursor-pointer" onClick={() => isLoginUIModalOpen(true)}>Login</button>
            { isModalOpen ?
                <ModalContainer isLoginUIModalOpen={isLoginUIModalOpen}>
                    <LoginForm/>
                </ModalContainer>
                :
                null
            }
        </>
    );
}
export default Login;