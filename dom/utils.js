function myMove(){
    let id = null;
    const elem = document.getElementById("animate");
    let current = 0
    let leftpos = true;
    let bottomrightleft = false;
    let bottomtop = false;
    let bottompos = false;
    let storageval = 0;
    clearInterval(id)
    id = setInterval(frame , 5)
    function frame(){
        if(leftpos){
            current++
            elem.style.top = 0 + "px";
            elem.style.left = current + "px";
            if(current ===350){
                storageval = current
                current = 0;
                bottompos = true
                leftpos = false
            }

        }else if(bottompos){
            current++
            elem.style.left = storageval + "px";
            elem.style.top = current + "px"
            if(current ===350){
                storageval = current
                current = 0;
                bottompos = false
                bottomrightleft = true
            }
            
        }else if(bottomrightleft){
            storageval--
                elem.style.left = storageval + "px";
                elem.style.bottom = 0 + "px"
            
            if(storageval === 0){
                storageval = 350
                current = 0;
                bottomrightleft = false
                bottomtop = true
            }
           
          
        }
        else if(bottomtop){
            storageval--
            
            elem.style.left = 0 + "px";
            elem.style.top = storageval + "px"
            if(storageval === 0){
                storageval = storageval
                current = 0;
                bottompos = false
                leftpos = true
                clearInterval(id)
            }
        }
        else{
           clearInterval(id)
            
        }
       
    }
}

export {myMove}