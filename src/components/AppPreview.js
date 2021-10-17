import React from 'react'
import {appData} from '../appData'


function AppPreview(props) {
    return (
        <div className= {`video-${props.name}-div`}>
            <video className= {`video-${props.name}`} autoPlay loop muted width="100%">
                <source src={appData[props.name].preview} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default AppPreview
