
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
      {/* header area */}
      <header className="jumbotron header">
        {/*  */}
        <h1><strong>Mena Wahba</strong></h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>

          </div>
        </nav>
      </header>

      <div className="bio">
        <div className="row bioBackground">
          <div className="col-md-8">
            <h3>Bio:</h3>
            <p>A new full stack developer on the market looking for a new path. </p>
          </div>
          <div className="col-md-4">
            <h3>just a place holder</h3>
            <p>other stuff to see the structure of the page</p>
          </div>
        </div>

      </div>

      <div className="container">
        <div className="row">
          {mySites.map((site) => (
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src={site.img}
                  className="card-img-top"
                  alt={site.title}
                  width={site.width}
                  height={site.height}
                />
                <div className="card-body">
                  <h4 className="card-title">{site.title}</h4>
                  <h6>Libraries used:</h6>
                  <ul className="list-unstyled">
                    {site.libraries.map((lib) => (
                      <li className="card-text">{lib}</li>
                    ))}
                  </ul>
                  <a href={site.gitHubLink} className="btn btn-primary">
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;