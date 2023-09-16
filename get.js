//nodemon get.js로 실행 터미널에 컨트롤+c로 서버중단 nodemon효과로 새로고침만하면 갱신가능

const express = require('express');
const app = express();

//body-parser 라이브러리 사용
app.use(express.urlencoded({extended: true})) 


app.listen(8070, function() {
    console.log('listening on 8070');
});

app.get('/pet', function(요청, 응답){
    응답.send('반갑습니다');
});

app.get('/beauty', function(요청, 응답){
    응답.send('반갑습니다');
});

app.get('/', (요청, 응답) => //function 신문물
{
    응답.sendFile(__dirname + '/get.html');
});

app.get('/write', function(요청, 응답){
    응답.sendFile(__dirname + '/write.html');
});

//어떤사람이 /add경로로 post요청을 하면 
app.post('/add', function(요청, 응답){
    응답.send('전송완료');
    console.log(요청.body.title); // body까지만하면 요청했던 오브젝트 보임

    //db에 저장해주세요
});