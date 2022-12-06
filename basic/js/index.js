// console.log('Hello JavaScript');

// 2022. 12. 16 화요일 수업
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

    