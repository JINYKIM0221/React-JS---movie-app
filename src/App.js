import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
//div key={}에 무조건 고유한 key값을 넣어줘야함
//차례로 movie의 고유한 id,movie이미지,movie제목,movie설명,movie장르를 가져오는데 장르는 array로 여러개있음
//그래서 key={g}라고 임의의 키값을 만들어줘서 ul태그안 li태그에 차례대로 나오게함

//하지만 한 스크린에서만 아닌 어떤 영화를 클릭하면 다른 화면으로 넘어가게하고 싶음
//그래서 react-router-dom을 설치해서 클릭하면 URL이 넘어갈 수 있게 만들어줌
//맨처음 App.js에 있는 요소들을 Home.js에 복사하여 메인 홈페이지를 Home.js에 만들어줌
//Home.js에 들어갈 movie API에서 가져온 정보를 Movie.js에 넣어서 import시킴
//Switch : Route를 찾는 역할
//Router-link : 브라우저 새로고침없이 유저를 다른 페이지로 이동시켜준다


//파일 내용
//App.js : React-router-dom의 컴포넌트를 활용해서 각각의 파일들을 불러옴
//Home.js : movie API에서 따온 영화 정보들을 보여줌 - Movie.js import함
//Movie.js : 함수 Movie안에 영화제목,이미지,요약,장르를 props를 통해서 넣어놓음 Link를 통해 제목에 Detail로 넘어갈 Link도 만듦
//Detail.js : Home.js에서 링크를 클릭하면 이동되는 곳으로 만듦 - 영화 상세정보가 담길것








