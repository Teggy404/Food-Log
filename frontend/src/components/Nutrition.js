import MacroPanel from './Macros';
import LogTable from './LogTable';
import {Card} from 'react-bootstrap';
import './../App.css'

function NutritionPanel(){
    return(
        <div>
            <Card className="text-light container-light shadow-lg m-5">
                <Card.Body>
                    <MacroPanel/>
                    <LogTable/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NutritionPanel