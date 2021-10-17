import {appData} from '../appData'



function AppSummary(props) {
    console.log("appdata",appData)
    return (
        <div className="app-div">
            <div>{appData[props.name].summary}</div>
        </div>
    )
}

export default AppSummary
