import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Calculator(props) {

  //Form State management
  const [formData, setFormData] = useState({
    weight: 0,
    height: 0,
    age: 0,
    gender: 'male',
    activityLevel: 'sedentary'
  });

  //Validation and UI Management
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  //Handle change in form data
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    //clear errors when changes are made
    if (errors[name]) {
      setErrors(prev=>({
        ...prev,
        [name]: null
      }))
    }
  }

  //validation function
  const validateForm = () => {
    const newErrors = {};

    if(!formData.weight || formData.weight <= 0) newErrors.weight = 'Please enter a valid weight';
    if(!formData.height || formData.height <= 0) newErrors.height = 'Please enter a valid height';
    if(!formData.age || formData.age <= 0) newErrors.age = 'Please enter a valid age';

    setErrors(newErrors);
    return Object.keys(newErrors).Length === 0;
  };

  const calculateMacros = () => {
    //Calculate BMR
    const {weight, height, age, gender, activityLevel} = formData
    bmr = 10 * weight + 6.25 * height - 5 * age
    gender === 'male' ? bmr += 5 : bmr -= 161
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);

    if (!validateForm()) return;
    setIsLoading(true);

    try{
      console.log('testing testing testing')
            //API CALL GOES HERE
    } catch(error) {
      console.error('calculation error', error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Calculate Macronutrients
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-2" controlId="Weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" placeholder="Weight in kg"/>
          </Form.Group>
          <Form.Group className="mb-2" controlId="Height">
            <Form.Label>Height</Form.Label>
            <Form.Control type="number" placeholder="Height in cm"/>
          </Form.Group>
          <Form.Group className="mb-2" controlId="Age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Age in years"/>
          </Form.Group>
          <Form.Group className="mb-2" controlId="Gender">
            <Form.Label>Gender</Form.Label>
            <Form.Check type="radio" name="gender" value="male" label="Male"/>
            <Form.Check type="radio" name="gender" value="female" label="Female"/>
          </Form.Group>
          <Form.Group className="mb-2" controlId="Activity Level">
            <Form.Label>Activity Level</Form.Label>
            <Form.Check type="radio" name="activitylevel" value="sedentary" label="Sedentary"/>
            <Form.Check type="radio" name="activitylevel" value="light" label="Lightly Active"/>
            <Form.Check type="radio" name="activitylevel" value="moderate" label="Moderately Active"/>
            <Form.Check type="radio" name="activitylevel" value="very" label="Very Active"/>
            <Form.Check type="radio" name="activitylevel" value="extra" label="Extra Active"/>
          </Form.Group>
          <Button variant="primary" type="Submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default Calculator;