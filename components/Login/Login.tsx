"use client"

import { useState } from "react";
import ModalBackground from "../utilities/ModalBackground";

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLoginUIModalOpen = (isOpen: boolean) => {
        setIsModalOpen(isOpen);
    }
    return(
        <>
            <button className="bg-blue-400 border border-blue-400 text-gray-50 py-2 px-6 rounded-lg cursor-pointer" onClick={() => isLoginUIModalOpen(true)}>Log In</button>
            { isModalOpen ?
                <ModalBackground isLoginUIModalOpen={isLoginUIModalOpen}>
                    <p>test</p>
                </ModalBackground> 
                :
                null
            }
        </>
    );
}
export default Login;