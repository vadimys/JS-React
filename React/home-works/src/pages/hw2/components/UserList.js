import User from "./User";

export default function UserList({list}) {
    const users = list.map((item, index) => <User key={index} data={item}/>
    );

    return <>
        {users}
    </>
}
