// JavaScript Document 

$(function() {
    var gg=0;
	var xx=0;
	var tat;
	$("#myicon li").eq(0).addClass("ww")
	//addClass("kk")指定kk做為文字ICON滑鼠滑過顏色能變色,做出反應回饋

<!----按鈕控制圖片能滑動展示	--->
	$("#myicon li").click(function() {
        gg=$(this).index();
		xx=gg*1200*-1;
		$("#photo ul").animate({left:xx},2000,"easeOutElastic");
		$(this).addClass("ww").siblings().removeClass();
    });

<!----能自動定時輪播之語法---->
     function GoTime2(){
		 $("#photo ul").animate({left:xx},2000,"easeOutElastic");
		 $("#myicon li").removeClass().eq(gg).addClass("ww");//此段謌法順序不能亂掉哦,要先removeClass()清除前面按鈕記憶,再eq(mm)是得知現在按鈕輪到那個順序,最後再addClass("kk")讓該按鈕顏色能變更正確
		 if(gg<7){
			 gg+=1;
			 xx=gg*1200*-1;
			 }else{
			  gg=0;
			  xx=0;	 
			 }
		   tat=setTimeout(GoTime2,8000);//9000為亳秒,等於9秒	 
		 }
       GoTime2();//此GoTime();語法是用來呼叫上方所設定之function GoTime(){...}函數參數的
<!----若按了按鈕後先清除自動定時輪播之後再恢復之語法---->
        $("#photo,#myicon").hover(function(){
			clearTimeout(tat);//這語法是只要游標停在按鈕上時,則清除計時,圖片則不會輪播會一直停止,方便網友看仔細圖片
			},function(){
			tat=setTimeout(GoTime2,4000);
			});      

});




