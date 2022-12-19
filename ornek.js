let userFormDOM=document.querySelector("#userForm");
const alertDOM=document.querySelector('#alert');
userFormDOM.addEventListener("submit",formHandler);


const ALERT=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Bilgileriniz eksik veya hatalı!</strong> Lütfen bilgilerinizi eksiksiz girdiğinizden emin olunuz.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(e){
    e.preventDefault();
    let usernameDOM=document.querySelector("#username");
     let scoreDOM=document.querySelector("#score");
    if(usernameDOM.value && scoreDOM.value)
    {
        addItem(usernameDOM.value,scoreDOM.value);
        usernameDOM.value="";
        scoreDOM.value="";
    }
    else
    alertDOM.innerHTML=ALERT;


}

function addItem(element,value){
    let userlistDOM=document.querySelector("#userlist");
let liDOM=document.createElement("li");
liDOM.innerHTML=`${element} <span class="badge bg-primary rounded-pill ">${value}</span>`;
liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
userlistDOM.append(liDOM);

}