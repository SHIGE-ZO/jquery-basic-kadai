
// ボタンを押すと色が変わる
$(function(){
    $('#change-color').on('click' , function(){
        $('#target').css('color' , '#ff0000');
    });
});
// ボタンを押すとtext変更
$(function(){
    $('#change-text').on('click' , function(){
        $('#target').text('Hello!');
    });
});
// ボタンを押すとフェード員
$(function(){
    $('#fade-out').on('click' , function(){
        $('#target').fadeOut(3000 , function(){
            alert('fadeOut');
        });
    });
});
// ボタンを押すとフェードイン
$(function(){
    $('#fade-in').on('click' , function(){
        $('#target').fadeIn(3000 , function(){
            alert('fadein');
        });
    });
});