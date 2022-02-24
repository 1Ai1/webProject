function playAudio(){
      var myAudio = new Audio;
      myAudio.src = "sound/click.mp3";
      myAudio.play();
   }
function switchLamp(){
	playAudio()
	let status = document.querySelector(".light_switch").innerHTML;
	let electricityStatus = document.querySelector(".electricity_status").innerHTML;
	if(status == "OFF"){
		if(electricityStatus == "ON"){
			document.getElementById('welcome').style.background = 'url(img/welcome_on.jpg) no-repeat';
			document.getElementById('welcome').style.backgroundSize = 'cover';
			document.querySelector('.animation_off').setAttribute('class', 'animation_on');
		}
		document.getElementById('switchlamp').setAttribute('id', 'switch_on1')
		document.querySelector(".light_switch").innerHTML = "ON";
	}
	else{
		document.getElementById('welcome').style.background = 'url(img/welcome_off.jpg) no-repeat';
		document.getElementById('welcome').style.backgroundSize = 'cover';
		document.getElementById('switch_on1').setAttribute('id', 'switchlamp')
		if(electricityStatus == "ON"){
			document.querySelector('.animation_on').setAttribute('class', 'animation_off');
		}
		document.querySelector(".light_switch").innerHTML = "OFF"
	}
}


function switchElectricity(){
	playAudio()
	let status = document.querySelector(".electricity_status").innerHTML;
	let lampStatus = document.querySelector(".light_switch").innerHTML;
	if(status == "ON"){
		if(lampStatus == "ON"){	
			document.getElementById('welcome').style.background = 'url(img/welcome_off.jpg) no-repeat';
			document.getElementById('welcome').style.backgroundSize = 'cover';
			document.querySelector('.animation_on').setAttribute('class', 'animation_off');
		}
		document.getElementById('switch_electricity').setAttribute('id', 'switch_off_electricity')
		document.querySelector(".electricity_status").innerHTML = "OFF"
	}
	else{
		if(lampStatus == "ON"){
			document.getElementById('welcome').style.background = 'url(img/welcome_on.jpg) no-repeat';
			document.getElementById('welcome').style.backgroundSize = 'cover';
			document.querySelector('.animation_off').setAttribute('class', 'animation_on');
		}
		document.getElementById('switch_off_electricity').setAttribute('id', 'switch_electricity')
		document.querySelector(".electricity_status").innerHTML = "ON"
	}
}