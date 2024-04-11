## 인가
페이지에서 설정한 redirecturl과 발급 받은 api키를 이용하여 redirect를 보낸다.

## 카카오 토큰 받기
인가 받은 후, https://kauth.kakao.com/oauth/token 뒤 쿼리 스트링으로 grant_type, 발급받은 api키 인가에서 사용한 redirecturl, code <= 인가코드
를 넣어서 발급 받는다.

## 정보 받기
발급 받은 카카오 토큰을 넣어 정보를 받아 오면된다.


![image](https://github.com/minsu0717/kakaologin/assets/96038772/710e844d-f8de-41fb-b9a3-eb8ef3f86525)
