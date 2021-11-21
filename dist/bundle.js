(()=>{"use strict";var t={156:function(t,e,o){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(336)),a=o(394),u=function(t){function e(e,o,r,n,i){var s=t.call(this)||this;return s.isSafe=!0,s.pos=e,s.v=o,s.size=r,s.ballType=n,s.target=i,s}return n(e,t),e.prototype.getX=function(){return this.pos.x},e.prototype.getY=function(){return this.pos.y},e.prototype.setX=function(t){this.pos.x=t},e.prototype.setY=function(t){this.pos.y=t},e.prototype.getVx=function(){return this.v.x},e.prototype.getVy=function(){return this.v.y},e.prototype.setVX=function(t){this.v.x=t},e.prototype.setVY=function(t){this.v.y=t},e.prototype.invertVX=function(){this.v.x*=-1},e.prototype.invertVY=function(){this.v.y*=-1},e.prototype.getSize=function(){return this.size},e.prototype.getAngle=function(){return this.v.theta},e.prototype.setAngle=function(t){this.v.theta=t},e.prototype.getBallType=function(){return this.ballType},e.prototype.getIsSafe=function(){return this.isSafe},e.prototype.draw=function(t){this.ballType.update(t,this)},e.prototype.updateVelocity=function(){this.setVX(Math.cos(this.getAngle())*this.v.mag),this.setVY(Math.sin(this.getAngle())*this.v.mag)},e.prototype.recalculateAngle=function(){if(!this.isSafe){var t=(0,a.v_angle)((0,a.v_sub)(this.pos,this.target)),e=Math.sign(t-this.getAngle());this.setAngle(this.getAngle()+.2*e),this.updateVelocity(),this.getAngle().toPrecision(1)===t.toPrecision(1)&&(this.isSafe=!0)}},e.prototype.update=function(t){this.target=t.getPos(),this.isSafe=!1},e}(s.default);e.default=u},995:function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(o(156)),i=r(o(271)),s=function(){function t(){this.ballTypes=[]}return t.prototype.createBall=function(t,e,o,r,i,s){var a=this.getBallType(o,i,r);return new n.default(t,e,r,a,s)},t.prototype.getBallType=function(t,e,o){var r=this.ballTypes.find((function(r){return r.equals(t,e,o)}));if(r)return console.log('[BallFactory]: Ball of type "'+t+'" already exists.'),r;console.log('[BallFactory]: Creating ball of type "'+t+'"');var n=new i.default(t,e,o);return this.ballTypes.push(n),n},t}();e.default=s},271:function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(o(888)),i=function(){function t(t,e,o){this.type=t,this.color=e,this.size=o}return t.prototype.getType=function(){return this.type},t.prototype.getColor=function(){return this.color},t.prototype.getSize=function(){return this.size},t.prototype.equals=function(t,e,o){return this.color===e&&this.size===o&&this.type===t},t.prototype.update=function(t,e){e.setX(e.getX()+e.getVx()),e.setY(e.getY()+e.getVy()),(e.getX()>n.default.WIDTH||e.getX()<0)&&e.invertVX(),(e.getY()>n.default.HEIGHT||e.getY()<0)&&e.invertVY(),e.getIsSafe()||e.recalculateAngle(),this.draw(t,e)},t.prototype.draw=function(t,e){t.save(),t.shadowColor=e.getBallType().getColor(),t.shadowBlur=10,t.strokeStyle=e.getBallType().getColor(),t.beginPath(),t.ellipse(e.getX(),e.getY(),e.getSize(),e.getSize(),e.getAngle(),0,360),t.stroke(),t.beginPath(),t.moveTo(e.getX(),e.getY());var o=e.getSize()*Math.cos(e.getAngle()),r=e.getSize()*Math.sin(e.getAngle());t.lineTo(e.getX()+o,e.getY()+r),t.stroke(),t.restore()},t}();e.default=i},336:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},807:function(t,e,o){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(336)),a=o(882),u=function(t){function e(e,o){var r=t.call(this)||this;return r.pos={x:0,y:0},r.widthBound=e,r.heightBound=o,r.pos.x=(0,a.rand)(r.widthBound),r.pos.y=(0,a.rand)(r.heightBound),r.rad=(0,a.rand)(100,40),r}return n(e,t),e.prototype.changeLocation=function(){this.pos.x=(0,a.rand)(this.widthBound),this.pos.y=(0,a.rand)(this.heightBound),this.rad--,console.log("[Region]: Location: ("+this.pos.x+", "+this.pos.y+") with radius "+this.rad)},e.prototype.getPos=function(){return this.pos},e.prototype.draw=function(t){t.save();var e="rgb(96, 245, 66)";t.shadowColor=e,t.shadowBlur=10,t.strokeStyle=e,t.beginPath(),t.ellipse(this.pos.x,this.pos.y,this.rad,this.rad,0,0,360),t.stroke(),t.restore()},e}(s.default);e.default=u},955:function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(o(807)),i=r(o(888)),s=function(){function t(){this.observers=[],this.region=new n.default(i.default.WIDTH,i.default.HEIGHT)}return t.prototype.subscribe=function(t){this.observers.push(t)},t.prototype.unsubscribe=function(t){this.observers=this.observers.filter((function(e){return e!==t}))},t.prototype.getRegion=function(){return this.region},t.prototype.changeLocation=function(){this.region.changeLocation()},t.prototype.notifyObservers=function(){console.log("[RegionPublisher]: Notifying "+this.observers.length+" observers.");for(var t=0,e=this.observers;t<e.length;t++)e[t].update(this.region)},t}();e.default=s},888:function(t,e,o){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(995)),a=i(o(955)),u=i(o(792)),l=o(882),c=o(394),p=function(t){function e(o){var r=t.call(this)||this;r.ballFactory=new s.default,r.entities=[],r.ticks=0,r.tickLimit=1e3,o.width=e.WIDTH,o.height=e.HEIGHT,r.renderer=new u.default(o),r.rp=new a.default,r.entities.push(r),r.entities.push(r.rp.getRegion());for(var n=[{type:"slow",size:60,color:"rgb(252, 186, 3)"},{type:"normal",size:30,color:"rgb(39, 100, 214)"},{type:"fast",size:15,color:"rgb(173, 40, 173)"}],i=0;i<50;i++){var p={x:(0,l.rand)(e.WIDTH),y:(0,l.rand)(e.HEIGHT)},f=(0,l.rand)(3),h=(0,c.rand_vector)(60/n[f].size,1),d=r.ballFactory.createBall(p,h,n[f].type,n[f].size/5,n[f].color,r.rp.getRegion().getPos());r.rp.subscribe(d),r.entities.push(d)}return requestAnimationFrame(r.update.bind(r)),r}return n(e,t),e.prototype.update=function(){requestAnimationFrame(this.update.bind(this)),this.ticks++,this.renderer.clearCanvas();for(var t=0,e=this.entities;t<e.length;t++)e[t].draw(this.renderer.getCtx());this.ticks%this.tickLimit==0&&(console.log("[World]: Tick Limit reached."),this.rp.changeLocation(),this.rp.notifyObservers())},e.prototype.draw=function(t){t.save(),t.fillStyle="#111111",t.fillRect(0,0,e.WIDTH,e.HEIGHT),t.strokeStyle="#404040",t.lineWidth=.1;for(var o=0;o<e.WIDTH/e.GRID_SIZE;o++)t.moveTo(0,o*e.GRID_SIZE),t.lineTo(e.WIDTH,o*e.GRID_SIZE),t.stroke(),t.moveTo(o*e.GRID_SIZE,0),t.lineTo(o*e.GRID_SIZE,e.HEIGHT),t.stroke();t.restore()},e.WIDTH=800,e.HEIGHT=600,e.GRID_SIZE=100,e}(i(o(336)).default);e.default=p},792:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.canvas=t,this.ctx=this.canvas.getContext("2d")}return t.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.getCtx=function(){return this.ctx},t}();e.default=o},607:function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(o(888)),i=document.querySelector(".canvas");new n.default(i)},882:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randColor=e.rand=void 0,e.rand=function(t,e){return void 0!==e?Math.floor(Math.random()*(t-e+1))+e:Math.floor(Math.random()*t)},e.randColor=function(){return"rgb("+(0,e.rand)(255)+", "+(0,e.rand)(255)+", "+(0,e.rand)(255)+")"}},394:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.rand_vector=e.rad=e.deg=e.v_angle=e.v_sub=void 0;var r=o(882);e.v_sub=function(t,e){return{x:e.x-t.x,y:e.y-t.y}},e.v_angle=function(t){return Math.atan(t.y/t.x)+Math.PI*(t.x<0?1:0)},e.deg=function(t){return 180/Math.PI*t},e.rad=function(t){return Math.PI/180*t},e.rand_vector=function(t,e){var o=(0,r.rand)(2*Math.PI,0),n=(0,r.rand)(t,e);return{x:Math.cos(o)*n,y:Math.sin(o)*n,mag:n,theta:o}}}},e={};!function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}(607)})();