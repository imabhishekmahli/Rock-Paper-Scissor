rock_btn = document.querySelector("#rock")
paper_btn = document.querySelector("#paper")
scissor_btn = document.querySelector("#scissor")

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
    alert(`computer have choosen ${computerChoose}`)
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
    alert(`computer have choosen ${computerChoose}`)
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
    alert(`computer have choosen ${computerChoose}`)
}