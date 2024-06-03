# MailAuth_pratice (메인 인증 + 소셜 로그인)

# 개발 환경
## Front
- React

## Back
- Java 17
- SpringBoot 3.3

## DB
- MariaDB


## 테이블 설계
1. 필요한 항목
-  회원 정보
   - 아이디 
   - 비밀번호
   - 이메일
   - 회원가입 타입 (앱을 통해서 했는지, 카카오, 네이버로 했는지 여부)
   - 권한
- 이메일 인증
  - 아이디
  - 이메일
  - 인증번호
 



# 구현
### 1. 메일 전송 API

<img width="704" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/7f3fd61b-e988-473a-9674-644cdf3b747a">

<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/ab25a7aa-5cf0-4106-989e-b69f04ec1df3">

<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/ba188587-73fb-4eae-8140-737c1d44e087">


### 2. 메일 인증 코드 확인  API

1) 인증 코드 불일치
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/b29195ca-e579-487c-a156-fb4f88e169a6">

2) 아이디 불일치
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/b205319e-2264-45f3-825d-f4cb8a2358d1">


3) 모두 일치
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/a3d4b701-fd1c-4e79-8442-1febd300659e">


### 3. 회원 가입 API (아이디 중복 체크 , 비밀번호 유효성검사(영문숫자 8~15자), 이메일 인증 코드)

1) 패스워드 유효성 검사
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/228bb449-89a8-49c6-997a-e4a9914b016c">


2) 이메일 인증 코드 일치 여부
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/3def03a2-41cc-428f-adde-cf80f0d0ece7">


3) 회원 가입 완료
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/3ab11fee-aa8a-465c-9b77-2dd69c0e14d2">

<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/096cc844-80a9-4ec1-af68-6bc9133ff169">


4) 아이디 중복 체크
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/86ffab25-cb29-48c8-a6a3-00fa773189ae">


5) 아이디 체크
<img width="715" alt="image" src="https://github.com/kimdonghuyn/MailAuth_pratice/assets/131759439/09a883e9-9026-422b-aa4e-b4f7799c4f1b">

     
