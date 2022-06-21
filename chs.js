/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Continue": "继续",
    "Disable": "禁用",
    "FG Factory": "异星工厂网页版",
    "from scratch. You have nothing but you could mine resources from this planet.": "从头开始。你什么都没有，但你可以从这个星球上开采资源。",
    "in the bottom bar of the screen.": "在屏幕的底部栏中。",
    "Initializing game...": "初始化游戏...",
    "Iron": "铁矿石",
    "Ironwork": "炼铁",
    "Let me teach you the first steps!": "让我教你第一步！",
    "Manual": "手动",
    "Pause": "暂停",
    "Production": "生产",
    "Rocket": "火箭",
    "Support": "支持",
    "This game is still under development so bugs and data lost could happen! Play as your own risks!": "此游戏仍在开发中，因此可能会发生错误和数据丢失！风险自负！",
    "Time Played": "游戏时长",
    "To do that you have to build a": "为此，您必须建造一个",
    "Tutorial": "教程",
    "Weapons": "武器",
    "Welcome": "欢迎",
    "With resources, you build items, machines and perform researches to unlock new items, new machines then discover the recipe to build your": "使用资源，您可以建造物品、机器并进行研究以解锁新物品，新机器然后发现配方来构建您的",
    "You could disable this tutorial. To open it again, click on the button": "您可以禁用本教程。要再次打开它，请点击按钮",
    "You finally woke up after your crash. You are on an hostile planet and you want to leave as soon as possible.": "坠机后你终于醒了。 你在一个充满敌意的星球上，你想尽快离开。",
    "button.": "按钮。",
    "Current Objective": "当前目标",
    "Iron Mining": "开采铁矿石",
    "is the first ore that you could mine manually. To manually mine ore, you just have to click on": "是您可以手动开采的第一种矿石。 要手动开采矿石，您只需点击",
    "Manually mine 5": "手动开采 5",
    "Game paused!": "游戏已暂停！",
    "Game resumed!": "游戏已恢复！",
    "Resume": "返回",
    "About": "关于",
    "and": "和",
    ". To be kept informed about other games and the future of this one, join Discord server and visit our official website.": ". 要随时了解其他游戏和这款游戏的未来，请加入 Discord 服务器并访问我们的官方网站。",
    "(productions, buildings, recipes, techs and etc ...)": "（生产、建筑、配方、技术等......）",
    "Congrats!. You unlock": "恭喜！。 你解锁了",
    "Data": "数据",
    "Discord": "Discord",
    "Export Save": "导出存档",
    "Factorio": "异星工厂",
    "Factorio Offical Site": "异星工厂官方网站",
    "Flaticon": "平面图标",
    "Fontawesome": "Fontawesome",
    "Freddec Games": "Freddec Games",
    "Game saved in local storage!": "游戏保存在本地存储中！",
    "Hard Reset": "硬重置",
    "Icons are provided by": "图标由提供",
    "Import Save": "导入存档",
    "Iron Plate": "铁板",
    "manually. You have to build a": "手动。 你必须建造一个",
    "Masonry": "采石",
    "Options": "选项",
    "Show researched techs": "显示已研究的技术",
    "Stone": "石头",
    "Stone Furnace": "石炉",
    "Stone Mining": "开采石头",
    "tab. As you see, you cannot produce": "标签。 如您所见，您无法生产",
    "This game has been designed and developed by": "这个游戏是由设计和开发的",
    "This game is largely inspired by the game": "这个游戏很大程度上是受到游戏的启发",
    "This is still under development with bugs and maybe data lost!": "这仍在开发中，有错误，可能会丢失数据！",
    "to do that. To build a": "要做到这一点。 建立一个",
    "Wipe Local": "硬重置",
    "you have to manually mine": "你必须手动开采",
    ", you could build a": "，你可以建造一个",
    ">Basic Drill": ">基础钻",
    "Automated": "自动化",
    "Automated production": "自动化生产",
    "automatically too. To do that you have to build a": "也自动。 为此，您必须建造一个",
    "automatically, you have to produce": "自动地，你必须生产",
    "automatically. When there is not enought": "自动地。 当没有足够的时候",
    "Basic Drill": "基础钻",
    "Building": "建筑",
    "button will appear: this means there is a lack of input resource to produce automatically.": "按钮将出现：这意味着缺少自动生成的输入资源。",
    "button. Now since your": "按钮。 现在自从你的",
    "Congrats! You automated": "恭喜！ 你自动化了",
    "Furnace": "炉",
    "Iron Plate Production": "铁板生产",
    "Iron Production": "铁生产",
    "Mine manually": "手动挖矿",
    "Mining Drill": "采矿钻",
    "None": "无",
    "Now with": "现在有了",
    "production": "生产",
    "production is automated, it is consuming your": "生产是自动化的，它正在消耗你的",
    "production.": "生产。",
    "production. If you want you could stop the production by clicking on": "生产。 如果你愿意，你可以通过点击停止生产",
    "So to continue to produce": "所以要继续生产",
    "the": "",
    "to automate": "自动化",
    "to have enough": "有足够的",
    "Copper": "铜矿石",
    "Copper Plate": "铜板",
    "Electronic": "电子",
    "Decrease research time": "研究时间减少",
    "Lab": "实验室",
    "Techs": "科技",
    "Red Pack": "红瓶",
    "Researches": "研究",
    "Unlocks Assembler and Chest": "解锁组装器和箱子",
    "Assembler": "组装器",
    "Chest": "箱子",
    "Double storage": "储量翻倍",
    "Green Science": "绿瓶科学",
    "Steel Tech": "钢科技",
    "Stone Brick": "石砖",
    "Storage": "存储",
    "Unlocks Green Pack production": "解锁 绿瓶 生产",
    "Unlocks Steel production, tier 2 storages": "解锁钢生产、2 级存储",
    "Engine Tech": "引擎科技",
    "Steel Plate": "钢板",
    "Unlocks Engine production": "解锁引擎生产",
    "Green Pack": "绿瓶",
    "Unlocks Concrete production": "解锁混凝土生产",
    ": one": ": 一个",
    "and to escape from this hostile planet: produce packs, perform researches, unlock new productions, produce more items!": "并逃离这个充满敌意的星球：生产包装、进行研究、解锁新产品、生产更多物品！",
    "buildings that allow you to automate packs production. So now, you know what to do to build": "允许您自动化包装生产的建筑物。所以现在，你知道如何构建",
    "chain.": "链。",
    "chains are both automated!": "链条都是自动化的！",
    "Close": "关闭",
    "Copper Production Chain": "铜生产链",
    "could perform one research at a time. So the more": "一次可以进行一项研究。所以越多",
    "Each research needs packs to be performed. Each research unlocks new productions, new buildings or new researches. THe first available research is": "每项研究都需要进行打包。每项研究都会解锁新产品、新建筑或新研究。第一个可用的研究是",
    "End of Tutorial": "教程结束",
    "Final Objective": "最终目标",
    "Good luck!": "祝你好运！",
    "Labs": "实验室",
    "Now your": "现在你的",
    "Packs and Researches": "组装和研究",
    "Perfect! Productions are automated so now we have to focus on researching new productions to build the": "完美的！制作是自动化的，所以现在我们必须专注于研究新的制作来构建",
    "Perform all researches": "进行所有研究",
    "Produce 10": "生产 10",
    "production chain is fully automated! Let's do the same for the": "生产链全自动化！让我们对",
    "production chain. Let's automate it.": "生产链。让我们自动化它。",
    "Red Packs": "红瓶",
    "Research": "研究",
    "Researches are performed in": "研究在",
    "Rocket Parts": "火箭零件",
    "Stone Production": "石材生产",
    "that will unlock assembler 1 buildings and tier 1 storages.": "这将解锁 组装器 1 建筑物和 1 阶仓库。",
    "to be able to perform researches": "能够进行研究",
    "To be kept informed about other games and the future of this one, join Discord. And if you want to support the job done, please support the Dev!": "要随时了解其他游戏以及这款游戏的未来，请加入 Discord。如果你想支持完成的工作，请支持开发！",
    "With one Lab you are able to perform researches and to produce packs.": "通过一个实验室，您可以进行研究并生产包装。",
    "you have, the more researches you could perform in the same time.": "你拥有的，你可以在同一时间进行的研究越多。",
    "You just unlocked the": "你刚刚解锁了",
    "You made a big step to escape from this hostile planet : your": "你为逃离这个充满敌意的星球迈出了一大步：你的",
    "You unlocked": "你解锁了",
    "Concrete Tech": "混凝土科技",
    "Barrel": "桶",
    "Battery": "电池",
    "Battery Tech": "电池科技",
    "Blue Pack": "蓝瓶",
    "Blue Science": "蓝瓶科学",
    "Chemical Plant": "化工厂",
    "Chemistry": "化学",
    "Engine": "引擎",
    "Fluid Handling": "流体处理",
    "Heavy Oil": "重油",
    "Light Oil": "轻油",
    "Offshore Pump": "供水泵",
    "Oil": "油",
    "Oil Refinery": "炼油厂",
    "Petroleum Gas": "石油气",
    "Plastic Bar": "塑料棒",
    "Plastics": "塑料",
    "Pumpjack": "抽油机",
    "Sulfur": "硫",
    "Sulfur Tech": "硫磺科技",
    "Sulfuric Acid": "硫酸",
    "Unlocks all oil productions": "解锁所有石油产品",
    "Unlocks Battery production": "解锁电池生产",
    "Unlocks Blue Pack production": "解锁蓝包生产",
    "Unlocks Plastic Bar production": "解锁塑料条生产",
    "Unlocks Solid Fuel production": "解锁固体燃料生产",
    "Unlocks Sulfur and Acid Sulfuric productions": "解锁硫磺和酸性硫酸产品",
    "Unlocks Water production": "解锁水生产",
    "Water": "水",
    "Concrete": "混凝土",
    "Electric Engine": "电动引擎",
    "Electric Engine Tech": "电动引擎科技",
    "Electronics": "电子产品",
    "Lubricant": "润滑剂",
    "Lubricant Tech": "润滑剂科技",
    "Pistol": "手枪",
    "Purple Pack": "紫瓶",
    "Purple Science": "紫色科学",
    "Rocket Fuel": "火箭燃料",
    "Rocket Fuel Tech": "火箭燃料技术",
    "Rocket Part": "火箭零件",
    "Rocket Tech": "火箭科技",
    "Solid Fuel": "固体燃料",
    "Unlocks Electric Engine production": "解锁电动发动机生产",
    "Unlocks Lubricant production": "解锁润滑油生产",
    "Unlocks Processing Unit production": "解锁处理单元的生产",
    "Unlocks Purple Pack production": "解锁 紫瓶 生产",
    "Unlocks Rocket Fuel production": "解锁火箭燃料生产",
    "Unlocks Rocket Part production": "解锁火箭零件生产",
    "Unlocks Yellow Pack production": "解锁黄瓶生产",
    "Yellow Pack": "黄瓶",
    "Yellow Science": "黄色科学",
    "Manual production": "手动生产",
    "Processing Unit": "处理单元",
    "Rocket Silo": "火箭发射井",
    "To be informed when your device will be supported and new features will be ready, please join Discord server.": "要获知您的设备何时受支持以及新功能何时准备就绪，请加入 Discord 服务器。",
    "Your device is not supported for the moment.": "暂时不支持您的设备进行游戏。",
    "Are you sure you want to wipe your data?": "您确定要擦除游戏数据吗？",
    "Ok": "确定",
    "You will lose ALL your progress!": "您将失去所有的游戏进度，从头开始！",
    "Alpha version": "Alpha 版",
    "Alien Tech": "外星科技",
    "Explosives": "炸药",
    "Unlocks Coal and Explosive productions": "解锁煤炭和炸药生产",
    "Unlocks Pistol weapon": "解锁手枪武器",
    "Unlocks Robotics 2 research": "解锁研究 机器人学 2",
    "Alien Egg": "虫巢",
    "Aliens": "虫族",
    "Bullet": "子弹",
    "Coal": "煤",
    "Gray Pack": "灰瓶",
    "Piercing": "穿甲弹",
    "Shotgun Shell": "霰弹",
    "To collect Alien Eggs you have to build weapons.": "要收集虫巢，您必须制造武器。",
    "Construction Robot": "建造机器人",
    "Gray Science": "灰色科学",
    "Rocketry": "火箭学",
    "Unlocks Combat Shotgun weapon": "解锁战斗霰弹枪武器",
    "Unlocks Construction Robot buildings": "解锁建造机器人建筑",
    "Unlocks Gray Pack production": "解锁灰瓶生产",
    "Unlocks Piercing ammunition": "解锁穿甲弹",
    "Unlocks Rocket ammunition": "解锁火箭弹药",
    "Unlocks Submachine Gun and Shotgun weapons": "解锁冲锋枪和霰弹枪武器",
    "Wood": "木头",
    "Ad Reward x2": "广告奖励 x2",
    "Explosive": "炸药",
    "Unlocks Artillery Turret weapon and Artillery Shell ammunition": "解锁炮塔武器和炮弹弹药",
    "Artillery Shell": "炮弹",
    "Arsenal": "军火库",
    "Artillery Turret": "炮塔",
    "Auto": "自动",
    "Combat Shotgun": "战斗霰弹枪",
    "Rocket Launcher": "火箭筒",
    "Shotgun": "霰弹枪",
    "Submachine Gun": "冲锋枪",
    // 二
    "Count": "数量",
    "Fabricated": "制造",
    "FG Factory 2": "FG异星工厂2",
    "Items": "物品",
    "Machines": "机器",
    "Raw": "原材料",
    "Science": "科学",
    "Stop all": "全部停止",
    "Storages": "存储",
    "Technologies": "技术",
    "To open the tutorial again, click on the button": "要再次打开教程，请点击按钮",
    "Boiler": "锅炉",
    "Burner Mining Drill": "热能采矿机",
    "Copper Cable": "铜缆",
    "Electric Mining Drill": "电力采矿机",
    "Electricity": "电力",
    "Electronic Circuit": "电子电路",
    "Firearm Magazine": "武器弹匣",
    "Iron Chest": "铁箱",
    "Iron Gear Wheel": "铁齿轮",
    "Iron Stick": "铁棒",
    "Pipe": "管道",
    "Radar": "雷达",
    "Steam": "蒸汽",
    "Steam Engine": "蒸汽机",
    "Unused": "未使用",
    "Uranium": "铀",
    "Used": "使用中",
    "Wooden Chest": "木箱",
    "Factorio Wiki": "异星工厂（Factorio） Wiki",
    "Wipe Local Data": "清除本地数据",
    "\"ReferenceError: costs is not defined\"": "\"引用错误: costs未定义\"",
    "An error occured during game loading": "游戏加载过程中发生错误",
    "Freddec": "Freddec",
    "on Discord with following exported data": "在Discord附上以下存档数据",
    "Or you could wipe your local data to restart the game at the beginning": "或者您可以擦除本地数据以在开始时重新启动游戏",
    "To ask for help, you could contact": "要寻求帮助，您可以联系",
    "Are you sure you want to wipe your local data?": "您确定要擦除本地数据吗？",
    "You will loose ALL your progress!": "你会失去所有的进步！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'K': 'K',
    'M': 'M',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-点击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\-([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)d ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+) ms$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) physical damages$/, '$1 物理伤害'],
    [/^([\d\.]+) explosion damages$/, '$1 爆炸伤害'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^Oil Processing ([\d\.,]+)$/, '石油加工 $1'],
    [/^([\d\.,]+) physical \+ ([\d\.,]+) explosion damages$/, '$1 物理 \+ $2 爆炸伤害'],
    [/^Military ([\d\.,]+)$/, '军事 $1'],
    [/^Robotics ([\d\.,]+)$/, '机器人学 $1'],
    [/^Build ([\d\.,]+)$/, '建造 $1'],
    [/^Automation ([\d\.,]+)$/, '自动化 $1'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);