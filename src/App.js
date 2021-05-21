import Header from "./components/header";
import Bio from "./components/bio";
import Portfolio from "./components/portfolio";
import Skillset from "./components/skillset";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cssImg from './assets/css.png';
import bootstrap from './assets/bootstrap.png';
import javascript from './assets/js.png'
import jquery from './assets/jQuery.png'
import html from './assets/html.png'
import node from './assets/node.png'
import mysql from './assets/mysql.png'
import react from './assets/react.png'
import mongodb from './assets/mongodb.png'
import "./App.css";

function App() {
  const mySites = [
    {
      title: "Budget Tracker",
      discription: "An app to track your income and expenses with progress chart",
      gitHubLink: "https://github.com/cheetboy159/budgetTracker",
      appLink: "https://mysterious-garden-26246.herokuapp.com/",
      libraries: ["Express", "Mongoose"],
      img: "https://github.com/cheetboy159/budgetTracker/raw/main/assets/budgetTracker.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Workout Tracker",
      discription: "An app to track your workouts with a progress chart",
      gitHubLink: "https://github.com/cheetboy159/workoutTracker",
      appLink: "https://salty-sierra-79578.herokuapp.com/",
      libraries: ["Bootstrap", "React"],
      img: "https://github.com/cheetboy159/workoutTracker/raw/master/assets/workoutDashboard.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Burger Logger",
      discription: "An app that allows the user to creat burgers and a devoured state",
      gitHubLink: "https://github.com/cheetboy159/burger-logger",
      appLink: "https://whispering-lowlands-48856.herokuapp.com/",
      libraries: ["Tailwind.css", "Next.js"],
      img: "https://github.com/cheetboy159/burger-logger/raw/main/assets/burgerLogger.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Note Traker",
      discription: "An app that allows the user to creat notes with titles",
      gitHubLink: "https://github.com/cheetboy159/noteTaker",
      appLink: "https://immense-castle-20870.herokuapp.com/",
      libraries: ["Bootstrap", "React"],
      img: "https://github.com/cheetboy159/noteTaker/raw/main/public/assets/noteTaker.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Weather Dashboard",
      discription: "An app that allows the user to see the current weather and five day forcast bassed on location input",
      gitHubLink: "https://github.com/cheetboy159/weatherDashboard",
      appLink: "https://cheetboy159.github.io/weatherDashboard/",
      libraries: ["Bootstrap", "React"],
      img: "https://github.com/cheetboy159/weatherDashboard/raw/main/assets/weatherDashboard.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Path Finder",
      discription: "An app that allows the user to find activites based on their geoLocation",
      gitHubLink: "https://github.com/Patrick-Kaczmar/Path-Finder",
      appLink: "https://github.com/Patrick-Kaczmar/Path-Finder",
      libraries: ["Tailwind.css", "Next.js"],
      img: "https://github.com/Patrick-Kaczmar/Path-Finder/raw/main/public/assets/pathFinder.gif",
      width: 300,
      height: 200,
    }
  ];
  const skillList=[
    {
    title: "HTML",
      img:html,
      width: 300,
      height: 300,
    },
    {
      title: "CSS",
      img: cssImg,
      width: 300,
      height: 300,
    },
    {
      title: "JavaScript",
      img: javascript,
      width: 300,
      height: 300,
    },
    {
      title: "jQuery",
      img: jquery,
      width: 300,
      height: 300,
    },
    {
      title: "Node",
      img: node,
      width: 300,
      height: 300,
    },
    {
      title: "MySQL",
      img: mysql,
      width: 300,
      height: 300,
    },
    {
      title: "React",
      img: react,
      width: 300,
      height: 300,
    },
    {
      title: "Bootstrap",
      img: bootstrap,
      width: 300,
      height: 300,
    },
    {
      title: "MongoDB",
      img: mongodb,
      width: 300,
      height: 300,
    }
  ];
  return (
    // app
    <div className="App">
      <Header />

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col className="sideBar  pr-0 mr-0" style={{ position: "relative", top: '-2em' }} sm={12} md={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link className="text-white" eventKey="first">Bio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-white" eventKey="second">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-white" eventKey="third">Skill Set</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="ml-0 pl-0" style={{ position: "relative", top: '-2em' }} sm={12}md={10}>
            <Tab.Content>
              <Tab.Pane className="bioBackground" eventKey="first">
                <Bio />
              </Tab.Pane>
              <Tab.Pane className="portfolioBackground" eventKey="second">
                <Portfolio projects={mySites} />
              </Tab.Pane>
              <Tab.Pane className="skillBackground" eventKey="third">
                <Skillset  skills={skillList}/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
     



      
      {/* <Bio />
      <Portfolio projects={mySites}/> */}


      
    </div>
  );
}

export default App;
