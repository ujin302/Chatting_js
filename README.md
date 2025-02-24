# 📖 프로젝트 소개

**Maru Chatting**은 **Socket.io를 활용한 실시간 채팅 애플리케이션**입니다. 
클라이언트와 서버 간 **양방향 통신**을 구현하여 사용자들이 실시간으로 메시지를 주고받을 수 있도록 개발되었습니다. 프로필 설정없이 메세지 전송이 불가하며 채팅방 상단에 현재 접속한 인원 수를 알려주는 기능이 있습니다.

- **개발기간**: 2022.04.07 ~ 2022.04.22 (14일)
- **개발인원**: 1인 (개인 프로젝트)
- **프론트엔드 프로젝트**: https://github.com/ujin302/FrontProject
- **주요기능**
  - Socket.io를 이용한 **실시간 양방향** 데이터 통신
  - 현재 채팅방에 접속 중인 사용자 수 표시
  - 프로필 필수 설정 후 채팅 참여 가능
  - 모든 사용자에게 동시에 메시지 전달되며 1:N 채팅 가능
  
---

## 🔧 기술 스택
- Node.js, HTML, CSS, JavaScript

---
## 🎰 주요 기능 및 스크린 샷

### 1. **채팅방 입장**
- 채팅방 입장 시, 프로필 설정 필수
- 프로필 목록에서 프로필 사진 선택


![채팅방](https://github.com/user-attachments/assets/f8d1ba57-0993-4432-872c-3e3fbae6b81a)채팅방 화면 | ![프로필 목록](https://github.com/user-attachments/assets/45cb53a1-ea07-4b7a-8ee9-cc924f7b0a8c) 프로필 목록 |
---|---|


### 2. **프로필 설정**
- 닉네임과 프로필 사진 설정 필수
- 프로필 목록에서 원하는 아이템 선택 시, 상단 좌측에 이미지 보임
- 상단에 현재 참가인원 2명 확인 가능 (‘으르르’ & ‘굿굿’)
- 프로필 설정하지 않았을 경우, 안내창 발생

![으르르](https://github.com/user-attachments/assets/57055c7d-267a-4f83-a1bf-c612c38104d9)'으르르' 참가 ! [굿굿](https://github.com/user-attachments/assets/8faaa2c0-d4d9-4d51-9f52-6397689b47d1)'굿굿' 참가 | ![안내창 발생](https://github.com/user-attachments/assets/4c0de850-69f5-42d6-b78c-60af34a0845d)안내창 발생 |
---|---|


### 3. **메세지 보내기**
- ‘으르르’과 ‘굿굿’이 채팅하는 모습
- 상대방의 프로필 설정 확인 가능하며 메세지 보낸 시간과 내용 출력
- 본인 메세지는 초록색, 상대방 메세지는 하얀색으로 구별
- **‘전송’ 버튼** 클릭하거나 **Enter 키**로 메세지 전송 가능


![참가자 '으르르'](https://github.com/user-attachments/assets/4b324369-abe9-4803-acc7-4a202b3008ed)참가자 '으르르' | ![참가자 '굿굿'](https://github.com/user-attachments/assets/5358ef83-1318-4035-b87c-9cb9fdb2cd48)참가자 '굿굿' |
---|---|


### 4. **2명 이상 참가**
- 2명 이상의 인원이 채팅방에 참가 가능

![참가자 '으르르'](https://github.com/user-attachments/assets/e402d362-5019-4de1-95ef-70f1e8fc444b)참가자 '으르르' | ![참가자 '굿굿'](https://github.com/user-attachments/assets/673e159d-34ee-4764-9f0d-30ec0d460e81)참가자 '굿굿' | ![참가자 '으쓱으쓱'](https://github.com/user-attachments/assets/45563f91-81fc-4190-9796-f2ac17d9d997) 참가자 '으쓱으쓱' |
---|---|---|
