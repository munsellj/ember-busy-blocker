"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,r){var d=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("dummy/components/busy-blocker",["exports","ember-busy-blocker/components/busy-blocker"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/index",["exports","ember"],function(e,t){var a=t["default"].Controller,n=t["default"].inject;e["default"]=a.extend({busy:n.service(),actions:{heroAction:function(){this.get("busy").show({message:"✋ Talk to the hand ✋"})},showBusy:function(){this.get("busy").show({message:"❄️ Cool your jets ✈️"})}}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/mixins/busy",["exports","ember"],function(e,t){var a=t["default"].Mixin,n=t["default"].inject;e["default"]=a.create({busy:n.service(),actions:{busy:function(e){this.get("busy").show(e)},free:function(){this.get("busy").hide()}}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/routes/application",["exports","ember","dummy/mixins/busy"],function(e,t,a){var n=t["default"].Evented,r=t["default"].Route,d=t["default"].on,i=t["default"].run,l=3e3;e["default"]=r.extend(a["default"],n,{hideTimer:null,_init:d("activate",function(){var e=this.get("busy");e.on("hide",this,function(){this.set("hideTimer",null)}),e.on("show",this,this._scheduleHide)}),_scheduleHide:function(){var e=this.get("busy"),t=this.get("hideTimer");t&&i.cancel(t),t=i.later(this,function(){e.hide()},l),this.set("hideTimer",t)}})}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/busy",["exports","ember-busy-blocker/services/busy"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.5",loc:{source:null,start:{line:1,column:0},end:{line:38,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("nav");e.setAttribute(a,"class","navbar navbar-default navbar-fixed-top");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","navbar-header");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("button");e.setAttribute(d,"type","button"),e.setAttribute(d,"class","navbar-toggle collapsed"),e.setAttribute(d,"data-toggle","collapse"),e.setAttribute(d,"data-target","#navbar"),e.setAttribute(d,"aria-expanded","false"),e.setAttribute(d,"aria-controls","navbar");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","sr-only");var l=e.createTextNode("Toggle navigation");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","icon-bar"),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","icon-bar"),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","icon-bar"),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"id","navbar"),e.setAttribute(r,"class","navbar-collapse collapse");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("ul");e.setAttribute(d,"class","nav navbar-nav navbar-right");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("li"),l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createElement("a");e.setAttribute(l,"href","https://github.com/munsellj/ember-busy-blocker");var o=e.createTextNode("Github");e.appendChild(l,o),e.appendChild(i,l);var l=e.createTextNode("\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("li"),l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createElement("a");e.setAttribute(l,"href","https://www.npmjs.com/package/ember-busy-blocker");var o=e.createTextNode("npm");e.appendChild(l,o),e.appendChild(i,l);var l=e.createTextNode("\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("li"),l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createElement("a");e.setAttribute(l,"href","https://emberobserver.com/addons/ember-busy-blocker");var o=e.createTextNode("Ember Observer");e.appendChild(l,o),e.appendChild(i,l);var l=e.createTextNode("\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("hr");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("footer"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("© 2016 ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","http://jonat.hn");var i=e.createTextNode("Jonathon Munsell");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode(".  MIT License");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(3);return n[0]=e.createMorphAt(e.childAt(t,[0,1,1]),3,3),n[1]=e.createMorphAt(t,2,2,a),n[2]=e.createMorphAt(t,6,6,a),n},statements:[["inline","link-to",["Ember Busy Blocker","index"],["class","navbar-brand"],["loc",[null,[10,6],[10,67]]]],["content","outlet",["loc",[null,[28,0],[28,10]]]],["content","busy-blocker",["loc",[null,[37,0],[37,16]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.4.5",loc:{source:null,start:{line:1,column:0},end:{line:44,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment(" Main jumbotron for a primary marketing message or call to action ");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","jumbotron");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h1"),d=e.createTextNode("Hold Up! Wait a Second!");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Sometimes your code just needs a second to do something without being interupted... This Ember Addon is for exactly those times.");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("button");e.setAttribute(d,"class","btn btn-primary btn-lg"),e.setAttribute(d,"role","button");var i=e.createTextNode("\n        Try It Now »\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment(" Example row of columns ");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("h2"),i=e.createTextNode("Simple Usage");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n        Using Busy Blocker is simple, just inject the Busy Service and call show() to show the busy animation and block user input. When you're done, call hide() and busy blocker lets the user get back to doin' their user stuff. You can also easily customize the busy message each time you show the busy animation.\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("button");e.setAttribute(i,"class","btn btn-default"),e.setAttribute(i,"role","button");var l=e.createTextNode("\n          Wait Now »\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("h2"),i=e.createTextNode("Busy Mixin");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n        The addon includes a Busy Mixin that you can use to easily add support for Busy Blocker in any Ember.Object(Route, Controller, Component, etc...). The mixin injects the busy service for you and also adds a couple of convenience actions you can use to get busy real quick.\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("button");e.setAttribute(i,"class","btn btn-default js-busy-mixin-btn"),e.setAttribute(i,"role","button");var l=e.createTextNode("\n          Trigger via Mixin Action »\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("button");e.setAttribute(i,"class","js-free-mixin-btn"),e.setAttribute(i,"style","display: none;");var l=e.createTextNode("\n          Hide via Mixin Action »\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2,1,5,1]),r=e.childAt(t,[4,3]),d=e.childAt(r,[1,5,1]),i=e.childAt(r,[3,5]),l=e.childAt(i,[1]),o=e.childAt(i,[3]),p=new Array(4);return p[0]=e.createElementMorph(n),p[1]=e.createElementMorph(d),p[2]=e.createElementMorph(l),p[3]=e.createElementMorph(o),p},statements:[["element","action",["heroAction"],[],["loc",[null,[7,59],[7,82]]]],["element","action",["showBusy"],[],["loc",[null,[23,54],[23,75]]]],["element","action",["busy"],[],["loc",[null,[34,72],[34,89]]]],["element","action",["free"],[],["loc",[null,[37,65],[37,82]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-busy-blocker",version:"v0.1.1"});