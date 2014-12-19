/**
 * fullPage 2.5.2
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(b){b.fn.fullpage=function(c){function ka(a){a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');"#fff"!=c.controlArrowColor&&(a.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+c.controlArrowColor),a.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||a.find(".fp-controlArrow.fp-prev").hide()}function la(){b("body").append('<div id="fp-nav"><ul></ul></div>');
n=b("#fp-nav");n.css("color",c.navigationColor);n.addClass(c.navigationPosition);for(var a=0;a<b(".fp-section").length;a++){var d="";c.anchors.length&&(d=c.anchors[a]);var d='<li><a href="#'+d+'"><span></span></a>',e=c.navigationTooltips[a];void 0!=e&&""!=e&&(d+='<div class="fp-tooltip '+c.navigationPosition+'">'+e+"</div>");d+="</li>";n.find("ul").append(d)}}function M(){b(".fp-section").each(function(){var a=b(this).find(".fp-slide");a.length?a.each(function(){x(b(this))}):x(b(this))});b.isFunction(c.afterRender)&&
c.afterRender.call(this)}function N(){if(!c.autoScrolling||c.scrollBar){var a=b(window).scrollTop(),d=0,e=Math.abs(a-b(".fp-section").first().offset().top);b(".fp-section").each(function(c){var f=Math.abs(a-b(this).offset().top);f<e&&(d=c,e=f)});var f=b(".fp-section").eq(d)}if(!c.autoScrolling&&!f.hasClass("active")){D=!0;var ma=b(".fp-section.active").index(".fp-section")+1,g=E(f),h=f.data("anchor");f.addClass("active").siblings().removeClass("active");k||(b.isFunction(c.onLeave)&&c.onLeave.call(this,
ma,f.index(".fp-section")+1,g),b.isFunction(c.afterLoad)&&c.afterLoad.call(this,h,f.index(".fp-section")+1));F(h,0);c.anchors.length&&!k&&(p=h,location.hash=h);clearTimeout(O);O=setTimeout(function(){D=!1},100)}c.scrollBar&&(clearTimeout(P),P=setTimeout(function(){k||l(f)},1E3))}function Q(a){return scrollable=a.find(".fp-slides").length?a.find(".fp-slide.active").find(".fp-scrollable"):a.find(".fp-scrollable")}function y(a,d){if(h[a]){if("down"==a)var c="bottom",f=b.fn.fullpage.moveSectionDown;else c=
"top",f=b.fn.fullpage.moveSectionUp;if(0<d.length)if(c="top"===c?!d.scrollTop():"bottom"===c?d.scrollTop()+1+d.innerHeight()>=d[0].scrollHeight:void 0,c)f();else return!0;else f()}}function na(a){var d=a.originalEvent;if(!R(a.target)){c.autoScrolling&&!c.scrollBar&&a.preventDefault();a=b(".fp-section.active");var e=Q(a);k||t||(d=S(d),s=d.y,z=d.x,a.find(".fp-slides").length&&Math.abs(A-z)>Math.abs(u-s)?Math.abs(A-z)>b(window).width()/100*c.touchSensitivity&&(A>z?h.right&&b.fn.fullpage.moveSlideRight():
h.left&&b.fn.fullpage.moveSlideLeft()):c.autoScrolling&&!c.scrollBar&&Math.abs(u-s)>b(window).height()/100*c.touchSensitivity&&(u>s?y("down",e):s>u&&y("up",e)))}}function R(a,d){d=d||0;var e=b(a).parent();return d<c.normalScrollElementTouchThreshold&&e.is(c.normalScrollElements)?!0:d==c.normalScrollElementTouchThreshold?!1:R(e,++d)}function oa(a){a=S(a.originalEvent);u=a.y;A=a.x}function q(a){if(c.autoScrolling){a=window.event||a;var d=Math.max(-1,Math.min(1,a.wheelDelta||-a.deltaY||-a.detail));c.scrollBar&&
(a.preventDefault?a.preventDefault():a.returnValue=!1);a=b(".fp-section.active");a=Q(a);k||(0>d?y("down",a):y("up",a));return!1}}function T(a){var d=b(".fp-section.active").find(".fp-slides");if(d.length&&!t){var e=d.find(".fp-slide.active"),f=null,f="prev"===a?e.prev(".fp-slide"):e.next(".fp-slide");if(!f.length){if(!c.loopHorizontal)return;f="prev"===a?e.siblings(":last"):e.siblings(":first")}t=!0;v(d,f)}}function U(){b(".fp-slide.active").each(function(){G(b(this))})}function l(a,d,e){var f=a.position();
if("undefined"!==typeof f&&(d={element:a,callback:d,isMovementUp:e,dest:f,dtop:f.top,yMovement:E(a),anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:b(".fp-section.active"),leavingSection:b(".fp-section.active").index(".fp-section")+1,localIsResizing:w},!(d.activeSection.is(a)&&!w||c.scrollBar&&b(window).scrollTop()===d.dtop))){if(d.activeSlide.length)var g=d.activeSlide.data("anchor"),h=d.activeSlide.index();c.autoScrolling&&c.continuousVertical&&
"undefined"!==typeof d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&(d.isMovementUp?b(".fp-section.active").before(d.activeSection.nextAll(".fp-section")):b(".fp-section.active").after(d.activeSection.prevAll(".fp-section").get().reverse()),r(b(".fp-section.active").position().top),U(),d.wrapAroundElements=d.activeSection,d.dest=d.element.position(),d.dtop=d.dest.top,d.yMovement=E(d.element));a.addClass("active").siblings().removeClass("active");k=!0;V(h,
g,d.anchorLink,d.sectionIndex);b.isFunction(c.onLeave)&&!d.localIsResizing&&c.onLeave.call(this,d.leavingSection,d.sectionIndex+1,d.yMovement);pa(d);p=d.anchorLink;c.autoScrolling&&F(d.anchorLink,d.sectionIndex)}}function pa(a){if(c.css3&&c.autoScrolling&&!c.scrollBar)W("translate3d(0px, -"+a.dtop+"px, 0px)",!0),setTimeout(function(){X(a)},c.scrollingSpeed);else{var d=qa(a);b(d.element).animate(d.options,c.scrollingSpeed,c.easing).promise().done(function(){X(a)})}}function qa(a){var b={};c.autoScrolling&&
!c.scrollBar?(b.options={top:-a.dtop},b.element="."+Y):(b.options={scrollTop:a.dtop},b.element="html, body");return b}function ra(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?b(".fp-section:first").before(a.wrapAroundElements):b(".fp-section:last").after(a.wrapAroundElements),r(b(".fp-section.active").position().top),U())}function X(a){ra(a);b.isFunction(c.afterLoad)&&!a.localIsResizing&&c.afterLoad.call(this,a.anchorLink,a.sectionIndex+1);setTimeout(function(){k=!1;b.isFunction(a.callback)&&
a.callback.call(this)},600)}function Z(){if(!D){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];if(b.length){var c="undefined"===typeof p,f="undefined"===typeof p&&"undefined"===typeof a&&!t;(b&&b!==p&&!c||f||!t&&H!=a)&&I(b,a)}}}function v(a,d){var e=d.position(),f=a.find(".fp-slidesContainer").parent(),g=d.index(),h=a.closest(".fp-section"),k=h.index(".fp-section"),m=h.data("anchor"),n=h.find(".fp-slidesNav"),l=d.data("anchor"),r=w;if(c.onSlideLeave){var p=h.find(".fp-slide.active").index(),
q;q=p==g?"none":p>g?"left":"right";r||"none"===q||b.isFunction(c.onSlideLeave)&&c.onSlideLeave.call(this,m,k+1,p,q)}d.addClass("active").siblings().removeClass("active");"undefined"===typeof l&&(l=g);!c.loopHorizontal&&c.controlArrows&&(h.find(".fp-controlArrow.fp-prev").toggle(0!=g),h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));h.hasClass("active")&&V(g,l,m,k);var s=function(){r||b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,m,k+1,l,g);t=!1};c.css3?(e="translate3d(-"+
e.left+"px, 0px, 0px)",$(a.find(".fp-slidesContainer"),0<c.scrollingSpeed).css(aa(e)),setTimeout(function(){s()},c.scrollingSpeed,c.easing)):f.animate({scrollLeft:e.left},c.scrollingSpeed,c.easing,function(){s()});n.find(".active").removeClass("active");n.find("li").eq(g).find("a").addClass("active")}function ba(){ca();if(J){if("text"!==b(document.activeElement).attr("type")){var a=b(window).height();Math.abs(a-K)>20*Math.max(K,a)/100&&(b.fn.fullpage.reBuild(!0),K=a)}}else clearTimeout(da),da=setTimeout(function(){b.fn.fullpage.reBuild(!0)},
500)}function ca(){if(c.responsive){var a=g.hasClass("fp-responsive");b(window).width()<c.responsive?a||(b.fn.fullpage.setAutoScrolling(!1),b("#fp-nav").hide(),g.addClass("fp-responsive")):a&&(b.fn.fullpage.setAutoScrolling(!0),b("#fp-nav").show(),g.removeClass("fp-responsive"))}}function $(a){var b="all "+c.scrollingSpeed+"ms "+c.easingcss3;a.removeClass("fp-notransition");return a.css({"-webkit-transition":b,transition:b})}function L(a){return a.addClass("fp-notransition")}function sa(a,d){if(825>
a||900>d){var c=Math.min(100*a/825,100*d/900).toFixed(2);b("body").css("font-size",c+"%")}else b("body").css("font-size","100%")}function F(a,d){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));c.navigation&&(b("#fp-nav").find(".active").removeClass("active"),a?b("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):b("#fp-nav").find("li").eq(d).find("a").addClass("active"))}function E(a){var d=b(".fp-section.active").index(".fp-section");
a=a.index(".fp-section");return d==a?"none":d>a?"up":"down"}function x(a){a.css("overflow","hidden");var b=a.closest(".fp-section"),e=a.find(".fp-scrollable");if(e.length)var f=e.get(0).scrollHeight;else f=a.get(0).scrollHeight,c.verticalCentered&&(f=a.find(".fp-tableCell").get(0).scrollHeight);b=m-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"));f>b?e.length?e.css("height",b+"px").parent().css("height",b+"px"):(c.verticalCentered?a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):
a.wrapInner('<div class="fp-scrollable" />'),a.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})):ea(a);a.css("overflow","")}function ea(a){a.find(".fp-scrollable").children().first().unwrap().unwrap();a.find(".slimScrollBar").remove();a.find(".slimScrollRail").remove()}function fa(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+ga(a)+'px;" />')}function ga(a){var b=m;if(c.paddingTop||c.paddingBottom)b=a,b.hasClass("fp-section")||
(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom")),b=m-a;return b}function W(a,b){b?$(g):L(g);g.css(aa(a));setTimeout(function(){g.removeClass("fp-notransition")},10)}function I(a,c){"undefined"===typeof c&&(c=0);var e=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-1);a===p||e.hasClass("active")?ha(e,c):l(e,function(){ha(e,c)})}function ha(a,b){if("undefined"!=typeof b){var c=a.find(".fp-slides"),f=c.find('[data-anchor="'+b+'"]');f.length||(f=
c.find(".fp-slide").eq(b));f.length&&v(c,f)}}function ta(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var e=a.find(".fp-slidesNav");e.addClass(c.slidesNavPosition);for(var f=0;f<b;f++)e.find("ul").append('<li><a href="#"><span></span></a></li>');e.css("margin-left","-"+e.width()/2+"px");e.find("li").first().find("a").addClass("active")}function V(a,b,e,f){var g="";c.anchors.length?(a?("undefined"!==typeof e&&(g=e),"undefined"===typeof b&&(b=a),H=b,location.hash=g+"/"+b):("undefined"!==
typeof a&&(H=b),location.hash=e),B(location.hash)):"undefined"!==typeof a?B(f+"-"+a):B(String(f))}function B(a){a=a.replace("/","-").replace("#","");b("body")[0].className=b("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g,"");b("body").addClass("fp-viewing-"+a)}function ua(){var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);
for(var f in c)void 0!==a.style[f]&&(a.style[f]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[f]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b}function ia(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function S(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;
return b}function G(a){var d=c.scrollingSpeed;b.fn.fullpage.setScrollingSpeed(0);v(a.closest(".fp-slides"),a);b.fn.fullpage.setScrollingSpeed(d)}function r(a){c.scrollBar?g.scrollTop(a):c.css3?W("translate3d(0px, -"+a+"px, 0px)",!1):g.css("top",-a)}function aa(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function va(){r(0);b("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();b(".fp-section").css({height:"","background-color":"",padding:""});b(".fp-slide").css({width:""});
g.css({height:"",position:"","-ms-touch-action":"","touch-action":""});b(".fp-section, .fp-slide").each(function(){ea(b(this));b(this).removeClass("fp-table active")});L(g);L(g.find(".fp-easing"));g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){b(this).replaceWith(this.childNodes)});b("html, body").scrollTop(0)}function C(a,b){console&&console[a]&&console[a]("fullPage: "+b)}c=b.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],
slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,easing:"easeInQuart",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:".section",
slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},c);(function(){c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,C("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.continuousVertical&&c.scrollBar&&(c.continuousVertical=!1,C("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
b.each(c.anchors,function(a,c){(b("#"+c).length||b('[name="'+c+'"]').length)&&C("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();b.extend(b.easing,{easeInQuart:function(a,b,c,f,g){return f*(b/=g)*b*b*b+c}});b.fn.fullpage.setAutoScrolling=function(a){c.autoScrolling=a;a=b(".fp-section.active");c.autoScrolling&&!c.scrollBar?(b("html, body").css({overflow:"hidden",height:"100%"}),g.css({"-ms-touch-action":"none","touch-action":"none"}),
a.length&&r(a.position().top)):(b("html, body").css({overflow:"visible",height:"initial"}),g.css({"-ms-touch-action":"","touch-action":""}),r(0),b("html, body").scrollTop(a.position().top))};b.fn.fullpage.setScrollingSpeed=function(a){c.scrollingSpeed=a};b.fn.fullpage.setMouseWheelScrolling=function(a){a?document.addEventListener?(document.addEventListener("mousewheel",q,!1),document.addEventListener("wheel",q,!1)):document.attachEvent("onmousewheel",q):document.addEventListener?(document.removeEventListener("mousewheel",
q,!1),document.removeEventListener("wheel",q,!1)):document.detachEvent("onmousewheel",q)};b.fn.fullpage.setAllowScrolling=function(a,c){if("undefined"!=typeof c)c=c.replace(" ","").split(","),b.each(c,function(c,d){switch(d){case "up":h.up=a;break;case "down":h.down=a;break;case "left":h.left=a;break;case "right":h.right=a;break;case "all":b.fn.fullpage.setAllowScrolling(a)}console.log(h)});else if(a){if(b.fn.fullpage.setMouseWheelScrolling(!0),J||ja)MSPointer=ia(),b(document).off("touchstart "+MSPointer.down).on("touchstart "+
MSPointer.down,oa),b(document).off("touchmove "+MSPointer.move).on("touchmove "+MSPointer.move,na)}else if(b.fn.fullpage.setMouseWheelScrolling(!1),J||ja)MSPointer=ia(),b(document).off("touchstart "+MSPointer.down),b(document).off("touchmove "+MSPointer.move)};b.fn.fullpage.setKeyboardScrolling=function(a){c.keyboardScrolling=a};b.fn.fullpage.moveSectionUp=function(){var a=b(".fp-section.active").prev(".fp-section");a.length||!c.loopTop&&!c.continuousVertical||(a=b(".fp-section").last());a.length&&
l(a,null,!0)};b.fn.fullpage.moveSectionDown=function(){var a=b(".fp-section.active").next(".fp-section");a.length||!c.loopBottom&&!c.continuousVertical||(a=b(".fp-section").first());a.length&&l(a,null,!1)};b.fn.fullpage.moveTo=function(a,c){var e="",e=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-1);"undefined"!==typeof c?I(a,c):0<e.length&&l(e)};b.fn.fullpage.moveSlideRight=function(){T("next")};b.fn.fullpage.moveSlideLeft=function(){T("prev")};b.fn.fullpage.reBuild=function(a){w=!0;
var d=b(window).width();m=b(window).height();c.resize&&sa(m,d);b(".fp-section").each(function(){parseInt(b(this).css("padding-bottom"));parseInt(b(this).css("padding-top"));c.verticalCentered&&b(this).find(".fp-tableCell").css("height",ga(b(this))+"px");b(this).css("height",m+"px");if(c.scrollOverflow){var a=b(this).find(".fp-slide");a.length?a.each(function(){x(b(this))}):x(b(this))}a=b(this).find(".fp-slides");a.length&&v(a,a.find(".fp-slide.active"))});b(".fp-section.active").position();d=b(".fp-section.active");
d.index(".fp-section")&&l(d);w=!1;b.isFunction(c.afterResize)&&a&&c.afterResize.call(this);b.isFunction(c.afterReBuild)&&!a&&c.afterReBuild.call(this)};var t=!1,J=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),ja="ontouchstart"in window||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,g=b(this),m=b(window).height(),k=!1,w=!1,p,H,n,Y="fullpage-wrapper",h={up:!0,down:!0,left:!0,right:!0};b.fn.fullpage.setAllowScrolling(!0);c.css3&&(c.css3=ua());
b(this).length?(g.css({height:"100%",position:"relative"}),g.addClass(Y)):C("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");b(c.sectionSelector).each(function(){b(this).addClass("fp-section")});b(c.slideSelector).each(function(){b(this).addClass("fp-slide")});c.navigation&&la();b(".fp-section").each(function(a){var d=b(this),e=b(this).find(".fp-slide"),f=e.length;a||0!==b(".fp-section.active").length||b(this).addClass("active");b(this).css("height",
m+"px");(c.paddingTop||c.paddingBottom)&&b(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.sectionsColor[a]&&b(this).css("background-color",c.sectionsColor[a]);"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);if(1<f){a=100*f;var g=100/f;e.wrapAll('<div class="fp-slidesContainer" />');e.parent().wrap('<div class="fp-slides" />');b(this).find(".fp-slidesContainer").css("width",a+"%");c.controlArrows&&ka(b(this));c.slidesNavigation&&ta(b(this),
f);e.each(function(a){b(this).css("width",g+"%");c.verticalCentered&&fa(b(this))});d=d.find(".fp-slide.active");0==d.length?e.eq(0).addClass("active"):G(d)}else c.verticalCentered&&fa(b(this))}).promise().done(function(){b.fn.fullpage.setAutoScrolling(c.autoScrolling);var a=b(".fp-section.active").find(".fp-slide.active");a.length&&(0!=b(".fp-section.active").index(".fp-section")||0==b(".fp-section.active").index(".fp-section")&&0!=a.index())&&G(a);c.fixedElements&&c.css3&&b(c.fixedElements).appendTo("body");
c.navigation&&(n.css("margin-top","-"+n.height()/2+"px"),n.find("li").eq(b(".fp-section.active").index(".fp-section")).find("a").addClass("active"));c.menu&&c.css3&&b(c.menu).closest(".fullpage-wrapper").length&&b(c.menu).appendTo("body");c.scrollOverflow?("complete"===document.readyState&&M(),b(window).on("load",M)):b.isFunction(c.afterRender)&&c.afterRender.call(this);ca();a=window.location.hash.replace("#","").split("/")[0];if(a.length){var d=b('[data-anchor="'+a+'"]');!c.animateAnchor&&d.length&&
(c.autoScrolling?r(d.position().top):(r(0),B(a),b("html, body").scrollTop(d.position().top)),F(a,null),b.isFunction(c.afterLoad)&&c.afterLoad.call(this,a,d.index(".fp-section")+1),d.addClass("active").siblings().removeClass("active"))}b(window).on("load",function(){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&I(b,a)})});var O,P,D=!1;b(window).on("scroll",N);var u=0,A=0,s=0,z=0;b(window).on("hashchange",Z);b(document).keydown(function(a){if(c.keyboardScrolling&&c.autoScrolling&&
(40!=a.which&&38!=a.which||a.preventDefault(),!k))switch(a.which){case 38:case 33:b.fn.fullpage.moveSectionUp();break;case 40:case 34:b.fn.fullpage.moveSectionDown();break;case 36:b.fn.fullpage.moveTo(1);break;case 35:b.fn.fullpage.moveTo(b(".fp-section").length);break;case 37:b.fn.fullpage.moveSlideLeft();break;case 39:b.fn.fullpage.moveSlideRight()}});b(document).on("click touchstart","#fp-nav a",function(a){a.preventDefault();a=b(this).parent().index();l(b(".fp-section").eq(a))});b(document).on("click touchstart",
".fp-slidesNav a",function(a){a.preventDefault();a=b(this).closest(".fp-section").find(".fp-slides");var c=a.find(".fp-slide").eq(b(this).closest("li").index());v(a,c)});c.normalScrollElements&&(b(document).on("mouseenter",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!1)}),b(document).on("mouseleave",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!0)}));b(".fp-section").on("click touchstart",".fp-controlArrow",function(){b(this).hasClass("fp-prev")?
b.fn.fullpage.moveSlideLeft():b.fn.fullpage.moveSlideRight()});b(window).resize(ba);var K=m,da;b.fn.fullpage.destroy=function(a){b.fn.fullpage.setAutoScrolling(!1);b.fn.fullpage.setAllowScrolling(!1);b.fn.fullpage.setKeyboardScrolling(!1);b(window).off("scroll",N).off("hashchange",Z).off("resize",ba);b(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",c.normalScrollElements).off("mouseout",c.normalScrollElements);
b(".fp-section").off("click",".fp-controlArrow");a&&va()}}})(jQuery);
/*! jQuery UI - v1.9.2 - 2014-03-21
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

jQuery.effects||function(e,t){var i=e.uiBackCompat!==!1,a="ui-effects-";e.effects={effect:{}},function(t,i){function a(e,t,i){var a=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=a.floor?~~e:parseFloat(e),isNaN(e)?t.def:a.mod?(e+a.mod)%a.mod:0>e?0:e>a.max?a.max:e)}function s(e){var a=u(),s=a._rgba=[];return e=e.toLowerCase(),m(l,function(t,n){var r,o=n.re.exec(e),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=a[l](h),a[d[l].cache]=r[d[l].cache],s=a._rgba=r._rgba,!1):i}),s.length?("0,0,0,0"===s.join()&&t.extend(s,r.transparent),a):r[e]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),h=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=t.Color=function(e,i,a,s){return new t.Color.fn.parse(e,i,a,s)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=u.support={},f=t("<p>")[0],m=t.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,m(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=t.extend(u.prototype,{parse:function(n,o,h,l){if(n===i)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=i);var c=this,p=t.type(n),f=this._rgba=[];return o!==i&&(n=[n,o,h,l],p="array"),"string"===p?this.parse(s(n)||r._default):"array"===p?(m(d.rgba.props,function(e,t){f[t.idx]=a(n[t.idx],t)}),this):"object"===p?(n instanceof u?m(d,function(e,t){n[t.cache]&&(c[t.cache]=n[t.cache].slice())}):m(d,function(t,i){var s=i.cache;m(i.props,function(e,t){if(!c[s]&&i.to){if("alpha"===e||null==n[e])return;c[s]=i.to(c._rgba)}c[s][t.idx]=a(n[e],t,!0)}),c[s]&&0>e.inArray(null,c[s].slice(0,3))&&(c[s][3]=1,i.from&&(c._rgba=i.from(c[s])))}),this):i},is:function(e){var t=u(e),a=!0,s=this;return m(d,function(e,n){var r,o=t[n.cache];return o&&(r=s[n.cache]||n.to&&n.to(s._rgba)||[],m(n.props,function(e,t){return null!=o[t.idx]?a=o[t.idx]===r[t.idx]:i})),a}),a},_space:function(){var e=[],t=this;return m(d,function(i,a){t[a.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var i=u(e),s=i._space(),n=d[s],r=0===this.alpha()?u("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return i=i[n.cache],m(n.props,function(e,s){var n=s.idx,r=o[n],l=i[n],u=c[s.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=a((l-r)*t+r,s)))}),this[s](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),a=i.pop(),s=u(e)._rgba;return u(t.map(i,function(e,t){return(1-a)*s[t]+a*e}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),a=i.pop();return e&&i.push(~~(255*a)),"#"+t.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,a=e[0]/255,s=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(a,s,n),h=Math.min(a,s,n),l=o-h,u=o+h,d=.5*u;return t=h===o?0:a===o?60*(s-n)/l+360:s===o?60*(n-a)/l+120:60*(a-s)/l+240,i=0===d||1===d?d:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],a=e[2],s=e[3],r=.5>=a?a*(1+i):a+i-a*i,o=2*a-r;return[Math.round(255*n(o,r,t+1/3)),Math.round(255*n(o,r,t)),Math.round(255*n(o,r,t-1/3)),s]},m(d,function(e,s){var n=s.props,r=s.cache,o=s.to,l=s.from;u.fn[e]=function(e){if(o&&!this[r]&&(this[r]=o(this._rgba)),e===i)return this[r].slice();var s,h=t.type(e),d="array"===h||"object"===h?e:arguments,c=this[r].slice();return m(n,function(e,t){var i=d["object"===h?e:t.idx];null==i&&(i=c[t.idx]),c[t.idx]=a(i,t)}),l?(s=u(l(c)),s[r]=c,s):u(c)},m(n,function(i,a){u.fn[i]||(u.fn[i]=function(s){var n,r=t.type(s),o="alpha"===i?this._hsla?"hsla":"rgba":e,l=this[o](),u=l[a.idx];return"undefined"===r?u:("function"===r&&(s=s.call(this,u),r=t.type(s)),null==s&&a.empty?this:("string"===r&&(n=h.exec(s),n&&(s=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[a.idx]=s,this[o](l)))})})}),m(o,function(e,i){t.cssHooks[i]={set:function(e,a){var n,r,o="";if("string"!==t.type(a)||(n=s(a))){if(a=u(n||a),!p.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===o||"transparent"===o)&&r&&r.style;)try{o=t.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{e.style[i]=a}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=u(e.elem,i),e.end=u(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return m(["Top","Right","Bottom","Left"],function(i,a){t["border"+a+"Color"]=e}),t}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t,i,a=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,s={};if(a&&a.length&&a[0]&&a[a[0]])for(i=a.length;i--;)t=a[i],"string"==typeof a[t]&&(s[e.camelCase(t)]=a[t]);else for(t in a)"string"==typeof a[t]&&(s[t]=a[t]);return s}function a(t,i){var a,s,r={};for(a in i)s=i[a],t[a]!==s&&(n[a]||(e.fx.step[a]||!isNaN(parseFloat(s)))&&(r[a]=s));return r}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").andSelf():r;l=l.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),n=function(){e.each(s,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i.call(this.el[0]),this.diff=a(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),a=jQuery.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,a),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{add:t},i,a,s):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{remove:t},i,a,s):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(i,a,s,n,r){return"boolean"==typeof a||a===t?s?e.effects.animateClass.call(this,a?{add:i}:{remove:i},s,n,r):this._toggleClass(i,a):e.effects.animateClass.call(this,{toggle:i},a,s,n)},switchClass:function(t,i,a,s,n){return e.effects.animateClass.call(this,{add:i,remove:t},a,s,n)}})}(),function(){function s(t,i,a,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,a=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=a,a=i,i={}),e.isFunction(a)&&(s=a,a=null),i&&e.extend(t,i),a=a||i.duration,t.duration=e.fx.off?0:"number"==typeof a?a:a in e.fx.speeds?e.fx.speeds[a]:e.fx.speeds._default,t.complete=s||i.complete,t}function n(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?!1:i&&e.effects[t]?!1:!0}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(a+t[i],e[0].style[t[i]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(a+i[n]),s===t&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,a;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":a=0;break;case"center":a=.5;break;case"right":a=1;break;default:a=e[1]/t.width}return{x:a,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},a=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(a),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),a=t.parent(),"static"===t.css("position")?(a.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,a){i[a]=t.css(a),isNaN(parseInt(i[a],10))&&(i[a]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),a.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,a,s){return s=s||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(s[i]=n[0]*a+n[1])}),s}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(n)&&n.call(s[0]),e.isFunction(t)&&t()}var s=e(this),n=a.complete,r=a.mode;(s.is(":hidden")?"hide"===r:"show"===r)?i():o.call(s[0],a,i)}var a=s.apply(this,arguments),n=a.mode,r=a.queue,o=e.effects.effect[a.effect],h=!o&&i&&e.effects[a.effect];return e.fx.off||!o&&!h?n?this[n](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):o?r===!1?this.each(t):this.queue(r||"fx",t):h.call(this,{options:a,duration:a.duration,callback:a.complete,mode:a.mode})},_show:e.fn.show,show:function(e){if(n(e))return this._show.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(n(e))return this._hide.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(n(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(t){var i=this.css(t),a=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(a=[parseFloat(i),t])}),a}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js)
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(g){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function s(d){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}function m(d,f,g){k=!1;var e=d,h=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),h),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());g&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);u();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",s,!1),this.addEventListener("mousewheel",s,!1)):document.attachEvent("onmousewheel",s)}function v(){r=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:r+"px"});var a=r==b.outerHeight()?"none":"block";c.css({display:a})}
function u(){v();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;r>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&w||x||y||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var w,x,y,A,z,r,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.parent().find("."+a.barClass),h=b.parent().find("."+
a.railClass);v();if(f.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==g.height?b.parent().height():g.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});h.hover(function(){u()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){w=!0;u();p()},function(){w=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});v();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);