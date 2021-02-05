export default function Address({data}) {
    return (
        <label>Address: {data.country}, {data.city}, {data.street}</label>
    )
}
