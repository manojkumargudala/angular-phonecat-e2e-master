var testSitekey = '6LeLzA4UAAAAANNRnB8kePzikGgmZ53aWQiruo7O';
var testSitekeyV3 = '6Lc4eMQUAAAAAKiHA9VYxsC3cXZYWg5pBqqkCEE3';
var triggerOnceforOnce = !1;

$('#CrV2').click(function () {
    $('body').append($('<div id="captcha_container" class="google-cpatcha"></div>'));
    setTimeout(function () {
        grecaptcha.render('captcha_container', {
            'sitekey': testSitekey
        });
    }, 1000);
});

$('#RunV2').click(function () {
    setTimeout(function () {
        document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
    }, 400);
});

$('#RestV2').click(function () {
    setTimeout(function () {
        grecaptcha.reset();
    }, 400);
});

$('#RunV3').click(function () {
    setTimeout(function () {
        if (!triggerOnceforOnce) {
            triggerOnceforOnce = true;
            var Ut = ('https://www.google.com/recaptcha/api.js?render=');
            var Utr = Ut.concat(testSitekeyV3);
            loadJS(Utr, function () {}, document.body);
        }
        setTimeout(() => {
            grecaptcha.ready(function () {
                grecaptcha.execute(testSitekeyV3, {
                    action: 'avlfare'
                }).then(function (token) {
                    captchaStr = token;
                    const a = document.createElement('a');
                    const now = new Date();
                    now.setTime(now.valueOf() - now.getTimezoneOffset() * 60 * 1000);
                    var Tnow = now.toISOString().slice(0, -5).replace('T', ' ').replace(/:/g, '-');
                    a.download = captchaV3Response.$(Tnow).txt;
                    a.href = URL.createObjectURL(new Blob([captchaStr]));
                    a.click();
                    URL.revokeObjectURL(a.href);
                })
            });
        }, 1000);
    }, 400);
});
var loadJS = function (url, implementationCode, location) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
    location.appendChild(scriptTag);
};