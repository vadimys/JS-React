import User from "./User";

export default function UserList({list}) {
    const users = list.map((item) =>
        <User data={item}/>
    );

    return <>
        {users}
    </>
}
