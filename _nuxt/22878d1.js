(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5],Array(285).concat([function(n,e,t){var map={"./accumulator.png":289,"./advancedCircuit.png":290,"./artilleryShell.png":291,"./artilleryTurret.png":292,"./assembler1.png":293,"./assembler2.png":294,"./assembler3.png":295,"./atomicBomb.png":296,"./automation1.png":297,"./barrel.png":298,"./battery.png":299,"./bluePack.png":300,"./boiler.png":301,"./cannonShell.png":302,"./car.png":303,"./centrifuge.png":304,"./chemicalPlant.png":305,"./coal.png":306,"./combatShotgun.png":307,"./concrete.png":308,"./constructionRobot.png":309,"./copper.png":310,"./copperCable.png":311,"./copperPlate.png":312,"./drill1.png":313,"./drill2.png":314,"./efficiencyModule1.png":315,"./efficiencyModule2.png":316,"./efficiencyModule3.png":317,"./electricEngineUnit.png":318,"./electricity.png":319,"./electronicCircuit.png":320,"./electronics.png":321,"./engineUnit.png":322,"./explosiveCannonShell.png":323,"./explosiveRocket.png":324,"./explosives.png":325,"./firearmMagazine.png":326,"./flyingRobot.png":327,"./furnace1.png":328,"./furnace2.png":329,"./furnace3.png":330,"./grayPack.png":331,"./greenPack.png":332,"./gunTurret.png":333,"./heat.png":334,"./heatExchanger.png":335,"./heavyOil.png":336,"./iron.png":337,"./ironChest.png":338,"./ironGearWheel.png":339,"./ironPlate.png":340,"./ironStick.png":341,"./lab.png":288,"./laserTurret.png":342,"./lightOil.png":343,"./lowDensityStructure.png":344,"./lubricant.png":345,"./manual.png":287,"./nuclearFuel.png":346,"./nuclearReactor.png":347,"./offshorePump.png":348,"./oil.png":349,"./oilRefinery.png":350,"./petroleumGas.png":351,"./piercingMagazine.png":352,"./piercingShells.png":353,"./pipe.png":354,"./pistol.png":355,"./plasticBar.png":356,"./portableFusionReactor.png":357,"./processingUnit.png":358,"./productivityModule1.png":359,"./productivityModule2.png":360,"./productivityModule3.png":361,"./pumpjack.png":362,"./purplePack.png":363,"./radar.png":364,"./redPack.png":365,"./rocket.png":366,"./rocketControlUnit.png":367,"./rocketFuel.png":368,"./rocketLauncher.png":369,"./rocketPart.png":370,"./rocketSilo.png":371,"./satellite.png":372,"./shotgun.png":373,"./shotgunShells.png":374,"./solarPanel.png":375,"./solidFuel.png":376,"./speedModule1.png":377,"./speedModule2.png":378,"./speedModule3.png":379,"./spidertron.png":380,"./steam.png":381,"./steamEngine.png":382,"./steamTurbine.png":383,"./steelChest.png":384,"./steelPlate.png":385,"./steelProcessing.png":386,"./stone.png":387,"./stoneBrick.png":388,"./storageTank.png":389,"./submachineGun.png":390,"./sulfur.png":391,"./sulfuricAcid.png":392,"./tank.png":393,"./uranium.png":394,"./uranium235.png":395,"./uranium238.png":396,"./uraniumCannonShell.png":397,"./uraniumFuelCell.png":398,"./uraniumMagazine.png":399,"./water.png":400,"./wood.png":401,"./woodChest.png":402,"./yellowPack.png":403};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=285},function(n,e,t){"use strict";t.r(e);var o={props:["value"],computed:{format:function(){var n="";this.value<0&&(n="-");var e=Math.abs(this.value),t="",symbol=null;return e>=1e36?(t=n+Math.floor(e/1e36),symbol="Ud"):e>=1e33?(t=n+Math.floor(e/1e33),symbol="Dc"):e>=1e30?(t=n+Math.floor(e/1e30),symbol="No"):e>=1e27?(t=n+Math.floor(e/1e27),symbol="Oc"):e>=1e24?(t=n+Math.floor(e/1e24),symbol="Sp"):e>=1e21?(t=n+Math.floor(e/1e21),symbol="Sx"):e>=1e18?(t=n+Math.floor(e/1e18),symbol="Qi"):e>=1e15?(t=n+Math.floor(e/1e15),symbol="Qa"):e>=1e12?(t=n+Math.floor(e/1e12),symbol="T"):e>=1e9?(t=n+Math.floor(e/1e9),symbol="B"):e>=1e6?(t=n+Math.floor(e/1e6),symbol="M"):e>=1e3?(t=n+Math.floor(100*e/1e3)/100,symbol="K"):t=n+Math.floor(100*e)/100,{value:t,symbol:symbol}}}},r=t(62),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",[n._v(n._s(n.format.value)),n.format.symbol?t("small",{staticClass:"opacity-75"},[n._v(" "+n._s(n.format.symbol))]):n._e()])}),[],!1,null,null,null);e.default=component.exports},function(n,e,t){n.exports=t.p+"img/manual.9c89046.png"},function(n,e,t){n.exports=t.p+"img/lab.a03fad6.png"},function(n,e,t){n.exports=t.p+"img/accumulator.21f4bf8.png"},function(n,e,t){n.exports=t.p+"img/advancedCircuit.6a124ec.png"},function(n,e,t){n.exports=t.p+"img/artilleryShell.7aa7668.png"},function(n,e,t){n.exports=t.p+"img/artilleryTurret.93faff8.png"},function(n,e,t){n.exports=t.p+"img/assembler1.076c108.png"},function(n,e,t){n.exports=t.p+"img/assembler2.0df3238.png"},function(n,e,t){n.exports=t.p+"img/assembler3.d4f55d2.png"},function(n,e,t){n.exports=t.p+"img/atomicBomb.d6863ae.png"},function(n,e,t){n.exports=t.p+"img/automation1.dc3a5bf.png"},function(n,e,t){n.exports=t.p+"img/barrel.4abf293.png"},function(n,e,t){n.exports=t.p+"img/battery.79e2386.png"},function(n,e,t){n.exports=t.p+"img/bluePack.ccf778f.png"},function(n,e,t){n.exports=t.p+"img/boiler.650cf17.png"},function(n,e,t){n.exports=t.p+"img/cannonShell.9712f99.png"},function(n,e,t){n.exports=t.p+"img/car.86f2e9f.png"},function(n,e,t){n.exports=t.p+"img/centrifuge.5904d0f.png"},function(n,e,t){n.exports=t.p+"img/chemicalPlant.8de0fc7.png"},function(n,e,t){n.exports=t.p+"img/coal.87540e2.png"},function(n,e,t){n.exports=t.p+"img/combatShotgun.0cf6992.png"},function(n,e,t){n.exports=t.p+"img/concrete.9f198a1.png"},function(n,e,t){n.exports=t.p+"img/constructionRobot.0b1fb35.png"},function(n,e,t){n.exports=t.p+"img/copper.ddda1c0.png"},function(n,e,t){n.exports=t.p+"img/copperCable.d9d46be.png"},function(n,e,t){n.exports=t.p+"img/copperPlate.f9ea680.png"},function(n,e,t){n.exports=t.p+"img/drill1.9b5c064.png"},function(n,e,t){n.exports=t.p+"img/drill2.27667eb.png"},function(n,e,t){n.exports=t.p+"img/efficiencyModule1.e8b4bce.png"},function(n,e,t){n.exports=t.p+"img/efficiencyModule2.1edeccb.png"},function(n,e,t){n.exports=t.p+"img/efficiencyModule3.3e14037.png"},function(n,e,t){n.exports=t.p+"img/electricEngineUnit.28acd0a.png"},function(n,e,t){n.exports=t.p+"img/electricity.c73d0e1.png"},function(n,e,t){n.exports=t.p+"img/electronicCircuit.4bd2016.png"},function(n,e,t){n.exports=t.p+"img/electronics.30db470.png"},function(n,e,t){n.exports=t.p+"img/engineUnit.850c291.png"},function(n,e,t){n.exports=t.p+"img/explosiveCannonShell.83eeebc.png"},function(n,e,t){n.exports=t.p+"img/explosiveRocket.6814079.png"},function(n,e,t){n.exports=t.p+"img/explosives.1ed42b0.png"},function(n,e,t){n.exports=t.p+"img/firearmMagazine.48bc2dd.png"},function(n,e,t){n.exports=t.p+"img/flyingRobot.86017e3.png"},function(n,e,t){n.exports=t.p+"img/furnace1.1c1aaf4.png"},function(n,e,t){n.exports=t.p+"img/furnace2.b29978d.png"},function(n,e,t){n.exports=t.p+"img/furnace3.cce54ae.png"},function(n,e,t){n.exports=t.p+"img/grayPack.dc93871.png"},function(n,e,t){n.exports=t.p+"img/greenPack.90409aa.png"},function(n,e,t){n.exports=t.p+"img/gunTurret.451e8cb.png"},function(n,e,t){n.exports=t.p+"img/heat.a2a7050.png"},function(n,e,t){n.exports=t.p+"img/heatExchanger.a2a4d30.png"},function(n,e,t){n.exports=t.p+"img/heavyOil.9598796.png"},function(n,e,t){n.exports=t.p+"img/iron.261f35d.png"},function(n,e,t){n.exports=t.p+"img/ironChest.265c4c5.png"},function(n,e,t){n.exports=t.p+"img/ironGearWheel.077d323.png"},function(n,e,t){n.exports=t.p+"img/ironPlate.17106c8.png"},function(n,e,t){n.exports=t.p+"img/ironStick.1250f4f.png"},function(n,e,t){n.exports=t.p+"img/laserTurret.4a67884.png"},function(n,e,t){n.exports=t.p+"img/lightOil.a8daaa0.png"},function(n,e,t){n.exports=t.p+"img/lowDensityStructure.fc79748.png"},function(n,e,t){n.exports=t.p+"img/lubricant.5701e37.png"},function(n,e,t){n.exports=t.p+"img/nuclearFuel.bd954d8.png"},function(n,e,t){n.exports=t.p+"img/nuclearReactor.c34b18a.png"},function(n,e,t){n.exports=t.p+"img/offshorePump.0824fe7.png"},function(n,e,t){n.exports=t.p+"img/oil.40f1f38.png"},function(n,e,t){n.exports=t.p+"img/oilRefinery.015cfe0.png"},function(n,e,t){n.exports=t.p+"img/petroleumGas.4e73764.png"},function(n,e,t){n.exports=t.p+"img/piercingMagazine.11166e9.png"},function(n,e,t){n.exports=t.p+"img/piercingShells.e8a34a1.png"},function(n,e,t){n.exports=t.p+"img/pipe.badd29e.png"},function(n,e,t){n.exports=t.p+"img/pistol.4f99b04.png"},function(n,e,t){n.exports=t.p+"img/plasticBar.1108372.png"},function(n,e,t){n.exports=t.p+"img/portableFusionReactor.7ed0515.png"},function(n,e,t){n.exports=t.p+"img/processingUnit.697ab99.png"},function(n,e,t){n.exports=t.p+"img/productivityModule1.2a339f6.png"},function(n,e,t){n.exports=t.p+"img/productivityModule2.de5f1c6.png"},function(n,e,t){n.exports=t.p+"img/productivityModule3.f660549.png"},function(n,e,t){n.exports=t.p+"img/pumpjack.cb6479b.png"},function(n,e,t){n.exports=t.p+"img/purplePack.3d0e787.png"},function(n,e,t){n.exports=t.p+"img/radar.e000816.png"},function(n,e,t){n.exports=t.p+"img/redPack.8ee0033.png"},function(n,e,t){n.exports=t.p+"img/rocket.5251503.png"},function(n,e,t){n.exports=t.p+"img/rocketControlUnit.2bc5c91.png"},function(n,e,t){n.exports=t.p+"img/rocketFuel.5d055a8.png"},function(n,e,t){n.exports=t.p+"img/rocketLauncher.7244ee0.png"},function(n,e,t){n.exports=t.p+"img/rocketPart.b3dd1b6.png"},function(n,e,t){n.exports=t.p+"img/rocketSilo.ba2ee20.png"},function(n,e,t){n.exports=t.p+"img/satellite.17de60e.png"},function(n,e,t){n.exports=t.p+"img/shotgun.318d9fe.png"},function(n,e,t){n.exports=t.p+"img/shotgunShells.8211bc3.png"},function(n,e,t){n.exports=t.p+"img/solarPanel.19fd6d9.png"},function(n,e,t){n.exports=t.p+"img/solidFuel.01ad2a9.png"},function(n,e,t){n.exports=t.p+"img/speedModule1.635175a.png"},function(n,e,t){n.exports=t.p+"img/speedModule2.e927682.png"},function(n,e,t){n.exports=t.p+"img/speedModule3.62eed14.png"},function(n,e,t){n.exports=t.p+"img/spidertron.ff59ad7.png"},function(n,e,t){n.exports=t.p+"img/steam.7302072.png"},function(n,e,t){n.exports=t.p+"img/steamEngine.39dcc27.png"},function(n,e,t){n.exports=t.p+"img/steamTurbine.0b2c8a8.png"},function(n,e,t){n.exports=t.p+"img/steelChest.1bf5237.png"},function(n,e,t){n.exports=t.p+"img/steelPlate.f8442a1.png"},function(n,e,t){n.exports=t.p+"img/steelProcessing.26b2f2b.png"},function(n,e,t){n.exports=t.p+"img/stone.c2e6b69.png"},function(n,e,t){n.exports=t.p+"img/stoneBrick.b7ee581.png"},function(n,e,t){n.exports=t.p+"img/storageTank.bec1527.png"},function(n,e,t){n.exports=t.p+"img/submachineGun.f4aa87a.png"},function(n,e,t){n.exports=t.p+"img/sulfur.4b1f03d.png"},function(n,e,t){n.exports=t.p+"img/sulfuricAcid.8193d89.png"},function(n,e,t){n.exports=t.p+"img/tank.d11bbec.png"},function(n,e,t){n.exports=t.p+"img/uranium.a6f97a7.png"},function(n,e,t){n.exports=t.p+"img/uranium235.5262890.png"},function(n,e,t){n.exports=t.p+"img/uranium238.d16c7dc.png"},function(n,e,t){n.exports=t.p+"img/uraniumCannonShell.32688a6.png"},function(n,e,t){n.exports=t.p+"img/uraniumFuelCell.b6a1f5c.png"},function(n,e,t){n.exports=t.p+"img/uraniumMagazine.6cc77f4.png"},function(n,e,t){n.exports=t.p+"img/water.c116c40.png"},function(n,e,t){n.exports=t.p+"img/wood.dac3aaa.png"},function(n,e,t){n.exports=t.p+"img/woodChest.d737576.png"},function(n,e,t){n.exports=t.p+"img/yellowPack.cce0247.png"},,,,function(n,e,t){"use strict";t.r(e);var o={props:["id","count","game"],computed:{hasSpace:function(){var n=!1,base=this.game.bases[this.id];return base&&("item"==base.type?n=base.getMax()>=this.count+base.count:base.getAvailableCount()<50&&(n=!0)),n}}},r=t(62),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"position-relative p-1 d-flex"},[o("img",{attrs:{src:t(285)("./"+n.id+".png"),width:"18px",height:"18px",title:n.$t("name_"+n.id),alt:n.$t("name_"+n.id)}}),n._v(" "),o("div",{staticClass:"position-absolute end-0 bottom-0 small"},[o("FormatNumber",{staticClass:"text-shadow",class:{"text-danger":0==n.hasSpace},attrs:{value:n.count}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:t(286).default})}])]);