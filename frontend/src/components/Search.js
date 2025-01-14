import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try{
      //Here you will make the api call
      setSearchResults([
        {name: "Apple", calories: 95, protein: 0.5, carbs: 25, fat: 0.3},
        {name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4},
        {name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4},
        {name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4},
        {name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4},
        {name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4}
      ]);
    } catch (error) {
      console.error('Search failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="custom-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search Foods
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* search box */}
        <Form onSubmit={handleSearch} className="mb-4">
          <Form.Group className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Search for a food"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="custom-button"
              >
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </Form.Group>
        </Form>

        {/* search results */}
        <Container className="results-area" style={{ maxHeight: '400px', overflowY: 'auto'}}>
          {searchResults.map((food, index) => (
            <Card key={index} className="mb-2">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5>{food.name}</h5>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col xs={6} md={3}>
                        <small className="text-muted">Calories</small>
                        <div>{food.calories}</div>
                      </Col>
                      <Col xs={6} md={3}>
                        <small className="text-muted">Protein</small>
                        <div>{food.protein}g</div>
                      </Col>
                      <Col xs={6} md={3}>
                        <small className="text-muted">Carbs</small>
                        <div>{food.carbs}g</div>
                      </Col>
                      <Col xs={6} md={3}>
                        <small className="text-muted">Fat</small>
                        <div>{food.fat}g</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="mt-2 custom-button"
                  onClick={() => {
                    console.log('Add to log:', food);
                  }}
                >
                  add to log
                </Button>
              </Card.Body>
            </Card>
          ))}

          {searchResults.length === 0 && searchTerm && !isLoading && (
            <p className="text-center text-muted">No results found</p>
          )}

          {isLoading && (
            <p className="text-center">Loading...</p>
          )}

        </Container>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default Search;