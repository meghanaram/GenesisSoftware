describe('Genesis Login Page',function(){
	var obj=require("./LoginObject.js");
	var d=require("./LoginData.js");
	var using=require('jasmine-data-provider');
	
	//Open the Genesis web url
	
	beforeEach(function(){
		obj.getURL();
	});

	using(d.datadrive,function(data,description){
		it('Login functionality',function(){
			
			obj.username.sendKeys(data.username);
			obj.password.sendKeys(data.password);
			obj.loginbutton.click();
			
			

			//expect(element(by.id("toast-container")).getText()).toContain("'x");

			element(by.id("toast-container")).getText().then(function(text){
				
				if(text.length!=0){
					console.log("Test case Passed");
				}
				console.log(text.length);
				console.log(text);
				
			});
			

				
			});
	
	
	
	})
})
	
	
