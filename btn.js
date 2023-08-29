function test2() {
	unlock = { "战士": true, "宝藏猎人": true, "神官": true, "骑士": false, "圣骑士": false, "魔剑士": false, "术士": false, "被诅咒的骑士": false, "放逐者": false, "武僧": false, "野蛮人": false }
}


function newgame(){
	if (my_int != null) clearInterval(my_int)
	gamestate = "stop"
	gameover=true
	var s = "选择职业<br><br>"
		+ '<a href="javascript: selectcharacter(0)">战士&emsp;&emsp;&emsp;&emsp;&emsp;无惧疼痛</a><br>'
		+ '<a href="javascript: selectcharacter(1)">宝藏猎人&emsp;&emsp;&emsp;鹰眼术</a><br>'
		+ '<a href="javascript: selectcharacter(2)">神官&emsp;&emsp;&emsp;&emsp;&emsp;女神的加护</a><br>'
	if (unlock["骑士"] == true)
		s+= '<a href="javascript: selectcharacter(3)">骑士&emsp;&emsp;&emsp;&emsp;&emsp;落难贵族</a><br>'
	else s += '骑士&emsp;&emsp;&emsp;&emsp;&emsp;解锁条件：使用三个职业通关游戏<br>'
	if(unlock["圣骑士"]==true)
		s+= '<a href="javascript: selectcharacter(4)">圣骑士&emsp;&emsp;&emsp;&emsp;正义圣印</a><br>'
	else s +='圣骑士&emsp;&emsp;&emsp;&emsp;解锁条件：在不卖春的情况下通关游戏<br>'
	if (unlock["舞女"] == true)
		s += '<a href="javascript: selectcharacter(5)">舞女&emsp;&emsp;&emsp;&emsp;&emsp;人气明星</a><br>'
	else s += '舞女&emsp;&emsp;&emsp;&emsp;&emsp;解锁条件：在没有经历过败北监禁的情况下通关游戏<br>'
	if(unlock["术士"]==true)
		s+='<a href="javascript: selectcharacter(6)">术士&emsp;&emsp;&emsp;&emsp;&emsp;禁忌之书</a><br>'
	else s += '术士&emsp;&emsp;&emsp;&emsp;&emsp;解锁条件：发现上古石碑<br>'
	if(unlock["被诅咒的骑士"]==true)
		s += '<a href="javascript: selectcharacter(7)">被诅咒的骑士&emsp;淫魔诅咒</a><br>'
	else s += '被诅咒的骑士&emsp;解锁条件：在装备诅咒道具的状态下通关游戏<br>'
	if (unlock["野蛮人"] == true)
		s += '<a href="javascript: selectcharacter(8)">野蛮人&emsp;&emsp;&emsp;&emsp;轻装上阵</a><br>'
	else s += '野蛮人&emsp;&emsp;&emsp;&emsp;解锁条件：在真空状态下通关游戏<br>'
	if (unlock["武僧"] == true)
		s += '<a href="javascript: selectcharacter(9)">武僧&emsp;&emsp;&emsp;&emsp;&emsp;空灵体</a><br>'
	else s += '武僧&emsp;&emsp;&emsp;&emsp;&emsp;解锁条件：在淫乱度低于50的情况下通关游戏<br>'
	if (unlock["魔剑士"] == true)
		s += '<a href="javascript: selectcharacter(10)">魔剑士&emsp;&emsp;&emsp;&emsp;灵魂收割</a><br>'
	else s += '魔剑士&emsp;&emsp;&emsp;&emsp;解锁条件：输掉10局游戏<br>'
	if (unlock["放逐者"] == true)
		s += '<a href="javascript: selectcharacter(11)">放逐者&emsp;&emsp;&emsp;&emsp;血脉觉醒</a><br>'
	else s += '放逐者&emsp;&emsp;&emsp;&emsp;解锁条件：使用九个职业通关游戏<br>'
	s += '<a href="javascript: selectcharacter(100)">随机</a><br><br>'
	s += '<a href="javascript: showdice=true">显示骰子</a><br>'
	s += '<a href="javascript: showdice=false">隐藏骰子</a><br>'
	document.getElementById("gamelog").innerHTML = s
	document.getElementById("attribute").innerHTML = ""
	document.getElementById("status").innerHTML = ""
	document.getElementById("buff").innerHTML = ""
}

function selectcharacter(i) {
	if(i!=-1)
		myclass_n=i
	refresh();
	if (my_int != null) clearInterval(my_int)
	my_int = setInterval(mainLoop, defaultint);
	gamestate = "auto"
	document.getElementById("gamelog").innerHTML = ""
	document.getElementById("attribute").innerHTML = ""
	document.getElementById("status").innerHTML = ""
	document.getElementById("buff").innerHTML = ""
}
function gamelog() {
	if (my_int != null) clearInterval(my_int)
//	my_int=null
	gamestate = "stop"
	var s = ""
	for (const [key, value] of Object.entries(achievement_list)) {
		if (key in achievement)
			s += key + "：" + value + "<br>"
		else s += key + "：？？？<br>"
	}
	var a=""
	if (week_total > 0 && game_total > 0) {
		a ="平均时长<br>"+(week_total/game_total).toFixed(3)+"<br><br>"
	}
	document.getElementById("gamelog").innerHTML = "成就<br>" + s
	document.getElementById("attribute").innerHTML = ""
	var dd = {}
	var ss=""
	for (key in character_dict) {
		var a1 = 0
		if (character_dict[key] in history_win) {
			a1 = history_win[character_dict[key]]
		}
		var a2 = 0
		if (character_dict[key] in history_lose) {
			a2 = history_lose[character_dict[key]]
		}
		console.log(key,a1,a2)
		a1 = parseInt(a1)
		a2 = parseInt(a2)
		if (a1 + a2 > 0) {
			ss += character_dict[key] + " " + a1+" / "+a2+" / "+(a1 / (a1 + a2)).toFixed(3) + "<br>"
		}
	}

	document.getElementById("status").innerHTML = a+"结局<br>" + dict2html(history_end) + "<br>胜利 / 失败 / 胜率<br>" +ss
	document.getElementById("buff").innerHTML = "经验人数<br>" + dict2html(history) + "<br>初体验对象<br>" + dict2html(history_v)
}

let achievement_list = {
	"来之不易": "首次胜利",
	"第一滴血": "首次失败",
	"全面完胜": "使用每个角色通关游戏",
	"团灭": "使用每个角色输掉游戏",
	"完美主义": "达成每一种胜利结局",
	"全cg": "达成每一种失败结局",
	"你已上头": "完成100局游戏",
	"速通": "在前60周通关游戏",
	"any%": "在前10周输掉游戏",
	"永不言弃": "在第100周之后通关游戏",
	"淫乱勇者的冒险": "在淫乱度不低于100的情况下通关游戏",
	"登峰造极": "淫乱度达到150",
	"突破极限": "连续高潮100次",
	"修行的成果": "作为战士，受虐狂等级达到7",
	"怪盗的真身": "作为宝藏猎人，找到内衣小偷",
	"教科书般的亵渎": "作为神官，进行教科书般的亵渎",
	"我们的家族没落了": "作为骑士，在卖春至少10次后通关游戏",
	"梦幻combo": "作为圣骑士，被魔力之卵打断正义圣印",
	//	"恶堕": "作为复仇者，在对抗宿敌时达成失败结局",
	"完美舞步": "作为舞女，进行九次成功的演出",
	"弃暗投明": "作为术士，学习萨满之道",
	"归零者": "作为被诅咒的骑士，在第九周之后经验值降低到0",
	"神选者": "作为野蛮人，获得露出女神的加护",
	"怒火中烧": "作为武僧，在失衡状态下通关游戏",
	"自毁": "作为魔剑士，在自慰时释放10个或者更多灵魂",
	"我已觉醒": "作为放逐者，从第三形态获得6点或者更高的全属性",
	"平常心": "在兽化魔法等级达到4或者更高的情况下战胜哥布林村",
	"全收集": "在一局游戏中遇到四种史莱姆娘",
	"为什么总是你": "在一局游戏内被兽人囚禁三次",
	"双面特工": "在触手服的帮助下战胜触手原体",
	"锁血外挂": "在高潮禁止状态下战胜魔王",
	"以牙还牙": "使用色情攻击战胜魔王",
	"友谊的魔法": "在三位友人的帮助下通关游戏",
	"一血传奇": "在淫纹剩余数字为1的情况下通关游戏",
	"过程比结果更重要": "收集三张梦境乐园的奖券",
	"名人堂": "卖春价格达到100",
	"感谢祭": "参加娼馆的周年庆",
	"说好的小费呢": "听完酒馆老板的所有秘闻",
//	"不付小费的下场": "使用每个角色被酒馆老板传播秘闻",
	"任务达人": "完成四次炼金术师的委托",
	"寻谜问道": "发现所有的隐藏地点",
	"双持": "同时使用两根假阳具自慰",
	"愚蠢的人类": "见证神秘少女的变身形态",
	"经典重现": "发现一个彩蛋",
	"月之祝福": "获得暗精灵的祝福",
	"圣女之泪": "获得堕落圣女的祝福",
	"公主骑士的传承": "集齐公主骑士套装",
	"美食家": "品尝所有口味的饮料和圣水",
	"破绽百出": "在一局游戏中获得所有的弱点",
	"改过自新": "佩戴罪人的颈环至少三个月后将其解除",
	"常识崩坏": "集齐所有种类的常识改变",
	"公主骑士": "你赋予了公主骑士这个词新的含义",
	"名台词": "说出“咕，杀了我吧”",
	"浪费生命": "被上古淫魔诅咒",
	"传说中的处女魅魔": "在处女状态下被转化为魅魔",
}

let character_dict = ["总计", "战士", "宝藏猎人", "神官", "骑士", "圣骑士", "舞女", "术士", "被诅咒的骑士", "野蛮人", "武僧", "魔剑士", "放逐者"]

function loadsave() {
	history = loaddict("history")
	history_end = loaddict("history_end")
	history_win = loaddict("win")
	history_lose = loaddict("lose")
	history_v = loaddict("virgin")
	achievement = loaddict("achievement")
	unlock = loaddict("unlock")
	if (unlock == {}) unlock = { "战士": true, "宝藏猎人": true, "神官": true, "骑士": false, "圣骑士": false, "魔剑士": false, "术士": false, "被诅咒的骑士": false, "野蛮人": false, "武僧": false, "放逐者": false ,"舞女":false}

	week_total = parseInt(localStorage.getItem("week"))
	if (week_total == NaN || week_total == null) week_total = 0
	game_total = parseInt(localStorage.getItem("game"))
	if (game_total == NaN || game_total == null) game_total = 0
	if (history_win["总计"] == null) history_win["总计"] = 0
	if (history_lose["总计"] == null) history_lose["总计"] = 0
	localkeys = loaddict("localkeys")
}
function loaddict(name) {
	var dic = {}
	try {
		dic = JSON.parse(localStorage.getItem(name))
	} catch {
		dic = {}
	}
	if (dic == null) dic = {}
	return dic
}

function dict2html(dic) {
	var s = ""
	for (const [key, value] of Object.entries(dic)) {
		s += key + " " + value + "<br>"
	}
	return s
}

function dict2html2(dic) {
	var s = ""
	for(key in character_dict){
		if (character_dict[key] in dic) {
			s += character_dict[key] + " " + dic[character_dict[key]] + "<br>"
		}
	}
	return s
}


function clearsave() {
	history = {}
	history_end = {}
	history_win = {}
	history_lose = {}
	achievement = {}
	history_v = {}
	localkeys = {}
	unlock = { "战士": true, "宝藏猎人": true, "神官": true, "骑士": false, "圣骑士": false, "魔剑士": false, "术士": false, "被诅咒的骑士": false, "野蛮人": false, "武僧": false, "放逐者": false, "舞女": false }
	if (history_win["总计"] == null) history_win["总计"] = 0
	if (history_lose["总计"] == null) history_lose["总计"] = 0
	week_total = 0
	game_total = 0
}

let week_total=0
let game_total=0

function setachievement(flag, val) {
	if (val == null) {
		val = 1
	}
	if (achievement[flag] == null) {
		pause()
		show("解锁成就 " + flag)
		pause()
		achievement[flag] = 0
		achievement_run+=flag+"<br>"
	}
	achievement[flag] += val
}

function setlocalkey(flag, val) {
	if (val == null) {
		val = 1
	}
	localkeys[flag] = val
}

function getlocalkey(flag) {
	return localkeys[flag]
}

function toclipboard() {
	if (lastrun != "") {
		navigator.clipboard.writeText(lastrun.replaceAll("<br>", "\n").replaceAll('<a href="javascript: selectcharacter(-1)">重新开始</a>', ""));
		alert("上一局的日志已复制到剪贴板")
	}
}

function reload() {
	if(lastrun1=="")return
	if (my_int != null) clearInterval(my_int)
	gamestate = "stop"

	document.getElementById("gamelog").innerHTML =lastrun1
	document.getElementById("attribute").innerHTML = lastrun2
	
	document.getElementById("status").innerHTML = lastrun3
	document.getElementById("buff").innerHTML = lastrun4
}

function endofgame(s, win) {
	if (win == true) {
		history_win["总计"] += 1
		if (history_win[status.name] == null) history_win[status.name] = 0
		history_win[status.name] += 1
		if (status.name == "骑士" && getflag("娼妇") >= 10) setachievement("我们的家族没落了")
		if (status.name == "武僧" && "失衡" in buff) setachievement("怒火中烧")
		if (team1 && team2 && team3) setachievement("友谊的魔法")
		if (Object.keys(history_win).length >= maxclass + 1) setachievement("全面完胜")
		if (week <= 60) setachievement("速通")
		if (week >= 100) setachievement("永不言弃")
		if (status.lewd >= 100) setachievement("淫乱勇者的冒险")
		setachievement("来之不易")
	} else {
		history_lose["总计"] += 1
		if (history_lose[status.name] == null) history_lose[status.name] = 0
		history_lose[status.name] += 1
		if (status.name == "复仇者") {
			if (s == "哥布林村的雌兽" && "宿敌：哥布林" in buff) {
				setachievement("恶堕")
			}
			if (s == "兽人的新娘" && "宿敌：兽人" in buff) {
				setachievement("恶堕")
			}
			if (s == "触手的俘虏" && "宿敌：触手" in buff) {
				setachievement("恶堕")
			}
		}
		if (Object.keys(history_lose).length >= maxclass + 1) setachievement("团灭")
		if (week <= 10) setachievement("any%")
		if (status.v_virgin == "" && (s == "魔王的部下" || s == "魔王的先锋" || s == "魅魔的下克上")) setachievement("传说中的处女魅魔")
		setachievement("第一滴血")
	}
	if (history_lose["总计"] + history_win["总计"] >= 100) setachievement("你已上头")
	if (status.lewd >= 150) setachievement("登峰造极")
	game_total += 1
	week_total += week

	if (achievement_run != "") show("<br>本局游戏解锁成就<br>" + achievement_run)

	if (unlock["圣骑士"] != true && win && !("契约：娼妇" in buff)) {
		unlock["圣骑士"] = true
		show("你解锁了圣骑士")
	}
	if (unlock["魔剑士"] != true && win != true && history_lose["总计"] >= 10) {
		unlock["魔剑士"] = true
		show("你解锁了魔剑士")
	}
	if (unlock["术士"] != true && past_event.includes("tablet")) {
		unlock["术士"] = true
		show("你解锁了术士")
	}
	if (unlock["被诅咒的骑士"] != true && win && countcurseditem() > 0) {
		unlock["被诅咒的骑士"] = true
		show("你解锁了被诅咒的骑士")
	}
	if (unlock["放逐者"] != true && Object.keys(history_win).length >= 10) {
		unlock["放逐者"] = true
		show("你解锁了放逐者")
	}
	if (unlock["舞女"] != true && !past_event.includes("goblin_prison1") && !past_event.includes("orc_prison")) {
		unlock["舞女"] = true
		show("你解锁了舞女")
	}
	if (unlock["骑士"] != true && Object.keys(history_win).length >= 4) {
		unlock["骑士"] = true
		show("你解锁了骑士")
	}
	if (unlock["野蛮人"] != true && "真空" in buff) {
		unlock["野蛮人"] = true
		show("你解锁了野蛮人")
	}
	if (unlock["武僧"] != true && win && status.lewd <= 50) {
		unlock["武僧"] = true
		show("你解锁了武僧")
	}

	show('<a href="javascript: selectcharacter(-1)">重新开始</a><br>')

	localStorage.setItem("win", JSON.stringify(history_win))
	localStorage.setItem("lose", JSON.stringify(history_lose))
	localStorage.setItem("history", JSON.stringify(history))
	gameover = true
	if (history_end[s] == null) history_end[s] = 1
	else history_end[s] += 1
	if (history_end["哥布林村的雌兽"] != null && history_end["史莱姆的家族"] != null && history_end["兽人的新娘"] != null && history_end["触手的俘虏"] != null && history_end["魔王的先锋"] != null
		&& history_end["魔王的部下"] != null && history_end["债务奴隶"] != null && history_end["肉便器的末路"] != null && history_end["放逐"] != null && history_end["暗精灵的复仇"] != null) setachievement("全cg")
	if (history_end["武道家的战友"] != null && history_end["魔法师的恋人"] != null && history_end["刺客的密友"] != null && history_end["魅魔的下克上"] != null && history_end["会长的继承者"] != null
		&& history_end["奇迹的处女勇者"] != null && history_end["淫乱的处女勇者"] != null && history_end["旧王陨落"] != null && history_end["新时代"] != null) setachievement("完美主义")
	localStorage.setItem("history_end", JSON.stringify(history_end))
	localStorage.setItem("achievement", JSON.stringify(achievement))
	localStorage.setItem("virgin", JSON.stringify(history_v))
	localStorage.setItem("week", week_total)
	localStorage.setItem("game", game_total)
	localStorage.setItem("localkeys", JSON.stringify(localkeys))
	localStorage.setItem("unlock", JSON.stringify(unlock))
}

let my_int=null

let defaultint=500

function pause_btn(){
	if(gameover==true)return
	if(my_int!=null)clearInterval(my_int)
	gamestate="stop"
}
function step_btn(){
	if (gameover == true && my_int==null) {
		newgame();
		return
	}
	if(my_int!=null)clearInterval(my_int)
	my_int=setInterval(mainLoop,250);
	gamestate="step"
}
function auto_btn(){
	defaultint = 500
	if (gameover == true && my_int == null){
		newgame();
		return
	}
	if(my_int!=null)clearInterval(my_int)
	my_int=setInterval(mainLoop,defaultint);
	gamestate="auto"
	last_time = new Date().getTime()
}
function fast_btn(){
	defaultint = 200
	if (gameover == true && my_int == null){
		newgame();
		return
	}
	if(my_int!=null)clearInterval(my_int)
	my_int = setInterval(mainLoop, defaultint);
	gamestate="auto"
	last_time = new Date().getTime()
}
function vfast_btn() {
	defaultint = 50
	if (gameover == true && my_int == null) {
		newgame();
		return
	}
	if (my_int != null) clearInterval(my_int)
	my_int = setInterval(mainLoop, defaultint);
	gamestate = "auto"
	last_time = new Date().getTime()
}
function test() {
	defaultint = 5
	if (gameover == true && my_int == null) {
		newgame();
		return
	}
	if (my_int != null) clearInterval(my_int)
	my_int = setInterval(mainLoop, defaultint);
	gamestate = "auto"
	last_time = new Date().getTime()
}

let islagging=1