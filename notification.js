const notificationContainer = document.getElementById("notification-container");
const notificationMsg = document.getElementById("notification-msg-box");
const animateBar = document.getElementById("animated-bar");
const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let msg = text.value;
    if(msg ==''){
        msg = 'Enter Text To Show!'
    }
    closeNotification();
    showNotification(msg);
})

function showNotification(msg){
    notificationMsg.innerText = msg;
    notificationContainer.style.display = "flex";
    setTimeout(() => {
        notificationContainer.style.width = "330px";
        notificationContainer.style.height = "65px";
        animateBar.classList.add("animateTheBar");    
    }, 1);

    setTimeout(() => {
        closeNotification();
    }, 5000);
}

function closeNotification(){
    animateBar.classList.remove("animateTheBar");    
    notificationContainer.style.width = "0";
    notificationContainer.style.height = "0";
    setTimeout(function(){
        notificationContainer.style.display = "none";
    },1000);
}

// showNotification("go to sleep")
