
var items = document.getElementsByClassName('item');    //  圖片
var points = document.getElementsByClassName('point');  // 點
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var index = 0; //表示第幾張圖片在展示

var clearActive = function(){
     for(var i=0; i<items.length; i++){
        items[i].className ='item';
    }    
    for(var i=0; i<points.length; i++){
        points[i].className ='point';
    }            
}

var goIndex = function(){
    clearActive();
    points[index].className ='point active';
    items[index].className = 'item active';
}

var goNext = function(){
    if( index < 3 ){
        index++ ;               
    }else{
        index = 0;
    }
    goIndex();
}

goNextBtn.addEventListener('click',function(){
    goNext();
})

var goPre = function(){
    if(index == 0){
        index=3;
    }else{
        index--;
    }
    goIndex();
}

goPreBtn.addEventListener('click',function(){
    goPre();
})

for(var i=0;i<points.length;i++){
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index');
        // console.log(pointIndex);
        index = pointIndex;
        goIndex();
    })
}