/**
 * 
 */

/**
 *  빈값인지 확인하는 함수
 * @returns return true / false
 * @param val : 값(문자열) 
 */
function isEmpty(val) { // true, false를 리턴하는 경우, is~ has~로 이름 짓기
	val = val.trim();
	if(val==null || val.length==0){
		return true;
	}
	return false;
}

function hasEmpty(strId, str) {
	var obj = document.getElementById(strId);
	console.log(obj.value);
	if(obj.value.search(/\s/) > -1){
		alert(str + " 은(는) 공백을 허용하지 않습니다.");
		obj.focus();
		return false;
	}
	return true;
}

function checkValue(strId, str) {
	var obj = document.getElementById(strId);
	if(isEmpty(obj.value)){
		alert(str + " 은(는) 필수 입력 항목입니다."); // 메시지는 한 곳에서 코드로 관리하는 게 좋다. 항목마다 쓰면 달라질수 있으니까.
		obj.focus();
		return false;
	}
	return true;
}


function checkLength(strId, str, min, max) {
	var obj = document.getElementById(strId);
	if(obj.value.length < min || obj.value.length > max){
		alert(str + " 은(는) " + min + "자 이상, " + max + "자 이하로 입력하세요.")
		obj.focus();
		return false;
	}
	return true;
}

function checkRegExp(strId, str, regStr) {
	var obj = document.getElementById(strId);
	if(obj.value.match(regStr)){
		return true;
	}else{
		alert("입력하신 " + str + " 은(는) 올바르지 않은 형식입니다.")
		obj.focus();
		return false;
	}
}








