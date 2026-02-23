
function checkHidden(id){
    const element = document.querySelector('#' + id);

    if (!element) {
        
        return 0;
    }

    return element.classList.contains('hidden') ? 1 : 0;
}


function switchPage(clickButton)
{
    if (clickButton === 'all'){
        if(checkHidden('all')){
            document.querySelector("#all").classList.toggle('hidden');
        }
        else{
            return;
        }

        if(!checkHidden("interview")){document.querySelector("#interview").classList.toggle('hidden');}
        if(!checkHidden("rejected")){document.querySelector("#rejected").classList.toggle('hidden');}

    }else if (clickButton === 'interview'){

        if(checkHidden('interview')){
            document.querySelector("#interview").classList.toggle('hidden');
        }
        else{
            return;
        }

        if(!checkHidden("all")){document.querySelector("#all").classList.toggle('hidden');}
        if(!checkHidden("rejected")){document.querySelector("#rejected").classList.toggle('hidden');}

    }else{
        if(checkHidden('rejected')){
            document.querySelector("#rejected").classList.toggle('hidden');
        }
        else{
            return;
        }

        if(!checkHidden("all")){document.querySelector("#all").classList.toggle('hidden');}
        if(!checkHidden("interview")){document.querySelector("#interview").classList.toggle('hidden');}
    }
}

function setStatusInterview(button) 
{ 
    const element = button.parentElement.querySelector("#status-btn");
    const card = button.closest(".job-post-card");

    

    element.innerText = "INTERVIEW";
    element.style.backgroundColor = "#00d390";
    element.style.color = "white";

    const addHtml = card.outerHTML;
    element.parentElement.classList.add('border-l-5');
    element.parentElement.style.borderColor="#00d390";

    addElementToInterview(card);

    updateCount();
}




function setStatusRejected(button)
{
    const element = button.parentElement.querySelector("#status-btn");

    const card = button.closest(".job-post-card");

    

    element.innerText = "REJECTED";
    element.style.backgroundColor = "#ff4d4d";
    element.style.color = "white";
    element.parentElement.classList.add('border-l-5');
    element.parentElement.style.borderColor = "#ff637d";

    addElementToRejected(card);

    updateCount();

    
}












function deletekaro(id){
    const removeElement = document.getElementById(id);

    if(removeElement){
        removeElement.remove();
        updateCount();
    }
}