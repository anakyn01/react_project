import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap';

class Write extends Component{
    render(){
        return(
            <>{/*react fragment */}
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="email" placeholder="name@exam.."/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea"/>
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-end">
                <div className="btn-group my-3">
<Button variant="info">작성완료</Button>
<Button variant="secondary">취소</Button>
                </div>
            </div>
            </>
        )
    }
}
export default Write;
