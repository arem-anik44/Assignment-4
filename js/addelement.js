function checkHidden(id){
    const element = document.querySelector('.' + id);

    if (!element) {
        
        return 0;
    }

    return element.classList.contains('hidden') ? 1 : 0;
}


function updateCount()
{
    const allItems = document.querySelector(".job-post-cards-all");
    const interviewItems = document.querySelector(".job-post-cards-interview");
    const rejectedItems = document.querySelector(".job-post-cards-rejected");

    const allItemsDigit = allItems.childElementCount;
    const interviewItemsDigit = interviewItems.childElementCount;
    const rejectedItemsDigit = rejectedItems.childElementCount;

    document.getElementById('all-count').innerText=allItemsDigit;
    document.getElementById('all-count-a').innerText=allItemsDigit;
    document.getElementById('all-count-b').innerText=allItemsDigit;
    document.getElementById('all-count-c').innerText=allItemsDigit;
    document.getElementById('interview-count').innerText=interviewItemsDigit;
    document.getElementById('interview-count-a').innerText=interviewItemsDigit;
    document.getElementById('rejected-count').innerText=rejectedItemsDigit;
    document.getElementById('rejected-count-a').innerText=rejectedItemsDigit;

    if (interviewItemsDigit>0){

        if(checkHidden2(job-post-cards-interview)){
            interviewItems.classList.toggle('hidden');
        }
        

        if(!checkHidden2(blank-look-card-interview)){
            document.querySelector(".blank-look-card-interview").classList.toggle('hidden');
        }

    }
    else{
       if(!checkHidden2('job-post-cards-interview')){
            interviewItems.classList.toggle('hidden');
        }
        

        if(checkHidden2('blank-look-card-interview')){
            document.querySelector(".blank-look-card-interview").classList.toggle('hidden');
        } 
    }


    if (rejectedItemsDigit>0){

        if(checkHidden2('job-post-cards-rejected')){
            rejectedItems.classList.toggle('hidden');
        }
        

        if(!checkHidden2('blank-look-card-rejected')){
            document.querySelector(".blank-look-card-rejected").classList.toggle('hidden')
        }

    }
    else{
       if(!checkHidden2(job-post-cards-rejected)){
            rejectedItems.classList.toggle('hidden');
        }
        

        if(checkHidden2(blank-look-card-rejected)){
            document.querySelector(".blank-look-card-rejected").classList.toggle('hidden')
        } 
    }
}


function addElementToInterview(cardElement)
{
    const container = document.querySelector(".job-post-cards-interview");

    
    container.classList.remove("hidden");

    
    const blankCard = document.querySelector(".blank-look-card");
    blankCard.classList.add("hidden");

    
    container.appendChild(cardElement);
}

function addElementToRejected(cardElement)
{
    const container = document.querySelector(".job-post-cards-rejected");

    container.classList.remove("hidden");

    const blankCard = document.querySelector(".blank-look-card-rejected");
    blankCard.classList.add("hidden");

    container.appendChild(cardElement);
}






