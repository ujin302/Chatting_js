const express = require("express"); // express 라이브러리를 변수에 대입 
const http = require("http"); // http: 프로토콜(데이터를 보내고 받는 방법을 정해놓은 약속)
const app = express(); 
const path = require("path");
const server = http.createServer(app); // express http를 통해서 서버 실행 

const socketIO = require("socket.io"); // socketIO라이브러리 변수에 대입 
const moment = require("moment")

const io = socketIO(server); // 서버를 변수에 대입 

app.use(express.static(path.join(__dirname, "src"))); // __dirname: 파일명, join("획장명"): 확장명 

const PORT = process.env.PORT || 5000; // 프로세스 환경에 지정되어 있으면 그 포트 사용 || 없으면 5000번 사용 

var personCount = 0;

// io를 통해 변경 사항을 대입
// connection 이벤트가 발생하면 서버에서의 반응
io.on("connection", (socket) =>{
    personCount++;
    console.log("연결 됨? 현재인원: ", personCount);

    // 모든 클라이언트에게 데이터 받음: 모든 클라 => 서버
    socket.on("chatting", (data)=>{
        // 받은 data를  { name, msg }이런 형식으로 저장
        const { name, msg } = data;
        console.log(data)

        // 서버가 클라이언트에게 정보 전달: 서버 => 클라
        io.emit("chatting", {
            name,
            msg,
            time: moment(new Date()).format("hh:mm A")
        })
    })
    
    io.emit('update', {
        personCount
    })

    // 연결 끊김
    socket.on("disconnect", function() {
        personCount--;
        console.log("연결 끊김. 현재 인원 수: ", personCount)
        
        socket.broadcast.emit('update', {
            personCount
        })
    });
}); 

// (포트, 실행 명령)
// 통신 연결 대기중
server.listen(PORT, () => console.log( "server is runnng. "+ PORT))

