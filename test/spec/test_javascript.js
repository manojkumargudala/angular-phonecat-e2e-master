document.querySelector('input#identifierId').dispatchEvent(new Event('focus'), {
    bubbles: true
});
document.querySelector('input#identifierId').dispatchEvent(new Event('keydown'), {
    bubbles: true
});
document.querySelector('input#identifierId').dispatchEvent(new Event('keypress'), {
    bubbles: true
});
document.querySelector('input#identifierId').value = '';
document.querySelector('input#identifierId').value = 'seleniumauto0@gmail.com';
document.querySelector('input#identifierId').dispatchEvent(new Event('input'), {
    bubbles: true
});
document.querySelector('input#identifierId').dispatchEvent(new Event('keyup'), {
    bubbles: true
});
document.querySelector('input#identifierId').dispatchEvent(new Event('change'), {
    bubbles: true
});
document.querySelector('input#identifierId').dispatchEvent(new Event('blur'), {
    bubbles: true
});
document.querySelector('div#identifierNext').click();
window.setTimeout( function(){
if (window.location.href.match('/pwd')) {
    console.log("page loaded now it is continuing")
}
document.querySelector('input[name="password"]').dispatchEvent(new Event('focus'), {
    bubbles: true
});
document.querySelector('input[name="password"]').dispatchEvent(new Event('keydown'), {
    bubbles: true
});
document.querySelector('input[name="password"]').dispatchEvent(new Event('keypress'), {
    bubbles: true
});
document.querySelector('input[name="password"]').value = '';
document.querySelector('input[name="password"]').value = 'manoj1234';
document.querySelector('input[name="password"]').dispatchEvent(new Event('input'), {
    bubbles: true
});
document.querySelector('input[name="password"]').dispatchEvent(new Event('keyup'), {
    bubbles: true
});
document.querySelector('input[name="password"]').dispatchEvent(new Event('change'), {
    bubbles: true
});
document.querySelector('input[name="password"]').dispatchEvent(new Event('blur'), {
    bubbles: true
});
document.querySelector('div#passwordNext').click();}, 5000)