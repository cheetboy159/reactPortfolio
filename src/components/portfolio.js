import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"



export default function Portfolio({ projects }) {
    return (
        <Container className="px-5 mx-5" >
            <Row>
                {projects.map((site) => (
                    <Col sm={12} md={4}>
                        <Card className="my-3">
                            <Card.Img
                                variant="top"
                                src={site.img}
                                alt={site.title}
                                width={site.width}
                                height={site.height}
                            />
                            <Card.Body>
                                <Card.Title>{site.title}</Card.Title>
                                <Card.Text>
                                    {site.discription}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {site.libraries.map((lib) => (
                                    <ListGroupItem>{lib}</ListGroupItem>
                                ))}
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={site.gitHubLink}>Github Repo</Card.Link>
                                <Card.Link href={site.appLink}>App Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>








        // <div className="container">
        //     <div className="row">
        //         {mySites.map((site) => (
        //             <div className="col-sm-12 col-md-4">
        //                 <div className="card">
        //                     <img
        //                         src={site.img}
        //                         className="card-img-top"
        //                         alt={site.title}
        //                         width={site.width}
        //                         height={site.height}
        //                     />
        //                     <div className="card-body">
        //                         <h4 className="card-title">{site.title}</h4>
        //                         <h6>Libraries used:</h6>
        //                         <ul className="list-unstyled">
        //                             {site.libraries.map((lib) => (
        //                                 <li className="card-text">{lib}</li>
        //                             ))}
        //                         </ul>
        //                         <a href={site.gitHubLink} className="btn btn-primary">
        //                             Github Repo
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    )
}