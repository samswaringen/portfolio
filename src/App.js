import React, {useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik'
import styles from './styles/Home.module.css'
import AppSummary from './components/AppSummary'
import AppPreview from './components/AppPreview'
import AppLinks from './components/AppLinks'
import AppGit from './components/AppGit'
import AppTitle from './components/AppTitle'
import './styles/globals.css'

const randomNum = (num) => Math.floor(Math.random()* num)

const initialTops = {
  box1:randomNum(100)+ 'vh',
  box2:randomNum(100)+ 'vh',
  box3:randomNum(100)+ 'vh',
  box4:randomNum(100)+ 'vh',
  box5:randomNum(100)+ 'vh'
}
const initialLefts = {
  box1:randomNum(100)+ 'vh',
  box2:randomNum(100)+ 'vh',
  box3:randomNum(100)+ 'vh',
  box4:randomNum(100)+ 'vh',
  box5:randomNum(100)+ 'vh'
}

const initialValues = {
  firstName:"",
  lastName:"",
  email:"",
  notes:""
}

const onSubmit = (values)=>{
  console.log("values",values)
}

function App() {
  const [isShrunk, setShrunk] = useState(false);
  const [app1Shrunk, setApp1Shrunk] = useState(false);
  const [app2Shrunk, setApp2Shrunk] = useState(false);
  const [app3Shrunk, setApp3Shrunk] = useState(false);
  const [app4Shrunk, setApp4Shrunk] = useState(false);
  const [app5Shrunk, setApp5Shrunk] = useState(false);
  const [boxTops, setBoxTops] = useState(initialTops)
  const [boxLefts, setBoxLefts] = useState(initialLefts)
  const [aboutMe, setAboutMe] = useState(false)
  const [contactMe, setContactMe] = useState(false)

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.documentElement.scrollTop > 100)) {
          return true;
        }
        if (isShrunk && document.documentElement.scrollTop < 80) {
          return false;
        }
        return isShrunk;
      });
      setAboutMe((aboutMe)=>{
        if(!aboutMe && document.documentElement.scrollTop > 100 && !aboutMe && document.documentElement.scrollTop < 1000){
          return true
        }
        if(aboutMe && document.documentElement.scrollTop > 500 && aboutMe && document.documentElement.scrollTop < 1000){
          document.getElementById('about-me').style.opacity = ((1000 - document.documentElement.scrollTop)/400).toString()
        }
        if(document.documentElement.scrollTop < 100 || aboutMe && document.documentElement.scrollTop > 1000){
          return false;
        }
        if(aboutMe && document.documentElement.scrollTop < 500 || aboutMe && document.documentElement.scrollTop > 1000){
          document.getElementById('about-me').style.opacity = '1'
        }
        return aboutMe
      })
      setApp1Shrunk((app1Shrunk) => {
        if (!app1Shrunk && document.documentElement.scrollTop > 1000 && !app1Shrunk && document.documentElement.scrollTop < 2000) {
          console.log("app1 loading")
          return true;
        }
        if(app1Shrunk && document.documentElement.scrollTop  > 1600 && app1Shrunk && document.documentElement.scrollTop < 2000){
          document.getElementById('app-box-load').style.opacity = ((2000 - document.documentElement.scrollTop)/400).toString()
        }
        if (app1Shrunk && document.documentElement.scrollTop > 2000 || app1Shrunk && document.documentElement.scrollTop < 1000) {
          console.log("app1 Leaving")
          randomizeBoxes()
          return false;
        }
        if (app1Shrunk && document.documentElement.scrollTop > 2000 || app1Shrunk && document.documentElement.scrollTop < 1600) {
          document.getElementById('app-box-load').style.opacity = '1'
        }
        return app1Shrunk;
      });
      setApp2Shrunk((app2Shrunk) => {
        if (!app2Shrunk && document.documentElement.scrollTop > 2000 && !app2Shrunk && document.documentElement.scrollTop < 3000) {
          console.log("app2 loading")
          return true;
        }
        if(app2Shrunk && document.documentElement.scrollTop  > 2600 && app2Shrunk && document.documentElement.scrollTop < 3000){
          document.getElementById('app-box-load').style.opacity = ((3000 - document.documentElement.scrollTop)/400).toString()
        }
        if (app2Shrunk && document.documentElement.scrollTop > 3000 || app2Shrunk && document.documentElement.scrollTop < 2000 ) {
          console.log("app2 Leaving")
          randomizeBoxes()
          return false;
        }
        if (app2Shrunk && document.documentElement.scrollTop > 3000 || app2Shrunk && document.documentElement.scrollTop < 2600) {
          document.getElementById('app-box-load').style.opacity = '1'
        }
        return app2Shrunk;
      });
      setApp3Shrunk((app3Shrunk) => {
        if (!app3Shrunk && document.documentElement.scrollTop > 3000 && !app3Shrunk && document.documentElement.scrollTop < 4000 ) {
          console.log("app3 loading")
          return true;
        }
        if (app3Shrunk && document.documentElement.scrollTop > 3600 && app3Shrunk && document.documentElement.scrollTop < 4000 ) {
          document.getElementById('app-box-load').style.opacity = ((4000 - document.documentElement.scrollTop)/400).toString()
        }
        if (app3Shrunk && document.documentElement.scrollTop > 4000 || app3Shrunk && document.documentElement.scrollTop < 3000 ) {
          console.log("app3 Leaving")
          randomizeBoxes()
          return false;
        }
        if (app3Shrunk && document.documentElement.scrollTop > 4000 || app3Shrunk && document.documentElement.scrollTop < 3600) {
          document.getElementById('app-box-load').style.opacity = '1'
        }
        return app3Shrunk;
      });
      setApp4Shrunk((app4Shrunk) => {
        if (!app4Shrunk && document.documentElement.scrollTop > 4000 && !app4Shrunk && document.documentElement.scrollTop < 5000) {
          console.log("app4 loading")
          return true;
        }
        if (app4Shrunk && document.documentElement.scrollTop > 4600 && app4Shrunk && document.documentElement.scrollTop < 5000) {
          document.getElementById('app-box-load').style.opacity = ((5000 - document.documentElement.scrollTop)/400).toString()
        }
        if (app4Shrunk && document.documentElement.scrollTop > 5000 || app4Shrunk && document.documentElement.scrollTop < 4000 ) {
          console.log("app4 Leaving")
          randomizeBoxes()
          return false;
        }
        if (app4Shrunk && document.documentElement.scrollTop > 5000 || app4Shrunk &&  document.documentElement.scrollTop < 4600) {
          document.getElementById('app-box-load').style.opacity = '1'
        }
        return app4Shrunk;
      });
      setApp5Shrunk((app5Shrunk) => {
        if (!app5Shrunk && document.documentElement.scrollTop > 5000 && !app5Shrunk && document.documentElement.scrollTop < 6000) {
          console.log("app5 loading")
          return true;
        }
        if (app5Shrunk && document.documentElement.scrollTop > 5600 && app5Shrunk && document.documentElement.scrollTop < 6000) {
          document.getElementById('app-box-load').style.opacity = ((6000 - document.documentElement.scrollTop)/400).toString()
        }
        if (app5Shrunk && document.documentElement.scrollTop > 6000 || app5Shrunk && document.documentElement.scrollTop < 5000) {
          console.log("app5 Leaving")
          randomizeBoxes()
          return false;
        }
        if (app5Shrunk && document.documentElement.scrollTop > 6000 || app5Shrunk && document.documentElement.scrollTop < 5600) {
          document.getElementById('app-box-load').style.opacity = '1'
        }
        return app5Shrunk;
      });
      setContactMe((contactMe)=>{
        if(!contactMe && document.documentElement.scrollTop > 6000){
          document.getElementById('app-box-load').style.opacity = '1'
          return true
        }
        if( contactMe && document.documentElement.scrollTop < 6000){
          return false
        }
        return contactMe
      })
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(()=>{
    if(isShrunk){
      document.getElementById('main-title').style.height = '10vh'
      document.getElementById('main-title-header').style.fontSize = '8vh'
      document.getElementById('title-shadow').style.fontSize = '8vh'
      document.getElementById('title-shadow').style.textShadow = '1px 1px 1px grey'
      document.getElementById('main-title-header').style.top = '0'
      document.getElementById('title-shadow').style.top = '0'
      document.getElementById('main-title-message').classList.remove('gold')
      document.getElementById('main-title-message').classList.add('display-none')
      
    }
    let arrowBounce;
    if(!isShrunk){
      arrowBounce = setInterval(()=>{
        document.getElementById('main-title-message').style.top = '38%'
        setTimeout(()=>{
          document.getElementById('main-title-message').style.top = '45%'
        },100) 
        setTimeout(()=>{
          document.getElementById('main-title-message').style.top = '43.5%'
        },200)
        setTimeout(()=>{
          document.getElementById('main-title-message').style.top = '45%'
        },300)
      },2000)
      document.getElementById('main-title').style.height = '100vh'
      document.getElementById('main-title-header').style.fontSize = '40vh'
      document.getElementById('title-shadow').style.fontSize = '40vh'
      document.getElementById('title-shadow').style.textShadow = '1px 1px 4px grey'
      document.getElementById('main-title-header').style.top = '20vh'
      document.getElementById('title-shadow').style.top = '20vh'
      document.getElementById('main-title-message').classList.remove('display-none')
      document.getElementById('main-title-message').classList.add('gold')
    }
    return()=>{
      clearInterval(arrowBounce)
    }
  },[isShrunk])

  useEffect(()=>{
    if(app1Shrunk || app3Shrunk || app5Shrunk){
      setTimeout(()=>{
        document.getElementById('box1').style.top = '10vh';
        document.getElementById('box1').style.left = '5vw';
        document.getElementById('box1').style.opacity = "1";

        document.getElementById('box2').style.top = '60vh';
        document.getElementById('box2').style.left = '5vw';
        document.getElementById('box2').style.opacity = "1";


        document.getElementById('box3').style.top = '60vh';
        document.getElementById('box3').style.left = '30vw';
        document.getElementById('box3').style.opacity = "1";


        document.getElementById('box4').style.top = '25vh';
        document.getElementById('box4').style.left = '56vw';
        document.getElementById('box4').style.opacity = "1";


        document.getElementById('box5').style.top = '10vh';
        document.getElementById('box5').style.left = '56vw';
        document.getElementById('box5').style.opacity = "1";

      },10)  
    } 
  }, [app1Shrunk, app3Shrunk, app5Shrunk])

  useEffect(()=>{
    if(app2Shrunk || app4Shrunk) {
      setTimeout(()=>{
        document.getElementById('box1').style.top = '10vh';
        document.getElementById('box1').style.left = '35vw';
        document.getElementById('box1').style.opacity = "1";

        document.getElementById('box2').style.top = '55vh';
        document.getElementById('box2').style.left = '35vw';
        document.getElementById('box2').style.opacity = "1";

        document.getElementById('box3').style.top = '55vh';
        document.getElementById('box3').style.left = '60vw';
        document.getElementById('box3').style.opacity = "1";

        document.getElementById('box4').style.top = '25vh';
        document.getElementById('box4').style.left = '5vw';
        document.getElementById('box4').style.opacity = "1";

        document.getElementById('box5').style.top = '10vh';
        document.getElementById('box5').style.left = '5vw';
        document.getElementById('box5').style.opacity = "1";
      },10)  
    } 
  }, [app2Shrunk, app4Shrunk])

  useEffect(()=>{
    if(app1Shrunk){
      document.getElementById('io').classList.remove('flow')
      document.getElementById('main-title-header').classList.remove('gold')
      document.getElementById('main-title-header').classList.add('marble')
      document.getElementById('app-box-load').classList.remove('black-back')
    }
    if(!app1Shrunk){
      document.getElementById('app-box-load').classList.add('black-back')
      document.getElementById('main-title-header').classList.add('gold')
      document.getElementById('main-title-header').classList.remove('marble')
      document.getElementById('io').classList.add('flow')
    }
  },[app1Shrunk])

  useEffect(()=>{
    if(app2Shrunk){
      document.getElementById('io').classList.remove('flow')
      document.getElementById('main-title-header').classList.remove('gold')
      document.getElementById('main-title-header').classList.add('red')
      document.getElementById('app-box-load').classList.add('brick-back')
      setTimeout(()=>{
        document.getElementById('main-title-header').classList.remove('red')
        document.getElementById('sam').style.color = 'white'
        document.getElementById('io').style.color = 'red'
      },1200)
    }
    if(!app2Shrunk){
      document.getElementById('main-title-header').classList.add('gold')
      document.getElementById('app-box-load').classList.remove('brick-back')
    }
  },[app2Shrunk])

  useEffect(()=>{
    if(app3Shrunk){
      document.getElementById('io').classList.add('flow')
      document.getElementById('app-box-load').classList.remove('black-back')
      document.getElementById('app-box-load').classList.add('crypto-back')
      document.getElementById('io').classList.add('line-back')
      document.getElementById('main-title-header').classList.remove('gold')
    }
    if(!app3Shrunk){
      document.getElementById('app-box-load').classList.remove('crypto-back')
      document.getElementById('app-box-load').classList.add('black-back')
      document.getElementById('io').classList.remove('line-back')
    }
  },[app3Shrunk])

  useEffect(()=>{
    if(app4Shrunk){
      document.getElementById('io').classList.remove('flow')
      document.getElementById('main-title-header').classList.remove('gold')
      document.getElementById('main-title-header').classList.add('neon')
      
    }
    if(!app4Shrunk){
      document.getElementById('io').classList.add('flow')
      document.getElementById('main-title-header').classList.remove('neon')
    }
  },[app4Shrunk])

  useEffect(()=>{
    if(app5Shrunk){
      document.getElementById('main-title-header').classList.add('melting-back')
      document.getElementById('io').classList.remove('flow')
    }
    if(!app5Shrunk){
      document.getElementById('main-title-header').classList.remove('melting-back')
    }
  },[app5Shrunk])

  const randomizeBoxes = ()=>{
    setBoxTops({
      box1:randomNum(100)+ 'vh',
      box2:randomNum(100)+ 'vh',
      box3:randomNum(100)+ 'vh',
      box4:randomNum(100)+ 'vh',
      box5:randomNum(100)+ 'vh'
    })
    setBoxLefts({
      box1:randomNum(100)+ 'vw',
      box2:randomNum(100)+ 'vw',
      box3:randomNum(100)+ 'vw',
      box4:randomNum(100)+ 'vw',
      box5:randomNum(100)+ 'vw'
    })
  }

  return (
 
    <div className={styles.container}>
      <div id="main-title">
          <div id="main-title-header" className="gold"><span id="sam">SAM</span><span className="flow" id="io"> IO</span></div>
          <div id="title-shadow">SAM IO</div>
          <div id="main-title-message" className="gold">&#9660;</div>
      </div>
      <div id="app-box-load" className="black-back">
      { aboutMe && <div id='about-me' className="">
        <p>First and foremost let me <strong>Thank You</strong> for visiting my portfolio website!</p>
        <div>My name is Sam and I've put together a few of the projects I have worked on over the past year to highlight my abilities and expertise. Ever since I installed thr first AOL disc I've had a love for the web, computers and all things technology. 
          I followed a path in college, after pursuing a degree in aerospace engineering, that lead me to enroll in game design and programming. Here I began dabbling in coding but ultimately got a job in the cellular technologies field in the early days of the smartphone. 
          After spending over a decade putting the web in peoples hands, I decided to finish what I started and pursue a career in web and software development.
          I enrolled in the MIT xPro MERN stack bootcamp in December of 2020 with the intention of following a passion for learning and understanding. 
          The bootcamp covered the MERN stack as well as numerous other technologies related to creating a fullstack web applicaton and I've highlighted some of them here. The below applications are a culmination of what I have learned during my time enrolled in the boot camp, 
          however, they only mark the beginning of my learning. I plan to continue practice and grow my understanding of web development and update this website with future applications.</div>   
          <p> At the bottom are links to GitHub, LinkedIn, Twitter as well as my email if you want to contact me. Resume available upon request.</p>
      <div id="icon-div">
        <img className="gray mongodb" src="mongodb.png" width="150px" ></img>
        <img className="gray express" src="express.png" width="90px"></img>
        <img className="gray react" src="react.png" width="150px"></img>
        <img className="gray nodejs" src="nodejs.png" width="120px"></img>
        <img className="gray docker" src="docker.png" width="90px"></img>
        <img className="gray graphql" src="graphql.svg" width="90px"></img>
      </div>
      </div>
      }
      { app1Shrunk && <>
        <div id="box1" className= "app-box box1 back-marble" style = {{top:`${boxTops.box1}`, left:`${boxLefts.box1}`}}><AppPreview name = 'app1' /></div>
        <div id="box2" className= "app-box box2" style = {{ top:`${boxTops.box2}`, left:`${boxLefts.box2}`}}><AppGit name = 'app1' /></div>
        <div id="box3" className= "app-box box3" style = {{ top:`${boxTops.box3}`, left:`${boxLefts.box3}`}}><AppLinks name ='app1' /></div>
        <div id="box4" className= "app-box box4" style = {{ top:`${boxTops.box4}`, left:`${boxLefts.box4}`}}><AppSummary name = 'app1' /></div>
        <div id="box5" className= "app-box box5" style = {{ top:`${boxTops.box4}`, left:`${boxLefts.box5}`}}><AppTitle name='app1' /></div>
        <div id="bank-background"></div>
      </>
      }
        {app2Shrunk && <>
          <div id="box1" className= "app-box box1" style = {{ top:`${boxTops.box1}`, left:`${boxLefts.box1}`}}><AppPreview name = 'app2' /></div>
          <div id="box2" className= "app-box box2" style = {{ top:`${boxTops.box2}`, left:`${boxLefts.box2}`}}><AppGit name = 'app2' /></div>
          <div id="box3" className= "app-box box3" style = {{ top:`${boxTops.box3}`, left:`${boxLefts.box3}`}}><AppLinks name ='app2' /></div>
          <div id="box4" className= "app-box box4" style = {{ top:`${boxTops.box4}`, left:`${boxLefts.box4}`}}><AppSummary name = 'app2' /></div>
          <div id="box5" className= "app-box box5" style = {{ top:`${boxTops.box5}`, left:`${boxLefts.box5}`}}><AppTitle name='app2' /></div>
      </>
      }
        {app3Shrunk && <>
          <div id="box1" className= "app-box box1" style = {{ top:`${boxTops.box1}`, left:`${boxLefts.box1}`}}><AppPreview name = 'app3' /></div>
          <div id="box2" className= "app-box box2" style = {{ top:`${boxTops.box2}`, left:`${boxLefts.box2}`}}><AppGit name = 'app3' /></div>
          <div id="box3" className= "app-box box3" style = {{ top:`${boxTops.box3}`, left:`${boxLefts.box3}`}}><AppLinks name ='app3' /></div>
          <div id="box4" className= "app-box box4" style = {{ top:`${boxTops.box4}`, left:`${boxLefts.box4}`}}><AppSummary name = 'app3' /></div>
          <div id="box5" className= "app-box box5" style = {{ top:`${boxTops.box5}`, left:`${boxLefts.box5}`}}><AppTitle name='app3' /></div>
      </>
      }
        { app4Shrunk && <>
          <div id="box1" className= "app-box box1 neon-back" style = {{ top:`${boxTops.box1}`, left:`${boxLefts.box1}`}}><AppPreview name = 'app4' /></div>
          <div id="box2" className= "app-box box2" style = {{ top:`${boxTops.box2}`, left:`${boxLefts.box2}`}}><AppGit name = 'app4' /></div>
          <div id="box3" className= "app-box box3" style = {{ top:`${boxTops.box3}`, left:`${boxLefts.box3}`}}><AppLinks name ='app4' /></div>
          <div id="box4" className= "app-box box4" style = {{ top:`${boxTops.box4}`, left:`${boxLefts.box4}`}}><AppSummary name = 'app4' /></div>
          <div id="box5" className= "app-box box5" style = {{ top:`${boxTops.box5}`, left:`${boxLefts.box5}`}}><AppTitle name='app4' /></div>
      </>
      }
        { app5Shrunk && <>
          <div id="box1" className= "app-box box1" style = {{ top:`${boxTops.box1}`, left:`${boxLefts.box1}`}}><AppPreview name = 'app5' /></div>
          <div id="box2" className= "app-box box2" style = {{ top:`${boxTops.box2}`, left:`${boxLefts.box2}`}}><AppGit name = 'app5' /></div>
          <div id="box3" className= "app-box box3" style = {{ top:`${boxTops.box3}`, left:`${boxLefts.box3}`}}><AppLinks name ='app5' /></div>
          <div id="box4" className= "app-box box4" style = {{ top:`${boxTops.box4}`, left:`${boxLefts.box4}`}}><AppSummary name = 'app5' /></div>
          <div id="box5" className= "app-box box5" style = {{ top:`${boxTops.box5}`, left:`${boxLefts.box5}`}}><AppTitle name='app5' /></div>
      </>
      }
      { contactMe && <>
        <Formik  initialValues={initialValues} onSubmit={onSubmit}>
          { formik =>{
            return(
              <Form id="contact-me">
                <div style={{color:"white"}}>CONTACT ME</div>
                <div>
                  <Field name="firstName" type="input" placeholder="First Name"></Field>
                </div>
                <div>
                  <Field name="lastName" type="input" placeholder="Last Name"></Field>
                </div>
                <div>
                  <Field name="email" type="email" placeholder="Email"></Field>
                </div>
                <div>
                  <Field name="notes" type="textarea" placeholder="Notes"></Field>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
                </Form>
              )
            }
          }
        </Formik>
        <div id="link-div" className="gray">
          <a href="https://twitter.com/samantics13" style={{color:"white"}} target="_blank"><img src="twitterthumb.png" width="40px" /></a>
          <a href='https://github.com/samswaringen' style={{color:"white"}} target="_blank"><img src="gitthumb.png" width="40px" /></a>
          <a href='https://www.linkedin.com/in/sam-swaringen-245611207/' style={{color:"white"}} target="_blank"><img src="linkedinthumb.png" width="40px" /></a>
          <a href="mailto:samswaringen@gmail.com" style={{color:"white"}}><img src="mailthumb.png" width="40px" /></a>
        </div>
      </>
      }

      </div>
    </div>

  )
}



export default App;
