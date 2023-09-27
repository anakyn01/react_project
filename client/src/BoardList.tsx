import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button} from 'react-bootstrap';
import Axios from "axios";

/*
component => 구성요소
props => 부속품
state => 상태
*/

const Board = ({//상수 보드는 id,title,
    id,
    title,
    registerId,
    registerDate,
    props,
}:{//각각 변수에 형은
    id:number;
    title:string;
    registerId:string;
    registerDate:string;
    props:any
}) => {//반환값으로
    return(
        <tr>
            <td>
                <input 
                type="checkbox"
                value={id}
                onChange={(e) => {
                    props.onCheckboxChange(e.currentTarget.checked, e.currentTarget.value);
                }}
                />
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    )
}
interface IProps{
    isComplete:boolean;
    handleModify:any;
    renderComplete:any;
}

class BoardList extends Component<IProps>{
    constructor(props:any){
        super(props);
        this.state = {//상태 초기값
            boardList:[],
            checkList:[],
        };
    }
    state = {
        boardList:[],
        checkList:[],
    }


    getList = () => {
        Axios.get("http://localhost:8000/list",{})
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

    onCheckboxChange = (checked:boolean, id:any) => {
        const list:Array<String> = this.state.checkList.filter((v) => {
            return v != id;
        });

        if(checked) {
            list.push(id);
        }
        this.setState({
            checkList:list,
        });
    }

    componentDidMount() {//렌더링 직전에 바로실행
        this.getList();
    }

    componentDidupdate(){//렌더링을 계속 할건지 말건지에 
        //대해서 판단합니다
        if(this.props.isComplete){
            this.getList();
        }
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
                    key={v.BOARD_ID}
                    props={this}
                    />
                    )
                })}
            </tbody>
            {/*
            react는 key props를 사용하여 컴포넌트와 dom요소간의 관계를 생성한다
            리액트라이브러리는 이관계를 이용해 컴포넌트 리 렌더링 여부를 결정한다
            불필요한 리렌더링을 방지하기위해서 각 자식 컴포넌트마다 
            독립적인 key값을 넣어줘야 한다
            */}
        </Table>
        <div className="d-flex justify-content-end">
            <div className="btn-group my-5">
                <Button variant="info">글쓰기</Button>
                <Button 
                variant="secondary"
                onClick={() => {
                    this.props.handleModify(this.state.checkList);
                }}
                >
                수정하기
                </Button>
                <Button variant="danger">삭제하기</Button>
            </div>
        </div>
        </>
        )
    }
}
export default BoardList;
