import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card"
// import ListGroup from "react-bootstrap/ListGroup"
// import ListGroupItem from "react-bootstrap/ListGroupItem"

export default function Skillset({ skills}) {
    return (
        <Container className="px-5 mx-5" >
            <Row>
                {skills.map((skill) => (
                    <Col sm={12} md={4}>
                        <Card className="my-3">
                            <Card.Img
                                variant="top"
                                src={skill.img}
                                alt={skill.title}
                                width={skill.width}
                                height={skill.height}
                            />
                            <Card.Title>{skill.title}</Card.Title>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}