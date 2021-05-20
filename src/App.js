import Header from "./components/header"
import Bio from "./components/bio"
import Portfolio from "./components/portfolio"
import Skillset from "./components/skillset"
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./App.css";

function App() {
  const mySites = [
    {
      title: "Budget Tracker",
      gitHubLink: "https://github.com/cheetboy159/budgetTracker",
      libraries: ["Express", "Mongoose"],
      img: "https://github.com/cheetboy159/budgetTracker/raw/main/assets/budgetTracker.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Workout Tracker",
      gitHubLink: "https://github.com/cheetboy159/workoutTracker",
      libraries: ["Bootstrap", "React"],
      img: "https://github.com/cheetboy159/workoutTracker/raw/master/assets/workoutDashboard.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Burger Logger",
      gitHubLink: "https://github.com/cheetboy159/burger-logger",
      libraries: ["Tailwind.css", "Next.js"],
      img: "https://github.com/cheetboy159/burger-logger/raw/main/assets/burgerLogger.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Note Traker",
      gitHubLink: "https://github.com/cheetboy159/noteTaker",
      libraries: ["Bootstrap", "React"],
      img: "https://github.com/cheetboy159/noteTaker/raw/main/public/assets/noteTaker.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Weather Dashboard",
      gitHubLink: "https://github.com/cheetboy159/weatherDashboard",
      libraries: ["Bootstrap", "React"],
      img: "https://github.com/cheetboy159/weatherDashboard/raw/main/assets/weatherDashboard.JPG",
      width: 300,
      height: 200,
    },
    {
      title: "Path Finder",
      gitHubLink: "https://github.com/Patrick-Kaczmar/Path-Finder",
      libraries: ["Tailwind.css", "Next.js"],
      img: "https://github.com/Patrick-Kaczmar/Path-Finder/raw/main/public/assets/pathFinder.gif",
      width: 300,
      height: 200,
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
              <Tab.Pane className="portfolioBackground" eventKey="third">
                <Skillset  />
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
