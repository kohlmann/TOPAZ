// Attach the bound model ($model) to the row so 
// we can access it in a click event.
if ($model) {
	 $.listItem.model = $model.toJSON();
}