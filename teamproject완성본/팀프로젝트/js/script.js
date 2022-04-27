let c=0; // 이미지위치
let slide = document.querySelector('#sl'); //화면부분
let imgs = document.querySelectorAll('.sli'); //이미지 싹선택
let ic = imgs.length; //이미지갯수
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');


function mov(a){
  slide.style.left = -a*1500+'px';
  c=a;
}

prev.addEventListener('click',function(){
  if(c !==0) mov(c-1);
});

next.addEventListener('click',function(){
  if(c !==ic-1) mov(c+1);
});


// 장바구니
var f1 = new item("그     린    티",3800,1); 
var f2 = new item("사랑에빠진 딸기",3800,1); 
var f3 = new item("아 몬 드  봉 봉",3800,1); 
var f4 = new item("엄 마 는 외 계 인",3800,1); 
var f5 = new item("초 코  나 무   숲",3800,1); 
var f6 = new item("뉴 욕 치 즈 케이크",3800,1); 
var g1 = new item("듀얼와츄원  케이크",25000,1); 
var g2 = new item("해피버스데이케이크",25000,1); 
var g3 = new item("어 피 치 케 이 크",25000,1);
var g4 = new item("마 카 롱 케 이 크",25000,1);
var g5 = new item("라 이 언 케 이 크",25000,1);
var g6 = new item("뚱 랑 이 케 이 크",25000,1);
var h1 = new item("딸 기 연 유 라 떼",3500,1);
var h2 = new item("아   이   스   티",3500,1);
var h3 = new item("엄마는외계인블라스트",3500,1);
var h4 = new item("와 츄 원 쉐 이 크",3500,1);
var h5 = new item("카푸치노 블라스트",3500,1);
var h6 = new item("핫  초  코",3500,1);
var a11=0;a66=0;a22=0;a33=0;a44=0;a55=0;
var b11=0;b22=0;b33=0;b44=0;b55=0;b66=0;
var c11=0;c22=0;c33=0;c44=0;c55=0;c66=0;

var p = document.querySelectorAll('#cartTEXT > p');
var t = document.querySelector('#to'); 
var total=0;

function item(a,b,c){
  this.name = a;
  this.val = b;
  this.qua = c;    
}
var n1 = [a11,a22,a33,a44,a55,a66,b11,b22,b33,b44,b55,b66,c11,c22,c33,c44,c55,c66];    
var s1 = [f1,f2,f3,f4,f5,f6,g1,g2,g3,g4,g5,g6,h1,h2,h3,h4,h5,h6];
document.querySelector('#reset').addEventListener('click',function(){
  for(let i=0;i<p.length;i++){
    p[i].innerHTML="";
  }
  for(let j=0;j<18;j++){
    s1[j].qua=1;   
  }
  a66=0;a22=0;a33=0;a44=0;a55=0;
  b11=0;b22=0;b33=0;b44=0;b55=0;b66=0;
  c11=0;c22=0;c33=0;c44=0;c55=0;c66=0;  
  total=0;
  t.value=null;
  console.log(a11);
});

///////////////////////////////////노가다시작//////////////////////////////////////////
document.querySelector('#a1').addEventListener('click',function(){
  var i = document.querySelector('#aa1');
  if(i.innerHTML==""){  
  i.innerHTML=f1.name+"&nbsp;&nbsp;&nbsp;"+f1.val+"&nbsp;"+f1.qua+"&emsp;"+"<button id='a1p' onclick='a1p()'>+</button>"+"<button id='a1m' onclick='a1m()'>-</button>";
  total+=f1.val;
  t.value=total;  
  }else{
    a1p();
  }
});

function a1p(){
  f1.qua++;
  var i = document.querySelector('#aa1');
  i.innerHTML=f1.name+"&nbsp;&nbsp;&nbsp;"+f1.val+"&nbsp;"+f1.qua+"&emsp;"+"<button id='a1p' onclick='a1p()'>+</button>"+"<button id='a1m' onclick='a1m()'>-</button>";
  total+=f1.val;
  t.value=total;
}
function a1m(){
  f1.qua--;  
  var i = document.querySelector('#aa1');
  i.innerHTML=f1.name+"&nbsp;&nbsp;&nbsp;"+f1.val+"&nbsp;"+f1.qua+"&emsp;"+"<button id='a1p' onclick='a1p()'>+</button>"+"<button id='a1m' onclick='a1m()'>-</button>";
  total-=f1.val;
  t.value=total;
  if(f1.qua==0){
   i.innerHTML="";
   a11=0; 
   f1.qua=1;
  }   
}
/////////////////////////////////////////a1///////////////////////////////////////////

document.querySelector('#a2').addEventListener('click',function(){
  if(a22==0){
  var i = document.querySelector('#aa2');
  i.innerHTML=f2.name+"&nbsp;&nbsp;&nbsp;"+f2.val+"&nbsp;"+f2.qua+"&emsp;"+"<button id='a2p' onclick='a2p()'>+</button>"+"<button id='a2m' onclick='a2m()'>-</button>";
  total+=f2.val;
  t.value=total;
  a22++;
  }else{
    a2p();
  }
});

function a2p(){
  f2.qua++;
  var i = document.querySelector('#aa2');
  i.innerHTML=f2.name+"&nbsp;&nbsp;&nbsp;"+f2.val+"&nbsp;"+f2.qua+"&emsp;"+"<button id='a2p' onclick='a2p()'>+</button>"+"<button id='a2m' onclick='a2m()'>-</button>";
  total+=f2.val;
  t.value=total;
}
function a2m(){
  f2.qua--;  
  var i = document.querySelector('#aa2');
  i.innerHTML=f2.name+"&nbsp;&nbsp;&nbsp;"+f2.val+"&nbsp;"+f2.qua+"&emsp;"+"<button id='a2p' onclick='a2p()'>+</button>"+"<button id='a2m' onclick='a2m()'>-</button>";
  total-=f2.val;
  t.value=total;
  if(f2.qua==0){
   i.innerHTML="";
   a22=0;
   f2.qua=1; 
  }   
}
////////////////////////////////////////////a2/////////////////////////////////////////


document.querySelector('#a3').addEventListener('click',function(){
  if(a33==0){
  var i = document.querySelector('#aa3');
  i.innerHTML=f3.name+"&nbsp;&nbsp;&nbsp;"+f3.val+"&nbsp;"+f3.qua+"&emsp;"+"<button id='a3p' onclick='a3p()'>+</button>"+"<button id='a3m' onclick='a3m()'>-</button>";
  total+=f3.val;
  t.value=total;
  a33++;
  }else{
    a3p();
  }
});

function a3p(){
  f3.qua++;
  var i = document.querySelector('#aa3');
  i.innerHTML=f3.name+"&nbsp;&nbsp;&nbsp;"+f3.val+"&nbsp;"+f3.qua+"&emsp;"+"<button id='a3p' onclick='a3p()'>+</button>"+"<button id='a3m' onclick='a3m()'>-</button>";
  total+=f3.val;
  t.value=total;
}
function a3m(){
  f3.qua--;  
  var i = document.querySelector('#aa3');
  i.innerHTML=f3.name+"&nbsp;&nbsp;&nbsp;"+f3.val+"&nbsp;"+f3.qua+"&emsp;"+"<button id='a3p' onclick='a3p()'>+</button>"+"<button id='a3m' onclick='a3m()'>-</button>";
  total-=f3.val;
  t.value=total;
  if(f3.qua==0){
   i.innerHTML=""; 
   a33=0;
   f3.qua=1;
  }   
}
////////////////////////////////////////////a3/////////////////////////////////////////
document.querySelector('#a4').addEventListener('click',function(){
  if(a44==0){
  var i = document.querySelector('#aa4');
  i.innerHTML=f4.name+"&nbsp;&nbsp;&nbsp;"+f4.val+"&nbsp;"+f4.qua+"&emsp;"+"<button id='a4p' onclick='a4p()'>+</button>"+"<button id='a4m' onclick='a4m()'>-</button>";
  total+=f4.val;
  t.value=total;
  a44++;
  }else{
    a4p();
  }
});

function a4p(){
  f4.qua++;
  var i = document.querySelector('#aa4');
  i.innerHTML=f4.name+"&nbsp;&nbsp;&nbsp;"+f4.val+"&nbsp;"+f4.qua+"&emsp;"+"<button id='a4p' onclick='a4p()'>+</button>"+"<button id='a4m' onclick='a4m()'>-</button>";
  total+=f4.val;
  t.value=total;
}
function a4m(){
  f4.qua--;  
  var i = document.querySelector('#aa4');
  i.innerHTML=f4.name+"&nbsp;&nbsp;&nbsp;"+f4.val+"&nbsp;"+f4.qua+"&emsp;"+"<button id='a4p' onclick='a4p()'>+</button>"+"<button id='a4m' onclick='a4m()'>-</button>";
  total-=f4.val;
  t.value=total;
  if(f4.qua==0){
   i.innerHTML=""; 
   a44=0;
   f4.qua=1;
  }   
}
////////////////////////////////////////////a4/////////////////////////////////////////
document.querySelector('#a5').addEventListener('click',function(){
  if(a55==0){
  var i = document.querySelector('#aa5');
  i.innerHTML=f5.name+"&nbsp;&nbsp;&nbsp;"+f5.val+"&nbsp;"+f5.qua+"&emsp;"+"<button id='a5p' onclick='a5p()'>+</button>"+"<button id='a5m' onclick='a5m()'>-</button>";
  total+=f5.val;
  t.value=total;
  a55++;
  }else{
    a5p();
  }
});

function a5p(){
  f5.qua++;
  var i = document.querySelector('#aa5');
  i.innerHTML=f5.name+"&nbsp;&nbsp;&nbsp;"+f5.val+"&nbsp;"+f5.qua+"&emsp;"+"<button id='a5p' onclick='a5p()'>+</button>"+"<button id='a5m' onclick='a5m()'>-</button>";
  total+=f5.val;
  t.value=total;
}
function a5m(){
  f5.qua--;  
  var i = document.querySelector('#aa5');
  i.innerHTML=f5.name+"&nbsp;&nbsp;&nbsp;"+f5.val+"&nbsp;"+f5.qua+"&emsp;"+"<button id='a5p' onclick='a5p()'>+</button>"+"<button id='a5m' onclick='a5m()'>-</button>";
  total-=f5.val;
  t.value=total;
  if(f5.qua==0){
   i.innerHTML=""; 
   a55=0;
   f5.qua=1;
  }   
}
////////////////////////////////////////////a5/////////////////////////////////////////
document.querySelector('#a6').addEventListener('click',function(){
  if(a66==0){
  var i = document.querySelector('#aa6');
  i.innerHTML=f6.name+"&nbsp;&nbsp;&nbsp;"+f6.val+"&nbsp;"+f6.qua+"&emsp;"+"<button id='a6p' onclick='a6p()'>+</button>"+"<button id='a6m' onclick='a6m()'>-</button>";
  total+=f6.val;
  t.value=total;
  a66++;
  }else{
    a6p();
  }
});

function a6p(){
  f6.qua++;
  var i = document.querySelector('#aa6');
  i.innerHTML=f6.name+"&nbsp;&nbsp;&nbsp;"+f6.val+"&nbsp;"+f6.qua+"&emsp;"+"<button id='a6p' onclick='a6p()'>+</button>"+"<button id='a6m' onclick='a6m()'>-</button>";
  total+=f6.val;
  t.value=total;
}
function a6m(){
  f6.qua--;  
  var i = document.querySelector('#aa6');
  i.innerHTML=f6.name+"&nbsp;&nbsp;&nbsp;"+f6.val+"&nbsp;"+f6.qua+"&emsp;"+"<button id='a6p' onclick='a6p()'>+</button>"+"<button id='a6m' onclick='a6m()'>-</button>";
  total-=f6.val;
  t.value=total;
  if(f6.qua==0){
   i.innerHTML=""; 
   a66=0;
   f6.qua=1;
  }   
}
////////////////////////////////////////////a6/////////////////////////////////////////
document.querySelector('#b1').addEventListener('click',function(){
  if(b11==0){
  var i = document.querySelector('#bb1');
  i.innerHTML=g1.name+"&nbsp;"+g1.val+"&nbsp;"+g1.qua+"&emsp;"+"<button id='b1p' onclick='b1p()'>+</button>"+"<button id='b1m' onclick='b1m()'>-</button>";
  total+=g1.val;
  t.value=total;
  b11++;
  }else{
    b1p();
  }
});

function b1p(){
  g1.qua++;
  var i = document.querySelector('#bb1');
  i.innerHTML=g1.name+"&nbsp;"+g1.val+"&nbsp;"+g1.qua+"&emsp;"+"<button id='b1p' onclick='b1p()'>+</button>"+"<button id='b1m' onclick='b1m()'>-</button>";
  total+=g1.val;
  t.value=total;
}
function b1m(){
  g1.qua--;  
  var i = document.querySelector('#bb1');
  i.innerHTML=g1.name+"&nbsp;"+g1.val+"&nbsp;"+g1.qua+"&emsp;"+"<button id='b1p' onclick='b1p()'>+</button>"+"<button id='b1m' onclick='b1m()'>-</button>";
  total-=g1.val;
  t.value=total;
  if(g1.qua==0){
   i.innerHTML=""; 
   b11=0;
   g1.qua=1;
  }   
}
////////////////////////////////////////////b1/////////////////////////////////////////
document.querySelector('#b2').addEventListener('click',function(){
  if(b22==0){
  var i = document.querySelector('#bb2');
  i.innerHTML=g2.name+"&nbsp;"+g2.val+"&nbsp;"+g2.qua+"&emsp;"+"<button id='b2p' onclick='b2p()'>+</button>"+"<button id='b2m' onclick='b2m()'>-</button>";
  total+=g2.val;
  t.value=total;
  b22++;
  }else{
    b2p();
  }
});

function b2p(){
  g2.qua++;
  var i = document.querySelector('#bb2');
  i.innerHTML=g2.name+"&nbsp;"+g2.val+"&nbsp;"+g2.qua+"&emsp;"+"<button id='b2p' onclick='b2p()'>+</button>"+"<button id='b2m' onclick='b2m()'>-</button>";
  total+=g2.val;
  t.value=total;
}
function b2m(){
  g2.qua--;  
  var i = document.querySelector('#bb2');
  i.innerHTML=g2.name+"&nbsp;"+g2.val+"&nbsp;"+g2.qua+"&emsp;"+"<button id='b2p' onclick='b2p()'>+</button>"+"<button id='b2m' onclick='b2m()'>-</button>";
  total-=g2.val;
  t.value=total;
  if(g2.qua==0){
   i.innerHTML=""; 
   b22=0;
   g2.qua=1;
  }   
}
////////////////////////////////////////////b2/////////////////////////////////////////
document.querySelector('#b3').addEventListener('click',function(){
  if(b33==0){
  var i = document.querySelector('#bb3');
  i.innerHTML=g3.name+"&nbsp;"+g3.val+"&nbsp;"+g3.qua+"&emsp;"+"<button id='b3p' onclick='b3p()'>+</button>"+"<button id='b3m' onclick='b3m()'>-</button>";
  total+=g3.val;
  t.value=total;
  b33++;
  }else{
    b3p();
  }
});

function b3p(){
  g3.qua++;
  var i = document.querySelector('#bb3');
  i.innerHTML=g3.name+"&nbsp;"+g3.val+"&nbsp;"+g3.qua+"&emsp;"+"<button id='b3p' onclick='b3p()'>+</button>"+"<button id='b3m' onclick='b3m()'>-</button>";
  total+=g3.val;
  t.value=total;
}
function b3m(){
  g3.qua--;  
  var i = document.querySelector('#bb3');
  i.innerHTML=g3.name+"&nbsp;"+g3.val+"&nbsp;"+g3.qua+"&emsp;"+"<button id='b3p' onclick='b3p()'>+</button>"+"<button id='b3m' onclick='b3m()'>-</button>";
  total-=g3.val;
  t.value=total;
  if(g3.qua==0){
   i.innerHTML=""; 
   b33=0;
   g3.qua=1;
  }   
}
////////////////////////////////////////////b3/////////////////////////////////////////
document.querySelector('#b4').addEventListener('click',function(){
  if(b44==0){
  var i = document.querySelector('#bb4');
  i.innerHTML=g4.name+"&nbsp;"+g4.val+"&nbsp;"+g4.qua+"&emsp;"+"<button id='b4p' onclick='b4p()'>+</button>"+"<button id='b4m' onclick='b4m()'>-</button>";
  total+=g4.val;
  t.value=total;
  b44++;
  }else{
    b4p();
  }
});

function b4p(){
  g4.qua++;
  var i = document.querySelector('#bb4');
  i.innerHTML=g4.name+"&nbsp;"+g4.val+"&nbsp;"+g4.qua+"&emsp;"+"<button id='b4p' onclick='b4p()'>+</button>"+"<button id='b4m' onclick='b4m()'>-</button>";
  total+=g4.val;
  t.value=total;
}
function b4m(){
  g4.qua--;  
  var i = document.querySelector('#bb4');
  i.innerHTML=g4.name+"&nbsp;"+g4.val+"&nbsp;"+g4.qua+"&emsp;"+"<button id='b4p' onclick='b4p()'>+</button>"+"<button id='b4m' onclick='b4m()'>-</button>";
  total-=g4.val;
  t.value=total;
  if(g4.qua==0){
   i.innerHTML=""; 
   b44=0;
   g4.qua=1;
  }   
}
////////////////////////////////////////////b4/////////////////////////////////////////
document.querySelector('#b5').addEventListener('click',function(){
  if(b55==0){
  var i = document.querySelector('#bb5');
  i.innerHTML=g5.name+"&nbsp;"+g5.val+"&nbsp;"+g5.qua+"&emsp;"+"<button id='b5p' onclick='b5p()'>+</button>"+"<button id='b5m' onclick='b5m()'>-</button>";
  total+=g5.val;
  t.value=total;
  b55++;
  }else{
    b5p();
  }
});

function b5p(){
  g5.qua++;
  var i = document.querySelector('#bb5');
  i.innerHTML=g5.name+"&nbsp;"+g5.val+"&nbsp;"+g5.qua+"&emsp;"+"<button id='b5p' onclick='b5p()'>+</button>"+"<button id='b5m' onclick='b5m()'>-</button>";
  total+=g5.val;
  t.value=total;
}
function b5m(){
  g5.qua--;  
  var i = document.querySelector('#bb5');
  i.innerHTML=g5.name+"&nbsp;"+g5.val+"&nbsp;"+g5.qua+"&emsp;"+"<button id='b5p' onclick='b5p()'>+</button>"+"<button id='b5m' onclick='b5m()'>-</button>";
  total-=g5.val;
  t.value=total;
  if(g5.qua==0){
   i.innerHTML=""; 
   b55=0;
   g5.qua=1;
  }   
}
////////////////////////////////////////////b5/////////////////////////////////////////
document.querySelector('#b6').addEventListener('click',function(){
  if(b66==0){
  var i = document.querySelector('#bb6');
  i.innerHTML=g6.name+"&nbsp;"+g6.val+"&nbsp;"+g6.qua+"&emsp;"+"<button id='b6p' onclick='b6p()'>+</button>"+"<button id='b6m' onclick='b6m()'>-</button>";
  total+=g6.val;
  t.value=total;
  b66++;
  }else{
    b6p();
  }
});

function b6p(){
  g6.qua++;
  var i = document.querySelector('#bb6');
  i.innerHTML=g6.name+"&nbsp;"+g6.val+"&nbsp;"+g6.qua+"&emsp;"+"<button id='b6p' onclick='b6p()'>+</button>"+"<button id='b6m' onclick='b6m()'>-</button>";
  total+=g6.val;
  t.value=total;
}
function b6m(){
  g6.qua--;  
  var i = document.querySelector('#bb6');
  i.innerHTML=g6.name+"&nbsp;"+g6.val+"&nbsp;"+g6.qua+"&emsp;"+"<button id='b6p' onclick='b6p()'>+</button>"+"<button id='b6m' onclick='b6m()'>-</button>";
  total-=g6.val;
  t.value=total;
  if(g6.qua==0){
   i.innerHTML=""; 
   b66=0;
   g6.qua=1;
  }   
}
////////////////////////////////////////////b6/////////////////////////////////////////
document.querySelector('#c1').addEventListener('click',function(){
  if(c11==0){
  var i = document.querySelector('#cc1');
  i.innerHTML=h1.name+"&nbsp;&nbsp;&nbsp;"+h1.val+"&nbsp;"+h1.qua+"&emsp;"+"<button id='c1p' onclick='c1p()'>+</button>"+"<button id='c1m' onclick='c1m()'>-</button>";
  total+=h1.val;
  t.value=total;
  c11++;
  }else{
    c1p();
  }
});

function c1p(){
  h1.qua++;
  var i = document.querySelector('#cc1');
  i.innerHTML=h1.name+"&nbsp;&nbsp;&nbsp;"+h1.val+"&nbsp;"+h1.qua+"&emsp;"+"<button id='c1p' onclick='c1p()'>+</button>"+"<button id='c1m' onclick='c1m()'>-</button>";
  total+=h1.val;
  t.value=total;
}
function c1m(){
  h1.qua--;  
  var i = document.querySelector('#cc1');
  i.innerHTML=h1.name+"&nbsp;&nbsp;&nbsp;"+h1.val+"&nbsp;"+h1.qua+"&emsp;"+"<button id='c1p' onclick='c1p()'>+</button>"+"<button id='c1m' onclick='c1m()'>-</button>";
  total-=h1.val;
  t.value=total;
  if(h1.qua==0){
   i.innerHTML=""; 
   c11=0;
   h1.qua=1;
  }   
}
////////////////////////////////////////////c1/////////////////////////////////////////
document.querySelector('#c2').addEventListener('click',function(){
  if(c22==0){
  var i = document.querySelector('#cc2');
  i.innerHTML=h2.name+"&nbsp;&nbsp;&nbsp;"+h2.val+"&nbsp;"+h2.qua+"&emsp;"+"<button id='c2p' onclick='c2p()'>+</button>"+"<button id='c2m' onclick='c2m()'>-</button>";
  total+=h2.val;
  t.value=total;
  c22++;
  }else{
    c2p();
  }
});

function c2p(){
  h2.qua++;
  var i = document.querySelector('#cc2');
  i.innerHTML=h2.name+"&nbsp;&nbsp;&nbsp;"+h2.val+"&nbsp;"+h2.qua+"&emsp;"+"<button id='c2p' onclick='c2p()'>+</button>"+"<button id='c2m' onclick='c2m()'>-</button>";
  total+=h2.val;
  t.value=total;
}
function c2m(){
  h2.qua--;  
  var i = document.querySelector('#cc2');
  i.innerHTML=h2.name+"&nbsp;&nbsp;&nbsp;"+h2.val+"&nbsp;"+h2.qua+"&emsp;"+"<button id='c2p' onclick='c2p()'>+</button>"+"<button id='c2m' onclick='c2m()'>-</button>";
  total-=h2.val;
  t.value=total;
  if(h2.qua==0){
   i.innerHTML=""; 
   c22=0;
   h2.qua=1;
  }   
}
////////////////////////////////////////////c2/////////////////////////////////////////
document.querySelector('#c3').addEventListener('click',function(){
  if(c33==0){
  var i = document.querySelector('#cc3');
  i.innerHTML=h3.name+"&nbsp;&nbsp;&nbsp;"+h3.val+"&nbsp;"+h3.qua+"&emsp;"+"<button id='c3p' onclick='c3p()'>+</button>"+"<button id='c3m' onclick='c3m()'>-</button>";
  total+=h3.val;
  t.value=total;
  c33++;
  }else{
    c3p();
  }
});

function c3p(){
  h3.qua++;
  var i = document.querySelector('#cc3');
  i.innerHTML=h3.name+"&nbsp;&nbsp;&nbsp;"+h3.val+"&nbsp;"+h3.qua+"&emsp;"+"<button id='c3p' onclick='c3p()'>+</button>"+"<button id='c3m' onclick='c3m()'>-</button>";
  total+=h3.val;
  t.value=total;
}
function c3m(){
  h3.qua--;  
  var i = document.querySelector('#cc3');
  i.innerHTML=h3.name+"&nbsp;&nbsp;&nbsp;"+h3.val+"&nbsp;"+h3.qua+"&emsp;"+"<button id='c3p' onclick='c3p()'>+</button>"+"<button id='c3m' onclick='c3m()'>-</button>";
  total-=h3.val;
  t.value=total;
  if(h3.qua==0){
   i.innerHTML=""; 
   c33=0;
   h3.qua=1;
  }   
}
////////////////////////////////////////////c3/////////////////////////////////////////
document.querySelector('#c4').addEventListener('click',function(){
  if(c44==0){
  var i = document.querySelector('#cc4');
  i.innerHTML=h4.name+"&nbsp;&nbsp;&nbsp;"+h4.val+"&nbsp;"+h4.qua+"&emsp;"+"<button id='c4p' onclick='c4p()'>+</button>"+"<button id='c4m' onclick='c4m()'>-</button>";
  total+=h4.val;
  t.value=total;
  c44++;
  }else{
    c4p();
  }
});

function c4p(){
  h4.qua++;
  var i = document.querySelector('#cc4');
  i.innerHTML=h4.name+"&nbsp;&nbsp;&nbsp;"+h4.val+"&nbsp;"+h4.qua+"&emsp;"+"<button id='c4p' onclick='c4p()'>+</button>"+"<button id='c4m' onclick='c4m()'>-</button>";
  total+=h4.val;
  t.value=total;
}
function c4m(){
  h4.qua--;  
  var i = document.querySelector('#cc4');
  i.innerHTML=h4.name+"&nbsp;&nbsp;&nbsp;"+h4.val+"&nbsp;"+h4.qua+"&emsp;"+"<button id='c4p' onclick='c4p()'>+</button>"+"<button id='c4m' onclick='c4m()'>-</button>";
  total-=h4.val;
  t.value=total;
  if(h4.qua==0){
   i.innerHTML=""; 
   c44=0;
   h4.qua=1;
  }   
}
////////////////////////////////////////////c4/////////////////////////////////////////
document.querySelector('#c5').addEventListener('click',function(){
  if(c55==0){
  var i = document.querySelector('#cc5');
  i.innerHTML=h5.name+"&nbsp;&nbsp;&nbsp;"+h5.val+"&nbsp;"+h5.qua+"&emsp;"+"<button id='c5p' onclick='c5p()'>+</button>"+"<button id='c5m' onclick='c5m()'>-</button>";
  total+=h5.val;
  t.value=total;
  c55++;
  }else{
    c5p();
  }
});

function c5p(){
  h5.qua++;
  var i = document.querySelector('#cc5');
  i.innerHTML=h5.name+"&nbsp;&nbsp;&nbsp;"+h5.val+"&nbsp;"+h5.qua+"&emsp;"+"<button id='c5p' onclick='c5p()'>+</button>"+"<button id='c5m' onclick='c5m()'>-</button>";
  total+=h5.val;
  t.value=total;
}
function c5m(){
  h5.qua--;  
  var i = document.querySelector('#cc5');
  i.innerHTML=h5.name+"&nbsp;&nbsp;&nbsp;"+h5.val+"&nbsp;"+h5.qua+"&emsp;"+"<button id='c5p' onclick='c5p()'>+</button>"+"<button id='c5m' onclick='c5m()'>-</button>";
  total-=h5.val;
  t.value=total;
  if(h5.qua==0){
   i.innerHTML=""; 
   c55=0;
   h5.qua=1;
  }   
}
////////////////////////////////////////////c5/////////////////////////////////////////
document.querySelector('#c6').addEventListener('click',function(){
  if(c66==0){
  var i = document.querySelector('#cc6');
  i.innerHTML=h6.name+"&nbsp;&nbsp;&nbsp;"+h6.val+"&nbsp;"+h6.qua+"&emsp;"+"<button id='c6p' onclick='c6p()'>+</button>"+"<button id='c6m' onclick='c6m()'>-</button>";
  total+=h6.val;
  t.value=total;
  c66++;
  }else{
    c6p();
  }
});

function c6p(){
  h6.qua++;
  var i = document.querySelector('#cc6');
  i.innerHTML=h6.name+"&nbsp;&nbsp;&nbsp;"+h6.val+"&nbsp;"+h6.qua+"&emsp;"+"<button id='c6p' onclick='c6p()'>+</button>"+"<button id='c6m' onclick='c6m()'>-</button>";
  total+=h6.val;
  t.value=total;
}
function c6m(){
  h6.qua--;  
  var i = document.querySelector('#cc6');
  i.innerHTML=h6.name+"&nbsp;&nbsp;&nbsp;"+h6.val+"&nbsp;"+h6.qua+"&emsp;"+"<button id='c6p' onclick='c6p()'>+</button>"+"<button id='c6m' onclick='c6m()'>-</button>";
  total-=h6.val;
  t.value=total;
  if(h6.qua==0){
   i.innerHTML=""; 
   c66=0;
   h6.qua=1;
  }   
}
////////////////////////////////////////////c6/////////////////////////////////////////












