import { result, setResult} from './note';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


function App() {

  setResult()

  return (
    <div className="App">
      <Form className='d-flex flex-row justify-content-evenly'>
        <Form.Group className="mb-3" controlId='first'>
          <Form.Label>first ball</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId='second'>
          <Form.Label>second ball</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId='third'>
          <Form.Label>third ball</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      </Form>
      { result }
    </div>
  );
}

export default App;
