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
    console.log("handleChange: Changing form state")
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    //clear errors when changes are made
    if (errors[name]) {
      console.log("handleChange: Clearing state Errors")
      setErrors(prev=>({
        ...prev,
        [name]: null
      }))
    }
  }

  //validation function
  const validateForm = () => {
    const newErrors = {};
    console.log("validateForm: Validating Form")
    if(!formData.weight || formData.weight <= 0) newErrors.weight = 'Please enter a valid weight';
    if(!formData.height || formData.height <= 0) newErrors.height = 'Please enter a valid height';
    if(!formData.age || formData.age <= 0 || formData.age >= 120 ) newErrors.age = 'Please enter a valid age';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMacros = () => {
    //Calculate BMR
    console.log("CalculateMactros: Calculating macros")
    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
      extra: 1.9
    }
    const {weight, height, age, gender, activityLevel} = formData;
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    gender === 'male' ? bmr += 5 : bmr -= 161;
    const totalCalories = Math.round(bmr * activityMultiplier[activityLevel]);

    return {
      calories: totalCalories,
      protein: Math.round(totalCalories * .3/4),
      carbs: Math.round(totalCalories * .4/4),
      fat: Math.round(totalCalories * .3/9)
    }
  };

  const handleSubmit = (e) => {
    console.log("Submitting Form")
    e.preventDefault();
    if (!validateForm()) {
      console.log("handleSubmit: Invalid form")
      return;
    }
    try{
      console.log('testing testing testing')
      const macros = calculateMacros();
      setResult(macros);
      setShowResult(true);
      console.log("this isnt working now is it")
    } catch(error) {
      console.error('calculation error', error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="custom-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Calculate Macronutrients
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-2" controlId="Weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Weight in kg"
                value={formData.weight}
                onChange={handleChange}
                name="weight"
                isInvalid={!!errors.weight}
              />
              <Form.Control.Feedback type="invalid">{errors.weight}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2" controlId="Height">
              <Form.Label>Height</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Height in cm"
                value={formData.height}
                onChange={handleChange}
                name="height"
                isInvalid={!!errors.height}
              /> 
              <Form.Control.Feedback type="invalid">{errors.height}</Form.Control.Feedback> 
            </Form.Group>
            <Form.Group className="mb-2" controlId="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Age in years"
                  value={formData.age}
                  onChange={handleChange}
                  name="age"
                  isInvalid={!!errors.age}
                />
                <Form.Control.Feedback type='invalid'>{errors.age}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2" controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Form.Check 
                type="radio" 
                name="gender" 
                value="male" 
                label="Male"
                checked={formData.gender === 'male'}
                onChange={handleChange}  
              />
              <Form.Check 
                type="radio" 
                name="gender" 
                value="female" 
                label="Female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="Activity Level">
              <Form.Label>Activity Level</Form.Label>
              <Form.Check 
                type="radio" 
                name="activityLevel" 
                value="sedentary" 
                label="Sedentary"
                checked={formData.activityLevel === 'sedentary'}
                onChange={handleChange}
              />
              <Form.Check 
                type="radio" 
                name="activityLevel" 
                value="light" 
                label="Lightly Active"
                checked={formData.activityLevel === 'light'}
                onChange={handleChange}  
              />
              <Form.Check 
                type="radio" 
                name="activityLevel" 
                value="moderate" 
                label="Moderately Active"
                checked={formData.activityLevel === 'moderate'}
                onChange={handleChange}
              />
              <Form.Check 
                type="radio" 
                name="activityLevel" 
                value="very" 
                label="Very Active"
                checked={formData.activityLevel === 'very'}
                onChange={handleChange}
              />
              <Form.Check 
                type="radio" 
                name="activityLevel" 
                value="extra" 
                label="Extra Active"
                checked={formData.activityLevel === 'extra'}
                onChange={handleChange}
              />
            </Form.Group>
            <Button 
              variant="primary" 
              type="Submit" 
              disabled={isLoading}
              className="mt-3 custom-button"  
            >
              {isLoading ? 'Calculating...':'Calculate'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal 
        show={showResult} 
        onHide={()=>setShowResult(false)}
        centered
        className="custom-modal"  
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Macronutrients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result && (
            <div>
              <p>Daily Calories: {result.calories}</p>
              <p>Protein: {result.protein}</p>
              <p>Carbohydrates: {result.carbs}</p>
              <p>Fat: {result.fat}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowResult(false)}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Calculator;