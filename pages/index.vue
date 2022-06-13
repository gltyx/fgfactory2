<template>
    <div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
    
        <div v-if="isMobile == true" class="position-absolute bg-grid top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
            <div class="p-3">
                <div class="row g-3">
                    <div class="col-12 text-center">
                        <img :src="require(`~/assets/icon.png`)" width="48px" class="rounded" />
                        <div class="mt-2 text-center">
                            <span class="text-normal h5">FG Building</span>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <span class="text-danger">Your device is not supported for the moment.</span>
                    </div>
                    <div class="col-12 text-center">
                        <span class="text-normal">To be informed when your device will be supported and new features will be ready, please join Discord server.</span>
                    </div>
                    <div class="col-12 text-center">
                        <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-light border">
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
                        <div class="modal-header bg-light align-items-center">
                            <div class="col">
                                <span class="modal-title h5">Wipe Local Data</span>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-light border" @click="popupWipe = false;">
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
                                <span class="modal-title h5">Support</span>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="col-auto btn btn-light border" @click="popupSupport = null">
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
                                    <a href="https://www.patreon.com/bePatron?u=61283131" target="_blank" class="w-100 btn btn-light border" style="width:100px;">
                                        <div class="col-12"><img :src="require(`~/assets/ui/patreon.png`)" width="24px" height="24px" /></div>
                                        <div class="mt-2">Become a supporter</div>
                                    </a>
                                </div>
                                <div class="col-3 text-center">
                                    <a href="https://ko-fi.com/freddecgames" target="_blank" class="w-100 btn btn-light border" style="width:100px;">
                                        <div class="col-12"><img :src="require(`~/assets/ui/kofi.png`)" width="24px" height="24px" /></div>
                                        <div class="mt-2">Buy me<br>a Ko-fi</div>
                                    </a>
                                </div>
                                <form class="col-3 text-center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                    <input type="hidden" name="cmd" value="_s-xclick">
                                    <input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
                                    <button type="submit" class="w-100 btn btn-light border">
                                        <div class="col-12"><img :src="require(`~/assets/ui/paypal.png`)" width="24px" height="24px" /></div>
                                        <div class="mt-2">Make a donation</div>
                                    </button>
                                </form>
                                <div class="col-3 text-center">
                                    <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="w-100 btn btn-light border">
                                        <div class="col-12"><img :src="require(`~/assets/ui/discord.png`)" width="24px" height="24px" alt="Discord" /></div>
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
                                <span class="modal-title h5">Welcome</span>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-light" @click="popupTutorial = null; disableTutorial();">
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
                            <button type="button" class="btn btn-secondary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial.done = true; popupTutorial = null; disableTutorial();">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </div>
        
        <ModalItem v-if="modalItem" :item="modalItem" />
        <ModalMachine v-if="modalMachine" :machine="modalMachine" />
        
        <div v-if="isMobile == false && started == false" class="position-absolute bg-grid top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
            <div class="p-3">
                <div class="row g-3">
                    <div class="col-12 text-center">
                        <img :src="require(`~/assets/icon.png`)" width="48px" class="rounded" />
                        <div class="mt-2 text-center">
                            <span class="text-normal h5">FG Building</span>
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
                                <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-light border">
                                    <div class="row gx-1 align-items-center">
                                        <img class="col-auto" :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                        <span class="col-auto">Discord</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <textarea spellcheck="false" rows="5" class="w-100 form-control" style="max-width:512px;">{{ exportGameData }}</textarea>
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
            
            <div class="navbar fixed-top bg-light">
                <div class="container">
                    <div class="w-100 row align-items-center">
                        <div class="col-auto">
                            <div class="row gx-1 align-items-center">
                                <div class="col-auto">
                                    <img :src="require(`~/assets/icon.png`)" width="20px" />
                                </div>
                                <div class="col-auto">
                                    <span class="h5">FG Building</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <span class="badge bg-danger text-white">Alpha version</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="navbar fixed-bottom bg-light">
                <div class="container">
                    <div class="w-100 row align-items-center">
                        <BottomButton label="Save" icon="fa-save" :click="manualSave" />
                        <BottomButton label="Support" icon="fa-hand-holding-heart" :click="showSupportPopup" />
                        <BottomButton label="Tutorial" icon="fa-question-circle" :click="enableTutorial" />
                        <div class="ms-auto col-auto">
                            <div class="text-center text-muted small">Time Played</div>
                            <div class="text-center"><FormatTime :value="game.timePlayed" /></div>
                        </div>
                        <BottomButton v-if="game.paused == false" label="Pause" icon="fa-pause" :click="pauseGame" />
                        <BottomButton v-if="game.paused == true" label="Resume" icon="fa-play" :click="resumeGame" />
                    </div>
                </div>
            </div>
            
            <div class="nav nav-tabs fixed-top bg-light">
                <div class="container">
                    <div class="row gx-0 align-items-center">
                        <TopMenuTab tabId="machines" icon="fa-industry" />
                        <TopMenuTab tabId="items" icon="fa-boxes" />
                        <TopMenuTab tabId="techs" icon="fa-flask" />
                        <TopMenuTab tabId="aliens" icon="fa-spider" />
                        <TopMenuTab tabId="settings" icon="fa-cogs" class="ms-auto" />
                    </div>
                </div>
            </div>
            
            <div class="position-fixed top-0 bottom-0 start-0 end-0 py-3" style="margin-top:95px; margin-bottom:50px;">
                <div class="h-100 position-relative container scrollbar">
                    
                    <div v-if="currentTabId == 'machines'" class="row g-3">
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Extraction</span></div>
                            <div class="row gx-2 align-items-center">
                                <Machine v-for="(machine, index) in getMachinesByType(['manual', 'drill1', 'drill2'])" :key="index" :machine="machine" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Smelting</span></div>
                            <div class="row gx-2 align-items-center">
                                <Machine v-for="(machine, index) in getMachinesByType(['furnace1', 'furnace2', 'furnace3'])" :key="index" :machine="machine" />
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="currentTabId == 'items'" class="row g-3">
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Extracted</span></div>
                            <div class="row gx-2 align-items-center">
                                <Stock :item="gameItem('wood')" />
                                <Stock :item="gameItem('coal')" />
                                <Stock :item="gameItem('stone')" />
                                <Stock :item="gameItem('iron')" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Smelted</span></div>
                            <div class="row gx-2 align-items-center">
                                <Stock :item="gameItem('ironPlate')" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Assembled</span></div>
                            <div class="row gx-2 align-items-center">
                                <Stock :item="gameItem('ironGearWheel')" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Modules</span></div>
                            <div class="row gx-2 align-items-center">
                                <Stock :item="gameItem('speedModule1')" />
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="currentTabId == 'techs'" class="row g-3">
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Labs</span></div>
                            <div class="row gx-2 align-items-center">
                                <LineLab :data="gameItem('lab')" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Techs</span></div>
                            <div class="row gx-2 align-items-center">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Boosts</span></div>
                            <div class="row gx-2 align-items-center">
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="currentTabId == 'aliens'" class="row g-3">
                        <div class="col-3">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Eggs</span></div>
                            <div class="row gx-2 align-items-center">
                                <div class="h-100 card card-body d-flex align-items-center justify-content-center">
                                    <div class="row gx-2 align-items-center">
                                        <div class="col-auto">
                                            <img :src="require(`~/assets/alienEgg.png`)" width="24px" height="24px" :alt="$t('label_alienEgg')" />
                                        </div>
                                        <div class="col-auto">
                                            <small class="text-muted">x</small>
                                            <span><FormatNumber :value="game.alienEggCount" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Aliens</span></div>
                            <div class="row gx-2 align-items-center">
                                <div class="card card-body">
                                    <div v-if="game.getAlienCount() < 1" class="row align-items-center">
                                        <div class="col-auto">
                                            <span class="text-muted">Generate a new Alien wave to collect Alien Eggs</span>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-light border" @click="game.generateAliens()">
                                                <span>Generate</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div v-if="game.getAlienCount() > 0" class="row align-items-center">
                                        <div class="row g-2 align-items-center justify-content-center">
                                            <BlockAlien v-for="alien in game.aliens" :key="alien.id" :alien="alien" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Arsenal</span></div>
                            <div class="row gx-2 align-items-center">
                                <RowWeapon :weapon="gameItem('pistol')" />                                    
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="currentTabId == 'settings'" class="row g-3">
                        <div class="col-12">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="h5">About</span>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-6">
                                            <div class="row g-3">
                                                <div class="col-12 text-center text-normal">This game has been designed and developed by <span class="text-primary">Freddec Games</span>. To be kept informed about other games and the future of this one, join Discord server and visit our official website.</div>
                                                <div class="col-12">
                                                    <div class="row align-items-center justify-content-center">
                                                        <div class="col-auto">
                                                            <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-light border">
                                                                <div class="row gx-1 align-items-center">
                                                                    <img class="col-auto" :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                                                    <span class="col-auto">Discord</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="col-auto">
                                                            <a href="https://freddecgames.com/" target="_blank" class="btn btn-light border">
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
                                                <div class="col-12 text-center text-normal">This game is largely inspired by the game <span class="text-primary">Factorio</span> (productions, buildings, recipes, techs and etc ...)</div>
                                                <div class="col-12 text-center d-flex justify-content-center">
                                                    <a href="https://www.factorio.com/" target="_blank" class="btn btn-light border">
                                                        <div class="row gx-1 align-items-center">
                                                            <img class="col-auto" :src="require(`~/assets/ui/factorio.png`)" width="16px" height="16px" alt="Factorio" />
                                                            <span class="col-auto">Factorio Offical Site</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="col-12 text-center text-normal">Icons are provided by <a href="https://www.flaticon.com/" target="_blank">Flaticon</a> and <a href="https://fontawesome.com/" target="_blank">Fontawesome</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="h5">Options</span>
                                </div>
                                <div class="card-body">
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="h5">Hard Reset</span>
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
                                    <span class="h5">Export Save</span>
                                </div>
                                <div class="card-body">
                                    <textarea spellcheck="false" rows="5" class="w-100 form-control">{{ exportGameData }}</textarea>                                        
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span class="h5">Import Save</span>
                                </div>
                                <div class="card-body">
                                    <textarea spellcheck="false" rows="5" class="w-100 form-control" v-model="importExportData"></textarea>
                                    <div class="mt-2 text-end">
                                        <button type="button" class="btn btn-light border" @click="importGameData()">
                                            <span>Import</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div class="position-absolute bottom-0 end-0 p-3" style="z-index:100;">
                        <div v-if="toastText" class="toast fade show text-white border-0" :class="{ 'bg-info':toastType == 'info', 'bg-danger':toastType == 'error', 'bg-success':toastType == 'success' }" role="alert" aria-live="assertive" aria-atomic="true">
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

var recipeData = [
    
    { id:'coal', machines:[ 'manual', 'drill1', 'drill2' ], time:4, outputs:{ coal:1 }, },
    { id:'iron', machines:[ 'manual', 'drill1', 'drill2' ], time:4, outputs:{ iron:1 }, },
    { id:'stone', machines:[ 'manual', 'drill1', 'drill2' ], time:4, outputs:{ stone:1 }, },
    { id:'wood', machines:[ 'manual', 'drill1', 'drill2' ], time:4, outputs:{ wood:1 }, },

    { id:'ironPlate', machines:[ 'furnace1', 'furnace2', 'furnace3' ], time:3.2, inputs:{ iron:1 }, outputs:{ ironPlate:1 }, },
    { id:'ironGearWheel', machines:[ 'assembler1', 'assembler2', 'assembler3' ], time:0.5, inputs:{ ironPlate:2 }, outputs:{ ironGearWheel:1 }, },
    
    { id:'furnace1', machines:[ 'manual' ], time:0.5, inputs:{ stone:5 }, outputs:{ furnace1:1 }, },
]

var itemData = [
    
    { id:'manual', type:'machine', icon:'manual', name:'manual', auto:false, speed:1, },    
    { id:'furnace1', type:'machine', icon:'furnace1', name:'furnace1', auto:true, speed:1, modulesSlots:4, energyConsumed:90, energies:[ 'wood', 'coal' ], upgrade:{ time:2, inputs:{ ironGearWheel:3, ironPlate:3 }, outputs:{ drill1:1 }, }, },
    
    { id:'coal', type:'fuel', icon:'coal', name:'coal', value:4, },
    { id:'wood', type:'fuel', icon:'wood', name:'wood', value:2, },
    
    { id:'speedModule1', type:'module', icon:'speedModule1', name:'speedModule1', coeffTime:.8, coeffEnergy:1.5, },
    
    { id:'lab', type:'lab', icon:'lab', name:'lab', },
    
    { id:'iron', type:'item', icon:'iron', name:'iron', },
    { id:'ironPlate', type:'item', icon:'ironPlate', name:'ironPlate', },
    { id:'ironGearWheel', type:'item', icon:'ironGearWheel', name:'ironGearWheel', },

    { id:'stone', type:'item', icon:'stone', name:'stone', },
]

var alienData = [
    
    {   id:'biter1',    health:15,      shield:{ physical:0,  explosion:0  },  armor:{ physical:0,   explosion:0  },  eggCoeff:.9,  },
    {   id:'biter2',    health:75,      shield:{ physical:4,  explosion:0  },  armor:{ physical:.1,  explosion:.1 },  eggCoeff:.8,  },
    {   id:'biter3',    health:375,     shield:{ physical:8,  explosion:0  },  armor:{ physical:.1,  explosion:.1 },  eggCoeff:.7,  },
    {   id:'biter4',    health:3000,    shield:{ physical:12, explosion:12 },  armor:{ physical:.1,  explosion:.1 },  eggCoeff:.6,  },
]

//------------------------------------------------------------------------------

class Recipe {

    constructor(game, data) {
    
        this.game = game
        
        this.id = data.id
        this.reqs = data.reqs
        this.time = data.time
        this.inputs = data.inputs
        this.outputs = data.outputs
        this.machines = data.machines
    }
    
    //---
    
    isUnlocked() {
        
        if (this.reqs == null) return true
        
        let ret = false
        return ret
    }
}

//------------------------------------------------------------------------------

class Item {

    constructor(game, data) {
    
        this.game = game
        
        this.init(data)        
    }
    
    init(data) {
    
        this.id = data.id
        this.type = data.type
        this.desc = data.desc
        this.reqs = data.reqs
        this.icon = data.icon    
        this.name = data.name
        
        this.count = 0
    }
}

//------------------------------------------------------------------------------

class Fuel extends Item {

    constructor(game, data) {
        super(game, data)        
    }
    
    init(data) {
        super.init(data)
        
        this.value = data.value
    }
}

//------------------------------------------------------------------------------

class Module extends Item {

    constructor(game, data) {
        super(game, data)        
    }
    
    init(data) {
        super.init(data)
        
        this.coeffTime = data.coeffTime
        this.coeffEnergy = data.coeffEnergy
        
        this.used = 0
    }
}

//------------------------------------------------------------------------------

class Machine extends Item {

    constructor(game, data) {
        super(game, data)   
    }
    
    init(data) {
        super.init(data)
        
        this.auto = data.auto
        this.speed = data.speed
        this.upgrade = data.upgrade
        this.energies = data.energies
        this.modulesSlots = data.modulesSlots
        this.energyConsumed = data.energyConsumed
        
        this.state = 'paused'
        this.recipe = null
        this.energy = null
        this.remainingSeconds = null

        this.upgradeState = 'paused'
        this.upgradeRemainingSeconds = data.upgrade ? data.upgrade.time : null
        
        this.modules = null
        if (this.modulesSlots > 0) {
            this.modules = [this.modulesSlots]
            for (let id = 0; id < this.modulesSlots; id++) {
                this.modules[id] = null
            }
        }
        
        this.coeffTime = 1.0
        this.coeffEnergy = 1.0
        this.coeffOutputs = 1.0
    }
    
    //---
    
    getTime(recipe) {
        
        let ret = recipe.time / this.speed
        ret *= this.coeffTime        
        
        return ret
    }
    
    getInputs(recipe) {
    
        if (recipe.inputs == null) return null

        let ret = {}
        
        for (let id in recipe.inputs) {
            let input = recipe.inputs[id]
            
            ret[id] = input
        }
        
        return ret
    }
    
    getOutputs(recipe) {
        
        let ret = {}
        
        for (let id in recipe.outputs) {
            let output = recipe.outputs[id]
            
            ret[id] = output * this.coeffOutputs
        }
        
        return ret
    }
    
    canProduce() {
        
        if (this.recipe == null) return false
        
        if (this.energy == null && this.energyConsumed != null) return false
        if (this.energy != null && this.game.items[this.energy.id].count < this.energy.count) return false
        
        let inputs = this.getInputs(this.recipe)
        if (inputs == null) return true
        
        for (let id in inputs) {
            let input = inputs[id]
            
            if (input > this.game.items[id].count) {            
                return false
            }
        }
        
        return true
    }
    
    canUpgrade() {
        
        if (this.upgrade == null) return false
        
        for (let id in this.upgrade.inputs) {
            let input = this.upgrade.inputs[id]
            
            if (input > this.game.items[id].count) {            
                return false
            }
        }
        
        return true
    }
    
    //---
    
    assignRecipe(recipe) {
        
        if (recipe != null) {
        
            this.recipe = recipe
            
            this.state = 'paused'
            this.remainingSeconds = this.getTime(this.recipe)
        }
        else {
        
            this.recipe = null
            
            this.state = 'paused'
            this.remainingSeconds = null
        }
    }
    
    assignEnergy(energy) {
        
        if (energy) {
        
            this.energy = {}
            this.energy.id = energy.id
            this.energy.count = energy.count
        }
        else {
        
            this.energy = null
        }
    }
    
    assignModule(index, itemId) {
        
        if (this.modules[index] != null) {
        
            let item = this.game.items[this.modules[index]]
            item.used -= 1
            
            if (item.coeffTime != null) this.coeffTime /= item.coeffTime
            if (item.coeffEnergy != null) this.coeffEnergy /= item.coeffEnergy
            if (item.coeffOutputs != null) this.coeffOutputs /= item.coeffOutputs
            
            this.modules[index] = null
        }
        
        if (itemId != null) {
            
            let item = this.game.items[itemId]
            item.used += 1
                            
            if (item.coeffTime != null) this.coeffTime *= item.coeffTime
            if (item.coeffEnergy != null) this.coeffEnergy *= item.coeffEnergy
            if (item.coeffOutputs != null) this.coeffOutputs *= item.coeffOutputs
            
            this.modules[index] = itemId
        }
        
        if (this.energy) {
            
            let item = this.game.items[this.energy.id]

            this.energy.count = (item.value * this.coeffEnergy / this.energyConsumed)
            this.assignEnergy(this.energy)
        }
    }
    
    startUpgrading() {
    
        this.pauseProducing()
        
        if (this.canUpgrade() == true) {
                    
            this.upgradeState = 'running'
            this.upgradeRemainingSeconds = this.upgrade.time

            let inputs = this.upgrade.inputs
            for (let id in inputs) {
                let input = inputs[id]
                
                this.game.items[id].count -= input
            }
        }
    }
    
    stopUpgrading() {
        
        if (this.upgradeState == 'running') {
            
            let inputs = this.upgrade.inputs
            for (let id in inputs) {
                let input = inputs[id]
                
                this.game.items[id].count += input
            }
        }
        
        this.upgradeState = 'paused'
        this.upgradeRemainingSeconds = this.upgrade.time
    }
    
    doUpgrade(delta) {
        
        if (this.upgradeState == 'running') {
        
            this.upgradeRemainingSeconds -= delta            
            if (this.upgradeRemainingSeconds <= 0) {                
                for (let id in this.upgrade.outputs) {
                    
                    let data = this.game.items[id]
                    this.init(data)
                }
            }
        }
    }
    
    startProducing() {
        
        if (this.canProduce() == true) {
                    
            this.state = 'running'
            this.remainingSeconds = this.getTime(this.recipe)
            
            let inputs = this.getInputs(this.recipe)
            if (inputs != null) {
                for (let id in inputs) {
                    let input = inputs[id]
                    
                    this.game.items[id].count -= input
                }
            }
        }
        else {
        
            this.state = 'waiting'
            this.remainingSeconds = this.getTime(this.recipe)
        }
    }
    
    pauseProducing() {
        
        if (this.state == 'running') {
            
            let inputs = this.getInputs(this.recipe)
            if (inputs != null) {
                for (let id in inputs) {
                    let input = inputs[id]
                    
                    this.game.items[id].count += input
                }
            }
        }
        
        this.state = 'paused'
        this.remainingSeconds = this.getTime(this.recipe)
    }
    
    doProduce(delta) {
        
        if (this.state == 'waiting') {                    
            this.startProducing()
        }
        
        if (this.state == 'running') {
        
            if (this.energy) {            
                this.game.items[this.energy.id].count -= this.energy.count * delta
            }
            
            this.remainingSeconds -= delta            
            if (this.remainingSeconds <= 0) {
                                
                let outputs = this.getOutputs(this.recipe)
                for (let id in outputs) {
                    let output = outputs[id]
                    let item = this.game.items[id]
                    
                    if (item.type != 'machine') item.count += output
                    else if (item.type == 'machine') this.game.addMachine(item.id)
                }
                
                if (this.auto == true) {                
                    this.startProducing()
                }
                else {
                
                    this.state = 'paused'
                    this.remainingSeconds = this.getTime(this.recipe)
                }
            }
        }
    }
}

//------------------------------------------------------------------------------

class Lab extends Item {

    constructor(game, data) {
        super(game, data)   
    }
    
    init(data) {
        super.init(data)
        
        this.speed = data.speed
        this.energyConsumed = data.energyConsumed
        
        this.state = 'paused'
        this.currentTech = null
        this.remainingSeconds = null
    }
    
    //---
    
    getTechTime(tech) { return tech.time * tech.cycleCount / this.count }
    
    canResearch(tech) {
        
        if (this.count < 1) return false
        if (this.state == 'running') return false
        
        for (let id in tech.costs) {
            let cost = tech.costs[id]
            
            if (cost > this.game.items[id].count) {            
                return false
            }
        }
        
        return true
    }
    
    //---
    
    startResearching(tech) {
        
        if (this.canResearch(tech) == true) {
                    
            this.state = 'running'
            this.remainingSeconds = this.getTechTime(tech)

            for (let id in tech.costs) {
                let cost = tech.costs[id]
                
                this.game.items[id].count -= cost
            }
            
            this.currentTech = tech
        }
    }
    
    doResearch(delta) {
    
        if (this.state == 'running') {
                    
            this.game.items['electricity'].count -= this.count * this.energyConsumed * delta
            
            this.remainingSeconds -= delta            
            if (this.remainingSeconds <= 0) {
            
                let item = this.game.items[this.currentTech.id]
                item.count += 1
                
                this.state = 'paused'
                this.remainingSeconds = null
            }
        }
    }
}

//------------------------------------------------------------------------------

class Alien {

    constructor(game, data) {
    
        this.id = data.id
        this.armor = data.armor
        this.shield = data.shield
        this.health = data.health
        this.eggCoeff = data.eggCoeff
        
        this.count = 0
        this.totalHealth = 0
    }
    
    //---
    
    setCount(count) {
        
        if (count == null) count = 0
        
        this.count = count
        this.totalHealth = count * this.health
    }
    
    doDamage(damage) {
        
        let gap = 0
        
        this.totalHealth -= damage
        if (this.totalHealth < 0) this.totalHealth = 0
        
        let newCount = Math.ceil(this.totalHealth / this.health)
        if (newCount != this.count) {
            
            gap = this.count - newCount
            this.count = newCount
        }
        
        return gap
    }
}

//------------------------------------------------------------------------------

class Weapon extends Item {

    constructor(game, data) {
        super(game, data)
    }
    
    init(data) {
        super.init(data)
        
        this.auto = data.auto
        this.fireTime = data.fireTime
            
        this.fireState = 'paused'
        this.fireRemainingSeconds = this.getFireTime()
        
        this.ammunitions = []
    }
    
    //---
    
    getFireTime() {
    
        let ret = this.fireTime
        return ret
    }
    
    getRemainingShotCount() {
    
        let ret = 0
        
        for (let id in this.ammunitions) {
            let ammunition = this.ammunitions[id]
            
            ret += ammunition.count
        }
        
        return ret
    }
    
    canFire() {
        
        if (this.count < 1) return false
        if (this.getRemainingShotCount() < 1) return false        
        if (this.game.getAlienCount() < 1) return false
        
        return true
    }    
    
    getAlienTarget() {
    
        let ret = null
        
        for (let id in this.game.aliens) {
            let alien = this.game.aliens[id]
            
            if (alien.totalHealth > 0) {
            
                ret = alien
                break
            }
        }
        
        return ret
    }
    
    getFireAmmunition() {

        let ret = null
        
        for (let id in this.ammunitions) {
            let ammunition = this.ammunitions[id]
            
            if (ammunition.count > 0) {
            
                ret = ammunition
                break
            }
        }
        
        return ret
    }
    
    //---
    
    startFiring() {
        
        let kill = 0
        
        if (this.canFire() == true) {
            
            for (let id in this.game.weapons) {
            
                let weapon = this.game.weapons[id]
                weapon.cancelFiring()
            }
            
            this.fireState = 'running'
            this.fireRemainingSeconds = this.getFireTime()
            
            let alien = this.getAlienTarget()
            let ammunition = this.getFireAmmunition()
            
            if (alien && ammunition) {
            
                let totalDamage = 0
                for (let id in ammunition.damages) {
                
                    let armor = alien.armor[id]
                    let shield = alien.shield[id]
                    let damage = ammunition.damages[id]
                    
                    if (shield + 1 < damage) {
                        totalDamage += damage - shield
                    }
                    else if (damage > 1) {
                        totalDamage += 1 / (shield - damage + 2)
                    }
                    else {
                        totalDamage += 1 / (shield + 1)
                    }
                    
                    totalDamage = totalDamage * (1 - armor)
                }
                
                ammunition.count -= 1
                
                kill = alien.doDamage(totalDamage)
                if (kill > 0) {
                
                    let dice = Math.random()
                    if (dice > alien.eggCoeff) {
                        this.game.items['alienEgg'].count += 1
                    }
                }                
            }
            else {
            
                this.cancelFiring()
            }
        }
        else {
        
            this.cancelFiring()
        }
        
        return kill
    }
    
    cancelFiring() {
    
        this.fireState = 'paused'
        this.fireRemainingSeconds = this.getFireTime()        
    }
    
    fire(delta) {
    
        if (this.fireState == 'running') {
        
            this.fireRemainingSeconds -= delta            
            if (this.fireRemainingSeconds <= 0) {
                                
                if (this.auto) this.startFiring()
                else this.cancelFiring()
            }
        }
    }
}

//------------------------------------------------------------------------------

class Game {

    constructor() {
        
        this.paused = false
        this.timePlayed = 0
        
        this.weapons = []
        
        this.items = {}
        itemData.forEach(data => { 
            
            if (data.type == 'fuel') this.items[data.id] = new Fuel(this, data)
            else if (data.type == 'lab') this.items[data.id] = new Lab(this, data)
            else if (data.type == 'module') this.items[data.id] = new Module(this, data)
            else if (data.type == 'weapon') {
            
                let weapon = new Weapon(this, data)
                this.items[data.id] = weapon
                this.weapons.push(weapon)
            }
            else this.items[data.id] = new Item(this, data)
        })
        
        this.recipes = {}
        recipeData.forEach(data => { this.recipes[data.id] = new Recipe(this, data) })
        
        this.machines = []
        
        this.lab = this.items['lab']
        
        this.alienEggCount = 0
        
        this.aliens = {}
        alienData.forEach(data => { this.aliens[data.id] = new Alien(this, data) })
    }
    
    //---
    
    getAlienCount() {
    
        let ret = 0
        
        for (let id in this.aliens) {
            let alien = this.aliens[id]
            
            ret += alien.count
        }
        
        return ret
    }
    
    //---
    
    addMachine(machineId) {
        
        let data = null
        for (let i in itemData) {
            if (itemData[i].id == machineId) {
            
                data = itemData[i]
                break
            }
        }
        
        let machine = new Machine(this, data)
        this.machines.push(machine)
        
        return machine
    }
    
    generateAliens() {
    
        for (let id in this.aliens) {
            let alien = this.aliens[id]
            
            alien.setCount(Math.random() * 100)
        }
    }
    
    //---
    
    init() {
        
        this.addMachine('manual')        
    }
    
    load(data) {
        
        if (data.paused != null) this.paused = data.paused
        if (data.timePlayed != null) this.timePlayed = data.timePlayed
        
        if (data.machines) {
            data.machines.forEach(dataMachine => {
            
                let machine = this.addMachine(dataMachine.id)
                
                if (dataMachine.energy) {
                
                    machine.assignEnergy(dataMachine.energy)
                }
                
                if (dataMachine.recipeId) {
                
                    let recipe = null
                    for (let id in this.recipes) {
                        if (id == dataMachine.recipeId) {
                            
                            recipe = this.recipes[id]
                            break
                        }
                    }
                    
                    machine.assignRecipe(recipe)
                }
                
                if (dataMachine.state) machine.state = dataMachine.state
                if (dataMachine.remainingSeconds) machine.remainingSeconds = dataMachine.remainingSeconds

                if (dataMachine.upgradeState) machine.upgradeState = dataMachine.upgradeState
                if (dataMachine.upgradeRemainingSeconds) machine.upgradeRemainingSeconds = dataMachine.upgradeRemainingSeconds
                
                if (dataMachine.modules) {
                    let index = 0
                    dataMachine.modules.forEach(dataModule => {
                        machine.assignModule(index, dataModule)
                        index++
                    })
                }
            })
        }
        
        for (let id in data.items) {
            let dataItem = data.items[id]
            
            let item = this.items[id]
            if (item) {
            
                item.count = dataItem.count
            }
        }
    }
    
    save() {
    
        let ret = {
            
            paused: this.paused,
            timePlayed: this.timePlayed,
            
            items: {},
            
            machines: [],
        }
        
        this.machines.forEach(machine => {
            
            let data = {
            
                id: machine.id,
                state: machine.state,
                energy: machine.energy,
                modules: machine.modules,
                recipeId: machine.recipe ? machine.recipe.id : null,
                remainingSeconds: machine.remainingSeconds,

                upgradeState: machine.upgradeState,
                upgradeRemainingSeconds: machine.upgradeRemainingSeconds,
            }
            
            ret.machines.push(data)
        })
        
        for (let id in this.items) {
            let item = this.items[id]
            
            ret.items[item.id] = {
            
                count: item.count,
            }
        }                
        
        return ret
    }
    
    mainLoop(deltaTimeMs) {
        
        if (this.paused == false) {
        
            let delta = deltaTimeMs / 1000
            
            let cycleCount = 1
            let cycleDelta = 1
            
            if (delta > cycleDelta) {                
                cycleCount = Math.ceil(delta / cycleDelta)
            }
            else {
                cycleDelta = delta
            }
            
            for (let i = 0; i < cycleCount; i++) {    
                
                this.timePlayed += cycleDelta
                
                this.machines.forEach(machine => {
                
                    machine.doProduce(cycleDelta)
                    machine.doUpgrade(cycleDelta)
                })
                
                this.lab.doResearch(cycleDelta)
                
                this.weapons.forEach(weapon => {
                    
                    weapon.fire(cycleDelta)
                })
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
            localStorageName: 'fgbuilding',
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
            
            modalItem: null,
            modalMachine: null,
            
            //---
            
            tutorialEnabled: true,
            
            //---
            
            currentTabId: 'machines',
            
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
        
        //---
        
        gameItem(id) { return this.game.items[id] },
        
        getMachinesByType(types) { return this.game.machines.filter(machine => { return types.includes(machine.id) }) },
        
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
        
        showModalItem(item) { this.modalItem = item },
        
        showModalMachine(machine) { this.modalMachine = machine },
        
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
            
                if (this.load() == false) {
                    this.init()
                }
                
                this.game.items['speedModule1'].count = 2
                
                this.update()
                                
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
        
        init() {
        
            this.game.init()
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
                
                if (loadedData.tutorials) {
                    for (var id in loadedData.tutorials) {
                        let dataTut = loadedData.tutorials[id]
                        
                        let tut = this.tutorials[id]
                        if (tut) {
                            tut.done = dataTut.done
                        }
                    }
                }
                
                return true
            }
            
            return false
        },

        save() {
            
            let savedData = this.game.save()
            
            savedData.lastFrameTimeMs = this.lastFrameTimeMs
            savedData.tutorialEnabled = this.tutorialEnabled
            
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
