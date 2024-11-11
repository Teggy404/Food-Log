import { Card, Row, Col, Container, Button } from 'react-bootstrap';

function Features(){
    return(
        <Container>
        <Row className="justify-content-center">
          <Col md={4}>
          <Card className="text-light bg-dark shadow-lg m-2">
            <Card.Img variant="top" src="/log.jfif"/>
                <Card.Body>
                    <Card.Title>Your Log</Card.Title>
                    <Card.Text>
                    Your food log is how you can keep track of your meals. Here
                    you can find all of your most recent meals!
                    </Card.Text>
                    <Button variant="primary">Log</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card className="text-light bg-dark shadow-lg m-2">
            <Card.Img variant="top" src="/search.jfif" />
                <Card.Body>
                    <Card.Title>Search Food</Card.Title>
                    <Card.Text>
                    Search through a catalogue of food items from all around the world.
                    If you cant find it, feel free to create your own!
                    </Card.Text>
                    <Button variant="primary">Search</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card className="text-light bg-dark shadow-lg m-2">
            <Card.Img variant="top" src="/calculator.jfif" />
                <Card.Body>
                    <Card.Title>Calculator</Card.Title>
                    <Card.Text>
                    Use a TDEE calculator to set your nutritional goals and start
                    tracking. It all starts here!
                    </Card.Text>
                    <Button variant="primary">Calculate</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default Features;