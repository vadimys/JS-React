import {Card} from 'react-bootstrap';
import {useEffect} from "react";

export function CardData({idData, fetchDefault}) {
    useEffect(() => fetchDefault(), []);

    const getTitle = () => <Card.Title>{idData.firstName + ' ' + idData.lastName}</Card.Title>;

    const getSex = () => idData.sex ?
        <Card.Text>стать:
            {idData.sex === 'male' ? ' чол' : ' жін'}
        </Card.Text> : null;

    const getPhones = () => idData.phones ? idData.phones.map(item =>
        <Card.Text>{item.type}: {item.number}</Card.Text>) : null;

    const showCard = () => idData ?
        <Card>
            <Card.Body>{getTitle()}{getSex()}{getPhones()}</Card.Body>
        </Card> : null;

    return (<>
        {showCard()}
    </>);
}
