# ReactJS로 영화 웹 서비스 만들기

##Basic

```
1. React를 깔아야함
2. React dom을 깔아야 함
3. JS -> React로 넘어가는 과정을 eventlistner를 통해 배움
4. React -> JSX로 넘어가기 위해 웹이 이해시키도록 babel을 다운받음
5. arrow function
6. 첫 글자가 대문자로 만든 컴포넌트만 랜더할 수 있음 (아니면 HTML 요소라고 착각할 수 있음)
```

## State

```JSX
내용 안에 변수를 바로 써넣을 수 있음 {counter}
변수를 변경하고 리랜딩을 해줘야만 변화를 알 수 있음
React.useState()로 자동으로 리랜딩 할 수 있음
 -> 첫 인수는 데이터 값, 다음 인수는 변경할 함수
함수 자체에서 변수를 이용할 수 있음 setCouhnter((current) => current + 1);
input과 htmlfor의 관계를 잘 모르겠음, 아마도 인풋 타겟 정하는 듯?
onChange 속성으로 변경될 때 마다 컨트롤
select option의 value를 통해 컴포넌트를 divide하는 방법을 배움
```
