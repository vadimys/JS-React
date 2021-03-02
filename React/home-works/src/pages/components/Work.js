import homeWorks from './HomeWorks'

export default function Work(props) {
    const id = props.match ? parseInt(props.match.params.id) : null;
    const name = props.name.toUpperCase();
    let HW = homeWorks[name];

    if (id) {
        HW = HW[name + '_' + id];
    }

    return <HW/>;
}
