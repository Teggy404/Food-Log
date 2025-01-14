import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LogCustom(props) {
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
          Log Custom Food
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LogCustom;