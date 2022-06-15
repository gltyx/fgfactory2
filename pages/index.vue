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
            
            <div class="nav nav-tabs fixed-top bg-dark">
                <div class="container">
                    <div class="row gx-0 align-items-center">
                        <TopMenuTab tabId="machines" icon="fa-industry" />
                        <TopMenuTab tabId="settings" icon="fa-cogs" class="ms-auto" />
                    </div>
                </div>
            </div>
            
            <div class="position-fixed top-0 bottom-0 start-0 end-0 py-3" style="margin-top:75px; margin-bottom:50px;">
                <div class="h-100 position-relative container scrollbar">
                    
                    <div v-if="currentTabId == 'machines'" class="row g-3">
                        <div class="col-3">
                            <div class="row g-2 align-items-center">
                                <div class="col-12"><small class="fw-bold text-muted">Ores</small></div>
                                <Item :data="game.items['coal']" />
                                <Item :data="game.items['stone']" />
                                <Item :data="game.items['iron']" />
                                <Item :data="game.items['copper']" />
                                <div class="col-12"><small class="fw-bold text-muted">Fabricated</small></div>
                                <Item :data="game.items['copperPlate']" />
                                <Item :data="game.items['copperCable']" />
                                <Item :data="game.items['ironPlate']" />
                                <Item :data="game.items['ironGearWheel']" />
                                <Item :data="game.items['pipe']" />
                                <Item :data="game.items['electronicCircuit']" />
                                <div class="col-12"><small class="fw-bold text-muted">Fluids</small></div>
                                <Item :data="game.items['water']" />
                                <Item :data="game.items['steam']" />
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="nav nav-pills">
                                        <MachineSubTab :data="game.machines['manual']" />
                                        <MachineSubTab :data="game.machines['furnace1']" />
                                        <MachineSubTab :data="game.machines['drill1']" />
                                        <MachineSubTab :data="game.machines['offshorePump']" />
                                        <MachineSubTab :data="game.machines['boiler']" />
                                    </div>
                                </div>
                                <Manual :data="game.machines['manual']" />
                                <Machine :data="game.machines['furnace1']" />
                                <Machine :data="game.machines['drill1']" />
                                <Machine :data="game.machines['offshorePump']" />
                                <Machine :data="game.machines['boiler']" />
                            </div>
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

//------------------------------------------------------------------------------

class Base {

    constructor(game, data) {
        
        this.game = game
        
        this.id = data.id
        this.type = data.type
        
        this.count = 0
    }
        
    //---
    
    getCount() { return this.count }
}

//------------------------------------------------------------------------------

var recipeData = [

    {   id:'coal',                  type:'recipe',        machines:[ 'manual', 'drill1' ],          time:4,       outputs:{ coal:1 }, },
    {   id:'copper',                type:'recipe',        machines:[ 'manual', 'drill1' ],          time:4,       outputs:{ copper:1 }, },
    {   id:'stone',                 type:'recipe',        machines:[ 'manual', 'drill1' ],          time:4,       outputs:{ stone:1 }, },
    {   id:'iron',                  type:'recipe',        machines:[ 'manual', 'drill1' ],          time:4,       outputs:{ iron:1 }, },
    
    {   id:'copperCable',           type:'recipe',        machines:[ 'manual' ],                    time:.5,      inputs:{ copperPlate:1 }, outputs:{ copperCable:2 }, },
    {   id:'pipe',                  type:'recipe',        machines:[ 'manual' ],                    time:.5,      inputs:{ ironPlate:1 }, outputs:{ pipe:1 }, },
    {   id:'ironGearWheel',         type:'recipe',        machines:[ 'manual' ],                    time:.5,      inputs:{ ironPlate:2 }, outputs:{ ironGearWheel:1 }, },
    {   id:'electronicCircuit',     type:'recipe',        machines:[ 'manual' ],                    time:.5,      inputs:{ copperCable:3, ironPlate:1 }, outputs:{ electronicCircuit:1 }, },

    {   id:'furnace1',              type:'recipe',        machines:[ 'manual' ],                    time:.5,      inputs:{ stone:5 }, outputs:{ furnace1:1 }, },
    {   id:'drill1',                type:'recipe',        machines:[ 'manual' ],                    time:2,       inputs:{ ironGearWheel:3, ironPlate:3, furnace1:1 }, outputs:{ drill1:1 }, },    
    {   id:'offshorePump',          type:'recipe',        machines:[ 'manual' ],                    time:.5,      inputs:{ ironGearWheel:1, pipe:1, electronicCircuit:2 }, outputs:{ offshorePump:1 }, },    
    {   id:'boiler',                type:'recipe',        machines:[ 'manual' ],                    time:.5,      inputs:{ pipe:4, furnace1:1 }, outputs:{ boiler:1 }, },    
    
    {   id:'ironPlate',             type:'recipe',        machines:[ 'furnace1' ],                  time:3.2,     inputs:{ iron:1 }, outputs:{ ironPlate:1 }, },
    {   id:'copperPlate',           type:'recipe',        machines:[ 'furnace1' ],                  time:3.2,     inputs:{ copper:1 }, outputs:{ copperPlate:1 }, },
    
    {   id:'water',                 type:'recipe',        machines:[ 'offshorePump' ],              time:1,       outputs:{ water:1200 }, },
    
    {   id:'steam',                 type:'recipe',        machines:[ 'boiler' ],                    time:1,       inputs:{ water:60 }, outputs:{ steam:60 }, },
]

class Recipe extends Base {

    constructor(game, data) {
        super(game, data)
        
        this.time = data.time
        this.inputs = data.inputs
        this.outputs = data.outputs
    }
}

//------------------------------------------------------------------------------

var itemData = [

    {   id:'coal',                  type:'item',        max:50, },
    {   id:'copper',                type:'item',        max:50, },
    {   id:'copperPlate',           type:'item',        max:50, },
    {   id:'copperCable',           type:'item',        max:50, },
    {   id:'electronicCircuit',     type:'item',        max:50, },
    {   id:'iron',                  type:'item',        max:50, },
    {   id:'ironGearWheel',         type:'item',        max:50, },
    {   id:'ironPlate',             type:'item',        max:50, },
    {   id:'pipe',                  type:'item',        max:50, },
    {   id:'steam',                 type:'item',        max:1200, },
    {   id:'stone',                 type:'item',        max:50, },
    {   id:'water',                 type:'item',        max:1200, },
]

class Item extends Base {

    constructor(game, data) {
        super(game, data)
        
        this.max = data.max
    }
    
    //---
    
    getMax() {
    
        let ret = this.max
        return ret
    }
}

//------------------------------------------------------------------------------

var machineData = [

    {   id:'manual',        type:'machine',     auto:false,     speed:1,    },
    {   id:'furnace1',      type:'machine',     auto:true,      speed:1,    energy:{ id:'coal', count:0.02 }, },
    {   id:'drill1',        type:'machine',     auto:true,      speed:1,    energy:{ id:'coal', count:0.14 }, },
    {   id:'offshorePump',  type:'machine',     auto:true,      speed:1,    },
    {   id:'boiler',        type:'machine',     auto:true,      speed:1,    energy:{ id:'coal', count:2 }, },
]

class MachineGroup {

    constructor(machine) {
    
        this.machine = machine
        
        this.count = 0
        this.state = 'paused'
        this.recipe = null        
        this.remainingTime = null
    }
    
    //---
    
    getEnergyConsumed() {
        
        if (this.machine.energy == null) return null
        
        let ret = 0
        ret = this.machine.energy.count * this.count * this.machine.coeffEnergy
        
        return { id:this.machine.energy.id, count:ret }
    }
    
    getTime(recipe) {
        
        let ret = recipe.time / this.machine.speed
        ret *= this.machine.coeffTime        
        
        return ret
    }
    
    getInputs(recipe) {
    
        if (recipe.inputs == null) return null
        
        let counr = this.count > 0 ? this.count : 1
        
        let ret = {}        
        for (let id in recipe.inputs) {
            let input = recipe.inputs[id]            
            ret[id] = input * counr
        }
        
        return ret
    }
    
    getOutputs(recipe) {
        
        let counr = this.count > 0 ? this.count : 1
        
        let ret = {}        
        for (let id in recipe.outputs) {
            let output = recipe.outputs[id]            
            ret[id] = output * counr * this.machine.coeffOutputs
        }
        
        return ret
    }
    
    canProduce() {
    
        if (this.count <= 0) return false
        if (this.recipe == null) return false
        
        let energyConsumed = this.getEnergyConsumed()
        if (energyConsumed && this.machine.game.bases[energyConsumed.id].count <= 0) return false
        
        let outputs = this.getOutputs(this.recipe)
        for (let id in outputs) {
            let output = outputs[id]            
            if (this.machine.game.bases[id].type == 'item' && this.machine.game.bases[id].count >= this.machine.game.bases[id].getMax()) return false
        }
        
        let inputs = this.getInputs(this.recipe)
        if (inputs == null) return true
        
        for (let id in inputs) {
            let input = inputs[id]            
            if (this.machine.game.bases[id].type == 'item' && input > this.machine.game.bases[id].count) return false
            else if (this.machine.game.bases[id].type == 'machine' && input > (this.machine.game.bases[id].count - this.machine.game.bases[id].getAssignedCount())) { return false; }
        }
        
        return true
    }
    
    //---
    
    assignRecipe(recipe) {
        
        this.recipe = recipe
        
        this.state = 'paused'
        this.remainingTime = this.getTime(this.recipe)
    }
    
    startProducing() {
    
        if (this.canProduce() == true) {
                    
            this.state = 'running'
            if (this.remainingTime == this.getTime(this.recipe)) {
            
                let inputs = this.getInputs(this.recipe)
                if (inputs != null) {
                    for (let id in inputs) {
                        let input = inputs[id]
                        
                        this.machine.game.bases[id].count -= input
                    }
                }
            }
        }
        else {
        
            this.state = 'waiting'
            this.remainingTime = this.getTime(this.recipe)
        }
    }
    
    pauseProducing() {
        
        if (this.state == 'running') {
            
            let inputs = this.getInputs(this.recipe)
            if (inputs != null) {
                for (let id in inputs) {
                    let input = inputs[id]
                    
                    this.machine.game.bases[id].count += input
                }
            }
        }
        
        this.state = 'paused'
        this.remainingTime = this.getTime(this.recipe)
    }

    doProduce(delta) {
        
        if (this.state == 'waiting') {                    
            this.startProducing()
        }
        
        if (this.state == 'running') {
            
            this.remainingTime -= delta
            
            let energyConsumed = this.getEnergyConsumed()
            if (energyConsumed) {
                this.machine.game.bases[energyConsumed.id].count -= energyConsumed.count * delta
                if (this.machine.game.bases[energyConsumed.id].count <= 0) {
                    this.machine.game.bases[energyConsumed.id].count = 0
                    this.state = 'waiting'
                    return
                }                
            }
            
            if (this.remainingTime <= 0) {
                                
                let outputs = this.getOutputs(this.recipe)
                for (let id in outputs) {
                    let output = outputs[id]
                    let base = this.machine.game.bases[id]
                    
                    base.count += output
                    if (base.type == 'item' && base.count > base.getMax()) base.count = base.getMax()
                }
                
                if (this.machine.auto == true) {                
                
                    this.remainingTime = this.getTime(this.recipe)
                    this.startProducing()
                }
                else {
                
                    this.state = 'paused'
                    this.remainingTime = this.getTime(this.recipe)
                }
            }
        }
    }
}

class Machine extends Base {

    constructor(game, data) {
        super(game, data)
        
        this.auto = data.auto
        this.speed = data.speed
        this.energy = data.energy
        
        this.modules = null
        
        this.coeffTime = 1.0
        this.coeffEnergy = 1.0
        this.coeffOutputs = 1.0

        this.groups = []
        this.availableRecipes = []
    }
    
    //---
    
    getAssignedCount() {
        
        let ret = 0
        this.groups.forEach(group => { ret += group.count })
        return ret
    }
    
    getEnergyConsumed() {
    
        let ret = 0
        this.groups.forEach(group => {
            if (group.state == 'running') {
                ret += group.getEnergyConsumed().count
            }
        })
        return ret
    }
    
    //---
    
    doProduce(delta) {
    
        this.groups.forEach(group => { group.doProduce(delta) })
    }
}

//------------------------------------------------------------------------------

class Game {

    constructor() {
        
        this.paused = false
        this.timePlayed = 0
        
        this.bases = {}
        
        this.items = {}
        itemData.forEach(data => {
        
            let item = new Item(this, data)
            this.bases[data.id] = item
            this.items[data.id] = item
        })
        
        this.machines = {}
        machineData.forEach(data => {
        
            let machine = new Machine(this, data)
            this.bases[data.id] = machine
            this.machines[data.id] = machine
        })
        
        this.recipes = {}
        recipeData.forEach(data => {
        
            let recipe = new Recipe(this, data)
            this.recipes[data.id] = recipe
            
            data.machines.forEach(machineId => {
                
                let machine = this.machines[machineId]
                let group = new MachineGroup(machine)
                machine.groups.push(group)                
                if (machineId == 'manual') group.count = 1
                group.assignRecipe(recipe)
            })
        })
        
    }
        
    //---
    
    checkMax(baseId) {
    
        let base = this.bases[baseId]
        if (base == null) return false
        
        if (base.type == 'item' && base.count >= base.getMax()) return false
        
        return true
    }
    
    getAvailableCount(baseId) {
    
        let ret = 0
        
        let base = this.bases[baseId]
        if (base == null) return ret
        
        if (base.type == 'item') ret = base.count
        else if (base.type == 'machine') ret = base.count - base.getAssignedCount()
        
        return ret
    }
    
    getItemProd(itemId) {
    
        let ret = 0
        
        for (let id in this.machines) {
            let machine = this.machines[id]
            machine.groups.forEach(group => {
                if (group.state == 'running') {
                    
                    if (machine.energy && machine.energy.id == itemId) {
                        ret -= group.getEnergyConsumed().count
                    }
                    
                    let inputs = group.getInputs(group.recipe)
                    if (inputs) {
                        for (let inputId in inputs) {
                            let inputCount = inputs[inputId]
                            if (inputId == itemId) {
                                ret -= inputCount / group.getTime(group.recipe)
                            }
                        }
                    }
                    
                    let outputs = group.getOutputs(group.recipe)
                    for (let outputId in outputs) {
                        let outputCount = outputs[outputId]
                        if (outputId == itemId) {
                            ret += outputCount / group.getTime(group.recipe)
                        }
                    }
                }            
            })
        }
        
        return ret
    }
        
    //---
    
    load(data) {
        
        if (data.paused != null) this.paused = data.paused
        if (data.timePlayed != null) this.timePlayed = data.timePlayed
        
        if (data.items) {
            for (let id in data.items) {
                let dataItem = data.items[id]
                
                let item = this.items[id]
                if (item) {
                
                    item.count = dataItem.count
                }
            }
        }

        if (data.machines) {
            for (let id in data.machines) {
                let dataMachine = data.machines[id]
                
                let machine = this.machines[id]
                if (machine) {
                
                    machine.count = dataMachine.count
                    
                    let index = 0
                    machine.groups.forEach(group => {
                        
                        let dataGroup = dataMachine.groups[index]
                        if (dataGroup) {
                        
                            group.count = dataGroup.count
                            group.state = dataGroup.state
                            group.remainingTime = dataGroup.remainingTime
                        }
                        
                        index++
                    })
                }
            }
        }
    }
    
    save() {
    
        let ret = {
            
            paused: this.paused,
            timePlayed: this.timePlayed,
            
            items: {},
            machines: {},
        }
        
        for (let id in this.items) {
            let item = this.items[id]
            
            ret.items[item.id] = {            
                count: item.count,
            }
        }
        
        
        for (let id in this.machines) {
            let machine = this.machines[id]
            
            ret.machines[machine.id] = {            
                count: machine.count,
                groups: []
            }
            
            machine.groups.forEach(group => {
            
                let data = {
                    count: group.count,
                    state: group.state,
                    remainingTime: group.remainingTime,
                }
                
                ret.machines[machine.id].groups.push(data)
            })
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
                
                for (let id in this.machines) {
                    let machine = this.machines[id]                    
                    machine.doProduce(cycleDelta)
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
            
            currentTabId: 'machines',
            
            currentMachineSubTabId: 'manual',
            
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
        
        setCurrentMachineSubtabId(subtabId) { this.currentMachineSubTabId = subtabId },
        
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
