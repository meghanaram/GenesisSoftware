exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['LoginPage.js'],
  
  onPrepare:function(){
		browser.manage().window().maximize();
		
		
		
		  
	  }
};