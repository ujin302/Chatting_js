"use strict" // js의 오류 줄이기 
const socket = io();

// html 요소 가져오기 
const nickname = document.querySelector("#nickname")
const userImg = document.querySelector("#user-img")
const personText = document.querySelector("#person")
const chatlist = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");
const selectProfileImg = document.querySelector("#userimg-select");
// 프로필 이미지 설정
selectProfileImg.addEventListener("change", (event) => {
    userImg.src = event.target.value;
})

// 엔터 치면 메세지 전송 
chatInput.addEventListener("keypress", (event)=>{
    if(nickname.value != ''){ 
        if(chatInput.value == '') return;
        if(event.keyCode === 13) {// 13은 엔터 키 
            send()
            chatInput.value= "" // 리셋
       } 
    } else {
        alert('닉네임과 프로필 이미지를 설정하세요. >> chatInput');
    }
})

// 전송 버튼을 클릭하면 닉네임과 내용을 전송하겠다!! 
sendButton.addEventListener("click", ()=>{
    if(nickname.value != '') {
        if(chatInput.value == '') return;
        send()
        chatInput.value= "" // 리셋 
    } else {
        alert('닉네임과 프로필 이미지를 설정하세요.');
    }
})

// 보낼 내용
function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value,
        img: userImg.src
    }
    // 서버로 보낸다.
    console.log(param);
    
    socket.emit("chatting", param); 
}

// 답장 받기(서버로부터 데이터 받기)
socket.on("chatting", (data)=>{
    console.log(data);
    const {name, msg, img, time} = data;
    const item = new LiModel(data.name, data.msg, data.img, data.time);

    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
})

socket.on("update", (data2)=>{
    const personCount = data2.personCount;

    personText.value = "현재 인원: " + personCount;
    personText.innerHTML = personText.value;
    console.log(data2);
})

// 서버에서 데이터를 받았을 떄마다 이 함수 호출 할 예정 
function LiModel(name, msg, img, time){
    this.name = name;
    this.msg = msg;
    this.time = time;
    this.img = img;

    this.makeLi = ()=>{
        const li = document.createElement("li");
        let dom = '';
        li.classList.add(nickname.value === this.name ? "sent": "received")
        if(nickname.value === this.name) {
            dom = '<span class="profile"> <span class="time">'
            + this.time + '</span> <span class="message">'
            + this.msg + '</span>'
            + '</span>';
        } else {
            dom = '<span class="profile">'
            + '<img class="image" src=' + this.img + ' alt="마루">'
            + '<div class ="timeMsgDiv"><div class="infoDiv"><span class="user">' + this.name + '</span> '
            + '<span class="message">' + this.msg + '</span></div>'
            + '<span class="time">' + this.time + '</span>'
            +'</span></div>';
        }
        console.log(dom);
        
        li.innerHTML = dom;
        // 보낸 메세지 및 정보를 출력 
        chatlist.appendChild(li);
    }
}