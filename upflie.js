
(function(){

	var img = 0;
	var reader;

	function readFile(){

		var file = this.files[0];

		if (!/image\/\w+/.test(file.type)) {

			alert("文件必须为图片！");

			return false;

		}

		reader = new FileReader()
		
		reader.readAsDataURL(file);

		reader.onload = function(e){

			if (img!=this.result) {

				img=this.result;

				document.getElementById("show").innerHTML = '<img src="'+ this.result + '" >';
			}
		}
	}

	document.getElementById("fl").addEventListener("change", readFile);
	
})();

