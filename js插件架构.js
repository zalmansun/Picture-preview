(function (global) {

  "use strict";

  var yPreview = function () { }
  // 初始化API   入口
  // 有必要调用到插件本身this的， 就放在prototype上边， 功能函数尽量放在下方工具中
  yPreview.prototype = {

    options: {
      name: 'yPreview',
      elem: 'preview-images'
    },
    index: null,
    /**
     * @method 初始化
     * @param { object } 由@method config() 提供的配置参数
     */
    init: function (opts) {
        var _this = this;
        var option = config(opts, this.options);//用户配置
        var _elems = document.getElementsByClassName(option.elem);
        var _elemsLength = _elems.length;
        var index = null;
      }
  }

  // 插件交互功能函数
  function hide(elem) {
  	//code
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


  global.yPreview = yPreview;//注册到全局中， 届时可以直接new yPreview() 实例化对象

}(this))