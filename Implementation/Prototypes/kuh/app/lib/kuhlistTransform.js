function transformFunction(model) {
	
	//convert model to JSON
	var transform = model.toJSON();
	var flag = false;
	
	
	(transform.gRZG != null && transform.gRZG !== undefined && transform.gRZG !== '') ?
		transform.headline =  transform.Name + ' ' + transform.Herdbuchnr + ' RZG ' + transform.gRZG : 
		transform.headline =  transform.Name + ' ' + transform.Herdbuchnr;
	
	if (transform.Vater != null && transform.Vater !== undefined && transform.Vater !== '' && flag === false) {
		transform.subheadline = transform.Vater;
		flag = true;
	}
	
	if (transform.MV_Name != null && transform.MV_Name !== undefined && transform.MV_Name !== '') {
		if (flag === true) {
			transform.subheadline = transform.subheadline + ' x ' + transform.MV_Name;
		} else
		    transform.subheadline = transform.MV_Name; 
		    flag = true;
		}
	
	if (transform.MMV_Name != null && transform.MMV_Name !== undefined && transform.MMV_Name !== '') {
		if (flag === true) {
			transform.subheadline = transform.subheadline + ' x ' + transform.MMV_Name;
		} else
		    transform.subheadline = transform.MMV_Name; 
		}
	
	transform.headAndSubheadline = transform.headline + ' ' + transform.subheadline;
	
	return transform;
};

//module.exports = transformFunction;

exports.transformFunction = transformFunction;



