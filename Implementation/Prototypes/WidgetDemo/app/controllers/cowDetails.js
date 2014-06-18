
// function itemclick(e){
	// console.log("----------------------test-------------------");
// 	
	// var win = Ti.UI.createWindow();
	// var image = Ti.UI.createImageView({
	  // image:'/images/cow.png'
	// });
	// win.add(image);
	// win.open();
// }

function itemclick(e){
	var win = Ti.UI.createWindow();
	var scrollView = Titanium.UI.createScrollView({
            contentWidth: Ti.Platform.displayCaps.platformWidth,
            contentHeight: Ti.Platform.displayCaps.platformHeight,
 
            height: Ti.Platform.displayCaps.platformHeight,
            width: Ti.Platform.displayCaps.platformWidth,
 
            backgroundColor:'#343434',
 
            showVerticalScrollIndicator:true,
            showHorizontalScrollIndicator:true,
 
            maxZoomScale:100,
            minZoomScale:1
        });
        win.add(scrollView);
 
        var mainImage = Ti.UI.createImageView({
            height: 'auto',
            width: 'auto',
            image: '/images/cow.png',//<--- your image path or URL
        });
        
        mainImage.enableZoomControls="true";
        
        scrollView.add(mainImage);
        win.open();
}
