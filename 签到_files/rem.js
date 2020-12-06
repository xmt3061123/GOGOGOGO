// 移动端自适应布局函数
var adaption = {
	fontsize: function(designWidth) {
		function fontsizeRel() {
			var fontSize = 100;
			var relWidth = document.documentElement.clientWidth;
			if(relWidth>750){
        relWidth=750
      }
			var relFontSize = fontSize * relWidth / designWidth;
			document.getElementsByTagName("html")[0].style.fontSize = relFontSize + "px";
		}
		fontsizeRel();
		window.onresize = fontsizeRel;
	}
};
adaption.fontsize(750);