let btnSrch = document.querySelector('.selector-find');
let btnNext = document.querySelector('.selector-next');
let btnPrev = document.querySelector('.selector-prev');
let btnParent = document.querySelector('.nav-top');
let btnChild = document.querySelector('.nav-bottom'); 
let btnNextParent = document.querySelector('.nav-right');
let btnPrevParent = document.querySelector('.nav-left');
let input = document.querySelector('.selector');

let SELECTOR_NOW = {};
function elementStyle(elem) {
    elem.style.outline = 'solid red 5px';
    elem.style.backgroundColor = 'lightblue';
}
function elementUnstyle(el) {
    el.style.outline = 'none';
    el.style.backgroundColor = '';
}
function enableNextPrevBtns(el) {
    if(SELECTOR_NOW.now[SELECTOR_NOW.id + 1] != undefined) {
        btnNext.disabled = false;
    } else {
        btnNext.disabled = true;
    } 
    if (SELECTOR_NOW.now[SELECTOR_NOW.id - 1] != undefined) {
        btnPrev.disabled = false;
    } else {
        btnPrev.disabled = true;
    }
}
function enabletBottomBtns(elem) {
    if(SELECTOR_NOW.now.length == undefined) {
        btnNext.disabled = true;
        btnPrev.disabled = true;
    }
    if(elem.parentElement != undefined) {
        btnParent.disabled = false;
    } else {
        btnParent.disabled = true;
    }
    if(elem.children[0] != undefined) {
        btnChild.disabled = false;
    } else {
        btnChild.disabled = true;
    }
    if(elem.nextElementSibling != undefined) {
        btnNextParent.disabled = false;
    } else {
        btnNextParent.disabled = true;
    }
    if(elem.previousElementSibling != undefined) {
        btnPrevParent.disabled = false;
    } else {
        btnPrevParent.disabled = true;
    }
    if (elem == document.querySelector('body')) {
        btnParent.disabled = true;
        btnNextParent.disabled = true;
        btnPrevParent.disabled = true;
    }
}
btnSrch.addEventListener("click", function(e) {
    if(document.querySelector(input.value)) {
        if(SELECTOR_NOW.now != undefined) {
            elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
        };
        let elem = document.querySelectorAll(input.value);
        elementStyle(elem[0]);
        SELECTOR_NOW.now = elem;
        SELECTOR_NOW.id = 0;
        if(elem[1] != undefined) {
            btnNext.disabled = false;
            btnPrev.disabled = true;
        }
        enableNextPrevBtns();
        enabletBottomBtns(elem[0]);
    }
});
btnNext.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now[SELECTOR_NOW.id + 1] != undefined) {
        let nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id + 1];
        elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
        SELECTOR_NOW.id = SELECTOR_NOW.id + 1;
        elementStyle(nextElem);
        enableNextPrevBtns();
        enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    }
});
btnPrev.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now[SELECTOR_NOW.id - 1] != undefined) {
        let nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id - 1];
        elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
        SELECTOR_NOW.id = SELECTOR_NOW.id - 1;
        elementStyle(nextElem);
        enableNextPrevBtns();
        enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    }
});

btnParent.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length != undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    elementUnstyle(SELECTOR_NOW.now);
    let parentElem = SELECTOR_NOW.now.parentElement;
    elementStyle(parentElem);   
    SELECTOR_NOW.now = parentElem;
    enabletBottomBtns(SELECTOR_NOW.now);

});
btnChild.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length != undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    if(SELECTOR_NOW.now.children[0] != undefined) {
        elementUnstyle(SELECTOR_NOW.now);
        let childElem = SELECTOR_NOW.now.children[0];
        SELECTOR_NOW.now = childElem;
        elementStyle(childElem);
    }
    enabletBottomBtns(SELECTOR_NOW.now);
});
btnNextParent.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length != undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    if(SELECTOR_NOW.now.nextElementSibling != undefined) {
        elementUnstyle(SELECTOR_NOW.now);
        let nextElem = SELECTOR_NOW.now.nextElementSibling;
        SELECTOR_NOW.now = nextElem;
        elementStyle(nextElem);
    }
    enabletBottomBtns(SELECTOR_NOW.now);
})
btnPrevParent.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length != undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    if(SELECTOR_NOW.now.previousElementSibling != undefined) {
        elementUnstyle(SELECTOR_NOW.now);
        let prevElem = SELECTOR_NOW.now.previousElementSibling;
        SELECTOR_NOW.now = prevElem;
        elementStyle(prevElem);
    }
    enabletBottomBtns(SELECTOR_NOW.now);
});