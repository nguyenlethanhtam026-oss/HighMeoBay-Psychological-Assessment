document.getElementById("surveyForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let totalLoneliness = 0;
    let totalSocial = 0;

    let answersA = [];
    let answersB = [];

    // ===== PHẦN A =====

    for(let i = 1; i <= 20; i++){

        let answer =
        document.querySelector(`input[name="q${i}"]:checked`);

        if(answer == null){
            alert("Bạn chưa trả lời hết phần A!");
            return;
        }

        totalLoneliness += Number(answer.value);

        answersA.push(
            Number(answer.value)
);
    }

    // ===== PHẦN B =====

    for(let i = 31; i <= 42; i++){

        let answer =
        document.querySelector(`input[name="q${i}"]:checked`);

        if(answer == null){
            alert("Bạn chưa trả lời hết phần B!");
            return;
        }

        totalSocial += Number(answer.value);

        answersB.push(
            Number(answer.value)
);
    }

    // Lưu điểm cho result.html

    localStorage.setItem(
        "lonelinessScore",
        totalLoneliness
    );

    localStorage.setItem(
        "socialScore",
        totalSocial
    );

    let lonelinessLevel;

if(totalLoneliness <= 39){
    lonelinessLevel = "Thấp";
}
else if(totalLoneliness <= 59){
    lonelinessLevel = "Trung bình";
}
else{
    lonelinessLevel = "Cao";
}

let socialLevel;

if(totalSocial <= 28){
    socialLevel = "Thấp";
}
else if(totalSocial <= 44){
    socialLevel = "Trung bình";
}
else{
    socialLevel = "Cao";
}

let gender =
document.querySelector(
'input[name="graded"]:checked'
);

if(gender != null){
    gender = gender.value;
}
else{
    gender = "";
}

let grade =
document.querySelector(
'input[name="grade"]:checked'
);

let subjectGroup =
document.querySelector(
'input[name="subject_group"]:checked'
);

let timeSocial =
document.querySelector(
'input[name="time_social"]:checked'
);

let aloneActivity = [];

let activities =
document.querySelectorAll(
'input[name="alone_activity"]:checked'
);

let socialPurpose = [];

document
.querySelectorAll(
'input[name="social_purpose"]:checked'
)
.forEach(function(item){

    if(item.value != "other"){

        socialPurpose.push(
            item.parentElement.textContent.trim()
        );

    }

});

if(
document.getElementById("otherCheck2").checked
){

    let otherText =
    document.getElementById("otherText2")
    .value
    .trim();

    if(otherText){

        socialPurpose.push(otherText);

    }

}

socialPurpose = socialPurpose.join(", ");

activities.forEach(function(item){

    if(item.value != "other"){

        aloneActivity.push(item.parentElement.textContent.trim());

    }

});

if(
document.getElementById("otherCheck1").checked
){

    let otherText =
    document.getElementById(
        "otherText1"
    ).value;

    if(otherText != ""){

        aloneActivity.push(otherText);

    }

}

aloneActivity =
aloneActivity.join(", ");

if(timeSocial != null){

    timeSocial = timeSocial.value;

}
else{

    timeSocial = "";

}

if(timeSocial == "1"){
    timeSocial = "Dưới 1 giờ";
}
else if(timeSocial == "2"){
    timeSocial = "1 - 2 giờ";
}
else if(timeSocial == "3"){
    timeSocial = "2 - 4 giờ";
}
else if(timeSocial == "4"){
    timeSocial = "Trên 4 giờ";
}

if(subjectGroup != null){

    subjectGroup = subjectGroup.value;

}
else{

    subjectGroup = "";

}

if(subjectGroup == "other"){

    subjectGroup =
    document.getElementById(
        "subject_other"
    ).value;

}

if(grade != null){
    grade = grade.value;
}
else{
    grade = "";
}

let friendConnection =
document.querySelector(
'input[name="mucdoketban"]:checked'
);

if(friendConnection != null){

    friendConnection =
    friendConnection.value;

}
else{

    friendConnection = "";

}

let emotionSharing =
document.querySelector(
'input[name="mucdocamxuc"]:checked'
);

if(emotionSharing != null){

    emotionSharing =
    emotionSharing.value;

}
else{

    emotionSharing = "";

}

if(friendConnection == "1"){
    friendConnection = "Rất thấp";
}
else if(friendConnection == "2"){
    friendConnection = "Thấp";
}
else if(friendConnection == "3"){
    friendConnection = "Trung bình";
}
else if(friendConnection == "4"){
    friendConnection = "Cao";
}
else if(friendConnection == "5"){
    friendConnection = "Rất cao";
}

if(emotionSharing == "1"){
    emotionSharing = "Rất khó";
}
else if(emotionSharing == "2"){
    emotionSharing = "Khó";
}
else if(emotionSharing == "3"){
    emotionSharing = "Bình thường";
}
else if(emotionSharing == "4"){
    emotionSharing = "Dễ";
}
else if(emotionSharing == "5"){
    emotionSharing = "Rất dễ";
}

console.log("aloneActivity =", aloneActivity);
console.log("socialPurpose =", socialPurpose);

    // Gửi dữ liệu lên Google Sheet

    fetch(
"https://script.google.com/macros/s/AKfycby4WM9nd9fAhSfawLYHeiY2O2IiegvoiK57lCgR5ysNtaGzU_aSu8XKqYp7DAv3hhM/exec",
{
    method: "POST",
    body: JSON.stringify({

    lonelinessScore: totalLoneliness,
    lonelinessLevel: lonelinessLevel,

    socialScore: totalSocial,
    socialLevel: socialLevel,

    gender: gender,
    grade: grade,

    subjectGroup: subjectGroup,

    timeSocial: timeSocial,

    aloneActivity: aloneActivity,

    socialPurpose: socialPurpose,
    friendConnection: friendConnection,

    emotionSharing: emotionSharing,
    answersA: answersA,
    answersB: answersB,
})
}
)
.then(response => response.text())
.then(data => {

    console.log(data);

    alert("Đã gửi thành công!");

    window.location.href = "result.html";

})
.catch(error => {

    console.error(error);

    alert("Lỗi: " + error);

});

});