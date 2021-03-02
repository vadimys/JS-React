import constants from "../../default/Constants";
import Title from './PageTitle'
import List from './HomeWorkList'
import MainRoute from "./MainRoute";
import Work from './Work'

export default function MainView({data}) {
    const name = data.name;
    const pages = data.pages;

    return (
        <>
            <Title name={name} text={constants[`${name.toUpperCase()}`]}/>
            <div className={`page-container-${name}`}>
                {(pages && pages > 1) ? <>
                    <div className={`page-menu-${name}`}>
                        {pages ? <List name={name} pages={pages}/> : null}
                    </div>
                    <hr/>
                    <div className={`page-content-${name}`}>
                        <MainRoute name={name}/>
                    </div>
                </> : <Work name={name}/>}
            </div>
        </>
    )
}
