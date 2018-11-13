/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const index=__webpack_require__(/*! ./public/js/index */ \"./public/js/index.js\");\r\n//index();\r\n//console.log(index);\r\n\r\nconst header=__webpack_require__(/*! ./public/js/header */ \"./public/js/header.js\");\r\n//header();\r\n\r\nconst footer=__webpack_require__(/*! ./public/js/footer */ \"./public/js/footer.js\");\r\n//footer();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./public/js/footer.js":
/*!*****************************!*\
  !*** ./public/js/footer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=$(function(){\r\n    $(\"<link rel='stylesheet' href='../css/footer.css'>\").appendTo(\"head\");\r\n    $.ajax({\r\n        url:\"http://localhost:8000/footer.html\",\r\n        type:\"get\",\r\n        success:function(res){\r\n            $(\"#footer\").replaceWith(res);\r\n        }\r\n\r\n    })\r\n});\r\n\n\n//# sourceURL=webpack:///./public/js/footer.js?");

/***/ }),

/***/ "./public/js/header.js":
/*!*****************************!*\
  !*** ./public/js/header.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=$(function(){\r\n    //引入head样式\r\n    $(\"<link rel='stylesheet' href='../css/header.css'>\").appendTo(\"head\");    \r\n\r\n    //获取header内容\r\n    $.ajax({\r\n        url:\"http://localhost:8000/header.html\",\r\n        type:\"get\",\r\n        success:function(res){\r\n            $(\"#header\").replaceWith(res);\r\n\r\n            //一级菜单移出，显示/隐藏二级菜单\r\n            var tMove;\r\n\r\n            //导航栏样式\r\n            var styleOver={\r\n                \"border-top\":\"2px solid #f3665c\",\r\n                \"border-right\":\"1px solid #74736d\",\r\n                \"border-bottom\":\"1px solid white\",\r\n                \"border-left\":\"1px solid #74736d\",\r\n                \"color\":\"#74736d\"\r\n            };\r\n            var styleOut={\r\n                \"border-top\":\"2px solid transparent\",\r\n                \"border-right\": \"1px solid transparent\",\r\n                \"border-bottom\": \"1px solid transparent\",\r\n                \"border-left\": \"1px solid transparent\",\r\n                \"color\": \"#353535\"\r\n            };\r\n\r\n            //一级菜单移入，显示二级菜单\r\n            $(\"#menus\").on(\"mouseover\",\"div\",function(){\r\n                var $name=$(this);                \r\n                var i=$name.prevAll().length; \r\n                $(\"#expanding>li\").eq(i).addClass(\"active\");                       \r\n                $(this).css(styleOver);\r\n            })            \r\n            //一级菜单移出，隐藏二级菜单\r\n            $(\"#menus\").on(\"mouseout\",\"div\",function(){\r\n                var $name=$(this);\r\n                $(this).css(styleOut);\r\n                var i=$name.prevAll().length;\r\n                \r\n                tMove=setTimeout(function(){\r\n                    $(\"#expanding>li\").eq(i).removeClass(\"active\");\r\n                },100);\r\n            })\r\n            //二级菜单显示\r\n            $(\"#expanding\").on(\"mouseover\",\"li\",function(){\r\n                $(this).addClass(\"active\");\r\n                var i=$(this).prevAll().length; \r\n                $(\"#menus>div\").eq(i).css(styleOver);\r\n            })\r\n            //二级菜单隐藏\r\n            $(\"#expanding\").on(\"mouseout\",\"li\",function(){                \r\n                clearTimeout(tMove);\r\n                $(this).removeClass(\"active\");                    \r\n                var i=$(this).prevAll().length; \r\n                $(\"#menus>div\").eq(i).css(styleOut);\r\n            })\r\n            /*\r\n            new Vue({\r\n                el:\"#header\",\r\n                data:{\r\n                    kwords:\"\",\r\n                    issignin:false,\r\n                    uname:\"\"\r\n                },\r\n                mounted(){\r\n                    if(location.search.indexOf(\"kwords\")!=-1){\r\n                        this.kwords=decodeURI(location.search.split(\"=\")[1])\r\n                    }\r\n                    $.ajax({\r\n                        url:\"http://localhost:8000/users/issignin\",\r\n                        type:\"get\",\r\n                        dataType:\"json\",\r\n                        success:(res)=>{\r\n                            if(res.ok==0) this.issignin=false\r\n                            else{\r\n                                this.issignin=true;\r\n                                this.uname=res.uname;\r\n                            }\r\n                        }\r\n                    })\r\n                },\r\n                computed:{\r\n                    signin(){\r\n                        return `signin.html?back=${location.href}`;\r\n                    }\r\n                },\r\n                methods:{\r\n                    search(){\r\n                        if(this.kwords!=\"\"){\r\n                            location.href=`products.html?kwords=${this.kwords}`;\r\n                        }\r\n                    },\r\n                    signout(){\r\n                        $.ajax({\r\n                            url:\"http://localhost:8000/users/signout\",\r\n                            type: \"get\",\r\n                            success: ()=>{\r\n                                alert(\"您的账号已退出\");\r\n                                this.issignin=false;\r\n                            }\r\n                        })\r\n                    }\r\n                }\r\n            })\r\n            */\r\n            \r\n            //搜索        \r\n            var $btnSearch=$(\"#rightFixed>div:last-child>a img\"),\r\n                $input=$btnSearch.parent().prev();\r\n            $btnSearch.click(function(){\r\n                var kw=$input.val().trim();\r\n                if(kw!==\"\") location.href=`products.html?kwords=${kw}`;\r\n            })\r\n            $input.keyup(function(e){\r\n                if(e.keyCode==13){\r\n                    $btnSearch.click();\r\n                }\r\n            })\r\n            if(location.search.indexOf(\"kwords\")!=-1){\r\n                var kwords=decodeURI(location.search.split(\"=\")[1]);\r\n                $input.val(kwords);\r\n            }\r\n            \r\n\r\n            //登录跳转\r\n            $(\"#btnSignin\").click(function(){\r\n                location.href=\"signin.html?back=\"+location.href;\r\n            })\r\n\r\n            $.ajax({\r\n                url:\"http://localhost:8000/users/issignin\",\r\n                type:\"get\",\r\n                dataType:\"json\",\r\n                success:function(res){\r\n                    if(res.ok==0){\r\n                        $(\"#out\").show().next().hide();\r\n                    }else{\r\n                        $(\"#uname\").html(res.uname);\r\n                        $(\"#out\").hide().next().show();\r\n                    }\r\n                }\r\n            })\r\n\r\n            //注册账号\r\n            $(\"#btnSignup\").click(function(){\r\n                location.href=\"signup.html?backTo=\"+location.href;\r\n            })\r\n\r\n\r\n\r\n            //退出账号\r\n            $(\"#btnSignout\").click(function(){\r\n                $.ajax({\r\n                    url:\"http://localhost:8000/users/signout\",\r\n                    type:\"get\",\r\n                    success:function(){\r\n                        alert(\"您的账号已退出\");\r\n                        location.reload();\r\n                    }\r\n                })\r\n            })\r\n            \r\n        }\r\n    })\r\n});\r\n\n\n//# sourceURL=webpack:///./public/js/header.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=$(function(){\r\n    //1. 轮播图功能\r\n    //1.1 定义变量\r\n    var num=0;\r\n    var timer=null;\r\n    //1.2 鼠标进入和移出\r\n    $(\"#box\").mouseenter(function(){\r\n        clearInterval(timer);\r\n    }).mouseleave(function(){\r\n        go();\r\n    });\r\n    //1.3 轮播图\r\n    function go(){\r\n        timer=setInterval(function(){\r\n            num++;\r\n            if(num>4){\r\n                num=1;\r\n                $(\"#box>ul\").css(\"margin-left\",\"0\");                     \r\n            }\r\n            if(num==4){\r\n                $(\"#box>ol>li\").eq(0).addClass(\"current\").siblings().removeClass(\"current\");\r\n            }else{\r\n                $(\"#box>ol>li\").eq(num).addClass(\"current\").siblings().removeClass(\"current\");           \r\n            }\r\n            $(\"#box>ul\").animate({\"marginLeft\":-100*num+\"%\"},580);              \r\n        },3000);        \r\n    };\r\n    //1.4 小圆点\r\n    $(\"#box>ol>li\").each(function(index){\r\n        $(this).mouseover(function(){\r\n            num=index;\r\n            console.log(this);\r\n            $(this).addClass(\"current\").siblings().removeClass(\"current\");\r\n            $(\"#box>ul\").stop().animate({\"marginLeft\":-100*num+\"%\"},580);\r\n        })\r\n    })\r\n\r\n    //2. \r\n});\r\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ })

/******/ });