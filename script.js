var NEG_POS = '-50%';
var POS_POS = '150%';

function getRandInt(low, high) {
    return Math.floor((Math.random() * high) + low);
}

function getRandMidVal() {
    return getRandInt(0, 100) + '%';
}

function getRandTimeVal() {
    return getRandInt(3000, 8000);
}

function getRandColorVal() {
    var r = getRandInt(0, 255);
    var g = getRandInt(0, 255);
    var b = getRandInt(0, 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function getRandFontSizeVal() {
    return getRandInt(10, 26) + 'px';
}

function createLink(type) {
    var link = $('<a href="who.html">Wh0 am i??"</a>');
    link.css({
        color: getRandColorVal(),
        'font-size': getRandFontSizeVal()
    });
    // link to appear above screen going down
    if (type == 0) {
        link.css({
            top:  NEG_POS,
            left: getRandMidVal()
        }).animate({
            top:  POS_POS,
            left: getRandMidVal()
        }, getRandTimeVal(), function() {
            $(this).remove();
        });
    // link to appear right of screen going left
    } else if (type == 1) {
        link.css({
            top:  getRandMidVal(),
            left: POS_POS
        }).animate({
            top:  getRandMidVal(),
            left: NEG_POS
        }, getRandTimeVal(), function() {
            $(this).remove();
        });
    // link to appear below screen going up
    } else if (type == 2) {
        link.css({
            top:  POS_POS,
            left: getRandMidVal()
        }).animate({
            top:  NEG_POS,
            left: getRandMidVal()
        }, getRandTimeVal(), function() {
            $(this).remove();
        });
    // link to appear left of screen going right
    } else {
        link.css({
            top:  getRandMidVal(),
            left: NEG_POS
        }).animate({
            top:  getRandMidVal(),
            left: POS_POS
        }, getRandTimeVal(), function() {
            $(this).remove();
        });
    }
    $('body').append(link);
}

setInterval(function() {
    createLink(getRandInt(0, 4));
}, 500);
