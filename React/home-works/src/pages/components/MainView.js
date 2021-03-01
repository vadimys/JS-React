import constants from "../../default/Constants";
import Title from './PageTitle'
import List from './HomeWorkList'
import MainRoute from "./MainRoute";
import HomeWork from './HomeWorkById'

export default function MainView({name, pages}) {
    return (
        <>
            <Title name={name} text={constants[`${name.toUpperCase()}`]}/>
            <div className={`page-container-${name}`}>
                {pages ? <>
                    <div className={`page-menu-${name}`}>
                        {pages ? <List name={name} pages={pages}/> : null}
                    </div>
                    <hr/>
                    <div className={`page-content-${name}`}>
                        <MainRoute name={name}/>
                    </div>
                </> : <HomeWork name={name}/>}
            </div>
        </>
    )
}
