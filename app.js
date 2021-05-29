const p1Button = document.querySelector('#p1b');
const p2Button = document.querySelector('#p2b');
const p1show = document.querySelector('#p1s');
const p2show = document.querySelector('#p2s');
const resetB = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1score = 0;
let p2score=0;
let isGameOver=false;
let ws = 3; ;






p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1score++;
        if(p1score === ws ){
            isGameOver=true;
            p1show.classList.add('has-text-success');
            p2show.classList.add('has-text-danger');
            p1Button.disabled=true;
            p2Button.disabled=true;

        }
        p1show.textContent = p1score;
    }
});
p2Button.addEventListener('click',function(){
    if(!isGameOver){
        p2score++;
        if(p2score === ws ){
            isGameOver=true;
            p2show.classList.add('has-text-success');
            p1show.classList.add('has-text-danger');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p2show.textContent = p2score;
    }
});

winningScoreSelect.addEventListener('change',function(){
    ws=parseInt(this.value);
    reset();
})

resetB.addEventListener('click',reset);

function reset(){
    p1score=0;
    p2score=0;
    p1show.textContent = p1score;
    p2show.textContent = p2score;
    isGameOver=false;
    p1show.classList.remove('has-text-success','has-text-danger');
    p2show.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled=false;
    p2Button.disabled=false;

}


