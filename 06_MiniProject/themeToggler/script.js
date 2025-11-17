const toggleBtn = document.getElementById("theme-toggle")

const body = document.body;

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        toggleBtn.innerText = "🌞 Light Mode"
    }else{
        toggleBtn.innerText = "🌙 Dark Mode"
    }
    
})