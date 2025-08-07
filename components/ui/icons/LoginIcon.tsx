import Image from "next/image";
import Icon from "../../../public/icons/login_24dp_F9FAFB_FILL0_wght400_GRAD0_opsz24.svg";

const LoginIcon = () => {
    return(
        <Image src={Icon} width="24" height="24" alt="Login Icon."/>
    );
}
export default LoginIcon;