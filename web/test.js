//for IE
function settxt(num){
	var obj = document.getElementById("txtArea");
	if(num == 1){
		obj.value = "\nプロジェクトの概要と方針について";
	}else if(num == 2){
		obj.value = "\nメンバーと役割";
	}else if(num == 3){
		obj.value = "\nプロジェクトの進捗状況の履歴";
	}else if(num == 4){
		obj.value = "\nこのページに関して\n";
	}else if(num == 11){
		obj.value = "\n対話を行うプログラムの作成を行う。\n\n\n"
		+"対話の応答をより\"人間らしく\"行うためのアルゴリズムを考案する\n\n\n"
		+"それに伴った応答関数を実装し評価する";
	}else if(num == 12){
		obj.value = "\n使用言語はjava\n\n\n"
		+"構文解析部はOpenNLPを利用し実装する\n\n\n"
		+"また、応答関数のアルゴリズムの考案は全員で行う\n\n\n"
		+"応答生成のアルゴリズムを複数実装し、比較検証する";
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
		obj.value = "\n\n実装担当:\n\n 構文解析部";
	}else if(num == 24){
		obj.value = "\n\n実装担当:\n\n 構文解析部";
	}else if(num == 25){
		obj.value = "\n\n実装担当:\n\n 応答関数部";
	}else if(num == 26){
		obj.value = "\n\n実装担当:\n\n 応答関数部\n\n"
		+"  及び\n\n webページ";
	}else if(num == 27){
		obj.value = "\n\n実装担当:\n\n 入出力部";
	}else if(num == 31){
		obj.value = "\n2012-10-26\n\nwebページのプロトタイプをチーム内に公開\n\n"
		+"役割分担の決定";
	}else if(num == 32){
		obj.value = "\n2012-10-30\n\nwebページ公開"
	}else if(num == 33){
		obj.value = "\n2012-11-07\n\n第二回中間発表\n";
	}else if(num == 34){
		obj.value = "\n2012-11-14\n\n今後の方針の決定\n\n"
		+"現在考えているアルゴリズムの共有";
	}else if(num == 35){
		obj.value ="\n2012-11-16\n\n既存のアルゴリズムに関する情報収集";
	}else if(num == 36){
		obj.value ="\n2012-11-21\n\n考案しているアルゴリズムに関して細部をつめる\n\n"
		+"実装時使用するユーティティの作成";
	}else if(num == 37){
		obj.value ="\n2012-11-28\n\n実装の開始";
	}else if (num == 38){
		obj.value ="\n2012-12-05\n\n評価方法の考案及び実装";
	}else if (num == 39){
		obj.value ="\n2012-12-07\n\n評価方法の確定及び実装";
	}else if (num == 310){
		obj.value ="\n2012-12-12\n\n実装";
	}else if (num == 311){
		obj.value ="\n2012-12-14\n\n実行結果の評価";
	}else if (num == 312){
		obj.value ="\n2012-12-19\n\n最終発表";
	}else if (num == 313){
		obj.value ="\n最終更新日2012-12-20\n";
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
		toHidden(document.getElementById("contains35"));
		toHidden(document.getElementById("contains36"));
		toHidden(document.getElementById("contains37"));
		toHidden(document.getElementById("contains38"));
		toHidden(document.getElementById("contains39"));
		toHidden(document.getElementById("contains310"));
		toHidden(document.getElementById("contains311"));
		toHidden(document.getElementById("contains312"));
		toHidden(document.getElementById("contains313"));
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
		subVisi(document.getElementById("contains35"));
		subVisi(document.getElementById("contains36"));
		subVisi(document.getElementById("contains37"));
		subVisi(document.getElementById("contains38"));
		subVisi(document.getElementById("contains39"));
		subVisi(document.getElementById("contains310"));
		subVisi(document.getElementById("contains311"));
		subVisi(document.getElementById("contains312"));
		subVisi(document.getElementById("contains313"));
		//add here
		settxt(3);
	}else if(num == 4){
		subVisi(document.getElementById("contains41"));
		subVisi(document.getElementById("contains42"));
		settxt(4);
	}
}