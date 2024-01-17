/* 開放倒計時 */
'use-strict'; 
const n = document.querySelector('#time2');

// a timer function
let r = setInterval(timers, 1000);
function timers() {
	const dat = new Date;
	var y=(1635508730000-formate(dat.getTime() + (dat.getTimezoneOffset()*60*1000)+(8*60*60*1000)))/(60*1000);
	var tempt=y%1;
	if ( tempt != 0)
		{ y= (y-tempt)+1;}
	/*if ( y < 0)
		{ y=0;}*/
	if (y<0)
	{
		let messages = "<br>"+"<span style='background-color:#8080806b;color:red;'>"+'網站即將開啟，請稍後！'+"<br>"+"<small style='color:white;'>"+'（網站會自動回復，無需重複重整頁面！）'+"<small>"+"</span>" ;
		n.innerHTML = messages;
		setTimeout(function(){location.reload();},10000);
	}
	else if ( y > 1440)
	{
		var z=y/24;
		var tempr=z%1;
		if ( tempr != 0)
		{ z= z-tempr;}
		y=y-(z*24);
		var a=y/60;
		var tempf=a%1;
		if ( tempf != 0)
		{ a= a-tempf;}
		y=y-(a*60);
		let messages = "<br>"+"<span style='background-color:#8080806b;' >"+'網站將於 '+"</span>"+"<span style='background-color:#8080806b;color:red;'>"+z+"</span>"+"<span style='background-color:#8080806b;' >"+' 天 '+"</span>"+"<span style='background-color:#8080806b;color:red;'>"+a+"</span>"+"<span style='background-color:#8080806b;' >"+' 小時 '+"</span>"+"<span style='background-color:#8080806b;color:red;'>"+y+"</span>"+"<span style='background-color:#8080806b;' >"+' 分鐘後開放！'+"</span>" ;
		n.innerHTML = messages;
		setTimeout(function(){location.reload();},2000000);

	}
	else if ( y > 60)
	{
		var z=y/60;
		var tempr=z%1;
		if ( tempr != 0)
		{ z= z-tempr;}
		y=y-(z*60);
		let messages = "<br>"+"<span style='background-color:#8080806b;' >"+'網站將於 '+"</span>"+"<span style='background-color:#8080806b;color:red;'>"+z+"</span>"+"<span style='background-color:#8080806b;' >"+' 小時 '+"</span>"+"<span style='background-color:#8080806b;color:red;'>"+y+"</span>"+"<span style='background-color:#8080806b;' >"+' 分鐘後開放！'+"</span>" ;
		n.innerHTML = messages;
		setTimeout(function(){location.reload();},1000000);

	}
	else
	{
		let messages = "<br>"+"<span style='background-color:#8080806b;' >"+'網站將於 '+"</span>"+"<span style='background-color:#8080806b;color:red;'>"+y+"</span>"+"<span style='background-color:#8080806b;' >"+' 分鐘後開放！'+"</span>" ;
		n.innerHTML = messages;
		setTimeout(function(){location.reload();},500000);
	}
}

// add "0" infront of single digits to make timer prettier.
function formate(r) {
return r;
}

/* 開放倒計時end */
