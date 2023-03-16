setInterval(function () {
    var x = document.querySelector(".pointAndClickSpan")
	var y = document.querySelector(".nextButton")
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