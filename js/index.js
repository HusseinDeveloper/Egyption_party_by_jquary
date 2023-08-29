

 $("a").click(function (e) { 
    let info = e.target.getAttribute('href')
    let sectionOffset = $(info).offset().top
  $("html,body").animate({scrollTop:sectionOffset},3000)
 });



// 
$('#btnBotton').click(function () { 
      $('#btnBotton').animate({marginLeft:'250px'},1000)
      $('#left-nav').animate({width:'250px'},1000)

});
$('#closeBtn i').click(function () { 
      $('#btnBotton').animate({marginLeft:'0px'},1000)
      $('#left-nav').animate({width:'0px'},1000)

});


$('#slide .toggle').click(function(){
      $('.textHide').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500);
  });
  


// 
let countDwon= new Date("Dec 31, 2023 23:59:59").getTime()

let counter= setInterval(()=>{
  let dateNow=new Date().getTime()
  let dateDiff= countDwon- dateNow
  let days= Math.floor(dateDiff / (1000 * 60 * 60 * 24))
  let hours=Math.floor((dateDiff % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
  let minuts=Math.floor((dateDiff % (1000 * 60 * 60 ))/(1000 * 60) )
  let secondes=Math.floor((dateDiff % (1000 * 60))/(1000) )

  document.querySelector(".days").innerHTML=days
  document.querySelector(".hours").innerHTML=hours
  document.querySelector(".minuts").innerHTML=minuts
  document.querySelector(".secondes").innerHTML=secondes
},1000)



// 
var myText=document.getElementById("myText")
var chars=document.getElementById("chars")
myText.onkeyup=function(){
      chars.textContent=100 -this.value.length

      if(chars.textContent < 0){
            $("#contact .form .spanText").css('display','block')
            $("#contact .form #chars").css('display','none')
      }else{
            $("#contact .form .spanText").css('display','none')
            $("#contact .form #chars").css('display','block')
      }
}