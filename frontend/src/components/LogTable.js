import {Table, Container} from 'react-bootstrap';

function LogTable(){
    return(
        <Container>
                <Table className='table-dark table-striped' variant='dark'>
                    <thead>
                        <tr>
                            <th scope="col">FoodName</th>
                            <th scope="col">Fat</th>
                            <th scope="col">Carb</th>
                            <th scope="col">Protein</th>
                            <th scope="col">Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </Table>
        </Container>
    );
}

export default LogTable;