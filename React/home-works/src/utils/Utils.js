export function formatName(user) {
    return (user.firstName && user.lastName) ? (user.firstName + ' ' + user.lastName) : user.firstName ?
        user.firstName : user.lastName ? user.lastName : undefined;
}
