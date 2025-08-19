import Image from "next/image";
import Icon from "../../../public/icons/delete_24dp_171717_FILL0_wght400_GRAD0_opsz24.svg";

const DeleteIcon = () => {
    return(
        <Image src={Icon} width="24" height="24" alt="Delete Icon."/>
    );
}
export default DeleteIcon;