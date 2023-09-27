const express = require('express');
//상수 익스프레스는 익스프레스 모듈을 사용
const cors = require("cors");//출처 허용옵션 모듈사용
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const bodyParser = require("body-parser");

//출처허용옵션설정
let corsOptions = {
origin:"http://localhost:3000",
credential:true,  
}

const db = mysql.createPool({//mysql 접속하는 키
host:'localhost',
user:'root',
password:'1234',
database:'bbs',
})

app.use(cors(corsOptions));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/list',(req, res) => {
    const sqlQuery = 
    "SELECT BOARD_ID, BOARD_TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS RESISTER_DATE FROM BOARD;";
    db.query(sqlQuery, (err, result) => {
    res.send(result);
    });
});

app.listen(PORT, () => {
    console.log(`running on port${PORT}`);
})

/*
CORS오류란?

Cross Origin Resource sharning에 약자
현재 웹페이지 도메인에서 다른 웹페이지 도메인으로
리소스가 요청되는 경우를 말한다

1)npm i cors 모듈설치
*/