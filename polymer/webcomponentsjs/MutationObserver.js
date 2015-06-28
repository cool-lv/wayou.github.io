if(typeof WeakMap==="undefined"){(function(){var e=Object.defineProperty;var t=Date.now()%1e9;var r=function(){this.name="__st"+(Math.random()*1e9>>>0)+(t++ +"__")};r.prototype={set:function(t,r){var i=t[this.name];if(i&&i[0]===t)i[1]=r;else e(t,this.name,{value:[t,r],writable:true});return this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:undefined},"delete":function(e){var t=e[this.name];if(!t||t[0]!==e)return false;t[0]=t[1]=undefined;return true},has:function(e){var t=e[this.name];if(!t)return false;return t[0]===e}};window.WeakMap=r})()}(function(e){var t=new WeakMap;var r;if(/Trident|Edge/.test(navigator.userAgent)){r=setTimeout}else if(window.setImmediate){r=window.setImmediate}else{var i=[];var n=String(Math.random());window.addEventListener("message",function(e){if(e.data===n){var t=i;i=[];t.forEach(function(e){e()})}});r=function(e){i.push(e);window.postMessage(n,"*")}}var a=false;var s=[];function o(e){s.push(e);if(!a){a=true;r(d)}}function u(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function d(){a=false;var e=s;s=[];e.sort(function(e,t){return e.uid_-t.uid_});var t=false;e.forEach(function(e){var r=e.takeRecords();f(e);if(r.length){e.callback_(r,e);t=true}});if(t)d()}function f(e){e.nodes_.forEach(function(r){var i=t.get(r);if(!i)return;i.forEach(function(t){if(t.observer===e)t.removeTransientObservers()})})}function v(e,r){for(var i=e;i;i=i.parentNode){var n=t.get(i);if(n){for(var a=0;a<n.length;a++){var s=n[a];var o=s.options;if(i!==e&&!o.subtree)continue;var u=r(o);if(u)s.enqueue(u)}}}}var h=0;function c(e){this.callback_=e;this.nodes_=[];this.records_=[];this.uid_=++h}c.prototype={observe:function(e,r){e=u(e);if(!r.childList&&!r.attributes&&!r.characterData||r.attributeOldValue&&!r.attributes||r.attributeFilter&&r.attributeFilter.length&&!r.attributes||r.characterDataOldValue&&!r.characterData){throw new SyntaxError}var i=t.get(e);if(!i)t.set(e,i=[]);var n;for(var a=0;a<i.length;a++){if(i[a].observer===this){n=i[a];n.removeListeners();n.options=r;break}}if(!n){n=new w(this,e,r);i.push(n);this.nodes_.push(e)}n.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){var r=t.get(e);for(var i=0;i<r.length;i++){var n=r[i];if(n.observer===this){n.removeListeners();r.splice(i,1);break}}},this);this.records_=[]},takeRecords:function(){var e=this.records_;this.records_=[];return e}};function l(e,t){this.type=e;this.target=t;this.addedNodes=[];this.removedNodes=[];this.previousSibling=null;this.nextSibling=null;this.attributeName=null;this.attributeNamespace=null;this.oldValue=null}function b(e){var t=new l(e.type,e.target);t.addedNodes=e.addedNodes.slice();t.removedNodes=e.removedNodes.slice();t.previousSibling=e.previousSibling;t.nextSibling=e.nextSibling;t.attributeName=e.attributeName;t.attributeNamespace=e.attributeNamespace;t.oldValue=e.oldValue;return t}var p,g;function m(e,t){return p=new l(e,t)}function N(e){if(g)return g;g=b(p);g.oldValue=e;return g}function O(){p=g=undefined}function M(e){return e===g||e===p}function D(e,t){if(e===t)return e;if(g&&M(e))return g;return null}function w(e,t,r){this.observer=e;this.target=t;this.options=r;this.transientObservedNodes=[]}w.prototype={enqueue:function(e){var t=this.observer.records_;var r=t.length;if(t.length>0){var i=t[r-1];var n=D(i,e);if(n){t[r-1]=n;return}}else{o(this.observer)}t[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;if(t.attributes)e.addEventListener("DOMAttrModified",this,true);if(t.characterData)e.addEventListener("DOMCharacterDataModified",this,true);if(t.childList)e.addEventListener("DOMNodeInserted",this,true);if(t.childList||t.subtree)e.addEventListener("DOMNodeRemoved",this,true)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;if(t.attributes)e.removeEventListener("DOMAttrModified",this,true);if(t.characterData)e.removeEventListener("DOMCharacterDataModified",this,true);if(t.childList)e.removeEventListener("DOMNodeInserted",this,true);if(t.childList||t.subtree)e.removeEventListener("DOMNodeRemoved",this,true)},addTransientObserver:function(e){if(e===this.target)return;this.addListeners_(e);this.transientObservedNodes.push(e);var r=t.get(e);if(!r)t.set(e,r=[]);r.push(this)},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[];e.forEach(function(e){this.removeListeners_(e);var r=t.get(e);for(var i=0;i<r.length;i++){if(r[i]===this){r.splice(i,1);break}}},this)},handleEvent:function(e){e.stopImmediatePropagation();switch(e.type){case"DOMAttrModified":var t=e.attrName;var r=e.relatedNode.namespaceURI;var i=e.target;var n=new m("attributes",i);n.attributeName=t;n.attributeNamespace=r;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;v(i,function(e){if(!e.attributes)return;if(e.attributeFilter&&e.attributeFilter.length&&e.attributeFilter.indexOf(t)===-1&&e.attributeFilter.indexOf(r)===-1){return}if(e.attributeOldValue)return N(a);return n});break;case"DOMCharacterDataModified":var i=e.target;var n=m("characterData",i);var a=e.prevValue;v(i,function(e){if(!e.characterData)return;if(e.characterDataOldValue)return N(a);return n});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s=e.target;var o,u;if(e.type==="DOMNodeInserted"){o=[s];u=[]}else{o=[];u=[s]}var d=s.previousSibling;var f=s.nextSibling;var n=m("childList",e.target.parentNode);n.addedNodes=o;n.removedNodes=u;n.previousSibling=d;n.nextSibling=f;v(e.relatedNode,function(e){if(!e.childList)return;return n})}O()}};e.JsMutationObserver=c;if(!e.MutationObserver)e.MutationObserver=c})(this);