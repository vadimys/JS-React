export default function User({data}) {
    return <div>
        <label>Name: {data.name}</label><br/>
        <label>Age: {data.age}</label><br/>
        <label>Availability: {data.active ? '+' : '-'}</label><br/>
        <label>Nationality: {data.nationality}</label><br/><br/>
    </div>
}
