let numberOne = parseInt(prompt("50 미만인 숫자를 입력하세요."))
let numberTwo = parseInt(prompt("50 미만인 숫자를 입력하세요."))

// v1
// if (numberOne < 50 && numberTwo < 50)
//     alert("숫자 2개 모두 50 미만이군요.")
// else
//     alert("조건에 맞지 않는 숫자가 있습니다.")

// v2
// if (isNaN(numberOne) || isNaN(numberTwo)) {
//     alert("숫자가 아닌 값을 비교할 수 없습니다.")
// } else {
//     if (numberOne < 50 && numberTwo < 50)
//         alert("2개의 숫자 모두 50 미만")
//     else
//         alert("조건에 맞지 않는 숫자")
// }

// v3 예외처리 포함
if (!isNaN(numberOne) && !isNaN(numberTwo))
    if (numberOne < 50 && numberTwo < 50)
        alert("2개의 숫자 모두 50미만")
    else
        alert("조건에 맞지 않는 숫자")