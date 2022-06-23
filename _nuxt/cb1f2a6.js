(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{487:function(t,e,n){"use strict";n.r(e);var o={props:["storage","item","game"],computed:{unlocked:function(){return this.game.bases[this.storage.id].isUnlocked()},storageUpgrade:function(){return this.game.bases[this.storage.id].value*this.item.max},availableCount:function(){return this.game.bases[this.storage.id].getAvailableCount()}},methods:{assign:function(){this.availableCount>=1&&(this.storage.count+=1)}}},c=n(62),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.unlocked?o("div",{staticClass:"col-4"},[o("div",{staticClass:"subtitle"},[t._v("Storage +"+t._s(t.storageUpgrade))]),t._v(" "),o("div",{staticClass:"card card-body p-1"},[o("div",{staticClass:"row gx-2 align-items-center"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:n(286)("./"+t.storage.id+".png"),width:"18px",height:"18px",title:t.$t("name_"+t.storage.id),alt:t.$t("name_"+t.storage.id)}})]),t._v(" "),o("div",{staticClass:"col"},[o("span",{class:{"text-muted opacity-25":t.storage.count<1}},[o("small",[t._v("x")]),t._v(" "),o("FormatNumber",{attrs:{value:t.storage.count}})],1)]),t._v(" "),o("div",{staticClass:"col-auto"},[o("button",{staticClass:"btn btn-sm btn-dark p-1",class:{"disabled opacity-25":t.availableCount<1},attrs:{type:"button"},on:{click:function(e){return t.assign()}}},[o("i",{staticClass:"fas fa-fw fa-plus"})])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(285).default})},488:function(t,e,n){"use strict";n.r(e);var o={props:["generator","game"],computed:{machineAvailableCount:function(){return this.generator.count-this.generator.used},consum:function(){return this.generator.getConsum()},output:function(){return this.generator.getElecProd()},time:function(){return this.generator.remainingTime},percent:function(){return this.generator.remainingTime>0?100-this.generator.remainingTime/this.generator.getTime()*100:0}},methods:{assign:function(){this.machineAvailableCount>=1&&(this.generator.used+=1)},unassign:function(){this.generator.used>=1&&(this.generator.used-=1,this.generator.used<=0&&(this.generator.used=0,this.generator.pauseGenerating()))}}},c=n(62),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"subtitle"},[t._v("Electricity")]),t._v(" "),n("div",{staticClass:"card card-body py-1 pe-1 ps-2"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col"},[n("div",{staticClass:"row gx-2 align-items-center"},[n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-sm btn-dark p-1",class:{"disabled opacity-25":t.machineAvailableCount<1},attrs:{type:"button"},on:{click:function(e){return t.assign()}}},[n("i",{staticClass:"fas fa-fw fa-plus"})])]),t._v(" "),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-sm btn-dark p-1",class:{"disabled opacity-25":t.generator.used<1},attrs:{type:"button"},on:{click:function(e){return t.unassign()}}},[n("i",{staticClass:"fas fa-fw fa-minus"})])]),t._v(" "),n("div",{staticClass:"col-auto"},[n("span",{class:{"text-muted opacity-25":t.generator.used<1}},[n("small",[t._v("x")]),t._v(" "),n("FormatNumber",{attrs:{value:t.generator.used}})],1)])])]),t._v(" "),t.consum?n("div",{staticClass:"col-auto"},[n("div",{staticClass:"row gx-2 align-items-center"},[n("div",{staticClass:"col-auto"},[n("RecipeInput",{attrs:{id:t.consum.id,count:t.consum.count,game:t.game}})],1)])]):t._e(),t._v(" "),t.consum?n("div",{staticClass:"col-auto small"},[n("i",{staticClass:"fas fa-fw fa-long-arrow-alt-right"})]):t._e(),t._v(" "),n("div",{staticClass:"col-auto"},[n("div",{staticClass:"row gx-2 align-items-center"},[n("div",{staticClass:"col-auto"},[n("RecipeOutput",{attrs:{id:"electricity",count:t.output,game:t.game}})],1)])]),t._v(" "),n("div",{staticClass:"col-auto"},[n("div",{staticClass:"text-center small mb-1"},[n("FormatTime",{attrs:{value:t.time}})],1),t._v(" "),n("div",{staticClass:"progress",staticStyle:{height:"3px",width:"55px"}},[n("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),n("div",{staticClass:"col-auto"},["paused"==t.generator.state?n("button",{staticClass:"btn btn-dark p-2 small",class:{"disabled opacity-25":t.generator.used<1},staticStyle:{width:"32px",height:"32px"},attrs:{type:"button"},on:{click:function(e){return t.generator.startGenerating()}}},[n("i",{staticClass:"fas fa-fw fa-play small"})]):t._e(),t._v(" "),"running"==t.generator.state?n("button",{staticClass:"btn btn-dark p-2 small",staticStyle:{width:"32px",height:"32px"},attrs:{type:"button"},on:{click:function(e){return t.generator.pauseGenerating()}}},[n("i",{staticClass:"fas fa-fw fa-stop small"})]):t._e(),t._v(" "),"waiting"==t.generator.state?n("button",{staticClass:"btn btn-dark p-2 small",staticStyle:{width:"32px",height:"32px"},attrs:{type:"button"},on:{click:function(e){return t.generator.pauseGenerating()}}},[n("i",{staticClass:"text-danger fas fa-fw fa-stop small"})]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(285).default,RecipeInput:n(407).default,RecipeOutput:n(408).default,FormatTime:n(406).default})},489:function(t,e,n){"use strict";n.r(e);var o={props:["production","game"],computed:{energy:function(){return this.production.getEnergy()},inputs:function(){return this.production.getInputs()},outputs:function(){return this.production.getOutputs()},time:function(){return this.production.remainingTime},percent:function(){return this.production.remainingTime>0?100-this.production.remainingTime/this.production.getTime()*100:0}}},c=n(62),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12"},[o("div",{staticClass:"card card-body p-2"},[o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row gx-1 align-items-center"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:n(287),width:"18px",height:"18px",title:t.$t("name_manual"),alt:t.$t("name_manual")}})]),t._v(" "),o("div",{staticClass:"col"},[o("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("name_manual")))])])])]),t._v(" "),t.energy?o("div",{staticClass:"col-auto"},[o("div",{staticClass:"row gx-2 align-items-center"},[o("div",{staticClass:"col-auto"},[o("RecipeInput",{attrs:{id:t.energy.id,count:t.energy.count,game:t.game}})],1)])]):t._e(),t._v(" "),t.inputs?o("div",{staticClass:"col-auto"},[o("div",{staticClass:"row gx-2 align-items-center"},t._l(t.inputs,(function(e,n){return o("div",{key:n,staticClass:"col-auto"},[o("RecipeInput",{attrs:{id:n,count:e,game:t.game}})],1)})),0)]):t._e(),t._v(" "),t.energy||t.inputs?o("div",{staticClass:"col-auto small"},[o("i",{staticClass:"fas fa-fw fa-long-arrow-alt-right"})]):t._e(),t._v(" "),t.outputs?o("div",{staticClass:"col-auto"},[o("div",{staticClass:"row gx-2 align-items-center"},t._l(t.outputs,(function(e,n){return o("div",{key:n,staticClass:"col-auto"},[o("RecipeOutput",{attrs:{id:n,count:e,game:t.game}})],1)})),0)]):t._e(),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"text-center small mb-1"},[o("FormatTime",{attrs:{value:t.time}})],1),t._v(" "),o("div",{staticClass:"progress",staticStyle:{height:"3px",width:"55px"}},[o("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),o("div",{staticClass:"col-auto"},["paused"==t.production.state?o("button",{staticClass:"btn btn-dark p-2 small",staticStyle:{width:"32px",height:"32px"},attrs:{type:"button"},on:{click:function(e){return t.production.startProducing()}}},[o("i",{staticClass:"fas fa-fw fa-play small"})]):t._e(),t._v(" "),"running"==t.production.state?o("button",{staticClass:"btn btn-dark p-2 small",staticStyle:{width:"32px",height:"32px"},attrs:{type:"button"},on:{click:function(e){return t.production.pauseProducing()}}},[o("i",{staticClass:"fas fa-fw fa-stop small"})]):t._e(),t._v(" "),"waiting"==t.production.state?o("button",{staticClass:"btn btn-dark p-2 small",staticStyle:{width:"32px",height:"32px"},attrs:{type:"button"},on:{click:function(e){return t.production.pauseProducing()}}},[o("i",{staticClass:"text-danger fas fa-fw fa-stop small"})]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RecipeInput:n(407).default,RecipeOutput:n(408).default,FormatTime:n(406).default})},496:function(t,e,n){"use strict";n.r(e);n(14),n(34);var o={props:["id","game"],computed:{item:function(){return this.game.bases[this.id]},count:function(){return this.item.count},max:function(){return this.item.getMax()},used:function(){if("item"!=this.item.type)return this.item.getUsedCount()},unused:function(){if("item"!=this.item.type)return this.item.getAvailableCount()},storages:function(){return this.item.storages},manualProduction:function(){var t=null;return this.item.productions.forEach((function(e){"manual"==e.machineId&&(t=e)})),t},machineProductions:function(){var t=[];return this.item.productions.forEach((function(e){"manual"!=e.machineId&&1==e.isUnlocked()&&t.push(e)})),t}},methods:{isBuildCountActive:function(t){return this.item.buildCount==t},changeBuildCount:function(t){this.item.buildCount=t},stopAll:function(){this.machineProductions.forEach((function(t){t.pauseProducing()}))}}},c=n(62),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.$parent.currentProductionSelection==t.id?o("div",{staticClass:"flex-grow-1 scrollbar"},[o("div",{staticClass:"card",staticStyle:{"max-height":"100%"}},[o("div",{staticClass:"card-header"},[o("div",{staticClass:"row align-item-center"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row gx-2 align-item-center"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:n(286)("./"+t.id+".png"),width:"18px",height:"18px",title:t.$t("name_"+t.id),alt:t.$t("name_"+t.id)}})]),t._v(" "),o("div",{staticClass:"col-auto"},[o("span",{staticClass:"fw-bold"},[t._v(t._s(t.$t("name_"+t.id)))])])])])])]),t._v(" "),o("div",{staticClass:"card-body scrollbar"},[o("div",{staticClass:"row g-3"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"row gx-4 align-items-end"},[o("div",{staticClass:"col-2"},[o("div",{staticClass:"subtitle"},[t._v("Count")]),t._v(" "),o("span",{class:{"text-muted opacity-25":0==t.count,"text-danger":t.count>=t.max},staticStyle:{"line-height":"30px"}},[o("FormatNumber",{attrs:{value:t.count}})],1)]),t._v(" "),t.max?o("div",{staticClass:"col-2"},[o("div",{staticClass:"subtitle"},[t._v("Storage")]),t._v(" "),o("span",{staticStyle:{"line-height":"30px"}},[o("FormatNumber",{attrs:{value:t.max}})],1)]):t._e(),t._v(" "),null!=t.used?o("div",{staticClass:"col-2"},[o("div",{staticClass:"subtitle"},[t._v("Used")]),t._v(" "),o("span",{class:{"text-muted opacity-25":0==t.used},staticStyle:{"line-height":"30px"}},[o("FormatNumber",{attrs:{value:t.used}})],1)]):t._e(),t._v(" "),null!=t.unused?o("div",{staticClass:"col-2"},[o("div",{staticClass:"subtitle"},[t._v("Unused")]),t._v(" "),o("span",{class:{"text-muted opacity-25":0==t.unused,"text-success":t.unused>0},staticStyle:{"line-height":"30px"}},[o("FormatNumber",{attrs:{value:t.unused}})],1)]):t._e(),t._v(" "),t.storages?o("div",{staticClass:"col"},[o("div",{staticClass:"row align-items-center justify-content-end"},t._l(t.storages,(function(e){return o("ItemCardStorage",{key:e.id,attrs:{storage:e,item:t.item,game:t.game}})})),1)]):t._e()])]),t._v(" "),"generator"==t.item.type?o("ItemElecProduction",{attrs:{generator:t.item,game:t.game}}):t._e(),t._v(" "),t.manualProduction?o("ItemManualProduction",{attrs:{production:t.manualProduction,game:t.game}}):t._e(),t._v(" "),t.machineProductions.length>0?o("div",{staticClass:"col-12"},[o("div",{staticClass:"subtitle"},[t._v("Production")]),t._v(" "),o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"col"},[o("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-dark py-1",class:{active:t.isBuildCountActive(1)},attrs:{type:"button"},on:{click:function(e){return t.changeBuildCount(1)}}},[t._v("1")]),t._v(" "),o("button",{staticClass:"btn btn-dark py-1",class:{active:t.isBuildCountActive(10)},attrs:{type:"button"},on:{click:function(e){return t.changeBuildCount(10)}}},[t._v("10")]),t._v(" "),o("button",{staticClass:"btn btn-dark py-1",class:{active:t.isBuildCountActive(100)},attrs:{type:"button"},on:{click:function(e){return t.changeBuildCount(100)}}},[t._v("100")])])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("button",{staticClass:"btn btn-sm btn-dark py-1",attrs:{type:"button"},on:{click:function(e){return t.stopAll()}}},[o("i",{staticClass:"fas fa-fw fa-stop"}),t._v(" "),o("span",[t._v("Stop all")])])])])]):t._e(),t._v(" "),t.machineProductions.length>0?o("div",{staticClass:"col-12"},[o("div",{staticClass:"row g-3"},t._l(t.machineProductions,(function(e){return o("ItemMachineProduction",{key:e.id,attrs:{production:e,item:t.item,game:t.game}})})),1)]):t._e()],1)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(285).default,ItemCardStorage:n(487).default,ItemElecProduction:n(488).default,ItemManualProduction:n(489).default,ItemMachineProduction:n(497).default})}}]);