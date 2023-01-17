import React from "react";

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