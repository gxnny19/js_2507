// p529
let userNumber = prompt('숫자를 입력하세요.');

if (userNumber === "") {
    alert("데이터를 입력하지 않았습니다.")
} else if (userNumber !== null) {
    if (parseInt(userNumber) % 3 === 0) {
        alert('3의 배수입니다.');
    } else {
        alert('3의 배수가 아닙니다.');
    }
} else { 
    alert('입력이 취소됐습니다.') 
    alert('bye')}