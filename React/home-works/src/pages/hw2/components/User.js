import Address from "./Address";

export default function User({data}) {
    return (
        <div style={{backgroundColor: !data.active ? 'gray' : ''}}>
            <p><label>Name: {data.name}</label><br/>
                <label>Age: {data.age}</label><br/>
                <label>Nationality: {data.nationality}</label><br/>
                <Address data={data.address}/>
            </p>
        </div>
    );
}
