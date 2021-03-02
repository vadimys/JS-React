import UserList from "./UserList";

export default function UserListApp() {
    const listData = [{
        name: 'Alex',
        age: 40,
        active: true,
        nationality: 'Ukrainian',
        address: {
            country: 'Ukraine',
            city: 'Kiev',
            street: 'Mytrofana Dovnar-Zapolskoho St, 7А'
        }
    }, {
        name: 'Ron',
        age: 34,
        active: false,
        nationality: 'Moroccan',
        address: {
            country: 'Morocco',
            city: 'Marrakech',
            street: '4 Derb Chorfa Seghir'
        }
    }, {
        name: 'Vladimir',
        age: 68,
        active: true,
        nationality: 'Russian',
        address: {
            country: 'Russia',
            city: 'Tula',
            street: 'Ulitsa Bratyev Zhabrovykh, 4'
        }
    }, {
        name: 'Robert',
        age: 27,
        active: true,
        nationality: 'American',
        address: {
            country: 'United States',
            city: 'Kansas City',
            street: '3717 Baltimore Ave'
        }
    }, {
        name: 'Paul',
        age: 52,
        active: false,
        nationality: 'Swedish',
        address: {
            country: 'Sweden',
            city: 'Svenstavik',
            street: 'Stationsvägen 7'
        }
    }];

    return <UserList list={listData}/>
}
