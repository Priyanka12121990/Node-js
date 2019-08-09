class Telephone {
	setbrand() {
		this.brand="OnePlus6t";
	}
	doCall() {
		console.log(this.brand+" can do call");
	}
	doSms() {
		console.log(this.brand+" can do sms");
	}
	playGame() {
		console.log(this.brand+" can play game");
	}
}

class Mobile extends Telephone {

	playMusic() {
		console.log(this.brand+" mobile can play music, its color is "+this.color+", price is "+this.price+" and its a "+this.type+" phone");
	}

	playVideo() {
		console.log(this.brand+" mobile can play video, its color is "+this.color+", price is "+this.price+" and its a "+this.type+" phone");
	}

	takePhoto() {
		console.log(this.brand+" mobile can take photos, its color is "+this.color+", price is "+this.price+" and its a "+this.type+" phone");
	}
}


tel_obj = new Telephone();
mobile_obj = new Mobile();
mobile_obj.setbrand();
mobile_obj.color='Red';
mobile_obj.price='36000';
mobile_obj.type='Android';

mobile_obj.doCall();
mobile_obj.doSms();
mobile_obj.playGame();

mobile_obj.playMusic();
mobile_obj.playVideo();
mobile_obj.takePhoto();
