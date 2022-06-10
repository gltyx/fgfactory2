<template>
    <div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
    
        <div v-if="isMobile == true" class="position-absolute bg-grid top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
            <div class="p-3">
                <div class="row g-3">
                    <div class="col-12 text-center"><img :src="require(`~/assets/icon.png`)" width="36px" class="rounded" /></div>
                    <div class="col-12 text-normal text-center h5">FG Building</div>
                    <div class="col-12 text-primary text-center">Your device is not supported for the moment.</div>
                    <div class="col-12 text-normal text-center">To be informed when your device will be supported and new features will be ready, please join Discord server.</div>
                    <div class="col-12 d-flex justify-content-center">
                        <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-primary">
                            <img :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                            <span class="ms-2">Discord</span>
                        </a>
                    </div>                
                </div>
            </div>
        </div>

        <div v-if="toastText" class="position-absolute" style="bottom:52px; right:25%; left:25%; z-index:100;">
            <div class="d-flex justify-content-center">
                <div class="toast show toast-body py-2 bg-transparent text-center">
                    <span :class="{ 'text-primary':toastType == 'info', 'text-danger':toastType == 'error', 'text-success':toastType == 'success' }" v-html="toastText"></span>
                </div>
            </div>
        </div>
                
        <div v-if="popupWipe" class="position-absolute top-0 bottom-0 start-0 end-0 bg-overlay d-flex align-items-center justify-content-center" style="z-index:100;">
            <div class="card" style="width:380px; overflow-y:auto; overflow-x:hidden; max-height:642px;">
                <div class="card-header">
                    <div class="row gx-2 align-items-center">
                        <div class="col">
                            <span>Hard Reset</span>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-primary p-1" @click="popupWipe = false;">
                                <span><i class="fas fa-fw fa-times"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-danger">Are you sure you want to wipe your data?<br>You will lose ALL your progress!</span>
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" @click="resetGameData(); popupWipe = false;">
                                <span>Ok</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div v-if="popupSupport" class="position-absolute top-0 bottom-0 start-0 end-0 bg-overlay d-flex align-items-center justify-content-center" style="z-index:100;">
            <div class="card" style="width:380px; overflow-y:auto; overflow-x:hidden; max-height:642px;">
                <div class="card-header">
                    <div class="row gx-2 align-items-center">
                        <div class="col">
                            <span>Support</span>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="col-auto btn btn-primary p-1" @click="popupSupport = null">
                                <span><i class="fas fa-fw fa-times"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-12 text-center">
                            <span>I like the donation system because there is nothing forcing you to donate other than out of the goodness of people's hearts. If you like the game and want more content faster, I would be happy to put more time towards this game if I felt that it is paying off.</span>
                        </div>
                        <div class="col-3 text-center">
                            <a href="https://www.patreon.com/bePatron?u=61283131" target="_blank" class="btn btn-primary" style="width:80px;">
                                <div class="col-12"><img :src="require(`~/assets/ui/patreon.png`)" width="24px" height="24px" /></div>
                                <div class="mt-2">Become a supporter</div>
                            </a>
                        </div>
                        <div class="col-3 text-center">
                            <a href="https://ko-fi.com/freddecgames" target="_blank" class="btn btn-primary" style="width:80px;">
                                <div class="col-12"><img :src="require(`~/assets/ui/kofi.png`)" width="24px" height="24px" /></div>
                                <div class="mt-2">Buy me a Ko-fi</div>
                            </a>
                        </div>
                        <form class="col-3 text-center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
                            <button type="submit" class="btn btn-primary" style="width:80px;">
                                <div class="col-12"><img :src="require(`~/assets/ui/paypal.png`)" width="24px" height="24px" /></div>
                                <div class="mt-2">Make a donation</div>
                            </button>
                        </form>
                        <div class="col-3 text-center">
                            <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-primary" style="width:80px;">
                                <div class="col-12"><img :src="require(`~/assets/ui/discord.png`)" width="24px" height="24px" alt="Discord" /></div>
                                <div class="mt-2">News and information</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="popupTutorial" class="position-absolute top-0 bottom-0 start-0 end-0 bg-overlay d-flex align-items-center justify-content-center" style="z-index:100;">
            <div class="card" style="width:380px; overflow-y:auto; overflow-x:hidden; max-height:642px;">
                <div class="card-header">
                    <div class="row gx-2 align-items-center">
                        <div class="col">
                            <span>Tutorial</span>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="col-auto btn btn-primary p-1" @click="popupTutorial = null; disableTutorial();">
                                <span><i class="fas fa-fw fa-times"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div v-if="popupTutorial.id == 'tut0'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Welcome</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">You finally woke up after your crash. You are on an hostile planet and you want to leave as soon as possible.</span>
                            <span class="text-normal">To do that you have to build a <span class="text-white">Rocket</span> from scratch. You have nothing but you could mine resources from this planet.</span>
                            <span class="text-normal">With resources, you build items, machines and perform researches to unlock new items, new machines then discover the recipe to build your <span class="text-white">Rocket</span>.</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-primary">Let me teach you the first steps!<br>You could disable this tutorial. To open it again, click on the button <i class="fas fa-fw fa-question-circle"></i> in the bottom bar of the screen.</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-danger">This game is still under development so bugs and data lost could happen! Play as your own risks!</span>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial.done = true; popupTutorial = null; showPopupTutorial();">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut1'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Iron Mining</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal"><span class="text-white">Iron</span> is the first ore that you could mine manually. To manually mine ore, you just have to click on <i class="fas fa-fw fa-play"></i> button.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Manually mine 5 <span class="text-white">Iron</span></div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut2'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Stone Mining</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">Congrats!. You unlock <span class="text-white">Iron Plate</span> and <span class="text-white">Masonry</span> tab. As you see, you cannot produce <span class="text-white">Iron Plate</span> manually. You have to build a <span class="text-white">Stone Furnace</span> to do that. To build a <span class="text-white">Stone Furnace</span> you have to manually mine <span class="text-white">Stone</span>.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Manually mine 5 <span class="text-white">Stone</span></div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut3'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Iron Plate Production</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">Now with <span class="text-white">Stone</span>, you could build a <span class="text-white">Stone Furnace</span> to automate <span class="text-white">Iron Plate</span> production.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Build 1 <span class="text-white">Stone Furnace</span> to automate <span class="text-white">Iron Plate</span> production</div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut4'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Iron Production</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">Congrats! You automated <span class="text-white">Iron Plate</span> production. If you want you could stop the production by clicking on <i class="fas fa-fw fa-stop"></i> button. Now since your <span class="text-white">Iron Plate</span> production is automated, it is consuming your <span class="text-white">Iron</span> automatically. When there is not enought <span class="text-white">Iron</span> the <i class="text-danger fas fa-fw fa-stop"></i> button will appear: this means there is a lack of input resource to produce automatically.</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">So to continue to produce <span class="text-white">Iron Plate</span> automatically, you have to produce <span class="text-white">Iron</span> automatically too. To do that you have to build a <span class="text-white">Basic Drill</span>.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Mine manually <span class="text-white">Stone</span> and <span class="text-white">Iron</span> to have enough <span class="text-white">Iron Plate</span></div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Build 1 <span class="text-white">>Basic Drill</span></div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut5'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Stone Production</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">Now your <span class="text-white">Iron</span> production chain is fully automated! Let's do the same for the <span class="text-white">Stone</span> chain.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Build 1 <span class="text-white">Stone Furnace</span> to automate <span class="text-white">Stone</span> production</div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut6'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Copper Production Chain</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">You made a big step to escape from this hostile planet : your <span class="text-white">Iron</span> and <span class="text-white">Stone</span> chains are both automated!</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">You just unlocked the <span class="text-white">Copper</span> production chain. Let's automate it.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Build 1 <span class="text-white">Basic Drill</span> to automate <span class="text-white">Copper</span> production</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Build 1 <span class="text-white">Stone Furnace</span> to automate <span class="text-white">Copper Plate</span> production</div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut7'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Labs</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">Perfect! Productions are automated so now we have to focus on researching new productions to build the <span class="text-white">Rocket</span>.</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">Researches are performed in <span class="text-white">Lab</span>: one <span class="text-white">Lab</span> could perform one research at a time. So the more <span class="text-white">Labs</span> you have, the more researches you could perform in the same time.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Build 1 <span class="text-white">Lab</span> to be able to perform researches</div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut8'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">Packs and Researches</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">With one Lab you are able to perform researches and to produce packs.</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">Each research needs packs to be performed. Each research unlocks new productions, new buildings or new researches. THe first available research is <span class="text-white">Automation 1</span> that will unlock assembler 1 buildings and tier 1 storages.</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Current Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Produce 10 <span class="text-white">Red Packs</span></div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Research <span class="text-white">Automation 1</span></div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null; disableTutorial();">
                                <span>Disable</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="popupTutorial = null;">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="popupTutorial.id == 'tut9'" class="row g-3">
                        <div class="col-12 text-center">
                            <span class="text-white h4">End of Tutorial</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">You unlocked <span class="text-white">Assembler</span> buildings that allow you to automate packs production. So now, you know what to do to build <span class="text-white">Rocket</span> and to escape from this hostile planet: produce packs, perform researches, unlock new productions, produce more items!</span>
                        </div>
                        <div class="col-12">
                            <div class="text-uppercase text-muted small mb-1">Final Objective</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Perform all researches</div>
                            <div class="text-normal ps-4 mb-1"><i class="fas fa-fw fa-caret-right"></i> Build 100 <span class="text-white">Rocket Parts</span></div>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-white h5">Good luck!</span>
                        </div>
                        <div class="col-12 text-center">
                            <span class="text-normal">To be kept informed about other games and the future of this one, join Discord. And if you want to support the job done, please support the Dev!</span>
                        </div>
                        <div class="col-12">
                            <div class="row gx-2 align-items-center">
                                <div class="col-auto">
                                    <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-primary">
                                        <img :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                        <span class="ms-2">Discord</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-primary" @click="popupTutorial.done = true; popupTutorial = null; showSupportPopup();">
                                        <i class="fas fw fa-hand-holding-heart"></i>
                                        <span class="ms-2">Support</span>
                                    </button>
                                </div>
                                <div class="col-auto">
                                    <button type="button" class="btn btn-primary" @click="popupTutorial.done = true; popupTutorial = null; disableTutorial();">
                                        <span>Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isMobile == false && started == false" class="position-absolute bg-grid top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
            <div class="p-3">
                <div class="row g-3">
                    <div class="col-12 text-center"><img :src="require(`~/assets/icon.png`)" width="36px" class="rounded" /></div>
                    <div class="col-12 text-normal text-center h5">FG Building</div>
                    <div v-if="error == null" class="col-12 flicker text-primary text-center">Initializing game...</div>
                    <div v-if="error != null" class="col-12 text-center">
                        <div class="row g-3">
                            <div class="col-12 text-center">
                                <div class="text-danger">An error occured during game loading</div>
                                <div class="text-danger">"{{ this.error }}"</div>
                            </div>
                            <div class="col-12">
                                <span class="text-normal">To ask for help, you could contact <span class="text-white">Freddec</span> on Discord with following exported data</span>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-primary">
                                    <img :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                    <span class="ms-2">Discord</span>
                                </a>
                            </div>
                            <div class="col-12">
                                <textarea spellcheck="false" rows="5" class="w-100 rounded bg-1 border-0 text-normal p-2" style="max-width:512px;">{{ exportGameData }}</textarea>
                            </div>
                            <div class="col-12">
                                <span class="text-normal">Or you could wipe your local data to restart the game at the beginning</span>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <button type="button" class="btn btn-primary text-danger" @click="showWipeDataPopup()">
                                    <span><i class="fas fa-fw fa-skull"></i></span>
                                    <span class="ms-2">Wipe Local Data</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="isMobile == false && started == true" class="w-100 h-100 position-relative">
            
            <div class="position-fixed top-0 start-0 end-0 bg-2 py-1 d-flex align-items-center">
                <div class="container">
                    <div class="row gx-2 align-items-center py-1">
                        <div class="col-auto">
                            <img :src="require(`~/assets/icon.png`)" width="20px" />
                        </div>
                        <div class="col-auto">
                            <span class="h5">FG Building</span>
                        </div>
                        <div class="col">
                            <span class="badge bg-danger text-white">Alpha version</span>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn">
                                <span class="opacity-0">...</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="position-fixed start-0 end-0 nav bg-3" style="top:49px;">
                <div class="container">
                    <div class="row gx-0 align-items-center">
                        <TopMenuTab v-if="gameItem('iron').unlocked == true" tabId="ironwork" icon="fa-drum-steelpan" />
                        <TopMenuTab tabId="settings" icon="fa-cogs" class="ms-auto" />
                    </div>
                </div>
            </div>
            
            <div v-if="currentTabId == 'settings'" class="position-fixed top-0 bottom-0 start-0 end-0" style="margin-top:101px; margin-bottom:52px;">
                <div class="container py-3 scrollbar">
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span>About</span>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-6">
                                            <div class="row g-3">
                                                <div class="col-12 text-center text-normal">This game has been designed and developed by <span class="text-white">Freddec Games</span>. To be kept informed about other games and the future of this one, join Discord server and visit our official website.</div>
                                                <div class="col-12">
                                                    <div class="row align-items-center justify-content-center">
                                                        <div class="col-auto">
                                                            <a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-primary">
                                                                <img :src="require(`~/assets/ui/discord.png`)" width="16px" height="16px" alt="Discord" />
                                                                <span class="ms-2">Discord</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-auto">
                                                            <a href="https://freddecgames.com/" target="_blank" class="btn btn-primary">
                                                                <img :src="require(`~/assets/ui/freddec.png`)" width="16px" height="16px" alt="Freddec Games" />
                                                                <span class="ms-2">Freddec Games</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 text-center text-danger">This is still under development with bugs and maybe data lost!</div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3">
                                                <div class="col-12 text-center text-normal">This game is largely inspired by the game <span class="text-white">Factorio</span> (productions, buildings, recipes, techs and etc ...)</div>
                                                <div class="col-12 text-center d-flex justify-content-center">
                                                    <a href="https://www.factorio.com/" target="_blank" class="btn btn-primary text-center">
                                                        <img :src="require(`~/assets/ui/factorio.png`)" width="16px" height="16px" alt="Factorio" />
                                                        <span class="ms-2">Factorio Offical Site</span>
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
                                    <span>Options</span>
                                </div>
                                <div class="card-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" v-model="game.options.researchedTechs" id="options_researchedTechs">
                                        <label class="form-check-label" for="options_researchedTechs">Show researched techs</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span>Hard Reset</span>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-center">
                                    <button type="button" class="btn btn-primary text-danger" @click="showWipeDataPopup()">
                                        <div class="col-12 text-center h4"><i class="fas fa-fw fa-skull"></i></div>
                                        <div class="col-12 text-center mt-2">Wipe Local<br>Data</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span>Export Save</span>
                                </div>
                                <div class="card-body">
                                    <textarea spellcheck="false" rows="5" class="w-100 rounded bg-1 border-0 text-normal p-2">{{ exportGameData }}</textarea>                                        
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <div class="h-100 card">
                                <div class="card-header">
                                    <span>Import Save</span>
                                </div>
                                <div class="card-body">
                                    <textarea spellcheck="false" rows="5" class="w-100 rounded bg-1 border-0 text-normal p-2" v-model="importExportData"></textarea>
                                    <div class="mt-1 d-flex justify-content-end">
                                        <button type="button" class="btn btn-primary" @click="importGameData()">
                                            <span>Import</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="position-fixed bottom-0 start-0 end-0 bg-2 py-2 d-flex align-items-center">
                <div class="container">
                    <div class="row gx-2 align-items-center">
                        <BottomButton label="Save" icon="fa-save" :click="manualSave" />
                        <BottomButton label="Support" icon="fa-hand-holding-heart" :click="showSupportPopup" />
                        <BottomButton label="Tutorial" icon="fa-question-circle" :click="enableTutorial" />
                        <div class="ms-auto col-auto">
                            <div class="text-center text-muted">Time Played</div>
                            <div class="text-center"><FormatTime :value="game.timePlayed" /></div>
                        </div>
                        <BottomButton v-if="game.paused == false" label="Pause" icon="fa-pause" :click="pauseGame" />
                        <BottomButton v-if="game.paused == true" label="Resume" icon="fa-play" :click="resumeGame" :border="true" />
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>

var itemData = [
    
]

//------------------------------------------------------------------------------

class Base {

    constructor(game, data) {
        
        this.game = game
        
        this.id = data.id
        
        this.count = 0
        this.unlocked = false
    }
}

//------------------------------------------------------------------------------

class Item extends Base {

    constructor(game, data) {
        super(game, data)
        
        this.max = data.max
        this.time = data.time
        this.desc = data.desc
        this.inputs = data.inputs
        this.outputs = data.outputs
        this.productionLevel = data.productionLevel
        
        this.auto = false
        this.state = 'paused'
        this.remainingSeconds = this.getTime()
        
        this.storages = []
        this.buildings = []
    }
    
    //---
    
    getMax() {
    
        let ret = 0
        
        for (let id in this.storages) {
            let storage = this.storages[id]
            
            ret += Math.floor(storage.storage * Math.pow(2.0, storage.count))
        }
        
        if (ret == 0) ret = this.max
        
        return ret
    }
    
    getBuildingsCount() {
    
        let ret = 0
        
        for (let id in this.buildings) {
            let building = this.buildings[id]
            
            ret += building.count
        }
        
        return ret
    }
    
    getTime() {
    
        let ret = this.time
        return ret
    }
    
    getInputs() {
        
        if (this.inputs == null) return null

        let bCount = Math.max(1, this.getBuildingsCount())
        
        let ret = {}
        
        for (let id in this.inputs) {
            let input = this.inputs[id]
            
            ret[id] = input * bCount
        }
        
        return ret
    }
    
    getOutputs() {
    
        let ret = {}
        
        let bCount = Math.max(1, this.getBuildingsCount())
        
        for (let id in this.outputs) {
            let output = this.outputs[id]
            
            ret[id] = output * bCount
        }
        
        return ret
    }
    
    canProduce() {
        
        if (this.productionLevel == 0) return false
        
        let outputs = this.getOutputs()
        for (let id in outputs) {
            let output = outputs[id]
            
            if (this.game.items[id].count >= this.game.items[id].getMax()) {            
                return false
            }
        }
        
        let inputs = this.getInputs()
        if (inputs == null) return true
        
        for (let id in inputs) {
            let input = inputs[id]
            
            if (input > this.game.items[id].count) {            
                return false
            }
        }
        
        return true
    }
    
    //---
    
    startProducing() {
    
        this.state = 'waiting'
        this.remainingSeconds = this.getTime()
    }
    
    pauseProducing() {
        
        if (this.state == 'running') {

            let inputs = this.getInputs()
            if (inputs != null) {
                for (let id in inputs) {
                    let input = inputs[id]
                    
                    this.game.items[id].count += input
                    if (this.game.items[id].count > this.game.items[id].getMax()) this.game.items[id].count = this.game.items[id].getMax()
                }
            }
        }
        
        this.state = 'paused'
        this.remainingSeconds = this.getTime()
    }
    
    produce(delta) {
        
        if (this.state == 'waiting') {
            if (this.canProduce() == true) {
                    
                this.state = 'running'
                this.remainingSeconds = this.getTime()
                
                let inputs = this.getInputs()
                if (inputs != null) {
                    for (let id in inputs) {
                        let input = inputs[id]
                        
                        this.game.items[id].count -= input
                    }
                }
            }
        }
        
        if (this.state == 'running') {
        
            this.remainingSeconds -= delta            
            if (this.remainingSeconds <= 0) {
                                
                let outputs = this.getOutputs()
                for (let id in outputs) {
                    let output = outputs[id]
                    
                    this.game.items[id].count += output
                    if (this.game.items[id].count > this.game.items[id].getMax()) this.game.items[id].count = this.game.items[id].getMax()
                    
                    this.game.items[id].onProduce()
                }
                
                if (this.auto == true) {
                
                    this.state = 'waiting'
                    this.remainingSeconds = this.getTime()
                }
                else {
                
                    this.state = 'paused'
                    this.remainingSeconds = this.getTime()
                }
            }
        }
    }
    
    onProduce() {
    
        if (this.id == 'iron' && this.count >= 5) {
        
            this.game.items['stone'].unlocked = true
            this.game.items['ironPlate'].unlocked = true
            
            this.game.buildings['ironPlateT1'].unlocked = true
        }
    }
}

//------------------------------------------------------------------------------

class Game {

    constructor() {
        
        this.paused = false
        this.timePlayed = 0
        
        this.items = {}
        itemData.forEach(data => { this.items[data.id] = new Item(this, data) })
    }
    
    //---
    
    init() {
    
    }
    
    load(data) {
        
        if (data.paused != null) this.paused = data.paused
        if (data.timePlayed != null) this.timePlayed = data.timePlayed
        
        for (let id in data.items) {
            let dataItem = data.items[id]
            
            let item = this.items[id]
            if (item) {
            
                item.unlocked = dataItem.unlocked
                item.count = dataItem.count
                item.state = dataItem.state
                if (item.state == 'running') item.remainingSeconds = dataItem.remainingSeconds
            }
        }
    }
    
    save() {
    
        let ret = {
            
            paused: this.paused,
            timePlayed: this.timePlayed,
            
            items: {},
        }
        
        for (let id in this.items) {
            let item = this.items[id]
            
            ret.items[item.id] = {
            
                count: item.count,
            }
        }                
        
        return ret
    }
    
    //---
    
    mainLoop(deltaTimeMs) {
        
        if (this.paused == false) {
        
            let delta = deltaTimeMs / 1000
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
            localStorageName: 'fgfactory',
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
            
            currentTabId: 'ironwork',
            
            //---
            
            game: new Game(),
            
            //---
            
            tutorials: {
            
                tut0: { id:'tut0', done:false, check: function(app) { return false },                                           action: function(app) { app.setCurrentTabId('ironwork');    app.setCurrentIronworkPageId('iron'); }, },
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
            
                this.init()
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
                if (!text) return console.warn('Load failed')
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
            
            let savedData = this.game.getSavedData()
            
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
