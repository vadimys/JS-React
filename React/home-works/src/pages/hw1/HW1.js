import {formatName} from '../../utils/Utils'

const user = {
    firstName: 'Vadym',
    lastName: 'Zelinskyi'
}

export default function getGreeting() {
    const formatted = formatName(user);

    return <>
        {formatted ? <h5>Hello, {formatted}!</h5> : <h4>Hello, World!</h4>}
    </>;
}
