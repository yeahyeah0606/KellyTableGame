		//添加購物車方法  參數btn為點擊的按鈕對象
		function addCar(btn) {
			var tr = btn.parentNode.parentNode
			var tds = tr.getElementsByTagName("td");
			var productName = tds[0].innerText;
			var price = tds[1].innerText;
			
			 
			//判斷庫存是否充足
			var stock = tds[3].innerText;
			
			if(stock == 0) {
				return;
			} else {
				tds[3].innerText = parseInt(stock)-1;
			}
			
			
			
			//判斷商品是否已添加
			var tbody = document.getElementById("goods");
			var trs = tbody.getElementsByTagName("tr");
			
			for(var i=0; i<trs.length; i++) {
				var tr = trs[i];
				var tds = tr.getElementsByTagName("td");
				var name = tds[0].innerText;  //商品名
				
				if(name == productName) {
					changeNum(1, tds[2].getElementsByTagName("input")[2], "fromCarBtn");  //調用修改個數方法
					return;
				}else{
					
				}
			}
			
			//組成一條資料
			var html = 
						  '<td>'+productName+'</td>'+
						  '<td>'+price+'</td>'+
						  '<td align="center">'+
							'<input type="button" value="-" onclick="changeNum(-1, this)"/>'+
							'<input type="text" size="3" readonly value="1"/>'+
							'<input type="button" value="+" onclick="changeNum(1, this)"/>'+
						  '</td>'+
						  '<td class="moneyTd">'+price+'</td>'+
						  '<td align="center"><input type="button" value="x" onclick="del(this)"/></td>';
			
			var table = document.getElementById("goods");
			
			var newTr = table.insertRow();
			
			newTr.innerHTML = html;
			
			//計算總金額
			totalMoney();			
		}
	
		//計算總金額
		function  totalMoney() {
			var tds = document.getElementsByClassName("moneyTd");
			
			var money = 0;
			for(var i=0; i<tds.length; i++) {
				money += parseFloat(tds[i].innerText);
			}
			
			document.getElementById("total").innerText = money;
		}
		
		//修改商品資料及金額
		function changeNum(num, btn, flag) {
			var productName = btn.parentNode.parentNode.getElementsByTagName("td")[0].innerHTML;
			var table = document.getElementsByTagName("table")[0];
			var trs = table.getElementsByTagName("tr");
			
			var input = btn.parentNode.getElementsByTagName("input")[1];
			
			var oldNum = parseInt(input.value) ;
			//判斷是否從添加購物車方法調用此方法
			if (flag != "fromCarBtn") {
				//判斷庫存
				
				for(var i=1; i<trs.length; i++) {
					var tds = trs[i].getElementsByTagName("td");
					var pn = tds[0].innerText;
					
					if(productName == pn) {
						var stock = tds[3].innerText;
						if (stock == 0 && num == 1 ) {
							return;
						} else if(oldNum ==1 && num==-1){
							return;
						}else{
							tds[3].innerText = parseInt(stock) - num;
						}
						
						break;
					}
					
				}
				
			}
			
			
			if(oldNum == 1 && num == -1) {
				return ;
			}
			
			
			var newNum = parseInt(oldNum)+num;
			//修改數量
			input.value = newNum;
			//修改金額
			var tds = btn.parentNode.parentNode.getElementsByTagName("td");
			var price = tds[1].innerText;
			
			tds[3].innerText = parseFloat(price) * newNum;
			
			//計算總金額
			totalMoney();
		}

		//删除商品
		function del(btn) {
				if (confirm("是否確認刪除")) {
				var tr = btn.parentNode.parentNode;
						
				var name = tr.getElementsByTagName('td')[0].innerText
				var count = parseInt(tr.getElementsByTagName('td')[2].getElementsByTagName('input')[1].value)
				//console.log(count)
				var trs = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
				for(var i=1;i<trs.length;i++){
				if(trs[i].getElementsByTagName('td')[0].innerText == name){
				//console.log(parseInt(trs[i].getElementsByTagName('td')[3].innerText))
				trs[i].getElementsByTagName('td')[3].innerText = parseInt(trs[i].getElementsByTagName('td')[3].innerText)+count
						//break
					}
				}
						
				var table= tr.parentNode;
				table.removeChild(tr);
		
				}
		
			totalMoney();
	}
		