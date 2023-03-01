const div = document.getElementById("div");
let i = 0;

div.addEventListener("mouseover", function(){
    i++;
if(i==1){
    this.style.backgroundColor ="red";
    this.style.fontFamily="East Sea Dokdo" ;
    this.style.color="white";    
    this.innerText="사랑해";
    } else if(i>10){
        this.style.backgroundColor = "black";
        this.innerText="그만해!!!!";
    } else  {
    this.innerText+="사랑해";
}
})