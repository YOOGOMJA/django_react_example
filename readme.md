# Todo Project with Django , ReactJS

## 1. 구조

본 프로젝트는 백엔드(장고)와 프론트엔드(ReactJS)로 구성되어 있습니다. 
ReactJS의 개발서버는 사용자들에게 페이지를 직접 보여주게 되고, 실제 데이터는 장고 서버에서 가져오게 됩니다. 

ReactJS는 순전히 모든 화면을 보여주는데 집중하고 , 장고 서버는 데이터 처리를 위한 RestFramework API 서버가 생성됩니다. 

ReactJS에서는 장고 측으로 비동기 요청을 보내 데이터를 조회 , 추가 , 수정 , 삭제 하게 됩니다. 

## 2. 준비

### 2.1. 백엔드

여타 장고 프로젝트와 마찬가지로 가상환경과 장고가 설치되어야 합니다.
주로 설치할 항목은 아래와 같습니다.  
  
django  
djangorestframework  
django-cors-headers : 비동기 요청 처리를 위함  
  
### 2.2. 프론트엔드  
  
ReactJS의 개발서버는 NODEJS 위에서 실행되므로 필수적으로 NodeJS가 설치되어야 하고 ,   
그후 npm으로 다음과 같은 항목들을 다운받아야합니다.  
  
react  
yarn  
axios  
  
## 3. 백엔드  
  
기존의 restframework 생성과 같은 순서를 따릅니다. 여기서는 'todo'라는 이름의 앱을 생성할 예정입니다.  

- 프로젝트 생성(이름 : backend)
- 필요 항목 다운로드 
- 앱 생성 (이름 : todo)
- settings.py 설정
- url 설정 (/backend/backend/urls.py)
- 모델 작성 (/backend/todo/models.py)
- 시리얼라이저 작성 (/backend/todo/serializers.py)  
- ViewSet 작성 (/backend/todo/view.py)  
  
위와 같은 순서로 진행되었습니다. 실제 확인은 backend 프로젝트를 실행해보면됩니다.

## 4. 프론트 엔드 

react 개발과 동일한 방법으로 작성됩니다.  

- create-react-app 으로 프로젝트 생성(이름 : frontend)
- 필요한 항목 다운로드 
- /frontend/src/todo.js 생성
- /frontend/src/App.js 수정
- /frontend/src/todo.js 작성 시작  

## 5. 실행 방법 

장고 서버를 실행 후, 프론트 엔드 서버를 실행해야 합니다. 
```
$ source ./venv/Scripts/activate # 환경 실행
$ python ./backend/manage.py runserver  
  
# 다른 터미널에서 수행합니다. 
$ cd ./frontend/ && yarn start
```