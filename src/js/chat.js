"use strict" // js의 오류 줄이기 
const socket = io();

// html 요소 가져오기 
const nickname = document.querySelector("#nickname")
const personText = document.querySelector("#person")
const chatlist = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

// 엔터 치면 메세지 전송 
chatInput.addEventListener("keypress", (event)=>{
    if(event.keyCode === 13){ // 13은 엔터 키 
       send()
       chatInput.value= "" // 리셋 
    }
})

// 전송 버튼을 클릭하면 닉네임과 내용을 전송하겠다!! 
sendButton.addEventListener("click", ()=>{
    send()
    chatInput.value= "" // 리셋 
})

// 보낼 내용
function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value,
    }
    // 서버로 보낸다.
    socket.emit("chatting", param); 
}

// 답장 받기(서버로부터 데이터 받기)
socket.on("chatting", (data)=>{
    const {name, msg, time} = data;
    const item = new LiModel(data.name, data.msg, data.time);

    item.makeLi(); 
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
    console.log(data);
})

socket.on("update", (data2)=>{
    const personCount = data2.personCount;

    personText.value = "현재 인원: " + personCount;
    personText.innerHTML = personText.value;
    console.log(data2);
})

// 서버에서 데이터를 받았을 떄마다 이 함수 호출 할 예정 
function LiModel(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = ()=>{
        const li = document.createElement("li");
        li.classList.add(nickname.value === this.name ? "sent": "received")
        const dom = '<span class="profile"> <span class="user">'
                    + this.name
                    + '</span> <img class="image" src="https://placeimg.com/50/50/any" alt="any"> </span> <span class="message">'
                    + this.msg + '</span> <span class="time">'
                    + this.time + '</span>';

        li.innerHTML = dom;
        // 보낸 메세지 및 정보를 출력 
        chatlist.appendChild(li);
    }
}