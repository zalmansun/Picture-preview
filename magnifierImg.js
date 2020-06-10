(function (global) {

  "use strict";

  var magnifierImg = function () { }
  // 初始化API   入口
  // 有必要调用到插件本身this的， 就放在prototype上边， 功能函数尽量放在下方工具中
  magnifierImg.prototype = {

    options: {
      name: 'fd'
    },
    // index: null,
    /**
     * @method 初始化
     * @param { object } 由@method config() 提供的配置参数
     */
    init: function (opts) {
      var option = config(opts, this.options);//用户配置
      initmagnifierImg(option)
      }
  }

  // 插件交互功能函数
  function initmagnifierImg(option) {
      var a=1;
      var fangda=document.getElementsByClassName(option.name)[0];
      var fdkuang=fangda.getElementsByClassName("fdkuang")[0];
      var fdshow=document.getElementById("fdshow");
      var fdshowimg=fdshow.getElementsByTagName("img")[0];
      var fdwidth=fdshowimg.offsetWidth;
      var s=false;
      // function initimgyulan(){
      //     var imgyulan='<div class="fdshow" id="fdshow"><img src="2.jpg" alt=""></div>';
      // }

      //功能函数
      function moved(kuang){  //放大镜移动  预览移动
        fdkuang.style.left=kuang.x+"px";
        fdkuang.style.top=kuang.y+"px";
        fdshowimg.style.left= -fdkuang.offsetLeft*2+"px";
        fdshowimg.style.top= -fdkuang.offsetTop*2+"px";
      }
      //放大镜边界检测
      function bianji(kuang){
        if(kuang.x > 250){
          kuang.x=250
        }
        if(kuang.x < 0){
          kuang.x=0
        }
        if(kuang.y > 250){
          kuang.y=250
        }
        if(kuang.y < 0){
          kuang.y=0
        }
      }

      function fangdamove(event,t){
        var kuang={x:0,y:0}; // 记录放大镜位置信息
        kuang.x=event.clientX-125;
        kuang.y=event.clientY-125;
        bianji(kuang)
        moved(kuang)

      }

      function fangdaout(){
        fdkuang.style.display="none";
        fdshow.style.display="none";
        s=true;
      }
      fangda.addEventListener("mouseover", function(){
        if (s) {
          s=false;
          fdkuang.style.display="block";
          fdshow.style.display="block";
        }
      });
      fangda.addEventListener("mousemove", fangdamove);
      fangda.addEventListener("mouseout", fangdaout);
  }


  // 工具函数
  // 检查非空
  function isEmpty(val) {
    return val != '' && val != null && val != undefined ? false : true;
  }

  /**
   * @method 配置
   * @param opts { object } 用户提供的参数，在没有提供参数的情况下使用默认参数 
   * @param options { object } 默认参数
   * @return options { object } 返回一个配置对象
   */
  function config(opts, options) {
    //默认参数
    if (!opts) return options;
    for (var key in opts) {
      if (!!opts[key]) {
        options[key] = opts[key];
      }
    }
    return options;
  }


  global.magnifierImg= magnifierImg;//注册到全局中， 届时可以直接new yPreview() 实例化对象

}(this))