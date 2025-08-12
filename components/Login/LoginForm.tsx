import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import LoginIcon from "../ui/icons/LoginIcon";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleUpdateState = (updateInputState: () => void) => {
        updateInputState();
    }
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            username,
            password
        });
        if (result?.ok) {
            router.push("https://www.apple.com/");
        } else {
            setError(result?.error || "Login failed");
        }
    }
    return(
        <form onSubmit={ (event) => handleSubmit(event) }>
            <fieldset className="flex flex-col gap-4">
                <legend className="text-center py-2">Sign Into Account</legend>
                {error ? "Failed" : null}
                <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" className="border border-neutral-400 rounded-lg py-2 pl-1" value={username} onChange={ (event) => {
                        const updateInputState = () => {
                            setUsername(event.target.value);
                        }
                        handleUpdateState(updateInputState);
                    } }/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="border border-neutral-400 rounded-lg py-2 pl-1" value={password} onChange={ (event) => {
                        const updateInputState = () => {
                            setPassword(event.target.value);
                        }
                        handleUpdateState(updateInputState);
                    } }/>
                </div>

                <button className="flex justify-center text-gray-50 cursor-pointer w-full py-2 px-6 bg-blue-400 border border-blue-400 rounded-lg">Login<span><LoginIcon/></span></button>
            </fieldset>
        </form>
    );
}

export default LoginForm;