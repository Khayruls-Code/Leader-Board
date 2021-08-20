const humberger = document.querySelector('.humberger')
const menubar = document.querySelector('header nav ul')
humberger.addEventListener('click',()=>{
    menubar.classList.toggle('showMenu');
})

/////comment adding
const commnetBtn = document.getElementById('commnetBtn')
const commnetInput = document.getElementById('commnetInput')
const commentList = document.getElementById('commentList')
function createComment(){
    let li = document.createElement('li')
    let p = document.createElement('p')
    p.innerText = commnetInput.value;
    let button = document.createElement('button')
    button.innerText = 'Delete'
    button.className = 'delete'

    button.addEventListener('click', deleteComment) ///add delete function

    li.appendChild(p)
    li.appendChild(button)
    if(commnetInput.value != ''){
        commentList.appendChild(li)
    }
}
commnetBtn.addEventListener('click', function(){
    createComment()
    commnetInput.value = ''
})


function deleteComment(){
    this.parentNode.style.display = 'none';
}

let deleteBtn = document.querySelectorAll('.delete')
deleteBtn.forEach(item => {
    item.addEventListener('click', deleteComment)
});



//////////ratting operations

function operation(inputId, isIncrese,btnId){
    let buttonId = document.getElementById(btnId)
    let input = document.getElementById(inputId);
    let inputValue = parseInt(input.value);
    if(isIncrese){
        input.value = inputValue + 1
        showHideStar()
    }else{
        if(input.value > 0){
            input.value = inputValue - 1
        }
        showHideStar()
    }
    if(input.value == 5){
        buttonId.setAttribute('disabled', true)
    }else{
        buttonId.removeAttribute('disabled')
    }
}

document.getElementById('plus').addEventListener('click', function(){
    operation('ratingInput', true, 'plus')
    // showHideStar()
})
document.getElementById('minus').addEventListener('click', function(){
    operation('ratingInput', false, 'plus')
    // showHideStar()
})


///show rating star

function showStar(starId){
    return document.getElementById(starId).style.display = 'block'
}
function hide(starId){
    return document.getElementById(starId).style.display = 'none'
}
let input = document.getElementById('ratingInput');

function showHideStar(){
    if(input.value == 1){
        showStar('first')
    }
    else if(input.value == 2){
        showStar('first')
        showStar('second')
    }
    else if(input.value == 3){
        showStar('first')
        showStar('second')
        showStar('third')
    }
    else if(input.value == 4){
        showStar('first')
        showStar('second')
        showStar('third')
        showStar('fourth')
    }
    else if(input.value == 5){
        showStar('first')
        showStar('second')
        showStar('third')
        showStar('fourth')
        showStar('fifth')
    }
    else if(input.value == 0){
        hide('first')
        hide('second')
        hide('third')
        hide('fourth')
        hide('fifth')
    }
}