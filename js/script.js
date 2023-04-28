const inputBox = document.querySelector('h2');
const number = document.querySelectorAll('span');

for(let i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        if(this.innerHTML == "="){
            inputBox.innerHTML = eval(inputBox.innerHTML)
        }else{
            if(this.innerHTML == "C"){
                inputBox.innerHTML = "";
            }else{
                inputBox.innerHTML += this.innerHTML
            }
        }
    })
    
}