setInterval(function () {
    var x = document.getElementById('btn_validate_answer')
    var y = document.getElementById('btn_question_suivante')
    x.click();
    y.click();
    setTimeout(() => {
        try {
            var z = document.querySelector(".understoodButton")
            z.click();
        } catch {
            console.log('error')
        }
    }, 3000);
}, 7000);