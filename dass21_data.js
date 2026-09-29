const dassQuestions = [
  { text: "1. Tôi thấy khó mà làm mình dịu đi được", type: "S" },
  { text: "2. Tôi bị khô miệng", type: "A" },
  { text: "3. Tôi không thấy có chút cảm xúc tích cực nào", type: "D" },
  { text: "4. Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù không làm sức)", type: "A" },
  { text: "5. Tôi thấy khó bắt tay vào làm việc", type: "D" },
  { text: "6. Tôi có xu hướng phản ứng thái quá với các tình huống", type: "S" },
  { text: "7. Tôi bị rung tay chân", type: "A" },
  { text: "8. Tôi thấy mình tiêu tốn nhiều năng lượng lo âu", type: "S" },
  { text: "9. Tôi lo lắng về những tình huống có thể làm tôi hoảng sợ hoặc làm trò cười", type: "A" },
  { text: "10. Tôi thấy mình chẳng có gì để mong đợi cả", type: "D" },
  { text: "11. Tôi thấy bản thân dễ bị kích động", type: "S" },
  { text: "12. Tôi thấy khó thư giãn được", type: "S" },
  { text: "13. Tôi cảm thấy thất vọng và chán nản", type: "D" },
  { text: "14. Tôi không chấp nhận được việc có gì đó xen vào làm gián đoạn việc tôi đang làm", type: "S" },
  { text: "15. Tôi cảm thấy mình sắp hoảng sợ", type: "A" },
  { text: "16. Tôi không thấy hứng thú với bất cứ việc gì nữa", type: "D" },
  { text: "17. Tôi cảm thấy mình không đáng làm người", type: "D" },
  { text: "18. Tôi thấy mình khá dễ phật ý/đụng chạm", type: "S" },
  { text: "19. Tôi nghe thấy tiếng tim đập dù không vận động (mạch nhanh/bỏ nhịp)", type: "A" },
  { text: "20. Tôi vô cớ cảm thấy sợ hãi", type: "A" },
  { text: "21. Tôi thấy cuộc sống vô nghĩa", type: "D" }
];


const dass42Questions = [
  { text: "1. Tôi thấy mình bực bội vì những chuyện khá nhỏ nhặt", type: "S" },
  { text: "2. Tôi bị khô miệng", type: "A" },
  { text: "3. Tôi không thấy có chút cảm xúc tích cực nào", type: "D" },
  { text: "4. Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù không làm sức)", type: "A" },
  { text: "5. Tôi thấy mình không thể nào bắt đầu làm gì được", type: "D" },
  { text: "6. Tôi có xu hướng phản ứng thái quá với các tình huống", type: "S" },
  { text: "7. Tôi cảm thấy run rẩy (như thể chân sắp khuỵu xuống)", type: "A" },
  { text: "8. Tôi thấy khó thư giãn được", type: "S" },
  { text: "9. Tôi rơi vào những tình huống khiến tôi lo lắng đến mức chỉ thấy nhẹ nhõm khi nó kết thúc", type: "A" },
  { text: "10. Tôi thấy mình chẳng có gì để mong đợi cả", type: "D" },
  { text: "11. Tôi thấy mình dễ bực bội hơn bình thường", type: "S" },
  { text: "12. Tôi thấy mình tiêu tốn nhiều năng lượng lo âu", type: "S" },
  { text: "13. Tôi cảm thấy buồn bã và chán nản", type: "D" },
  { text: "14. Tôi thấy mình mất kiên nhẫn khi phải chờ đợi (như kẹt thang máy, đèn đỏ, xếp hàng)", type: "S" },
  { text: "15. Tôi có cảm giác choáng váng như sắp ngất", type: "A" },
  { text: "16. Tôi cảm thấy mất hứng thú với hầu như mọi thứ", type: "D" },
  { text: "17. Tôi cảm thấy mình không đáng làm người", type: "D" },
  { text: "18. Tôi thấy mình khá dễ phật ý/đụng chạm", type: "S" },
  { text: "19. Tôi đổ mồ hôi rõ rệt (như tay ướt đẫm) dù trời không nóng hay không vận động", type: "A" },
  { text: "20. Tôi vô cớ cảm thấy sợ hãi", type: "A" },
  { text: "21. Tôi cảm thấy cuộc sống không đáng sống", type: "D" },
  { text: "22. Tôi thấy khó mà làm mình dịu đi được", type: "S" },
  { text: "23. Tôi thấy khó nuốt", type: "A" },
  { text: "24. Tôi không còn thấy vui với những việc mình làm", type: "D" },
  { text: "25. Tôi nghe thấy tiếng tim đập dù không vận động (mạch nhanh/bỏ nhịp)", type: "A" },
  { text: "26. Tôi cảm thấy thất vọng và chán nản", type: "D" },
  { text: "27. Tôi thấy mình rất dễ cáu gắt", type: "S" },
  { text: "28. Tôi cảm thấy mình sắp hoảng sợ", type: "A" },
  { text: "29. Tôi khó bình tĩnh lại sau khi có chuyện làm mình khó chịu", type: "S" },
  { text: "30. Tôi sợ rằng mình sẽ luống cuống trước một việc nhỏ nhặt nhưng không quen thuộc", type: "A" },
  { text: "31. Tôi không thấy hứng thú với bất cứ việc gì nữa", type: "D" },
  { text: "32. Tôi khó chấp nhận bị làm gián đoạn khi đang làm việc", type: "S" },
  { text: "33. Tôi luôn ở trong trạng thái căng thẳng thần kinh", type: "S" },
  { text: "34. Tôi cảm thấy mình khá vô giá trị", type: "D" },
  { text: "35. Tôi không chấp nhận được việc có gì đó xen vào làm gián đoạn việc tôi đang làm", type: "S" },
  { text: "36. Tôi cảm thấy kinh hãi", type: "A" },
  { text: "37. Tôi không thấy gì trong tương lai để hy vọng", type: "D" },
  { text: "38. Tôi thấy cuộc sống vô nghĩa", type: "D" },
  { text: "39. Tôi thấy bản thân dễ bị kích động", type: "S" },
  { text: "40. Tôi lo lắng về những tình huống có thể làm tôi hoảng sợ hoặc làm trò cười", type: "A" },
  { text: "41. Tôi bị rung tay chân", type: "A" },
  { text: "42. Tôi thấy khó bắt tay vào làm việc", type: "D" }
];

function getSeverity(score, type) {
  if (type === 'D') {
    if (score <= 9) return { text: "Bình thường", cls: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300" };
    if (score <= 13) return { text: "Nhẹ", cls: "bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-300" };
    if (score <= 20) return { text: "Vừa", cls: "bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300" };
    return { text: "Nặng", cls: "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300" };
  }
  if (type === 'A') {
    if (score <= 7) return { text: "Bình thường", cls: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300" };
    if (score <= 9) return { text: "Nhẹ", cls: "bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-300" };
    if (score <= 14) return { text: "Vừa", cls: "bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300" };
    return { text: "Nặng", cls: "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300" };
  }
  if (type === 'S') {
    if (score <= 14) return { text: "Bình thường", cls: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300" };
    if (score <= 18) return { text: "Nhẹ", cls: "bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-300" };
    if (score <= 25) return { text: "Vừa", cls: "bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300" };
    return { text: "Nặng", cls: "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300" };
  }
}