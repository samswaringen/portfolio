import React, {useState, useEffect} from 'react'
import {appData} from '../appData'



function AppTitle(props) {
    const [divStyle,setDivStyle] = useState('')

    useEffect(()=>{
        switch(props.name){
            case 'app1':
                setDivStyle('dalek');
                break;
            case 'app2':
                setDivStyle('neuehaas');
                break;
        }
    },[])
    return (
        <div className = {divStyle}>
            
            {(props.name === 'app1') && <>{appData[props.name].title} <img className = "bankthumb" src={appData[props.name].thumbnail} /></>}
            {(props.name === 'app2') && <div className="verizon-title-div"><div className="vztitle">{appData[props.name].title}</div><img className = "verizonthumb" src={appData[props.name].thumbnail}/></div>}
            {(props.name === 'app3') && <div className="crypto-title">{appData[props.name].title}<div className="ombudsman">*Under Construction*</div></div>}
            {(props.name === 'app4') && <div className="pac-eraser-title neon">{appData[props.name].title}</div>}
            {(props.name === 'app5') && <div className="old-portfolio-title">{appData[props.name].title}</div>}
        </div>
    )
}

export default AppTitle
