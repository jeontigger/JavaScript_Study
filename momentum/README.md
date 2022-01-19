# 자바 스크립트 정리

## 1. 자바스크립트
1. 선언
```
    1. const와 let, var가 존재한다.
    2. const는 선언 후에 변하지 않는 변수,let은 선언 후에 변하는 변수를 뜻한다.
    3. 기본적으로 const로 선언을 하고 바꿔야 할 때 let으로 변경해야 하고, var는 구시대의 잔재로 사용하지 않는다.
```

2. id 검색
```javaScript
    1. getElementById("idStirng")와 querySelector("#idString")이 있다.
    2. 강의에선 querySelector("#idString span:first-child"); 같이 쿼리 셀렉터를 주로 사용한 편
    3. querySelectorAll("#idString")을 통해 여러 아이디를 배열로 동시에 검색 가능
    4. querySelector("h2#idString");으로 태그 검색 가능
```

3. string 변수
```javascript
    1. 중복해서 사용하게 되는 단어에서 최대한 오류를 피하기 위해 const 변수로 설정해 준다.
    2. "Hello " + nameString 이거나 `Hello ${nameString}`으로 사용한다.
    3. String(1234) === "1234"
```

## 2. 로그인
1. 로컬 저장소
```javascript
    1. localStorge.setItem(KEY, value);로 key 값과 value를 로컬 저장소에 저장하고
    2. localStorge.getItem(KEY);로 key값을 통해 value를 가져온다
    //배열
```
2. 클래스 추가 및 삭제
```javascript
    1. 쿼리 셀렉터로 찾은 부분을 classList.remove("className");으로 삭제할 수 있고, 2. classList.add("className");으로 추가할 수 있다.
```
3. html
```html
    1. <form>으로 <input>을 감싼다.
    2. <input>의 속성
        2-1. required는 아무것도 넣지 않고 입력할 때 submit되지 않도록 해준다.
        2-2. maxlength로 최대 입력길이 제한을 만든다.
        2-3. placeholder로 미리 입력되어있는 값을 설정해 줄 수 있다.
```
4. 기타
```javascript
    1. addEventListener("submit", functionName);으로 리스너 설정
    2. function functionName(event){
        event.preventDefault();
    }
    로 다음 실행(새로고침)을 막아준다.
```

## 3. 시계
1. 인터벌과 타임아웃
```javascript
    1. setInterval(getClock, 1000);으로 1초마다 getClock을 실행한다.
    2. 처음부터 실행시키기 위해 getClcok(); setInterval(getClock, 1000);으로 변경
    3. setTimeout(getClock, 1000);으로 1초 후에 getClock을 실행한다.
    4. 인터벌과 차이점은 타임아웃은 한 번만 실행한다는 점이다.
```
2. Date()
```javascript
    1. console.dir()로 obj의 구조를 살펴볼 수 있다.
    2. new Date();로 받으면 getHours(), getMinutes(), getSeconds()로 시, 분, 초를 받는다.
    3-1. String.padStart(2, "0")로 자릿수가 빈 만큼 앞에서부터 채워줄 수 있다.
    3-2. String.padEnd(2, "0")로 자릿수가 빈 만큼 뒤에서부터 채워줄 수 있다.
```
## 4. 관용구와 배경
1. JSON
```javascript
    1. const quotes = [ {property1:"property1", property2:"property2", }, {property1:"property1-1", property2:"property2-1", },]로 선언 가능
    2. quotes[0].perperty1;로 사용 가능
```
2. 랜덤
```javascript
    1. Math.random() * 원하는 최대 숫자;
    2. Math.floor(); 내림 / Math.ceil(); 올림 / Math.round(); 반올림
```
3. html
```javascript
    1. bgimg = document.createElement("img");로 태그 생성한다.
    2. bgimg.src = `img/${img}`;로 속성까지 생성 가능하다.
    2. document.body.appendchild(bgimg);로 태그 위치 잡아준다.
```

## 5. ToDo List
1. 기타
```javascript
    1. JSON.parse();로 배열처럼 써있는 string을 배열로 변경 가능하다.
    2. array.forEach(functionName);로 각 항목마다 파마리터로 함수 적용 가능
    3. array.filter(functionName);로 새로운 배열을 생성한다.
    4. 파라미터를 obj로 변경할 때 파라미터 자체를 변경할게 아니라 함수 내부의 파라미터에 .property 를 추가해서 하는게 두루두루 좋다.
    5. Date.now();로 id 생성 가능하다.
    6. function sayHello(item){ console.log("this is the turn of ", item);} array.forEach(sayHello);로 사용할 수 있지만 array.forEach((item)=> console.log("this is the turn of ", item);)로 간단하게 사용할 수도 있다.
```

## 6. 날씨
1. 기타
```javascript
    1. navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);로 위도 경도를 받아올 수 있다.
    2. API를 사용한다.
```