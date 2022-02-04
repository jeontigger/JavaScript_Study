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

## Props

```JSX
attribute로 들어가는 것들이 컴포넌트의 첫 인자로 들어감
props.banana등으로 변수를 가져올 수 있음
오브젝트기 때문에 Btn(props.banana)대신 Btn({banana})로 가져올 수 있음
Btn({banana, big})처럼 두개 이상도 한번에 불러올 수 있음
prop과 eventlistener를 구분해야 함 -> prop은 다른 컴포넌트에 전달해 줄 뿐 적용시키지 않음
React.memo()로 모든 자식 컴포넌트를 리랜딩 하지 않도록 만들 수 있음
PropType은 어떤 타입의 prop을 받고 있는지 체크해 줌
```

# Create-React-App으로 넘어감
