import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function Bio() {
    return (

        <Container className="px-3 mx-3 pt-4">
            <Row>
                <Col sm={12} md={8}>
                    <p>
                        I am a new web develpor that is eager to learn all there is and grow.
                        I started my carrier path as a biomedical engineer sense 2015 and realized
                        that I had a passion for computer science. After a year of trying to learn on
                        my own; and failing miserably. I realized I needed to jump right into a programed
                        tailored to teach me the ways. I am proud of what I have achieved during these
                        few months and look forward to applying my new skill into problem solving.
                    </p>
                </Col>
                <Col sm={12} md={4}>
                    <img className="thumbnail" style={{ width: '500px' }} src="https://github.com/cheetboy159/reactPortfolio/blob/main/src/assets/croped_selfPic.jpg?raw=true" alt="myImg" />
                </Col>
            </Row>
        </Container>



    )
}