import {useEffect, useState} from 'react'
import {CardData} from "./Card";
import {ListGroup} from 'react-bootstrap';

export default function PhoneListApp() {
    const [list, setList] = useState();
    const [idData, setIdData] = useState();
    const fetchDefault = () => fetchData(list[0].id);

    useEffect(_ => fetchData(), [setList]);

    async function fetchData(id = 0) {
        const url = 'https://api.ifcityevent.com/phonelist/' + (id > 0 ? id : '');
        const res = await fetch(url);

        res.json().then(res => id === 0 ? setList(res) : setIdData(res))
    }

    return (list ?
            <>
                <h4>Телефонний довідник:</h4>
                <ListGroup>
                    {list.map((item, index) => (
                        <div key={index}>
                            <button className=" list-group-item-action"
                                    onClick={(e) => {
                                        fetchData(item.id);
                                        e.preventDefault();
                                    }}>
                                {item.firstName + ' ' + item.lastName}
                            </button>
                        </div>
                    ))}
                </ListGroup>
                <CardData idData={idData} fetchDefault={fetchDefault}/>
            </> : null
    );
}
