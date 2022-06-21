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
                                <div class="col-12">
                                    <div class="card card-body py-1 px-3">
                                        <div class="row gx-4 align-items-center">
                                            <div class="col">
                                                <div class="row gx-2 align-items-center">
                                                    <div class="col-auto">
                                                        <img :src="require(`~/assets/items/electricity.png`)" width="24px" height="24px" :title="$t('name_electricity')" :alt="$t('name_electricity')" />
                                                    </div>
                                                    <div class="col-auto">
                                                        <span class="text-muted">{{ $t('name_electricity') }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="subtitle">Production</div>
                                                <span><FormatNumber :value="elecProd" /><small class="opacity-75"><span v-if="elecProd == 0">&nbsp;</span>W</small></span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="subtitle">Consumption</div>
                                                <span><FormatNumber :value="elecConsum" /><small class="opacity-75"><span v-if="elecConsum == 0">&nbsp;</span>W</small></span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="subtitle">Efficiency</div>
                                                <span :class="{ 'text-danger':prodEfficiency < 100, 'text-success':prodEfficiency >= 100 }"><FormatNumber :value="prodEfficiency" /> <small class="opacity-75">%</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    <ItemButton id="constructionRobot" :game="game" />
                                    <ItemButton id="centrifuge" :game="game" />
                                    <ItemButton id="nuclearReactor" :game="game" />
                                    <ItemButton id="heatExchanger" :game="game" />
                                    <ItemButton id="rocketSilo" :game="game" />
                                </Category>
                                <Category id="generators" :show="catGeneratorsStart" @click="catGeneratorsOpen = !catGeneratorsOpen;">
                                    <ItemButton id="steamEngine" :game="game" />
                                    <ItemButton id="solarPanel" :game="game" />
                                    <ItemButton id="steamTurbine" :game="game" />
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
                                <Category v-if="game.bases['modules'].isDone()" id="modules" :show="catModulesStart" @click="catModulesOpen = !catModulesOpen;">
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

    { id:'manual',                  type:'machine',     auto:false, speed:.5, },
    
    { id:'furnace1',                type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  energy:{ id:'coal',            count:.04   }, speed:1,    time:.5, inputs:{ stone:5 }, outputs:{ furnace1:1 }, },
    { id:'furnace2',                type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  energy:{ id:'coal',            count:.04   }, speed:2,    time:3,  inputs:{ steelPlate:6, stoneBrick:10 }, outputs:{ furnace2:1 }, reqs:[ 'material1' ], },
    { id:'furnace3',                type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:180000,                            speed:2,    time:5,  inputs:{ advancedCircuit:3, steelPlate:10, stoneBrick:10 }, outputs:{ furnace3:1 }, moduleSlots:2, reqs:[ 'material2' ], },
    { id:'drill1',                  type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  energy:{ id:'coal',            count:.02   }, speed:.25,  time:2,  inputs:{ ironGearWheel:3, ironPlate:3, furnace1:1 }, outputs:{ drill1:1 }, },
    { id:'drill2',                  type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:90000,                             speed:.5,   time:2,  inputs:{ electronicCircuit:3, ironGearWheel:5, ironPlate:10 }, outputs:{ drill2:1 }, moduleSlots:3, },    
    { id:'assembler1',              type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:75000,                             speed:.5,   time:.5, inputs:{ electronicCircuit:3, ironGearWheel:5, ironPlate:9 }, outputs:{ assembler1:1 }, reqs:[ 'automation1' ], },
    { id:'assembler2',              type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:150000,                            speed:.75,  time:.5, inputs:{ assembler1:1, electronicCircuit:3, ironGearWheel:5, steelPlate:2 }, outputs:{ assembler2:1 }, moduleSlots:2, reqs:[ 'automation2' ], },
    { id:'assembler3',              type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:375000,                            speed:1.25, time:.5, inputs:{ assembler2:2, speedModule1:4 }, outputs:{ assembler3:1 }, moduleSlots:4, reqs:[ 'automation3' ], },
    { id:'offshorePump',            type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,                                                speed:1,    time:.5, inputs:{ electronicCircuit:2, ironGearWheel:1, pipe:1 }, outputs:{ offshorePump:1 }, },
    { id:'pumpjack',                type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:90000,                             speed:1,    time:5,  inputs:{ electronicCircuit:5, ironGearWheel:10, pipe:10, steelPlate:5 }, outputs:{ pumpjack:1 }, moduleSlots:2, reqs:[ 'oilProcessing1' ], },
    { id:'oilRefinery',             type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:420000,                            speed:1,    time:8,  inputs:{ electronicCircuit:10, ironGearWheel:10, pipe:10, steelPlate:15, stoneBrick:10 }, outputs:{ oilRefinery:1 }, moduleSlots:3, reqs:[ 'oilProcessing1' ], },
    { id:'chemicalPlant',           type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:210000,                            speed:1,    time:.5, inputs:{ electronicCircuit:5, ironGearWheel:5, pipe:5, steelPlate:5 }, outputs:{ chemicalPlant:1 }, reqs:[ 'oilProcessing1' ], },
    { id:'boiler',                  type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  energy:{ id:'coal',            count:2.22  }, speed:1,    time:.5, inputs:{ pipe:4, furnace1:1 }, outputs:{ boiler:1 }, },
    { id:'constructionRobot',       type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:5000,                              speed:1,    time:.5, inputs:{ electronicCircuit:2, flyingRobot:1 }, outputs:{ constructionRobot:1 }, reqs:[ 'constructionRobotics' ], },
    { id:'centrifuge',              type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:350000,                            speed:1,    time:4,  inputs:{ advancedCircuit:100, concrete:100, ironGearWheel:100, steelPlate:50 }, outputs:{ centrifuge:1 }, reqs:[ 'uraniumProcessing' ], },
    { id:'nuclearReactor',          type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  energy:{ id:'uraniumFuelCell', count:0.005 }, speed:1,    time:8,  inputs:{ advancedCircuit:500, concrete:500, copperPlate:500, steelPlate:500 }, outputs:{ nuclearReactor:1 }, reqs:[ 'nuclearPower' ], },
    { id:'heatExchanger',           type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  energy:{ id:'heat',            count:50    }, speed:2,    time:3,  inputs:{ copperPlate:100, pipe:10, steelPlate:10 }, outputs:{ heatExchanger:1 }, reqs:[ 'nuclearPower' ], },
    { id:'rocketSilo',              type:'machine',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], auto:true,  elecConsum:4000000,                           speed:1,    time:30, inputs:{ concrete:1000, electricEngineUnit:200, pipe:100, processingUnit:200, steelPlate:1000 }, outputs:{ rocketSilo:1 }, reqs:[ 'rocketSiloTech' ], },
    
    //---
    
    { id:'lab',                     type:'lab',         machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], elecConsum:60000, time:3, inputs:{ electronicCircuit:10, ironGearWheel:12, ironPlate:2 }, outputs:{ lab:1 }, moduleSlots:2, },
    
    //---
    
    { id:'steamEngine',             type:'generator',   elecProd:900000,  consum:{ id:'steam', count:30 },  machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], time:.5, inputs:{ ironGearWheel:8, ironPlate:10, pipe:5 }, outputs:{ steamEngine:1 }, },
    { id:'solarPanel',              type:'generator',   elecProd:42000,                                     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], time:10, inputs:{ stone:5 }, outputs:{ solarPanel:1 }, reqs:[ 'solarEnergy' ], },
    { id:'steamTurbine',            type:'generator',   elecProd:5820000, consum:{ id:'steam', count:60 },  machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], time:3,  inputs:{ copperPlate:50, ironGearWheel:50, pipe:20 }, outputs:{ steamTurbine:1 }, reqs:[ 'nuclearPower' ], },
    
    //---
    
    { id:'wood',                    type:'item',        machines:[ 'manual', 'constructionRobot' ],                      max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ wood:1 }, },
    { id:'coal',                    type:'item',        machines:[ 'manual', 'drill1', 'drill2' ],                       max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ coal:1 }, },
    { id:'stone',                   type:'item',        machines:[ 'manual', 'drill1', 'drill2' ],                       max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ stone:1 }, },
    { id:'iron',                    type:'item',        machines:[ 'manual', 'drill1', 'drill2' ],                       max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ iron:1 }, },
    { id:'copper',                  type:'item',        machines:[ 'manual', 'drill1', 'drill2' ],                       max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1, outputs:{ copper:1 }, },
    { id:'uranium',                 type:'item',        machines:[ 'drill2' ],                                           max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:2, outputs:{ uranium:1 }, },
    { id:'water',                   type:'item',        machines:[ 'offshorePump' ],                                     max:1200, storages:[ 'storageTank' ],                          time:1, outputs:{ water:1200 }, },
    { id:'oil',                     type:'item',        machines:[ 'pumpjack' ],                                         max:50,   storages:[ 'barrel' ],                               time:1, outputs:{ oil:2 }, reqs:[ 'oilProcessing1' ], },
    
    //---
    
    { id:'ironPlate',               type:'item',        machines:[ 'furnace1', 'furnace2', 'furnace3' ],                 max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3.2, inputs:{ iron:1 }, outputs:{ ironPlate:1 }, },
    { id:'steelPlate',              type:'item',        machines:[ 'furnace1', 'furnace2', 'furnace3' ],                 max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:16,  inputs:{ ironPlate:5 }, outputs:{ steelPlate:1 }, reqs:[ 'steelProcessing' ], },
    { id:'ironStick',               type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5,  inputs:{ ironPlate:1 }, outputs:{ ironStick:1 }, },
    { id:'ironGearWheel',           type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5,  inputs:{ ironPlate:2 }, outputs:{ ironGearWheel:1 }, },
    { id:'pipe',                    type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5,  inputs:{ ironPlate:1 }, outputs:{ pipe:1 }, },
    { id:'engineUnit',              type:'item',        machines:[ 'assembler1', 'assembler2', 'assembler3' ],           max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5,  inputs:{ ironGearWheel:1, pipe:2, steelPlate:1 }, outputs:{ engineUnit:1 }, reqs:[ 'engineTech' ], },
    { id:'copperPlate',             type:'item',        machines:[ 'furnace1', 'furnace2', 'furnace3' ],                 max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3.2, inputs:{ copper:1 }, outputs:{ copperPlate:1 },},
    { id:'copperCable',             type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5,  inputs:{ copperPlate:1 }, outputs:{ copperCable:2 },},
    { id:'stoneBrick',              type:'item',        machines:[ 'furnace1', 'furnace2', 'furnace3' ],                 max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3.2, inputs:{ stone:2 }, outputs:{ stoneBrick:1 }, },
    { id:'concrete',                type:'item',        machines:[ 'assembler2', 'assembler3' ],                         max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10,  inputs:{ iron:1, stoneBrick:5, water:100 }, outputs:{ concrete:10 }, reqs:[ 'concreteTech' ], },
    
    //---
    
    { id:'heat',                    type:'item',        machines:[ 'nuclearReactor' ],                                   max:1200, storages:[ 'storageTank' ],                          time:1,   outputs:{ heat:4 }, reqs:[ 'nuclearPower' ], },
    { id:'steam',                   type:'item',        machines:[ 'boiler', 'heatExchanger' ],                          max:1200, storages:[ 'storageTank' ],                          time:1,   inputs:{ water:60 }, outputs:{ steam:60 }, },
    { id:'heavyOil',                type:'item',        machines:[ 'oilRefinery' ],                                      max:50,   storages:[ 'barrel' ],                               time:5,   inputs:{ oil:100, water:50 }, outputs:{ heavyOil:25 }, reqs:[ 'oilProcessing1' ], },
    { id:'lightOil',                type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'barrel' ],                               time:2,   inputs:{ heavyOil:40, water:30 }, outputs:{ lightOil:30 }, reqs:[ 'oilProcessing1' ], },
    { id:'lubricant',               type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'barrel' ],                               time:1,   inputs:{ heavyOil:10 }, outputs:{ lubricant:10 }, reqs:[ 'lubricantTech' ], },
    { id:'petroleumGas',            type:'item',        machines:[ 'oilRefinery' ],                                      max:50,   storages:[ 'barrel' ],                               time:5,   inputs:{ oil:100 }, outputs:{ petroleumGas:45 }, reqs:[ 'oilProcessing1' ], },
    { id:'sulfur',                  type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1,   inputs:{ petroleumGas:30, water:30 }, outputs:{ sulfur:2 }, reqs:[ 'sulfurProcessing' ], },
    { id:'sulfuricAcid',            type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'barrel' ],                               time:1,   inputs:{ ironPlate:1, sulfur:5, water:100 }, outputs:{ sulfuricAcid:50 }, reqs:[ 'sulfurProcessing' ], },
    { id:'solidFuel',               type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:2,   inputs:{ petroleumGas:20 }, outputs:{ solidFuel:1 }, reqs:[ 'oilProcessing1', 'oilProcessing2' ], },
    { id:'plasticBar',              type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1,   inputs:{ coal:1, petroleumGas:20 }, outputs:{ plasticBar:2 }, reqs:[ 'plastics' ], },
    { id:'battery',                 type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:4,   inputs:{ copperPlare:1, ironPlate:1, sulfuricAcid:20 }, outputs:{ battery:1 }, reqs:[ 'batteryTech' ], },
    { id:'explosives',              type:'item',        machines:[ 'chemicalPlant' ],                                    max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:4,   inputs:{ coal:1, sulfur:1, water:10 }, outputs:{ explosives:2 }, reqs:[ 'explosivesTech' ], },
    { id:'uranium235',              type:'item',        machines:[ 'centrifuge' ],                                       max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:12,  inputs:{ uranium:10 }, outputs:{ uranium235:0.007 }, reqs:[ 'uraniumProcessing', 'kovarex' ], },
    { id:'uranium238',              type:'item',        machines:[ 'centrifuge' ],                                       max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:12,  inputs:{ uranium:10 }, outputs:{ uranium239:0.993 }, reqs:[ 'uraniumProcessing', 'kovarex' ], },
    { id:'uraniumFuelCell',         type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1,   inputs:{ ironPlate:10, uranium235:1, uranium238:19 }, outputs:{ uraniumFuelCell:10 }, reqs:[ 'uraniumProcessing' ], },
    { id:'nuclearFuel',             type:'item',        machines:[ 'centrifuge' ],                                       max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:90,  inputs:{ rocketFuel:1, uranium235:1 }, outputs:{ nuclearFuel:1 }, reqs:[ 'kovarex' ], },
    { id:'electronicCircuit',       type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5,  inputs:{ copperCable:3, ironPlate:1 }, outputs:{ electronicCircuit:1 }, },
    { id:'advancedCircuit',         type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:6,   inputs:{ copperCable:4, electronicCircuit:2, plasticBar:2 }, outputs:{ advancedCircuit:1 }, reqs:[ 'electronics1' ], },
    { id:'processingUnit',          type:'item',        machines:[ 'assembler2', 'assembler3' ],                         max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10,  inputs:{ advancedCircuit:2, electronicCircuit:20, sulfuricAcid:5 }, outputs:{ processingUnit:1 }, reqs:[ 'electronics2' ], },
    { id:'electricEngineUnit',      type:'item',        machines:[ 'assembler2', 'assembler3' ],                         max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1,   inputs:{ electronicCircuit:2, engine:1, lubricant:15 }, outputs:{ electricEngineUnit:1 }, reqs:[ 'electricEngineTech' ], },
    { id:'flyingRobot',             type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:20,  inputs:{ battery:2, electricEngineUnit:1, electronicCircuit:3, steelPlate:1 }, outputs:{ flyingRobot:1 },reqs:[ 'robotics' ], },
    { id:'radar',                   type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:.5,  inputs:{ electronicCircuit:5, ironGearWheel:5, ironPlate:10 }, outputs:{ radar:1 }, },
    { id:'rocketControlUnit',       type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:10,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:30,  inputs:{ processingUnit:1,speedModule1:1 }, outputs:{ rocketControlUnit:1 }, reqs:[ 'rocketControlUnitTech' ], },
    { id:'lowDensityStructure',     type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:10,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:20,  inputs:{ copperPlate:20, plasticBar:5, steelPlate:2 }, outputs:{ lowDensityStructure:1 }, reqs:[ 'lowDensityStructureTech' ], },
    { id:'rocketFuel',              type:'item',        machines:[ 'assembler2', 'assembler3' ],                         max:10,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:30,  inputs:{ lightOil:10, solidFuel:10 }, outputs:{ rocketFuel:1 }, reqs:[ 'rocketFuelTech' ], },
    { id:'rocketPart',              type:'item',        machines:[ 'rocketSilo' ],                                       max:5,    storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3,   inputs:{ lowDensityStructure:10, rocketControlUnit:10, rocketFuel:10 }, outputs:{ rocketPart:1 }, reqs:[ 'rocketSiloTech' ], },
    { id:'portableFusionReactor',   type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:20,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10,  inputs:{ lowDensityStructure:50, processingUnit:200 }, outputs:{ portableFusionReactor:1 }, reqs:[ 'portableFusionReactorTech' ], },
    { id:'satellite',               type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:1,    storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:5,   inputs:{ accumulator:100, lowDensityStructure:100, processingUnit:100, radar:5, rocketFuel:50, solarPanel:100 }, outputs:{ satellite:1 }, reqs:[ 'spaceScience' ], },
    
    //---
    
    { id:'woodChest',               type:'storage',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], value:16,    time:.5, inputs:{ wood:2 }, outputs:{ woodChest:1 }, },
    { id:'steelChest',              type:'storage',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], value:48,    time:.5, inputs:{ steelPlate:8 }, outputs:{ steelChest:1 }, reqs:[ 'steelProcessing' ], },
    { id:'ironChest',               type:'storage',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], value:32,    time:.5, inputs:{ ironPlate:8 }, outputs:{ ironChest:1 }, },
    { id:'storageTank',             type:'storage',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], value:25000, time:3,  inputs:{ ironPlate:20, steelPlate:5 }, outputs:{ storageTank:1 }, reqs:[ 'fluidHandling' ], },
    { id:'barrel',                  type:'storage',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], value:50,    time:1,  inputs:{ steelPlate:1 }, outputs:{ barrel:1 }, reqs:[ 'fluidHandling' ], },
    { id:'accumulator',             type:'storage',     machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], value:300,   time:10, inputs:{ battery:5, ironPlate:2 }, outputs:{ accumulator:1 }, reqs:[ 'accumulatorTech' ], },
    
    //---
    
    { id:'redPack',                 type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:5,  inputs:{ copperPlate:1, ironGearWheel:1 }, outputs:{ redPack:1 }, },
    { id:'greenPack',               type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:6,  inputs:{ electronicCircuit:1, ironGearWheel:2, ironPlate:2 }, outputs:{ greenPack:1 }, reqs:[ 'greenScience' ], },    
    { id:'grayPack',                type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10, inputs:{ piercingMagazine:1, coal:10, ironPlate:5, stoneBrick:5 }, outputs:{ grayPack:2 }, reqs:[ 'grayScience' ], },    
    { id:'bluePack',                type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:24, inputs:{ sulfur:1, advancedCircuit:3, engineUnit:2 }, outputs:{ bluePack:2 }, reqs:[ 'blueScience' ], },    
    { id:'purplePack',              type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:21, inputs:{ rail:30, furnace3:1, productivityModule1:1 }, outputs:{ purplePack:3 }, reqs:[ 'purpleScience' ], },    
    { id:'yellowPack',              type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:21, inputs:{ processingUnit:2, flyingRobot:1, lowDensityStructure:3 }, outputs:{ yellowPack:3 }, reqs:[ 'yellowScience' ], },
    
    //---
    
    { id:'efficiencyModule1',       type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffEnergy:.7, time:15,  inputs:{ advancedCircuit:5, electronicCircuit:5 }, outputs:{ efficiencyModule1:1 }, reqs:[ 'efficiency1' ], },
    { id:'efficiencyModule2',       type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffEnergy:.6, time:30,  inputs:{ advancedCircuit:5, efficiencyModule1:4, processingUnit:5 }, outputs:{ efficiencyModule2:1 }, reqs:[ 'efficiency2' ], },
    { id:'efficiencyModule3',       type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffEnergy:.5, time:60,  inputs:{ advancedCircuit:5, efficiencyModule2:5, processingUnit:5 }, outputs:{ efficiencyModule3:1 }, reqs:[ 'efficiency3' ], },

    { id:'productivityModule1',     type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffTime:1.05, coeffEnergy:1.4, coeffOutputs:1.04, time:15,  inputs:{ advancedCircuit:5, electronicCircuit:5 }, outputs:{ productivityModule1:1 }, reqs:[ 'productivity1' ], },
    { id:'productivityModule2',     type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffTime:1.10, coeffEnergy:1.6, coeffOutputs:1.06, time:30,  inputs:{ advancedCircuit:5, productivityModule1:4, processingUnit:5 }, outputs:{ productivityModule2:1 }, reqs:[ 'productivity2' ], },
    { id:'productivityModule3',     type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffTime:1.15, coeffEnergy:1.8, coeffOutputs:1.10, time:60,  inputs:{ advancedCircuit:5, productivityModule2:5, processingUnit:5 }, outputs:{ productivityModule3:1 }, reqs:[ 'productivity3' ], },
    
    { id:'speedModule1',            type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffTime:.8, coeffEnergy:1.5, time:15,  inputs:{ advancedCircuit:5, electronicCircuit:5 }, outputs:{ speedModule1:1 }, reqs:[ 'speed1' ], },
    { id:'speedModule2',            type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffTime:.7, coeffEnergy:1.6, time:30,  inputs:{ advancedCircuit:5, speedModule1:4, processingUnit:5 }, outputs:{ speedModule2:1 }, reqs:[ 'speed2' ], },
    { id:'speedModule3',            type:'module',      machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], coeffTime:.5, coeffEnergy:1.7, time:60,  inputs:{ advancedCircuit:5, speedModule2:5, processingUnit:5 }, outputs:{ speedModule3:1 }, reqs:[ 'speed3' ], },
    
    //---
    
    { id:'pistol',                  type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:5,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:5,  inputs:{ copperPlate:5, ironPlate:5 }, outputs:{ pistol:1 }, },
    { id:'submachineGun',           type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:5,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10, inputs:{ copperPlate:10, ironGearWheel:10, ironPlate:10 }, outputs:{ submachineGun:1 }, reqs:[ 'military1' ], },
    { id:'shotgun',                 type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:5,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10, inputs:{ copperPlate:10, ironGearWheel:5, ironPlate:15, wood:5 }, outputs:{ shotgun:1 }, reqs:[ 'military1' ], },
    { id:'combatShotgun',           type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:5,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10, inputs:{ copperPlate:10, ironGearWheel:5, steelPlate:15, wood:10 }, outputs:{ combatShotgun:1 }, reqs:[ 'military3' ], },
    { id:'rocketLauncher',          type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:5,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10, inputs:{ electronicCircuit:5, ironGearWheel:5, ironPlate: 5 }, outputs:{ rocketLauncher:1 }, reqs:[ 'rocketry1' ], },
    { id:'gunTurret',               type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,    storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:8,  inputs:{ copperPlate:10, ironGearWheel:10, ironPlate:20 }, outputs:{ gunTurret:1 }, reqs:[ 'gunTurretTech' ], },
    { id:'laserTurret',             type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:50,    storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:20, inputs:{ battery:12, electronicCircuit:20, steelPlate:20 }, outputs:{ laserTurret:1 }, reqs:[ 'laserTurretTech' ], },
    { id:'artilleryTurret',         type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:10,    storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:40, inputs:{ advancedCircuit:20, concrete:60, ironGearWheel:40, steelPlate:60 }, outputs:{ artilleryTurret:1 }, reqs:[ 'artillery' ], },
    { id:'car',                     type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:1,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:2,  inputs:{ engineUnit:8, ironPlate:20, steelPlate:5 }, outputs:{ car:1 }, reqs:[ 'automobilism' ], },
    { id:'tank',                    type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:1,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:5,  inputs:{ advancedCircuit:10, engineUnit:32, ironGearWheel:15, steelPlate:50 }, outputs:{ tank:1 }, reqs:[ 'tankTech' ], },
    { id:'spidertron',              type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:1,     storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10, inputs:{ efficiencyModule3:2, exoskeleton:4, portableFusionReactor:2, lowDensityStructure:150, radar:2, rocketControlUnit:16, rocketLauncher:4 }, outputs:{ spidertron:1 }, reqs:[ 'spidertronTech' ], },

    { id:'firearmMagazine',         type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:1,  inputs:{ ironPlate:4 }, outputs:{ firearmMagazine:1 }, },
    { id:'piercingMagazine',        type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3,  inputs:{ copperPlate:5, firearmMagazine:1, steelPlate:1 }, outputs:{ piercingMagazine:1 }, reqs:[ 'military2' ], },
    { id:'uraniumMagazine',         type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:10, inputs:{ piercingMagazine:1, uranium238:1 }, outputs:{ uraniumMagazine:1 }, reqs:[ 'uraniumAmmo' ], },
    { id:'shotgunShells',           type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:3,  inputs:{ copperPlare:2, ironPlate:2 }, outputs:{ shotgunShells:1 }, reqs:[ 'military1' ], },
    { id:'piercingShells',          type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:8,  inputs:{ copperPlate:5, shotgunShells:2, steelPlate:2 }, outputs:{ piercingShells:1 }, reqs:[ 'military4' ], },
    { id:'cannonShell',             type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:8,  inputs:{ explosives:1, plasticBar:2, steelPlare:2 }, outputs:{ cannonShell:1 }, reqs:[ 'tankTech' ], },
    { id:'explosiveCannonShell',    type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:8,  inputs:{ explosives:2, plasticBar:2, steelPlate:2 }, outputs:{ explosiveCannonShell:1 }, reqs:[ 'tankTech' ], },
    { id:'uraniumCannonShell',      type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:12, inputs:{ cannonShell:1, uranium238:1 }, outputs:{ uraniumCannonShell:1 }, reqs:[ 'uraniumAmmo' ], },
    { id:'artilleryShell',          type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:15, inputs:{ explosiveCannonShell:4, explosives:8, radar:1 }, outputs:{ artilleryShell:1 }, reqs:[ 'artillery' ], },
    { id:'rocket',                  type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:8,  inputs:{ electronicCircuit:1, explosives:1, ironPlate:2 }, outputs:{ rocket:1 }, reqs:[ 'rocketry1' ], },
    { id:'explosiveRocket',         type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:8,  inputs:{ explosives:2, rocket:1 }, outputs:{ explosiveRocket:1 }, reqs:[ 'rocketry2' ], },
    { id:'atomicBomb',              type:'item',        machines:[ 'manual', 'assembler1', 'assembler2', 'assembler3' ], max:200,   storages:[ 'woodChest', 'ironChest', 'steelChest' ], time:50, inputs:{ explosive:10, rocketControlUnit:10, uranium235:30 }, outputs:{ atomicBomb:1 }, reqs:[ 'atomicBombTech' ], },
    
    //---
    
    { id:'automation1',             type:'research',    time:10, cycleCount:10,    costs:{ redPack:1 }, },
    { id:'modules',                 type:'research',    time:30, cycleCount:100,   costs:{ redPack:1, greenPack:1 }, reqs:[ 'electronics2' ], },
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
        
        if (data.count) this.count = data.count
        if (data.buildCount) this.buildCount = data.buildCount
        
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

class Generator extends Item {

    constructor(game, data) {
        super(game, data)
        
        this.consum = data.consum
        this.elecProd = data.elecProd
        
        this.used = 0
        this.state = 'paused'
        this.remainingTime = 1
    }
    
    //---
    
    onLoad(data) {
        super.onLoad(data)
        
        if (data.used) this.used = data.used
        if (data.state) this.state = data.state
                        
        if (this.state == 'running') {
            this.remainingTime = data.remainingTime
        }
    }
    
    onSave(data) {
        super.onSave(data)
        
        data.used = this.used
        data.state = this.state
        data.remainingTime = this.remainingTime        
    }
    
    //---
    
    getUsedCount() { return this.used }
    
    getElecProd() {
    
        let ret = this.elecProd * this.used
        return ret
    }

    getConsum() {
        
        if (this.consum == null) return null
        
        let count = this.count > 0 ? this.count : 1
        
        let ret = 0
        ret = this.consum.count * count
        
        return { id:this.consum.id, count:ret }
    }

    getTime() {
        
        let ret = 1        
        return ret
    }
    
    //---
    
    canGenerate() {
    
        if (this.count <= 0) return false
        
        let consum = this.getConsum()
        if (consum && this.game.bases[consum.id].count < consum.count) return false
        
        return true
    }
    
    //---
        
    startGenerating() {
    
        if (this.canGenerate() == true) {
                    
            this.state = 'running'
            if (this.remainingTime == this.getTime()) {
            
                let consum = this.getConsum()
                if (consum != null) {
                    this.game.bases[consum.id].count -= consum.count
                }                
            }
        }
        else {
        
            this.state = 'waiting'
            this.remainingTime = this.getTime()
        }
    }
    
    pauseGenerating() {
        
        if (this.state == 'running') {
            
            let consum = this.getConsum()
            if (consum != null) {
                this.game.bases[consum.id].count += consum.count
            }                
        }
        
        this.state = 'paused'
        this.remainingTime = this.getTime()
    }

    onMainLoop(delta) {
        
        if (this.state == 'waiting') {                    
            this.startGenerating()
        }
        
        if (this.state == 'running') {
            
            this.remainingTime -= delta            
            if (this.remainingTime <= 0) {
                                
                this.remainingTime = this.getTime()
                this.startGenerating()
            }
        }
    }
}

//------------------------------------------------------------------------------

class Machine extends Item {

    constructor(game, data) {
        super(game, data)
        
        this.auto = data.auto
        this.speed = data.speed
        this.energy = data.energy
        this.elecConsum = data.elecConsum
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
        
        this.elecConsum = data.elecConsum
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

    getUsedCount() {
        
        let ret = 0
        for (let id in this.game.bases) {
            let base = this.game.bases[id]
            if (base.type == 'research') {
                ret += base.count
            }
        }
        
        return ret
    }
}

//------------------------------------------------------------------------------

class Production extends Base {

    constructor(item, machine) {
        super(item.game, { id:item.id + '_' + machine.id, type:'production' })
        
        item.productions.push(this)
        
        this.auto = machine.auto
        this.machineId = machine.id        
        this.elecConsum = machine.elecConsum
        this.moduleSlots = machine.moduleSlots
        
        this.time = item.time / machine.speed
        this.inputs = item.inputs
        this.outputs = item.outputs
        
        if (machine.reqs) {

            if (this.reqs == null) {
                this.reqs = []
            }
            
            machine.reqs.forEach(techId => { this.reqs.push(techId) })
        }

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

    getElecConsum() {
    
        if (this.elecConsum == null) return null
        
        let count = this.count > 0 ? this.count : 1
        
        let ret = 0
        ret = this.elecConsum * count * this.getCoeffEnergy()
        
        return ret
    }
    
    getTime() {
        
        let ret = this.time
        ret *= this.getCoeffTime() / this.game.getProdEfficiency()
        
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
            this.remainingTime = this.getTime()
            
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
        
        this.elecConsum = game.bases['lab'].elecConsum
        
        this.count = 0
        this.state = 'paused'
    }

    //---
    
    onLoad(data) {
        super.onLoad(data)
        
        this.count = data.count
        
        this.cycleCount = data.cycleCount
        if (this.cycleCount <= 0) {
            this.count = 0
        }
        
        this.state = data.state
        if (this.state == 'running') {
            this.remainingTime = data.remainingTime
        }
    }
    
    onSave(data) {
        super.onSave(data)
        
        data.count = this.count
        data.state = this.state
        data.cycleCount = this.cycleCount
        data.remainingTime = this.remainingTime
    }
    
    //---
    
    isDone() { return this.cycleCount <= 0 }
    
    getElecConsum() {
    
        let ret = 0
        ret = this.elecConsum * count * this.game.bases['lab'].getCoeffTime()
        
        return ret
    }
    
    getTime() {
        
        let ret = this.time
        ret *= this.game.bases['lab'].getCoeffTime() / this.game.getProdEfficiency()
        
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
    
        if (this.isDone() == true) return false
        if (this.count <= 0) return false
        
        let costs = this.getCosts()
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
                    
                    this.count = 0
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
            if (data.type == 'item') base = new Item(this, data)
            else if (data.type == 'storage') base = new Storage(this, data)
            else if (data.type == 'module') base = new Module(this, data)
            else if (data.type == 'generator') base = new Generator(this, data)
            else if (data.type == 'machine') base = new Machine(this, data)
            else if (data.type == 'lab') base = new Lab(this, data)
            else if (data.type == 'research') base = new Research(this, data)

            this.bases[data.id] = base
        })
        
        baseData.forEach(data => {
            if (data.type != 'research' && data.id != 'manual') {
            
                let item = this.bases[data.id]
                data.machines.forEach(machineId => {
                
                    let machine = this.bases[machineId]
                    let base = new Production(item, machine)
                    this.bases[base.id] = base
                })
            }
        })

        this.elecProd = 0
        this.elecConsum = 0
    }
        
    //---
    
    getElecProd() {
    
        let ret = 0
        for (let id in this.bases) {
            let base = this.bases[id]
            if (base.type == 'generator') {
                ret += base.getElecProd()
            }
        }
        
        if (ret != this.elecProd) this.elecProd = ret
    }

    getElecConsum() {
    
        let ret = 0
        for (let id in this.bases) {
            let base = this.bases[id]
            if ((base.type == 'production' && base.state == 'running' && base.elecConsum > 0) || (base.type == 'research' && base.state == 'running')) {
                ret += base.getElecConsum()
            }
        }
        
        if (ret != this.elecConsum) this.elecConsum = ret
    }
    
    getProdEfficiency() {
        
        let prod = this.elecProd
        let consum = this.elecConsum
        
        if (prod >= consum) return 1
        
        let ret = prod / consum
        return ret
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
            
            this.getElecProd()
            this.getElecConsum()
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
            catGeneratorsStart: true,
            catRawStart: true,
            catFabricatedStart: true,
            catItemsStart: true,
            catStoragesStart: true,
            catScienceStart: true,
            catModulesStart: true,
            catWeaponsStart: true,
            
            catTechsStart: true,
            
            catMachinesOpen: true,
            catGeneratorsOpen: true,
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
        
        elecProd() { return this.game.elecProd },
        elecConsum() { return this.game.elecConsum },
        
        prodEfficiency() { return Math.min(100, Math.floor(this.game.getProdEfficiency() * 100)) },
        
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
                this.catGeneratorsStart = this.catGeneratorsOpen
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
                if (loadedData.catGeneratorsOpen != null) this.catGeneratorsOpen = loadedData.catGeneratorsOpen
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
            savedData.catGeneratorsOpen = this.catGeneratorsOpen
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
