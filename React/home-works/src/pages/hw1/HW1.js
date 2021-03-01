import {formatName} from '../../utils/Utils'
import constants from "../../default/Constants";
import Title from "../components/PageTitle";

function getGreeting(user) {
    const formatted = formatName(user);

    return <>
        <Title text={constants.HW1}/>
        {formatted ? <h4>Hello, {formatted}!</h4> : <h3>Hello, World!</h3>}
    </>
}

export default getGreeting;
