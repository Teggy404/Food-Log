import { Card, Row, Col, Container } from 'react-bootstrap';

function MacroPanel() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="text-light bg-dark shadow-lg m-3">
            <Card.Body className="text-center">
              <Card.Title>Fat</Card.Title>
              <Card.Text>0/0</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-light bg-dark shadow-lg m-3">
            <Card.Body className="text-center">
              <Card.Title>Carb</Card.Title>
              <Card.Text>0/0</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-light bg-dark shadow-lg m-3">
            <Card.Body className="text-center">
              <Card.Title>Protein</Card.Title>
              <Card.Text>0/0</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MacroPanel;