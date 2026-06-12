let loneliness =
Number(localStorage.getItem("lonelinessScore"));

let social =
Number(localStorage.getItem("socialScore"));

let lonelinessLevel = "";
let socialLevel = "";

let advice = "";

if(loneliness <= 34){
    lonelinessLevel = "Thấp";
}
else if(loneliness <= 49){
    lonelinessLevel = "Trung bình";
}
else{
    lonelinessLevel = "Cao";
}

if(social <= 24){
    socialLevel = "Thấp";
}
else if(social <= 36){
    socialLevel = "Trung bình";
}
else{
    socialLevel = "Cao";
}

if(
    lonelinessLevel === "Cao" &&
    socialLevel === "Cao"
){
    advice =
    "Bạn có mức độ cô đơn cao và thường tìm đến mạng xã hội để bù đắp cảm xúc.";
}
else if(
    lonelinessLevel === "Cao"
){
    advice =
    "Bạn đang có mức độ cô đơn tương đối cao.";
}
else if(
    socialLevel === "Cao"
){
    advice =
    "Bạn có xu hướng sử dụng mạng xã hội như một cách tìm kiếm sự kết nối.";
}
else{
    advice =
    "Các chỉ số của bạn đang ở mức tương đối ổn định.";
}

document.getElementById("loneliness")
.innerText =
"Điểm cô đơn: " + loneliness;

document.getElementById("social")
.innerText =
"Điểm sử dụng MXH bù đắp: " + social;
document.getElementById("lonelinessLevel")
.innerText =
"Mức độ cô đơn: " + lonelinessLevel;

document.getElementById("socialLevel")
.innerText =
"Mức độ sử dụng MXH bù đắp: " + socialLevel;
document.getElementById("advice")
.innerText = advice;