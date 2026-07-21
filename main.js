document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");

    window.addEventListener("scroll", () => {
        if (!footer) return;

        const rect = footer.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        }
    });
    const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
});

const slider =
document.querySelector(".assessment-slider");

const track =
document.querySelector(".custom-track");

const thumb =
document.querySelector(".custom-thumb");

function updateThumb(){

    const maxScroll =
    slider.scrollWidth -
    slider.clientWidth;

    const maxThumb =
    track.clientWidth -
    thumb.offsetWidth;

    const percent =
    slider.scrollLeft /
    maxScroll;

    thumb.style.left =
    (percent * maxThumb) + "px";
}

slider.addEventListener(
    "scroll",
    updateThumb
);

let dragging = false;

thumb.addEventListener(
    "mousedown",
    () => {

        dragging = true;

    }
);

document.addEventListener(
    "mouseup",
    () => {

        dragging = false;

    }
);

document.addEventListener(
    "mousemove",
    (e) => {

        if(!dragging) return;

        const rect =
        track.getBoundingClientRect();

        let x =
        e.clientX -
        rect.left;

        const maxThumb =
        track.clientWidth -
        thumb.offsetWidth;

        x =
        Math.max(
            0,
            Math.min(
                x,
                maxThumb
            )
        );

        thumb.style.left =
        x + "px";

        const percent =
        x / maxThumb;

        slider.scrollLeft =
        percent *
        (
            slider.scrollWidth -
            slider.clientWidth
        );
    }
);

updateThumb();

// ================= TEAM TOGGLE =================

document.addEventListener("DOMContentLoaded",()=>{

    const btn=document.getElementById("toggleTeam");

    const detail=document.getElementById("teamDetail");

    const members=document.querySelectorAll(".member");

    let opening=false;

    btn.addEventListener("click",()=>{

        if(opening) return;

        opening=true;

        detail.classList.toggle("show");

        btn.classList.toggle("open");

        if(detail.classList.contains("show")){

            btn.innerHTML="▲ THU GỌN ▲";

            members.forEach((member,index)=>{

                setTimeout(()=>{

                    member.classList.add("show");

                },index*120);

            });

        }

        else{

            btn.innerHTML="🔎 TÌM HIỂU THÊM VỀ NHÓM THỰC HIỆN 🔍";

            members.forEach(member=>{

                member.classList.remove("show");

            });

        }

        setTimeout(()=>{

            opening=false;

        },700);

    });

});

document.querySelectorAll(".developing-link").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        alert("🚧 Chuyên mục đang được phát triển!");

    });

});