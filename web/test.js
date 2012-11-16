//for IE
/*
function zoomup(num){
	var obj = document.getElementsByClassName("mainbutton");
	if(num == 1){
		obj[0].style.webkitTransform = "scale(1.2)";
	}
	if(num == 2){
		obj[1].style.webkitTransform = "scale(1.2)";
	}
	if(num == 3){
		obj[2].style.webkitTransform = "scale(1.2)";
	}
	if(num == 4){
		obj[3].style.webkitTransform = "scale(1.2)";
	}
	
}
/*
function zoomdown(){
	var obj = document.getElementsByClassName("button");
	for(i=0;i<4;i++){
		obj[i].style.webkitTransform = "none"
	}
}
*/

function settxt(num){
	var obj = document.getElementById("txtArea");
	if(num == 1){
		obj.value = "\nプロジェクトの概要と方針について";
	}else if(num == 2){
		obj.value = "\nメンバーと役割";
	}else if(num == 3){
		obj.value = "\nプロジェクトの進捗状況の履歴";
	}else if(num == 4){
		obj.value = "\nこのページに関して\n\n\n\nHints: Chromeで見ると･･･";
	}else if(num == 11){
		obj.value = "\n対話を行うプログラムの作成を行う。\n\n\n"
		+"対話の応答をより\"人間らしく\"行うためのアルゴリズムを考案する\n\n\n"
		+"それに伴った応答関数を実装し評価する";
	}else if(num == 12){
		obj.value = "\n使用言語はjava\n\n\n"
		+"構文解析部はOpenNLPを利用し実装する\n\n\n"
		+"また、応答関数のアルゴリズムの考案は全員で行う";
	}else if(num == 13){
		obj.value = "\n現在の対話応答はデータベース依存"
		+"\n\n\nデータベースに依存せずに、どれだけ人間らしい応答が出来るかを検証する";
	}else if(num == 21){
		obj.value = "\nプロジェクトリーダー\n\n\n"
		+"実装担当：\n\n 応答関数部\n\n  及び\n\n 構文解析部ヘルプ\n\n\n\n"
		+"ほむほむ";
	}else if(num == 22){
		obj.value = "\n\n実装担当:\n\n 応答関数部";
	}else if(num == 23){
		obj.value = "\n\n実装担当:\n\n 構文解析部\n\n\n\nemt!emt!";
	}else if(num == 24){
		obj.value = "\n\n実装担当:\n\n 構文解析部\n\n\n";
	}else if(num == 25){
		obj.value = "\n\n実装担当:\n\n 応答関数部";
	}else if(num == 26){
		obj.value = "\n\n実装担当:\n\n 応答関数部\n\n"
		+"  及び\n\n webページ\n\n\n\nauto loginは演出です";
	}else if(num == 27){
		obj.value = "\n\n実装担当:\n\n 入出力部\n\n\n\n（・ワ・）＜です？";
	}else if(num == 31){
		obj.value = "\n2012-10-26\n\nwebページのプロトタイプをチーム内に公開\n\n"
		+"役割分担の決定";
	}else if(num == 32){
		obj.value = "\n2012-10-30\n\nwebページ公開"
	}else if(num == 33){
		obj.value = "\n2012-11-07\n\n第二回中間発表\n"
		+"今後の課題:情報科学的に意味のあること\n\n\n"
		+"追記\nwebページのアップグレード\nIEに対応しました";
	}else if(num == 34){
		obj.value = "\n2012-11-14\n\n今後の方針の決定\n\n"
		+"現在考えているアルゴリズムの共有";
	}
	
	/* template
	else if(num == 3n){
		obj.value = "\n";
	}
	*/
	else if(num == 41){
		obj.value ="\nログアウト出来ないのはこのページの\n\n"
		+"    \"本来の仕様\"\n\nである";
	}else if(num == 42){
		obj.value ="";
	}	
}

function toVisible(obj){
	obj.style.visibility = "visible"
}

function toHidden(obj){
	obj.style.visibility = "hidden"
}

function mainVisi(obj){
	if(obj.style.visibility == "visible"){
		toHidden(obj);
	}else{
		toVisible(obj);
	}
}

function subVisi(obj){
	if(obj.style.visibility == "visible"){
		toHidden(obj);
	}else{
		toVisible(obj);
	}
}

function subHide(num){
	if(num == 1){
		toHidden(document.getElementById("contains11"));
		toHidden(document.getElementById("contains12"));
		toHidden(document.getElementById("contains13"));
	}else if(num == 2){
		toHidden(document.getElementById("contains21"));
		toHidden(document.getElementById("contains22"));
		toHidden(document.getElementById("contains23"));
		toHidden(document.getElementById("contains24"));
		toHidden(document.getElementById("contains25"));
		toHidden(document.getElementById("contains26"));
		toHidden(document.getElementById("contains27"));
	}else if(num == 4){
		toHidden(document.getElementById("contains41"));
		toHidden(document.getElementById("contains42"));
	}else if(num ==3){
		toHidden(document.getElementById("contains31"));
		toHidden(document.getElementById("contains32"));
		toHidden(document.getElementById("contains33"));
		toHidden(document.getElementById("contains34"));
	//add here
	}
}

function disp(num){
	if(num == 1){
		subHide(1);
		mainVisi(document.getElementById("subbutton1"));
	}else if(num == 2){
		subHide(2);
		mainVisi(document.getElementById("subbutton2"));
	}else if(num == 3){
		subHide(3);
		mainVisi(document.getElementById("subbutton3"));
	}else if(num == 4){
		subHide(4);
		mainVisi(document.getElementById("subbutton4"));
	}
}

function subDisp(num){
	if(num == 1){
		subVisi(document.getElementById("contains11"));
		subVisi(document.getElementById("contains12"));
		subVisi(document.getElementById("contains13"));
		settxt(1);
	}else if(num == 2){
		subVisi(document.getElementById("contains21"));
		subVisi(document.getElementById("contains22"));
		subVisi(document.getElementById("contains23"));
		subVisi(document.getElementById("contains24"));
		subVisi(document.getElementById("contains25"));
		subVisi(document.getElementById("contains26"));
		subVisi(document.getElementById("contains27"));
		settxt(2);
	}else if(num == 3){
		subVisi(document.getElementById("contains31"));
		subVisi(document.getElementById("contains32"));
		subVisi(document.getElementById("contains33"));
		subVisi(document.getElementById("contains34"));
		//add here
		settxt(3);
	}else if(num == 4){
		subVisi(document.getElementById("contains41"));
		subVisi(document.getElementById("contains42"));
		settxt(4);
	}
}