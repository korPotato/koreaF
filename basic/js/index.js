// console.log('Hello JavaScript');

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

    