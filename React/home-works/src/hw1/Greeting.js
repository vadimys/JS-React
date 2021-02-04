import {formatName} from '../utils/Utils'

function getGreeting(user) {
    const formatted = formatName(user);

    if (formatted) {
        return <h1>Hello, {formatted}!</h1>;
    }
    return <h1>Hello, World!</h1>;
}

export default getGreeting;
