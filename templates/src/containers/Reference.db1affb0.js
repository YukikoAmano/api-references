webpackJsonp([0],{150:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToComponent=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(0),o=r(l),c=n(17),u=n(151),i=r(u);t.htmlToComponent=function(e,t){return(0,i.default)(e.replace(/&lt;/g,"&amp;lt;"),{transform:{a:function(e){return o.default.createElement(c.Link,a({},e,{to:e.href},e.href.match(/^https?:\/\//)?{rel:"noopener",target:"_blank"}:{}))},h1:function(e){return o.default.createElement("h1",a({},e,{id:(""+e.children).replace(/\s+/,"-")}))},h2:function(e){return o.default.createElement("h2",a({},e,{id:(""+e.children).replace(/\s+/,"-")}))},h3:function(e){return o.default.createElement("h3",a({},e,{id:(""+e.children).replace(/\s+/,"-")}))},"experimental-note":t}})}},151:function(e,t,n){!function(t,r){e.exports=r(n(0))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,n){return n.toUpperCase()})}function n(e){var n={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var r,a=e.split(":");if(a.length>1){var l=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(a[0].trim()),o=(r=a.slice(1).join(":").trim(),/^\d+$/.test(r)?Number(r):r.replace(/'/g,'"'));n[l]=o}}),n}function r(u,i,s){var f,m=s.transform._;if(u.nodeType===l.COMMENT)return null;if(u.nodeType===l.TEXT){var d=(f=u.textContent,c.innerHTML=f,c.textContent);return m?m(d):d}for(var p=u.tagName.toLowerCase(),h=s.transform[p],g={},v=0;v<u.attributes.length;v++){var E=u.attributes[v].name,y=u.attributes[v].value;g[E]=y}g.key=i.toString();for(var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];return Object.keys(e).reduce(function(l,o){if(/^on.*/.test(o))return l;var c=o;/^(data|aria)-/.test(o)||0===r.filter(function(e){return e instanceof RegExp?e.test(o):e===o}).length&&(c=t(o));var u=a[c]||c;return l[u]="style"===u?n(e.style):e[o],l},{})}(g,s.preserveAttributes),b=[],_=0;_<u.childNodes.length;_++){var x=u.childNodes[_],N=i+"."+_;if(!(o.indexOf(p)>-1&&x.nodeType===l.TEXT&&(x.textContent=x.textContent.trim(),""===x.textContent))){var M=r(x,N,s);null!==M&&b.push(M)}}return"style"!==p||h||m?(0===b.length&&(b=null),h?e.createElement(h,T,b):m?m(p,T,b):e.createElement(p,T,b)):(T.dangerouslySetInnerHTML={__html:b[0]},e.createElement(p,T,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var a={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},l={ELEMENT:1,TEXT:3,COMMENT:8},o=["table","tbody","thead","tfoot","tr"],c=document.createElement("div");return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError("Expected HTML string");var n={transform:t.transform||{},preserveAttributes:t.preserveAttributes||[]},a=document.createElement("div");a.innerHTML=e.trim();for(var l=[],o=0;o<a.childNodes.length;o++)l.push(a.childNodes[o]);var c=l.map(function(e,t){return r(e,t,n)}).filter(function(e){return null!==e});return 1===c.length?c[0]:c}})},152:function(e,t){},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=r(a),o=n(17),c=n(150),u=n(55),i=r(u);n(152);var s=function(){return l.default.createElement("div",{className:"Reference__ExperimentalNote"},l.default.createElement(i.default,{className:"Reference__ExperimentalNoteIcon"}),l.default.createElement("span",null,"この機能は実験的な機能であり、将来仕様が変更される可能性があります。予めご了承ください。"))},f=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"前提"),"このAPIを利用する際は、APIの活用方法のヒントや使い分け方などについてまとめた",l.default.createElement(o.Link,{to:"/common/theory"},"APIのセオリー"),"も合わせてご参照ください。")};t.default=(0,o.withRouteData)(function(e){var t=e.reference;return l.default.createElement("div",null,l.default.createElement("div",{className:"Reference__Header"},l.default.createElement("h1",null,t.title),l.default.createElement("a",{className:"Reference__EditButton",href:"https://github.com/atsumaru/api-references/blob/master/content/collections/apis/"+t.slug+".md"},"編集")),t.experimental?l.default.createElement(s,null):null,t.recommendTheory?l.default.createElement(f,null):null,(0,c.htmlToComponent)(t.contents,s))})}});