// ================= LẤY DỮ LIỆU TỪ SURVEY =================
let lonelinessScore = Number(localStorage.getItem("lonelinessScore"));
let socialScore = Number(localStorage.getItem("socialScore"));

// ================= KIỂM TRA LỖI =================
if (isNaN(lonelinessScore) || isNaN(socialScore)) {
    alert("Không tìm thấy dữ liệu. Hãy làm lại khảo sát.");
}

// ================= HÀM PHÂN LOẠI =================
function getLevel(percent){
    if(percent < 33){
        return { text: "🟢 Thấp", color: "#00ff88" };
    }
    else if(percent < 66){
        return { text: "🟡 Trung bình", color: "#facc15" };
    }
    else{
        return { text: "🔴 Cao", color: "#ef4444" };
    }
}

// ================= ANIMATE THANH =================
function animateBar(bar, targetPercent, color){
    let width = 0;

    bar.style.background = color;

    let interval = setInterval(() => {
        if(width >= targetPercent){
            clearInterval(interval);
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }, 10);
}

// ================= U C L A (CÔ ĐƠN) =================
let lonelinessPercent = Math.round((lonelinessScore / 80) * 100);
let lonelinessLevel = getLevel(lonelinessPercent);

document.getElementById("lonelinessScore").innerText =
`${lonelinessScore}/80`;

animateBar(
    document.getElementById("lonelinessBar"),
    lonelinessPercent,
    lonelinessLevel.color
);

document.getElementById("lonelinessLevel").innerText =
    `${lonelinessLevel.text} - ${lonelinessPercent}%`;

// ================= C I U (MXH) =================
let socialPercent = Math.round((socialScore / 60) * 100);
let socialLevel = getLevel(socialPercent);

document.getElementById("socialScore").innerText =
`${socialScore}/60`;

animateBar(
    document.getElementById("socialBar"),
    socialPercent,
    socialLevel.color
);

document.getElementById("socialLevel").innerText =
    `${socialLevel.text} - ${socialPercent}%`;

// ================= NHÓM KẾT QUẢ =================

const lonelinessGroup =
    lonelinessPercent < 33 ? "low" :
    lonelinessPercent < 66 ? "medium" :
    "high";

const socialGroup =
    socialPercent < 33 ? "low" :
    socialPercent < 66 ? "medium" :
    "high";

const resultType = `${lonelinessGroup}-${socialGroup}`;

// ================= DỮ LIỆU BÁO CÁO =================

const reportData = {

    "high-high":{

    meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức cao và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức cao. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn thường xuyên có trải nghiệm cảm giác cô đơn và thường có xu hướng sử dụng mạng xã hội như một cách để giải tỏa cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
         Nhìn chung, cả trải nghiệm về cảm giác cô đơn và xu hướng sử dụng mạng xã hội của bạn đều đang được thể hiện khá rõ trong giai đoạn hiện tại. Điều này phản ánh rằng mạng xã hội đang giữ một vai trò đáng kể trong cách bạn đáp ứng nhu cầu về mặt cảm xúc và duy trì cảm giác được kết nối. 
`,

    relation:` Kết quả của bạn cho thấy cả mức độ cô đơn và xu hướng sử dụng mạng xã hội mang tính bù đắp đều ở mức cao. Hai chỉ số này cùng xuất hiện ở mức cao, cho thấy ở trường hợp của bạn có khả năng tồn tại mối liên hệ giữa trải nghiệm cô đơn và xu hướng tìm đến mạng xã hội để đáp ứng nhu cầu về cảm xúc hoặc sự kết nối.
    <br>
    Tuy nhiên, kết quả không khẳng định rằng cảm giác cô đơn là nguyên nhân trực tiếp dẫn đến hành vi sử dụng mạng xã hội mang tính bù đắp, mà chỉ phản ánh rằng hai yếu tố này đang cùng xuất hiện và có khả năng liên quan đến nhau ở thời điểm thực hiện khảo sát.
 `,

    positive:`Qua kết quả đánh giá, có thể thấy cảm giác cô đơn và xu hướng sử dụng mạng xã hội mang tính bù đắp đều đang được thể hiện khá rõ. Điều đáng ghi nhận là bạn đã nhận diện được những trải nghiệm và thói quen hiện tại của bản thân thông qua bài đánh giá này.
    <br>
    Việc hiểu rõ trạng thái hiện tại sẽ tạo nền tảng để bạn từng bước xây dựng những cách kết nối và chăm sóc sức khỏe tinh thần phù hợp hơn trong tương lai. Nhận thức được vấn đề luôn là bước khởi đầu quan trọng trên hành trình thay đổi tích cực.
`,

    advice:`🤝 Kết nối với mọi người: 
    <br>
- Nếu có thể, hãy bắt đầu bằng một cuộc trò chuyện với người mà bạn cảm thấy tin tưởng, dù chỉ là chia sẻ một phần cảm xúc của mình.
    <br>
- Dành thêm thời gian cho những hoạt động gặp gỡ trực tiếp để tăng cảm giác kết nối với những người xung quanh.
    <br>
- Nếu bạn cảm thấy khó mở lời, hãy bắt đầu từ những cuộc trò chuyện ngắn hoặc tham gia một hoạt động nhóm mà mình yêu thích.
    <br>
📱 Sử dụng mạng xã hội: 
<br>
- Thử để ý xem mình thường sử dụng mạng xã hội vào những thời điểm nào và cảm thấy như thế nào sau khi sử dụng.
<br>
- Nếu nhận thấy mạng xã hội đang trở thành nơi duy nhất để tìm kiếm sự an ủi hoặc kết nối, hãy thử xen kẽ bằng những hoạt động ngoài đời thực mà bạn yêu thích.
<br>
- Không nhất thiết phải giảm thời gian sử dụng ngay lập tức; thay vào đó, hãy từng bước xây dựng những thói quen sử dụng mạng xã hội có chủ đích và phù hợp hơn.
<br>
🌿 Chăm sóc sức khỏe tinh thần:
<br>
- Hãy dành cho bản thân thời gian nghỉ ngơi, ăn uống đầy đủ và duy trì những hoạt động giúp cơ thể được thư giãn.
<br>
- Nếu những cảm xúc tiêu cực xuất hiện thường xuyên hoặc ảnh hưởng đến việc học tập, sinh hoạt hay các mối quan hệ, hãy cân nhắc tìm kiếm sự hỗ trợ từ người thân, giáo viên hoặc chuyên gia tâm lý.
<br>
- Hãy nhớ rằng việc quan tâm đến sức khỏe tinh thần không phải là dấu hiệu của sự yếu đuối, mà là một cách để chăm sóc bản thân và từng bước vượt qua những khó khăn.
`,

    message:`Nếu gần đây bạn cảm thấy cô đơn, mệt mỏi hoặc khó tìm được sự kết nối, hãy nhớ rằng bạn không phải là người duy nhất trải qua những cảm xúc đó. Bạn không cần phải thay đổi mọi thứ ngay lập tức. Chỉ cần từng bước quan tâm đến bản thân và sẵn sàng tìm kiếm sự đồng hành khi cần, đó đã là một khởi đầu đáng quý.`,

},

    "high-medium":{
    meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức cao và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức trung bình. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn thường xuyên có trải nghiệm cảm giác cô đơn và trong một số tình huống có xu hướng tìm đến mạng xã hội để giải tỏa cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
    Nhìn chung, mạng xã hội đang góp phần đáp ứng một phần nhu cầu về mặt cảm xúc của bạn, nhưng chưa trở thành cách thức chính trong mọi tình huống. Điều này phản ánh rằng vai trò của môi trường trực tuyến đối với đời sống cảm xúc của bạn đang dần hình thành và có thể thay đổi tùy theo hoàn cảnh hoặc các mối quan hệ xung quanh.
`,

    relation:`Kết quả của bạn cho thấy mức độ cô đơn ở mức cao và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức trung bình. Hai chỉ số này cho thấy giữa cảm giác cô đơn và hành vi sử dụng mạng xã hội có khả năng tồn tại một mối liên hệ, tuy nhiên mức độ biểu hiện chưa hoàn toàn rõ rệt.
    <br>
    Điều này có thể phản ánh rằng khi cảm thấy cô đơn, bạn đôi khi tìm đến mạng xã hội như một cách để giải tỏa cảm xúc hoặc tìm kiếm sự kết nối, nhưng đây chưa phải là cách thức duy nhất hoặc thường xuyên nhất mà bạn lựa chọn.
`,

    positive:`Qua kết quả đánh giá, có thể thấy mặc dù cảm giác cô đơn xuất hiện ở mức cao, xu hướng sử dụng mạng xã hội mang tính bù đắp của bạn vẫn chưa ở mức cao nhất. Điều này cho thấy bạn vẫn còn những cách khác để đáp ứng nhu cầu cảm xúc và kết nối ngoài môi trường trực tuyến.
    <br>
    Đây là một nền tảng tích cực để bạn tiếp tục củng cố các nguồn hỗ trợ trong cuộc sống và từng bước xây dựng những phương thức chăm sóc cảm xúc phù hợp hơn với bản thân.
`,

    advice:`🤝 Kết nối với mọi người: 
    <br>
- Nếu có thể, hãy bắt đầu bằng một cuộc trò chuyện với người mà bạn cảm thấy tin tưởng, dù chỉ là chia sẻ một phần cảm xúc của mình.
    <br>
- Dành thêm thời gian cho những hoạt động gặp gỡ trực tiếp để tăng cảm giác kết nối với những người xung quanh.
    <br>
- Nếu bạn cảm thấy khó mở lời, hãy bắt đầu từ những cuộc trò chuyện ngắn hoặc tham gia một hoạt động nhóm mà mình yêu thích.
    <br>
📱 Sử dụng mạng xã hội: 
<br>
- Thử để ý xem mình thường sử dụng mạng xã hội vào những thời điểm nào và cảm thấy như thế nào sau khi sử dụng.
<br>
- Nếu nhận thấy mạng xã hội đang trở thành nơi duy nhất để tìm kiếm sự an ủi hoặc kết nối, hãy thử xen kẽ bằng những hoạt động ngoài đời thực mà bạn yêu thích.
<br>
- Không nhất thiết phải giảm thời gian sử dụng ngay lập tức; thay vào đó, hãy từng bước xây dựng những thói quen sử dụng mạng xã hội có chủ đích và phù hợp hơn.
<br>
🌿 Chăm sóc sức khỏe tinh thần:
<br>
- Hãy dành cho bản thân thời gian nghỉ ngơi, ăn uống đầy đủ và duy trì những hoạt động giúp cơ thể được thư giãn.
<br>
- Nếu những cảm xúc tiêu cực xuất hiện thường xuyên hoặc ảnh hưởng đến việc học tập, sinh hoạt hay các mối quan hệ, hãy cân nhắc tìm kiếm sự hỗ trợ từ người thân, giáo viên hoặc chuyên gia tâm lý.
<br>
- Hãy nhớ rằng việc quan tâm đến sức khỏe tinh thần không phải là dấu hiệu của sự yếu đuối, mà là một cách để chăm sóc bản thân và từng bước vượt qua những khó khăn.
`,

    message:`Nếu gần đây bạn cảm thấy cô đơn, mệt mỏi hoặc khó tìm được sự kết nối, hãy nhớ rằng bạn không phải là người duy nhất trải qua những cảm xúc đó. Bạn không cần phải thay đổi mọi thứ ngay lập tức. Chỉ cần từng bước quan tâm đến bản thân và sẵn sàng tìm kiếm sự đồng hành khi cần, đó đã là một khởi đầu đáng quý.`,
    },

    "high-low":{
     meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức cao và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức thấp. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn thường xuyên có trải nghiệm cảm giác cô đơn hoặc thiếu sự kết nối với những người xung quanh. Tuy nhiên, bạn không có xu hướng sử dụng mạng xã hội như một cách chủ yếu để bù đắp cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
     Nhìn chung, cảm giác cô đơn của bạn chưa đi kèm với thói quen tìm kiếm sự an ủi hoặc kết nối thông qua mạng xã hội. Điều này phản ánh rằng bạn có thể đang lựa chọn những cách khác để đối diện với cảm xúc của mình hoặc chưa hình thành xu hướng dựa vào môi trường trực tuyến khi cảm thấy cô đơn.
`,

    relation:`Kết quả của bạn cho thấy mức độ cô đơn ở mức cao nhưng xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức thấp. Điều này phản ánh rằng mặc dù bạn thường xuyên trải nghiệm cảm giác cô đơn, kết quả khảo sát chưa cho thấy bạn có xu hướng sử dụng mạng xã hội như một cách chủ yếu để bù đắp cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
    Ở trường hợp của bạn, mối liên hệ giữa hai yếu tố này chưa được thể hiện rõ. Điều này có thể phản ánh rằng bạn đang lựa chọn những cách khác để đối diện với cảm xúc của mình hoặc việc sử dụng mạng xã hội của bạn chịu ảnh hưởng bởi những yếu tố khác ngoài cảm giác cô đơn.
`,

    positive:`Qua kết quả đánh giá, có thể thấy mặc dù bạn thường xuyên trải nghiệm cảm giác cô đơn, bạn chưa có xu hướng sử dụng mạng xã hội như một cách chủ yếu để bù đắp cảm xúc. Đây là một điểm đáng ghi nhận vì cho thấy bạn không hoàn toàn phụ thuộc vào môi trường trực tuyến khi đối diện với những cảm xúc khó chịu.
    <br>
    Điều này có thể trở thành nền tảng để bạn tiếp tục tìm kiếm và phát huy những hình thức kết nối hoặc cân bằng cảm xúc phù hợp với bản thân trong cuộc sống hằng ngày.
`,

    advice:`🤝 Kết nối với mọi người: 
    <br>
- Nếu có thể, hãy bắt đầu bằng một cuộc trò chuyện với người mà bạn cảm thấy tin tưởng, dù chỉ là chia sẻ một phần cảm xúc của mình.
    <br>
- Dành thêm thời gian cho những hoạt động gặp gỡ trực tiếp để tăng cảm giác kết nối với những người xung quanh.
    <br>
- Nếu bạn cảm thấy khó mở lời, hãy bắt đầu từ những cuộc trò chuyện ngắn hoặc tham gia một hoạt động nhóm mà mình yêu thích.
    <br>
📱 Sử dụng mạng xã hội: 
<br>
- Thử để ý xem mình thường sử dụng mạng xã hội vào những thời điểm nào và cảm thấy như thế nào sau khi sử dụng.
<br>
- Nếu nhận thấy mạng xã hội đang trở thành nơi duy nhất để tìm kiếm sự an ủi hoặc kết nối, hãy thử xen kẽ bằng những hoạt động ngoài đời thực mà bạn yêu thích.
<br>
- Không nhất thiết phải giảm thời gian sử dụng ngay lập tức; thay vào đó, hãy từng bước xây dựng những thói quen sử dụng mạng xã hội có chủ đích và phù hợp hơn.
<br>
🌿 Chăm sóc sức khỏe tinh thần:
<br>
- Hãy dành cho bản thân thời gian nghỉ ngơi, ăn uống đầy đủ và duy trì những hoạt động giúp cơ thể được thư giãn.
<br>
- Nếu những cảm xúc tiêu cực xuất hiện thường xuyên hoặc ảnh hưởng đến việc học tập, sinh hoạt hay các mối quan hệ, hãy cân nhắc tìm kiếm sự hỗ trợ từ người thân, giáo viên hoặc chuyên gia tâm lý.
<br>
- Hãy nhớ rằng việc quan tâm đến sức khỏe tinh thần không phải là dấu hiệu của sự yếu đuối, mà là một cách để chăm sóc bản thân và từng bước vượt qua những khó khăn.
`,

    message:`Nếu gần đây bạn cảm thấy cô đơn, mệt mỏi hoặc khó tìm được sự kết nối, hãy nhớ rằng bạn không phải là người duy nhất trải qua những cảm xúc đó. Bạn không cần phải thay đổi mọi thứ ngay lập tức. Chỉ cần từng bước quan tâm đến bản thân và sẵn sàng tìm kiếm sự đồng hành khi cần, đó đã là một khởi đầu đáng quý.`,
    },

    "medium-high":{
     meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức trung bình và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức cao. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn đôi khi có trải nghiệm cảm giác cô đơn hoặc thiếu sự kết nối, đồng thời thường có xu hướng sử dụng mạng xã hội như một cách để giải tỏa cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
     Nhìn chung, mạng xã hội đang đóng vai trò quan trọng trong cách bạn đáp ứng những nhu cầu về mặt cảm xúc và giao tiếp. Điều này phản ánh rằng trong một số hoàn cảnh nhất định, môi trường trực tuyến có thể trở thành nơi bạn tìm kiếm sự chia sẻ hoặc cảm giác được kết nối với người khác. 
`,

    relation:`Kết quả của bạn cho thấy mức độ cô đơn ở mức trung bình trong khi xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức cao. Hai chỉ số này cho thấy giữa trải nghiệm cô đơn và hành vi sử dụng mạng xã hội có khả năng tồn tại một mối liên hệ nhất định, mặc dù chưa phải ở mức rõ rệt nhất.
    <br>
    Điều này có thể phản ánh rằng trong những thời điểm bạn cảm thấy thiếu sự kết nối hoặc cần chia sẻ cảm xúc, mạng xã hội thường trở thành một trong những lựa chọn để đáp ứng nhu cầu đó. Tuy nhiên, vẫn có thể tồn tại những yếu tố khác cùng ảnh hưởng đến hành vi sử dụng mạng xã hội của bạn.
`,

    positive:`Qua kết quả đánh giá, có thể thấy bạn vẫn đang duy trì được những nền tảng tích cực trong các mối quan hệ, mặc dù đôi khi cảm giác cô đơn và việc tìm đến mạng xã hội đã xuất hiện với tần suất cao hơn. Điều này cho thấy vẫn còn nhiều cơ hội để bạn chủ động điều chỉnh trước khi những thói quen này trở nên rõ rệt hơn.
    <br>
    Việc nhận biết được trạng thái hiện tại là một điểm đáng ghi nhận. Đây sẽ là cơ sở giúp bạn từng bước xây dựng những cách kết nối và chăm sóc cảm xúc phù hợp hơn với nhu cầu của bản thân.
`,

    advice:`🤝 Kết nối với mọi người: 
    <br>
- Nếu có thể, hãy bắt đầu bằng một cuộc trò chuyện với người mà bạn cảm thấy tin tưởng, dù chỉ là chia sẻ một phần cảm xúc của mình.
    <br>
- Dành thêm thời gian cho những hoạt động gặp gỡ trực tiếp để tăng cảm giác kết nối với những người xung quanh.
    <br>
- Nếu bạn cảm thấy khó mở lời, hãy bắt đầu từ những cuộc trò chuyện ngắn hoặc tham gia một hoạt động nhóm mà mình yêu thích.
    <br>
📱 Sử dụng mạng xã hội: 
<br>
- Thử để ý xem mình thường sử dụng mạng xã hội vào những thời điểm nào và cảm thấy như thế nào sau khi sử dụng.
<br>
- Nếu nhận thấy mạng xã hội đang trở thành nơi duy nhất để tìm kiếm sự an ủi hoặc kết nối, hãy thử xen kẽ bằng những hoạt động ngoài đời thực mà bạn yêu thích.
<br>
- Không nhất thiết phải giảm thời gian sử dụng ngay lập tức; thay vào đó, hãy từng bước xây dựng những thói quen sử dụng mạng xã hội có chủ đích và phù hợp hơn.
<br>
🌿 Chăm sóc sức khỏe tinh thần:
<br>
- Hãy dành cho bản thân thời gian nghỉ ngơi, ăn uống đầy đủ và duy trì những hoạt động giúp cơ thể được thư giãn.
<br>
- Nếu những cảm xúc tiêu cực xuất hiện thường xuyên hoặc ảnh hưởng đến việc học tập, sinh hoạt hay các mối quan hệ, hãy cân nhắc tìm kiếm sự hỗ trợ từ người thân, giáo viên hoặc chuyên gia tâm lý.
<br>
- Hãy nhớ rằng việc quan tâm đến sức khỏe tinh thần không phải là dấu hiệu của sự yếu đuối, mà là một cách để chăm sóc bản thân và từng bước vượt qua những khó khăn.
`,

    message:`Nếu gần đây bạn cảm thấy cô đơn, mệt mỏi hoặc khó tìm được sự kết nối, hãy nhớ rằng bạn không phải là người duy nhất trải qua những cảm xúc đó. Bạn không cần phải thay đổi mọi thứ ngay lập tức. Chỉ cần từng bước quan tâm đến bản thân và sẵn sàng tìm kiếm sự đồng hành khi cần, đó đã là một khởi đầu đáng quý.`,
    },

    "medium-medium":{
     meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức trung bình và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức trung bình. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn đôi khi có trải nghiệm cảm giác cô đơn và trong một số tình huống cũng có xu hướng tìm đến mạng xã hội để giải tỏa cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
     Nhìn chung, những trải nghiệm về cảm xúc và thói quen sử dụng mạng xã hội của bạn đang ở mức trung bình, cho thấy cả hai yếu tố đều có thể thay đổi theo từng giai đoạn của cuộc sống. Trong những thời điểm áp lực hoặc thiếu sự kết nối, mạng xã hội có thể trở thành một lựa chọn quen thuộc hơn; ngược lại, khi cuộc sống ổn định hơn, xu hướng này cũng có thể giảm đi.  
`,

    relation:`Kết quả của bạn cho thấy cả mức độ cô đơn và xu hướng sử dụng mạng xã hội mang tính bù đắp đều ở mức trung bình. Hai chỉ số đang xuất hiện ở mức tương đồng, cho thấy giữa chúng có thể tồn tại một mối liên hệ nhất định trong trải nghiệm hiện tại của bạn.
    <br>
    Điều này có thể phản ánh rằng trong một số giai đoạn hoặc hoàn cảnh nhất định, khi cảm giác cô đơn xuất hiện, bạn cũng có xu hướng tìm đến mạng xã hội để đáp ứng một phần nhu cầu về cảm xúc hoặc sự kết nối. Tuy nhiên, mối liên hệ này chưa được thể hiện ở mức nổi bật.
`,

    positive:`Qua kết quả đánh giá, có thể thấy những trải nghiệm về cảm giác cô đơn và xu hướng sử dụng mạng xã hội của bạn đều đang ở mức trung bình. Điều này cho thấy bạn vẫn có nhiều cơ hội để điều chỉnh và duy trì sự cân bằng trước khi những thói quen này trở nên rõ rệt hơn.
    <br>
    Việc nhận biết được trạng thái hiện tại là một điểm đáng ghi nhận. Đây sẽ là cơ sở giúp bạn chủ động xây dựng những thói quen tích cực trong việc kết nối với mọi người và sử dụng mạng xã hội một cách phù hợp hơn trong tương lai.
`,

    advice:`🤝 Kết nối với mọi người:
<br>
- Nếu có thể, hãy chủ động tạo thêm những cơ hội gặp gỡ hoặc trò chuyện trực tiếp với người thân và bạn bè.
<br>
- Khi cảm thấy áp lực hoặc cô đơn, thử chia sẻ cảm xúc với một người mà bạn tin tưởng thay vì giữ mọi thứ cho riêng mình.
<br>
- Tham gia các hoạt động tập thể, câu lạc bộ hoặc sở thích chung có thể giúp mở rộng các mối quan hệ tích cực.
<br>
📱 Sử dụng mạng xã hội:
<br>
- Quan sát cảm xúc của bản thân sau mỗi lần sử dụng mạng xã hội để hiểu điều gì khiến bạn cảm thấy tích cực hoặc tiêu cực.
<br>
- Nếu nhận thấy mình thường tìm đến mạng xã hội khi buồn chán hoặc căng thẳng, hãy thử xen kẽ bằng những hoạt động khác mà bạn yêu thích.
<br>
- Ưu tiên những tương tác có ý nghĩa thay vì dành quá nhiều thời gian lướt nội dung một cách thụ động.
<br>
🌿 Chăm sóc sức khỏe tinh thần:
<br>
- Duy trì giấc ngủ, chế độ ăn uống và vận động hợp lý để hỗ trợ sức khỏe tinh thần.
<br>
- Dành vài phút mỗi ngày để nhìn lại cảm xúc hoặc ghi lại những điều khiến bạn biết ơn và vui vẻ.
<br>
- Nếu cảm thấy những trải nghiệm tiêu cực kéo dài, hãy cân nhắc chia sẻ với người thân hoặc tìm kiếm sự hỗ trợ khi cần thiết.
`,

    message:`Những thay đổi tích cực thường bắt đầu từ những điều rất nhỏ. Việc hiểu rõ cảm xúc và thói quen của bản thân hôm nay sẽ giúp bạn chủ động hơn trong việc chăm sóc sức khỏe tinh thần trong tương lai. Mỗi bước tiến, dù nhỏ, đều có ý nghĩa.
`,
    },

    "medium-low":{
     meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức trung bình và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức thấp. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn đôi khi có trải nghiệm cảm giác cô đơn hoặc thiếu sự kết nối trong một số hoàn cảnh. Tuy nhiên, bạn không có xu hướng sử dụng mạng xã hội như một cách chủ yếu để bù đắp cảm xúc hoặc tìm kiếm sự kết nối.
     <br>
     Nhìn chung, những trải nghiệm về cảm giác cô đơn của bạn xuất hiện ở một mức độ nhất định nhưng chưa đi kèm với thói quen tìm đến mạng xã hội để đối phó với cảm xúc. Điều này phản ánh rằng khi gặp những khoảng lặng trong cuộc sống, bạn có xu hướng duy trì sự cân bằng giữa môi trường trực tuyến và các cách ứng phó khác thay vì phụ thuộc vào mạng xã hội.  
`,

    relation:`Kết quả của bạn cho thấy mức độ cô đơn ở mức trung bình nhưng xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức thấp. Điều này phản ánh rằng mặc dù đôi khi bạn có trải nghiệm cảm giác cô đơn, điều đó chưa đi kèm với xu hướng sử dụng mạng xã hội để bù đắp cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
    Ở thời điểm khảo sát, mối liên hệ giữa hai yếu tố này chưa được thể hiện rõ. Điều này có thể phản ánh rằng khi đối diện với cảm giác cô đơn, bạn có xu hướng lựa chọn những cách khác để thích nghi hoặc cân bằng cảm xúc thay vì chủ yếu tìm đến môi trường trực tuyến.
`,

    positive:`Qua kết quả đánh giá, có thể thấy mặc dù đôi khi bạn trải nghiệm cảm giác cô đơn, bạn vẫn chưa hình thành xu hướng phụ thuộc vào mạng xã hội để bù đắp cảm xúc. Đây là một điểm đáng ghi nhận vì cho thấy việc sử dụng mạng xã hội của bạn vẫn đang được duy trì ở mức tương đối kiểm soát.
    <br>
    Bạn có thể tiếp tục phát huy những cách kết nối và cân bằng cảm xúc phù hợp với bản thân. Đồng thời, việc quan tâm nhiều hơn đến các mối quan hệ ngoài đời thực cũng sẽ góp phần giúp bạn giảm bớt những trải nghiệm cô đơn khi chúng xuất hiện.
`,

    advice:`🤝 Kết nối với mọi người:
    <br>
- Tiếp tục dành thời gian cho những người mang lại cho bạn cảm giác thoải mái và được lắng nghe, như gia đình, bạn bè hoặc thầy cô.
<br> 
- Chủ động duy trì những cuộc trò chuyện trực tiếp hoặc những hoạt động chung để nuôi dưỡng các mối quan hệ tích cực.
<br> 
- Đừng quên quan tâm và chia sẻ với những người xung quanh. Đôi khi, một lời hỏi thăm cũng giúp gắn kết các mối quan hệ bền vững hơn.
<br> 
📱 Sử dụng mạng xã hội:
<br> 
- Tiếp tục sử dụng mạng xã hội như một công cụ hỗ trợ cho học tập, giải trí hoặc duy trì liên lạc.
<br> 
- Thỉnh thoảng, hãy dành thời gian tạm rời màn hình để cân bằng giữa môi trường trực tuyến và cuộc sống thực.
<br> 
- Ưu tiên theo dõi những nội dung tích cực và những tương tác mang lại giá trị cho bản thân.
<br> 
🌿 Chăm sóc sức khỏe tinh thần: 
<br> 
- Duy trì những thói quen giúp bạn cảm thấy thoải mái như vận động, đọc sách hoặc theo đuổi sở thích cá nhân.
<br> 
- Dành thời gian nghỉ ngơi hợp lý và lắng nghe cảm xúc của bản thân, ngay cả khi mọi thứ đang diễn ra thuận lợi.
<br> 
- Khi gặp áp lực hoặc những thay đổi trong cuộc sống, đừng ngần ngại chia sẻ với người mà bạn tin tưởng.
`,

    message:`Mỗi người đều sẽ có những giai đoạn cảm xúc khác nhau trong cuộc sống. Việc bạn đang duy trì được sự cân bằng ở thời điểm hiện tại là một điều đáng trân trọng. Hy vọng bạn sẽ tiếp tục gìn giữ những mối quan hệ, thói quen và giá trị tích cực đang đồng hành cùng mình.`,
    },

    "low-high":{
    meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức thấp và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức cao. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn ít có trải nghiệm cảm giác cô đơn. Tuy nhiên, bạn thường có xu hướng sử dụng mạng xã hội như một cách để tìm kiếm sự thoải mái về mặt cảm xúc hoặc duy trì cảm giác được kết nối.
    <br>
    Nhìn chung, bạn vẫn có thể cảm nhận được sự kết nối với những người xung quanh, nhưng mạng xã hội đang giữ một vai trò khá nổi bật trong đời sống cảm xúc và giao tiếp của bạn. Điều này phản ánh rằng việc sử dụng mạng xã hội của bạn không chỉ phục vụ cho các nhu cầu thường ngày mà còn đáp ứng một phần nhu cầu về mặt cảm xúc.  
`,

    relation:`Kết quả của bạn cho thấy mức độ cô đơn ở mức thấp nhưng xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức cao. Hai chỉ số này chưa phản ánh sự đồng nhất, cho thấy ở trường hợp của bạn, việc sử dụng mạng xã hội mang tính bù đắp không nhất thiết đi kèm với trải nghiệm cô đơn.
    <br>
    Điều này có thể phản ánh rằng hành vi sử dụng mạng xã hội của bạn chịu ảnh hưởng bởi những yếu tố khác ngoài cảm giác cô đơn, chẳng hạn như nhu cầu giao tiếp, chia sẻ cảm xúc, duy trì các mối quan hệ hoặc những thói quen sử dụng đã hình thành trong cuộc sống hằng ngày.
`,

    positive:`Qua kết quả đánh giá, có thể thấy mặc dù bạn ít trải nghiệm cảm giác cô đơn, mạng xã hội đang giữ vai trò khá lớn trong đời sống cảm xúc hoặc giao tiếp của bạn. Điều đáng ghi nhận là bạn vẫn đang duy trì được cảm giác kết nối với những người xung quanh.
    <br>
    Đây là một nền tảng thuận lợi để bạn từng bước cân bằng giữa các hoạt động trên môi trường trực tuyến và những trải nghiệm ngoài đời thực. Việc duy trì sự đa dạng trong các hình thức kết nối sẽ giúp bạn phát huy tốt hơn những lợi ích của mạng xã hội.
`,

    advice:`🤝 Kết nối với mọi người: 
    <br>
- Nếu có thể, hãy bắt đầu bằng một cuộc trò chuyện với người mà bạn cảm thấy tin tưởng, dù chỉ là chia sẻ một phần cảm xúc của mình.
    <br>
- Dành thêm thời gian cho những hoạt động gặp gỡ trực tiếp để tăng cảm giác kết nối với những người xung quanh.
    <br>
- Nếu bạn cảm thấy khó mở lời, hãy bắt đầu từ những cuộc trò chuyện ngắn hoặc tham gia một hoạt động nhóm mà mình yêu thích.
    <br>
📱 Sử dụng mạng xã hội: 
<br>
- Thử để ý xem mình thường sử dụng mạng xã hội vào những thời điểm nào và cảm thấy như thế nào sau khi sử dụng.
<br>
- Nếu nhận thấy mạng xã hội đang trở thành nơi duy nhất để tìm kiếm sự an ủi hoặc kết nối, hãy thử xen kẽ bằng những hoạt động ngoài đời thực mà bạn yêu thích.
<br>
- Không nhất thiết phải giảm thời gian sử dụng ngay lập tức; thay vào đó, hãy từng bước xây dựng những thói quen sử dụng mạng xã hội có chủ đích và phù hợp hơn.
<br>
🌿 Chăm sóc sức khỏe tinh thần:
<br>
- Hãy dành cho bản thân thời gian nghỉ ngơi, ăn uống đầy đủ và duy trì những hoạt động giúp cơ thể được thư giãn.
<br>
- Nếu những cảm xúc tiêu cực xuất hiện thường xuyên hoặc ảnh hưởng đến việc học tập, sinh hoạt hay các mối quan hệ, hãy cân nhắc tìm kiếm sự hỗ trợ từ người thân, giáo viên hoặc chuyên gia tâm lý.
<br>
- Hãy nhớ rằng việc quan tâm đến sức khỏe tinh thần không phải là dấu hiệu của sự yếu đuối, mà là một cách để chăm sóc bản thân và từng bước vượt qua những khó khăn.
`,

    message:`Nếu gần đây bạn cảm thấy cô đơn, mệt mỏi hoặc khó tìm được sự kết nối, hãy nhớ rằng bạn không phải là người duy nhất trải qua những cảm xúc đó. Bạn không cần phải thay đổi mọi thứ ngay lập tức. Chỉ cần từng bước quan tâm đến bản thân và sẵn sàng tìm kiếm sự đồng hành khi cần, đó đã là một khởi đầu đáng quý.`,
    },

    "low-medium":{
         meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức thấp và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức trung bình. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn ít có trải nghiệm cảm giác cô đơn. Tuy nhiên, trong một số tình huống nhất định, bạn có thể tìm đến mạng xã hội như một cách để giải tỏa cảm xúc hoặc tìm kiếm sự kết nối.
        <br>
         Nhìn chung, bạn vẫn cảm nhận được sự kết nối với những người xung quanh và không thường xuyên trải qua cảm giác cô đơn. Tuy nhiên, mạng xã hội đôi khi cũng trở thành một nơi giúp bạn thư giãn, chia sẻ cảm xúc hoặc duy trì sự kết nối khi cần thiết. Điều này phản ánh rằng mạng xã hội đang đóng vai trò hỗ trợ trong đời sống cảm xúc của bạn, nhưng chưa trở thành cách thức chủ yếu để đáp ứng nhu cầu kết nối.
`,

    relation:`Kết quả của bạn cho thấy mức độ cô đơn ở mức thấp, trong khi xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức trung bình. Điều này cho thấy hai chỉ số chưa hoàn toàn đồng nhất và mối liên hệ giữa chúng chưa được thể hiện rõ qua kết quả khảo sát.
    <br>
    Việc bạn đôi khi tìm đến mạng xã hội để giải tỏa cảm xúc hoặc duy trì sự kết nối có thể chịu ảnh hưởng từ nhiều yếu tố khác ngoài cảm giác cô đơn, chẳng hạn như thói quen sử dụng, nhu cầu giao tiếp, giải trí hoặc cập nhật thông tin.
`,

    positive:`Qua kết quả đánh giá, có thể thấy bạn vẫn đang duy trì được mức độ kết nối tương đối tốt với những người xung quanh. Đồng thời, mạng xã hội đang đóng vai trò hỗ trợ nhất định trong đời sống hằng ngày nhưng chưa trở thành phương thức chủ yếu để đáp ứng nhu cầu cảm xúc.
    <br>
    Đây là một nền tảng tích cực để bạn tiếp tục duy trì sự cân bằng giữa các mối quan hệ ngoài đời thực và hoạt động trên môi trường trực tuyến. Việc sử dụng mạng xã hội một cách có chủ đích sẽ giúp bạn phát huy tốt hơn những lợi ích mà nó mang lại.
`,

    advice:`🤝 Kết nối với mọi người:
    <br>
- Tiếp tục dành thời gian cho những người mang lại cho bạn cảm giác thoải mái và được lắng nghe, như gia đình, bạn bè hoặc thầy cô.
<br> 
- Chủ động duy trì những cuộc trò chuyện trực tiếp hoặc những hoạt động chung để nuôi dưỡng các mối quan hệ tích cực.
<br> 
- Đừng quên quan tâm và chia sẻ với những người xung quanh. Đôi khi, một lời hỏi thăm cũng giúp gắn kết các mối quan hệ bền vững hơn.
<br> 
📱 Sử dụng mạng xã hội:
<br> 
- Tiếp tục sử dụng mạng xã hội như một công cụ hỗ trợ cho học tập, giải trí hoặc duy trì liên lạc.
<br> 
- Thỉnh thoảng, hãy dành thời gian tạm rời màn hình để cân bằng giữa môi trường trực tuyến và cuộc sống thực.
<br> 
- Ưu tiên theo dõi những nội dung tích cực và những tương tác mang lại giá trị cho bản thân.
<br> 
🌿 Chăm sóc sức khỏe tinh thần: 
<br> 
- Duy trì những thói quen giúp bạn cảm thấy thoải mái như vận động, đọc sách hoặc theo đuổi sở thích cá nhân.
<br> 
- Dành thời gian nghỉ ngơi hợp lý và lắng nghe cảm xúc của bản thân, ngay cả khi mọi thứ đang diễn ra thuận lợi.
<br> 
- Khi gặp áp lực hoặc những thay đổi trong cuộc sống, đừng ngần ngại chia sẻ với người mà bạn tin tưởng.
`,

    message:`Mỗi người đều sẽ có những giai đoạn cảm xúc khác nhau trong cuộc sống. Việc bạn đang duy trì được sự cân bằng ở thời điểm hiện tại là một điều đáng trân trọng. Hy vọng bạn sẽ tiếp tục gìn giữ những mối quan hệ, thói quen và giá trị tích cực đang đồng hành cùng mình.`,
    },

    "low-low":{
     meaning:`Qua kết quả đánh giá, bạn đang có mức độ cô đơn ở mức thấp và xu hướng sử dụng mạng xã hội mang tính bù đắp ở mức thấp. Điều này cho thấy ở thời điểm thực hiện khảo sát, bạn ít có trải nghiệm cảm giác cô đơn và không có xu hướng sử dụng mạng xã hội như một cách chủ yếu để bù đắp cảm xúc hoặc tìm kiếm sự kết nối.
     <br>
     Nhìn chung, bạn vẫn có thể cảm nhận được sự kết nối với những người xung quanh. Việc sử dụng mạng xã hội của bạn chủ yếu phục vụ cho các nhu cầu thường ngày như học tập, giải trí, cập nhật thông tin hoặc duy trì liên lạc, thay vì đáp ứng những nhu cầu về mặt cảm xúc. Điều này phản ánh rằng bạn đang duy trì được sự cân bằng tương đối giữa các mối quan hệ ngoài đời thực và hoạt động trên môi trường trực tuyến.  
`,

    relation:`Kết quả của bạn cho thấy mức độ cô đơn và xu hướng sử dụng mạng xã hội mang tính bù đắp đều đang ở mức thấp. Hai chỉ số này phản ánh một trạng thái tương đối đồng nhất, trong đó cảm giác cô đơn không đi kèm với xu hướng tìm đến mạng xã hội để bù đắp cảm xúc hoặc tìm kiếm sự kết nối.
    <br>
    Điều này có thể phản ánh rằng nhu cầu kết nối xã hội của bạn hiện đang được đáp ứng tương đối tốt thông qua các mối quan hệ hoặc hoạt động trong cuộc sống hằng ngày. Ở thời điểm khảo sát, kết quả chưa cho thấy dấu hiệu về mối liên hệ nổi bật giữa trải nghiệm cô đơn và hành vi sử dụng mạng xã hội mang tính bù đắp.
`,

    positive:`Qua kết quả đánh giá, có thể thấy bạn đang duy trì được sự cân bằng tương đối giữa cảm xúc cá nhân và cách sử dụng mạng xã hội. Đây là một nền tảng tích cực giúp bạn duy trì các mối quan hệ và đáp ứng nhu cầu kết nối trong cuộc sống hằng ngày.
    <br>
    Bạn có thể tiếp tục duy trì những thói quen hiện tại, đồng thời dành thời gian cho các hoạt động ngoài môi trường trực tuyến và nuôi dưỡng những mối quan hệ tích cực. Việc giữ được sự cân bằng này sẽ góp phần hỗ trợ sức khỏe tinh thần trong lâu dài.
`,

    advice:`🤝 Kết nối với mọi người:
    <br>
- Tiếp tục dành thời gian cho những người mang lại cho bạn cảm giác thoải mái và được lắng nghe, như gia đình, bạn bè hoặc thầy cô.
<br> 
- Chủ động duy trì những cuộc trò chuyện trực tiếp hoặc những hoạt động chung để nuôi dưỡng các mối quan hệ tích cực.
<br> 
- Đừng quên quan tâm và chia sẻ với những người xung quanh. Đôi khi, một lời hỏi thăm cũng giúp gắn kết các mối quan hệ bền vững hơn.
<br> 
📱 Sử dụng mạng xã hội:
<br> 
- Tiếp tục sử dụng mạng xã hội như một công cụ hỗ trợ cho học tập, giải trí hoặc duy trì liên lạc.
<br> 
- Thỉnh thoảng, hãy dành thời gian tạm rời màn hình để cân bằng giữa môi trường trực tuyến và cuộc sống thực.
<br> 
- Ưu tiên theo dõi những nội dung tích cực và những tương tác mang lại giá trị cho bản thân.
<br> 
🌿 Chăm sóc sức khỏe tinh thần: 
<br> 
- Duy trì những thói quen giúp bạn cảm thấy thoải mái như vận động, đọc sách hoặc theo đuổi sở thích cá nhân.
<br> 
- Dành thời gian nghỉ ngơi hợp lý và lắng nghe cảm xúc của bản thân, ngay cả khi mọi thứ đang diễn ra thuận lợi.
<br> 
- Khi gặp áp lực hoặc những thay đổi trong cuộc sống, đừng ngần ngại chia sẻ với người mà bạn tin tưởng.
`,

    message:`Mỗi người đều sẽ có những giai đoạn cảm xúc khác nhau trong cuộc sống. Việc bạn đang duy trì được sự cân bằng ở thời điểm hiện tại là một điều đáng trân trọng. Hy vọng bạn sẽ tiếp tục gìn giữ những mối quan hệ, thói quen và giá trị tích cực đang đồng hành cùng mình.`,
    }

};

const report = reportData[resultType];

document.getElementById("meaningContent").innerHTML =
report.meaning;

document.getElementById("relationContent").innerHTML =
report.relation;

document.getElementById("positiveContent").innerHTML =
report.positive;

document.getElementById("adviceContent").innerHTML =
report.advice;

document.getElementById("messageContent").innerHTML =
report.message;

console.log(resultType);

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

// ================= SCROLL ANIMATION =================

const reportCards = document.querySelectorAll(".report-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

reportCards.forEach(card => observer.observe(card));