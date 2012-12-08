var counter = 0;
var animeflag = true;

function animemanage(){
	setInterval("animation()",200);
}

function animation(){
	if(counter < 7){
		if(counter == 0){
			document.getElementById('opArea1').value = "auto login";
		}else if(counter == 1){
			document.getElementById('opArea1').value = "auto login .";
		}else if(counter == 2){
			document.getElementById('opArea1').value = "auto login . .";
		}else if(counter == 3){
			document.getElementById('opArea1').value = "auto login . . .";
		}else if(counter == 4){
			document.getElementById('opArea1').value = "auto login . . . OK";
		}else if(counter == 5){
			document.getElementById('opArea1').style.display = "none";
		}else if(counter == 6){
			slide();
		}
		counter+=1;
	}else{
		return;
	}
}

function slide(){
	if(animeflag){
		animeflag = false;
		$('#button1').animate({
			'top':'70px'
		},{
			'duration': 900,
			'easing': 'swing'
		});
		$('#button2').animate({
			'top':'220px'
		},{
			'duration': 900,
			'easing': 'swing'
		});
		$('#button3').animate({
			'top':'370px'
		},{
			'duration': 900,
			'easing': 'swing'
		});
		$('#button4').animate({
			'top':'520px'
		},{
			'duration': 900,
			'easing': 'swing'
		});
	}
	return;
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
		mainHide();
		toVisible(obj);
	}
}

function mainHide(){
	toHidden(document.getElementById("subbutton1"));
	toHidden(document.getElementById("subbutton2"));
	toHidden(document.getElementById("subbutton3"));
	toHidden(document.getElementById("subbutton4"));
}

function subVisi(obj){
	if(obj.style.visibility == "visible"){
		toHidden(obj);
	}else{
		toVisible(obj);
	}
}

function subHide(){
	toHidden(document.getElementById("contains11"));
	toHidden(document.getElementById("contains12"));
	toHidden(document.getElementById("contains13"));
	toHidden(document.getElementById("contains21"));
	toHidden(document.getElementById("contains22"));
	toHidden(document.getElementById("contains23"));
	toHidden(document.getElementById("contains24"));
	toHidden(document.getElementById("contains25"));
	toHidden(document.getElementById("contains26"));
	toHidden(document.getElementById("contains27"));
	toHidden(document.getElementById("contains41"));
	toHidden(document.getElementById("contains42"));
	toHidden(document.getElementById("contains31"));
	toHidden(document.getElementById("contains32"));
	toHidden(document.getElementById("contains33"));
	toHidden(document.getElementById("contains34"));
	toHidden(document.getElementById("contains35"));
	toHidden(document.getElementById("contains36"));
	toHidden(document.getElementById("contains37"));
	//add here
}

function disp(num){
	subHide();
	toHidden(document.getElementById("txtArea"));
	if(num == 1){
		mainVisi(document.getElementById("subbutton1"));
	}else if(num == 2){
		mainVisi(document.getElementById("subbutton2"));
	}else if(num == 3){
		mainVisi(document.getElementById("subbutton3"));
	}else if(num == 4){
		mainVisi(document.getElementById("subbutton4"));
	}
}

function subDisp(num){
	toVisible(document.getElementById("txtArea"));
	if(num == 1){
		subVisi(document.getElementById("contains11"));
		subVisi(document.getElementById("contains12"));
		subVisi(document.getElementById("contains13"));
		placechange(1);
		settxt(1);
	}else if(num == 2){
		subVisi(document.getElementById("contains21"));
		subVisi(document.getElementById("contains22"));
		subVisi(document.getElementById("contains23"));
		subVisi(document.getElementById("contains24"));
		subVisi(document.getElementById("contains25"));
		subVisi(document.getElementById("contains26"));
		subVisi(document.getElementById("contains27"));
		placechange(2);
		settxt(2);
	}else if(num == 3){
		subVisi(document.getElementById("contains31"));
		subVisi(document.getElementById("contains32"));
		subVisi(document.getElementById("contains33"));
		subVisi(document.getElementById("contains34"));
		subVisi(document.getElementById("contains35"));
		subVisi(document.getElementById("contains36"));
		subVisi(document.getElementById("contains37"));
		//add here
		placechange(3);
		settxt(3);
	}else if(num == 4){
		subVisi(document.getElementById("contains41"));
		subVisi(document.getElementById("contains42"));
		placechange(4);
		settxt(4);
	}
}

function placechange(num){
	var area = document.getElementById("txtArea");
	if(num == 1){
		area.style.top = '70px';
	}else if(num == 2){
		area.style.top = '220px';
	}else if(num == 3){
		area.style.top = '150px';
	}else if(num == 4){
		area.style.top = '300px';
	}
}

function settxt(num){
	var obj = document.getElementById("txtArea");
	if(num == 1){
		obj.value = "\nプロジェクトの概要と方針について";
	}else if(num == 2){
		obj.value = "\nメンバーと役割";
	}else if(num == 3){
		obj.value = "\nプロジェクトの進捗状況の履歴";
	}else if(num == 4){
		obj.value = "\nこのページに関して";
	}else if(num == 11){
		obj.value = "\n対話を行うプログラムの作成を行う。"
		+"\n\n\n対話の応答をより\"人間らしく\"行うためのアルゴリズムを考案する\n\n\n"
		+"それに伴った応答関数を実装し評価する";
	}else if(num == 12){
		obj.value = "\n使用言語はjava\n\n\n構文解析部はOpenNLPを利用し実装する"
		+"\n\n\nまた、応答関数のアルゴリズムの考案は全員で行う";
	}else if(num == 13){
		obj.value = "\n現在の対話応答はデータベース依存\n\n\n"
		+"データベースに依存せずに、どれだけ人間らしい応答が出来るかを検証する";
	}else if(num == 21){
		obj.value = "\nプロジェクトリーダー\n\n\n"
		+"実装担当：\n\n 応答関数部\n\n  及び\n\n 構文解析部ヘルプ\n\n\n\nほむほむ";
	}else if(num == 22){
		obj.value = "\n\n実装担当:\n\n 応答関数部";
	}else if(num == 23){
		obj.value = "\n\n実装担当:\n\n 構文解析部";
	}else if(num == 24){
		obj.value = "\n\n実装担当:\n\n 構文解析部";
	}else if(num == 25){
		obj.value = "\n\n実装担当:\n\n 応答関数部";
	}else if(num == 26){
		obj.value = "\n\n実装担当:\n\n 応答関数部\n\n  "
		+"及び\n\n webページ";
	}else if(num == 27){
		obj.value = "\n\n実装担当:\n\n 入出力部";
	}else if(num == 31){
		obj.value = "\n2012-10-26\n\nwebページのプロトタイプをチーム内に公開\n\n役割分担の決定";
	}else if(num == 32){
		obj.value = "\n2012-10-30\n\nwebページ公開"
	}else if(num == 33){
		obj.value = "\n2012-11-07\n\n第二回中間発表\n"
		+"今後の課題:情報科学的に意味のあること\n\n\n追記\nwebページのアップグレード\nIEに対応しました";
	}else if(num == 34){
		obj.value ="\n2012-11-14\n\n今後の方針の決定\n\n"
		+"現在考えているアルゴリズムの共有";
	}else if(num == 35){
		obj.value ="\n2012-11-16\n\n既存のアルゴリズムに関する情報収集";
	}else if(num == 36){
		obj.value ="\n2012-11-21\n\n考案しているアルゴリズムに関して細部をつめる\n\n"
		+"実装時使用するユーティティの作成";
	}else if(num == 37){
		obj.value ="\n2012-11-28\n\n実装の開始";
	}
	
	/* template
	else if(num == 3n){
		obj.value = "\n";
	}
	*/
	else if(num == 41){
		obj.value ="\nログアウト出来ないのはこのページの\n\n    \"本来の仕様\"\n\nである";
	}else if(num == 42){
		obj.value ="";
	}	
}
