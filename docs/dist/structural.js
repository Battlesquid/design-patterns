(()=>{"use strict";var t={156:function(t,e,o){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,o,r,n){var i=t.call(this)||this;return i.pos=e,i.vel=o,i.size=r,i.ballType=n,i}return n(e,t),e.prototype.getX=function(){return this.pos.x},e.prototype.getY=function(){return this.pos.y},e.prototype.setX=function(t){this.pos.x=t},e.prototype.setY=function(t){this.pos.y=t},e.prototype.getVx=function(){return this.vel.x},e.prototype.getVy=function(){return this.vel.y},e.prototype.setVX=function(t){this.vel.x=t},e.prototype.setVY=function(t){this.vel.y=t},e.prototype.invertVX=function(){this.vel.x*=-1},e.prototype.invertVY=function(){this.vel.y*=-1},e.prototype.getSize=function(){return this.size},e.prototype.getBallType=function(){return this.ballType},e.prototype.draw=function(t){this.ballType.update(t,this)},e.prototype.updatePosition=function(){this.setX(this.getX()+this.getVx()),this.setY(this.getY()+this.getVy())},e}(i(o(336)).default);e.default=a},273:function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(o(156)),i=r(o(271)),a=function(){function t(){this.ballTypes=[]}return t.prototype.createBall=function(t,e,o,r,i){var a=this.getBallType(o,i,r);return new n.default(t,e,r,a)},t.prototype.getBallType=function(t,e,o){var r=this.ballTypes.find((function(r){return r.equals(t,e,o)}));if(r)return console.log('[BallFactory]: Ball of type "'.concat(t,'" already exists.')),r;console.log('[BallFactory]: Creating ball of type "'.concat(t,'"'));var n=new i.default(t,e,o);return this.ballTypes.push(n),n},t}();e.default=a},271:function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(o(888)),i=function(){function t(t,e,o){this.type=t,this.color=e,this.size=o}return t.prototype.getType=function(){return this.type},t.prototype.getColor=function(){return this.color},t.prototype.getSize=function(){return this.size},t.prototype.equals=function(t,e,o){return this.color===e&&this.size===o&&this.type===t},t.prototype.update=function(t,e){(e.getX()>n.default.WIDTH-e.getSize()||e.getX()<e.getSize())&&e.invertVX(),(e.getY()>n.default.HEIGHT-e.getSize()||e.getY()<e.getSize())&&e.invertVY(),e.updatePosition(),this.draw(t,e)},t.prototype.draw=function(t,e){t.save();var o=Math.atan2(e.getVy(),e.getVx());t.shadowColor=e.getBallType().getColor(),t.shadowBlur=10,t.strokeStyle=e.getBallType().getColor(),t.beginPath(),t.ellipse(e.getX(),e.getY(),e.getSize(),e.getSize(),0,0,360),t.stroke(),t.beginPath(),t.moveTo(e.getX(),e.getY());var r=e.getSize()*Math.cos(o),n=e.getSize()*Math.sin(o);t.lineTo(e.getX()+r,e.getY()+n),t.stroke(),t.restore()},t}();e.default=i},336:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},888:function(t,e,o){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(o(273)),u=i(o(792)),s=o(213),l=o(394),c=function(t){function e(o){var r=t.call(this)||this;r.ballCache=new a.default,r.entities=[],r.ticks=0,r.tickLimit=1e3,o.width=e.WIDTH,o.height=e.HEIGHT,r.renderer=new u.default(o),r.entities.push(r);for(var n=[{type:"slow",size:60,color:"rgb(252, 186, 3)"},{type:"normal",size:30,color:"rgb(39, 100, 214)"},{type:"fast",size:15,color:"rgb(173, 40, 173)"}],i=0;i<50;i++){var c=(0,s.rand)(3),p={x:(0,s.rand)(e.WIDTH-n[c].size,n[c].size),y:(0,s.rand)(e.HEIGHT-n[c].size,n[c].size)},f=(0,l.rand_vector)(60/n[c].size,1),h=r.ballCache.createBall(p,f,n[c].type,n[c].size/5,n[c].color);r.entities.push(h)}return requestAnimationFrame(r.update.bind(r)),r}var o,r,i,c,p,f;return n(e,t),e.prototype.update=function(){requestAnimationFrame(this.update.bind(this)),this.ticks++,this.renderer.clearCanvas();for(var t=0,e=this.entities;t<e.length;t++)e[t].draw(this.renderer.getCtx());this.ticks%this.tickLimit==0&&console.log("[World]: Tick Limit reached.")},e.prototype.draw=function(t){t.save(),t.fillStyle="#111111",t.fillRect(0,0,e.WIDTH,e.HEIGHT),t.strokeStyle="#404040",t.lineWidth=.1;for(var o=0;o<e.WIDTH/e.GRID_SIZE;o++)t.moveTo(0,o*e.GRID_SIZE),t.lineTo(e.WIDTH,o*e.GRID_SIZE),t.stroke(),t.moveTo(o*e.GRID_SIZE,0),t.lineTo(o*e.GRID_SIZE,e.HEIGHT),t.stroke();t.restore()},e.WIDTH=null!==(i=null===(r=null===(o=document.querySelector(".canvas"))||void 0===o?void 0:o.parentElement)||void 0===r?void 0:r.clientWidth)&&void 0!==i?i:800,e.HEIGHT=null!==(f=null===(p=null===(c=document.querySelector(".canvas"))||void 0===c?void 0:c.parentElement)||void 0===p?void 0:p.clientHeight)&&void 0!==f?f:600,e.GRID_SIZE=100,e}(i(o(336)).default);e.default=c},792:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.canvas=t,this.ctx=this.canvas.getContext("2d")}return t.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.getCtx=function(){return this.ctx},t}();e.default=o},607:function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(o(888)),i=document.querySelector(".canvas");new n.default(i)},213:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.rad=e.deg=e.PI_2=e.rand=void 0,e.rand=function(t,e){return void 0!==e?Math.floor(Math.random()*(t-e+1))+e:Math.floor(Math.random()*t)},e.PI_2=2*Math.PI,e.deg=function(t){return 180/Math.PI*t},e.rad=function(t){return Math.PI/180*t}},394:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.rand_vector=e.normalize=e.v_angle=e.v_sub=void 0;var r=o(213);e.v_sub=function(t,e){return{x:e.x-t.x,y:e.y-t.y}},e.v_angle=function(t){return Math.atan(t.y/t.x)+Math.PI*(t.x<0?1:0)},e.normalize=function(t){return{x:t.x/t.mag,y:t.y/t.mag}},e.rand_vector=function(t,e){var o=Math.random()*(2*Math.PI),n=(0,r.rand)(t,e);return{x:Math.cos(o)*n,y:Math.sin(o)*n,mag:n}}}},e={};!function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}(607)})();