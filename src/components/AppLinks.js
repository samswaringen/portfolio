import React from 'react'
import {appData} from '../appData'


function AppLinks(props) {
    return (
        <div>
            {(props.name != 'app3') && <div className = "website-link-div">Visit the <a className = "website-link" href={appData[props.name].website}>Website</a></div>}
            {(props.name === 'app3') && <div className = "website-link-div">Visit the <a className = "website-link" >*Under Construction*</a></div>}
            
        </div>
    )
}

export default AppLinks
