(function(){if(!window.Prism){return}var e=document.createElement("header");if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+/g,"").replace(/\s+$/g,"")}}if(!("textContent"in e)&&"innerText"in e&&Object.defineProperty){Object.defineProperty(Element.prototype,"textContent",{get:function(){return this.innerText},set:function(e){this.innerText=e}})}if(!document.addEventListener&&"textContent"in e){setTimeout(Prism.highlightAll,10)}e.innerHTML="\r\n";if(e.textContent.indexOf("\n")===-1){Prism.hooks.add("after-highlight",function(e){e.element.innerHTML=e.highlightedCode.replace(/\r?\n/g,"<br>")})}})();