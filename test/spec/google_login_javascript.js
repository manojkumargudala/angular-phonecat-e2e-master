if (window.location.href.match('/identifier')) {
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
    setTimeout(() => {
        console.log("World!");
    }, 50000);
}
if (window.location.href.match('/pwd')) {
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
    document.querySelector('div#passwordNext').click();
}






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
var hrefvalue = true
while (!hrefvalue) {
    hrefvalue = window.location.href.match('/pwd') && (document.readyState === 'ready' || document.readyState === 'complete')
    var start = new Date().getTime();
    var end = start;
    while(end < start + 5000) {
      end = new Date().getTime();
   }
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
document.querySelector('div#passwordNext').click();