import 'bootstrap/dist/css/bootstrap.min.css'
/*react-strap이 부트스트랩 
기반으로 만들어 졌기 때문에 cdn선언
Contents Delivery Network 콘텐츠 전송 네트워크
*/
import {Container, Row, Col} from 'react-bootstrap';
//react-bootstrap에서 Table부르기
import BoardList from './BoardList';
import Write from './Write';
import Slide from './Slide';


function App() {
  return (
  <>
<Slide/>
 <Container>
    <Row>
      <Col>
        <BoardList/>
        <Write/>
      </Col>
    </Row>
 </Container>
  
  </>
  );
}

export default App;
