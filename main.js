function load() {
	event_init()
	gameover = true
	if (my_int != null) clearInterval(my_int)
	my_int = null

	loadsave()

	document.title = "女骑士模拟器"

	document.getElementById("header").innerHTML = '<h2>女骑士模拟器 V0.95</h2>'
		+ '<p><button onclick="newgame()">开始</button><button onclick="pause_btn()">暂停</button><button onclick="step_btn()">单步</button><button onclick="auto_btn()">慢速</button>'
		+ '<button onclick="fast_btn()">中速</button><button onclick="vfast_btn()">快速</button><button onclick="gamelog()">统计</button><button onclick="load()">关于</button><button onclick="reload()">恢复</button></p>'
		+ '<p id="attribute">本游戏包括色情内容，未满十八岁禁止游玩。<br>游戏内容纯属虚构，如有雷同，纯属巧合。<br>登场人物均满十八岁。<br>故事发生在架空世界，没有任何实际意义，也不能代表我的个人观点。'
		+ '<br>请不要在公开场合（包括但不限于一般向的论坛，社交媒体，讨论群组等）谈论此游戏，谢谢配合。<br>如果发生不受控传播的情况，这个项目非常可能会消失。'
		+ '<br>本游戏首发于itch.io平台，没有许可过任何转载。'
		+ '<br>-裴多菲</p>'
	document.getElementById("gamelog").innerHTML = ""
	document.getElementById("status").innerHTML = ""
	document.getElementById("buff").innerHTML = ""
}

let topaste=""
let history = {}
let log_txt=""
let event_pool_basic=[]
let event_pool=[]
let buff={}
let flag={}
let gameover=false
let op={}
let chapter=0
let chapter_startweek=0
let prostitute_week=0
const name={
	name:"职业",
	lv:"等级",
	exp:"经验",
	will:"意志",
	str:"力量",
	dex:"敏捷",
	wis:"智力",
	money:"金钱",
	pay:"支出",
	lewd:"淫乱",
	lust:"发情",
	adv:"冒险者等级",
	v_virgin:"初体验",
	o_virgin:"初吻",
	a_virgin:"后庭初体验",
	v_exp:"阴道经验",
	o_exp:"口腔经验",
	b_exp:"胸部经验",
	a_exp:"后穴经验",
	e_exp:"露出经验",
	v_lv:"阴道开发",
	o_lv:"口腔开发",
	b_lv:"胸部开发",
	a_lv:"后穴开发",
	m_exp:"自慰经验",
	m_lv:"自慰中毒",
	e_lv:"露出癖",
	u_lv:"漏尿快感",
	u_exp:"漏尿经验",
	p_lv:"受虐狂",
	p_exp:"受虐经验",
	s_exp:"精液经验",
	s_lv:"精液中毒",
	les_exp:"百合经验",
	les_lv:"百合中毒",
	orgasm:"高潮经验",
	birth_exp:"出产经验",
	drug_exp:"媚药经验",
	drug_lv:"媚药中毒"
}

let myclass={
	name:"战士",
	str:10,
	dex:6,
	wis:6,
	str_gain:2,
	dex_gain:1,
	wis_gain:1,
	money:200,
	pay:100,
	trait:"无惧疼痛"
}

const class_list=[
{
	name:"战士",
	str:10,
	dex:6,
	wis:6,
	str_gain:2,
	dex_gain:1,
	wis_gain:1,
	money:200,
	pay:100,
	trait:"无惧疼痛"
},{
	name:"宝藏猎人",
	str:6,
	dex:10,
	wis:6,
	str_gain:1,
	dex_gain:2,
	wis_gain:1,
	money:200,
	pay:100,
	trait:"鹰眼术"
	}, {
		name: "神官",
		str: 6,
		dex: 6,
		wis: 10,
		str_gain: 1,
		dex_gain: 1,
		wis_gain: 2,
		money: 200,
		pay: 100,
		trait: "女神的加护"
	}, {
	name:"骑士",
	str:8,
	dex:8,
	wis:8,
	str_gain:2,
	dex_gain:2,
	wis_gain:2,
	money:200,
	pay:100,
	trait:"落难贵族"
},{
	name:"圣骑士",
	str:10,
	dex:6,
	wis:6,
	str_gain:2,
	dex_gain:1,
	wis_gain:1,
	money:200,
	pay:100,
	trait:"正义圣印"
},{
	name:"复仇者",
	str:6,
	dex:10,
	wis:6,
	str_gain:1,
	dex_gain:2,
	wis_gain:1,
	money:200,
	pay:100,
	trait:"宿敌"
	}, {
		name: "术士",
		str: 6,
		dex: 6,
		wis: 10,
		str_gain: 1,
		dex_gain: 1,
		wis_gain: 2,
		money: 200,
		pay: 100,
		trait: "禁忌之书"
	}, {
		name: "被诅咒的骑士",
		str: 8,
		dex: 8,
		wis: 8,
		str_gain: 2,
		dex_gain: 2,
		wis_gain: 2,
		money: 200,
		pay: 100,
		trait: "淫魔诅咒"
	},
	{
		name: "放逐者",
		str: 6,
		dex: 6,
		wis: 6,
		str_gain: 1,
		dex_gain: 1,
		wis_gain: 1,
		money: 200,
		pay: 100,
		trait: "血脉觉醒"
	}
]
//野蛮人 轻装上阵
//魔法造物 过载核心
//魔剑士 魔剑

const status_normal=["name","lv","exp","str","dex","wis","money","pay"]
const status_sex=["lewd","lust","v_virgin","o_virgin","a_virgin","orgasm","v_lv","v_exp","o_lv","o_exp","b_lv","b_exp","a_lv","a_exp","e_lv","e_exp","s_lv","s_exp","p_lv","p_exp","m_lv","m_exp","u_lv","u_exp","drug_lv","drug_exp","les_lv","les_exp","birth_exp"]
let basic_status = {
	name: "女骑士",
	lv: 1,
	exp: 0,
	str: 5,
	dex: 3,
	wis: 2,
	money: 100,
	pay: 50,
	lewd: 0,
	lust: 0,
	adv: "E",
	explore: 0,
	e_exp: 0,
	o_exp: 0,
	v_exp: 0,
	b_exp: 0,
	a_exp: 0,
	u_exp: 0,
	orgasm: 0,
	v_virgin: "",
	o_virgin: "",
	a_virgin: "",
	main: "str",
	v_lv: 0,
	o_lv: 0,
	b_lv: 0,
	a_lv: 0,
	e_lv: 0,
	u_lv: 0,
	m_exp: 0,
	m_lv: 0,
	p_exp: 0,
	p_lv: 0,
	s_lv: 0,
	s_exp: 0,
	les_exp: 0,
	les_lv: 0,
	birth_exp: 0,
	drug_lv: 0,
	drug_exp: 0,
}
let status={}
let bonus_status = {}
let achievement_run = ""
let gameover2=false
let myclass_n=10
function refresh() {
	month_org_cnt = 0
	month = 1
	display = []
	achievement_run = ""
	display_txt = ""
	past_event = []
	week = 1
	town = true
	monthend = false
	gameover2=false
	event_pool = []
	for (i in ev) {
		event_pool.push(i)
		if (ev[i].start == null) ev[i].start = 0
		if (ev[i].end == null) ev[i].end = 10000000
		if (ev[i].once == null) ev[i].once = false
	}
	for (i in basic_status)
		status[i] = basic_status[i]
	bonus_status = {
		v_lv: 0,
		o_lv: 0,
		b_lv: 0,
		a_lv: 0,
		e_lv: 0,
		u_lv: 0,
		p_lv: 0,
		s_lv: 0,
		m_lv: 0,
		les_lv: 0,
		str: 0,
		dex: 0,
		wis: 0,
		drug_lv: 0
	}
	if (myclass_n > 20) {
		myclass = class_list[rand(9)]
		while (unlock[myclass.name] != true) {
			myclass = class_list[rand(9)]
		}
	}
	else
		myclass=class_list[myclass_n]

	for(i in myclass){
		if(i in status)
		status[i]=myclass[i]
	}
	buff={}
	flag={}
	op={}
	chapter=1
	chapter_startweek=0
	prostitute_week=0
	gameover=false
	log_txt=""
	prostitute_bonus=0
	lust_previous=100000000
}
let month_org_cnt=0
let month=1
let display=[]
let display_txt=""
let gamestate="stop"
function show(str,newline){
	if(newline==false){
		display_txt+=str+" "
		return
	}
	display_txt+=str+"<br>"
	display.push(display_txt)
	display_txt = ""
	if(newline==true){
	}
}

function pause(){
//	display.push(display_txt)
//	display_txt=""
}

let lastrun1=""
let lastrun2 = ""
let lastrun3 = ""
let lastrun4 = ""

function mainLoop(){

	if(display.length>0||display_txt!=""){
//		if(display_txt!=""){
//			display.push(display_txt)
//			display_txt=""
//		}
		log_txt+=display.shift()
		document.getElementById("gamelog").innerHTML=log_txt
		if (display.length == 0 || (week == 1 && town == false)){
			if (display.length == 0) log_txt += "<br>"
			document.getElementById("gamelog").innerHTML=log_txt
			att_str=""
			if(chapter==6)att_str="冒险者等级 S "
			else att_str="冒险者等级 "+String.fromCharCode(70-chapter)+" "
			for(i in status_normal){
				ii=status_normal[i]
				att_str+=name[ii]+" "+status[ii]+"   "
			}
			document.getElementById("attribute").innerHTML=att_str
			att_str=""
			for(i in status_sex){
				ii=status_sex[i]
				if(status[ii]!=0 && status[ii]!="")att_str+=name[ii]+" "+status[ii]+"<br>"
				if(status[ii]==="")att_str+=name[ii]+" 无<br>"
			}
			att_str+="<br>"
			buff_str=""
			for(i in buff){
				if (buff[i] == 0)buff_str+=i+"<br>"
				else buff_str+=i+" "+buff[i]+"<br>"
			}
			buff_str+="<br>"
			for(i in op){
				if (op[i].val >= 0)buff_str+=i+"好感度 "+op[i].val+"<br>"
			}
			document.getElementById("status").innerHTML=att_str
			document.getElementById("buff").innerHTML = buff_str
		}
		var myDiv = document.getElementById("bottom-right");
		myDiv.scrollTop = myDiv.scrollHeight;
		return
	}
	if(gamestate=="step2"){
		if(my_int!=null)clearInterval(my_int)
		gamestate="stop"
		return
	}else if(gamestate=="step"){
		gamestate="step2"
	}
	if (gameover == true) {
		if (my_int != null) clearInterval(my_int)
		gamestate = "stop"
		my_int = null
		lastrun1 = document.getElementById("gamelog").innerHTML
		lastrun2=document.getElementById("attribute").innerHTML
		lastrun3=document.getElementById("status").innerHTML
		lastrun4=document.getElementById("buff").innerHTML
		return
	}


	if(monthend==true){
		show("月底")
		if(status.money<0){
			show("你的欠款增加了。")
			gain({money:Math.floor((status.money-9)/5)})
			gainbuff("负债",1)
		}else if("负债"in buff){
			show("你的欠款还清了。")
			gainbuff("负债",-10000)
		}

		if(isPrisoner()){
			show("你意识到监禁生活的优点是不需要支付房费。")
		}else{
			if("露宿街头"in buff){
				if(status.money>=status.pay){
					show("由于你有了足够的积蓄，你结束了街头生活。")
					gain({money:-status.pay})
					gainbuff("露宿街头",-10000)
				}else{
					show("由于露宿街头的效果，你时不时会在睡梦中遭到侵犯。")
					randomattack(10, 1, "路人", false, 5)
					show("", true)
					show("睡眠不足令你的实力大打折扣")
					gain({str:-1,dex:-1,wis:-1})
				}
			}else{
				show("你支付了旅馆的房费。")
				gain({money:-status.pay})
			}
		}
		var target=Math.floor(status.lewd / 3)
		if(month_org_cnt<target){
			show("这个月你高潮了"+month_org_cnt+"次，你的身体没有得到满足")
			if ("欲求不满" in buff) {
				show("由于欲求不满的效果，发情增量加倍")
				gain({ lust: (target - month_org_cnt) * 2 })
			} else
				gain({lust:target-month_org_cnt})
			lust_previous=month
		}else if(month_org_cnt>0){
			show("这个月你高潮了"+month_org_cnt+"次")
		}
		att_str=""
		att_str+="章节 "+chapter+" "
		for(i in status_normal){
			ii=status_normal[i]
			att_str+=name[ii]+" "+status[ii]+"   "
		}
		//show(att_str)
		month_org_cnt=0
		month++
		monthend=false
		week++
		mainLoop()
		town=true

		return
	}else{
		if(town)
			show("第"+week+"周 城镇事件")
		else
			show("第"+week+"周 冒险事件")
		console.log("week"+week)
		chance=[]
		var t=0
		for(i in event_pool){
//			try{
				if(ev[event_pool[i]].town==town && ev[event_pool[i]].start<=chapter && ev[event_pool[i]].end>=chapter && (ev[event_pool[i]].once!=true || !(past_event.includes(event_pool[i])))){
					tt=ev[event_pool[i]].chance()
					if(tt!=null)t+=tt
					ev[event_pool[[i]]].cc = tt
				}
//			}
//			catch(err){
	//			console.log(event_pool[i])
		//		console.log(err.message)
			//}
			chance[i]=t
		}
		t0=t
		t*=Math.random()
		var i=0
		while(t>chance[i] && chance[i]<10000){
			i++;
		}
		console.log(t0+" "+ev[event_pool[i]].chance())
		ev[event_pool[i]].ev()
		if(!past_event.includes(event_pool[i]))
			past_event.push(event_pool[i]);

		if (week % 4 == 0 && monthend == false && !town) monthend = true
		else {
			if (town) town = false
			else {
				week++
				monthend = false
				town = true
				if (gameover != true) {
					if (getbuff("圣水的恩惠") > 0) {
						buff["圣水的恩惠"]--
						if (buff["圣水的恩惠"] <= 0) {
							show("")
							removebuff("圣水的恩惠")
						}
					}
					if (getbuff("罪人的颈环") > 0) {
						buff["罪人的颈环"]--
						if (buff["罪人的颈环"] <= 0) {
							show("")
							removebuff("罪人的颈环")
							if (getflag("罪人的颈环") <= week - 12) {
								setachievement("改过自新")
							}
						}
					}
				}
			}
		}
		mainLoop()
		return
	}
}
function isPrisoner(){
	return buff["监禁：哥布林"]!=null || buff["监禁：兽人"]!=null || buff["公共厕所"]!=null
}
function gainop(person) {
	if (op[person] == null) {
		op[person] = {
			val: 0,
			st: "",
			prison: 0
		}
		show("你认识了" + person)
	} else {
		op[person].val += 1
		show(person + "的好感度提升了")
		if ("常识改变：互相帮助" in buff) {
			show("作为友谊的证明，你和" + person + "爱抚了对方的身体。")
			if (person == "教官") gain({ v_exp: 2, b_exp: 2, s_exp: 1 }, person, true)
			else if (person == "刺客" || person == "神秘少女") gain({ v_exp: 2, b_exp: 2, s_exp: 1, les_exp: 1 }, person, true)
			else gain({ v_exp: 2, b_exp: 2, les_exp: 1 }, person, true)
		}
	}
}

function gainbuff(newbuff, val) {
	if (val <= -100) {
		removebuff(newbuff)
		return
	}
	if (val == null && buff.newbuff == null) {
		buff[newbuff] = 0
		show("获得状态 " + newbuff)
	}
	else if (val < 0) {
		buff[newbuff] += val
		if (buff[newbuff] <= 0) {
			delete (buff[newbuff])
			show("状态解除 " + newbuff)
		} else {
			show("状态减轻 " + newbuff + " " + val)
		}
	} else {

		if (buff[newbuff] == null) {
			buff[newbuff] = val
			show("获得状态 " + newbuff + " " + val)
		} else {
			buff[newbuff] += val
			show("状态强化 " + newbuff + " " + val)
		}
	}
	if ("灵魂链接" in buff) {
		if (newbuff == "兽化魔法") {
			show("灵魂链接加深了你对哥布林的理解")
			goblin_pow -= 3
		}
		if (newbuff == "史莱姆的母亲") {
			show("灵魂链接加深了你对史莱姆的理解")
			slime_pow -= 5
		}
		if (newbuff == "兽人的调教") {
			show("灵魂链接加深了你对兽人的理解")
			orc_pow -= 2
		}
		if (newbuff == "触手的饲主") {
			show("灵魂链接加深了你对触手的理解")
			tentacle_pow -= 2
		}
	}
}

function removebuff(newbuff) {
	if (buff[newbuff] != null) {
		delete(buff[newbuff])
		show("状态解除 "+newbuff)
	}
}

function gainflag(newbuff,val){
	if(val==null && flag.newbuff==null){
		flag[newbuff]=0
	}
	else if(val<0){
		flag[newbuff]+=val
		if(flag[newbuff]<=0){
			delete(flag[newbuff])
		}
	}else{
		if(flag[newbuff]==null){
			flag[newbuff]=val
		}else {
			flag[newbuff]+=val	
		}
	}
}

function gain(bonus, enemy, non_insert) {
	var tmp = ""
	var org_cnt = 0
	if (enemy != null) {
		if (history[enemy] == null) history[enemy] = 1
		else history[enemy] += 1
	}
	if ("exp" in bonus && "试炼的后庭拉珠" in buff) {
		show("试炼的后庭拉珠加快了你的升级速度。")
		gain({ a_exp: 2, p_exp: 2 }, "后庭拉珠", "extra")
		bonus.exp = Math.ceil(bonus.exp * 1.5)
	}

	if ("v_exp" in bonus) {
		if (bonus["v_exp"] > 1 && "贞洁护符" in buff && enemy != null && non_insert != true) {
			show("贞洁护符发出了奇异的光芒。")
			show("在神秘力量的引导下，" + enemy + "对准了你的屁股。")
			if (!("a_exp" in bonus)) bonus.a_exp = 0
			bonus.a_exp += bonus.v_exp
			bonus.v_exp = 0
			gainbuff("贞洁护符", -10000)
		}
		if (bonus["v_exp"] > 1 && "守护魔纹" in buff && enemy != null && non_insert != true) {
			show("守护魔纹发出了奇异的光芒。")
			show("在神秘力量的引导下，" + enemy + "对准了你的屁股。")
			if (!("a_exp" in bonus)) bonus.a_exp = 0
			bonus.a_exp += bonus.v_exp
			bonus.v_exp = 0
		}
	}
	if ("v_exp" in bonus) {
		for (let i = 0; i < bonus["v_exp"]; i++)
			org_cnt += Math.floor((status.v_lv * 0.1 + 1.3) * Math.random())
	}
	if ("a_exp" in bonus) {
		for (let i = 0; i < bonus["a_exp"]; i++)
			org_cnt += Math.floor((status.a_lv * 0.1 + 1.1) * Math.random())
	}
	if ("o_exp" in bonus) {
		for (let i = 0; i < bonus["o_exp"]; i++)
			org_cnt += Math.floor((status.o_lv * 0.1 + 1.2) * Math.random())
	}
	var c0 = 0
	if ("b_exp" in bonus) {
		c0 = org_cnt
		for (let i = 0; i < bonus["b_exp"]; i++)
			org_cnt += Math.floor((status.b_lv * 0.1 + 1.3) * Math.random())
		c0 = org_cnt
	}
	if ("e_exp" in bonus) {
		for (let i = 0; i < bonus["e_exp"]; i++)
			org_cnt += Math.floor((status.e_lv * 0.1 + 1.1) * Math.random())
	}
	if ("u_exp" in bonus) {
		for (let i = 0; i < bonus["u_exp"]; i++)
			org_cnt += Math.floor((status.u_lv * 0.1 + 1.0) * Math.random())
	}
	if ("les_exp" in bonus) {
		for (let i = 0; i < bonus["les_exp"]; i++)
			org_cnt += Math.floor((status.les_lv * 0.1 + 1.3) * Math.random())
	}
	if ("s_exp" in bonus) {
		for (let i = 0; i < bonus["s_exp"]; i++)
			org_cnt += Math.floor((status.s_lv * 0.1 + 1.0) * Math.random())
	}
	if ("p_exp" in bonus) {
		if ("无惧疼痛" in buff) {
			for (let i = 0; i < bonus["p_exp"]; i++)
				org_cnt += Math.floor((status.p_lv * 0.1 + 1.2) * Math.random())
		}
		else {
			for (let i = 0; i < bonus["p_exp"]; i++)
				org_cnt += Math.floor((status.p_lv * 0.1 + 1.0) * Math.random())
		}
	}
	if ("m_exp" in bonus) {
		for (let i = 0; i < bonus["m_exp"]; i++)
			org_cnt += Math.floor((status.m_lv * 0.1 + 1.2) * Math.random())
	}
	if ("drug_exp" in bonus) {
		if (bonus.lust == null) bonus.lust = 1
		for (let i = 0; i < bonus["drug_exp"]; i++)
			bonus.lust += Math.floor((status.drug_lv + 2) * Math.random())
	}
	if (enemy != null) {
		if ("宿敌：哥布林" in buff && enemy.includes("哥布林")) {
			show("被宿敌侵犯令你倍感屈辱")
			org_cnt = org_cnt * 2
			gainflag("复仇者的屈辱", 1)
		}
		if ("宿敌：兽人" in buff && enemy.includes("兽人")) {
			show("被宿敌侵犯令你倍感屈辱")
			org_cnt = org_cnt * 2
			gainflag("复仇者的屈辱", 1)
		}
		if ("宿敌：触手" in buff && enemy.includes("触手")) {
			show("被宿敌侵犯令你倍感屈辱")
			org_cnt = org_cnt * 2
			gainflag("复仇者的屈辱", 1)
		}
	}
	if (status.lust > 0) {
		org_cnt = org_cnt * 1.5
	}
	org_cnt = Math.floor(org_cnt)
	if (org_cnt > 0) {
		if (bonus["orgasm"] == null) bonus["orgasm"] = 0
		bonus["orgasm"] = org_cnt + bonus["orgasm"]
	}
	if ("orgasm" in bonus) {
		month_org_cnt += bonus["orgasm"]
	}
	if ("淫魔天赋" in buff && bonus["s_exp"] != null) {
		bonus["s_exp"] = Math.ceil(bonus["s_exp"] * 1.5)
	}
	if (enemy != null) {
		if (bonus.v_exp > 1 && status.v_virgin == "" && non_insert != true) {
			status.v_virgin = enemy
			show(enemy + "夺走了你的处女")
			if (history_v[enemy] == null) history_v[enemy] = 1
			else history_v[enemy] += 1

			if (bonus.lewd == null) bonus.lewd = 0
			bonus.lewd++
		}
		if (bonus.v_exp > 1 && non_insert != true) {
			if ("女神的加护" in buff) {
				gainbuff("女神的加护", -10000)
				gain({ str: -3, dex: -3, wis: -3 }, null)
			}
		}
		if (bonus.o_exp > 1 && status.o_virgin == "" && non_insert != true) {
			status.o_virgin = enemy
			show(enemy + "夺走了你的初吻")
			if (bonus.lewd == null) bonus.lewd = 0
			bonus.lewd++
		}
		if (bonus.a_exp > 1 && status.a_virgin == "" && non_insert != true) {
			status.a_virgin = enemy
			show(enemy + "夺走了你的后庭处女")
			if (bonus.lewd == null) bonus.lewd = 0
			bonus.lewd++
		}
		if ((non_insert == false || non_insert == null) && "罪人的颈环" in buff) {
			show("由于你犯下的淫行，罪人的颈环变紧了。")
			buff["罪人的颈环"] = 4
			gain({ p_exp: 1 }, "罪人的颈环", "extra")
		}
	}

	var bb = 0
	if (bonus["orgasm"] != null) {
		if ("高潮禁止" in buff) {
			bb = bonus["orgasm"]
			bonus["orgasm"] = 0
		}
	}

	if ("orgasm" in bonus) {
		status.lust -= bonus["orgasm"]
		if (bonus["orgasm"] >= 100) setachievement("突破极限")
		if (bonus["orgasm"] >= 10 && rand(7) == 0 && !("漏尿体质" in buff)) {
			show("强烈的快感令你无法控制自己的身体")
			gainbuff("漏尿体质")
		}
	}
	if (status.lust < 0) status.lust = 0

	for (s in name) {
		if (s in bonus) {
			status[s] += bonus[s]
			if (Number.isInteger(bonus[s]) && bonus[s] > 0) {
				tmp += name[s] + "+" + bonus[s] + "  "
			} else if (bonus[s] < 0) {
				tmp += name[s] + bonus[s] + "  "
			}
		}
	}

	if (bb > 0) {
		show(bb + "次高潮被阻止")
		buff["高潮禁止"] += bb
	}

	show(tmp)



	if (c0 > 0 && "母乳体质" in buff && non_insert != "extra") {
		show("由于母乳体质的效果，你产出了乳汁")
		gain({ b_exp: 1 }, null, "extra")
		if (history["泌乳"] == null) history["泌乳"] = 1
		else history["泌乳"] += 1
	}
	if (bonus.birth_exp > 0) {
		if (history["出产"] == null) history["出产"] = 1
		else history["出产"] += 1
	}
	if ("orgasm" in bonus && bonus["orgasm"] >= 10 && "漏尿体质" in buff && non_insert != "extra") {
		show("由于漏尿体质的效果，你在高潮时漏尿了")
		gain({ u_exp: 1 }, null, "extra")
		if (history["漏尿"] == null) history["漏尿"] = 1
		else history["漏尿"] += 1
	}
	if ("能量吸取" in buff && "s_exp" in bonus) {
		show("由于能量吸取的效果，你获得了" + bonus.s_exp * 10 + "经验值")
		status.exp += bonus.s_exp * 10
	}
	if ("魔族娼妇的秘法" in buff && "s_exp" in bonus && enemy != "客人" && enemy != null) {
		show("由于魔族娼妇的秘法的效果，你获得了" + bonus.s_exp * 10 + "金钱")
		status.gold += bonus.s_exp * 10
	}



	if (status.exp >= 10 * status.lv * status.lv) {
		show("等级提升", false)
		var u = Math.floor(Math.sqrt(status.exp / 10) + 1) - status.lv
		gain({ lv: u, str: myclass.str_gain * u, dex: myclass.dex_gain * u, wis: myclass.wis_gain * u }, null)
	}
	if (status.v_exp >= 10 * (status.v_lv - bonus_status.v_lv + 1)) {
		show("你的小穴变敏感了", false)
		var u = Math.floor(status.v_exp / 10) + bonus_status.v_lv - status.v_lv
		gain({ v_lv: u, lewd: u }, null)
	}
	if (status.o_exp >= 10 * (status.o_lv - bonus_status.o_lv + 1)) {
		show("你的口腔变敏感了", false)
		var u = Math.floor(status.o_exp / 10) + bonus_status.o_lv - status.o_lv
		gain({ o_lv: u, lewd: u }, null)
	}
	if (status.b_exp >= 10 * (status.b_lv - bonus_status.b_lv + 1)) {
		show("你的胸部变敏感了", false)
		var u = Math.floor(status.b_exp / 10) + bonus_status.b_lv - status.b_lv
		gain({ b_lv: u, lewd: u }, null)
	}
	if (status.a_exp >= 10 * (status.a_lv - bonus_status.a_lv + 1)) {
		show("你的屁股变敏感了", false)
		var u = Math.floor(status.a_exp / 10) + bonus_status.a_lv - status.a_lv
		gain({ a_lv: u, lewd: u }, null)
	}
	if (status.e_exp >= 10 * (status.e_lv - bonus_status.e_lv + 1)) {
		show("你对露出产生了兴趣", false)
		var u = Math.floor(status.e_exp / 10) + bonus_status.e_lv - status.e_lv
		gain({ e_lv: u, lewd: u }, null)
	}
	/*	if(status.orgasm>=10*(status.org_lv+1)*(status.org_lv+1)){
			show("你的身体渴求更多的高潮")
			var u=Math.floor(Math.sqrt(status.orgasm/10))-status.org_lv
			gain({org_lv:u,lewd:u})
		}*/
	if (status.s_exp >= 10 * (status.s_lv - bonus_status.s_lv + 1)) {
		show("你习惯了精液的味道", false)
		var u = Math.floor(status.s_exp / 10) + bonus_status.s_lv - status.s_lv
		gain({ s_lv: u, lewd: u }, null)
	}
	if (status.m_exp >= 10 * (status.m_lv - bonus_status.m_lv + 1)) {
		show("你的自慰技巧愈发娴熟", false)
		var u = Math.floor(status.m_exp / 10) + bonus_status.m_lv - status.m_lv
		gain({ m_lv: u, lewd: u }, null)
	}
	if (status.u_exp >= 10 * (status.u_lv - bonus_status.u_lv + 1)) {
		show("你可以在排尿时获得快感了", false)
		var u = Math.floor(status.u_exp / 10) + bonus_status.u_lv - status.u_lv
		gain({ u_lv: u, lewd: u }, null)
	}
	if (status.les_exp >= 10 * (status.les_lv - bonus_status.les_lv + 1)) {
		show("你对百合的接受度更高了", false)
		var u = Math.floor(status.les_exp / 10) + bonus_status.les_lv - status.les_lv
		gain({ les_lv: u, lewd: u }, null)
		if ("冒险者的反击" in buff) {
			show("你将这份经验活用于战斗当中")
			succubus_pow -= u
		}
	}
	if (status.drug_exp >= 10 * (status.drug_lv - bonus_status.drug_lv + 1)) {
		show("你习惯了媚药的味道", false)
		var u = Math.floor(status.drug_exp / 10) + bonus_status.drug_lv - status.drug_lv
		gain({ drug_lv: u, lewd: u }, null)
	}
	if (status.p_exp >= 10 * (status.p_lv - bonus_status.p_lv + 1)) {
		show("你可以在受虐时获得快感了", false)
		var u = Math.floor(status.p_exp / 10) + bonus_status.p_lv - status.p_lv
		gain({ p_lv: u, lewd: u }, null)
	}
	if (enemy != null && "正义圣印" in buff) {
		if (buff["正义圣印"] < 5) {
			show("正义圣印获得了一点充能")
			buff["正义圣印"] += 1
			if (buff["正义圣印"] == 5) {
				show("正义圣印充能完毕，五道圣印在你的大腿上组成了一个正字")
			}
		}
	}
	if ("素材收集" in buff && "s_exp" in bonus) {
		if (buff["素材收集"] == 0) alchemist_week = week
		buff["素材收集"] += bonus["s_exp"]
	}
	if ("遗忘诅咒" in buff && "orgasm" in bonus && bonus["orgasm"] > 0) {
		show("由于遗忘诅咒的效果，你在高潮时失去了" + bonus["orgasm"] * 2 + "经验值")
		status.exp -= org_cnt * 2
		if (status.exp < 0) {
			status.exp = 0
			if (week > 8) {
				setachievement("归零者")
			}
		}
		if (status.exp < 10 * (status.lv - 1) * (status.lv - 1)) {
			show("等级降低", false)
			var u = Math.floor(Math.sqrt(status.exp / 10) + 1) - status.lv
			gain({ lv: u, str: myclass.str_gain * u, dex: myclass.dex_gain * u, wis: myclass.wis_gain * u }, null)
		}
	}
	if (enemy != null && enemy.includes("兽人") && org_cnt > rand(5)) {
		gainbuff("兽人的调教", 1)
	}


	if ("无惧疼痛" in buff && "p_lv" in bonus) {
		show("由于无惧疼痛的效果，你的力量提升了", false)
		gain({ str: bonus.p_lv }, null)
		if (status.p_lv >= 7) {
			setachievement("修行的成果")
		}
	}


	if ((enemy == "触手" || enemy == "触手原体") && ("魔眼的注视" in buff)) {
		show("你感到自己被注视着")
		gain({ e_exp: 2 })
		gainbuff("魔眼的注视", 1)
		show("触手魔眼记录了你的弱点，你对抗触手的成功率下降了")
		tentacle_pow += 1
	}

	if (enemy != null && "诅咒铃铛" in buff && (non_insert != true || enemy == "魅魔") && non_insert != "extra") {
		if (enemy == "哥布林法师" || enemy == "哥布林" || enemy == "史莱姆" || enemy == "魅魔" || enemy == "触手" || enemy == "兽人卫兵" || enemy == "兽人萨满" || enemy == "兽人" || enemy == "流氓" || enemy == "路人") {
			show("诅咒铃铛随着胸部的晃动响个不停。")
			var v = gain({ b_exp: 2 }, "诅咒铃铛", "extra")
			var e = enemy
			if (v > 0) {
				if (enemy == "哥布林法师") e = "哥布林"
				if (enemy == "兽人萨满" || enemy == "兽人卫兵") e = "兽人"
				show("游荡的" + e + "被铃铛吸引，开始了新一轮的侵犯。")
				if (enemy == "哥布林法师" || enemy == "哥布林") gain({ v_exp: 3, s_exp: 1 }, "哥布林", "extra")
				if (enemy == "史莱姆") gain({ a_exp: 3, u_exp: 1, s_exp: 1 }, "史莱姆", "extra")
				if (enemy == "兽人卫兵" || enemy == "兽人萨满" || enemy == "兽人") gain({ v_exp: 4, p_exp: 2, s_exp: 2 }, "兽人", "extra")
				if (enemy == "触手") gain({ v_exp: 3, a_exp: 3, s_exp: 2 }, "触手", "extra")
				if (enemy == "魅魔") gain({ b_exp: 3, o_exp: 3, les_exp: 3 }, "魅魔", "extra")
				if (enemy == "流氓") gain({ v_exp: 3, o_exp: 3, s_exp: 2 }, "流氓", "extra")
				if (enemy == "路人") gain({ v_exp: 3, b_exp: 2, s_exp: 1 }, "路人", "extra")
			}
		}
	}
	return org_cnt
}

function check(att, val, dice) {
	if (dice == null) dice = 20
	var a = 0
	if (att in status) a = status[att]
	if (att == "max") {
		a = status.str
		if (status.dex > a) a = status.dex
		if (status.wis > a) a = status.wis
	}
	if (att == "min") {
		var a = status.str
		if (status.dex < a) a = status.dex
		if (status.wis < a) a = status.wis
	}
	x = Math.floor(Math.random() * dice)
	if ("罪人的颈环" in buff) {
		let y = Math.floor(Math.random() * dice)
		if (y < x) x = y
	}
	if ("圣水的恩惠" in buff) {
		let y = Math.floor(Math.random() * dice)
		if (y > x) x = y
	}
	console.log(att + " " + a + " dice " + x + " target " + val + " lust " + status.lust)
	if (x == 0 && dice == 20) {
		x = -1000
	}
	if (x == 19 && dice == 20) x = 1000
	if (dice == 20) {
		val += status.lust / 5
		if ("败北愿望" in buff) val += status.lust / 2
		if ("魔族意志" in buff) val -= status.lust / 2
	}
	if ("触手服" in buff && dice == 20 && rand(4) == 0) {
		if (past_event.includes("warlock_living_clothes")) {
			show("触手服支配着你的动作")
			x += gain({ v_exp: 1, a_exp: 1, b_exp: 1 }, "触手服", true)
		} else {
			show("触手服干扰了你的动作")
			x -= gain({ v_exp: 1, a_exp: 1, b_exp: 1 }, "触手服", true)
		}
	}

	var justice=false
	if (getbuff("正义圣印") >= 5 && dice == 20 && x + a - val < 0) {
		show("正义圣印发出耀眼的光芒，本次行动必定成功")
		x = 1000
		buff["正义圣印"] = 0
		justice=true
	}
	if (x >= 18 && dice == 20 && "魔力之卵" in buff) {
		show("魔力之卵突然震动起来")
		if (gain({ v_exp: 2 },"魔力之卵",true) >= 1) {
			show("快感打断了你的行动")
			pause()
			x = -1000
			if (justice) {
				setachievement("梦幻combo")
			}
		}
	}
	dice_value=x
	return Math.floor(x + a - val)
}

function rand(n){
	return Math.floor(Math.random()*n)
}