<template>
    <div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
    
        <div v-if="isMobile == true" class="position-absolute bg-grid top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
            <div class="p-3">
                <div class="row g-3">
                    <div class="col-12 text-center">
                        <img :src="require(`~/assets/icon.png`)" width="48px" class="rounded" />
                        <div class="mt-2 text-center">
                            <span class="text-white h5">FG Factory 2</span>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <span class="text-danger">Your device is not supported for the moment.</span>
                    </div>
                    <div class="col-12 text-center">
                        <span class="text-normal">To be informed when your device will be supported and new features will be ready, please join Discord server.</span>
                    </div>
                    <div class="col-12 text-center">
                        <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-dark">
                            <div class="row gx-1 align-items-center">
                                <img class="col-auto" :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                <span class="col-auto">Discord</span>
                            </div>
                        </a>
                    </div>                
                </div>
            </div>
        </div>
                        
        <div v-if="popupWipe">
            <div class="modal fade show d-block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header align-items-center">
                            <div class="col">
                                <span class="modal-title fw-bold">Wipe Local Data</span>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-sm btn-dark" @click="popupWipe = false;">
                                    <span><i class="fas fa-fw fa-times"></i></span>
                                </button>
                            </div>
                        </div>
                        <div class="modal-body text-center">
                            <span class="text-danger">Are you sure you want to wipe your local data?<br>You will loose ALL your progress!</span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="resetGameData(); popupWipe = false;">
                                <span>Ok</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </div>
    
        <div v-if="popupSupport">
            <div class="modal fade show d-block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header align-items-center">
                            <div class="col">
                                <span class="modal-title fw-bold">Support</span>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="col-auto btn btn-sm btn-dark" @click="popupSupport = null">
                                    <span><i class="fas fa-fw fa-times"></i></span>
                                </button>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="row g-3">
                                <div class="col-12 text-center">
                                    <span>I like the donation system because there is nothing forcing you to donate other than out of the goodness of people's hearts. If you like the game and want more content faster, I would be happy to put more time towards this game if I felt that it is paying off.</span>
                                </div>
                                <div class="col-3 text-center">
                                    <a href="https://www.patreon.com/bePatron?u=61283131" target="_blank" class="w-100 btn btn-dark" style="width:100px;">
                                        <div class="col-12"><img :src="require(`~/assets/ui/patreon.png`)" width="36px" height="36px" /></div>
                                        <div class="mt-2">Become a supporter</div>
                                    </a>
                                </div>
                                <div class="col-3 text-center">
                                    <a href="https://ko-fi.com/freddecgames" target="_blank" class="w-100 btn btn-dark" style="width:100px;">
                                        <div class="col-12"><img :src="require(`~/assets/ui/kofi.png`)" width="36px" height="36px" /></div>
                                        <div class="mt-2">Buy me<br>a Ko-fi</div>
                                    </a>
                                </div>
                                <form class="col-3 text-center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                    <input type="hidden" name="cmd" value="_s-xclick">
                                    <input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
                                    <button type="submit" class="w-100 btn btn-dark">
                                        <div class="col-12"><img :src="require(`~/assets/ui/paypal.png`)" width="36px" height="36px" /></div>
                                        <div class="mt-2">Make a donation</div>
                                    </button>
                                </form>
                                <div class="col-3 text-center">
                                    <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="w-100 btn btn-dark">
                                        <div class="col-12"><img :src="require(`~/assets/ui/discord.png`)" width="36px" height="36px" alt="Discord" /></div>
                                        <div class="mt-2">News and information</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </div>

        <div v-if="popupTutorial">
            <div class="modal fade show d-block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div v-if="popupTutorial.id == 'tut0'" class="modal-header align-items-center">
                            <div class="col">
                                <span class="modal-title fw-bold">Welcome</span>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-sm btn-dark" @click="popupTutorial = null; disableTutorial();">
                                    <span><i class="fas fa-fw fa-times"></i></span>
                                </button>
                            </div>
                        </div>
                        <div v-if="popupTutorial.id == 'tut0'" class="modal-body">
                            <div class="row g-3">
                                <div class="col-12 text-center">
                                    <span class="text-normal">...</span>
                                </div>
                                <div class="col-12">
                                    <div class="alert alert-info text-center" role="alert">
                                        <span>To open the tutorial again, click on the button <i class="fas fa-fw fa-question-circle"></i> in the bottom bar of the screen.</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="alert alert-danger text-center" role="alert">
                                        <div class="col-12">
                                            <span class="badge bg-danger text-white">Alpha version</span>
                                        </div>
                                        <span>This game is still under development so bugs and data lost could happen! Play as your own risks!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-dark" @click="popupTutorial.done = true; popupTutorial = null; disableTutorial();">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </div>
        
        <div v-if="isMobile == false && started == false" class="position-absolute bg-grid top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
            <div class="p-3">
                <div class="row g-3">
                    <div class="col-12 text-center">
                        <img :src="require(`~/assets/icon.png`)" width="48px" class="rounded" />
                        <div class="mt-2 text-center">
                            <span class="text-normal h5">FG Factory 2</span>
                        </div>
                    </div>
                    <div v-if="error == null" class="col-12 text-center">
                        <span class="flicker text-primary ">Initializing game...</span>
                    </div>
                    <div v-if="error != null" class="col-12">
                        <div class="row g-3">
                            <div class="col-12 text-center">
                                <div class="text-danger">An error occured during game loading</div>
                                <div class="text-danger">"{{ this.error }}"</div>
                            </div>
                            <div class="col-12 text-center">
                                <span class="text-normal">To ask for help, you could contact <span class="text-primary">Freddec</span> on Discord with following exported data</span>
                            </div>
                            <div class="col-12 text-center">
                                <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-dark">
                                    <div class="row gx-1 align-items-center">
                                        <img class="col-auto" :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                        <span class="col-auto">Discord</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <textarea spellcheck="false" rows="5" class="w-100 form-control border" style="max-width:512px;">{{ exportGameData }}</textarea>
                            </div>
                            <div class="col-12 text-center">
                                <span class="text-normal">Or you could wipe your local data to restart the game at the beginning</span>
                            </div>
                            <div class="col-12 text-center">
                                <button type="button" class="btn btn-danger" @click="showWipeDataPopup()">
                                    <div class="row gx-1 align-items-center">
                                        <span class="col-auto"><i class="fas fa-fw fa-skull"></i></span>
                                        <span class="col-auto">Wipe Local Data</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="isMobile == false && started == true" class="w-100 h-100 position-relative">
            
            <div class="navbar fixed-top bg-dark">
                <div class="container">
                    <div class="w-100 row align-items-center">
                        <div class="col-auto">
                            <div class="row gx-1 align-items-center">
                                <div class="col-auto">
                                    <img :src="require(`~/assets/icon.png`)" width="20px" />
                                </div>
                                <div class="col-auto">
                                    <span class="h5">FG Factory 2</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <span class="badge bg-danger text-white">Alpha version</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="navbar fixed-bottom bg-dark">
                <div class="container">
                    <div class="w-100 row gx-0 align-items-center">
                        <BottomButton label="Save" icon="fa-save" :click="manualSave" />
                        <BottomButton label="Support" icon="fa-hand-holding-heart" :click="showSupportPopup" />
                        <BottomButton label="Tutorial" icon="fa-question-circle" :click="enableTutorial" />
                        <div class="ms-auto col-auto me-2">
                            <div class="text-center text-muted small">Time Played</div>
                            <div class="text-center"><FormatTime :value="game.timePlayed" /></div>
                        </div>
                        <BottomButton v-if="game.paused == false" label="Pause" icon="fa-pause" :click="pauseGame" />
                        <BottomButton v-if="game.paused == true" label="Resume" icon="fa-play" :click="resumeGame" />
                    </div>
                </div>
            </div>
            
            <div class="nav nav-tabs fixed-top bg-dark">
                <div class="container">
                    <div class="row gx-0 align-items-center">
                        <TopMenuTab tabId="production" icon="fa-industry" />
                        <TopMenuTab tabId="research" icon="fa-flask" />
                        <TopMenuTab tabId="settings" icon="fa-cogs" class="ms-auto" />
                    </div>
                </div>
            </div>
            
            <div class="position-fixed top-0 bottom-0 start-0 end-0 py-3" style="margin-top:75px; margin-bottom:50px;">
                <div class="h-100 position-relative container">
                    
                    <div v-if="currentTabId == 'production'" class="h-100 row g-3">
                        <div class="col-auto scrollbar" style="width:475px;">
                            <div class="row g-3">
                                <Category id="machines" :show="catMachinesStart" @click="catMachinesOpen = !catMachinesOpen;">
                                    <ItemButton id="furnace1" :game="game" />
                                    <ItemButton id="furnace2" :game="game" />
                                    <ItemButton id="furnace3" :game="game" />
                                    <ItemButton id="drill1" :game="game" />
                                    <ItemButton id="drill2" :game="game" />
                                    <ItemButton id="assembler1" :game="game" />
                                    <ItemButton id="assembler2" :game="game" />
                                    <ItemButton id="assembler3" :game="game" />
                                    <ItemButton id="lab" :game="game" />
                                    <ItemButton id="offshorePump" :game="game" />
                                    <ItemButton id="pumpjack" :game="game" />
                                    <ItemButton id="oilRefinery" :game="game" />
                                    <ItemButton id="chemicalPlant" :game="game" />
                                    <ItemButton id="boiler" :game="game" />
                                    <ItemButton id="steamEngine" :game="game" />
                                    <ItemButton id="solarPanel" :game="game" />
                                    <ItemButton id="constructionRobot" :game="game" />
                                    <ItemButton id="centrifuge" :game="game" />
                                    <ItemButton id="nuclearReactor" :game="game" />
                                    <ItemButton id="heatExchanger" :game="game" />
                                    <ItemButton id="steamTurbine" :game="game" />
                                    <ItemButton id="rocketSilo" :game="game" />
                                </Category>
                                <Category id="raw" :show="catRawStart" @click="catRawOpen = !catRawOpen;">
                                    <ItemButton id="wood" :game="game" />
                                    <ItemButton id="coal" :game="game" />
                                    <ItemButton id="stone" :game="game" />
                                    <ItemButton id="iron" :game="game" />
                                    <ItemButton id="copper" :game="game" />
                                    <ItemButton id="uranium" :game="game" />
                                    <ItemButton id="water" :game="game" />
                                    <ItemButton id="oil" :game="game" />
                                </Category>
                                <Category id="fabricated" :show="catFabricatedStart" @click="catFabricatedOpen = !catFabricatedOpen;">
                                    <ItemButton id="ironPlate" :game="game" />
                                    <ItemButton id="steelPlate" :game="game" />
                                    <ItemButton id="ironStick" :game="game" />
                                    <ItemButton id="ironGearWheel" :game="game" />
                                    <ItemButton id="pipe" :game="game" />
                                    <ItemButton id="engineUnit" :game="game" />
                                    <ItemButton id="copperPlate" :game="game" />
                                    <ItemButton id="copperCable" :game="game" />
                                    <ItemButton id="stoneBrick" :game="game" />
                                    <ItemButton id="concrete" :game="game" />
                                </Category>
                                <Category id="items" :show="catItemsStart" @click="catItemsOpen = !catItemsOpen;">
                                    <ItemButton id="heat" :game="game" />
                                    <ItemButton id="steam" :game="game" />
                                    <ItemButton id="electricity" :game="game" />
                                    <ItemButton id="heavyOil" :game="game" />
                                    <ItemButton id="lightOil" :game="game" />
                                    <ItemButton id="lubricant" :game="game" />
                                    <ItemButton id="petroleumGas" :game="game" />
                                    <ItemButton id="sulfur" :game="game" />
                                    <ItemButton id="sulfuricAcid" :game="game" />
                                    <ItemButton id="solidFuel" :game="game" />
                                    <ItemButton id="plasticBar" :game="game" />
                                    <ItemButton id="battery" :game="game" />
                                    <ItemButton id="explosives" :game="game" />
                                    <ItemButton id="uranium235" :game="game" />
                                    <ItemButton id="uranium238" :game="game" />
                                    <ItemButton id="uraniumFuelCell" :game="game" />
                                    <ItemButton id="nuclearFuel" :game="game" />
                                    <ItemButton id="electronicCircuit" :game="game" />
                                    <ItemButton id="advancedCircuit" :game="game" />
                                    <ItemButton id="processingUnit" :game="game" />
                                    <ItemButton id="electricEngineUnit" :game="game" />
                                    <ItemButton id="flyingRobot" :game="game" />
                                    <ItemButton id="radar" :game="game" />
                                    <ItemButton id="rocketControlUnit" :game="game" />
                                    <ItemButton id="lowDensityStructure" :game="game" />
                                    <ItemButton id="rocketFuel" :game="game" />
                                    <ItemButton id="rocketPart" :game="game" />
                                    <ItemButton id="portableFusionReactor" :game="game" />
                                    <ItemButton id="satellite" :game="game" />
                                </Category>
                                <Category id="storages" :show="catStoragesStart" @click="catStoragesOpen = !catStoragesOpen;">
                                    <ItemButton id="woodChest" :game="game" />
                                    <ItemButton id="ironChest" :game="game" />
                                    <ItemButton id="steelChest" :game="game" />
                                    <ItemButton id="storageTank" :game="game" />
                                    <ItemButton id="barrel" :game="game" />
                                    <ItemButton id="accumulator" :game="game" />
                                </Category>
                                <Category id="science" :show="catScienceStart" @click="catScienceOpen = !catScienceOpen;">
                                    <ItemButton id="redPack" :game="game" />
                                    <ItemButton id="greenPack" :game="game" />
                                    <ItemButton id="grayPack" :game="game" />
                                    <ItemButton id="bluePack" :game="game" />
                                    <ItemButton id="purplePack" :game="game" />
                                    <ItemButton id="yellowPack" :game="game" />
                                </Category>
                                <Category id="modules" :show="catModulesStart" @click="catModulesOpen = !catModulesOpen;">
                                    <ItemButton id="speedModule1" :game="game" />
                                    <ItemButton id="speedModule2" :game="game" />
                                    <ItemButton id="speedModule3" :game="game" />
                                    <ItemButton id="efficiencyModule1" :game="game" />
                                    <ItemButton id="efficiencyModule2" :game="game" />
                                    <ItemButton id="efficiencyModule3" :game="game" />
                                    <ItemButton id="productivityModule1" :game="game" />
                                    <ItemButton id="productivityModule2" :game="game" />
                                    <ItemButton id="productivityModule3" :game="game" />
                                </Category>
                                <Category id="weapons" :show="catWeaponsStart" @click="catWeaponsOpen = !catWeaponsOpen;">
                                    <ItemButton id="pistol" :game="game" />
                                    <ItemButton id="submachineGun" :game="game" />
                                    <ItemButton id="shotgun" :game="game" />
                                    <ItemButton id="combatShotgun" :game="game" />
                                    <ItemButton id="rocketLauncher" :game="game" />
                                    <ItemButton id="gunTurret" :game="game" />
                                    <ItemButton id="laserTurret" :game="game" />
                                    <ItemButton id="artilleryTurret" :game="game" />
                                    <ItemButton id="car" :game="game" />
                                    <ItemButton id="tank" :game="game" />
                                    <ItemButton id="spidertron" :game="game" />
                                    <ItemButton id="firearmMagazine" :game="game" />
                                    <ItemButton id="piercingMagazine" :game="game" />
                                    <ItemButton id="uraniumMagazine" :game="game" />
                                    <ItemButton id="shotgunShells" :game="game" />
                                    <ItemButton id="piercingShells" :game="game" />
                                    <ItemButton id="cannonShell" :game="game" />
                                    <ItemButton id="explosiveCannonShell" :game="game" />
                                    <ItemButton id="uraniumCannonShell" :game="game" />
                                    <ItemButton id="artilleryShell" :game="game" />
                                    <ItemButton id="rocket" :game="game" />
                                    <ItemButton id="explosiveRocket" :game="game" />
                                    <ItemButton id="atomicBomb" :game="game" />
                                </Category>
                            </div>
                        </div>
                        <div class="h-100 col d-flex flex-column">
                            <ItemCard id="furnace1" :game="game" />
                            <ItemCard id="furnace2" :game="game" />
                            <ItemCard id="furnace3" :game="game" />
                            <ItemCard id="drill1" :game="game" />
                            <ItemCard id="drill2" :game="game" />
                            <ItemCard id="assembler1" :game="game" />
                            <ItemCard id="assembler2" :game="game" />
                            <ItemCard id="assembler3" :game="game" />
                            <ItemCard id="lab" :game="game" />
                            <ItemCard id="offshorePump" :game="game" />
                            <ItemCard id="pumpjack" :game="game" />
                            <ItemCard id="oilRefinery" :game="game" />
                            <ItemCard id="chemicalPlant" :game="game" />
                            <ItemCard id="boiler" :game="game" />
                            <ItemCard id="steamEngine" :game="game" />
                            <ItemCard id="solarPanel" :game="game" />
                            <ItemCard id="constructionRobot" :game="game" />
                            <ItemCard id="centrifuge" :game="game" />
                            <ItemCard id="nuclearReactor" :game="game" />
                            <ItemCard id="heatExchanger" :game="game" />
                            <ItemCard id="steamTurbine" :game="game" />
                            <ItemCard id="rocketSilo" :game="game" />
                            <ItemCard id="wood" :game="game" />
                            <ItemCard id="coal" :game="game" />
                            <ItemCard id="stone" :game="game" />
                            <ItemCard id="iron" :game="game" />
                            <ItemCard id="copper" :game="game" />
                            <ItemCard id="uranium" :game="game" />
                            <ItemCard id="water" :game="game" />
                            <ItemCard id="oil" :game="game" />
                            <ItemCard id="ironPlate" :game="game" />
                            <ItemCard id="steelPlate" :game="game" />
                            <ItemCard id="ironStick" :game="game" />
                            <ItemCard id="ironGearWheel" :game="game" />
                            <ItemCard id="pipe" :game="game" />
                            <ItemCard id="engineUnit" :game="game" />
                            <ItemCard id="copperPlate" :game="game" />
                            <ItemCard id="copperCable" :game="game" />
                            <ItemCard id="stoneBrick" :game="game" />
                            <ItemCard id="concrete" :game="game" />
                            <ItemCard id="heat" :game="game" />
                            <ItemCard id="steam" :game="game" />
                            <ItemCard id="electricity" :game="game" />
                            <ItemCard id="heavyOil" :game="game" />
                            <ItemCard id="lightOil" :game="game" />
                            <ItemCard id="lubricant" :game="game" />
                            <ItemCard id="petroleumGas" :game="game" />
                            <ItemCard id="sulfur" :game="game" />
                            <ItemCard id="sulfuricAcid" :game="game" />
                            <ItemCard id="solidFuel" :game="game" />
                            <ItemCard id="plasticBar" :game="game" />
                            <ItemCard id="battery" :game="game" />
                            <ItemCard id="explosives" :game="game" />
                            <ItemCard id="uranium235" :game="game" />
                            <ItemCard id="uranium238" :game="game" />
                            <ItemCard id="uraniumFuelCell" :game="game" />
                            <ItemCard id="nuclearFuel" :game="game" />
                            <ItemCard id="electronicCircuit" :game="game" />
                            <ItemCard id="advancedCircuit" :game="game" />
                            <ItemCard id="processingUnit" :game="game" />
                            <ItemCard id="electricEngineUnit" :game="game" />
                            <ItemCard id="flyingRobot" :game="game" />
                            <ItemCard id="radar" :game="game" />
                            <ItemCard id="rocketControlUnit" :game="game" />
                            <ItemCard id="lowDensityStructure" :game="game" />
                            <ItemCard id="rocketFuel" :game="game" />
                            <ItemCard id="rocketPart" :game="game" />
                            <ItemCard id="portableFusionReactor" :game="game" />
                            <ItemCard id="satellite" :game="game" />
                            <ItemCard id="woodChest" :game="game" />
                            <ItemCard id="ironChest" :game="game" />
                            <ItemCard id="steelChest" :game="game" />
                            <ItemCard id="storageTank" :game="game" />
                            <ItemCard id="barrel" :game="game" />
                            <ItemCard id="accumulator" :game="game" />
                            <ItemCard id="redPack" :game="game" />
                            <ItemCard id="greenPack" :game="game" />
                            <ItemCard id="grayPack" :game="game" />
                            <ItemCard id="bluePack" :game="game" />
                            <ItemCard id="purplePack" :game="game" />
                            <ItemCard id="yellowPack" :game="game" />
                            <ItemCard id="speedModule1" :game="game" />
                            <ItemCard id="speedModule2" :game="game" />
                            <ItemCard id="speedModule3" :game="game" />
                            <ItemCard id="efficiencyModule1" :game="game" />
                            <ItemCard id="efficiencyModule2" :game="game" />
                            <ItemCard id="efficiencyModule3" :game="game" />
                            <ItemCard id="productivityModule1" :game="game" />
                            <ItemCard id="productivityModule2" :game="game" />
                            <ItemCard id="productivityModule3" :game="game" />
                            <ItemCard id="pistol" :game="game" />
                            <ItemCard id="submachineGun" :game="game" />
                            <ItemCard id="shotgun" :game="game" />
                            <ItemCard id="combatShotgun" :game="game" />
                            <ItemCard id="rocketLauncher" :game="game" />
                            <ItemCard id="gunTurret" :game="game" />
                            <ItemCard id="laserTurret" :game="game" />
                            <ItemCard id="artilleryTurret" :game="game" />
                            <ItemCard id="car" :game="game" />
                            <ItemCard id="tank" :game="game" />
                            <ItemCard id="spidertron" :game="game" />
                            <ItemCard id="firearmMagazine" :game="game" />
                            <ItemCard id="piercingMagazine" :game="game" />
                            <ItemCard id="uraniumMagazine" :game="game" />
                            <ItemCard id="shotgunShells" :game="game" />
                            <ItemCard id="piercingShells" :game="game" />
                            <ItemCard id="cannonShell" :game="game" />
                            <ItemCard id="explosiveCannonShell" :game="game" />
                            <ItemCard id="uraniumCannonShell" :game="game" />
                            <ItemCard id="artilleryShell" :game="game" />
                            <ItemCard id="rocket" :game="game" />
                            <ItemCard id="explosiveRocket" :game="game" />
                            <ItemCard id="atomicBomb" :game="game" />
                        </div>
                    </div>
                    
                    <div v-if="currentTabId == 'research'" class="h-100 row g-3">
                        <div class="col-auto scrollbar" style="width:475px;">
                            <div class="row g-3">
                                <Category id="techs" :show="catTechsStart" @click="catTechsOpen = !catTechsOpen;">
                                    <TechButton id="automation1" :game="game" />
                                    <TechButton id="modules" :game="game" />
                                </Category>
                            </div>
                        </div>
                        <div class="h-100 col d-flex flex-column">
                            <TechCard id="automation1" :game="game" />
                        </div>
                    </div>

                    <div v-if="currentTabId == 'settings'" class="row g-3">
                        <div class="col-12">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="fw-bold">About</span>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-6">
                                            <div class="row g-3">
                                                <div class="col-12 text-center text-normal">This game has been designed and developed by <span class="text-white">Freddec Games</span>. To be kept informed about other games and the future of this one, join Discord server and visit our official website.</div>
                                                <div class="col-12">
                                                    <div class="row align-items-center justify-content-center">
                                                        <div class="col-auto">
                                                            <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-dark">
                                                                <div class="row gx-1 align-items-center">
                                                                    <img class="col-auto" :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                                                    <span class="col-auto">Discord</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="col-auto">
                                                            <a href="https://freddecgames.com/" target="_blank" class="btn btn-dark">
                                                                <div class="row gx-1 align-items-center">
                                                                    <img class="col-auto rounded-circle" :src="require(`~/assets/ui/freddec.png`)" width="16px" height="16px" alt="Freddec Games" />
                                                                    <span class="col-auto">Freddec Games</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3">
                                                <div class="col-12 text-center text-normal">This game is largely inspired by the game <span class="text-white">Factorio</span> (productions, buildings, recipes, techs and etc ...)</div>
                                                <div class="col-12 text-center d-flex justify-content-center">
                                                    <a href="https://www.factorio.com/" target="_blank" class="btn btn-dark">
                                                        <div class="row gx-1 align-items-center">
                                                            <img class="col-auto" :src="require(`~/assets/ui/factorio.png`)" width="16px" height="16px" alt="Factorio" />
                                                            <span class="col-auto">Factorio Offical Site</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="col-12 text-center text-normal">Icons are provided by <a href="https://wiki.factorio.com/" target="_blank">Factorio Wiki</a>, <a href="https://www.flaticon.com/" target="_blank">Flaticon</a> and <a href="https://fontawesome.com/" target="_blank">Fontawesome</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="fw-bold">Options</span>
                                </div>
                                <div class="card-body">
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="fw-bold">Hard Reset</span>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-center">
                                    <button type="button" class="btn btn-danger" @click="showWipeDataPopup()">
                                        <div class="row gx-1 align-items-center">
                                            <span class="col-auto"><i class="fas fa-fw fa-skull"></i></span>
                                            <span class="col-auto">Wipe Local Data</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="fw-bold">Export Save</span>
                                </div>
                                <div class="card-body">
                                    <textarea spellcheck="false" rows="5" class="w-100 form-control">{{ exportGameData }}</textarea>                                        
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="fw-bold">Import Save</span>
                                </div>
                                <div class="card-body">
                                    <textarea spellcheck="false" rows="5" class="w-100 form-control" v-model="importExportData"></textarea>
                                    <div class="mt-2 text-end">
                                        <button type="button" class="btn btn-dark" @click="importGameData()">
                                            <span>Import</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="position-absolute bottom-0 end-0 pe-2" style="z-index:100;">
                        <div v-if="toastText" class="toast fade show text-white border-0" :class="{ 'bg-primary':toastType == 'info', 'bg-danger':toastType == 'error', 'bg-success':toastType == 'success' }" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-body">
                                <span v-html="toastText"></span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>

//------------------------------------------------------------------------------

var baseData = [
    
    { id:'manual',              type:'machine', auto:false,                                          speed:.5,   },
    { id:'furnace1',            type:'machine', auto:true,  energy:{ id:'coal',        count:.04  }, speed:1,    time:.5, inputs:{ stone:5 }, outputs:{ furnace1:1 }, },
    { id:'furnace2',            type:'machine', auto:true,  energy:{ id:'coal',        count:.04  }, speed:2,    time:3,  inputs:{ steelPlate:6, stoneBrick:10 }, outputs:{ furnace2:1 }, reqs:[ 'material1' ], },
    { id:'furnace3',            type:'machine', auto:true,  energy:{ id:'electricity', count:180  }, speed:2,    time:5,  inputs:{ advancedCircuit:3, steelPlate:10, stoneBrick:10 }, outputs:{ furnace3:1 }, moduleSlots:2, reqs:[ 'material2' ], },
    { id:'drill1',              type:'machine', auto:true,  energy:{ id:'coal',        count:.02  }, speed:.25,  time:2,  inputs:{ ironGearWheel:3, ironPlate:3, furnace1:1 }, outputs:{ drill1:1 }, },
    { id:'drill2',              type:'machine', auto:true,  energy:{ id:'electricity', count:90   }, speed:.5,   time:2,  inputs:{ electronicCircuit:3, ironGearWheel:5, ironPlate:10 }, outputs:{ drill2:1 }, moduleSlots:3, },    
    { id:'assembler1',          type:'machine', auto:true,  energy:{ id:'electricity', count:75   }, speed:.5,   time:.5, inputs:{ electronicCircuit:3, ironGearWheel:5, ironPlate:9 }, outputs:{ assembler1:1 }, reqs:[ 'automation1' ], },
    { id:'assembler2',          type:'machine', auto:true,  energy:{ id:'electricity', count:150  }, speed:.75,  time:.5, inputs:{ assembler1:1, electronicCircuit:3, ironGearWheel:5, steelPlate:2 }, outputs:{ assembler2:1 }, moduleSlots:2, reqs:[ 'automation2' ], },
    { id:'assembler3',          type:'machine', auto:true,  energy:{ id:'electricity', count:375  }, speed:1.25, time:.5, inputs:{ assembler2:2, speedModule1:4 }, outputs:{ assembler3:1 }, moduleSlots:4, reqs:[ 'automation3' ], },
    { id:'offshorePump',        type:'machine', auto:true,                                           speed:.1,   time:.5, inputs:{ electronicCircuit:2, ironGearWheel:1, pipe:1 }, outputs:{ offshorePump:1 }, },
    { id:'pumpjack',            type:'machine', auto:true,  energy:{ id:'electricity', count:90   }, speed:1,    time:5,  inputs:{ electronicCircuit:5, ironGearWheel:10, pipe:10, steelPlate:5 }, outputs:{ pumpjack:1 }, moduleSlots:2, reqs:[ 'oilProcessing' ], },
    { id:'oilRefinery',         type:'machine', auto:true,  reqs:[ 'oilProcessing' ], },
    { id:'chemicalPlant',       type:'machine', auto:true,  reqs:[ 'oilProcessing' ], },
    { id:'boiler',              type:'machine', auto:true,  energy:{ id:'coal',        count:2.22 }, speed:1,    time:.5, inputs:{ pipe:4, furnace1:1 }, outputs:{ boiler:1 }, },
    { id:'steamEngine',         type:'machine', auto:true,                                           speed:1,    time:.5, inputs:{ ironGearWheel:8, ironPlate:10, pipe:5 }, outputs:{ steamEngine:1 }, },
    { id:'solarPanel',          type:'machine', auto:true,  reqs:[ 'solarEnergy' ], },
    { id:'constructionRobot',   type:'machine', auto:true,  reqs:[ 'constructionRobotics' ], },
    { id:'centrifuge',          type:'machine', auto:true,  reqs:[ 'uraniumProcessing' ], },
    { id:'nuclearReactor',      type:'machine', auto:true,  reqs:[ 'nuclearPower' ], },
    { id:'heatExchanger',       type:'machine', auto:true,  reqs:[ 'nuclearPower' ], },
    { id:'steamTurbine',        type:'machine', auto:true,  reqs:[ 'nuclearPower' ], },
    { id:'rocketSilo',          type:'machine', auto:true,  reqs:[ 'rocketSiloTech' ], },

    //---
    
    { id:'lab',                 type:'lab', energy:{ id:'electricity', count:60 }, time:3, inputs:{ electronicCircuit:10, ironGearWheel:12, ironPlate:2 }, outputs:{ lab:1 }, moduleSlots:2, },
    
    //---
    
    { id:'wood',                type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ wood:1 }, },
    { id:'coal',                type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ coal:1 }, },
    { id:'stone',               type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ stone:1 }, },
    { id:'iron',                type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ iron:1 }, },
    { id:'copper',              type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ copper:1 }, },
    { id:'uranium',             type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:2, outputs:{ uranium:1 }, },
    { id:'water',               type:'item', max:1200, storages:[ 'storageTank' ],                          time:1, outputs:{ water:120 }, },
    { id:'oil',                 type:'item', max:50,   storages:[ 'barrel' ],                               time:1, outputs:{ oil:2 }, reqs:[ 'oilProcessing' ], },
    
    //---
    
    { id:'ironPlate',           type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3.2, inputs:{ iron:1 }, outputs:{ ironPlate:1 }, },
    { id:'steelPlate',          type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], reqs:[ 'steelProcessing' ], },
    { id:'ironStick',           type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], },
    { id:'ironGearWheel',       type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5, inputs:{ ironPlate:2 }, outputs:{ ironGearWheel:1 }, },
    { id:'pipe',                type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5, inputs:{ ironPlate:1 }, outputs:{ pipe:1 }, },
    { id:'engineUnit',          type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], reqs:[ 'engineTech' ], },
    { id:'copperPlate',         type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3.2, inputs:{ copper:1 }, outputs:{ copperPlate:1 },},
    { id:'copperCable',         type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5, inputs:{ copperPlate:1 }, outputs:{ copperCable:2 },},
    { id:'stoneBrick',          type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], },
    { id:'concrete',            type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], reqs:[ 'concreteTech' ], },
    
    //---
    
    { id:'steam',               type:'item', max:1200, storages:[ 'storageTank' ],                          time:1, inputs:{ water:60 }, outputs:{ steam:60 }, },
    { id:'electricity',         type:'item', max:1200, storages:[ 'accumulator' ],                          time:1, inputs:{ steam:30 }, outputs:{ electricity:900 }, },
    { id:'electronicCircuit',   type:'item', max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5, inputs:{ copperCable:3, ironPlate:1 }, outputs:{ electronicCircuit:1 }, },
    
    //---
    
    { id:'efficiencyModule1',   type:'module', coeffEnergy:.7, reqs:[ 'efficiency1' ], },
    { id:'efficiencyModule2',   type:'module', coeffEnergy:.6, reqs:[ 'efficiency2' ], },
    { id:'efficiencyModule3',   type:'module', coeffEnergy:.5, reqs:[ 'efficiency3' ], },

    { id:'productivityModule1', type:'module', coeffTime:1.05, coeffEnergy:1.4, coeffOutputs:1.04, reqs:[ 'productivity1' ], },
    { id:'productivityModule2', type:'module', coeffTime:1.10, coeffEnergy:1.6, coeffOutputs:1.06, reqs:[ 'productivity2' ], },
    { id:'productivityModule3', type:'module', coeffTime:1.15, coeffEnergy:1.8, coeffOutputs:1.10, reqs:[ 'productivity3' ], },
    
    { id:'speedModule1',        type:'module', coeffTime:.8, coeffEnergy:1.5, reqs:[ 'speed1' ], },
    { id:'speedModule2',        type:'module', coeffTime:.7, coeffEnergy:1.6, reqs:[ 'speed2' ], },
    { id:'speedModule3',        type:'module', coeffTime:.5, coeffEnergy:1.7, reqs:[ 'speed3' ], },
    
    //---
    
    { id:'woodChest',           type:'storage', value:16,    time:.5, inputs:{ wood:2 }, outputs:{ woodChest:1 }, },
    { id:'steelChest',          type:'storage', value:48,    reqs:[ 'steelProcessing' ], },
    { id:'ironChest',           type:'storage', value:32,    },
    { id:'storageTank',         type:'storage', value:25000, reqs:[ 'fluidHandling' ], },
    { id:'barrel',              type:'storage', value:50,    },
    { id:'accumulator',         type:'storage', value:300,   reqs:[ 'accumulatorTech' ],},
    
    //---
    
    { id:'boilerManual',                type:'production', itemId:'boiler',             machineId:'manual', },
    { id:'boilerAssembler1',            type:'production', itemId:'boiler',             machineId:'assembler1', },
    { id:'boilerAssembler2',            type:'production', itemId:'boiler',             machineId:'assembler2', },
    { id:'boilerAssembler3',            type:'production', itemId:'boiler',             machineId:'assembler3', },
    
    { id:'coalManual',                  type:'production', itemId:'coal',               machineId:'manual', },
    { id:'coalDrill1',                  type:'production', itemId:'coal',               machineId:'drill1', },
    { id:'coalDrill2',                  type:'production', itemId:'coal',               machineId:'drill2', },

    { id:'copperManual',                type:'production', itemId:'copper',             machineId:'manual', },
    { id:'copperDrill1',                type:'production', itemId:'copper',             machineId:'drill1', },
    { id:'copperDrill2',                type:'production', itemId:'copper',             machineId:'drill2', },
    
    { id:'copperCableManual',           type:'production', itemId:'copperCable',        machineId:'manual', },
    { id:'copperCableAssembler1',       type:'production', itemId:'copperCable',        machineId:'assembler1', },
    { id:'copperCableAssembler2',       type:'production', itemId:'copperCable',        machineId:'assembler2', },
    { id:'copperCableAssembler3',       type:'production', itemId:'copperCable',        machineId:'assembler3', },
    
    { id:'copperPlateFurnace1',         type:'production', itemId:'copperPlate',        machineId:'furnace1', },
    { id:'copperPlateFurnace2',         type:'production', itemId:'copperPlate',        machineId:'furnace2', },
    { id:'copperPlateFurnace3',         type:'production', itemId:'copperPlate',        machineId:'furnace3', },
    
    { id:'drill1Manual',                type:'production', itemId:'drill1',             machineId:'manual', },
    { id:'drill1Assembler1',            type:'production', itemId:'drill1',             machineId:'assembler1', },
    { id:'drill1Assembler2',            type:'production', itemId:'drill1',             machineId:'assembler2', },
    { id:'drill1Assembler3',            type:'production', itemId:'drill1',             machineId:'assembler3', },
    
    { id:'drill2Manual',                type:'production', itemId:'drill2',             machineId:'manual', },
    { id:'drill2Assembler1',            type:'production', itemId:'drill2',             machineId:'assembler1', },
    { id:'drill2Assembler2',            type:'production', itemId:'drill2',             machineId:'assembler2', },
    { id:'drill2Assembler3',            type:'production', itemId:'drill2',             machineId:'assembler3', },
    
    { id:'electricitySteamEngine',      type:'production', itemId:'electricity',        machineId:'steamEngine', },
    
    { id:'electronicCircuitManual',     type:'production', itemId:'electronicCircuit',  machineId:'manual', },
    { id:'electronicCircuitAssembler1', type:'production', itemId:'electronicCircuit',  machineId:'assembler1', },
    { id:'electronicCircuitAssembler2', type:'production', itemId:'electronicCircuit',  machineId:'assembler2', },
    { id:'electronicCircuitAssembler3', type:'production', itemId:'electronicCircuit',  machineId:'assembler3', },
    
    { id:'furnace1Manual',              type:'production', itemId:'furnace1',           machineId:'manual', },
    { id:'furnace1Assembler1',          type:'production', itemId:'furnace1',           machineId:'assembler1', },
    { id:'furnace1Assembler2',          type:'production', itemId:'furnace1',           machineId:'assembler2', },
    { id:'furnace1Assembler3',          type:'production', itemId:'furnace1',           machineId:'assembler3', },
    
    { id:'ironManual',                  type:'production', itemId:'iron',               machineId:'manual', },
    { id:'ironDrill1',                  type:'production', itemId:'iron',               machineId:'drill1', },
    { id:'ironDrill2',                  type:'production', itemId:'iron',               machineId:'drill2', },
    
    { id:'ironGearWheelManual',         type:'production', itemId:'ironGearWheel',      machineId:'manual', },
    { id:'ironGearWheelAssembler1',     type:'production', itemId:'ironGearWheel',      machineId:'assembler1', },
    { id:'ironGearWheelAssembler2',     type:'production', itemId:'ironGearWheel',      machineId:'assembler2', },
    { id:'ironGearWheelAssembler3',     type:'production', itemId:'ironGearWheel',      machineId:'assembler3', },
    
    { id:'ironPlateFurnace1',           type:'production', itemId:'ironPlate',          machineId:'furnace1', },
    { id:'ironPlateFurnace2',           type:'production', itemId:'ironPlate',          machineId:'furnace2', },
    { id:'ironPlateFurnace3',           type:'production', itemId:'ironPlate',          machineId:'furnace3', },
    
    { id:'offshorePumpManual',          type:'production', itemId:'offshorePump',       machineId:'manual', },
    { id:'offshorePumpAssembler1',      type:'production', itemId:'offshorePump',       machineId:'assembler1', },
    { id:'offshorePumpAssembler2',      type:'production', itemId:'offshorePump',       machineId:'assembler2', },
    { id:'offshorePumpAssembler3',      type:'production', itemId:'offshorePump',       machineId:'assembler3', },
    
    { id:'pipeManual',                  type:'production', itemId:'pipe',               machineId:'manual', },
    { id:'pipeAssembler1',              type:'production', itemId:'pipe',               machineId:'assembler1', },
    { id:'pipeAssembler2',              type:'production', itemId:'pipe',               machineId:'assembler2', },
    { id:'pipeAssembler3',              type:'production', itemId:'pipe',               machineId:'assembler3', },
    
    { id:'steamBoiler',                 type:'production', itemId:'steam',              machineId:'boiler', },
    
    { id:'steamEngineManual',           type:'production', itemId:'steamEngine',        machineId:'manual', },
    { id:'steamEngineAssembler1',       type:'production', itemId:'steamEngine',        machineId:'assembler1', },
    { id:'steamEngineAssembler2',       type:'production', itemId:'steamEngine',        machineId:'assembler2', },
    { id:'steamEngineAssembler3',       type:'production', itemId:'steamEngine',        machineId:'assembler3', },
    
    { id:'stoneManual',                 type:'production', itemId:'stone',              machineId:'manual', },
    { id:'stoneDrill1',                 type:'production', itemId:'stone',              machineId:'drill1', },
    { id:'stoneDrill2',                 type:'production', itemId:'stone',              machineId:'drill2', },
    
    { id:'waterOffshorePump',           type:'production', itemId:'water',              machineId:'offshorePump', },
    
    { id:'woodManual',                  type:'production', itemId:'wood',               machineId:'manual', },
    { id:'woodConstructionRobot',       type:'production', itemId:'wood',               machineId:'constructionRobot', },
    
    { id:'woodChestManual',             type:'production', itemId:'woodChest',          machineId:'manual', },
    { id:'woodChestAssembler1',         type:'production', itemId:'woodChest',          machineId:'assembler1', },
    { id:'woodChestAssembler2',         type:'production', itemId:'woodChest',          machineId:'assembler2', },
    { id:'woodChestAssembler3',         type:'production', itemId:'woodChest',          machineId:'assembler3', },
    
    //---
    
    { id:'automation1',         type:'research', time:10, cycleCount:10,    costs:{ redPack:1 }, },
    { id:'modules',             type:'research', time:30, cycleCount:100,   costs:{ redPack:1, greenPack:1 }, reqs:[ 'electronics2' ], },
]

//------------------------------------------------------------------------------

class Base {

    constructor(game, data) {
    
        this.game = game
        
        this.id = data.id
        this.type = data.type
        this.reqs = data.reqs
    }
    
    //---
    
    isUnlocked() {
    
        if (this.reqs == null) return true
        
        let ret = true
        this.reqs.forEach(techId => {
            
            let tech = this.game.bases[techId]
            if (tech == null || tech.isDone() == false) ret = false
        })
        
        return ret
    }
    
    //---
    
    onLoad(data) {}
    
    onSave(data) { data.id = this.id }
    
    onMainLoop(delta) {}
}

//------------------------------------------------------------------------------

class Item extends Base {

    constructor(game, data) {
        super(game, data)
        
        this.max = data.max
        this.time = data.time
        this.inputs = data.inputs
        this.outputs = data.outputs
        
        this.storages = []
        if (data.storages) {
            data.storages.forEach(storageId => {
            
                let storage = { id:storageId, count:0 }
                this.storages.push(storage)
            })
        }
        
        this.count = 0
        this.buildCount = 1
        this.productions = []
    }
    
    //---
    
    onLoad(data) {
        super.onLoad(data)
        
        this.count = data.count
        this.buildCount = data.buildCount
        
        this.storages.forEach(storage => {
            if (data.storages[storage.id]) {
                storage.count = data.storages[storage.id]
            }
        })
    }
    
    onSave(data) {
        super.onSave(data)
        
        data.count = this.count
        data.buildCount = this.buildCount
        
        data.storages = {}
        this.storages.forEach(storage => {
            data.storages[storage.id] = storage.count
        })
    }
    
    //---
    
    getMax() {
    
        let ret = this.max
        this.storages.forEach(storage => {
            
            let data = this.game.bases[storage.id]
            ret += this.max * storage.count * data.value
        })
        
        return ret
    }
    
    getUsedCount() { return 0 }
    
    getAvailableCount() { return this.count - this.getUsedCount() }
    
    getProd() {
    
        let ret = 0
        
        for (let id in this.game.bases) {
            let base = this.game.bases[id]
            if (base.type == 'production' && base.state == 'running') {
                                
                let time = base.getTime()
                
                let energy = base.getEnergy()
                if (energy && energy.id == this.id) {
                    ret -= energy.count / time
                }
                
                let inputs = base.getInputs()
                if (inputs) {
                    for (let inputId in inputs) {
                        let inputCount = inputs[inputId]
                        if (inputId == this.id) {
                            ret -= inputCount / time
                        }
                    }
                }
                
                let outputs = base.getOutputs()
                for (let outputId in outputs) {
                    let outputCount = outputs[outputId]
                    if (outputId == this.id) {
                        ret += outputCount / time
                    }
                }
            }            
        }
        
        return ret
    }    
}

//------------------------------------------------------------------------------

class Storage extends Item {

    constructor(game, data) {
        super(game, data)
        
        this.value = data.value
    }
    
    //---
    
    getUsedCount() {
    
        let ret = 0
        for (let id in this.game.bases) {
            let base = this.game.bases[id]
            if (base.type == 'item') {
                base.storages.forEach(storage => {
                    if (storage.id == this.id) {
                        ret += storage.count
                    }
                })
            }            
        }
        
        return ret
    }
}

//------------------------------------------------------------------------------

class Module extends Item {

    constructor(game, data) {
        super(game, data)
        
        this.coeffTime = data.coeffTime
        this.coeffEnergy = data.coeffEnergy
        this.coeffOutputs = data.coeffOutputs
    }
    
    //---
    
    getUsedCount() {
    
        let ret = 0
        for (let id in this.game.bases) {
            let base = this.game.bases[id]
            if (base.type == 'production') {
                base.modules.forEach(module => {
                    if (module.id == this.id) {
                        ret += module.count
                    }
                })
            }            
        }
        
        return ret
    }
}

//------------------------------------------------------------------------------

class Machine extends Item {

    constructor(game, data) {
        super(game, data)
        
        this.auto = data.auto
        this.speed = data.speed
        this.energy = data.energy
        this.moduleSlots = data.moduleSlots
    }
    
    //---
    
    getUsedCount() {
    
        let ret = 0
        for (let id in this.game.bases) {
            let base = this.game.bases[id]
            if (base.type == 'production' && base.machineId == this.id) {
                ret += base.count
            }
        }
        
        return ret
    }
}

//------------------------------------------------------------------------------

class Lab extends Item {

    constructor(game, data) {
        super(game, data)
        
        this.energy = data.energy
        this.moduleSlots = data.moduleSlots
        
        this.modules = []
        for (let i = 0; i < this.moduleSlots; i++) {
        
            let module = { id:null, count: 0 }
            this.modules.push(module)
        }
    }
    
    //---
    
    getModuleCount() {
    
        let ret = 0
        this.modules.forEach(module => {
            ret += module.count
        })
        
        return ret
    }
    
    getModuleMax() {
    
        let ret = 0
        ret = this.count * this.moduleSlots
        
        return ret
    }
    
    getCoeffTime() {
    
        let ret = 1.0
        this.modules.forEach(module => {
            if (module.id && module.count) {
            
                let data = moduleData[module.id]
                ret *= data.coeffTime * module.count
            }
        })
        
        return ret
    }
    
    getCoeffEnergy() {
    
        let ret = 1.0
        this.modules.forEach(module => {
            if (module.id && module.count) {
            
                let data = moduleData[module.id]
                ret *= data.coeffEnergy * module.count
            }
        })
        
        return ret
    }
}

//------------------------------------------------------------------------------

class Production extends Base {

    constructor(item, machine, data) {
        super(item.game, data)
        
        item.productions.push(this)
        
        this.reqs = machine.reqs
        this.auto = machine.auto
        this.machineId = machine.id        
        this.moduleSlots = machine.moduleSlots
        
        this.time = item.time / machine.speed
        this.inputs = item.inputs
        this.outputs = item.outputs
        
        if (item.reqs) {

            if (this.reqs == null) {
                this.reqs = []
            }
            
            item.reqs.forEach(techId => { this.reqs.push(techId) })
        }
        
        this.modules = []
        if (this.moduleSlots > 0) {
            for (let i = 0; i < this.moduleSlots; i++) {
            
                let module = { id:null, count: 0 }
                this.modules.push(module)
            }
        }
        
        this.count = 0
        this.state = 'paused'
        this.energy = null
        this.remainingTime = this.time
        
        if (machine.energy) {
            this.energy = { id:machine.energy.id, count:machine.energy.count * this.time }
        }
    }
    
    //---
    
    onLoad(data) {
        super.onLoad(data)
        
        this.count = data.count
        this.state = data.state
                
        let index = 0
        if (data.modules) {
            data.modules.forEach(module => {

                this.modules[index].id = module.id
                this.modules[index].count = module.count

                index++
            })
        }
        
        if (this.state == 'running') {
            this.remainingTime = data.remainingTime
        }
    }
    
    onSave(data) {
        super.onSave(data)
        
        data.count = this.count
        data.state = this.state
        data.remainingTime = this.remainingTime
        
        data.modules = []
        this.modules.forEach(module => {
            data.modules.push(module)
        })
    }
    
    //---
    
    getModuleCount() {
    
        let ret = 0
        this.modules.forEach(module => {
            ret += module.count
        })
        
        return ret
    }
    
    getModuleMax() {
    
        let ret = 0
        ret = this.count * this.moduleSlots
        
        return ret
    }
    
    getCoeffTime() {
    
        let ret = 1.0
        this.modules.forEach(module => {
            if (module.id && module.count) {
            
                let data = moduleData[module.id]
                ret *= data.coeffTime * module.count
            }
        })
        
        return ret
    }
    
    getCoeffEnergy() {
    
        let ret = 1.0
        this.modules.forEach(module => {
            if (module.id && module.count) {
            
                let data = moduleData[module.id]
                ret *= data.coeffEnergy * module.count
            }
        })
        
        return ret
    }
    
    getCoeffOutputs() {
    
        let ret = 1.0
        this.modules.forEach(module => {
            if (module.id && module.count) {
            
                let data = moduleData[module.id]
                ret *= data.coeffOutputs * module.count
            }
        })
        
        return ret
    }
    
    getEnergy() {
        
        if (this.energy == null) return null
        
        let count = this.count > 0 ? this.count : 1
        
        let ret = 0
        ret = this.energy.count * count * this.getCoeffEnergy()
        
        return { id:this.energy.id, count:ret }
    }
    
    getTime() {
        
        let ret = this.time
        ret *= this.getCoeffTime()
        
        return ret
    }
    
    getInputs() {
    
        if (this.inputs == null) return null
        
        let count = this.count > 0 ? this.count : 1
        
        let ret = {}        
        for (let id in this.inputs) {
            let input = this.inputs[id]            
            ret[id] = input * count
        }
        
        return ret
    }
    
    getOutputs() {
        
        let count = this.count > 0 ? this.count : 1
        
        let ret = {}
        for (let id in this.outputs) {
            let output = this.outputs[id]
            ret[id] = output * count * this.getCoeffOutputs()
        }
        
        return ret
    }
    
    canProduce() {
    
        if (this.machineId != 'manual' && this.count <= 0) return false
        
        let energy = this.getEnergy()
        if (energy && this.game.bases[energy.id].count < energy.count) return false
        
        let outputs = this.getOutputs()
        for (let id in outputs) {
            
            let base = this.game.bases[id]
            if (base.type == 'item') {
                let max = base.getMax()
                let count = base.count
                
                if (max && count >= max) {
                    return false
                }
            }
            else {
            
                let availableCount = base.getAvailableCount()
                if (availableCount >= 50) {
                    return false
                }
            }
        }
        
        let inputs = this.getInputs()
        if (inputs == null) return true
        
        for (let id in inputs) {
            let input = inputs[id]            
            if (input > this.game.bases[id].getAvailableCount()) {
                return false
            }
        }
        
        return true
    }
    
    //---
        
    startProducing() {
    
        if (this.canProduce() == true) {
                    
            this.state = 'running'
            if (this.remainingTime == this.getTime()) {
            
                let energy = this.getEnergy()
                if (energy != null) {
                    this.game.bases[energy.id].count -= energy.count
                }
                
                let inputs = this.getInputs()
                if (inputs != null) {
                    for (let id in inputs) {
                        let input = inputs[id]
                        
                        this.game.bases[id].count -= input
                    }
                }
            }
        }
        else {
        
            this.state = 'waiting'
            this.remainingTime = this.getTime()
        }
    }
    
    pauseProducing() {
        
        if (this.state == 'running') {
            
            let energy = this.getEnergy()
            if (energy != null) {
                this.game.bases[energy.id].count += energy.count
            }
                
            let inputs = this.getInputs()
            if (inputs != null) {
                for (let id in inputs) {
                    let input = inputs[id]
                    
                    this.game.bases[id].count += input
                }
            }
        }
        
        this.state = 'paused'
        this.remainingTime = this.getTime()
    }

    onMainLoop(delta) {
        
        if (this.state == 'waiting') {                    
            this.startProducing()
        }
        
        if (this.state == 'running') {
            
            this.remainingTime -= delta            
            if (this.remainingTime <= 0) {
                                
                let outputs = this.getOutputs()
                for (let id in outputs) {
                    let output = outputs[id]
                    
                    let base = this.game.bases[id]                    
                    base.count += output
                    
                    let max = base.getMax()
                    if (max && base.count > max) base.count = max
                }
                
                if (this.auto == true) {                
                
                    this.remainingTime = this.getTime()
                    this.startProducing()
                }
                else {
                
                    this.state = 'paused'
                    this.remainingTime = this.getTime()
                }
            }
        }
    }
}

//------------------------------------------------------------------------------

class Research extends Base {

    constructor(game, data) {
        super(game, data)
        
        this.time = data.time
        this.costs = data.costs
        this.cycleCount = data.cycleCount
        this.remainingTime = data.time
        
        this.energy = { id:game.bases['lab'].energy.id, count:game.bases['lab'].energy.count }
        
        this.done = false
        this.count = 0
        this.state = 'paused'
    }

    //---
    
    onLoad(data) {
        super.onLoad(data)
        
        this.done = data.done
        this.count = data.count
        this.state = data.state
        this.cycleCount = data.cycleCount
        this.remainingTime = data.remainingTime        
    }
    
    onSave(data) {
        super.onSave(data)
        
        data.done = this.done
        data.count = this.count
        data.state = this.state
        data.cycleCount = this.cycleCount
        data.remainingTime = this.remainingTime
    }
    
    //---
    
    isDone() { return this.done }
    
    getEnergy() {
        
        let count = this.count > 0 ? this.count : 1
        
        let ret = 0
        ret = this.energy.count * count * this.game.bases['lab'].getCoeffEnergy()
        
        return { id:this.energy.id, count:ret }
    }
    
    getTime() {
        
        let ret = this.time
        ret *= this.game.bases['lab'].getCoeffTime()
        
        return ret
    }
    
    getCosts() {
    
        let count = this.count > 0 ? this.count : 1
        
        let ret = {}        
        for (let id in this.costs) {
            let cost = this.costs[id]            
            ret[id] = cost * count
        }
        
        return ret
    }
    
    canResearch() {
    
        if (this.done == true) return false
        if (this.count <= 0) return false
        
        let energy = this.getEnergy()
        if (this.game.bases[energy.id].count < energy.count) return false
        
        let inputs = this.getCosts()
        for (let id in costs) {
            let cost = costs[id]            
            if (cost > this.game.bases[id].getAvailableCount()) {
                return false
            }
        }
        
        return true
    }
    
    //---
    
    startResearching() {
    
        if (this.canResearch() == true) {
                    
            this.state = 'running'
            if (this.remainingTime == this.getTime()) {
            
                let energy = this.getEnergy()
                this.game.bases[energy.id].count -= energy.count
                
                let costs = this.getCosts()
                for (let id in costs) {
                    let cost = costs[id]
                    
                    this.game.bases[id].count -= cost
                }
            }
        }
        else {
        
            this.state = 'waiting'
            this.remainingTime = this.getTime()
        }
    }
    
    pauseResearching() {
        
        if (this.state == 'running') {
            
            let energy = this.getEnergy()
            this.game.bases[energy.id].count += energy.count
                
            let costs = this.getCosts()
            for (let id in costs) {
                let cost = costs[id]
                
                this.game.bases[id].count += cost
            }
        }
        
        this.state = 'paused'
        this.remainingTime = this.getTime()
    }

    onMainLoop(delta) {
        
        if (this.state == 'waiting') {
            this.startResearching()
        }
        
        if (this.state == 'running') {
        
            this.remainingTime -= delta
            if (this.remainingTime <= 0) {
            
                this.cycleCount -= this.count
                
                if (this.cycleCount > 0) {                
                
                    this.remainingTime = this.getTime()
                    this.startResearching()
                }
                else {
                    
                    this.cycleCount = 0
                    
                    this.state = 'paused'
                    this.remainingTime = this.getTime()
                }
            }
        }
    }
}

//------------------------------------------------------------------------------

class Game {

    constructor() {
        
        this.paused = false
        this.timePlayed = 0
        
        this.bases = {}
        baseData.forEach(data => {
            
            let base = null
            if (data.type == 'item') {
            
                base = new Item(this, data)
            }
            else if (data.type == 'storage') {
            
                base = new Storage(this, data)
            }
            else if (data.type == 'module') {
            
                base = new Module(this, data)
            }
            else if (data.type == 'machine') {
            
                base = new Machine(this, data)
            }
            else if (data.type == 'lab') {
            
                base = new Lab(this, data)
            }
            else if (data.type == 'production') {
                
                let item = this.bases[data.itemId]
                let machine = this.bases[data.machineId]
                base = new Production(item, machine, data)
            }
            else if (data.type == 'research') {
            
                base = new Research(this, data)
            }
            else base = new Base(this, data)
            
            this.bases[data.id] = base
        })
    }
        
    //---
    
    load(data) {
        
        if (data.paused != null) this.paused = data.paused
        if (data.timePlayed != null) this.timePlayed = data.timePlayed
        
        if (data.bases) {
            data.bases.forEach(data => {
            
                let base = this.bases[data.id]
                if (base) base.onLoad(data)
            })
        }
    }
    
    save() {
    
        let ret = {
            
            paused: this.paused,
            timePlayed: this.timePlayed,
            
            bases: [],
        }
        
        for (let baseId in this.bases) {
            let base = this.bases[baseId]
            
            let data = {}
            base.onSave(data)
            ret.bases.push(data)
        }
        
        return ret
    }
    
    mainLoop(deltaTimeMs) {
        
        if (this.paused == false) {
        
            let delta = deltaTimeMs / 1000
            
            let cycleCount = 1
            let cycleDelta = 1
            
            if (delta > cycleDelta) cycleCount = Math.ceil(delta / cycleDelta)
            else cycleDelta = delta
            
            for (let i = 0; i < cycleCount; i++) {    
                
                this.timePlayed += cycleDelta
                
                for (let baseId in this.bases) {
                    let base = this.bases[baseId]
                    
                    base.onMainLoop(cycleDelta)
                }
            }
        }
    }    
}

//------------------------------------------------------------------------------

import LZString from 'lz-string'

export default {
    
    data() {
        return {
            
            fps: 60,
            error: null,
            locale: 'en',
            started: false,
            isMobile: false,
            rafHandle: null,
            autoSaveDelay: 30000,
            resetInProgress: false,
            lastFrameTimeMs: new Date().getTime(),
            localStorageName: 'fgfactory2',
            importExportData: null,
            minLoadingTimerMS: 1000,
            rewardDelay: 0,
            
            //---

            toastText: null,
            toastType: 'info',
            toastTimeout: null,
            
            //---
            
            popupWipe: null,
            popupSupport: null,
            popupTutorial: null,
            
            //---
            
            tutorialEnabled: true,
            
            //---
            
            currentTabId: 'production',
            
            currentProductionSelection: 'stone',
            currentResearchSelection: 'automation1',
            
            catMachinesStart: true,
            catRawStart: true,
            catFabricatedStart: true,
            catItemsStart: true,
            catStoragesStart: true,
            catScienceStart: true,
            catModulesStart: true,
            catWeaponsStart: true,
            
            catTechsStart: true,
            
            catMachinesOpen: true,
            catRawOpen: true,
            catFabricatedOpen: true,
            catItemsOpen: true,
            catStoragesOpen: true,
            catScienceOpen: true,
            catModulesOpen: true,
            catWeaponsOpen: true,
            
            catTechsOpen: true,
            
            //---
            
            game: new Game(),
            
            //---
            
            tutorials: {
            
                tut0: { id:'tut0', done:false, check: function(app) { return false }, action: function(app) {  }, },
            },
        }
    },
    
    computed: {
        
        exportGameData() {
        
            let text = localStorage.getItem(this.localStorageName)
            return text
        },
    },
    
    methods: {
        
        //---
        
        setCurrentTabId(tabId) { this.currentTabId = tabId },
        
        setCurrentProductionSelection(id) { this.currentProductionSelection = id },
        setCurrentResearchSelection(id) { this.currentResearchSelection = id },
        
        //---
        
        enableTutorial() {
        
            this.tutorialEnabled = true
            this.showPopupTutorial()
        },
        
        disableTutorial() {
        
            this.tutorialEnabled = false
        },
        
        processTutorial() {
        
            for (var tutId in this.tutorials) {
                if (this.tutorials[tutId].done == false) {
                    break
                }
            }
            
            let tut = this.tutorials[tutId]
            if (tut && tut.check(this) == true) {
                
                tut.done = true
                
                tut.action(this)                
                this.showPopupTutorial()
            }
        },
        
        //---
        
        showSupportPopup() { this.popupSupport = true },
        
        showWipeDataPopup() { this.popupWipe = true },
        
        showPopupTutorial() {
        
            for (var tutId in this.tutorials) {
                if (this.tutorials[tutId].done == false) {
                    break
                }
            }
            
            let tut = this.tutorials[tutId]
            if (tut) {
            
                tut.action(this)
                this.popupTutorial = tut
            }
        },
        
        //---
        
        showToast(text, type) {
        
            if (this.toastTimeout) {
                clearTimeout(this.toastTimeout)
            }
            
            this.toastText = text
            this.toastType = type
            
            const self = this
            this.toastTimeout = setTimeout(function() { self.toastText = null }, 3e3)
        },
        
        //---
        
        manualSave() {
        
            this.save()
            this.showToast("Game saved in local storage!", "info")
        },
       
        pauseGame() {
        
            this.game.paused = true
            this.showToast("Game paused!", "info")
        },
        
        resumeGame() {
        
            this.game.paused = false
            this.showToast("Game resumed!", "info")
        },
        
        //---

        start() {
            
            try {
            
                this.load()                
                this.update()
                
                this.catMachinesStart = this.catMachinesOpen
                this.catRawStart = this.catRawOpen
                this.catFabricatedStart = this.catFabricatedOpen
                this.catItemsStart = this.catItemsOpen
                this.catStoragesStart = this.catStoragesOpen
                this.catScienceStart = this.catScienceOpen
                this.catModulesStart = this.catModulesOpen
                this.catWeaponsStart = this.catWeaponsOpen
                
                this.catTechsStart = this.catTechsOpen
                
                window.onbeforeunload = () => {
                
                    if (this.resetInProgress == false) {
                        this.save()
                    }
                }
                
                this.rafHandle = requestAnimationFrame(this.update)
                this.saveInterval = setInterval(() => { this.save() }, this.autoSaveDelay)
                
                if (this.tutorialEnabled == true) {
                    this.showPopupTutorial()
                }

                this.started = true
            }
            catch (error) {
                
                this.error = error                
                console.error(error)
            }
        },
        
        update() {
            
            this.rafHandle = requestAnimationFrame(this.update)
            
            let currentTimeMs = new Date().getTime()
            
            let deltaTimeMs = currentTimeMs - this.lastFrameTimeMs
            if (deltaTimeMs >= 1000 / this.fps) {            
                this.lastFrameTimeMs = currentTimeMs
                
                this.game.mainLoop(deltaTimeMs)
                
                if (this.tutorialEnabled == true) {
                    this.processTutorial()
                }
            }
        },
        
        load() {
            
            let loadedData = localStorage.getItem(this.localStorageName)
            if (loadedData && loadedData !== null && loadedData.length % 4 == 0) {
            
                let text = LZString.decompressFromBase64(loadedData)
                if (!text) {
                
                    console.warn('Load failed')
                    return false
                }
                
                loadedData = JSON.parse(text)
                
                this.game.load(loadedData)
                
                if (loadedData.lastFrameTimeMs != null) this.lastFrameTimeMs = loadedData.lastFrameTimeMs
                if (loadedData.tutorialEnabled != null) this.tutorialEnabled = loadedData.tutorialEnabled
                
                if (loadedData.currentTabId != null) this.currentTabId = loadedData.currentTabId
                
                if (loadedData.currentProductionSelection != null) this.currentProductionSelection = loadedData.currentProductionSelection
                if (loadedData.currentResearchSelection != null) this.currentResearchSelection = loadedData.currentResearchSelection
            
                if (loadedData.catMachinesOpen != null) this.catMachinesOpen = loadedData.catMachinesOpen
                if (loadedData.catRawOpen != null) this.catRawOpen = loadedData.catRawOpen
                if (loadedData.catFabricatedOpen != null) this.catFabricatedOpen = loadedData.catFabricatedOpen
                if (loadedData.catItemsOpen != null) this.catItemsOpen = loadedData.catItemsOpen
                if (loadedData.catStoragesOpen != null) this.catStoragesOpen = loadedData.catStoragesOpen
                if (loadedData.catScienceOpen != null) this.catScienceOpen = loadedData.catScienceOpen
                if (loadedData.catModulesOpen != null) this.catModulesOpen = loadedData.catModulesOpen
                if (loadedData.catWeaponsOpen != null) this.catWeaponsOpen = loadedData.catWeaponsOpen
                
                if (loadedData.catTechsOpen != null) this.catTechsOpen = loadedData.catTechsOpen
                
                if (loadedData.tutorials) {
                    for (var id in loadedData.tutorials) {
                        let dataTut = loadedData.tutorials[id]
                        
                        let tut = this.tutorials[id]
                        if (tut) {
                            tut.done = dataTut.done
                        }
                    }
                }
            }
        },

        save() {
            
            let savedData = this.game.save()
            
            savedData.lastFrameTimeMs = this.lastFrameTimeMs
            savedData.tutorialEnabled = this.tutorialEnabled
            
            savedData.currentTabId = this.currentTabId

            savedData.currentProductionSelection = this.currentProductionSelection
            savedData.currentResearchSelection = this.currentResearchSelection

            savedData.catMachinesOpen = this.catMachinesOpen
            savedData.catRawOpen = this.catRawOpen
            savedData.catFabricatedOpen = this.catFabricatedOpen
            savedData.catItemsOpen = this.catItemsOpen
            savedData.catStoragesOpen = this.catStoragesOpen
            savedData.catScienceOpen = this.catScienceOpen
            savedData.catModulesOpen = this.catModulesOpen
            savedData.catWeaponsOpen = this.catWeaponsOpen
            
            savedData.catTechsOpen = this.catTechsOpen
            
            savedData.tutorials = {}
            for (var id in this.tutorials) {
                savedData.tutorials[id] = { done: this.tutorials[id].done }
            }
                      
            let text = JSON.stringify(savedData)
            let compressed = LZString.compressToBase64(text)
            localStorage.setItem(this.localStorageName, compressed)
        },

        importGameData() {

            if (!this.importExportData || !this.importExportData.trim()) return this.showToast("No data to import!", "error")
            if (this.importExportData.length % 4 !== 0) return this.showToast("Data corrupted!", "error")
            
            this.resetInProgress = true
            
            localStorage.setItem(this.localStorageName, this.importExportData)
            window.location.reload()
        },

        resetGameData() {
            
            this.resetInProgress = true
            
            localStorage.removeItem(this.localStorageName)
            window.location.reload()
        },
    },

    created() {

        let txt = navigator.userAgent || navigator.vendor || window.opera
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(txt)) {
            this.isMobile = true
        }
        
        if (this.isMobile == false) {
            setTimeout(() => { this.start() }, this.minLoadingTimerMS)
        }
    },

    beforeDestroy() {
        
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout)
        }
        
        clearInterval(this.saveInterval)
        cancelAnimationFrame(this.rafHandle)
    },
}
</script>
