const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {   
        codes[idx].value = "";     
        if(e.key >= 0 && e.key <= 9) {  
            if(idx + 1 < codes.length){
                setTimeout(() => codes[idx + 1].focus(), 10);
            }         
        } else if(e.key == "Backspace"){     
            if(idx - 1 >= 0){
                setTimeout(() => codes[idx - 1].focus(), 10);                
            }      
        }
    });
});