//변경버튼 요소
const btn1 =document.getElementById("btn1");
//변경인풋 요소
const tdsend =document.getElementById("tdsend");
//변경된 요소
const tdvalue =document.getElementById("tdvalue");
//색깔박스 요소
const div =document.getElementsByClassName("div");
//색이름 박스 요소
const input1 =document.getElementsByClassName("input1");

//색박스와 색이름에 배열과 이름에따른 색바꾸기 for문이용
for(let i =0; i<input1.length; i++){
    input1[i].addEventListener("keyup", function(){
    div[i].style.backgroundColor = this.value;
    this.style.color = this.value;
    
})
}
//트랜지션 설정하기
tdsend.addEventListener("keyup", function(){
    for(let i =0; i<div.length; i++){
        div[i].style.transitionDuration = tdsend.value+"s";
    // }
    // for(let i =0; i<input1.length; i++){
        input1[i].style.transitionDuration =tdsend.value +"s";
    }
})
//변한 값 부모로 보내기
btn1.addEventListener("click", function(){
    tdvalue.innerText =tdsend.value;
})

//초기화
document.getElementById("reset").addEventListener("click",function(){
    tdvalue.innerText="";
    tdsend.value="";
    for(let i=0; i<div.length;i++){
        div[i].style.transitionDuration = 0;
        input1[i].style.transitionDuration =0;
        div[i].style.backgroundColor = "";
        input1[i].style.color = "";
        input1[i].value ="";
    }
})
