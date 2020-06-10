主要利用html5  api 

上传的方法有 ：
1.利用html5 上传标签
<input type="file" name="myfil[]" multiple="multiple" >

但是该标签不能预览

2.如何实现预览：
可以利用html5 FileReader api  打开本地文件显示到  页面上  FileReader打开读取的格式是base64 