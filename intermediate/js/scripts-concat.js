/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License (LICENSE.txt).
*
* Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
* Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
* Thanks to: Seamus Leahy for adding deltaX and deltaY
*
* Version: 3.0.4
*
* Requires: 1.2.2+
*/
(function(c){function a(f){var d=f||window.event,g=[].slice.call(arguments,1),l=0,j=0,k=0;f=c.event.fix(d);f.type="mousewheel";if(f.wheelDelta){l=f.wheelDelta/120}if(f.detail){l=-f.detail/3}k=l;if(d.axis!==undefined&&d.axis===d.HORIZONTAL_AXIS){k=0;j=-1*l}if(d.wheelDeltaY!==undefined){k=d.wheelDeltaY/120}if(d.wheelDeltaX!==undefined){j=-1*d.wheelDeltaX/120}g.unshift(f,l,j,k);return c.event.handle.apply(this,g)}var b=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=b.length;d;){this.addEventListener(b[--d],a,false)}}else{this.onmousewheel=a}},teardown:function(){if(this.removeEventListener){for(var d=b.length;d;){this.removeEventListener(b[--d],a,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}})})(jQuery);window.log=function(){log.history=log.history||[];log.history.push(arguments);arguments.callee=arguments.callee.caller;if(this.console){console.log(Array.prototype.slice.call(arguments))}};(function(e){function h(){}for(var g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),f;f=g.pop();){e[f]=e[f]||h}})(window.console=window.console||{});if(!window.twttr){window.twttr={}}(function(){twttr.txt={};twttr.txt.regexen={};var b={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#32;"};twttr.txt.htmlEscape=function(i){return i&&i.replace(/[&"'><]/g,function(n){return b[n]})};function c(n,i){i=i||"";if(typeof n!=="string"){if(n.global&&i.indexOf("g")<0){i+="g"}if(n.ignoreCase&&i.indexOf("i")<0){i+="i"}if(n.multiline&&i.indexOf("m")<0){i+="m"}n=n.source}return new RegExp(n.replace(/#\{(\w+)\}/g,function(p,o){var q=twttr.txt.regexen[o]||"";if(typeof q!=="string"){q=q.source}return q}),i)}function d(n,i){return n.replace(/#\{(\w+)\}/g,function(p,o){return i[o]||""})}var h=String.fromCharCode;var e=[h(32),h(133),h(160),h(5760),h(6158),h(8232),h(8233),h(8239),h(8287),h(12288)];for(var g=9;g<=13;g++){e.push(String.fromCharCode(g))}for(var g=8192;g<=8202;g++){e.push(String.fromCharCode(g))}twttr.txt.regexen.spaces=c("["+e.join("")+"]");twttr.txt.regexen.punct=/\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~/;twttr.txt.regexen.atSigns=/[@＠]/;twttr.txt.regexen.extractMentions=c(/(^|[^a-zA-Z0-9_])(#{atSigns})([a-zA-Z0-9_]{1,20})(?=(.|$))/g);twttr.txt.regexen.extractReply=c(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);twttr.txt.regexen.listName=/[a-zA-Z][a-zA-Z0-9_\-\u0080-\u00ff]{0,24}/;twttr.txt.regexen.latinAccentChars=c("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþ\\303\\277");twttr.txt.regexen.latenAccents=c(/[#{latinAccentChars}]+/);twttr.txt.regexen.endScreenNameMatch=c(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/);twttr.txt.regexen.hashtagCharacters=c(/[a-z0-9_#{latinAccentChars}]/i);twttr.txt.regexen.autoLinkHashtags=c(/(^|[^0-9A-Z&\/\?]+)(#|＃)([0-9A-Z_]*[A-Z_]+#{hashtagCharacters}*)/gi);twttr.txt.regexen.autoLinkUsernamesOrLists=/(^|[^a-zA-Z0-9_]|RT:?)([@＠]+)([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?/g;twttr.txt.regexen.autoLinkEmoticon=/(8\-\#|8\-E|\+\-\(|\`\@|\`O|\&lt;\|:~\(|\}:o\{|:\-\[|\&gt;o\&lt;|X\-\/|\[:-\]\-I\-|\/\/\/\/Ö\\\\\\\\|\(\|:\|\/\)|∑:\*\)|\( \| \))/g;twttr.txt.regexen.validPrecedingChars=c(/(?:[^-\/"':!=A-Za-z0-9_@＠]|^|\:)/);twttr.txt.regexen.validDomain=c(/(?:[^#{punct}\s][\.-](?=[^#{punct}\s])|[^#{punct}\s]){1,}\.[a-z]{2,}(?::[0-9]+)?/i);twttr.txt.regexen.validGeneralUrlPathChars=/[a-z0-9!\*';:=\+\$\/%#\[\]\-_,~]/i;twttr.txt.regexen.wikipediaDisambiguation=c(/(?:\(#{validGeneralUrlPathChars}+\))/i);
twttr.txt.regexen.validUrlPathChars=c(/(?:#{wikipediaDisambiguation}|@#{validGeneralUrlPathChars}+\/|[\.,]?#{validGeneralUrlPathChars})/i);twttr.txt.regexen.validUrlPathEndingChars=c(/(?:[a-z0-9=_#\/]|#{wikipediaDisambiguation})/i);twttr.txt.regexen.validUrlQueryChars=/[a-z0-9!\*'\(\);:&=\+\$\/%#\[\]\-_\.,~]/i;twttr.txt.regexen.validUrlQueryEndingChars=/[a-z0-9_&=#\/]/i;twttr.txt.regexen.validUrl=c("((#{validPrecedingChars})((https?:\\/\\/)(#{validDomain})(\\/(?:#{validUrlPathChars}+#{validUrlPathEndingChars}|#{validUrlPathChars}+#{validUrlPathEndingChars}?|#{validUrlPathEndingChars})?)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))","gi");var a="tweet-url";var f="list-slug";var m="username";var k="hashtag";var l=' rel="nofollow"';function j(p){var n={};for(var i in p){if(p.hasOwnProperty(i)){n[i]=p[i]}}return n}twttr.txt.autoLink=function(n,i){i=j(i||{});return twttr.txt.autoLinkUsernamesOrLists(twttr.txt.autoLinkUrlsCustom(twttr.txt.autoLinkHashtags(n,i),i),i)};twttr.txt.autoLinkUsernamesOrLists=function(s,q){q=j(q||{});q.urlClass=q.urlClass||a;q.listClass=q.listClass||f;q.usernameClass=q.usernameClass||m;q.usernameUrlBase=q.usernameUrlBase||"http://twitter.com/";q.listUrlBase=q.listUrlBase||"http://twitter.com/";if(!q.suppressNoFollow){var i=l}var r="",p=twttr.txt.splitTags(s);for(var o=0;o<p.length;o++){var n=p[o];if(o!==0){r+=((o%2===0)?">":"<")}if(o%4!==0){r+=n}else{r+=n.replace(twttr.txt.regexen.autoLinkUsernamesOrLists,function(z,C,v,y,t,x,D){var u=D.slice(x+z.length);var B={before:C,at:v,user:twttr.txt.htmlEscape(y),slashListname:twttr.txt.htmlEscape(t),extraHtml:i,chunk:twttr.txt.htmlEscape(D)};for(var w in q){if(q.hasOwnProperty(w)){B[w]=q[w]}}if(t&&!q.suppressLists){var A=B.chunk=d("#{user}#{slashListname}",B);B.list=twttr.txt.htmlEscape(A.toLowerCase());return d('#{before}#{at}<a class="#{urlClass} #{listClass}" href="#{listUrlBase}#{list}"#{extraHtml}>#{chunk}</a>',B)}else{if(u&&u.match(twttr.txt.regexen.endScreenNameMatch)){return z}else{B.chunk=twttr.txt.htmlEscape(y);B.dataScreenName=!q.suppressDataScreenName?d('data-screen-name="#{chunk}" ',B):"";return d('#{before}#{at}<a class="#{urlClass} #{usernameClass}" #{dataScreenName}href="#{usernameUrlBase}#{chunk}"#{extraHtml}>#{chunk}</a>',B)}}})}}return r};twttr.txt.autoLinkHashtags=function(o,n){n=j(n||{});n.urlClass=n.urlClass||a;n.hashtagClass=n.hashtagClass||k;n.hashtagUrlBase=n.hashtagUrlBase||"http://twitter.com/search?q=%23";if(!n.suppressNoFollow){var i=l}return o.replace(twttr.txt.regexen.autoLinkHashtags,function(q,r,s,u){var t={before:r,hash:twttr.txt.htmlEscape(s),text:twttr.txt.htmlEscape(u),extraHtml:i};for(var p in n){if(n.hasOwnProperty(p)){t[p]=n[p]}}return d('#{before}<a href="#{hashtagUrlBase}#{text}" title="##{text}" class="#{urlClass} #{hashtagClass}"#{extraHtml}>#{hash}#{text}</a>',t)})};twttr.txt.autoLinkUrlsCustom=function(n,i){i=j(i||{});if(!i.suppressNoFollow){i.rel="nofollow"}if(i.urlClass){i["class"]=i.urlClass;delete i.urlClass}delete i.suppressNoFollow;delete i.suppressDataScreenName;return n.replace(twttr.txt.regexen.validUrl,function(u,x,w,p,y,t,z,o){var r;if(y){var q="";for(var s in i){q+=d(' #{k}="#{v}" ',{k:s,v:i[s].toString().replace(/"/,"&quot;").replace(/</,"&lt;").replace(/>/,"&gt;")})}i.htmlAttrs||"";var v={before:w,htmlAttrs:q,url:twttr.txt.htmlEscape(p)};return d('#{before}<a href="#{url}"#{htmlAttrs}>#{url}</a>',v)}else{return x}})};twttr.txt.extractMentions=function(q){var r=[],n=twttr.txt.extractMentionsWithIndices(q);for(var p=0;p<n.length;p++){var o=n[p].screenName;r.push(o)}return r};twttr.txt.extractMentionsWithIndices=function(o){if(!o){return[]}var n=[],i=0;o.replace(twttr.txt.regexen.extractMentions,function(p,t,s,q,u){if(!u.match(twttr.txt.regexen.endScreenNameMatch)){var r=o.indexOf(s+q,i);i=r+q.length+1;n.push({screenName:q,indices:[r,i]})}});return n};twttr.txt.extractReplies=function(n){if(!n){return null}var i=n.match(twttr.txt.regexen.extractReply);if(!i){return null}return i[1]};twttr.txt.extractUrls=function(q){var p=[],n=twttr.txt.extractUrlsWithIndices(q);
for(var o=0;o<n.length;o++){p.push(n[o].url)}return p};twttr.txt.extractUrlsWithIndices=function(o){if(!o){return[]}var n=[],i=0;o.replace(twttr.txt.regexen.validUrl,function(u,x,w,p,y,r,z,v){var q;if(y){var s=o.indexOf(p,t),t=s+p.length;n.push({url:p,indices:[s,t]})}});return n};twttr.txt.extractHashtags=function(q){var p=[],o=twttr.txt.extractHashtagsWithIndices(q);for(var n=0;n<o.length;n++){p.push(o[n].hashtag)}return p};twttr.txt.extractHashtagsWithIndices=function(o){if(!o){return[]}var n=[],i=0;o.replace(twttr.txt.regexen.autoLinkHashtags,function(p,s,t,r){var q=o.indexOf(t+r,i);i=q+r.length+1;n.push({hashtag:r,indices:[q,i]})});return n};twttr.txt.splitTags=function(t){var n=t.split("<"),s,r=[],q;for(var p=0;p<n.length;p+=1){q=n[p];if(!q){r.push("")}else{s=q.split(">");for(var o=0;o<s.length;o+=1){r.push(s[o])}}}return r};twttr.txt.hitHighlight=function(y,A,q){var w="em";A=A||[];q=q||{};if(A.length===0){return y}var p=q.tag||w,z=["<"+p+">","</"+p+">"],x=twttr.txt.splitTags(y),B,E,D,t="",n=0,u=x[0],v=0,o=0,I=false,r=u,C=[],s,F,J,H,G;for(E=0;E<A.length;E+=1){for(D=0;D<A[E].length;D+=1){C.push(A[E][D])}}for(s=0;s<C.length;s+=1){F=C[s];J=z[s%2];H=false;while(u!=null&&F>=v+u.length){t+=r.slice(o);if(I&&F===v+r.length){t+=J;H=true}if(x[n+1]){t+="<"+x[n+1]+">"}v+=r.length;o=0;n+=2;u=x[n];r=u;I=false}if(!H&&u!=null){G=F-v;t+=r.slice(o,G)+J;o=G;if(s%2===0){I=true}else{I=false}}else{if(!H){H=true;t+=J}}}if(u!=null){if(o<r.length){t+=r.slice(o)}for(s=n+1;s<x.length;s+=1){t+=(s%2===0?x[s]:"<"+x[s]+">")}}return t}}());(function(aG){var ay,aq,ap,aD,aj,aA,ai,ax,am,al,au=0,aE={},aw=[],av=0,aF={},az=[],ag=null,ao=new Image,ae=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,k=/[^\.]\.(swf)\s*$/i,ad,ac=1,an=0,ar="",at,aB,aC=false,ak=aG.extend(aG("<div/>")[0],{prop:0}),ab=aG.browser.msie&&aG.browser.version<7&&!window.XMLHttpRequest,aa=function(){aq.hide();ao.onerror=ao.onload=null;ag&&ag.abort();ay.empty()},R=function(){if(false===aE.onError(aw,au,aE)){aq.hide();aC=false}else{aE.titleShow=false;aE.width="auto";aE.height="auto";ay.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');ah()}},af=function(){var d=aw[au],j,f,e,i,h,b;aa();aE=aG.extend({},aG.fn.fancybox.defaults,typeof aG(d).data("fancybox")=="undefined"?aE:aG(d).data("fancybox"));b=aE.onStart(aw,au,aE);if(b===false){aC=false}else{if(typeof b=="object"){aE=aG.extend(aE,b)}e=aE.title||(d.nodeName?aG(d).attr("title"):d.title)||"";if(d.nodeName&&!aE.orig){aE.orig=aG(d).children("img:first").length?aG(d).children("img:first"):aG(d)}if(e===""&&aE.orig&&aE.titleFromAlt){e=aE.orig.attr("alt")}j=aE.href||(d.nodeName?aG(d).attr("href"):d.href)||null;if(/^(?:javascript)/i.test(j)||j=="#"){j=null}if(aE.type){f=aE.type;if(!j){j=aE.content}}else{if(aE.content){f="html"}else{if(j){f=j.match(ae)?"image":j.match(k)?"swf":aG(d).hasClass("iframe")?"iframe":j.indexOf("#")===0?"inline":"ajax"}}}if(f){if(f=="inline"){d=j.substr(j.indexOf("#"));f=aG(d).length>0?"inline":"ajax"}aE.type=f;aE.href=j;aE.title=e;if(aE.autoDimensions){if(aE.type=="html"||aE.type=="inline"||aE.type=="ajax"){aE.width="auto";aE.height="auto"}else{aE.autoDimensions=false}}if(aE.modal){aE.overlayShow=true;aE.hideOnOverlayClick=false;aE.hideOnContentClick=false;aE.enableEscapeButton=false;aE.showCloseButton=false}aE.padding=parseInt(aE.padding,10);aE.margin=parseInt(aE.margin,10);ay.css("padding",aE.padding+aE.margin);aG(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){aG(this).replaceWith(aA.children())});switch(f){case"html":ay.html(aE.content);ah();break;case"inline":if(aG(d).parent().is("#fancybox-content")===true){aC=false;break}aG('<div class="fancybox-inline-tmp" />').hide().insertBefore(aG(d)).bind("fancybox-cleanup",function(){aG(this).replaceWith(aA.children())}).bind("fancybox-cancel",function(){aG(this).replaceWith(ay.children())});aG(d).appendTo(ay);ah();break;case"image":aC=false;aG.fancybox.showActivity();ao=new Image;ao.onerror=function(){R()};
ao.onload=function(){aC=true;ao.onerror=ao.onload=null;aE.width=ao.width;aE.height=ao.height;aG("<img />").attr({id:"fancybox-img",src:ao.src,alt:aE.title}).appendTo(ay);P()};ao.src=j;break;case"swf":aE.scrolling="no";i='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+aE.width+'" height="'+aE.height+'"><param name="movie" value="'+j+'"></param>';h="";aG.each(aE.swf,function(l,m){i+='<param name="'+l+'" value="'+m+'"></param>';h+=" "+l+'="'+m+'"'});i+='<embed src="'+j+'" type="application/x-shockwave-flash" width="'+aE.width+'" height="'+aE.height+'"'+h+"></embed></object>";ay.html(i);ah();break;case"ajax":aC=false;aG.fancybox.showActivity();aE.ajax.win=aE.ajax.success;ag=aG.ajax(aG.extend({},aE.ajax,{url:j,data:aE.ajax.data||{},error:function(l){l.status>0&&R()},success:function(l,m,n){if((typeof n=="object"?n:ag).status==200){if(typeof aE.ajax.win=="function"){b=aE.ajax.win(j,l,m,n);if(b===false){aq.hide();return}else{if(typeof b=="string"||typeof b=="object"){l=b}}}ay.html(l);ah()}}}));break;case"iframe":P()}}else{R()}}},ah=function(){var b=aE.width,d=aE.height;b=b.toString().indexOf("%")>-1?parseInt((aG(window).width()-aE.margin*2)*parseFloat(b)/100,10)+"px":b=="auto"?"auto":b+"px";d=d.toString().indexOf("%")>-1?parseInt((aG(window).height()-aE.margin*2)*parseFloat(d)/100,10)+"px":d=="auto"?"auto":d+"px";ay.wrapInner('<div style="width:'+b+";height:"+d+";overflow: "+(aE.scrolling=="auto"?"auto":aE.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');aE.width=ay.width();aE.height=ay.height();P()},P=function(){var b,d;aq.hide();if(aD.is(":visible")&&false===aF.onCleanup(az,av,aF)){aG.event.trigger("fancybox-cancel");aC=false}else{aC=true;aG(aA.add(ap)).unbind();aG(window).unbind("resize.fb scroll.fb");aG(document).unbind("keydown.fb");aD.is(":visible")&&aF.titlePosition!=="outside"&&aD.css("height",aD.height());az=aw;av=au;aF=aE;if(aF.overlayShow){ap.css({"background-color":aF.overlayColor,opacity:aF.overlayOpacity,cursor:aF.hideOnOverlayClick?"pointer":"auto",height:aG(document).height()});if(!ap.is(":visible")){ab&&aG("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});ap.show()}}else{ap.hide()}aB=g();ar=aF.title||"";an=0;ax.empty().removeAttr("style").removeClass();if(aF.titleShow!==false){if(aG.isFunction(aF.titleFormat)){b=aF.titleFormat(ar,az,av,aF)}else{b=ar&&ar.length?aF.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+ar+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+aF.titlePosition+'">'+ar+"</div>":false}ar=b;if(!(!ar||ar==="")){ax.addClass("fancybox-title-"+aF.titlePosition).html(ar).appendTo("body").show();switch(aF.titlePosition){case"inside":ax.css({width:aB.width-aF.padding*2,marginLeft:aF.padding,marginRight:aF.padding});an=ax.outerHeight(true);ax.appendTo(aj);aB.height+=an;break;case"over":ax.css({marginLeft:aF.padding,width:aB.width-aF.padding*2,bottom:aF.padding}).appendTo(aj);break;case"float":ax.css("left",parseInt((ax.width()-aB.width-40)/2,10)*-1).appendTo(aD);break;default:ax.css({width:aB.width-aF.padding*2,paddingLeft:aF.padding,paddingRight:aF.padding}).appendTo(aD)}}}ax.hide();if(aD.is(":visible")){aG(ai.add(am).add(al)).hide();b=aD.position();at={top:b.top,left:b.left,width:aD.width(),height:aD.height()};d=at.width==aB.width&&at.height==aB.height;aA.fadeTo(aF.changeFade,0.3,function(){var e=function(){aA.html(ay.contents()).fadeTo(aF.changeFade,1,H)};aG.event.trigger("fancybox-change");aA.empty().removeAttr("filter").css({"border-width":aF.padding,width:aB.width-aF.padding*2,height:aE.autoDimensions?"auto":aB.height-an-aF.padding*2});if(d){e()}else{ak.prop=0;aG(ak).animate({prop:1},{duration:aF.changeSpeed,easing:aF.easingChange,step:C,complete:e})}})}else{aD.removeAttr("style");
aA.css("border-width",aF.padding);if(aF.transitionIn=="elastic"){at=w();aA.html(ay.contents());aD.show();if(aF.opacity){aB.opacity=0}ak.prop=0;aG(ak).animate({prop:1},{duration:aF.speedIn,easing:aF.easingIn,step:C,complete:H})}else{aF.titlePosition=="inside"&&an>0&&ax.show();aA.css({width:aB.width-aF.padding*2,height:aE.autoDimensions?"auto":aB.height-an-aF.padding*2}).html(ay.contents());aD.css(aB).fadeIn(aF.transitionIn=="none"?0:aF.speedIn,H)}}}},c=function(){if(aF.enableEscapeButton||aF.enableKeyboardNav){aG(document).bind("keydown.fb",function(b){if(b.keyCode==27&&aF.enableEscapeButton){b.preventDefault();aG.fancybox.close()}else{if((b.keyCode==37||b.keyCode==39)&&aF.enableKeyboardNav&&b.target.tagName!=="INPUT"&&b.target.tagName!=="TEXTAREA"&&b.target.tagName!=="SELECT"){b.preventDefault();aG.fancybox[b.keyCode==37?"prev":"next"]()}}})}if(aF.showNavArrows){if(aF.cyclic&&az.length>1||av!==0){am.show()}if(aF.cyclic&&az.length>1||av!=az.length-1){al.show()}}else{am.hide();al.hide()}},H=function(){if(!aG.support.opacity){aA.get(0).style.removeAttribute("filter");aD.get(0).style.removeAttribute("filter")}aE.autoDimensions&&aA.css("height","auto");aD.css("height","auto");ar&&ar.length&&ax.show();aF.showCloseButton&&ai.show();c();aF.hideOnContentClick&&aA.bind("click",aG.fancybox.close);aF.hideOnOverlayClick&&ap.bind("click",aG.fancybox.close);aG(window).bind("resize.fb",aG.fancybox.resize);aF.centerOnScroll&&aG(window).bind("scroll.fb",aG.fancybox.center);if(aF.type=="iframe"){aG('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(aG.browser.msie?'allowtransparency="true""':"")+' scrolling="'+aE.scrolling+'" src="'+aF.href+'"></iframe>').appendTo(aA)}aD.show();aC=false;aG.fancybox.center();aF.onComplete(az,av,aF);var b,d;if(az.length-1>av){b=az[av+1].href;if(typeof b!=="undefined"&&b.match(ae)){d=new Image;d.src=b}}if(av>0){b=az[av-1].href;if(typeof b!=="undefined"&&b.match(ae)){d=new Image;d.src=b}}},C=function(b){var d={width:parseInt(at.width+(aB.width-at.width)*b,10),height:parseInt(at.height+(aB.height-at.height)*b,10),top:parseInt(at.top+(aB.top-at.top)*b,10),left:parseInt(at.left+(aB.left-at.left)*b,10)};if(typeof aB.opacity!=="undefined"){d.opacity=b<0.5?0.5:b}aD.css(d);aA.css({width:d.width-aF.padding*2,height:d.height-an*b-aF.padding*2})},x=function(){return[aG(window).width()-aF.margin*2,aG(window).height()-aF.margin*2,aG(document).scrollLeft()+aF.margin,aG(document).scrollTop()+aF.margin]},g=function(){var b=x(),f={},e=aF.autoScale,d=aF.padding*2;f.width=aF.width.toString().indexOf("%")>-1?parseInt(b[0]*parseFloat(aF.width)/100,10):aF.width+d;f.height=aF.height.toString().indexOf("%")>-1?parseInt(b[1]*parseFloat(aF.height)/100,10):aF.height+d;if(e&&(f.width>b[0]||f.height>b[1])){if(aE.type=="image"||aE.type=="swf"){e=aF.width/aF.height;if(f.width>b[0]){f.width=b[0];f.height=parseInt((f.width-d)/e+d,10)}if(f.height>b[1]){f.height=b[1];f.width=parseInt((f.height-d)*e+d,10)}}else{f.width=Math.min(f.width,b[0]);f.height=Math.min(f.height,b[1])}}f.top=parseInt(Math.max(b[3]-20,b[3]+(b[1]-f.height-40)*0.5),10);f.left=parseInt(Math.max(b[2]-20,b[2]+(b[0]-f.width-40)*0.5),10);return f},w=function(){var b=aE.orig?aG(aE.orig):false,d={};if(b&&b.length){d=b.offset();d.top+=parseInt(b.css("paddingTop"),10)||0;d.left+=parseInt(b.css("paddingLeft"),10)||0;d.top+=parseInt(b.css("border-top-width"),10)||0;d.left+=parseInt(b.css("border-left-width"),10)||0;d.width=b.width();d.height=b.height();d={width:d.width+aF.padding*2,height:d.height+aF.padding*2,top:d.top-aF.padding-20,left:d.left-aF.padding-20}}else{b=x();d={width:aF.padding*2,height:aF.padding*2,top:parseInt(b[3]+b[1]*0.5,10),left:parseInt(b[2]+b[0]*0.5,10)}}return d},a=function(){if(aq.is(":visible")){aG("div",aq).css("top",ac*-40+"px");ac=(ac+1)%12}else{clearInterval(ad)}};aG.fn.fancybox=function(b){if(!aG(this).length){return this}aG(this).data("fancybox",aG.extend({},b,aG.metadata?aG(this).metadata():{})).unbind("click.fb").bind("click.fb",function(d){d.preventDefault();
if(!aC){aC=true;aG(this).blur();aw=[];au=0;d=aG(this).attr("rel")||"";if(!d||d==""||d==="nofollow"){aw.push(this)}else{aw=aG("a[rel="+d+"], area[rel="+d+"]");au=aw.index(this)}af()}});return this};aG.fancybox=function(b,h){var e;if(!aC){aC=true;e=typeof h!=="undefined"?h:{};aw=[];au=parseInt(e.index,10)||0;if(aG.isArray(b)){for(var d=0,f=b.length;d<f;d++){if(typeof b[d]=="object"){aG(b[d]).data("fancybox",aG.extend({},e,b[d]))}else{b[d]=aG({}).data("fancybox",aG.extend({content:b[d]},e))}}aw=jQuery.merge(aw,b)}else{if(typeof b=="object"){aG(b).data("fancybox",aG.extend({},e,b))}else{b=aG({}).data("fancybox",aG.extend({content:b},e))}aw.push(b)}if(au>aw.length||au<0){au=0}af()}};aG.fancybox.showActivity=function(){clearInterval(ad);aq.show();ad=setInterval(a,66)};aG.fancybox.hideActivity=function(){aq.hide()};aG.fancybox.next=function(){return aG.fancybox.pos(av+1)};aG.fancybox.prev=function(){return aG.fancybox.pos(av-1)};aG.fancybox.pos=function(b){if(!aC){b=parseInt(b);aw=az;if(b>-1&&b<az.length){au=b;af()}else{if(aF.cyclic&&az.length>1){au=b>=az.length?0:az.length-1;af()}}}};aG.fancybox.cancel=function(){if(!aC){aC=true;aG.event.trigger("fancybox-cancel");aa();aE.onCancel(aw,au,aE);aC=false}};aG.fancybox.close=function(){function b(){ap.fadeOut("fast");ax.empty().hide();aD.hide();aG.event.trigger("fancybox-cleanup");aA.empty();aF.onClosed(az,av,aF);az=aE=[];av=au=0;aF=aE={};aC=false}if(!(aC||aD.is(":hidden"))){aC=true;if(aF&&false===aF.onCleanup(az,av,aF)){aC=false}else{aa();aG(ai.add(am).add(al)).hide();aG(aA.add(ap)).unbind();aG(window).unbind("resize.fb scroll.fb");aG(document).unbind("keydown.fb");aA.find("iframe").attr("src",ab&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");aF.titlePosition!=="inside"&&ax.empty();aD.stop();if(aF.transitionOut=="elastic"){at=w();var d=aD.position();aB={top:d.top,left:d.left,width:aD.width(),height:aD.height()};if(aF.opacity){aB.opacity=1}ax.empty().hide();ak.prop=1;aG(ak).animate({prop:0},{duration:aF.speedOut,easing:aF.easingOut,step:C,complete:b})}else{aD.fadeOut(aF.transitionOut=="none"?0:aF.speedOut,b)}}}};aG.fancybox.resize=function(){ap.is(":visible")&&ap.css("height",aG(document).height());aG.fancybox.center(true)};aG.fancybox.center=function(b){var e,d;if(!aC){d=b===true?1:0;e=x();!d&&(aD.width()>e[0]||aD.height()>e[1])||aD.stop().animate({top:parseInt(Math.max(e[3]-20,e[3]+(e[1]-aA.height()-40)*0.5-aF.padding)),left:parseInt(Math.max(e[2]-20,e[2]+(e[0]-aA.width()-40)*0.5-aF.padding))},typeof b=="number"?b:200)}};aG.fancybox.init=function(){if(!aG("#fancybox-wrap").length){aG("body").append(ay=aG('<div id="fancybox-tmp"></div>'),aq=aG('<div id="fancybox-loading"><div></div></div>'),ap=aG('<div id="fancybox-overlay"></div>'),aD=aG('<div id="fancybox-wrap"></div>'));aj=aG('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(aD);aj.append(aA=aG('<div id="fancybox-content"></div>'),ai=aG('<a id="fancybox-close"></a>'),ax=aG('<div id="fancybox-title"></div>'),am=aG('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),al=aG('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));ai.click(aG.fancybox.close);aq.click(aG.fancybox.cancel);am.click(function(b){b.preventDefault();aG.fancybox.prev()});al.click(function(b){b.preventDefault();aG.fancybox.next()});aG.fn.mousewheel&&aD.bind("mousewheel.fb",function(b,d){if(aC){b.preventDefault()}else{if(aG(b.target).get(0).clientHeight==0||aG(b.target).get(0).scrollHeight===aG(b.target).get(0).clientHeight){b.preventDefault();
aG.fancybox[d>0?"prev":"next"]()}}});aG.support.opacity||aD.addClass("fancybox-ie");if(ab){aq.addClass("fancybox-ie6");aD.addClass("fancybox-ie6");aG('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(aj)}}};aG.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};aG(document).ready(function(){aG.fancybox.init()})})(jQuery);!function(e,f,g,b){var h=function(){if(e(f).width()<481){return true}else{return false}};!function(){var k,j;e("nav a").each(function(){k=e(this);if(k.attr("target")!="_blank"){j=k.attr("href").replace(e("#head").find("a").attr("href"),"");k.attr("href","#!/"+j)}})}();function a(){if(h()){var j,l,k=e("<ul />",{"class":"menu",html:k});e("#main").find("section").each(function(m){j=e(this);l=j.find("h2 a").html();sectionClass=j.attr("class");e("<li />",{id:"menu-li-"+m,html:'<a href="#!/'+sectionClass+'">'+l+"</a>"}).appendTo(k)});k.prependTo("#main");e("<span />",{"class":"scroll-next",html:"&darr;"}).insertAfter(e("#main").find("section").not(":last-child").find("h2")).click(function(){log(e(this).closest("section").next().offset().top);e("html,body").animate({scrollTop:e(this).closest("section").next().offset().top})});e("<span />",{"class":"scroll-top",html:"&uarr;"}).insertAfter(e("#main").find("section").last().find("h2")).click(function(){e("html,body").animate({scrollTop:0})});e(".projects").find("li").click(function(){e(this).find(".back").animat({opacity:"toggle"})})}}a();function c(k){k=new Date(k);var j="";j+=(parseInt(k.getDate())<=9)?"0"+k.getDate():k.getDate();j+=".";j+=((parseInt(k.getMonth())+1)<=9)?"0"+(parseInt(k.getMonth())+1):(parseInt(k.getMonth())+1);j+=".";j+=k.getFullYear();j+=" - ";j+=k.getHours()+":"+((k.getMinutes()<=9)?"0"+k.getMinutes():k.getMinutes());return j}e.get("http://blog.pagetimer.de/api/read/json?num=15&filter=text",function(k){log("Pagetimer-Blog",k);e(".pagetimer .feed ul").html("");var j="";e.each(k.posts,function(l,m){j=m["regular-body"].substr(0,100);e(".pagetimer .feed ul").append('<li style="display: none;"><h4><a href="'+m["url-with-slug"]+'" target="_blank">'+m["regular-title"]+"</a></h4><span>"+twttr.txt.autoLink(j)+' <a href="'+m["url-with-slug"]+'" target="_blank">read more&hellip;</a><a href="'+m["url-with-slug"]+'" target="_blank" class="date">'+c(m.date)+"</a></li>");e(".pagetimer .feed ul").find("li:last").delay(l*100).animate({opacity:"toggle"})})},"jsonp");e.get("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=drublic&count=10&include_rts=1",function(j){log(j);e(".twitter .feed ul").html("");e.each(j,function(k,l){e(".twitter .feed ul").append('<li style="display: none;">'+twttr.txt.autoLink(l.text)+' <a href="http://twitter.com/drublic/status/'+l.id_str+'" target="_blank" class="date">'+c(l.created_at)+"</a></li>");e(".twitter .feed ul").find("li:last").delay(k*100).animate({opacity:"toggle"})})},"jsonp");e.get("http://drublic.tumblr.com/api/read/json?num=5&filter=text",function(l){log(l);e(".tumblr .feed ul").html("");var j="",k="";e.each(l.posts,function(n,o){k+='<li style="display: none;">';if(o["regular-body"]!==b){k+='<h4><a href="'+o["url-with-slug"]+'" target="_blank">'+o["regular-title"]+"</a></h4>";j=o["regular-body"].substr(0,100);k+="<span>"+twttr.txt.autoLink(j)+' <a href="'+o["url-with-slug"]+'" target="_blank">read more&hellip;</a>'}else{if(o["photo-url-500"]!==b){var m=o["photo-url-250"];if(e(".tumblr .feed").width()>250){m=o["photo-url-500"]}k+='<a href="'+o["photo-url-500"]+'" rel="group_tumblr" title="'+o["photo-caption"]+'" class="fancybox" target="_black"><img src="'+m+'" alt="'+o["photo-caption"]+'" style="opacity: 0;"></a>'}else{if(o.type==="video"){k+=o["video-player"]}else{return}}}k+='<a href="'+o["url-with-slug"]+'" target="_blank" class="date">'+c(o.date)+"</a></li>"});e(".tumblr .feed ul").append(k);e(".tumblr .feed img").load(function(){e(this).animate({opacity:"1"})});if(!h()){e(".tumblr .fancybox").fancybox()}else{e(".tumblr .fancybox").click(function(m){m.preventDefault()})}e(".tumblr .feed li").each(function(m){e(this).delay(m*100).animate({opacity:"toggle"})})},"jsonp");if(!h()){e(".projects .front").fancybox({width:400,height:"auto",autoScale:false,autoDimensions:false})}else{e(".projects .front").fancybox()}!function(){e(".contact").find("form").attr("action","#!/"+e(".contact").find("form").attr("action")).submit(function(j){j.preventDefault();
var k={};e(this).find("input, textarea").each(function(){e(this).removeClass("invalid");if(e(this).val()!=""){k[e(this).attr("name")]=e(this).val()}else{k[e(this).attr("name")]=e(this).val();e(this).addClass("invalid")}});e.post("ajax/send.php",k,function(l){log(l);if(l.error===b){e("body").append('<div class="message">'+l.msg+"</div>");e(".contact").find("form").find("input, textarea").each(function(){e(this).removeClass("invalid").attr("disabled",true);if(e(this).attr("type")!=="submit"){e(this).val("")}})}else{e("body").append('<div class="message">An error occured! Please resolve it!</div>')}setTimeout(function(){if(e(".message").size()>0){e(".message").fadeOut(function(){e(this).remove()})}},5000)},"json")})}();var d="";e("nav").find("li:first-child").addClass("active");!function i(n){if(n!==f.location.hash){n=f.location.hash;e("nav").find(".active").removeClass("active");e("nav").find('a[href$="'+n.split(/\#\!\//)[1]+'"]').parent().addClass("active");if(n==="#!/home"){e(".imprint, .contact").fadeOut(function(){var o=0;!function p(){if(o<e("#main").find("section").size()){e("#main").find("section").eq(o).show().animate({top:0});o++;setTimeout(p,100)}}();if(h()){e(".menu").fadeIn()}})}else{if(n==="#!/imprint"){var k=0;e(".contact").fadeOut();!function m(){if(k<e("#main").find("section").size()){e("#main").find("section").eq(k).animate({top:e("#main").height()},function(){e(this).fadeOut()});k++;setTimeout(m,100)}else{e(".imprint").delay(500).fadeIn()}}();if(h()){e(".menu").fadeOut()}}else{if(n==="#!/contact"){var k=0;e(".imprint").fadeOut();!function m(){if(k<e("#main").find("section").size()){e("#main").find("section").eq(k).animate({top:e("#main").height()},function(){e(this).fadeOut()});k++;setTimeout(m,100)}else{e(".contact").delay(500).fadeIn()}}();if(h()){e(".menu").fadeOut()}}else{var l="."+n.split(/\#\!\//)[1];if(e(l).size()>0){e("html, body").animate({scrollTop:e(l).offset().top})}e("nav").find("li:first-child").addClass("active")}}}if(h()){var j=e("nav .active").clone();e("nav .active").remove();e("nav li").eq(0).after(j)}}setTimeout(function(){i(n)},100)}(d);e(f).resize(function(){if(!h()){if(e(".menu").size()>0){e(".menu, .scroll-next, .scroll-top").remove()}}else{if(e(".menu").size()<1){a()}}})}(jQuery,window,document);