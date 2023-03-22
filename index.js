setInterval(function () {
    var v = document.querySelector('.nextButton')
    var w = document.querySelector(".pointAndClickSpan")
    var x = document.getElementById('btn_validate_answer')
    var y = document.getElementById('btn_question_suivante')
    var z = document.querySelector(".understoodButton")
    setTimeout(() => {
        if (x != null)
            try {
                x.click();
            } catch {
                console.log('error')
            }
        else {}
        if (w != null)
            try {
                w.click();
            } catch {
                console.log('error')
            }
        else {}
        if (x != null)
            try {
                x.click();
            } catch {
                console.log('error')
            }
        else {}
        if (y != null)
            try {
                y.click();
            } catch {
                console.log('error')
            }
        else {}
        if (z != null)
            try {
                z.click();
            } catch {
                console.log('error')
            }
        else {}
        v.click();
    }, 3000);
}, 7000);