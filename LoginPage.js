describe('Genesis Login Page',function(){
	var obj=require("./LoginObject.js");
	var d=require("./LoginData.js");
	var using=require('jasmine-data-provider');

	function toast(testname){
		element(by.id("toast-container")).getText().then(function(text){

			if(text.length!=0){
				console.log(testname+" Test case Passed");
			}else{
				console.log(testname+" Test case Failed");
				console.log(text);
			}
			//console.log(text.length);
			

		});

	}

	//Open the Genesis web url

	beforeEach(function(){
		obj.getURL();
	});

	using(d.datadrive,function(data,description){
		it('Login functionality',function(){

			obj.username.sendKeys(data.username);
			obj.password.sendKeys(data.password);
			obj.loginbutton.click();

			toast("Login");


//			element(by.id("toast-container")).getText().then(function(text){

//			if(text.length!=0){
//			console.log("Test case Passed");
//			}
//			console.log(text.length);
//			console.log(text);

//			});



		});

		it('Reset Password',function(){

			obj.resetpassword.click();
			toast("Reset Password");
//			element(by.id("toast-container")).getText().then(function(text){

//			if(text.length!=0){
//			console.log("Reset Password Test case Passed");
//			}
//			console.log(text.length);
//			console.log(text);

//			});


		})


	})
})


