import UserList from "./UserList";

export default function App() {
    const listData = [{
        name: 'Alex',
        age: 40,
        active: true,
        nationality: 'Ukrainian'
    }, {
        name: 'Ron',
        age: 34,
        active: false,
        nationality: 'Moroccan'
    }, {
        name: 'Vladimir',
        age: 68,
        active: true,
        nationality: 'Russian'
    }, {
        name: 'Robert',
        age: 27,
        active: true,
        nationality: 'American'
    }, {
        name: 'Paul',
        age: 52,
        active: false,
        nationality: 'Swedish'
    }];

    return <UserList list={listData}/>
}
