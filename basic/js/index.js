// console.log('Hello JavaScript');

// 2022. 12. 16 화요일 수업

// 노드문 설치  -> nodejs 실행 후 npm install -g nodemon (노드문 설치)
// nodejs command prompt 사이트
// 노드문 설치 확인 -> npm list -g
// 노드js 출력연결 -> nodemon 파일명.js 
/*



데이터 타입

String, Number, Boolean, Null, Undefined, BigInt

*/ 
/*
    1. String (문자열)
    연속된 문자를 나타낸다. ''(홀따옴표), ""(쌍따옴표) 안에 작성한다.
*/

// 자바스크립트에서 세미클론은 필수는 아니다.
// console.log('foo');
// console.log("foo");
// console.log(typeof 'foo'); //typeof는 내용의 타입을 문자열로 출력해준다. 현재는 String
// console.log('foo bar');     // 내용에서 띄어쓰기도 가능.
// console.log("");            // 빈 문자도 출력이 가능하다.
// console.log('2022');
// console.log(typeof '2022');     // 따옴표 안에 숫자를 입력하면 숫자가 아니라 문자로 인식한다.


    // 개별 문자에 접근하기
    // var foo = 'bar';
    // console.log(foo);

    // // []배열
    // console.log(foo[0]);    // b
    // console.log(foo[1]);    // a
    // console.log(foo[2]);    // r
    // console.log(foo.length);    // 3    length 배열 안의 길이

    /**
        2. Number 숫자
        숫자를 나타낸다.
        값 : 정수, 소수, NaN(Not a Number), +Infinity, -Infinity
     */

    // console.log(2022);
    // console.log(typeof 2022);       // number
    // console.log(3.14);
    // console.log(-2);
    // console.log(2-'foo');       //nan 

    // console.log(-Number.MAX_VALUE);     // number 최소 값  -Infinity -(2^1024)
    // console.log(Number.MAX_VALUE);      // numver 최대 값  +Infinity (2^1024)

    /**
        3. Boolean
        참 또는 거짓(true or false의 값을 갖는다
     */

    // console.log(true);
    // console.log(false);
    // console.log(typeof true);       // boolean
    // console.log(1>0);       // 1 이 0보다 크다 true
    

    /**
        4. Null
        의도적으로 '없음', '무효'를 나타낼 때 사용한다/
     */

    // console.log(null);      // null의 타입은 object 이다. 하지만 null은 null
    // console.log(typeof null);
    
    // var foo = null;
    // console.log(foo);

    /*
        5. Undefined
        정의되지 않음을 나타낸다
     */

    // console.log(undefined);
    // var x;
    // console.log(x);     // 어떤 값을 주었지만 할당하지 않았을 경우 undefined 출려이 된다.
    // console.log(typeof x)
    

    /*
        6. BigInt
        safe integer (안전한 정수) 밖의 정수를 나타낼 때 사용한다.
        -(2^53 -1) ~ +(2^53 -1) 밖의 정수가 Big integer 라고 한다.
        약 -9000조 ~ 9000조
    */


    // console.log(Number.MIN_SAFE_INTEGER);
    // console.log(Number.MAX_SAFE_INTEGER);

    
    // console.log(9999999999999999);
    // console.log(9999999999999999n);
    // console.log(typeof 999999999999999n);

    /*
        Q. 데이터 타입 문제

        1. number 타입의  범위
        -1.7976931348623157e+308     1.7976931348623157e+308
        [-(2^1024)] [(2^1024)]
        console.log(Number.MAX_VALUE)
        console.log(-Number.MAX_VALUE)
        -Infinity <------------ 0 ----------> +Infinity

        2. safe integer(안정한 정수)의 범위
            
        // console.log(Number.MIN_SAFE_INTEGER);
        // console.log(Number.MAX_SAFE_INTEGER);
            -9007199254740991 ~ 9007199254740991
            [-(2^53-1)] [(2^53-1)]
        Big integer(-) <------------ 0 --------> big integer(+)

        3. 없음, 무효를 나타내응 데이터 타입은?
            null
        4. 정의되지 않음을 나타내는 데이터 타입은?
            undefined
    */

    /*
            연산자
            1. 수리 연산자
            2. 할당 연산자  
            3. 비교 연산자
            4. 논리 연산자
            5. 타입 연산자
    */

    /*
        1. 수리 연산자
        + - * / (사칙연산)
        ++(증가), --(감소)
        **(제곱), %(계수, 나머지)
    */

    // > 사칙연산
    // console.log(1 + 2);
    // console.log('foo' + ' bar');
    // console.log(1 + ' foo')     //1 foo (String) 숫자와 문자를 합치면 문자로 출력
    // console.log(2*2);
    // console.log(3/2);

    // > 증가, 감소
    // var year = 2022;
    // year++
    // console.log(year)

    // var x = 1;
    // x--;
    // console.log(x);

    // > 제곱, 나머지
    // console.log(2**7);  //2^7
    // console.log(5%2);


    /*
        2. 할당 연산자
        = += -= *= /=  %= **=
    */

    // > =
    // var foo = 'bar'         // 변수를 할당할떄 = 사용
    
    // > +=
    // var year = 2022;
    // year += 1;      // year = year + 1
    // console.log(year);

    // > *=
    // var x = 1;
    // x *= 2;
    // console.log(x);
    
    /*
        3. 비교 연산자

        ==  === !=  !==
        > < >= <=
     */

    // > ==

    
    // console.log(1 == 1);    // true 
    // console.log(1 == 0);    // false
    // // == 타입이 달라도 결과 값이 같다면 진실이라고 출력한다.
    // // 그래서 === 를 더 많이 사용함. 더 엄격하게 제한을 하여 출력한다.
    // console.log(2022 == '2022');    // true

    // > === (엄격 동등 연산자)
    // 값과 타입이 모두 비교한다.

    // console.log(2022 === '2022');   // false
    // console.log(1 === 1);

    
    // > !=
    // //  다르다 
    // console.log(1 != 1);
    // console.log(2 != 1);
    // console.log(2 != '1');

    
    // > !==
    // 값과 타입 모두 비교한다.
    // console.log(2 !== 2);
    // console.log(2 !== "2");


    // > > < <=  >=
    // console.log(2 < 2);
    // console.log(2 <= 2);
    // console.log(2 > 2);
    // console.log(2 >= 2);


    /*
        4. 논리 연산자

        조건 1 && 조건 2 (그리고)
        조건 1 || 조건 2 (또는)
        !조건 (부정)
     */


    // > && (그리고)
    // 조건이 모두 맞아야 된다.
    // console.log(2>0 && 2>1);        // 진실
    // console.log(2>0 && 2<1);        // 거짓

    // > || (또는)
    // 조건이 하나만 맞아도 진실이다.
    // console.log(2>0 || 2<1)
    // console.log(2<0 || 2<1)

    // > ! (부정)
    // 조건을 반대로 부여한다. 진실 이면 거짓 거짓이면 진실
    // console.log(!(1>0));
    // console.log(!(1>4));
    // console.log(!false);

    // 밑의 조건들은 전부 진실로 표기
    // console.log(!"");
    // console.log(!undefined);
    // console.log(!null);

    // console.log(!'foo')  // 빈공간이라면 진실로 뜨지만 채워져있다면 거짓.

    /*
        5. 타입 연산자

        typeof + 값
        instanceof + 값
    */
    
    // typeof
    // 값의 타입을 출력해준다.
    // console.log(typeof 'foo');
    // console.log(typeof null);

    
    // Q. 연산자 문제
    // var likes = 999;
    // // 증가연산자를 사용하여 좋아요 수를 1 증가시켜 보세요
    // likes++
    // console.log(likes)

    // var beers = 'Heineken(Netherlands)'
    // // 다음을 += 연산자를 사용하여 beers값을 바꾸어보세요.
    // // beers = beers + ' Guinness(Ireland)'
    // beers += ' Guinness(Ireland)'
    // console.log(beers)

    // 십대 : 13세 이상 19세 이하를 십대라고 합니다.
    // 논리연산자 'AND(그리고)'를 사용하여 코들로 작성해보세요.
    // var x =14
    // console.log(x >= 13 && x <= 19)
    

    /*
        조건문

        1. if 
        2. switch 조건문
        3. ? (삼항연산자)
    */

    /*
        1. if 조건문
        if(조건){
            조건이 참일 경우 실행되는 코드
        }
    */
    
    // if 조건문
    // if(1>0){
    //     console.log('foo')
    // }
    // if(1>2){    // 조건이 맞지 않을 경우 실행되지 않음
    //     console.log('foo')
    // }

    // if else
    // if(1 > 2){
    //     console.log('foo')
    // }else {
    //     console.log('bar')
    // }

    // if/ else if / else

    // var year = 2022;
    // if (year === 2021){
    //     console.log('Last year')
    // } else if ( year === 2022){
    //     console.log('This year')
    // } else {
    //     console.log('Next year')
    // }

    // if   조건문에서 조건이 boolean 타입이 아닌 경우

    // if (true){
    //     console.log('foo')
    // }

    // if('foo'){      
    //     console.log('bar')
    // }
    

    // if(''){     // 빈문자열은 거짓
    //     console.log('foo')
    // }       


    // null,undefined도 조건문으로 성립이 되지 않는다.
    // if(null){
    //     console.log('foo')
    // }
    // if(undefined){
    //     console.log('bar')
    // }
    // if(!null) {         // ! 부정으로 조건에 진실이 생김.
    //     console.log('foo')
    // }


    // =========================================================

    // 22년 12월 8일 프론트엔드 자바스크립트 수업2일차

    /*
        2. Switch 조건문

        엄격 동등 연산(===)을 수행한다
    */

        // var year = 2022;
        // switch (year){
        //     case 2021:
        //         console.log('작년')
        //         break;
        //     case 2022:
        //         console.log('이번 년도');
        //         break;
        //     case 2023:
        //         console.log('내년')
        //         break;
        //     default:        // 어떤 조건도 안맞다면 실행
        //         console.log('.')

        
        // }


    /*
        3. ? (삼항연산자)

        조건문을 간단한 문법으로 구현 할 수 있다.

        조건 ? 값1 : 값2
        조건이 참인경우 값1을 리턴한다
        조건이 거짓인 경우 값2를 리턴한다
    */

        // var year = 2022;
        // var r = year === 2022 ? '올해' : '올해가 아닙니다';
        // console.log(r);


        // Q1. 다음 변수를 활용해서 나이가 십대이면 '그는 십대입니다.'
        // 십대가 아니면 '그는 십대가 아닙니다.'를 출력하는 조건문을 만들어보세요. 
        // if 조건문 , ?(삼항연산자) 두 경우를 모두 만들어보세요
        // var joage = 22;

        // if(joage > 13 && joage < 20){
        //     console.log('그는 미성년자 입니다.')
        // }else{
        //     console.log('그는 성인 입니다.')
        // }

        // 삼항연산자
        // 성인/성인이아닌지 (18세 기준)
        // var j = (joage >= 18) ? '성인' : '성인이아닙니다';
        // console.log(j);


        /*
            ====반복문====        

            1. For 반복문
            2. while 반복문
        */

        // 1. For 반복문

        // 0에서 3 사이의 숫자를 출력한다
        // for (var i=0; i<3; i++){
        //     console.log(i);
        // } 

        // # 반복문을 사용해서 1에서 10까지의 합 구하기

        // var sum = 0;
        // for (var i=1; i<=10;i++){
        //     sum += i;   // sum = sum + i;
        // }
        // console.log(sum)

        // # 문자열 순회하기
        // var foo = 'bar';

        // for (var i=0; i<foo.length; i++){
        //     console.log(foo[i]);
        // }

        // # break와 continue
        // break 멈춘다
        // comtinue 멈추가 다시 위에서 부터 실행한다. 
        // for (var i=0; i<=10; i++){
            //     if(i===5){
            //         break;
            //     }
            //     console.log(i);
            // }
                
        //     for (var i=0; i<=10; i++){
        //         if(i===5){
        //         continue;
        //     }
        //         console.log(i)
        //         //0~4 6~10
        // }

        // 2. while 반복문
        // 0과 3사이의 숫자 출력하기

        // var i=0;
        // while(i<3){
        //     console.log(i)
        //     i++;
        // }



        // Q1. for반복문을 사용해서 a에서c까지만 출력해보세요.
        // var alphabets = 'abcdefg';

        // for (i=0; i<3;i++){
        //     console.log(alphabets[i])
        // }


        // Q2. 10, 20, 30, ....100 까지의 합을 구해보세요
        // var r = 0;
        // for (var i=1; i<=10; i++){
        //     r += i*10;
        // }
        // console.log(r);

        // var sum = 0;
        // for (var i= 10 ; i<=100; i+=10){
        //     sum +=i;
        // }
        // console.log(sum)


        /*
            ===== 변수와 상수 =====

            1. var (변수, variables)   
            2. let (변수)   
            3. const (상수, constant) 
        */


        // 1. var (변수, variables)
        // var foo = 'bar';
        // console.log(foo);

        // var foo = 'bar';
        // console.log(foo);
        // foo = 'baz';        // 대입
        // console.log(foo);


        // var foo = 'bar'     // 선언
        // var foo = 'baz'     // foo 변수를 재선언 
        // console.log(foo)

        // var foo;                // 선언, 공간을 만듦
        // foo = 'bar';            // 정의, 값을 할당.
        // console.log(foo);       // 출력

        // 2. let (변수)
        // var 변수가 너무 느슨해서 생긴 코드
        // var 보다는  조금더 엄격한 코드이다.

        // let foo ='bar';
        // console.log(foo);

        // let foo = 'bar'         // 변수를 주고 값을 할당하는 것까지를  초기화라고 한다.
        // foo = 'baz'             // 재정의, 대입
        // console.log(foo);


        // let foo;                    // 선언, 공간생성
        // foo = 'bar'                 // 정의, 값을 할당
        // console.log(foo)



        // let은 재선언(대입)이 불가능 하다.
        // let foo = 'bar';
        // let foo = 'baz';        // 재선언 불가
        // console.log(foo)

        // 3. const (상수)
        // const는 재선언 재할당 등. 불가능하다.
        // const foo = 'bar'           
        // console.log(foo)

        // # let 과 const는 블록(block)범위를 갖는다
        // 블록{중괄호} 안에서 작동을 할수있다.
        // 블록은 if, for에도 유용하게 사용된다. 
        // {    
        //     // var은 블록 밖에서도 사용이 가능하다.
        //     var foo = 'Foo'
        //     // let, const는 블록 밖에서는 사용 할수가 없다.
        //     let bar = 'Bar'         
        //     const baz = 'Baz'

        //     console.log(foo)
        //     console.log(bar)
        //     console.log(baz)
        // }
        // console.log(foo)         // 사용가능
        // console.log(bar)         // 에러 불가능
        // console.log(baz)         // 에러 불가능


        /*
            =========== 함수 ============

            호출될 때만 실행되는 코드

            1. 함수 정의하기
                > 함수선언식
                > 함수표현식과 화살표 함수
            2. Hoisting
            3. 전역변수와 지역변수
            4. 'return' 키워드
            5. 함수의 인자
            6. 콜백
        */

    

        // 1. 함수 정의하기
        //    > 함수선언식

        // function f(){
        //     console.log('foo')
        // }
        // 함수 실행
        // f()

        //     > 함수표현식
        // 변수에 익명함수를 할당한다.
        // const f = function () {
        //     // const가 아니여도 된다 var let 등등
        //     console.log('foo')
        // }
        // f()

        // > 화살표 함수
        // 여기서는 function 이라는 함수 대신에 => 화살표로 대신 함.
        // const f = () => {
        //     console.log('foo')
        // }
        // f()

        // 2. Hoisting(게양)
        // 실행보다 정의가 아래어도 정상 작동
        // 함수의 정의가 실행시점보다 위로 간다
        // 함수선언식에서만 적용된다.

        // f()
        // function f(){
        //     console.log('foo')
        // }

        // 함수표현식, 화살표 함수식은 hoisting(게양)이 안된다.
        // f()
        // const f = () => {
        //     console.log('foo')
        // }

        // 3. 전역변수와 지역변수
        // > 전역(global)변수
        // 함수 밖에서 선언된 변수

        // const foo = 'bar'           // 전역변수
        // function f(){
        //     // 함수안에서 접근 가능
        //     console.log(foo)
        // }
        // f()


        // > 지역(local)변수
        // 함수 안에서 선언된 변수
        // 종류와 상관없이 함수 안에서 선언되면 지역변수

        // function f(){
        //     const foo = 'bar'
        // }
        // f();

        // 지역변수는 함수 밖에서 접근이 불가능하다.
        // console.log(foo);

        // 2022.12.13 flontend java

        // vscode 에서 터미널 사용시 파워쉘보다는 커멘드프론포트 사용이 좋다.

        // 4. 함수의 인자

        // function add(x,y){      // parameter : x,y 함수를 정의할때 
        //     console.log(x+y);
        // }
        // add(1,2);       // argument : 1,2 

        // 5. 'return'키워드 

        // function add(x,y) {
        //     return x + y;       // 뜻 그대로 값을 반환한다.
        // }
        // const r = add(1,2);
        // console.log(r)

        // typeof 값의 타입을 나타냄
        // String, nomber, 등등

        // function add(x, y){      
        //     if (typeof x !== 'nomber' || typeof y !== 'number'){
        //         return '인자는 Number타입이어야 합니다'
        //     }

        //     // 위 조건이 맞을 경우 실행되지 않음
        //     return x + y;
        // }
        // let r = add(5, 5);     
        // console.log(r);

        // 6. 콜백(callback)
        // 다른 함수의 인자가 되는 함수

        // function f(callback) {
        //     let r = callback()
        //     console.log(r)
        // }
        // function cb(){      // callback
        //     return "foo"
        // }
        // f(cb);


        //  # 콜백으로 익명함수를 사용하기

        // function f(callback) {
        //     let r = callback();
        //     console.log(r);
        // }
        // f(function () {
            
        //     return "foo"
        // })

        // 시계 만들기

        // function getTime(){     // 현재 실행 되는 시간의 표시하는 함
        //     let time = new Date().toLocaleTimeString();
        //     console.log(time)
        // }
        // setInterval(getTime, 1000);
        // setInterval(callback, ms) (ms = number타입)
        // ms(milliseconds)마다 callback을 실행하는 함수이다
        

        // Q. 나이를  인자로 전달받아서 성인이면 ' 성인입니다' or '성인이 아닙니다'를
        // 출력하는 함수를 만들어보세요
        // 인자가 숫자가 아닌 경우 연산을 중단하고 메시지를 출력하는 기능도 추가해보세요.

        
        // function isAdult(age){      
        // if (typeof age !== 'number'){
        // return '숫자 타입이 아닙니다.'
        // } 
        // else if (age >= 18) {
        //     return '성인입니다.'
        // }else {
        //     return '성인이 아닙니다.'
        //     }
        // }
        // const r= isAdult(20)
        // console.log(r)


        /*
            =========== 에러와 에러처리 ============
            
            1. 에러의 정의

            2. 에러 처리
            try/catch

            3. 에러의 종류
            > ReferenceError
            > SyntaxError
            > TypeError
            > RangeError
            > URIError

            4. 커스텀 에러

         */

            // 1. 에러의 정의
            // 에러는 name, message, stack으로 구성 되어있다.
            // 에러는 프로그램을 중단시킨다.
            // 에러는 처리가 되어야 한다.

            //console.log(x)

            // 2. 에러 처리
            
            // try{
            //     // 코드를 작선한다.
            //     let x = 'foo';
            //     console.log(x)
            // } catch (err){
            //     // 에러를 처리한다.
            //     // 에러 나는 것 만을 처리해 줌, 작동은 하지만, 문제를 고쳐야한다.
            //     console.error(err)
            // }

            // try/catch ... finally

            // try {

            //     console.log(x)

            // } catch (err){
            //     console.error(err)
            // }finally {  // 에러 발생여부와 상관없이 항상 실행된다.
            //     console.log('.')
            //     // 어떤 문제가 발생해도 실행되어야 하는 것을 넣는다.
            // }


            // 3. 에러의 종류
            // > Reference Error
            // 선언되지 않은 변수를 참조했을 때 발생 하는 에러

            // try{
            //     console.log(x)

            // } catch(err){
            //     console.error(err)
            // }

            // > Syntax Error
            // try/catch 에서는 처리 불가, 문법 오류
            // 컴파일 에러를 발생시킨다.
            // 컴파일러가 코드를 이해하지 못 해서 발생하는 에러

            // try {
            //     console.log(2022));
            // }
            // catch (err){
            //     console.error(err)
            // }



            // > Type Error
            // 변수나 인자가 유효한 타입이 아닐 경우 발생한다.
            // 변수 혹은 값의 타입이 아닐 경우 발생 하는 에러

            // try {
            //     // setInterval(callback, ms)
            //     setInterval(null, 1000)
            // }catch (err){
            //     console.error(err)
            // }

            

            // > Range Error
            // 값이 허가된 범위를 벗어났을 때 발생한다.
            // 밑의 예시 경우 toPrecision의 범위는 1~100이지만 그 이상을 주어서 에러가 발생.

            // try{
            //     const pi = Math.PI;  
            //     // math = 3.14를 리턴하는값
            //     // toPrecision(1~100)는 정밀도 값 즉 3.14 ********** 까지 정밀하게 출력해준다.
            //     console.log(pi.toPrecision(200))
            // }
            // catch(err){
            //     console.error(err)
            // }


            // > URI Error
            // encodeURI() 또는 decodeURI() 함수가 유효하지 않은 인자를 전달받았을 때 발생한다.

            // try{
            //     decodeURI('%')
            // }catch(err){
            //     console.error(err)
            // }

            // 4. 커스텀 에러

            // try{
            //     let age = 15;

            //     console.log('기네스 한병 주세요');
            //     if (age < 18){
            //         // throw는 커스텀 에러이다. 조건이 맞을 경우 throw는 catch로 전달된다.
            //         throw '미성년자는 술을 살 수 없습니다.'
            //     }
            //     // 실행되지 않는다.
            //     console.log('여기있습니다.');

            // }catch(err){
            //     console.error('에러: ', err)
            // }

            /*
                ========= Array(배열) =================

                1. Array에 접근하기

                2. Array의 메서드

                3. Array 순회하기

            */

            // 1. Array에 접근하기

            // 변수에 []로  아이템을 넣는다. ',' 로 아이템을 나눈다. 
            // let arr = ['foo', 'bar', 'baz']
            
            // console.log(arr[0]) // foo
            // console.log(arr[1]) // bar
            // console.log(arr[2]) // baz
            // console.log(arr.length) //3    length 배열 안의 총 갯수

            // 2. Array의 메서드
            
            // let arr = ['foo', 'bar']
            // // arr.push(newItem) : 배열 마지막에 아이템을 추가
            // arr.push('baz')
            // console.log(arr)

            // =================================================

            // let arr = ['foo', 'bar', 'baz']
            // // 가장 마지막의 아이템을 1개 제거한다.
            // arr.pop()
            // console.log(arr)

            // =============================================

            // let arr =['foo', 'bar', 'baz']
            // Array.splice(시작index, (갯수))
            // 인덱스 위치에 있는 항목 제거
            
            // arr.splice(1,2);
            // console.log(arr);


            // =====================================================

            // Array.concat()
            // 기존 배열에 합친다.
            // 기존배열을 변경하지 않는다.
            // 추가된 새로운 배열을 반환한다.
            // 1안에 2를 합친다.
            // let arr1 = ['foo', 'bar']
            // let arr2 = ['baz']

            // let arr3 = arr1.concat(arr2);

            // console.log(arr3)
        
            // ================================================
            //  Array.filter(callback)
            // 조건에 맞는 아이템만 필터링 한다.
            // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
            
            // 예시 1
            // const arr = ['foo', 'bar', 'baz']

            // const r = arr.filter(function (item, index, array){
            //     // function(callback) 각요소를 시험할 함수
            //     // item(element) 처리할 현재 요소
            //     // index 처리할 현재 요소의 인덱스
            //     // array : filter를 호출한 배열
            //     if(item[0]==='b'){      // 아이템 중에서 첫글자가 b로 시작하는 아이템
            //         return item;
            //     }
            // })
            // console.log(r)

            // 예시 2
            // const arr = [1,2,3,4,5];
            // const r = arr.filter(function(item, index, array){
            //     if(item>3){
            //         return item;
            //     }
            // })
            // console.log(r);

            // 3. Array 순회하기 (반복문)
            
            // let arr = ['foo', 'bar', 'baz']

            // for (let i=0; i<arr.length; i++){
                // Array의 아이템에  특정한 작업을 수행할 수 있다.
                // toUpperCase() : 문자열을 대문자로 전환시켜준다.
            //     console.log(arr[i].toUpperCase());
            // }

            // console.log(arr[0].toUpperCase());
            
            // Q. A,B,C 로만 구성된 Array로 바꾸어보세요
            // Array.splice()를 사용

            // const alphabets = ['A', 'B', 'C', 'D','E', 'F', 'G']
            // alphabets.splice(3);
            // console.log(alphabets);

            // Q. 각 아이템에 10을 곱한 값의 합을 구해보세요.(60)
            // 반복문을 사용해서

            // let arr = [1, 2, 3]
            // let sum = 0;
            // for (i=0; i<arr.length; i++){
            //     sum += (arr[i]*10) 
            // }
            // console.log(sum)

            // ================================================

            // 2022 - 12 - 15 flontend javaScript

            /*
                ========== Object (객체) ==============
                데이터와 함수의 집합

                - 값이 null아니면 undefined빈 객체를 생성하여 반환합니다.
                - 그렇지 않으면 해당하는 타입의 객체를 반환합니다.
                - 값이 이미 반환된 경우 해당 값을 반환합니다.
            */

            // const cat = {
            // // 속성 (property)
            //     name: "키티",
            //     home: null,
            //     // 속성의 값이 함수인 경우 : 메서드(method)
            //     sound: function (){
            //         return "야옹"
            //     }
            // }
            // // // cat 객체에 접근하기
            // // console.log(cat);
            // // console.log(cat.name);  // 이름 속성에 접근
            // // console.log(cat['name']);       // 이름 속성에 접근
            // // console.log(cat.color);       // 존재하지 앟는 속성에 접근 : undefined
            // // console.log(cat.sound())  // sound 메서드에 접근, 메서드는 꼭 ()와 함께 입력해야 출력된다.


            // //=========================================

            // // # 객체에 새로운 속성을 추가하기
            // cat.age = 2;
            // console.log(cat)

            // // # 객체의 속성을 업데이트 하기
            // // 이미 존재하는 변수에 값을 대입
            // cat.home = '평리단길'
            // console.log(cat)

            // // # 객체의 속석은 삭제하기
            // delete cat.home;
            // console.log(cat);

            // ===========================================

            // Q. 객체문제

            // Q1. for반복문을 이요해서
            // 맥주의 이름만 출력해보세요

            // const beers = [
            //     {name: 'Guinness', origin: 'Ireland'},
            //     {name: 'Heineken', origin: 'Netherlands'},
            //     {name: 'Budwiser', origin: 'USA'},
            // ]
            // for(i=0; i<beers.length;i++){
            //     console.log(beers[i].name)
            // }

            // Q2. 유럽맥주의 이름을 출력해보세요
            // for반복문을  이용해서 

            // const beers = {
            //     europeanBeer: ['Guinness', 'Heineken', 'Kronenbourg'],
            //     asianBeers: ['Asahi', 'Kloud']
            // }
            // for(i=0; i < beers.europeanBeer.length; i++){
            // console.log(beers.europeanBeer[i])
            // }
            // const europeanBeer = beers.europeanBeer;

            // for(let europeanBeer of europeanBeer){
            //     console.log(europeanBeer)
            // }

            // Q3. 판매중인 맥주(abailable: true)의 배열(Array)을 만들어보세요
            // filter 메서드를 사용해서
            // const beers = [
            //     {name: 'Guinness', origin: 'Ireland', available: false},
            //     {name: 'Heineken', origin: 'Netherlands', available: true},
            //     {name: 'Budwiser', origin: 'USA', available: true}
            // ]

            // const i = beers.filter(function(item,index,array){  // 사용하지 않는 index,array는 지워도 에러가 나지는 않는다.
            //                                 // 속성값을 임의로 지정해서 사용할수도있다.
            //                                 // item = (지정값), index(지정), array(지정)                                     
            //     if(item.available){
            //         // 아이템 안의 availabel 중 참인 것
            //         return item;
            //     }
            // })
            // console.log(i)

// ===============================================

        
        /*
            ======= Class =========
            객체를 생성하기 위한 템플릿

            1. 클래스와 인스턴스
            2. 정적(static) 속성과 정적 메서드
            3. 미리정의된 클래스
            4. 리터럴 표기법
        */


            // 1. 클래스와 인스턴스
            
            // 인스턴스
            // 같은 클래스에 속하는 개개의 객체로, 하나의 클래스에서 생성된 객체를 말한다. 
            // 즉 클래스가 구체화되어, 클래스에서 정의된 속성과 성질을 가진 실제적인 객체로 표현된 것을 의미한다.
            // 인스턴스는 클래스로 부터 상속받는다.
            // 메서드 또한 클래스로 부터 상속받는다.

    // class Cat{          // 클래스 이름의 첫글자는 대문자로 해야한다.
    //     // 생성자(함수)
    //     // 인스턴스의 속성을 설정한다
    //     constructor (name, age){
    //         this.name = name;
    //         this.age = age;
    //     }
    //     // 클래스의 속성
    //     home = null;

    //     // 클래스의 메서드
    //     sound(){        
    //         return '야옹'
    //     }
    // }
    // // Cat의 인스턴스
    // const cat = new Cat('키티', 2)          // object
    // console.log(cat instanceof Cat)     // true출력
    // console.log(cat)
    // // Cat클래스의 home속성을 상속받았다.
    // console.log(cat.home)   // null출력
    // // Cat클래스의 sound메서드를 상속받았다.
    // console.log(cat.sound())    // 야옹

// ==============================================================

    //2. 정적 속성과 정적 메서드
        // 클래스와 관련된 유틸리티를 제공한다.
        /* static 키워드는 클래스를 위한 정적(static) 메서드를 정의합니다. 
            정적 메서드는 클래스의 인스턴스화(instantiating) 없이 호출되며, 클래스의 인스턴스에서는 호출할 수 없습니다.
        정적 메서드는 어플리케이션(application)을 위한 유틸리티(utility) 함수를 생성하는 데 주로 사용됩니다.
        반면, 정적 속성은 캐시, 고정 환경설정 또는 인스턴스 간에 복제할 필요가 없는 기타 데이터에 유용합니다.*/

// class Cat{
//     // 정적 속성(property)
//     static personality = '폭력적'

//     // 정적 메서드
//     static isAdult(age){
//         if(age<1) {
//             return '아기고양이'
//         }else {
//             return '어른고양이'
//         }
//     }
// }

// // 인스턴스 생성 하지 않음
// // 클래스 자체가 정적 속성을 호출한다.
// console.log("성격: "+Cat.personality);
// console.log(Cat.isAdult(2));

// // Math 클래스의 정적 속성 PI   // 3.14**********
// const pi = Math.PI;
// console.log(pi);

// number클래스의 isNaN(Not a Number) 정적메서드
// console.log(Number.isNaN('foo'-1))

// =====================================================================

/*
    3. 미리 정의된 클래스
        > 문자처리 : String
        > 숫자와 날짜 관련 :  Nimber, Math, Date
        > 인덱스 컬렛션 : Array
        > 에러 : SyntaxError, ReferenceError, TypeError, .....
        > 기타 : Promise, JSON
*/

// =========================================================================

    // 4. 리터럴 표기법
        // 클래스 호출하여 사용 했다.
        // new String () (String 클래스의 사용)
    // let foo = new String('Foo')
    // console.log(foo)
    
    // String클래스의 인스턴스
    // 리터럴 표기법 사용( 클래스를 호출하지 않는다.)
    // 코드를 더 간단하게 사용할수있어서 사용한다.
    // let foo = 'Foo'
    // console.log(foo)
    // console.log(foo.toUpperCase())   // String클래스로부터 상속받은 메서드

    // Number클래스의 인스턴스
    // let year = 2022;
    // // Number클래스로부터 상속받은 메서드
    // console.log(year.toString(2));
    //     //toString(2) 2진법으로 표기한다.

// ==============================================================================

// let date = new Date().toLocaleTimeString();
// // 시간,날짜date 객체는 리터럴표기법을 사용하 수 없다.
// console.log(date)


// =======================================================================

// Q 클래스 문제

/* 
    Q1. 다음을 클래스로 정의해보세요.

    Beer 클래스
    >인스턴스 속성
    이름(name), 원산지(origin)
    > 클래스 속성
    역사(history): B.C 3000
    > 클래스 메서드
    만드는법(recipe) : 보리, 홉, 효모, 물로 만듭니다
    > 정적 송성
    주의(caution): 지나친 음주는 돈이 많이 듭니다.
*/

// class Beer{
//        constructor(name, origin){
//         this.name=name;
//         this.origin=origin;
//     }
//         history='B.C 3000';
//        rectip(){
//         return '보리, 홉, 효모, 물로 만듭니다.'
//        }
//        static caution = '지나친 음주는 돈이 많이 듭니다.'
// }
// // Beer클래스의 인스턴스
// const irishBeer = new Beer('Guinness','Ireland');
// const dutchBeer = new Beer('Heineken', 'Netherlands')
// // 클래스의 속성
// console.log(irishBeer.history);
// console.log(dutchBeer.history);
// // 클래스의 메서드
// console.log(irishBeer.rectip());
// console.log(dutchBeer.rectip());
// // 정적속성
// console.log("주의: "+Beer.caution);

// ==========================================================================

