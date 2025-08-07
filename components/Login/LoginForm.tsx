import LoginIcon from "../ui/icons/LoginIcon";

const LoginForm = () => {
    return(
        <form>
            <fieldset className="flex flex-col gap-4">
                <legend className="text-center py-4">Sign Into Account</legend>
                
                <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" className="border border-neutral-400 rounded-lg py-2 pl-1"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="border border-neutral-400 rounded-lg py-2 pl-1"/>
                </div>

                <button className="flex justify-center text-gray-50 cursor-pointer w-full py-2 px-6 bg-blue-400 border border-blue-400 rounded-lg">Login<span><LoginIcon/></span></button>
            </fieldset>
        </form>
    );
}

export default LoginForm;