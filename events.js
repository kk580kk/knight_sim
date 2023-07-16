function event_init(){
	ev={}
	guild()
	goblin()
	town_basic()
	friendship()
	slime()
	orc()
	bar()
	tentacle()
	finalboss()
	treasure()
	loan()
	prostitute()
	status_ev()
	class_ev()
	sidequest()
	dream()
	hypno()

	for (i in ev) {
		if (ev[i].start == null) ev[i].start = 0
		if (ev[i].end == null) ev[i].end = 10000000
		if (ev[i].once == null) ev[i].once = false
	}
}

function getbuff(str){
	if(buff[str]==null)return -1
	return buff[str]
}

function getop(str){
	if(op[str]==null)return -1
	return op[str].val
}

function getflag(str){
	if(flag[str]==null)return -1
	return flag[str]
}

function randomattack(n,ii,enemy,non,m) {
	var res = {}
	for (var i = 0; i < n; i++) {
		var tt=rand(m)
		if (tt == 0) {
			if (res["v_exp"] == null) res["v_exp"] = 0
			res["v_exp"] += ii
		}
		if (tt == 1) {
			if (res["a_exp"] == null) res["a_exp"] = 0
			res["a_exp"]+=ii
		}
		if (tt == 2) {
			if (res["b_exp"] == null) res["b_exp"] = 0
			res["b_exp"] += ii
		}
		if (tt == 3) {
			if (res["o_exp"] == null) res["o_exp"] = 0
			res["o_exp"]+=ii
		}
		if (tt == 4) {
			if (res["s_exp"] == null) res["s_exp"] = 0
			res["s_exp"] += ii
		}
		if (tt == 5) {
			if (res["p_exp"] == null) res["s_exp"] = 0
			res["p_exp"] += ii
		}
	}
	return gain(res,enemy,non)
}

function nextchapter() {
	chapter++
	chapter_startweek = week
	pause()
	goblin_pow = month/2 + 12
	slime_pow = month/2 + 15
	orc_pow = month/2 + 18
	tentacle_pow = month/2 + 21
	succubus_pow = month/2 + 24

	show("你的冒险者等级提升了。")
	if ("常识改变：勇者之证" in buff) {
		show("你作为露出方面的勇者的等级也得到了提升。")
		gain({ e_lv: 2, lewd: 2 })
		bonus_status.e_lv += 2
	}
}