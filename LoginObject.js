function login(){

	this.username=element(by.model("loginController.username"));
	this.password=element(by.model("loginController.password"));
	this.loginbutton=element(by.css("button[class='gn-login-box__form-button']"));
	this.resetpassword=element(by.css("span[class='gn-login-box__forgot-text']"));

	this.getURL=function(){

		browser.get("https://labs.asteria.co.in/#/login");

	};

}

module.exports=new login();
