!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.podcastXmlParser=t():e.podcastXmlParser=t()}(self,(()=>{return e={921:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.USER_AGENT=void 0,t.USER_AGENT="podcast-xml-parser/2.3.1"},158:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createEpisode=t.createPodcast=void 0;var r=n(801);function i(e,t){var n,r=null==e?void 0:e.getElementsByTagName(t)[0];return null!==(n=null==r?void 0:r.textContent)&&void 0!==n?n:""}t.createPodcast=function(e){var t,n,r,o,a,u,s=e.getElementsByTagName("image")[0];return{copyright:i(e,"copyright"),contentEncoded:i(e,"content:encoded"),description:i(e,"description"),feedUrl:null!==(n=null===(t=e.getElementsByTagName("atom:link")[0])||void 0===t?void 0:t.getAttribute("href"))&&void 0!==n?n:"",image:{link:i(s,"link"),title:i(s,"title"),url:i(s,"url")},itunesAuthor:i(e,"itunes:author"),itunesCategory:null!==(o=null===(r=e.getElementsByTagName("itunes:category")[0])||void 0===r?void 0:r.getAttribute("text"))&&void 0!==o?o:"",itunesExplicit:i(e,"itunes:explicit"),itunesImage:null!==(u=null===(a=e.getElementsByTagName("itunes:image")[0])||void 0===a?void 0:a.getAttribute("href"))&&void 0!==u?u:"",itunesOwner:{email:i(e,"itunes:email"),name:i(e,"itunes:name")},itunesSubtitle:i(e,"itunes:subtitle"),itunesSummary:i(e,"itunes:summary"),itunesType:i(e,"itunes:type"),language:i(e,"language"),link:i(e,"link"),title:i(e,"title")}},t.createEpisode=function(e){var t,n,o=e.getElementsByTagName("enclosure")[0];return{author:i(e,"author"),contentEncoded:i(e,"content:encoded"),description:i(e,"description"),enclosure:{url:null!==(t=null==o?void 0:o.getAttribute("url"))&&void 0!==t?t:"",type:null!==(n=null==o?void 0:o.getAttribute("type"))&&void 0!==n?n:""},guid:i(e,"guid"),itunesAuthor:i(e,"itunes:author"),itunesDuration:(0,r.getDuration)(i(e,"itunes:duration")),itunesEpisode:i(e,"itunes:episode"),itunesEpisodeType:i(e,"itunes:episodeType"),itunesExplicit:i(e,"itunes:explicit"),itunesSubtitle:i(e,"itunes:subtitle"),itunesSummary:i(e,"itunes:summary"),itunesTitle:i(e,"itunes:title"),link:i(e,"link"),pubDate:i(e,"pubDate"),title:i(e,"title")}}},156:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(149),a=n(158);function u(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,(function(){var n,r,u,s,c,l,p,f,d,h,m,g,v;return i(this,(function(i){switch(i.label){case 0:return[4,(0,o.retrieveXmlFromSource)(e,t)];case 1:return n=i.sent(),r=n.itunes,u=n.xmlString,s=(0,o.preprocessXml)(u,t),c=(0,o.parse)(s),l=(0,a.createPodcast)(c.documentElement),p=Array.from(c.getElementsByTagName("item")),f=t.start,d=void 0===f?0:f,h=t.limit,m=(d="number"==typeof d&&d>0?d:0)+("number"==typeof h&&h>0?h:p.length),g=p.slice(d,m),v=g.map(a.createEpisode),!0!==t.itunes&&void 0===r?[3,5]:void 0!==r?[3,4]:[4,fetch("https://itunes.apple.com/search?term=".concat(l.title,"&entity=podcast"))];case 2:return[4,i.sent().json()];case 3:r=(r=i.sent()).results.find((function(e){return e.feedUrl===l.feedUrl})),i.label=4;case 4:return[2,{itunes:r,podcast:l,episodes:v}];case 5:return[2,{podcast:l,episodes:v}]}}))}))}t.default=u,e.exports=u,e.exports.default=u},692:function(e,t){"use strict";var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.itunesLookup=void 0,t.itunesLookup=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=podcast"))];case 1:return[4,t.sent().json()];case 2:return[2,t.sent().results[0]]}}))}))}},801:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDuration=void 0,t.getDuration=function(e){if("string"==typeof e||"number"==typeof e)if("string"==typeof e){if(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/.test(e)){var t=e.split(":").map((function(e){return parseInt(e)}));return 3600*t[0]+60*t[1]+t[2]}if(!isNaN(Number(e)))return parseInt(e)}else if("number"==typeof e)return e}},149:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.parse=t.retrieveXmlFromSource=t.fetchXmlFromUrl=t.preprocessXml=void 0;var a=n(152),u=n(692),s=n(921),c=new a.DOMParser;function l(e){var t=e.lastIndexOf("</item>");return-1!==t&&(e=e.substring(0,t+7)),e+"</channel></rss>"}function p(e,t){return i(this,void 0,void 0,(function(){var n,i,a;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),void 0!==(n=null!=t.requestHeaders?r({},t.requestHeaders):{})["User-Agent"]&&""!==n["User-Agent"]||(n["User-Agent"]=s.USER_AGENT),"number"==typeof t.requestSize&&t.requestSize>0&&(n.Range="bytes=0-".concat(t.requestSize)),[4,fetch(e,{headers:n})];case 1:return[4,o.sent().text()];case 2:return i=l(i=o.sent()),-1!==(a=i.lastIndexOf("</item>"))&&(i=i.substring(0,a+7)),[2,i+"</channel></rss>"];case 3:throw o.sent(),Error("Error fetching from feed: "+e);case 4:return[2]}}))}))}t.preprocessXml=function(e,t){var n=null!==t.requestSize&&void 0!==t.requestSize&&t.requestSize>0?e.slice(0,t.requestSize):e,r=(n=l(n)).startsWith("<")?n:"<root>".concat(n,"</root>"),i=c.parseFromString(r,"text/xml");return(new a.XMLSerializer).serializeToString(i)},t.fetchXmlFromUrl=p,t.retrieveXmlFromSource=function(e,t){return i(this,void 0,void 0,(function(){var n,r;return o(this,(function(i){switch(i.label){case 0:return e instanceof URL?[4,p(e.toString(),t)]:[3,2];case 1:return[2,{xmlString:r=i.sent()}];case 2:return"number"!=typeof e?[3,6]:[4,(0,u.itunesLookup)(e)];case 3:return"string"!=typeof(null==(n=i.sent())?void 0:n.feedUrl)?[3,5]:[4,p(n.feedUrl,t)];case 4:return r=i.sent(),[2,{itunes:n,xmlString:r}];case 5:throw new Error("Invalid iTunes ID or unable to fetch associated feed URL.");case 6:if("string"==typeof e)return[2,{xmlString:e}];throw new Error("Invalid source type. Please provide a valid URL, iTunes ID, or XML string.");case 7:return[2]}}))}))},t.parse=function(e){return c.parseFromString(e,"text/xml")}},152:(e,t,n)=>{function r(e){this.options=e||{locator:{}}}function i(){this.cdata=!1}function o(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function a(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function u(e,t,n){return"string"==typeof e?e.substr(t,n):e.length>=t+n||t?new java.lang.String(e,t,n)+"":e}function s(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}r.prototype.parseFromString=function(e,t){var n=this.options,r=new p,o=n.domBuilder||new i,u=n.errorHandler,s=n.locator,l=n.xmlns||{},f=/\/x?html?$/.test(t),d=f?c.entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return s&&o.setDocumentLocator(s),r.errorHandler=function(e,t,n){if(!e){if(t instanceof i)return t;e=t}var r={},o=e instanceof Function;function u(t){var i=e[t];!i&&o&&(i=2==e.length?function(n){e(t,n)}:e),r[t]=i&&function(e){i("[xmldom "+t+"]\t"+e+a(n))}||function(){}}return n=n||{},u("warning"),u("error"),u("fatalError"),r}(u,o,s),r.domBuilder=n.domBuilder||o,f&&(l[""]="http://www.w3.org/1999/xhtml"),l.xml=l.xml||"http://www.w3.org/XML/1998/namespace",e&&"string"==typeof e?r.parse(e,l,d):r.errorHandler.error("invalid doc source"),o.doc},i.prototype={startDocument:function(){this.doc=(new d).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var i=this.doc,a=i.createElementNS(e,n||t),u=r.length;s(this,a),this.currentElement=a,this.locator&&o(this.locator,a);for(var c=0;c<u;c++){e=r.getURI(c);var l=r.getValue(c),p=(n=r.getQName(c),i.createAttributeNS(e,n));this.locator&&o(r.getLocator(c),p),p.value=p.nodeValue=l,a.setAttributeNode(p)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName,this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.doc.createProcessingInstruction(e,t);this.locator&&o(this.locator,n),s(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){if(e=u.apply(this,arguments)){if(this.cdata)var r=this.doc.createCDATASection(e);else r=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(r):/^\s*$/.test(e)&&this.doc.appendChild(r),this.locator&&o(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,n){e=u.apply(this,arguments);var r=this.doc.createComment(e);this.locator&&o(this.locator,r),s(this,r)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.doc.implementation;if(r&&r.createDocumentType){var i=r.createDocumentType(e,t,n);this.locator&&o(this.locator,i),s(this,i)}},warning:function(e){console.warn("[xmldom warning]\t"+e,a(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,a(this.locator))},fatalError:function(e){throw new f(e,this.locator)}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){i.prototype[e]=function(){return null}}));var c=n(447),l=n(938),p=l.XMLReader,f=l.ParseError,d=t.DOMImplementation=n(266).DOMImplementation;t.XMLSerializer=n(266).XMLSerializer,t.DOMParser=r,t.__DOMHandler=i},266:(e,t)=>{function n(e,t){for(var n in e)t[n]=e[n]}function r(e,t){var r=e.prototype;if(!(r instanceof t)){function i(){}i.prototype=t.prototype,n(r,i=new i),e.prototype=r=i}r.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),r.constructor=e)}var i="http://www.w3.org/1999/xhtml",o={},a=o.ELEMENT_NODE=1,u=o.ATTRIBUTE_NODE=2,s=o.TEXT_NODE=3,c=o.CDATA_SECTION_NODE=4,l=o.ENTITY_REFERENCE_NODE=5,p=o.ENTITY_NODE=6,f=o.PROCESSING_INSTRUCTION_NODE=7,d=o.COMMENT_NODE=8,h=o.DOCUMENT_NODE=9,m=o.DOCUMENT_TYPE_NODE=10,g=o.DOCUMENT_FRAGMENT_NODE=11,v=o.NOTATION_NODE=12,b={},N={},w=(b.INDEX_SIZE_ERR=(N[1]="Index size error",1),b.DOMSTRING_SIZE_ERR=(N[2]="DOMString size error",2),b.HIERARCHY_REQUEST_ERR=(N[3]="Hierarchy request error",3)),y=(b.WRONG_DOCUMENT_ERR=(N[4]="Wrong document",4),b.INVALID_CHARACTER_ERR=(N[5]="Invalid character",5),b.NO_DATA_ALLOWED_ERR=(N[6]="No data allowed",6),b.NO_MODIFICATION_ALLOWED_ERR=(N[7]="No modification allowed",7),b.NOT_FOUND_ERR=(N[8]="Not found",8)),E=(b.NOT_SUPPORTED_ERR=(N[9]="Not supported",9),b.INUSE_ATTRIBUTE_ERR=(N[10]="Attribute in use",10));function x(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,N[e]),this.message=N[e],Error.captureStackTrace&&Error.captureStackTrace(this,x);return n.code=e,t&&(this.message=this.message+": "+t),n}function T(){}function D(e,t){this._node=e,this._refresh=t,S(this)}function S(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var r=e._refresh(e._node);ie(e,"length",r.length),n(r,e),e._inc=t}}function _(){}function A(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function I(e,t,n,r){if(r?t[A(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var i=e.ownerDocument;i&&(r&&P(i,e,r),function(e,t,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&(t._nsMap[n.prefix?n.localName:""]=n.value)}(i,e,n))}}function C(e,t,n){var r=A(t,n);if(!(r>=0))throw x(y,new Error(e.tagName+"@"+n));for(var i=t.length-1;r<i;)t[r]=t[++r];if(t.length=i,e){var o=e.ownerDocument;o&&(P(o,e,n),n.ownerElement=null)}}function O(e){if(this._features={},e)for(var t in e)this._features=e[t]}function R(){}function M(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function k(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(k(e,t))return!0}while(e=e.nextSibling)}function U(){}function P(e,t,n,r){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&delete t._nsMap[n.prefix?n.localName:""]}function F(e,t,n){if(e&&e._inc){e._inc++;var r=t.childNodes;if(n)r[r.length++]=n;else{for(var i=t.firstChild,o=0;i;)r[o++]=i,i=i.nextSibling;r.length=o}}}function L(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,F(e.ownerDocument,e),t}function q(e,t,n){var r=t.parentNode;if(r&&r.removeChild(t),t.nodeType===g){var i=t.firstChild;if(null==i)return t;var o=t.lastChild}else i=o=t;var a=n?n.previousSibling:e.lastChild;i.previousSibling=a,o.nextSibling=n,a?a.nextSibling=i:e.firstChild=i,null==n?e.lastChild=o:n.previousSibling=o;do{i.parentNode=e}while(i!==o&&(i=i.nextSibling));return F(e.ownerDocument||e,e),t.nodeType==g&&(t.firstChild=t.lastChild=null),t}function B(){this._nsMap={}}function z(){}function X(){}function j(){}function $(){}function V(){}function H(){}function G(){}function Y(){}function W(){}function Z(){}function Q(){}function K(){}function J(e,t){var n=[],r=9==this.nodeType&&this.documentElement||this,i=r.prefix,o=r.namespaceURI;if(o&&null==i&&null==(i=r.lookupPrefix(o)))var a=[{namespace:o,prefix:null}];return te(this,n,e,t,a),n.join("")}function ee(e,t,n){var r=e.prefix||"",i=e.namespaceURI;if(!r&&!i)return!1;if("xml"===r&&"http://www.w3.org/XML/1998/namespace"===i||"http://www.w3.org/2000/xmlns/"==i)return!1;for(var o=n.length;o--;){var a=n[o];if(a.prefix==r)return a.namespace!=i}return!0}function te(e,t,n,r,o){if(r){if(!(e=r(e)))return;if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case a:o||(o=[]),o.length;var p=e.attributes,v=p.length,b=e.firstChild,N=e.tagName;n=i===e.namespaceURI||n,t.push("<",N);for(var w=0;w<v;w++)"xmlns"==(y=p.item(w)).prefix?o.push({prefix:y.localName,namespace:y.value}):"xmlns"==y.nodeName&&o.push({prefix:"",namespace:y.value});for(w=0;w<v;w++){var y;if(ee(y=p.item(w),0,o)){var E=y.prefix||"",x=y.namespaceURI,T=E?" xmlns:"+E:" xmlns";t.push(T,'="',x,'"'),o.push({prefix:E,namespace:x})}te(y,t,n,r,o)}if(ee(e,0,o)&&(E=e.prefix||"",(x=e.namespaceURI)&&(T=E?" xmlns:"+E:" xmlns",t.push(T,'="',x,'"'),o.push({prefix:E,namespace:x}))),b||n&&!/^(?:meta|link|img|br|hr|input)$/i.test(N)){if(t.push(">"),n&&/^script$/i.test(N))for(;b;)b.data?t.push(b.data):te(b,t,n,r,o),b=b.nextSibling;else for(;b;)te(b,t,n,r,o),b=b.nextSibling;t.push("</",N,">")}else t.push("/>");return;case h:case g:for(b=e.firstChild;b;)te(b,t,n,r,o),b=b.nextSibling;return;case u:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,M),'"');case s:return t.push(e.data.replace(/[<&]/g,M).replace(/]]>/g,"]]&gt;"));case c:return t.push("<![CDATA[",e.data,"]]>");case d:return t.push("\x3c!--",e.data,"--\x3e");case m:var D=e.publicId,S=e.systemId;if(t.push("<!DOCTYPE ",e.name),D)t.push(" PUBLIC ",D),S&&"."!=S&&t.push(" ",S),t.push(">");else if(S&&"."!=S)t.push(" SYSTEM ",S,">");else{var _=e.internalSubset;_&&t.push(" [",_,"]"),t.push(">")}return;case f:return t.push("<?",e.target," ",e.data,"?>");case l:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function ne(e,t,n){var r;switch(t.nodeType){case a:(r=t.cloneNode(!1)).ownerDocument=e;case g:break;case u:n=!0}if(r||(r=t.cloneNode(!1)),r.ownerDocument=e,r.parentNode=null,n)for(var i=t.firstChild;i;)r.appendChild(ne(e,i,n)),i=i.nextSibling;return r}function re(e,t,n){var r=new t.constructor;for(var i in t){var o=t[i];"object"!=typeof o&&o!=r[i]&&(r[i]=o)}switch(t.childNodes&&(r.childNodes=new T),r.ownerDocument=e,r.nodeType){case a:var s=t.attributes,c=r.attributes=new _,l=s.length;c._ownerElement=r;for(var p=0;p<l;p++)r.setAttributeNode(re(e,s.item(p),!0));break;case u:n=!0}if(n)for(var f=t.firstChild;f;)r.appendChild(re(e,f,n)),f=f.nextSibling;return r}function ie(e,t,n){e[t]=n}b.INVALID_STATE_ERR=(N[11]="Invalid state",11),b.SYNTAX_ERR=(N[12]="Syntax error",12),b.INVALID_MODIFICATION_ERR=(N[13]="Invalid modification",13),b.NAMESPACE_ERR=(N[14]="Invalid namespace",14),b.INVALID_ACCESS_ERR=(N[15]="Invalid access",15),x.prototype=Error.prototype,n(b,x),T.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var n=[],r=0;r<this.length;r++)te(this[r],n,e,t);return n.join("")}},D.prototype.item=function(e){return S(this),this[e]},r(D,T),_.prototype={length:0,item:T.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var n=this[t];if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new x(E);var n=this.getNamedItem(e.nodeName);return I(this._ownerElement,this,e,n),n},setNamedItemNS:function(e){var t,n=e.ownerElement;if(n&&n!=this._ownerElement)throw new x(E);return t=this.getNamedItemNS(e.namespaceURI,e.localName),I(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return C(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return C(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}},O.prototype={hasFeature:function(e,t){var n=this._features[e.toLowerCase()];return!(!n||t&&!(t in n))},createDocument:function(e,t,n){var r=new U;if(r.implementation=this,r.childNodes=new T,r.doctype=n,n&&r.appendChild(n),t){var i=r.createElementNS(e,t);r.appendChild(i)}return r},createDocumentType:function(e,t,n){var r=new H;return r.name=e,r.nodeName=e,r.publicId=t,r.systemId=n,r}},R.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return q(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return L(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return re(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==s&&e.nodeType==s?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;if(n)for(var r in n)if(n[r]==e)return r;t=t.nodeType==u?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;if(n&&e in n)return n[e];t=t.nodeType==u?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},n(o,R),n(o,R.prototype),U.prototype={nodeName:"#document",nodeType:h,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==g){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return null==this.documentElement&&e.nodeType==a&&(this.documentElement=e),q(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),L(this,e)},importNode:function(e,t){return ne(this,e,t)},getElementById:function(e){var t=null;return k(this.documentElement,(function(n){if(n.nodeType==a&&n.getAttribute("id")==e)return t=n,!0})),t},getElementsByClassName:function(e){var t=new RegExp("(^|\\s)"+e+"(\\s|$)");return new D(this,(function(e){var n=[];return k(e.documentElement,(function(r){r!==e&&r.nodeType==a&&t.test(r.getAttribute("class"))&&n.push(r)})),n}))},createElement:function(e){var t=new B;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new T,(t.attributes=new _)._ownerElement=t,t},createDocumentFragment:function(){var e=new Z;return e.ownerDocument=this,e.childNodes=new T,e},createTextNode:function(e){var t=new j;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new $;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new V;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new Q;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new z;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new W;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var n=new B,r=t.split(":"),i=n.attributes=new _;return n.childNodes=new T,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,i._ownerElement=n,n},createAttributeNS:function(e,t){var n=new z,r=t.split(":");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,n}},r(U,R),B.prototype={nodeType:a,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=""+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===g?this.insertBefore(e,null):function(e,t){var n=t.parentNode;if(n){var r=e.lastChild;n.removeChild(t),r=e.lastChild}return r=e.lastChild,t.parentNode=e,t.previousSibling=r,t.nextSibling=null,r?r.nextSibling=t:e.firstChild=t,e.lastChild=t,F(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||""},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=""+n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new D(this,(function(t){var n=[];return k(t,(function(r){r===t||r.nodeType!=a||"*"!==e&&r.tagName!=e||n.push(r)})),n}))},getElementsByTagNameNS:function(e,t){return new D(this,(function(n){var r=[];return k(n,(function(i){i===n||i.nodeType!==a||"*"!==e&&i.namespaceURI!==e||"*"!==t&&i.localName!=t||r.push(i)})),r}))}},U.prototype.getElementsByTagName=B.prototype.getElementsByTagName,U.prototype.getElementsByTagNameNS=B.prototype.getElementsByTagNameNS,r(B,R),z.prototype.nodeType=u,r(z,R),X.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(N[w])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,n){n=this.data.substring(0,e)+n+this.data.substring(e+t),this.nodeValue=this.data=n,this.length=n.length}},r(X,R),j.prototype={nodeName:"#text",nodeType:s,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},r(j,X),$.prototype={nodeName:"#comment",nodeType:d},r($,X),V.prototype={nodeName:"#cdata-section",nodeType:c},r(V,X),H.prototype.nodeType=m,r(H,R),G.prototype.nodeType=v,r(G,R),Y.prototype.nodeType=p,r(Y,R),W.prototype.nodeType=l,r(W,R),Z.prototype.nodeName="#document-fragment",Z.prototype.nodeType=g,r(Z,R),Q.prototype.nodeType=f,r(Q,R),K.prototype.serializeToString=function(e,t,n){return J.call(e,t,n)},R.prototype.toString=J;try{if(Object.defineProperty){function oe(e){switch(e.nodeType){case a:case g:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(oe(e)),e=e.nextSibling;return t.join("");default:return e.nodeValue}}Object.defineProperty(D.prototype,"length",{get:function(){return S(this),this.$$length}}),Object.defineProperty(R.prototype,"textContent",{get:function(){return oe(this)},set:function(e){switch(this.nodeType){case a:case g:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),ie=function(e,t,n){e["$$"+t]=n}}}catch(ae){}t.DOMImplementation=O,t.XMLSerializer=K},447:(e,t)=>{t.entityMap={lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"}},938:(e,t)=>{var n=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,r=new RegExp("[\\-\\.0-9"+n.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),i=new RegExp("^"+n.source+r.source+"*(?::"+n.source+r.source+"*)?$");function o(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,o)}function a(){}function u(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function s(e,t,n,r,i,o){function a(e,t,r){e in n.attributeNames&&o.fatalError("Attribute "+e+" redefined"),n.addValue(e,t,r)}for(var u,s=++t,c=0;;){var l=e.charAt(s);switch(l){case"=":if(1===c)u=e.slice(t,s),c=3;else{if(2!==c)throw new Error("attribute equal must after attrName");c=3}break;case"'":case'"':if(3===c||1===c){if(1===c&&(o.warning('attribute value must after "="'),u=e.slice(t,s)),t=s+1,!((s=e.indexOf(l,t))>0))throw new Error("attribute value no end '"+l+"' match");a(u,p=e.slice(t,s).replace(/&#?\w+;/g,i),t-1),c=5}else{if(4!=c)throw new Error('attribute value must after "="');a(u,p=e.slice(t,s).replace(/&#?\w+;/g,i),t),o.warning('attribute "'+u+'" missed start quot('+l+")!!"),t=s+1,c=5}break;case"/":switch(c){case 0:n.setTagName(e.slice(t,s));case 5:case 6:case 7:c=7,n.closed=!0;case 4:case 1:case 2:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return o.error("unexpected end of input"),0==c&&n.setTagName(e.slice(t,s)),s;case">":switch(c){case 0:n.setTagName(e.slice(t,s));case 5:case 6:case 7:break;case 4:case 1:"/"===(p=e.slice(t,s)).slice(-1)&&(n.closed=!0,p=p.slice(0,-1));case 2:2===c&&(p=u),4==c?(o.warning('attribute "'+p+'" missed quot(")!'),a(u,p.replace(/&#?\w+;/g,i),t)):("http://www.w3.org/1999/xhtml"===r[""]&&p.match(/^(?:disabled|checked|selected)$/i)||o.warning('attribute "'+p+'" missed value!! "'+p+'" instead!!'),a(p,p,t));break;case 3:throw new Error("attribute value missed!!")}return s;case"":l=" ";default:if(l<=" ")switch(c){case 0:n.setTagName(e.slice(t,s)),c=6;break;case 1:u=e.slice(t,s),c=2;break;case 4:var p=e.slice(t,s).replace(/&#?\w+;/g,i);o.warning('attribute "'+p+'" missed quot(")!!'),a(u,p,t);case 5:c=6}else switch(c){case 2:n.tagName,"http://www.w3.org/1999/xhtml"===r[""]&&u.match(/^(?:disabled|checked|selected)$/i)||o.warning('attribute "'+u+'" missed value!! "'+u+'" instead2!!'),a(u,u,t),t=s,c=1;break;case 5:o.warning('attribute space is required"'+u+'"!!');case 6:c=1,t=s;break;case 3:c=4,t=s;break;case 7:throw new Error("elements closed character '/' and '>' must be connected to")}}s++}}function c(e,t,n){for(var r=e.tagName,i=null,o=e.length;o--;){var a=e[o],u=a.qName,s=a.value;if((d=u.indexOf(":"))>0)var c=a.prefix=u.slice(0,d),l=u.slice(d+1),p="xmlns"===c&&l;else l=u,c=null,p="xmlns"===u&&"";a.localName=l,!1!==p&&(null==i&&(i={},f(n,n={})),n[p]=i[p]=s,a.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(p,s))}for(o=e.length;o--;)(c=(a=e[o]).prefix)&&("xml"===c&&(a.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==c&&(a.uri=n[c||""]));var d;(d=r.indexOf(":"))>0?(c=e.prefix=r.slice(0,d),l=e.localName=r.slice(d+1)):(c=null,l=e.localName=r);var h=e.uri=n[c||""];if(t.startElement(h,l,r,e),!e.closed)return e.currentNSMap=n,e.localNSMap=i,!0;if(t.endElement(h,l,r),i)for(c in i)t.endPrefixMapping(c)}function l(e,t,n,r,i){if(/^(?:script|textarea)$/i.test(n)){var o=e.indexOf("</"+n+">",t),a=e.substring(t+1,o);if(/[&<]/.test(a))return/^script$/i.test(n)?(i.characters(a,0,a.length),o):(a=a.replace(/&#?\w+;/g,r),i.characters(a,0,a.length),o)}return t+1}function p(e,t,n,r){var i=r[n];return null==i&&((i=e.lastIndexOf("</"+n+">"))<t&&(i=e.lastIndexOf("</"+n)),r[n]=i),i<t}function f(e,t){for(var n in e)t[n]=e[n]}function d(e,t,n,r){if("-"===e.charAt(t+2))return"-"===e.charAt(t+3)?(i=e.indexOf("--\x3e",t+4))>t?(n.comment(e,t+4,i-t-4),i+3):(r.error("Unclosed comment"),-1):-1;if("CDATA["==e.substr(t+3,6)){var i=e.indexOf("]]>",t+9);return n.startCDATA(),n.characters(e,t+9,i-t-9),n.endCDATA(),i+3}var o=function(e,t){var n,r=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(i.lastIndex=t,i.exec(e);n=i.exec(e);)if(r.push(n),n[1])return r}(e,t),a=o.length;if(a>1&&/!doctype/i.test(o[0][0])){var u=o[1][0],s=!1,c=!1;a>3&&(/^public$/i.test(o[2][0])?(s=o[3][0],c=a>4&&o[4][0]):/^system$/i.test(o[2][0])&&(c=o[3][0]));var l=o[a-1];return n.startDTD(u,s,c),n.endDTD(),l.index+l[0].length}return-1}function h(e,t,n){var r=e.indexOf("?>",t);if(r){var i=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return i?(i[0].length,n.processingInstruction(i[1],i[2]),r+2):-1}return-1}function m(){this.attributeNames={}}o.prototype=new Error,o.prototype.name=o.name,a.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),f(t,t={}),function(e,t,n,r,i){function a(e){var t=e.slice(1,-1);return t in n?n[t]:"#"===t.charAt(0)?function(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}(parseInt(t.substr(1).replace("x","0x"))):(i.error("entity not found:"+e),e)}function f(t){if(t>x){var n=e.substring(x,t).replace(/&#?\w+;/g,a);w&&g(x),r.characters(n,0,t-x),x=t}}function g(t,n){for(;t>=b&&(n=N.exec(e));)v=n.index,b=v+n[0].length,w.lineNumber++;w.columnNumber=t-v+1}for(var v=0,b=0,N=/.*(?:\r\n?|\n)|.*$/g,w=r.locator,y=[{currentNSMap:t}],E={},x=0;;){try{var T=e.indexOf("<",x);if(T<0){if(!e.substr(x).match(/^\s*$/)){var D=r.doc,S=D.createTextNode(e.substr(x));D.appendChild(S),r.currentElement=S}return}switch(T>x&&f(T),e.charAt(T+1)){case"/":var _=e.indexOf(">",T+3),A=e.substring(T+2,_),I=y.pop();_<0?(A=e.substring(T+2).replace(/[\s<].*/,""),i.error("end tag name: "+A+" is not complete:"+I.tagName),_=T+1+A.length):A.match(/\s</)&&(A=A.replace(/[\s<].*/,""),i.error("end tag name: "+A+" maybe not complete"),_=T+1+A.length);var C=I.localNSMap,O=I.tagName==A;if(O||I.tagName&&I.tagName.toLowerCase()==A.toLowerCase()){if(r.endElement(I.uri,I.localName,A),C)for(var R in C)r.endPrefixMapping(R);O||i.fatalError("end tag name: "+A+" is not match the current start tagName:"+I.tagName)}else y.push(I);_++;break;case"?":w&&g(T),_=h(e,T,r);break;case"!":w&&g(T),_=d(e,T,r,i);break;default:w&&g(T);var M=new m,k=y[y.length-1].currentNSMap,U=(_=s(e,T,M,k,a,i),M.length);if(!M.closed&&p(e,_,M.tagName,E)&&(M.closed=!0,n.nbsp||i.warning("unclosed xml attribute")),w&&U){for(var P=u(w,{}),F=0;F<U;F++){var L=M[F];g(L.offset),L.locator=u(w,{})}r.locator=P,c(M,r,k)&&y.push(M),r.locator=w}else c(M,r,k)&&y.push(M);"http://www.w3.org/1999/xhtml"!==M.uri||M.closed?_++:_=l(e,_,M.tagName,a,r)}}catch(e){if(e instanceof o)throw e;i.error("element parse error: "+e),_=-1}_>x?x=_:f(Math.max(T,x)+1)}}(e,t,n,r,this.errorHandler),r.endDocument()}},m.prototype={setTagName:function(e){if(!i.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,n){if(!i.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},t.XMLReader=a,t.ParseError=o}},t={},function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(156).default;var e,t}));