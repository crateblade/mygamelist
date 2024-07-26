System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/H5AdxPlatform.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,d;return{setters:[function(e){t=e.createClass,n=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){d=e.cclegacy}],execute:function(){d._RF.push({},"6227eIZl/lBJb6BQAjiY9k/","H5AdxPlatform",void 0),e("H5AdxPlatform",function(){function e(){this.inited=!1,this.ad_1_path=void 0,this.ad_1_id=void 0,this.ad_1_delay=0,this.ad_1_error_delay=0,this.ad_2_id=void 0,this.ad_2_delay=0,this.ad_2_error_delay=0,this.adsManager=void 0,this.adsLoader=void 0,this.adDisplayContainer=void 0,this.intervalTimer=void 0,this.isAdPlaying=void 0,this.isContentFinished=void 0,this.playButton=void 0,this.videoContent=void 0,this.time=5,this.countleft_tag=void 0,this.event_Listener=!1}var d=e.prototype;return d.init=function(){var e=n(o().mark((function e(t,n,d,i,a,s,l){var r,_,g=this;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.ad_1_path=t.trim(),this.ad_1_id=n.trim(),this.ad_1_delay=d,this.ad_1_error_delay=i,this.ad_2_id=a.trim(),this.ad_2_delay=s,this.ad_2_error_delay=l,console.log("H5AdxPlatform init start ad_1_path:",this.ad_1_path),console.log("H5AdxPlatform init start ad_1_id:",this.ad_1_id),console.log("H5AdxPlatform init start ad_1_delay:",this.ad_1_delay),console.log("H5AdxPlatform init start ad_1_error_delay:",this.ad_1_error_delay),console.log("H5AdxPlatform init start ad_2_id:",this.ad_2_id),console.log("H5AdxPlatform init start ad_2_delay:",this.ad_2_delay),console.log("H5AdxPlatform init start ad_2_error_delay:",this.ad_2_error_delay),r="https://securepubads.g.doubleclick.net/tag/js/gpt.js",e.next=17,this.loadJS2(r,(function(){console.log("gpt js loaded completed"),g.init_ad_ui(),g.inited=!0,console.log("H5AdxPlatform inited gpt completed1")}),(function(e){console.log("loadJS2 error:",r,e)}));case 17:return _="https://imasdk.googleapis.com/js/sdkloader/ima3.js",e.next=20,this.loadJS2(_,(function(){console.log("ima3 js loaded completed"),console.log("H5AdxPlatform inited ima3 completed2")}),(function(e){console.log("loadJS2 error:",_,e)}));case 20:case"end":return e.stop()}}),e,this)})));return function(t,n,o,d,i,a,s){return e.apply(this,arguments)}}(),d.loadJS2=function(){var e=n(o().mark((function e(t,n,d){var i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i=document.createElement("script"),a=n||function(){},i.type="text/javascript",i.readyState?i.onreadystatechange=function(){"loaded"!=i.readyState&&"complete"!=i.readyState||(i.onreadystatechange=null,a())}:i.onload=function(){a()},i.charset="utf-8",i.src=t,document.getElementsByTagName("head")[0].appendChild(i)}catch(e){d(e)}finally{console.log("loadJS2 finally URL：",t)}case 1:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),d.init_ad_ui=function(){console.log("init_ad_ui 》〉》〉");var t=document.getElementById("GameDiv").parentElement,n=document.createElement("ad_id_root");n.id="ad_id_root",n.className="div-root",n.innerHTML='\n                <div class="div-root-bg" id="id_div_root_bg"></div>\n\n                <div class="div-child" id="id_div_child">\n                     <div id="Advertisement">abcedfdf</div>\n\n                    <div id="mainContainer" style=\'min-width: 300px; min-height: 250px;\'>\n                        <div id="maincontent">\n                           <video id="contentElement" playsinline muted>\n          <source src="https://storage.googleapis.com/gvabox/media/samples/stock.mp4"></source>\n        </video>\n                            \n                        </div>\n                        <div id="adContainer">\n                        </div>        \n                    </div>\n\n                    <div id=\''+e.ins.ad_1_id+"' style='min-width: 300px; min-height: 250px;'>\n                        <script>\n                        googletag.cmd.push(function () { googletag.display('"+e.ins.ad_1_id+'\'); });\n                        <\/script>\n                    </div>\n                </div>\n             <div style="position: absolute;width:100%;left: 0%;bottom:10%;border:0px solid #00ff00;transform: translate(0%, -50%)">\n                    <div style="text-align: center;">\n                        <input type="button" id="btn_ok" disabled="disabled" value="continue!" />\n                    </div>\n            </div>\n               \n                \n            ',t.appendChild(n),n.setAttribute("style","position: absolute;left: 0px;top: 0px;z-index: 80;width: 100%;height: 100%;"),document.getElementById("id_div_root_bg").setAttribute("style","left: 0px;top: 0px;z-index: 80;background: rgb(0, 0, 0); width: 100%;height: 100%; filter: alpha(Opacity=255);-moz-opacity: 0.9;opacity: 0.9"),document.getElementById("id_div_child").setAttribute("style","text-align: center;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);border:0px solid #ff0000;width:90%"),document.getElementById("btn_ok").setAttribute("style","background-color:#44c767;border-radius:14px;border:0px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:18px;padding:10px 31px;width: 220px;text-decoration:none;text-shadow:0px 1px 0px #2f6627;"),document.getElementById("Advertisement").innerHTML="Advertisement",document.getElementById("ad_id_root").style.display="none",document.getElementById("maincontent").setAttribute("style","width:100%;border:0px solid #ff0000;"),document.getElementById("contentElement").setAttribute("style","text-align: center;border:0px solid #18ab29;overflow: hidden;width:100%"),document.getElementById("adContainer").setAttribute("style","text-align: center;position: absolute;left: 0%;bottom: 0%;width:100%;height:100%;border:0px solid #00ff00;")},d.show_reward_coustom_video_2=function(t){e.ins.clear_reward_2_data(),document.getElementById("ad_id_root").style.display="",document.getElementById("mainContainer").style.display="",document.getElementById(e.ins.ad_1_id).style.display="none";var n=document.getElementById("btn_ok");n&&(n.onclick=function(){document.getElementById("ad_id_root").style.display="none",e.ins.clear_reward_2_data(),t(1)}),e.ins.btn_ok_default(),e.ins.videoContent=document.getElementById("contentElement"),e.ins.adDisplayContainer=new google.ima.AdDisplayContainer(document.getElementById("adContainer"),e.ins.videoContent),e.ins.adsLoader=new google.ima.AdsLoader(e.ins.adDisplayContainer),e.ins.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,e.ins.on_adloader_loaded,!1),e.ins.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,e.ins.on_adloader_error,!1),console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",e.ins.adsLoader);var o=new google.ima.AdsRequest;o.adTagUrl=e.ins.ad_2_id,console.log(" adsRequest.adTagUrl>>>>>>>",o.adTagUrl),o.linearAdSlotWidth=640,o.linearAdSlotHeight=400,o.nonLinearAdSlotWidth=640,o.nonLinearAdSlotHeight=150,e.ins.adsLoader.requestAds(o)},d.clear_reward_2_data=function(){var t,n,o;(console.log("清理数据"),e.ins.adsManager)&&(e.ins.adsManager.removeEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,e.ins.on_ad_Error),e.ins.adsManager.removeEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,e.ins.on_ad_Pause),e.ins.adsManager.removeEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,e.ins.on_ad_Resume),e.ins.adsManager.removeEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,e.ins.on_ad_event_all_complete),e.ins.adsManager.removeEventListener(google.ima.AdEvent.Type.LOADED,e.ins.on_ad_event_loaded),e.ins.adsManager.removeEventListener(google.ima.AdEvent.Type.STARTED,e.ins.on_ad_event_started),e.ins.adsManager.removeEventListener(google.ima.AdEvent.Type.COMPLETE,e.ins.on_ad_event_complete),null==(n=e.ins.adsManager)||n.destroy());e.ins.adsLoader&&(e.ins.adsLoader.removeEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,e.ins.on_adloader_loaded,!1),e.ins.adsLoader.removeEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,e.ins.on_adloader_error,!1),null==(o=e.ins.adsLoader)||o.destroy());null==(t=e.ins.adDisplayContainer)||t.destroy()},d.on_adloader_loaded=function(t){console.log(" 加载url 数据完成");var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,e.ins.adsManager=t.getAdsManager(e.ins.videoContent,n),e.ins.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,e.ins.on_ad_Error),e.ins.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,e.ins.on_ad_Pause),e.ins.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,e.ins.on_ad_Resume),e.ins.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,e.ins.on_ad_event_all_complete),e.ins.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED,e.ins.on_ad_event_loaded),e.ins.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED,e.ins.on_ad_event_started),e.ins.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE,e.ins.on_ad_event_complete),e.ins.playAds()},d.on_adloader_error=function(t){console.log("加载url 错误",t),e.ins.run_ok_timer(e.ins.ad_2_error_delay)},d.playAds=function(){e.ins.adDisplayContainer.initialize();try{e.ins.adsManager.init(640,360,google.ima.ViewMode.NORMAL),e.ins.adsManager.start(),console.log("播放广告 1")}catch(t){console.log("播放广告 2 err:",t),e.ins.videoContent.play()}},d.on_ad_Error=function(t){console.log("fn on_ad_Error  ",t),e.ins.run_ok_timer(e.ins.ad_2_error_delay)},d.on_ad_event_loaded=function(e){console.log("on_ad_event_loaded: loaded");var t=document.getElementById("adContainer").firstElementChild;console.log("fecfecfec bbbbb>>>>>>",t),t.setAttribute("style","position: absolute; width: 100%;height:100%;border:0px solid #ff0000;");for(var n=0;n<t.children.length;n++){var o=t.children[n];if(o.id&&o.id.length>3){var d=t.getAttribute("style");console.log("1 stly>>>>>>",o.id,d),d+="; width: 100%;left:0%;",o.setAttribute("style",d),console.log("2 stly>>>>>>",o.id,t.getAttribute("style"))}console.log("elel>>>>>>",o)}},d.on_ad_event_started=function(t){console.log("on_ad_event_started: started"),t.getAd().isLinear()&&console.log("fn onAdEvent >> isLinear "),e.ins.run_ok_timer(e.ins.ad_2_delay)},d.on_ad_event_complete=function(e){console.log("on_ad_event_complete: completed")},d.on_ad_event_all_complete=function(e){console.log("on_ad_event_all_complete: all completed")},d.on_ad_Pause=function(){console.log("Ad fn on_ad_Pause 暂停")},d.on_ad_Resume=function(){console.log("Ad fn on_ad_Resume 恢复")},d.show_reward_coustom=function(t){var n=this,o=window;console.log("show_reward_coustom start window>>",window),console.log("show_reward_coustom start  windows.androidClient>>",o.androidClient),document.getElementById("ad_id_root").style.display="",document.getElementById(e.ins.ad_1_id).style.display="",document.getElementById("mainContainer").style.display="none";var d=document.getElementById("btn_ok");d&&(d.onclick=function(){document.getElementById("ad_id_root").style.display="none",t(1)}),e.ins.btn_ok_default(),o.googletag=o.googletag||{cmd:[]},o.googletag.destroySlots(),o.googletag.cmd.push((function(){o.googletag.defineSlot(n.ad_1_path,[300,250],n.ad_1_id).addService(o.googletag.pubads()),o.googletag.pubads().collapseEmptyDivs(),o.googletag.enableServices(),o.googletag.display(n.ad_1_id),o.googletag.pubads().refresh(),console.log("ad data refrush")})),e.ins.event_Listener||(e.ins.event_Listener=!0,o.googletag.pubads().addEventListener("slotRequested",(function(t){var n=t.slot.getSlotElementId();o.androidClient?o.androidClient.onAdReqs(n):console.log("onAdReqs方法不存在"),e.ins.printEventMessage("slotRequested",t)})),o.googletag.pubads().addEventListener("slotResponseReceived",(function(t){var n=t.slot.getSlotElementId();o.androidClient?o.androidClient.onAdResp(n):console.log("onAdResp方法不存在"),e.ins.printEventMessage("slotResponseReceived",t)})),o.googletag.pubads().addEventListener("slotRenderEnded",(function(t){if(e.ins.printEventMessage("slotRenderEnded",t),t.isEmpty)console.log("ad load error"),e.ins.run_ok_timer(e.ins.ad_1_error_delay);else{var n=t.slot.getSlotElementId();o.androidClient?o.androidClient.onAdShow(n):console.log("onAdShow方法不存在"),e.ins.run_ok_timer(e.ins.ad_1_delay)}})),o.googletag.pubads().addEventListener("slotOnload",(function(t){e.ins.printEventMessage("slotOnload",t)})),o.googletag.pubads().addEventListener("impressionViewable",(function(t){e.ins.printEventMessage("impressionViewable",t)})))},d.btn_ok_default=function(){var e=document.getElementById("btn_ok");e&&(console.log("btn_ok_default show defalut "),e.disabled="disabled",e.value=" Wait ")},d.run_ok_timer=function(t){e.ins.time=t,e.ins.countleft_tag=setInterval(e.ins.btn_ok_timer,1e3)},d.btn_ok_timer=function(){var t=document.getElementById("btn_ok");t&&(console.log("btn_ok_timer >>>time:",e.ins.time,e.ins.countleft_tag),e.ins.time<=0?(t.value="Continue!",t.disabled=!1,clearInterval(e.ins.countleft_tag)):(t.disabled="disabled",t.value=" Continue in "+e.ins.time,e.ins.time--))},d.printEventMessage=function(e,t){var n=t.slot.getSlotElementId();console.log("slotId:",n,"\tmessage:",e,"\nevent:",t)},t(e,null,[{key:"ins",get:function(){return this._ins||(this._ins=new e),this._ins}}]),e}())._ins=void 0,d._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./H5AdxPlatform.ts","./MainAction.ts","./TestVideoAction.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainAction.ts",["./rollupPluginModLoBabelHelpers.js","cc","./H5AdxPlatform.ts"],(function(o){var t,e,n,i,r,s,c,a,u,d,l;return{setters:[function(o){t=o.applyDecoratedDescriptor,e=o.inheritsLoose,n=o.initializerDefineProperty,i=o.assertThisInitialized,r=o.asyncToGenerator,s=o.regeneratorRuntime},function(o){c=o.cclegacy,a=o._decorator,u=o.EditBox,d=o.Component},function(o){l=o.H5AdxPlatform}],execute:function(){var p,_,f,m,h;c._RF.push({},"9c1b1AJwP1F36htNwKnfaxf","MainAction",void 0);var v=a.ccclass,g=a.property;o("MainAction",(p=v("MainAction"),_=g({type:u}),p((h=t((m=function(o){function t(){for(var t,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return t=o.call.apply(o,[this].concat(r))||this,n(t,"edit_box",h,i(t)),t}e(t,o);var c=t.prototype;return c.start=function(){var o=r(s().mark((function o(){return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return"https://pubads.g.doubleclick.net/gampad/ads?iu=/23001303080/sequone.com/sequone.com-reward-072302&description_url=http%3A%2F%2Fsequone.com&tfcd=0&npa=0&sz=300x250%7C400x300%7C640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=",o.next=3,l.ins.init("/23001303080/sequone.com/sequone.com-300x250-index-01-071201","div-gpt-ad-1720771761394967-0",7,3,"https://pubads.g.doubleclick.net/gampad/ads?iu=/23001303080/sequone.com/sequone.com-reward-072302&description_url=http%3A%2F%2Fsequone.com&tfcd=0&npa=0&sz=300x250%7C400x300%7C640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=",7,4);case 3:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}(),c.update=function(o){},c.btn_show_ad_1=function(){l.ins.show_reward_coustom((function(o){1==o?console.log("show_video 获取奖励成功"):console.log("show_video 获取奖励失败")}))},c.btn_show_ad_2=function(){this.edit_box.string.trim().length>10&&(l.ins.ad_2_id=this.edit_box.string.trim()),l.ins.show_reward_coustom_video_2((function(o){1==o?console.log("show_video 获取奖励成功"):console.log("show_video 获取奖励失败")}))},c.close_ad=function(){console.log("my close_ad>>>"),document.getElementById("ad_id_root").style.display="none"},t}(d)).prototype,"edit_box",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=m))||f));c._RF.pop()}}}));

System.register("chunks:///_virtual/TestVideoAction.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,s,i,n;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,s=e._decorator,i=e.game,n=e.Component}],execute:function(){var E;o._RF.push({},"eeec6FIFX5Mzq9Sj8ddw8i8","TestVideoAction",void 0);var d=s.ccclass;s.property,e("TestVideoAction",d("TestVideoAction")(E=function(e){function o(){return e.apply(this,arguments)||this}t(o,e);var s=o.prototype;return s.start=function(){i.on(H5GamesAds.EVENT_INTERSTITIAL_BEFORE_AD,this.onInterstitialBeforeAd,this),i.on(H5GamesAds.EVENT_INTERSTITIAL_AFTER_AD,this.onInterstitialAfterAd,this),i.on(H5GamesAds.EVENT_INTERSTITIAL_AD_BREAK_DONE,this.onInterstitialAdBreakDone,this),i.on(H5GamesAds.EVENT_REWARDED_VIDEO_BEFORE_AD,this.onRewardedVideoBeforeAd,this),i.on(H5GamesAds.EVENT_REWARDED_VIDEO_AFTER_AD,this.onRewardedVideoAfterAd,this),i.on(H5GamesAds.EVENT_REWARDED_VIDEO_AD_BREAK_DONE,this.onRewardedVideoAdBreakDone,this),i.on(H5GamesAds.EVENT_REWARDED_VIDEO_BEFORE_REWARD,this.onRewardedVideoBeforeReward,this),i.on(H5GamesAds.EVENT_REWARDED_VIDEO_AD_VIEWED,this.onRewardedVideoAdViewed,this),i.on(H5GamesAds.EVENT_REWARDED_VIDEO_AD_DISMISSED,this.onRewardedVideoAdDismissed,this)},s.update=function(e){},s.btn_video=function(){console.log("btn_video ")},o}(n))||E);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});