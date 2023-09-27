import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button} from 'react-bootstrap';
import Axios from "axios";

const Board = ({//상수 보드는 id,title,
    id,
    title,
    registerId,
    registerDate,
}:{//각각 변수에 형은
    id:number;
    title:string;
    registerId:string;
    registerDate:string;
}) => {//반환값으로
    return(
        <tr>
            <td>
                <input type="checkbox"/>
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    )
}

class BoardList extends Component{
    state = {//상태 초기값
        boardList:[],
    };

    getList = () => {
        Axios.get("http://localhost:8080/list",{})
        .then((res) => {
            const {data} = res;
            this.setState({
                boardList:data,
            })
        })
        .catch((e) => {
            console.error(e);
        });
    }
    componentDidMount() {//렌더링 직전에 바로실행
        this.getList();
    }

    render(){
        const {boardList}:{boardList:any} = this.state;
        return(
        <>
        <h1 className="my-5">BBS by Hwang</h1>
        <Table striped bordered hover>
            <colgroup>
                <col style={{width:"5%"}}/>
                <col style={{width:"5%"}}/>
                <col style={{width:"70%"}}/>
                <col style={{width:"10%"}}/>
                <col style={{width:"10%"}}/>
            </colgroup>
            <thead>
                <tr>
                    <th className="text-center">선택</th>
                    <th className="text-center">번호</th>
                    <th className="text-center">제목</th>
                    <th className="text-center">작성자</th>
                    <th className="text-center">작성일</th>
                </tr>
            </thead>
            <tbody>
                {
                boardList.map((v:any) => {
                    return(
                    <Board
                    id={v.BOARD_ID}
                    title={v.BOARD_TITLE}
                    registerId={v.REGISTER_ID}
                    registerDate={v.REGISTER_DATE}
                    />
                    )
                })}
            </tbody>
        </Table>
        <div className="d-flex justify-content-end">
            <div className="btn-group my-5">
                <Button variant="info">글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
            </div>
        </div>
        </>
        )
    }
}
export default BoardList;
