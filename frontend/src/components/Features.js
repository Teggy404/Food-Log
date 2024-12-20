import { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import Calculator from './Calculator';
import Search from './Search';
import LogCustom from './LogCustom';

function Features(){

    const [calculatorModalShow, setCalculatorModalShow] = useState(false)
    const [logModalShow, setLogModalShow] = useState(false)
    const [searchModalShow, setSearchModalShow] = useState(false)

    return(
        <Container>
        <Row className="justify-content-center mt-5">
          <Col md={4} className="d-flex align-items-stretch">
          <Card className="custom-navbar shadow-lg ">
            <Card.Img variant="top" src="/log.jfif" className="img-fluid"/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Your Log</Card.Title>
                    <Card.Text>
                    Your food log is how you can keep track of your meals. Here
                    you can find all of your most recent meals!
                    </Card.Text>
                    <Button variant="primary" onClick={()=>setLogModalShow(true)} className="mt-auto">Log</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
          <Card className="custom-navbar shadow-lg ">
            <Card.Img variant="top" src="/search.jfif" className="img-fluid"/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Search Food</Card.Title>
                    <Card.Text>
                    Search through a catalogue of food items from all around the world.
                    If you cant find it, feel free to create your own!
                    </Card.Text>
                    <Button variant="primary" onClick={()=>setSearchModalShow(true)} className="mt-auto">
                      Search
                    </Button>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
          <Card className="custom-navbar shadow-lg">
            <Card.Img variant="top" src="/calculator.jfif" className="img-fluid"/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Calculator</Card.Title>
                    <Card.Text>
                    Use a TDEE calculator to set your nutritional goals and start
                    tracking. It all starts here!
                    </Card.Text>
                    <Button variant="primary" onClick={()=>setCalculatorModalShow(true)} className="mt-auto">
                      Calculate
                    </Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
        <Calculator
          show={calculatorModalShow}
          onHide={()=>setCalculatorModalShow(false)}
        />
        <Search
          show={searchModalShow}
          onHide={()=>setSearchModalShow(false)}
        />
        <LogCustom
          show={logModalShow}
          onHide={()=>setLogModalShow(false)}
        />
      </Container>
    );
}

export default Features;