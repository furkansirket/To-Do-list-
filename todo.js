var taskDOM = document.querySelector('#task')
var ekleDOM = document.querySelector('#liveToastBtn')
var listDOM = document.querySelector('#list')
var deletebtnDOM = document.querySelector("#deletebtn")
var liDOM = document.querySelector("li")

ekleDOM.onclick= function(){
    let emptyvalue = taskDOM.value.trim()
if(emptyvalue.length == 0){
    $(".error").toast('show');
}

else{
    $(".success").toast('show');
    const yenili =`<li class="list"><i class="fa-solid fa-trash close"></i>${taskDOM.value}</li>`;
    listDOM.innerHTML += yenili}
    taskDOM.value = ""   
}

listDOM.addEventListener('click', e=>{ 

    if(e.target.classList.contains('close')){

       const ebeveyn = e.target.parentElement 

            ebeveyn.remove()}
            if(e.target.classList.contains('list')){ 

                e.target.classList.toggle('checked')  } 
        }
    )
    