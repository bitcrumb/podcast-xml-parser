!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.podcastXmlParser=t():e.podcastXmlParser=t()}(self,(()=>{return e={607:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(647);function o(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(e)];case 1:return[4,t.sent().text()];case 2:return[2,t.sent()];case 3:throw t.sent();case 4:return[2]}}))}))}function u(e,t){var n=null==e?void 0:e.getElementsByTagName(t)[0];return n&&n.textContent||""}function s(e){var t,n;return{author:u(e,"author"),contentEncoded:u(e,"content:encoded"),description:u(e,"description"),enclosure:{url:(null===(t=e.getElementsByTagName("enclosure")[0])||void 0===t?void 0:t.getAttribute("url"))||"",type:(null===(n=e.getElementsByTagName("enclosure")[0])||void 0===n?void 0:n.getAttribute("type"))||""},guid:u(e,"guid"),itunesAuthor:u(e,"itunes:author"),itunesDuration:u(e,"itunes:duration"),itunesEpisode:u(e,"itunes:episode"),itunesEpisodeType:u(e,"itunes:episodeType"),itunesExplicit:u(e,"itunes:explicit"),itunesSubtitle:u(e,"itunes:subtitle"),itunesSummary:u(e,"itunes:summary"),itunesTitle:u(e,"itunes:title"),link:u(e,"link"),pubDate:u(e,"pubDate"),title:u(e,"title")}}t.default=function(e){var t,n,c;return r(this,void 0,void 0,(function(){var r,l,m,d,p,h,f,g,N;return i(this,(function(i){switch(i.label){case 0:if("string"==typeof e&&""===e.trim())throw new Error("Empty XML feed. Please provide valid XML content.");return e instanceof URL?[4,o(e.toString())]:[3,2];case 1:return r=i.sent(),[3,3];case 2:r=e,i.label=3;case 3:for(l=function(e){e.startsWith("<")||(e="<root>".concat(e,"</root>"));var t=(new a.DOMParser).parseFromString(e,"text/xml");return(new a.XMLSerializer).serializeToString(t)}(r),m=new a.DOMParser,d=m.parseFromString(l,"text/xml"),p=d.getElementsByTagName("item"),h=[],f=0;f<p.length;f++)g=p[f],N=s(g),h.push(N);return[2,{podcast:{copyright:u(d.documentElement,"copyright"),contentEncoded:u(d.documentElement,"content:encoded"),description:u(d.documentElement,"description"),feedUrl:e instanceof URL?e.toString():(null===(t=d.getElementsByTagName("atom:link")[0])||void 0===t?void 0:t.getAttribute("href"))||"",image:{link:u(d.getElementsByTagName("image")[0],"link"),title:u(d.getElementsByTagName("image")[0],"title"),url:u(d.getElementsByTagName("image")[0],"url")},itunesAuthor:u(d.documentElement,"itunes:author"),itunesCategory:(null===(n=d.getElementsByTagName("itunes:category")[0])||void 0===n?void 0:n.getAttribute("text"))||"",itunesExplicit:u(d.documentElement,"itunes:explicit"),itunesImage:(null===(c=d.getElementsByTagName("itunes:image")[0])||void 0===c?void 0:c.getAttribute("href"))||"",itunesOwner:{email:u(d.documentElement,"itunes:email"),name:u(d.documentElement,"itunes:name")},itunesSubtitle:u(d.documentElement,"itunes:subtitle"),itunesSummary:u(d.documentElement,"itunes:summary"),itunesType:u(d.documentElement,"itunes:type"),language:u(d.documentElement,"language"),link:u(d.documentElement,"link"),title:u(d.documentElement,"title")},episodes:h}]}}))}))}},647:(e,t,n)=>{function r(e){this.options=e||{locator:{}}}function i(){this.cdata=!1}function a(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function o(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function u(e,t,n){return"string"==typeof e?e.substr(t,n):e.length>=t+n||t?new java.lang.String(e,t,n)+"":e}function s(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}r.prototype.parseFromString=function(e,t){var n=this.options,r=new m,a=n.domBuilder||new i,u=n.errorHandler,s=n.locator,l=n.xmlns||{},d=/\/x?html?$/.test(t),p=d?c.entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return s&&a.setDocumentLocator(s),r.errorHandler=function(e,t,n){if(!e){if(t instanceof i)return t;e=t}var r={},a=e instanceof Function;function u(t){var i=e[t];!i&&a&&(i=2==e.length?function(n){e(t,n)}:e),r[t]=i&&function(e){i("[xmldom "+t+"]\t"+e+o(n))}||function(){}}return n=n||{},u("warning"),u("error"),u("fatalError"),r}(u,a,s),r.domBuilder=n.domBuilder||a,d&&(l[""]="http://www.w3.org/1999/xhtml"),l.xml=l.xml||"http://www.w3.org/XML/1998/namespace",e&&"string"==typeof e?r.parse(e,l,p):r.errorHandler.error("invalid doc source"),a.doc},i.prototype={startDocument:function(){this.doc=(new p).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var i=this.doc,o=i.createElementNS(e,n||t),u=r.length;s(this,o),this.currentElement=o,this.locator&&a(this.locator,o);for(var c=0;c<u;c++){e=r.getURI(c);var l=r.getValue(c),m=(n=r.getQName(c),i.createAttributeNS(e,n));this.locator&&a(r.getLocator(c),m),m.value=m.nodeValue=l,o.setAttributeNode(m)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName,this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.doc.createProcessingInstruction(e,t);this.locator&&a(this.locator,n),s(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){if(e=u.apply(this,arguments)){if(this.cdata)var r=this.doc.createCDATASection(e);else r=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(r):/^\s*$/.test(e)&&this.doc.appendChild(r),this.locator&&a(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,n){e=u.apply(this,arguments);var r=this.doc.createComment(e);this.locator&&a(this.locator,r),s(this,r)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.doc.implementation;if(r&&r.createDocumentType){var i=r.createDocumentType(e,t,n);this.locator&&a(this.locator,i),s(this,i)}},warning:function(e){console.warn("[xmldom warning]\t"+e,o(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,o(this.locator))},fatalError:function(e){throw new d(e,this.locator)}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){i.prototype[e]=function(){return null}}));var c=n(791),l=n(275),m=l.XMLReader,d=l.ParseError,p=t.DOMImplementation=n(34).DOMImplementation;t.XMLSerializer=n(34).XMLSerializer,t.DOMParser=r,t.__DOMHandler=i},34:(e,t)=>{function n(e,t){for(var n in e)t[n]=e[n]}function r(e,t){var r=e.prototype;if(!(r instanceof t)){function i(){}i.prototype=t.prototype,n(r,i=new i),e.prototype=r=i}r.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),r.constructor=e)}var i="http://www.w3.org/1999/xhtml",a={},o=a.ELEMENT_NODE=1,u=a.ATTRIBUTE_NODE=2,s=a.TEXT_NODE=3,c=a.CDATA_SECTION_NODE=4,l=a.ENTITY_REFERENCE_NODE=5,m=a.ENTITY_NODE=6,d=a.PROCESSING_INSTRUCTION_NODE=7,p=a.COMMENT_NODE=8,h=a.DOCUMENT_NODE=9,f=a.DOCUMENT_TYPE_NODE=10,g=a.DOCUMENT_FRAGMENT_NODE=11,N=a.NOTATION_NODE=12,v={},w={},b=(v.INDEX_SIZE_ERR=(w[1]="Index size error",1),v.DOMSTRING_SIZE_ERR=(w[2]="DOMString size error",2),v.HIERARCHY_REQUEST_ERR=(w[3]="Hierarchy request error",3)),E=(v.WRONG_DOCUMENT_ERR=(w[4]="Wrong document",4),v.INVALID_CHARACTER_ERR=(w[5]="Invalid character",5),v.NO_DATA_ALLOWED_ERR=(w[6]="No data allowed",6),v.NO_MODIFICATION_ALLOWED_ERR=(w[7]="No modification allowed",7),v.NOT_FOUND_ERR=(w[8]="Not found",8)),y=(v.NOT_SUPPORTED_ERR=(w[9]="Not supported",9),v.INUSE_ATTRIBUTE_ERR=(w[10]="Attribute in use",10));function x(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,w[e]),this.message=w[e],Error.captureStackTrace&&Error.captureStackTrace(this,x);return n.code=e,t&&(this.message=this.message+": "+t),n}function T(){}function D(e,t){this._node=e,this._refresh=t,S(this)}function S(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var r=e._refresh(e._node);ie(e,"length",r.length),n(r,e),e._inc=t}}function C(){}function A(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function I(e,t,n,r){if(r?t[A(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var i=e.ownerDocument;i&&(r&&F(i,e,r),function(e,t,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&(t._nsMap[n.prefix?n.localName:""]=n.value)}(i,e,n))}}function _(e,t,n){var r=A(t,n);if(!(r>=0))throw x(E,new Error(e.tagName+"@"+n));for(var i=t.length-1;r<i;)t[r]=t[++r];if(t.length=i,e){var a=e.ownerDocument;a&&(F(a,e,n),n.ownerElement=null)}}function R(e){if(this._features={},e)for(var t in e)this._features=e[t]}function O(){}function M(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function k(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(k(e,t))return!0}while(e=e.nextSibling)}function U(){}function F(e,t,n,r){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&delete t._nsMap[n.prefix?n.localName:""]}function B(e,t,n){if(e&&e._inc){e._inc++;var r=t.childNodes;if(n)r[r.length++]=n;else{for(var i=t.firstChild,a=0;i;)r[a++]=i,i=i.nextSibling;r.length=a}}}function P(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,B(e.ownerDocument,e),t}function L(e,t,n){var r=t.parentNode;if(r&&r.removeChild(t),t.nodeType===g){var i=t.firstChild;if(null==i)return t;var a=t.lastChild}else i=a=t;var o=n?n.previousSibling:e.lastChild;i.previousSibling=o,a.nextSibling=n,o?o.nextSibling=i:e.firstChild=i,null==n?e.lastChild=a:n.previousSibling=a;do{i.parentNode=e}while(i!==a&&(i=i.nextSibling));return B(e.ownerDocument||e,e),t.nodeType==g&&(t.firstChild=t.lastChild=null),t}function q(){this._nsMap={}}function $(){}function V(){}function z(){}function X(){}function j(){}function H(){}function Y(){}function G(){}function W(){}function Z(){}function Q(){}function K(){}function J(e,t){var n=[],r=9==this.nodeType&&this.documentElement||this,i=r.prefix,a=r.namespaceURI;if(a&&null==i&&null==(i=r.lookupPrefix(a)))var o=[{namespace:a,prefix:null}];return te(this,n,e,t,o),n.join("")}function ee(e,t,n){var r=e.prefix||"",i=e.namespaceURI;if(!r&&!i)return!1;if("xml"===r&&"http://www.w3.org/XML/1998/namespace"===i||"http://www.w3.org/2000/xmlns/"==i)return!1;for(var a=n.length;a--;){var o=n[a];if(o.prefix==r)return o.namespace!=i}return!0}function te(e,t,n,r,a){if(r){if(!(e=r(e)))return;if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case o:a||(a=[]),a.length;var m=e.attributes,N=m.length,v=e.firstChild,w=e.tagName;n=i===e.namespaceURI||n,t.push("<",w);for(var b=0;b<N;b++)"xmlns"==(E=m.item(b)).prefix?a.push({prefix:E.localName,namespace:E.value}):"xmlns"==E.nodeName&&a.push({prefix:"",namespace:E.value});for(b=0;b<N;b++){var E;if(ee(E=m.item(b),0,a)){var y=E.prefix||"",x=E.namespaceURI,T=y?" xmlns:"+y:" xmlns";t.push(T,'="',x,'"'),a.push({prefix:y,namespace:x})}te(E,t,n,r,a)}if(ee(e,0,a)&&(y=e.prefix||"",(x=e.namespaceURI)&&(T=y?" xmlns:"+y:" xmlns",t.push(T,'="',x,'"'),a.push({prefix:y,namespace:x}))),v||n&&!/^(?:meta|link|img|br|hr|input)$/i.test(w)){if(t.push(">"),n&&/^script$/i.test(w))for(;v;)v.data?t.push(v.data):te(v,t,n,r,a),v=v.nextSibling;else for(;v;)te(v,t,n,r,a),v=v.nextSibling;t.push("</",w,">")}else t.push("/>");return;case h:case g:for(v=e.firstChild;v;)te(v,t,n,r,a),v=v.nextSibling;return;case u:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,M),'"');case s:return t.push(e.data.replace(/[<&]/g,M).replace(/]]>/g,"]]&gt;"));case c:return t.push("<![CDATA[",e.data,"]]>");case p:return t.push("\x3c!--",e.data,"--\x3e");case f:var D=e.publicId,S=e.systemId;if(t.push("<!DOCTYPE ",e.name),D)t.push(" PUBLIC ",D),S&&"."!=S&&t.push(" ",S),t.push(">");else if(S&&"."!=S)t.push(" SYSTEM ",S,">");else{var C=e.internalSubset;C&&t.push(" [",C,"]"),t.push(">")}return;case d:return t.push("<?",e.target," ",e.data,"?>");case l:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function ne(e,t,n){var r;switch(t.nodeType){case o:(r=t.cloneNode(!1)).ownerDocument=e;case g:break;case u:n=!0}if(r||(r=t.cloneNode(!1)),r.ownerDocument=e,r.parentNode=null,n)for(var i=t.firstChild;i;)r.appendChild(ne(e,i,n)),i=i.nextSibling;return r}function re(e,t,n){var r=new t.constructor;for(var i in t){var a=t[i];"object"!=typeof a&&a!=r[i]&&(r[i]=a)}switch(t.childNodes&&(r.childNodes=new T),r.ownerDocument=e,r.nodeType){case o:var s=t.attributes,c=r.attributes=new C,l=s.length;c._ownerElement=r;for(var m=0;m<l;m++)r.setAttributeNode(re(e,s.item(m),!0));break;case u:n=!0}if(n)for(var d=t.firstChild;d;)r.appendChild(re(e,d,n)),d=d.nextSibling;return r}function ie(e,t,n){e[t]=n}v.INVALID_STATE_ERR=(w[11]="Invalid state",11),v.SYNTAX_ERR=(w[12]="Syntax error",12),v.INVALID_MODIFICATION_ERR=(w[13]="Invalid modification",13),v.NAMESPACE_ERR=(w[14]="Invalid namespace",14),v.INVALID_ACCESS_ERR=(w[15]="Invalid access",15),x.prototype=Error.prototype,n(v,x),T.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var n=[],r=0;r<this.length;r++)te(this[r],n,e,t);return n.join("")}},D.prototype.item=function(e){return S(this),this[e]},r(D,T),C.prototype={length:0,item:T.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var n=this[t];if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new x(y);var n=this.getNamedItem(e.nodeName);return I(this._ownerElement,this,e,n),n},setNamedItemNS:function(e){var t,n=e.ownerElement;if(n&&n!=this._ownerElement)throw new x(y);return t=this.getNamedItemNS(e.namespaceURI,e.localName),I(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return _(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return _(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}},R.prototype={hasFeature:function(e,t){var n=this._features[e.toLowerCase()];return!(!n||t&&!(t in n))},createDocument:function(e,t,n){var r=new U;if(r.implementation=this,r.childNodes=new T,r.doctype=n,n&&r.appendChild(n),t){var i=r.createElementNS(e,t);r.appendChild(i)}return r},createDocumentType:function(e,t,n){var r=new H;return r.name=e,r.nodeName=e,r.publicId=t,r.systemId=n,r}},O.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return L(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return P(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return re(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==s&&e.nodeType==s?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;if(n)for(var r in n)if(n[r]==e)return r;t=t.nodeType==u?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;if(n&&e in n)return n[e];t=t.nodeType==u?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},n(a,O),n(a,O.prototype),U.prototype={nodeName:"#document",nodeType:h,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==g){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return null==this.documentElement&&e.nodeType==o&&(this.documentElement=e),L(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),P(this,e)},importNode:function(e,t){return ne(this,e,t)},getElementById:function(e){var t=null;return k(this.documentElement,(function(n){if(n.nodeType==o&&n.getAttribute("id")==e)return t=n,!0})),t},getElementsByClassName:function(e){var t=new RegExp("(^|\\s)"+e+"(\\s|$)");return new D(this,(function(e){var n=[];return k(e.documentElement,(function(r){r!==e&&r.nodeType==o&&t.test(r.getAttribute("class"))&&n.push(r)})),n}))},createElement:function(e){var t=new q;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new T,(t.attributes=new C)._ownerElement=t,t},createDocumentFragment:function(){var e=new Z;return e.ownerDocument=this,e.childNodes=new T,e},createTextNode:function(e){var t=new z;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new X;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new j;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new Q;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new $;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new W;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var n=new q,r=t.split(":"),i=n.attributes=new C;return n.childNodes=new T,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,i._ownerElement=n,n},createAttributeNS:function(e,t){var n=new $,r=t.split(":");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,n}},r(U,O),q.prototype={nodeType:o,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=""+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===g?this.insertBefore(e,null):function(e,t){var n=t.parentNode;if(n){var r=e.lastChild;n.removeChild(t),r=e.lastChild}return r=e.lastChild,t.parentNode=e,t.previousSibling=r,t.nextSibling=null,r?r.nextSibling=t:e.firstChild=t,e.lastChild=t,B(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||""},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=""+n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new D(this,(function(t){var n=[];return k(t,(function(r){r===t||r.nodeType!=o||"*"!==e&&r.tagName!=e||n.push(r)})),n}))},getElementsByTagNameNS:function(e,t){return new D(this,(function(n){var r=[];return k(n,(function(i){i===n||i.nodeType!==o||"*"!==e&&i.namespaceURI!==e||"*"!==t&&i.localName!=t||r.push(i)})),r}))}},U.prototype.getElementsByTagName=q.prototype.getElementsByTagName,U.prototype.getElementsByTagNameNS=q.prototype.getElementsByTagNameNS,r(q,O),$.prototype.nodeType=u,r($,O),V.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(w[b])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,n){n=this.data.substring(0,e)+n+this.data.substring(e+t),this.nodeValue=this.data=n,this.length=n.length}},r(V,O),z.prototype={nodeName:"#text",nodeType:s,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},r(z,V),X.prototype={nodeName:"#comment",nodeType:p},r(X,V),j.prototype={nodeName:"#cdata-section",nodeType:c},r(j,V),H.prototype.nodeType=f,r(H,O),Y.prototype.nodeType=N,r(Y,O),G.prototype.nodeType=m,r(G,O),W.prototype.nodeType=l,r(W,O),Z.prototype.nodeName="#document-fragment",Z.prototype.nodeType=g,r(Z,O),Q.prototype.nodeType=d,r(Q,O),K.prototype.serializeToString=function(e,t,n){return J.call(e,t,n)},O.prototype.toString=J;try{if(Object.defineProperty){function ae(e){switch(e.nodeType){case o:case g:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(ae(e)),e=e.nextSibling;return t.join("");default:return e.nodeValue}}Object.defineProperty(D.prototype,"length",{get:function(){return S(this),this.$$length}}),Object.defineProperty(O.prototype,"textContent",{get:function(){return ae(this)},set:function(e){switch(this.nodeType){case o:case g:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),ie=function(e,t,n){e["$$"+t]=n}}}catch(oe){}t.DOMImplementation=R,t.XMLSerializer=K},791:(e,t)=>{t.entityMap={lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"}},275:(e,t)=>{var n=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,r=new RegExp("[\\-\\.0-9"+n.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),i=new RegExp("^"+n.source+r.source+"*(?::"+n.source+r.source+"*)?$");function a(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,a)}function o(){}function u(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function s(e,t,n,r,i,a){function o(e,t,r){e in n.attributeNames&&a.fatalError("Attribute "+e+" redefined"),n.addValue(e,t,r)}for(var u,s=++t,c=0;;){var l=e.charAt(s);switch(l){case"=":if(1===c)u=e.slice(t,s),c=3;else{if(2!==c)throw new Error("attribute equal must after attrName");c=3}break;case"'":case'"':if(3===c||1===c){if(1===c&&(a.warning('attribute value must after "="'),u=e.slice(t,s)),t=s+1,!((s=e.indexOf(l,t))>0))throw new Error("attribute value no end '"+l+"' match");o(u,m=e.slice(t,s).replace(/&#?\w+;/g,i),t-1),c=5}else{if(4!=c)throw new Error('attribute value must after "="');o(u,m=e.slice(t,s).replace(/&#?\w+;/g,i),t),a.warning('attribute "'+u+'" missed start quot('+l+")!!"),t=s+1,c=5}break;case"/":switch(c){case 0:n.setTagName(e.slice(t,s));case 5:case 6:case 7:c=7,n.closed=!0;case 4:case 1:case 2:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return a.error("unexpected end of input"),0==c&&n.setTagName(e.slice(t,s)),s;case">":switch(c){case 0:n.setTagName(e.slice(t,s));case 5:case 6:case 7:break;case 4:case 1:"/"===(m=e.slice(t,s)).slice(-1)&&(n.closed=!0,m=m.slice(0,-1));case 2:2===c&&(m=u),4==c?(a.warning('attribute "'+m+'" missed quot(")!'),o(u,m.replace(/&#?\w+;/g,i),t)):("http://www.w3.org/1999/xhtml"===r[""]&&m.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute "'+m+'" missed value!! "'+m+'" instead!!'),o(m,m,t));break;case 3:throw new Error("attribute value missed!!")}return s;case"":l=" ";default:if(l<=" ")switch(c){case 0:n.setTagName(e.slice(t,s)),c=6;break;case 1:u=e.slice(t,s),c=2;break;case 4:var m=e.slice(t,s).replace(/&#?\w+;/g,i);a.warning('attribute "'+m+'" missed quot(")!!'),o(u,m,t);case 5:c=6}else switch(c){case 2:n.tagName,"http://www.w3.org/1999/xhtml"===r[""]&&u.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute "'+u+'" missed value!! "'+u+'" instead2!!'),o(u,u,t),t=s,c=1;break;case 5:a.warning('attribute space is required"'+u+'"!!');case 6:c=1,t=s;break;case 3:c=4,t=s;break;case 7:throw new Error("elements closed character '/' and '>' must be connected to")}}s++}}function c(e,t,n){for(var r=e.tagName,i=null,a=e.length;a--;){var o=e[a],u=o.qName,s=o.value;if((p=u.indexOf(":"))>0)var c=o.prefix=u.slice(0,p),l=u.slice(p+1),m="xmlns"===c&&l;else l=u,c=null,m="xmlns"===u&&"";o.localName=l,!1!==m&&(null==i&&(i={},d(n,n={})),n[m]=i[m]=s,o.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(m,s))}for(a=e.length;a--;)(c=(o=e[a]).prefix)&&("xml"===c&&(o.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==c&&(o.uri=n[c||""]));var p;(p=r.indexOf(":"))>0?(c=e.prefix=r.slice(0,p),l=e.localName=r.slice(p+1)):(c=null,l=e.localName=r);var h=e.uri=n[c||""];if(t.startElement(h,l,r,e),!e.closed)return e.currentNSMap=n,e.localNSMap=i,!0;if(t.endElement(h,l,r),i)for(c in i)t.endPrefixMapping(c)}function l(e,t,n,r,i){if(/^(?:script|textarea)$/i.test(n)){var a=e.indexOf("</"+n+">",t),o=e.substring(t+1,a);if(/[&<]/.test(o))return/^script$/i.test(n)?(i.characters(o,0,o.length),a):(o=o.replace(/&#?\w+;/g,r),i.characters(o,0,o.length),a)}return t+1}function m(e,t,n,r){var i=r[n];return null==i&&((i=e.lastIndexOf("</"+n+">"))<t&&(i=e.lastIndexOf("</"+n)),r[n]=i),i<t}function d(e,t){for(var n in e)t[n]=e[n]}function p(e,t,n,r){if("-"===e.charAt(t+2))return"-"===e.charAt(t+3)?(i=e.indexOf("--\x3e",t+4))>t?(n.comment(e,t+4,i-t-4),i+3):(r.error("Unclosed comment"),-1):-1;if("CDATA["==e.substr(t+3,6)){var i=e.indexOf("]]>",t+9);return n.startCDATA(),n.characters(e,t+9,i-t-9),n.endCDATA(),i+3}var a=function(e,t){var n,r=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(i.lastIndex=t,i.exec(e);n=i.exec(e);)if(r.push(n),n[1])return r}(e,t),o=a.length;if(o>1&&/!doctype/i.test(a[0][0])){var u=a[1][0],s=!1,c=!1;o>3&&(/^public$/i.test(a[2][0])?(s=a[3][0],c=o>4&&a[4][0]):/^system$/i.test(a[2][0])&&(c=a[3][0]));var l=a[o-1];return n.startDTD(u,s,c),n.endDTD(),l.index+l[0].length}return-1}function h(e,t,n){var r=e.indexOf("?>",t);if(r){var i=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return i?(i[0].length,n.processingInstruction(i[1],i[2]),r+2):-1}return-1}function f(){this.attributeNames={}}a.prototype=new Error,a.prototype.name=a.name,o.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),d(t,t={}),function(e,t,n,r,i){function o(e){var t=e.slice(1,-1);return t in n?n[t]:"#"===t.charAt(0)?function(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}(parseInt(t.substr(1).replace("x","0x"))):(i.error("entity not found:"+e),e)}function d(t){if(t>x){var n=e.substring(x,t).replace(/&#?\w+;/g,o);b&&g(x),r.characters(n,0,t-x),x=t}}function g(t,n){for(;t>=v&&(n=w.exec(e));)N=n.index,v=N+n[0].length,b.lineNumber++;b.columnNumber=t-N+1}for(var N=0,v=0,w=/.*(?:\r\n?|\n)|.*$/g,b=r.locator,E=[{currentNSMap:t}],y={},x=0;;){try{var T=e.indexOf("<",x);if(T<0){if(!e.substr(x).match(/^\s*$/)){var D=r.doc,S=D.createTextNode(e.substr(x));D.appendChild(S),r.currentElement=S}return}switch(T>x&&d(T),e.charAt(T+1)){case"/":var C=e.indexOf(">",T+3),A=e.substring(T+2,C),I=E.pop();C<0?(A=e.substring(T+2).replace(/[\s<].*/,""),i.error("end tag name: "+A+" is not complete:"+I.tagName),C=T+1+A.length):A.match(/\s</)&&(A=A.replace(/[\s<].*/,""),i.error("end tag name: "+A+" maybe not complete"),C=T+1+A.length);var _=I.localNSMap,R=I.tagName==A;if(R||I.tagName&&I.tagName.toLowerCase()==A.toLowerCase()){if(r.endElement(I.uri,I.localName,A),_)for(var O in _)r.endPrefixMapping(O);R||i.fatalError("end tag name: "+A+" is not match the current start tagName:"+I.tagName)}else E.push(I);C++;break;case"?":b&&g(T),C=h(e,T,r);break;case"!":b&&g(T),C=p(e,T,r,i);break;default:b&&g(T);var M=new f,k=E[E.length-1].currentNSMap,U=(C=s(e,T,M,k,o,i),M.length);if(!M.closed&&m(e,C,M.tagName,y)&&(M.closed=!0,n.nbsp||i.warning("unclosed xml attribute")),b&&U){for(var F=u(b,{}),B=0;B<U;B++){var P=M[B];g(P.offset),P.locator=u(b,{})}r.locator=F,c(M,r,k)&&E.push(M),r.locator=b}else c(M,r,k)&&E.push(M);"http://www.w3.org/1999/xhtml"!==M.uri||M.closed?C++:C=l(e,C,M.tagName,o,r)}}catch(e){if(e instanceof a)throw e;i.error("element parse error: "+e),C=-1}C>x?x=C:d(Math.max(T,x)+1)}}(e,t,n,r,this.errorHandler),r.endDocument()}},f.prototype={setTagName:function(e){if(!i.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,n){if(!i.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},t.XMLReader=o,t.ParseError=a}},t={},function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(607).default;var e,t}));