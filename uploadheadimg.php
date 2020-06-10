<?php
    $imgname = $_FILES['myfil'];
    $tmp = $_FILES['myfil']['tmp_name'];
    $filepath = 'photo/';
	echo "{$imgname['0']}";
    // for($i=0; $i<2; $i++) {


    	// move_uploaded_file($tmp,$filepath.$imgname[$i]);

	    // if(move_uploaded_file($tmp,$filepath.$imgname[0])){
	    //     echo "上传成功";
	    // }else{        
	    // 	echo "上传失败";
	    // }
	
    // }
  //   if(move_uploaded_file($tmp,$filepath.$imgname)){
		// echo "{}";
  //       echo "上传成功";
  //   }else{        
  //   	echo "上传失败";
  //   }
  
    // if(){
    // 	echo "上传失败";
    // }
?>