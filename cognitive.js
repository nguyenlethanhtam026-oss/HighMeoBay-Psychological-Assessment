// ================= FOOTER ANIMATION =================

function animateFooter(){

const footer = document.querySelector(".footer");

    if(!footer) return;

    const footerTop = footer.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if(footerTop < windowHeight - 100){

        footer.classList.add("show");

    }

}

window.addEventListener("load", animateFooter);

window.addEventListener("scroll", animateFooter);

window.addEventListener("resize", animateFooter);


document.querySelectorAll(".intro-item h3").forEach(item=>{

const target=parseInt(item.innerText);

if(isNaN(target)) return;

let num=0;

const timer=setInterval(()=>{

num++;

item.innerText=num;

if(num>=target){

clearInterval(timer);

}

},25);

});

const enterBtn = document.getElementById("enterPage");
const intro = document.getElementById("introOverlay");

if (enterBtn && intro) {

    enterBtn.addEventListener("click", () => {

        const box = intro.querySelector(".intro-box");

        // Popup thu nhỏ dần
        box.style.transform = "scale(0.92)";
        box.style.opacity = "0";

        // Nền tối mờ dần
        intro.style.opacity = "0";

        setTimeout(() => {

            intro.remove();

        }, 600);

    });

}