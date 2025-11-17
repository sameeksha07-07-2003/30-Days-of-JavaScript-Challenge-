document.addEventListener('DOMContentLoaded', ()=>{
    const counterDisplay =  document.getElementById("counter-display");
    const incrementBtn = document.getElementById("increment-btn")
    const decrementBtn = document.getElementById('decrement-btn')
    const resetBtn  = document.getElementById('reset-btn')

    let count = 0;

    function updateUI(){
        counterDisplay.textContent  = count;
    }
    
    incrementBtn.addEventListener('click' , ()=>{
        count++;
        updateUI();
    })
    decrementBtn.addEventListener('click' , ()=>{
        count--;
        updateUI();
    })
    resetBtn.addEventListener('click' , ()=>{
        count = 0;
        updateUI();
    })


})