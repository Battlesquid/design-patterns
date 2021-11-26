(()=>{"use strict";var t={156:function(t,e,o){var n,r=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(336)),a=o(216),u=function(t){function e(e,o,n,r){var i=t.call(this)||this;return i.alive=!0,i.dormant=!1,i.pos=e,i.vel=o,i.size=n,i.ballType=r,i}return r(e,t),e.prototype.getX=function(){return this.pos.getX()},e.prototype.getY=function(){return this.pos.getY()},e.prototype.setX=function(t){this.pos.setX(t)},e.prototype.setY=function(t){this.pos.setY(t)},e.prototype.getVx=function(){return this.vel.getVx()},e.prototype.getVy=function(){return this.vel.getVy()},e.prototype.setVX=function(t){this.vel.setVx(t)},e.prototype.setVY=function(t){this.vel.setVy(t)},e.prototype.invertVX=function(){this.vel.setVx(-1*this.vel.getVx())},e.prototype.invertVY=function(){this.vel.setVy(-1*this.vel.getVy())},e.prototype.getSize=function(){return this.size},e.prototype.getBallType=function(){return this.ballType},e.prototype.isAlive=function(){return this.alive},e.prototype.isDormant=function(){return this.dormant},e.prototype.draw=function(t){this.ballType.update(t,this)},e.prototype.updateVelocity=function(){var t=Math.abs(this.vel.getMag())>this.vel.getMaxMag()?this.vel.getMaxMag()/Math.abs(this.vel.getMag()):1;this.vel.setVx(this.vel.getVx()*t),this.vel.setVy(this.vel.getVy()*t)},e.prototype.updatePosition=function(){this.setX(this.getX()+this.getVx()),this.setY(this.getY()+this.getVy())},e.prototype.update=function(t,e){var o=this,n=e.find((function(t){return(0,a.dist)(t.getX(),t.getY(),o.pos.getX(),o.pos.getY())<t.getRad()}));n&&(n.isSafe()&&this.dormant?this.dormant=!1:n.isSafe()||this.dormant?!n.isSafe()&&this.dormant&&(this.alive=!1,t.unsubscribe(this)):this.dormant=!0)},e}(s.default);e.default=u},273:function(t,e,o){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(o(156)),i=n(o(271)),s=function(){function t(){this.ballTypes=[]}return t.prototype.createBall=function(t,e,o,n,i){var s=this.getBallType(o,i,n);return new r.default(t,e,n,s)},t.prototype.getBallType=function(t,e,o){var n=this.ballTypes.find((function(n){return n.equals(t,e,o)}));if(n)return console.log('[BallFactory]: Ball of type "'.concat(t,'" already exists.')),n;console.log('[BallFactory]: Creating ball of type "'.concat(t,'"'));var r=new i.default(t,e,o);return this.ballTypes.push(r),r},t}();e.default=s},271:function(t,e,o){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(o(888)),i=function(){function t(t,e,o){this.type=t,this.color=e,this.size=o}return t.prototype.getType=function(){return this.type},t.prototype.getColor=function(){return this.color},t.prototype.getSize=function(){return this.size},t.prototype.equals=function(t,e,o){return this.color===e&&this.size===o&&this.type===t},t.prototype.update=function(t,e){(e.getX()>r.default.WIDTH-e.getSize()||e.getX()<e.getSize())&&e.invertVX(),(e.getY()>r.default.HEIGHT-e.getSize()||e.getY()<e.getSize())&&e.invertVY(),e.isDormant()||e.updatePosition(),this.draw(t,e)},t.prototype.draw=function(t,e){t.save();var o=e.isDormant()?"rgb(105, 0, 18)":e.getBallType().getColor();o=e.isAlive()?o:"rgb(44, 44, 44)",t.shadowColor=o,t.shadowBlur=10,t.strokeStyle=o,t.beginPath(),t.ellipse(e.getX(),e.getY(),e.getSize(),e.getSize(),0,0,360),t.stroke();var n=Math.atan2(e.getVy(),e.getVx()),r=e.getSize()*Math.cos(n),i=e.getSize()*Math.sin(n);t.beginPath(),t.moveTo(e.getX(),e.getY()),t.lineTo(e.getX()+r,e.getY()+i),t.stroke(),t.restore()},t}();e.default=i},336:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},14:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.getX=function(){return this.x},t.prototype.getY=function(){return this.y},t.prototype.setX=function(t){this.x=t},t.prototype.setY=function(t){this.y=t},t}();e.default=o},807:function(t,e,o){var n,r=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(336)),a=o(216),u=i(o(14)),l=i(o(888)),c=function(t){function e(){var e=t.call(this)||this;return e.pos=new u.default(l.default.GRID_SIZE*(0,a.rand)(l.default.WIDTH/l.default.GRID_SIZE),l.default.GRID_SIZE*(0,a.rand)(l.default.HEIGHT/l.default.GRID_SIZE)),e.rad=l.default.GRID_SIZE/2,e.safe=0===(0,a.rand)(2),e}return r(e,t),e.prototype.setLocation=function(t,e){this.pos.setX(t),this.pos.setY(e)},e.prototype.changeLocation=function(){this.pos.setX(l.default.GRID_SIZE*(0,a.rand)(l.default.WIDTH/l.default.GRID_SIZE)),this.pos.setY(l.default.GRID_SIZE*(0,a.rand)(l.default.HEIGHT/l.default.GRID_SIZE))},e.prototype.getPos=function(){return this.pos},e.prototype.getX=function(){return this.pos.getX()},e.prototype.getY=function(){return this.pos.getY()},e.prototype.getRad=function(){return this.rad},e.prototype.isSafe=function(){return this.safe},e.prototype.equals=function(t){return this.pos.getX()===t.getX()&&this.pos.getY()===t.getY()},e.prototype.draw=function(t){t.save();var e=this.safe?"rgb(98, 255, 66)":"rgb(255, 48, 84)";t.shadowColor=e,t.shadowBlur=10,t.strokeStyle=e,t.beginPath(),t.ellipse(this.pos.getX(),this.pos.getY(),this.rad,this.rad,0,0,360),t.stroke(),t.restore()},e}(s.default);e.default=c},335:function(t,e,o){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(o(807)),i=n(o(888)),s=function(){function t(){this.observers=[],this.regions=[];for(var t=function(t){for(var o=new r.default;e.regions.find((function(t){return t.equals(o)}));)o=new r.default;e.regions.push(o)},e=this,o=0;o<i.default.WIDTH/i.default.GRID_SIZE;o++)t()}return t.prototype.subscribe=function(t){this.observers.push(t)},t.prototype.getRegions=function(){return this.regions},t.prototype.resetLocations=function(){for(var t=0,e=this.regions;t<e.length;t++)e[t].setLocation(0,0)},t.prototype.changeLocations=function(){for(var t=0,e=this.regions;t<e.length;t++)e[t].changeLocation()},t.prototype.unsubscribe=function(t){this.observers=this.observers.filter((function(e){return e!==t}))},t.prototype.notifyObservers=function(){var t=this;if(0!==this.observers.length){console.log("[RegionPublisher]: Notifying ".concat(this.observers.length," observers."));for(var e=0,o=this.observers;e<o.length;e++)o[e].update(this,this.regions);setTimeout((function(){t.resetLocations(),t.changeLocations()}),1e3)}else console.log("[RegionPublisher]: No observers to notify...")},t}();e.default=s},678:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,o){this.mag=0,this.maxMag=-1,this.vx=t,this.vy=e,o&&(this.maxMag=o),this.updateMag()}return t.prototype.setVx=function(t){this.vx=t,this.updateMag()},t.prototype.setVy=function(t){this.vy=t,this.updateMag()},t.prototype.addVx=function(t){this.vx+=t,this.updateMag()},t.prototype.addVy=function(t){this.vy+=t,this.updateMag()},t.prototype.setMaxMag=function(t){this.maxMag=t},t.prototype.getVx=function(){return this.vx},t.prototype.getVy=function(){return this.vy},t.prototype.getMag=function(){return this.mag},t.prototype.getMaxMag=function(){return this.maxMag},t.prototype.updateMag=function(){this.mag=Math.sqrt(Math.pow(this.vx,2)+Math.pow(this.vy,2))},t}();e.default=o},888:function(t,e,o){var n,r=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(273)),a=i(o(792)),u=o(216),l=i(o(336)),c=i(o(335)),p=i(o(14)),f=o(537),h=function(t){function e(o){var n=t.call(this)||this;n.ballCache=new s.default,n.entities=[],n.ticks=0,n.tickLimit=1e3,o.width=e.WIDTH,o.height=e.HEIGHT,n.entities.push(n),n.renderer=new a.default(o),n.regionSubject=new c.default;for(var r=0,i=n.regionSubject.getRegions();r<i.length;r++){var l=i[r];n.entities.push(l)}for(var h=[{type:"slow",size:60,color:"rgb(252, 186, 3)"},{type:"normal",size:30,color:"rgb(39, 100, 214)"},{type:"fast",size:15,color:"rgb(173, 40, 173)"}],d=0;d<50;d++){var g=(0,u.rand)(3),y=new p.default((0,u.rand)(e.WIDTH-h[g].size,h[g].size),(0,u.rand)(e.HEIGHT-h[g].size,h[g].size)),v=(0,f.rand_vector)(80/h[g].size,1),_=n.ballCache.createBall(y,v,h[g].type,h[g].size/5,h[g].color);n.regionSubject.subscribe(_),n.entities.push(_)}return requestAnimationFrame(n.update.bind(n)),n}var o,n,i,l,h,d;return r(e,t),e.prototype.update=function(){requestAnimationFrame(this.update.bind(this)),this.ticks++,this.renderer.clearCanvas();for(var t=0,e=this.entities;t<e.length;t++)e[t].draw(this.renderer.getCtx());this.ticks%this.tickLimit==0&&(console.log("[World]: Tick Limit reached."),this.regionSubject.notifyObservers())},e.prototype.draw=function(t){t.save(),t.fillStyle="#111111",t.fillRect(0,0,e.WIDTH,e.HEIGHT),t.strokeStyle="#404040",t.lineWidth=.1;for(var o=0;o<e.WIDTH/e.GRID_SIZE;o++)t.moveTo(0,o*e.GRID_SIZE),t.lineTo(e.WIDTH,o*e.GRID_SIZE),t.stroke(),t.moveTo(o*e.GRID_SIZE,0),t.lineTo(o*e.GRID_SIZE,e.HEIGHT),t.stroke();t.restore()},e.WIDTH=null!==(i=null===(n=null===(o=document.querySelector(".canvas"))||void 0===o?void 0:o.parentElement)||void 0===n?void 0:n.clientWidth)&&void 0!==i?i:800,e.HEIGHT=null!==(d=null===(h=null===(l=document.querySelector(".canvas"))||void 0===l?void 0:l.parentElement)||void 0===h?void 0:h.clientHeight)&&void 0!==d?d:600,e.GRID_SIZE=100,e}(l.default);e.default=h},792:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.canvas=t,this.ctx=this.canvas.getContext("2d")}return t.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.getCtx=function(){return this.ctx},t}();e.default=o},607:function(t,e,o){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(o(888)),i=document.querySelector(".canvas");new r.default(i)},216:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.dist=e.rad=e.deg=e.PI_2=e.rand=void 0,e.rand=function(t,e){return void 0!==e?Math.floor(Math.random()*(t-e+1))+e:Math.floor(Math.random()*t)},e.PI_2=2*Math.PI,e.deg=function(t){return 180/Math.PI*t},e.rad=function(t){return Math.PI/180*t},e.dist=function(t,e,o,n){return Math.sqrt(Math.pow(n-e,2)+Math.pow(o-t,2))}},537:function(t,e,o){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.rand_vector=e.normalize=e.v_angle=e.v_sub=void 0;var r=o(216),i=n(o(678));e.v_sub=function(t,e){return{x:e.getVx()-t.getVx(),y:e.getVy()-t.getVy()}},e.v_angle=function(t){return Math.atan(t.getVy()/t.getVx())+Math.PI*(t.getVx()<0?1:0)},e.normalize=function(t){return{x:t.getVx()/t.getMag(),y:t.getVy()/t.getMag()}},e.rand_vector=function(t,e){var o=Math.random()*(2*Math.PI),n=(0,r.rand)(t,e);return new i.default(Math.cos(o)*n,Math.sin(o)*n,t)}}},e={};!function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,o),i.exports}(607)})();