// $(".a").mouseover(function(){
// 	$(".down").slideDown();
// });
// $(".a").mouseleave(function(){
// 	$(".down").slideUp()
// });
$.ajax({
	type : "get",
	url : "http://www.ikindness.cn/api/test/getFund",
	success : function(data){
		console.log(data);
		$(".ww").append(template("tmpl",data));
	}
})