import {Container} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
export default function jsx(){
    const a = 1;
    const b = 3;
    const teste = <h1>teste</h1>
    console.log(a * b);

    function teste2(){return <h1>teste2</h1>};
    function teste3(){console.log("Ola mundo")};

    return (
        <div>
            <Container>
                {teste}
                {teste2()}
                <Button variant="contained" color="primary" onClick={teste3}>teste3</Button>
                <h1>Jsx é um conceito contral</h1>
                {a * b}
            </Container>
        </div>
    )
}