function transformFunction(model) {
    var transform = model.toJSON();
    var flag = false;
    transform.headline = null != transform.gRZG && void 0 !== transform.gRZG && "" !== transform.gRZG ? transform.Name + " " + transform.Herdbuchnr + " RZG " + transform.gRZG : transform.Name + " " + transform.Herdbuchnr;
    if (null != transform.Vater && void 0 !== transform.Vater && "" !== transform.Vater && false === flag) {
        transform.subheadline = transform.Vater;
        flag = true;
    }
    if (null != transform.MV_Name && void 0 !== transform.MV_Name && "" !== transform.MV_Name) {
        transform.subheadline = true === flag ? transform.subheadline + " x " + transform.MV_Name : transform.MV_Name;
        flag = true;
    }
    null != transform.MMV_Name && void 0 !== transform.MMV_Name && "" !== transform.MMV_Name && (transform.subheadline = true === flag ? transform.subheadline + " x " + transform.MMV_Name : transform.MMV_Name);
    transform.headAndSubheadline = transform.headline + " " + transform.subheadline;
    return transform;
}

exports.transformFunction = transformFunction;