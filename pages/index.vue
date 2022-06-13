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
                        <TopMenuTab tabId="production" icon="fa-industry" />
                        <TopMenuTab tabId="settings" icon="fa-cogs" class="ms-auto" />
                    </div>
                </div>
            </div>
            
            <div class="position-fixed top-0 bottom-0 start-0 end-0 py-3" style="margin-top:95px; margin-bottom:50px;">
                <div class="h-100 position-relative container scrollbar">
                    
                    <div v-if="currentTabId == 'production'" class="row g-3">
                        <div class="col-12">
                            <div class="mb-1 small"><span class="text-muted text-uppercase">Machines</span></div>
                            <div class="row g-1 align-items-center">
                                <MachineAssigned id="furnace1" assignedCount="4" totalCount="10" />
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

//------------------------------------------------------------------------------

class Game {

    constructor() {
        
        this.paused = false
        this.timePlayed = 0
        
    }
        
    //---
    
    init() {
               
    }
    
    load(data) {
        
        if (data.paused != null) this.paused = data.paused
        if (data.timePlayed != null) this.timePlayed = data.timePlayed
    }
    
    save() {
    
        let ret = {
            
            paused: this.paused,
            timePlayed: this.timePlayed,
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
            
            tutorialEnabled: true,
            
            //---
            
            currentTabId: 'production',
            
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
            
                if (this.load() == false) {
                    this.init()
                }
                
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
