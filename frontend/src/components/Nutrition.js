import MacroPanel from './Macros';
import LogTable from './LogTable';
import {Card, Row, Container} from 'react-bootstrap';
import './../App.css'

function NutritionPanel(){
    return(
        <div>
            <Card className="container-light shadow-lg mt-4 text-light">
                <Card.Body>
                    <MacroPanel/>
                    <LogTable/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NutritionPanel