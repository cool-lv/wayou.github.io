var margin=20,diameter=600,windowWidth=window.screen.width,windowHeight=window.screen.height,color=d3.scale.linear().domain([-1,5]).range(["hsl(152,80%,80%)","hsl(228,30%,40%)"]).interpolate(d3.interpolateHcl),pack=d3.layout.pack().padding(2).size([diameter-margin,diameter-margin]).value(function(t){return t.size}),svg=d3.select("body").append("svg").attr("width",windowWidth).attr("height",windowHeight).append("g").attr("transform","translate("+windowWidth/2+","+windowHeight/2+")");d3.json("./data/baidu.json",function(t,e){function n(t){a=t;var e=d3.transition().duration(d3.event.altKey?7500:750).tween("zoom",function(){var t=d3.interpolateZoom(i,[a.x,a.y,2*a.r+margin]);return function(e){r(t(e))}});e.selectAll("text").filter(function(t){return t.parent===a||"inline"===this.style.display}).style("fill-opacity",function(t){return t.parent===a?1:0}).each("start",function(t){t.parent===a&&(this.style.display="inline")}).each("end",function(t){t.parent!==a&&(this.style.display="none")})}function r(t){var e=diameter/t[2];i=t,d.attr("transform",function(n){return"translate("+(n.x-t[0])*e+","+(n.y-t[1])*e+")"}),o.attr("r",function(t){return t.r*e})}if(t)return console.error(t);var i,a=e,l=pack.nodes(e),o=svg.selectAll("circle").data(l).enter().append("circle").attr("class",function(t){return t.parent?t.children?"node":"node node--leaf":"node node--root"}).style("fill",function(t){return t.children?color(t.depth):null}).on("click",function(t){a!==t&&(n(t),d3.event.stopPropagation())}),d=(svg.selectAll("text").data(l).enter().append("text").attr("class","label").style("fill-opacity",function(t){return t.parent===e?1:0}).style("display",function(t){return t.parent===e?null:"none"}).text(function(t){return t.name}),svg.selectAll("circle,text"));d3.select("body").style("background",color(-1)).on("click",function(){n(e)}),r([e.x,e.y,2*e.r+margin])}),d3.select(self.frameElement).style("height",diameter+"px");