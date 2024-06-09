rock_btn = document.querySelector("#rock")
paper_btn = document.querySelector("#paper")
scissor_btn = document.querySelector("#scissor")
document.querySelector('h1').innerText='rock paper scissor lets play';



function rock_button(){
    let random_var = Math.random()*3;
    let computerChoose
    if(random_var>=0 && random_var<=1){
        computerChoose = 'rock';
    }else if(random_var>1 && random_var<=2){
        computerChoose = 'paper';
    }else{
        computerChoose = 'scissor';
    }

    if(computerChoose === 'rock'){
        alert(`computer have choosen ${computerChoose},you choosed rock,GAME DRAW`)
    }else if(computerChoose === 'paper'){
        alert(`computer have choosen ${computerChoose},you choosed rock, Computer Won`)
    }else{
        alert(`computer have choosen ${computerChoose},you choosed rock,YOU WON`)
    }
}
function paper_button(){
    let random_var = Math.random()*3;
    let computerChoose
    if(random_var>=0 && random_var<=1){
        computerChoose = 'rock';
    }else if(random_var>1 && random_var<=2){
        computerChoose = 'paper';
    }else{
        computerChoose = 'scissor';
    }

    if(computerChoose === 'rock'){
        alert(`computer have choosen ${computerChoose},you choosed Paper,YOU WON`)
    }else if(computerChoose === 'paper'){
        alert(`computer have choosen ${computerChoose},you choosed Paper, DRAW`)
    }else{
        alert(`computer have choosen ${computerChoose},you choosed Paper,Computer Won`)
    }
}
function scissor_button(){
    let random_var = Math.random()*3;
    let computerChoose
    if(random_var>=0 && random_var<=1){
        computerChoose = 'rock';
    }else if(random_var>1 && random_var<=2){
        computerChoose = 'paper';
    }else{
        computerChoose = 'scissor';
    }

    if(computerChoose === 'rock'){
        alert(`computer have choosen ${computerChoose},you choosed scissor,Computer Won`)
    }else if(computerChoose === 'paper'){
        alert(`computer have choosen ${computerChoose},you choosed scissor, YOU WON`)
    }else{
        alert(`computer have choosen ${computerChoose},you choosed scissor, DRAW`)
    }
}