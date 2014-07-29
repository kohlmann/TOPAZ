function doClick(e) {
	if ($.title.text ==='Kuehe') {
    $.title.setText('Muuh');
  } else {
  	$.title.setText('Kuehe');
  }
   
}

function kuhList() {
	var kuhWindow = Alloy.createController("kuehe").getView();
	kuhWindow.open();
}

function kuhListRed() {
	var redKuhWindow = Alloy.createController("kueheRed").getView();
	redKuhWindow.open();
}

function kuhTable() {
	var kuhTableWindow = Alloy.createController("kuhtable").getView();
	kuhTableWindow.open();
}

$.index.open();

// var kuhWindow = new Alloy.createController("kuehe").getView();
// kuhWindow.open();
