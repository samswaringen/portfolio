import React from 'react'
import {appData} from '../appData'


function AppGit(props) {
    return (
        <div>
            {
             (appData[props.name].github.length > 1) 
             ? <div className="github-link-div">Front-End {<a className="github-link" href={appData[props.name].github[0]}>Here </a> }| GraphQL API {<a className="github-link" href={appData[props.name].github[1]}>Here </a>}| Auth API {<a className="github-link" href={appData[props.name].github[2]}>Here </a>}</div> 
             : <div className="github-link-div">Check out the code <a className="github-link" href={appData[props.name].github}>Here</a></div>
            }
            
        </div>
    )
}

export default AppGit
