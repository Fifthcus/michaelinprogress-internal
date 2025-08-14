import Image from "next/image";
import Icon from "../../../public/icons/add_24dp_171717_FILL0_wght400_GRAD0_opsz24.svg";

const AddIcon = () => {
    return(
        <Image src={Icon} width="24" height="24" alt="Add Icon."/>
    );
}
export default AddIcon;