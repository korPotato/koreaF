import React, {createContext, useContext, useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";

export default App;

// function App() {
//   return <h1>Hello React</h1>
// }
/*
  1. 리액트란?
    - UI를 개발하기 위해 사용되는 자바스크립트 라이브러리
      UI (User Interface) : 유저가 앱과 소통하기 위한 도구 ex) 뷰(화면)
      라이브러리 : 자주 사용되는 코드의 묶음
    - 페이스북이 개발
    - 가장 인기있는 프론트엔드 프레임워크

  2. 리액트의 특징
    - 컴포넌트 기반 
      컴포넌트 : 뷰를 구성하는 부품
      합성, 재사용 등이 가능하다.

    - 선언적인 문법

  3. 리액트의 구조
    - 싱글페이지 구조
    - 가상의 DOM(virtual DOM)을 HTML에 주입한다
*/

/*
  JSX

  JSX : JavaScript Extrension
  자바스크립트의 확장문법이다
  가상의 DOM을 만들 떄 사용된다
  선언적인 문법으로 사용하기 편리하다

  1. JSX 개념
  2. JSX 문법
  3. JSX에서 연산결과 출력하기
  4. JSX에서 조건문
  5. JSX에서 반복문 사용하기

*/

// 1. JSX 개념

// function App() {
//   // JSX를  사용하지 않음
//   let h1 = React.createElement('p', {}, 'Hello React');

//   return h1;
// }

// function App(){
//   // JSX를 사용함
//   let h1 = <h1>Hello Ract</h1>

//   return h1;
// }

// -----------------------------------------------------
/*

  2. JSX 문법
    - React Fragment
    - 앨리먼트 attribute
    - inline style

 */

// React Fragment
// Fragment 비어있는태그 , 쓸모없는 태그를 사용하기 보다 빈태그를 활용할수 있다.
// function App(){

//   return (
//     <>
//       <h3>React Fragment</h3>
//       <ul>
//         <li>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>
//   )
// }

// 앨리먼트 attribute 

// function App(){
//   return (
//     <>
//       <h3>JSX 앨리먼트 attribute</h3>
//       <ul>
//         <li>
//           <a href="https://google.com" target="_blank">Foo</a>
//         </li>
//         <li>
//           <img src="/" alt="Bar" />
//         </li>
//         <li>
//           <input type="text" placeholder="Baz" autoComplete="off" />
//         </li>
//       </ul>
//     </>
//   )
// }

// inline style

// function App(){

//   return(
//     <>
//     <h3>JSX inline style</h3>

//     <ul style={{border: "1px solid"}}>
//       <li style={{textDecoration: "underline"}}>Foo</li>
//       <li>Bar</li>
//       <li>Baz</li>
//     </ul>
//     </>
//   )
// }

// function App(){
//   const st = {
//     textDecoration: "line-through",
//     color:"#f00"
//   };
//   return (
//     <>
//     <h3>Q. 스타일 객체를 사용하여 맥주리스트를 출력하해보세요</h3>
//     <ul>
//       <li style={st}>Guinness, Ireland</li>
//       <li>Heineken, Netherlands</li>
//       <li>Budwiser, USA</li>
//     </ul>
//     </>
//   )
// }

// JSX에서 연산결과 출력하기
// 중괄호를 사용해서 출력한다.
// function App(){
//   let cat={
//     name:'kitty',
//     age:2,
//     home:null,
//     sound:function(){
//       return 'meow';
//     }
//   }
//   return (
//     <>
//       <h3>{cat.name}</h3>
//       <ul>
//         <li>이름 : {cat.name}</li>
//         <li>나이 : {cat.age}</li>
//         <li>집 : {cat.home}</li>
//         <li>울음 : {cat.sound()}</li>
//       </ul>
//     </>
//   )
// }

/*
  4. JSX에서 조건문 사용
  논리연산자와 삼항연산자를 사용한다

  && (그리고)
  || (또는)
  ! (부정)
  ? (삼항연산자)
 */

/* &&(그리고) 일경우 둘다 참일 경우 뒤에것이 실행된다 */
// function App(){
//   return(
//     <>
//       <h3>JSX 조건문</h3>
//       <p>조건1 &amp;&amp;(그리고) 조건2</p>
//       <ul>
//         <li>{'lol' && 'Foo'}</li>
//         <li>{false && 'Bar'}</li>
//         <li>{'lol' && false}</li>
//       </ul>
//     </>
//   )
// }

// || (또는) 같은 경우 둘다 참일 경우 앞에 것이 실행된다
// function App(){
//   return(
//     <>
//       <h3>JSX 조건문</h3>
//       <p>조건1 || (또는) 조건2</p>

//       <ul>
//         <li>{'lol' || 'Foo'}</li>
//         <li>{false || 'Bar'}</li>
//         <li>{'lol' || false}</li>
//       </ul>
//     </>
//   )
// }



// function App(){
//   return(
//     <>
//       <h3>JSX 조건문</h3>
//       <p>!(부정), ? (삼항연산자)</p>

//       <ul>
//         <li>{!'Foo'}</li>
//         <li>{true ? 'Bar' : ''}</li>
//         <li>{false ? '': 'Baz'}</li>
//       </ul>
//     </>
//   )
// }

// -------------------2023.01.17-------------------------------

/*
  5. JSX에서 반복문 출력하기
  => 익명함수
    
*/

// function App(){
//   const arr = ['foo','bar','baz'];

// /* 콘솔에 출력 */
//   // const r = arr.map((item, index, arr) => {
//   //   return item.toUpperCase();
//   // })
//   // console.log(r);


//   return (
//     <>
//       <h1>JSX 반복문</h1>
//       <ul>
//         {arr.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// function App(){
//   const beers = [
//     {name: 'Heineken', origin: 'Netherlands'},
//     {name: 'Guinness', origin: 'Ireland'},
//     {name: 'Asahi', origin: 'Japan'}
//   ]

//   return (
//     <>
//       <h1>세계맥주</h1>
//       <ul>
//         {beers.map((beers, name)=>(
//           <li key={name}>{beers.name}, {beers.origin}</li>
//         ))}

//       </ul>
//     </>
//   )
// }

/*
  컴포넌트 

  1. 컴포넌트란?
    UI를 설계하는데 쓰이는 독립적이고 재사용가능한 부품

  2. 컴포넌트의 종류
    - 함수 컴포넌트
    - 클래스 컴포넌트

  3. 컴포넌트 합성
    - 컴포넌트 내에서 다른 컴포넌트를 호출한다.
    - 첫 글자가 대문자로 해야 컴포넌트로 인식을 한다.

*/

// function App(){
//   return (
//     <>
//       <h1>Youtube</h1>
//       <Content/>
//       <h2>Comments</h2>
//       <Comments/>
//       <hr/>
//       <h2>Suggested</h2>
//       <Suggested/>
//     </>
//   )
// }

// function Content(){
//   return (
//     <div>
//       <h2>고양이는 액체일까?</h2>
//       <img src="https://blog.kakaocdn.net/dn/otI9y/btqxHB1C854/sR3Aec0s2s8vjT5ldSuop0/img.jpg" alt="" width="100%" />
//     </div>
//   )
// }

// function Comments(){
//   return (
//     <ul>
//       <li>유치하게 등수는...3빠</li>
//       <li>2빠</li>
//       <li>1빠</li>
//     </ul>
//   )
// }

// function Suggested(){
//   return(
//     <ul>
//     <li>고양이는 정말 폭력적일까?</li>
//     <li>고양이는 정말 자기가 신이라고 생각할까?</li>
//     <li>냥냥펀치는 얼마나 아플까?</li>
//   </ul>
//     )
// }

// function App() {
//   return (
//     <>
//       <h1>Instagram</h1>
//       <Content />
//       <Suggested />
//       <Timeline />
//     </>
//   )
// }

// function Content() {
//   return (
//     <>
//       <img
//         src="https://cdn.gukjenews.com/news/photo/202212/2610120_2621203_400.png" alt=""
//         style={{ width: '100px', height: "100px", objectFit: 'cover', borderRadius: '50%' }}
//       />
//       <h3>다나카상</h3>
//       <p>안녕하세요 여러봉구, 다나카입니다.</p>
//     </>
//   )
// }


// function Suggested() {
//   return (
//     <>
//       <h3>Suggested</h3>
//       <ul>
//         <li>나몰라패밀리 공식계정</li>
//         <li>나몰라패밀리 김태환</li>
//         <li>아싸 최우선</li>
//       </ul>
//     </>
//   )
// }
// function Timeline() {
//   return (
//     <>
//       <h3>Timeline</h3>
//       <ul>
//         <li>시그니처 아르마니 티셔츠 입고 왔어요~</li>
//         <li>웃찾사 때보다 인기도 수입도 10배</li>
//       </ul>
//     </>
//   )
// }

/*
  Props

  1. props 개념
  2. 사용방법
  3. children props
  4. Context Hook
*/

/*
  1. props 개념
    - 컴포넌트에 전달되는 인자
*/

// function App(){
//   const irishBeer = {name:'Huinness', origin: 'Ireland', available: false}
//   return (
//     <>
//       <h1>맥주</h1>
//       <Beer beer={irishBeer}/>
//     </>
//   )
// }

// function Beer(props){
//   console.log(props)  // properties (속성의 집합) = 객체
//   console.log(props.beer)

//   const beer = props.beer;
//   return(
//     <ul>
//       <li>이름: {beer.name}</li>
//       <li>원산지: {beer.origin}</li>
//       <li>판매중: {beer.available ? '예' : '아니오'}</li>
//     </ul>
//   )
// }

// 서버로부터 응답받은 데이터
// const video = {
//   title: '고양이는 액체일까?',
//   src:'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjNfMTEz/MDAxNTg3NjA5OTQyOTUy.CPtAxRasQSpzpDyzacFrLR0-xxs0JgztEajPD2WpaM8g.5LUh5v-9Z_fYCmy5n56kkIwlVoxnTOORCGtNBoi_OKwg.PNG.africaamc/25772472187_89bbf29b6f_o.png?type=w800'
// }
// const suggestedVideos = [
//   {id: 'a0', title: '고양이는 정말 폭력적일까?'},
//   {id: 'a1', title: '고양이는 정말 자기가 신이라고 생각할까?'},
//   {id: 'a2', title: '냥냥펀치는 얼마나 아플까?'}
// ];
// const comments = [
//   {id: 'c0', title: '1빠'},
//   {id: 'c1', title: '2빠'},
//   {id: 'c2', title: '유치하게 등수는...3빠'}
// ];


// function App(){
//   return (
//     <>
//       <h1>Youtube</h1>
//       <Content video={video} />
//       <Comments comments={comments} />
//       <hr/>
//       <Suggested suggestedVideos={suggestedVideos} />
//     </>
//   )
// }

// function Content(props){
//   const video = props.video;
//   return(
//     <>
//       <h2>{video.title}</h2>
//       <img 
//       src={video.src}
//       alt=""
//       width="100%"
//       />
//     </>
//   )
// }
// function Comments(props){
//   const comments = props.comments;
//   console.log(comments)
//   return (
//     <>
//       <h1>Comments</h1>
//       <ul>
//         {comments.map(comment => (
//           <li key={comment.id}>{comment.title}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// function Suggested(props) {
//   const suggestedVideos = props.suggestedVideos;

//   console.log(suggestedVideos);

//   return (
//     <>
//       <h1>Suggested</h1>
//       <ul>
//         {suggestedVideos.map(suggestedVideo => (
//           <li key={suggestedVideo.id}>{suggestedVideo.title}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// -------------------2023.01.19 frontend ---------------

// const profile = {
//   username: '냥냥냥',
//   image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjNfMTEz/MDAxNTg3NjA5OTQyOTUy.CPtAxRasQSpzpDyzacFrLR0-xxs0JgztEajPD2WpaM8g.5LUh5v-9Z_fYCmy5n56kkIwlVoxnTOORCGtNBoi_OKwg.PNG.africaamc/25772472187_89bbf29b6f_o.png?type=w800',
//   bio: '안녕하세요 여러봉구, 냥 입니다'
// };
// const accounts = [
//   { id: 's0', username: '냥아치패밀리 공식계정' },
//   { id: 's1', username: '냥아치패밀리 김냥이' },
//   { id: 's2', username: '인싸 김고양' }
// ];
// const articles = [
//   { id: 'a0', title: '시그니처 액체괴물' },
//   { id: 'a1', title: '어떤 통이든 들어갈 수 있어요~' }
// ];

// function App() {
//   return (
//     <>
//       <h1>Instagram</h1>
//       <Profile profile={profile} />
//       <Suggested accounts={accounts} />
//       <Timeline articles={articles} />
//     </>
//   )
// }

// function Profile(props) {
//   console.log(props.profile)
//   return (
//     <>
//       <img src={profile.image}
//         alt="고양이상"
//         width="100%"
//         style={{
//           width: '100px',
//           height: "100px",
//           objectFit: 'cover',
//           borderRadius: '50%'
//         }}
//       />
//       <h2>{profile.username}</h2>
//       <p>{profile.bio}</p>
//     </>
//   )
// }
// function Suggested(props) {
//   console.log(props.accounts)
//   return (
//     <>
//       <h2>Suggested</h2>
//       <ul>
//         {accounts.map(accountss => (
//           <li key={accountss.id}>{accountss.username}</li>
//         ))}
//       </ul>
//     </>
//   )
// }
// function Timeline(props) {
//   console.log(props.articles)
//   return (
//     <>
//       <h2>Timeline</h2>
//       <ul>
//         {articles.map(articless => (
//           <li key={articless.id}>{articless.title}</li>
//         ))}
//       </ul>
//     </>

//   )
// }

/*

3. children props

- 컴포넌트에 자식 컴포넌트를 추가한다.
*/

// function App(){
//   return (
//     <Layout>
//       <Article />
//     </Layout>
//   )
// }

// function Layout(props){

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>

//       {props.children}
//     </>
//   )
// }
// function Article() {
//   return (
//     <>
//       <img 
//         src="https://img.animalplanet.co.kr/news/2019/10/26/700/br80gkon0x827c68s9u9.jpg"
//         alt="냥아치"
//         width="100%"
//       />
//       <p>
//         <b>danaka</b>
//         냥아치가 강아지를 떄렸어요^00^
//       </p>
//       <small>1일 전</small>
//     </>
//   )
// }

/*
  4. useContext Hook
    - children 컴포넌트에 데이터를 전달하는 Hook이다
*/
// const AuthContext = createContext();

// function App() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article />
//       </Layout>
//     </AuthProvider>
//   )
// }

// function AuthProvider(props){

//   const value = {username: 'bunny'};

//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }


// function Layout(props){
//   const auth = useContext(AuthContext);
//   console.log(auth)
//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>
//       <p>안녕하세요 {auth.username}</p>
//       {props.children}
//     </>
//   )
// }
// function Article() {
//   const auth = useContext(AuthContext);
//   console.log(auth)
//   return (
//     <>
//       <img 
//         src="https://img.animalplanet.co.kr/news/2019/10/26/700/br80gkon0x827c68s9u9.jpg"
//         alt="냥아치"
//         width="100%"
//       />
//       <p>
//         <b>{auth.username}</b>
//         냥아치가 강아지를 떄렸어요^00^
//       </p>
//       <small>1일 전</small>
//     </>
//   )
// }


// function App(){
//   function handleClick(e) {
//     alert('lol');
//   }
//   return (
//     <>
//       <h1>Basic</h1>
//       {/* onEventName=eventHandler */}
//       <button onClick={handleClick}>Button</button>
//     </>
//   )
// }

/*
  리액트에서 HTML 업데이트하기
*/

// function App(){

// /*
//   const [state, setState (구조물의할당)]=useState(initialValue,초기값);

//   state: 컴포넌트내에서 관리되는 변수
//   setState: state를 업데이트하는 메서드
//   initialValue: state의 초기값

// */


//   const [count, setCount] = useState(0);

//   return(
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count +1)}>Add</button>
//     </>
//   )
// }


// function App(){
//   let count = 0;

//   console.log(count)
// /*
//   HTML를 업데이트 하기 위해서는 DOM을 다시 리턴해야한다
//   DOM을 다시 리턴 하기 위해서는 컴포넌트를 다시 실행해야 한다.
//   setState는 컴포넌트를 다시 실행한다.
//   즉, HTML이 업데이트된다.
// */
//   function handleClick(e){
//     count++;

//   }
//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>Add</button>
//     </>
//   )
// }


// function App(){

//   const [subscribed, setSubscribed] = useState(false);
//   console.log(subscribed)
  
//   return(
//     <>
//       <h1>구독버튼</h1>
//       <button onClick={()=> setSubscribed(!subscribed)}>{subscribed ? "구독취소" : "구독하기"}</button>
//     </>
//   )
// }
// ------------2023.01.20 ----------
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>count: {count}</h1>

//       <Article
//         count={count}
//         setCount={setCount} />
//     </>
//   )
// }
// function Article(props) {
//   return (
//     <>
//       <button onClick={() => props.setCount(props.count + 1)}>Add</button>
//     </>
//   )
// }


/* 
  리액트 라우터
  1. 리액트 라우터란?
    - 라우터 : 요청(특히 url)에 적합한 작업을 수행하는 것

  2. 라우터 기본

  3. 인증이 적용된 라우터

  */



// function Home() {
//   return <h1>Home</h1>
// }

// function About() {
//   return <h1>About</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>

//   )
// }


// function Post() {
//   /*
//     useParams
//     url로 전달된 파라미터에 접근하게 한다
//   */

//   const params = useParams();
//   const postId = params.postId;

//   // postId를 서버에 전송한다
//   console.log(params)

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// function App() {
//   return (
//     <>
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="about" element={<About />}/>
//         <Route path="posts" element={<Posts />}/>
//         <Route path="post/:postId" element={<Post />}/>
//         <Route path="*" element={<NotFound />}/>
//       </Routes>
//     </Router>
//     </>
//   )
// }


// 3. 인증이 적용된 라우터

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="post/:postId" element={<AuthRequired><Post /></AuthRequired>} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

// const AuthContext = createContext();
// function AuthProvider(props) {
//   const [user, setUser] = useState(null);
//   // 로그인
//   function signIn(username) {
//     setUser(username);
//   }
//   // 로그아웃
//   function signOut() {
//     setUser(null);
//   }
//   const value = { user, signIn, signOut };

//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }

// function Layout() {
//   const auth = useContext(AuthContext);

//   return (
//     <>
//       <nav>
//         <ul >
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>
//       {auth.user ? (
//         <p>
//           Hi. {auth.user} {" "}
//           <button onClick={auth.signOut}>Logout</button>
//         </p>
//       ): (<p>Not logged in
//       </p>)}
//       <Outlet />
//       {/* 경로가 바뀌면 아웃렛 컨텐츠가 바뀐다 */}
//     </>
//   )
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function AuthRequired(props) {
//   const auth = useContext(AuthContext);
//   console.log(auth)
//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     // console.log(formData.get('username'))
//     auth.signIn(formData.get('username'));
//    }
//   if (!auth.user) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input type="text" name="username" required />
//         <button type="submit">Login</button>
//       </form>
//     )
//   }
//   return props.children;
// }

// function Post() {
//   const params = useParams();
//   const postId = params.postId;

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }


/*

  데이터 가져오기

  1. 데이터 가져오기란?
    - 서버에 데이터를 요청해서 응답받는 것.

  2. useEffect Hook

  3. 데어터 가져오기 예시

*/


// 2. useEffect 

// function App() {
//   const [count, setCount] = useState(0);


//   /*
//     useEffext 
//       - 비동기적으로 작동한다.
    
//     1. useEffect(effect): effect는 컴포넌트가 실행될 떄마다 실행된다
//     2. useEffect(effect, []) : effect는 컴포넌트의 최초 실행시에만 실행된다
//     3. useEffect(effect,[dep(디펜더시)]) : effect는 컴포넌트의 최초 실행시, dependency(디펜더시)가 업데이트 될 때마다 실행된다.
//   */
//   useEffect(() => {
//     console.log('lol')
//   }, [])
//   return (
//     <>
//       <h1>count: {count}</h1>
//       <button onClick={() => setCount(count +1)}>+</button>
//     </>
//   )
// }

// 3. 데이터 가져오기 예시 


// 서버에 데이터를 요청하는 함수 fetchData
// 서버에서 응답을 주는데 2초가 걸린다고 가정
// function fetchData() {
//   const DATA = {
//     username: 'cat',
//     image: 'https://img.freepik.com/premium-photo/kitten-mother-cat-kisses-cat-hugs-kitten-and-presses-his-face-to-the-kitten-cat-tightly-holding-the-baby-kitten-the-cat-is-gray-fluffy-the-kitten-is-small-white-and-red-family-of-cats_588493-4.jpg'
//     , bio: '냥냥냥 냐아아아아앙 냥냥! 녀녀녕 *,.*'
//   }

//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       // 공백시간을 가상으로 준것.(서버에서 응답을 주는 시간을 가상으로 공백시간을 넣은것.)
//       res(DATA)
//     }, 2000)
//   })
//   return promise;
// }

// function App() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     fetchData()
//       .then(data => {
//         // profile 업데이트
//         setProfile(data)
//       })
//       .catch(error => {
//         // 에러가 발생하면 케츠메서드가 실행된다.
//         setError(error)
//       })
//       // finally은 성공실패 유무와 상관없이 무조건 실행
//       .finally(() => setIsLoaded(true))
//   }, [])
//   // 비동기가 실행 되고나서 다시 조건문 실행

//   // 먼저 조건문이 실행된뒤 비동기인 useEffect가 실행된다
//   if (error) {
//     return <p>failed to fetch profile1</p>
//   }
//   if (!isLoaded) {
//     return <p>fatching profile...</p>
//   }
//   // 여기까지 조건문이 먼저 실행.
//   return (
//     // 조건문이 맞게 된다면 실행
//     <>
//       <h1>Profile</h1>
//       <img
//         src={profile.image}
//         alt={profile.username}
//         style={{
//           width: '100px'
//           , height: '100px'
//           , objectFit: 'cover'
//           , borderRadius: '50%'
//         }}
//       />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>
//   )
// }

