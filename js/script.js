console.log('hello')
//1. body要素を取得する
//2.ハンバーガーボタンの要素を取得する
//3.ハンバンガーボタンにクリックのイベントリスナーを追加する
//4.ハンバンガーボタンがクリックされたら、body要素にopenというクラスをつけたり外したりする。

//1.
let bodyElement = document.querySelector('body');
//2.
//document.getElementById('取得したい要素のid属性の値')
let hamBtn = document.getElementById('hamBtn')
//console.log(bodyElement,hamBtn);
//3.
hamBtn.addEventListener('click',function(){
    //4.
    bodyElement.classList.toggle('open');
    
});