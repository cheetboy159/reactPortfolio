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
      img:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    width:60,
    height:60,
    },
    {
      title: "CSS",
      img: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png",
      width: 60,
      height: 60,
    },
    {
      title: "JavaScript",
      img: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png",
      width: 60,
      height: 60,
    },
    {
      title: "jQuery",
      img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_original_wordmark_logo_icon_146447.png",
      width: 60,
      height: 60,
    },
    {
      title: "Node",
      img: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png",
      width: 60,
      height: 60,
    },
    {
      title: "MySQL",
      img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png",
      width: 60,
      height: 60,
    },
    {
      title: "React",
      img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
      width: 60,
      height: 60,
    },
    {
      title: "Bootstrap",
      img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_wordmark_logo_icon_146620.png",
      width: 60,
      height: 60,
    },
    {
      title: "MongoDB",
      img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
      width: 60,
      height: 60,
    },
    {
      title: "jQuery",
      img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_original_wordmark_logo_icon_146447.png",
      width: 300,
      height: 200,
    }
  ]
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
