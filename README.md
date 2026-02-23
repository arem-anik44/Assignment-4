Question -- 1- Ans--------------

getElementById = id is used for make the item unique, by the getElementById if we put the id here we can select the element by this id

getElementsByClassName -- class used have create group , to get those classes we use this

querySelector == any element by any id and class can be done by this , for id it works as id is unique but in case of classes it selects the first element instead of multiple classes

querySelectorAll == same as querySelector , it shows same result for id but in case of classes it take all the classes if multiple classes avilable in a node list



Question --2 --- Ans =------------

step 1 - create a new element by document.createElement(tag_name)
step 2 - and text and content by using innerText or textContent
step 3- if any attributes want to add by using setAttribute()
step 4 - then insert element by using appendChild(), append()


Question -- 3 --- Ans ------------------

Event Bubbling is a JavaScript event propagation mechanism
When any event occurs in child Element , then first it run in his element 
then it moves upward to its immediate parent, after that it move current state immediate parent and the process continuous untill the the root ( document ) comes

Question -- 4 --- Ans ------------------

Event Delegation is a event bubbling technique , it helps  to reduce multiple event listeners, all also work for dynamically add elements, actully its working procedure is instead of using many listeners in the child element , have add one in it's parent , parent listen the event of children and detect by using event.target

Question -- 4 --- Ans --------------------

preventDefault() work on stopping the browser's default action , for example it stops the any link from navigating
stopPropagation() affect the event bubling up to root thus its affect the flow of events