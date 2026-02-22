
function checkHidden(id){
    const element = document.querySelector('#' + id)

    if(element.classList.contains('hidden')=== true){
        return 1;
    }
    else{return 0;} 
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
    element.innerText = "INTERVIEW";
    element.style.color = 'white';
    element.style.backgroundColor = "#00d390";


    element.parentElement.classList.add('border-l-5');
    element.parentElement.style.borderColor="#00d390";
    
    
}

function setStatusRejected(button)
{
    const element = button.parentElement.querySelector("#status-btn");
    element.innerText = "REJECTED";
    element.style.color = 'white';
    element.style.backgroundColor = "#ff637d";


    element.parentElement.classList.add('border-l-5');
    element.parentElement.style.borderColor = "#ff637d";
    
}

