import {formatName} from '../../utils/Utils'

const user = {
    firstName: 'Vadym',
    lastName: 'Zelinskyi'
}

export default function getGreeting() {
    const formatted = formatName(user);

    return <>
        {formatted ? <h4>Hello, {formatted}!</h4> : <h4>Hello, World!</h4>}
    </>;
}
