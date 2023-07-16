function town_basic(){
	ev["wind"]={
		ev: function () {
			show("一阵奇怪的风吹过，你的裙底风光暴露在人前。")
			if(no_pant()){
				show("至少没有人看见你的内裤。")
				show("当你没穿内裤的下体被路人一览无余时，你乐观地想着。")
				gain({e_exp:2})
			}else{
				show("人们看见了你的内裤。")
				gain({e_exp:1})
			}
		},
		town:true,
		chance:function(){
			return 0.5
		}
	}
	ev["stolen_underwear"] = {
		ev: function () {
			show("你的内裤被人偷走了。")
			gain({ money: -5 })
			gainflag("lost_underwear", 1)
			if (status.lewd >= 20) {
				show("你幻想着内衣小偷要用你的贴身衣物去做什么，下体不禁有些湿润。")
				gain({ lust: 2 })
			}
		},
		town: true,
		chance: function () {
			return 0.3
		}
	}

	ev["girls_talk"] = {
		ev: function () {
			show("你听到几个女冒险者在小声谈论哪种自慰方式更加舒服。")
			show("你向她们分享了你的理解。")
			gain({ lust: 1 })
		},
		town: true,
		once: true,
		chance: function () {
			if (status.m_lv >= 1) return 0.2
		},
		start: 2
	}
	ev["girls_talk2"] = {
		ev: function () {
			show("你听到几个女冒险者在小声谈论被哪种魔物侵犯更加舒服。")
			show("你向她们分享了你的理解。她们对你肃然起敬。")
			gain({ lust: 2 })
		},
		town: true,
		once: true,
		chance: function () {
			if (status.lewd >= 30) return 0.2
		},
		start: 3
	}
	ev["girls_talk3"] = {
		ev: function () {
			show("你听到几个女冒险者在小声谈论淫魔的诅咒道具。")
			show("你向她们展示了你的装备。她们对你肃然起敬。")
			gain({ lust: 3 })
		},
		town: true,
		once: true,
		chance: function () {
			if ("触手服" in buff || "诅咒铃铛" in buff || "魔力之卵" in buff || "试炼的后庭拉珠" in buff) return 0.2
		},
		start: 4
	}
	ev["bad"]={
		ev:function(){
			show("你在浴场洗澡时被偷窥了。")
			gain({e_exp:2})
			if (check("dex", month + 12 + leak()) >= 0) {
				if ("常识改变：义警行动" in buff) {
					show("你对偷窥者进行了公开处刑。")
					show("在亲身体会到被侵犯的屈辱之后，想必对方不会再犯下同样的罪行。")
					gain({ exp: 10, e_exp: 2, o_exp: 3, s_exp: 1 }, "流氓")
				} else {
					show("你抓住偷窥者，将他送进了监狱。")
					gain({ money: 50, exp: 10 })
					gainflag("bad")
				}
			}
		},
		town:true,
		chance:function(){
			var a=0.25
			if ("魅魔的香水" in buff) a=0.75
			if(!("bad"in flag))return a
		}
	}
	ev["bad2"] = {
		ev: function () {
			show("你在市场拥挤的人群中遇到了痴汉。")
			var v = gain({ a_exp: 1 })
			if (check("wis", month + 14 + leak()) >= 0) {
				if ("常识改变：义警行动" in buff) {
					show("你对痴汉进行了公开处刑。")
					gain({ exp: 20, e_exp: 3, a_exp: 3, p_exp: 1, s_exp: 1 }, "流氓")
					show("在亲身体会到被侵犯的屈辱之后，想必对方不会再犯下同样的罪行。")
				} else {
					show("你抓住痴汉，将他送进了监狱。")
					gain({ money: 50, exp: 20 })
					gainflag("bad2")
				}
			} else {
				show("你不想发出声音引起他人注意。", true)
				show("这给了痴汉更多机会。")
				gain({ a_exp: 2 }, "流氓", true)
			}
		},
		town: true,
		chance: function () {
			var a = 0.25
			if ("魅魔的香水" in buff) a = 0.75
			if (!("bad2" in flag)) return a
		},
		start: 2
	}
	ev["bad3"] = {
		ev: function () {
			show("你在夜晚的街道上被强奸魔袭击了。")
			if (check("str", month + 16 + leak()) >= 0) {
				if ("常识改变：义警行动" in buff) {
					show("你对强奸魔进行了公开处刑。")
					gain({ exp: 30, e_exp: 3, v_exp: 4, s_exp: 2 }, "流氓")
					show("在亲身体会到被侵犯的屈辱之后，想必对方不会再犯下同样的罪行。")
				} else {
					show("你打倒了强奸魔，将他送进了监狱。")
					gain({ money: 50, exp: 30 })
					gainflag("bad3")
				}
			} else {
				show("强奸魔在你的体内射了一发后，满足地离去。")
				gain({ v_exp: 5, s_exp: 1, p_exp: 2 }, "流氓")
			}
		},
		town: true,
		chance: function () {
			var a = 0.25
			if ("魅魔的香水" in buff) a = 0.75
			if (!("bad3" in flag)) return a
		},
		start: 3
	}
	ev["bad5"] = {
		ev: function () {
			var v = check("wis", month + 18 + leak())
			if (v >= 0) {
				if ("常识改变：义警行动" in buff) {
					show("催眠师掏出一个奇怪的坠饰在你面前摇晃。")
					show("你抵抗了催眠的效果。")
					show("你对催眠师进行了公开处刑。")
					gain({ exp: 30, e_exp: 3, o_exp: 3, s_exp: 1 }, "流氓")
					show("在亲身体会到被侵犯的屈辱之后，想必对方不会再犯下同样的罪行。")
				} else {
					show("催眠师掏出一个奇怪的坠饰在你面前摇晃。")
					show("你抵抗了催眠的效果。")
					show("你打倒了催眠师，将他送进了监狱。")
					gain({ money: 100, exp: 30 })
					gainflag("bad5")
				}
			} else {
				gain({ v_exp: 5, o_exp: 5, s_exp: 2, p_exp: 2 }, "流氓")
				show("")
				show("你一觉醒来，身上满是凌辱的痕迹。")
				show("你完全不记得昨晚发生了什么。")
				if("遗忘诅咒" in buff)show("大概是自己高潮太强烈，把昨晚的事情忘了？")
			}
		},
		town: true,
		chance: function () {
			var a = 0.15
			if ("魅魔的香水" in buff) a = 0.45
			if (!("bad5" in flag)) return a
		},
		start: 4
	}
	ev["bad6"] = {
		ev: function () {
			show("“你也不想知道自己夜间露出的事情被人知道吧。”")
			if (rand(2) == 0) {
				show("遭到胁迫后，你只得交出了身体。")
				gain({ v_exp: 4, b_exp: 2, s_exp: 1 }, "流氓")
			} else {
				show("你坚决地拒绝了对方。")
				show("第二天，你的个人情报开始到处流传。")
				gainbuff("情报公开", 2)
				show("泄露的情报降低了你对抗流氓的成功率")
				gainflag("bad6")
			}
		},
		town: true,
		chance: function () {
			var a = 0.15
			if ("魅魔的香水" in buff) a = 0.45
			if (!("bad6" in flag) && past_event.includes("exhibition")) return a
		}
	}
	ev["bad7"] = {
		ev: function () {
			var v = check("str", month + 20 + leak())
			show("一群流氓在街头包围了你。")
			if (v >= 0) {
				show("在被打倒之后，他们声称自己是被魅魔催眠，逃过了牢狱之灾。")
				gain({exp:50})
				if ("常识改变：义警行动" in buff) {
					show("但他们逃不过义警的制裁。")
					gain({ v_exp: 5, o_exp: 5, a_exp: 5, s_exp: 3, e_exp: 5 }, "流氓")
					show("在亲身体会到被侵犯的屈辱之后，想必对方不会再犯下同样的罪行。")
				}
			} else {
				show("他们将你按在地上，当众展开了侵犯。")
				gain({ v_exp: 5, o_exp: 5, a_exp: 5, s_exp: 3, e_exp: 5}, "流氓")
			}
		},
		town: true,
		chance: function () {
			var a = 0.15
			if ("魅魔的香水" in buff) a = 0.45
			if (!("bad5" in flag)) return a
		},
		start: 5
	}
	ev["gambler"] = {
		ev: function () {
			show("赌徒邀请你玩一把骰子。")
			show("")
			if (check("dex", month + 18 + leak()) >= 0) {
				show("你发现对方在作弊，他赔了你一大笔钱。")
				gain({ money: 150})
				gainflag("bad4")
				if ("常识改变：义警行动" in buff) {
					show("你要求对方用身体赔偿。")
					gain({ a_exp: 3, v_exp: 3, s_exp: 2, p_exp: 2 }, "流氓")
					show("在亲身体会到被侵犯的屈辱之后，想必对方不会再犯下同样的罪行。")
				}
			} else {
				if (rand(2) == 0) {
					show("你小赚了一笔。")
					gain({ money: 50 })
				} else {
					if (status.money >= 100) {
						show("你先是赢了几局，然后越输越多。")
						gain({ money: -100 })
					} else {
						show("你输光了身上的钱。")
						gain({ money: -status.money })
						show("你决定压上身体来赌最后一局。")
						show("")
						if (rand(3) == 0) {
							show("你收回了一些损失。")
							gain({ money: 50 })
						} else {
							gain({ a_exp: 3, v_exp: 3, s_exp: 2, p_exp: 2 }, "流氓")
						}
					}
				}
			}
		},
		town: true,
		chance: function () {
			var a = 0.15
			if ("魅魔的香水" in buff) a = 0.3
			if (!("bad4" in flag) && status.money > 0) return a
		},
		start: 4
	}
	ev["gang"]={
		ev:function(){
			if(check("wis",month+18)>=0){
				show("你察觉到有人在你的酒里下了药。")
				gain({ drug_exp: 1 })
				pause()
				show("你假装昏迷，几个曾经被你送进监狱的流氓朝你靠了过来。")
				if ("常识改变：义警行动" in buff) {
					show("你等到他们开始侵犯你之后突然暴起发难，从被侵犯的一方变成了主动的一方。")
					gain({ exp: 60, e_exp: 5, v_exp: 5, a_exp: 5, o_exp: 5, s_exp: 3, p_exp: 3 }, "流氓")
				} else {
					show("你等到他们近身后突然暴起发难，将他们又一次送进了监狱。")
					gain({ money: 150, exp: 60 })
				}
			}else{
				show("你被人在酒里下了药。")
				gain({ drug_exp: 3 })
				pause()
				show("在下身的痛觉中，你醒了过来。")
				show("他们告诉你，这是对你将流氓送进监狱的报复。")
				gain({ v_exp: 5, a_exp: 5, o_exp: 5, s_exp: 3, p_exp: 3},"流氓")
				pause()
				show("事后他们脱光了你的衣服，将你锁在一间破旧的厕所里。")
				gainbuff("公共厕所",1)
			}
		},
		town:true,
		once:true,
		chance:function(){
			var a = 0.25
			if ("魅魔的香水" in buff) a = 0.5
			if(("bad"in flag)&&("bad2"in flag)&&("bad3"in flag))return 0.5
		},
		start:4
	}
	ev["toilet"]={
		ev:function(){
			ans=rand(4)
			show("你的身体被固定在墙内，上半身和下半身朝向不同的厕所隔间，作为便器提供免费的服务。")
			if (ans == 2) {
				gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5 }, "路人")
				show("", true)
				show("教官来到这间厕所，将你放了出来。")
				show("没有人敢阻拦他。")
				gainbuff("公共厕所", -10000)
				return
			} else if (ans == 0 && getbuff("公共厕所") >= 4) {
				show("随着使用人数的增加，你的身体变得越来越肮脏。")
				show("一个连流浪汉都不想使用的便器，就此被人们遗忘。", true)
				show("")
				show("结局：肉便器的末路")
				gameover = true
				endofgame("肉便器的末路")
				return
			} else if (ans == 1 && "刺客的密友" in buff && getop("刺客") > 0) {
				gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5 }, "路人")
				show("", true)
				show("刺客变装潜入了这间厕所。")
				show("她在使用完之后才把你救了出来。")
				show("你觉得还是不要过分在意细节比较好。")
				gainbuff("公共厕所", -10000)
				return
			} else {
				ans2 = rand(4)
				gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5 }, "路人")
			}
			gainbuff("公共厕所",1)
		},
		town:true,
		chance:function(){
			if("公共厕所"in buff)return 10000
		}
	}
	ev["toilet2"] = {
		ev: function () {
			ans = rand(4)
			show("你的身体被固定在墙内，上半身和下半身朝向不同的厕所隔间，作为便器提供免费的服务。")
			if (ans == 2) {
				gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5 }, "路人")
				show("", true)
				show("教官来到这间厕所，将你放了出来。")
				show("没有人敢阻拦他。")
				gainbuff("公共厕所", -10000)
				return
			} else if (ans == 3 && "契约：娼妇" in buff) {
				gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5 }, "路人")
				show("", true)
				show("娼馆老板带着几个打手将你从厕所中解救出来。")
				show("“我店里的商品可不能只卖这么点钱。”老板说道。")
				gainbuff("公共厕所", -10000)
				return
			} else if (ans == 0 && getbuff("公共厕所") >= 4) {
				show("随着使用人数的增加，你的身体变得越来越肮脏。")
				show("一个连流浪汉都不想使用的便器，就此被人们遗忘。", true)
				show("")
				show("结局：肉便器的末路")
				gameover = true
				endofgame("肉便器的末路")
				return
			} else {
				ans2 = rand(4)
				gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5 }, "路人")
			}
			gainbuff("公共厕所", 1)
		},
		town: false,
		chance: function () {
			if ("公共厕所" in buff) return 10000
		}
	}
	ev["exhibition"] = {
		ev: function () {
			show("你在夜晚的街道上露出。")
			gain({ e_exp: 2 })
			if (rand(10) + leak() >= 6 || status.name == "圣骑士") {
				show("你遇到了几个路人。")
				if (gain({ e_exp: 2 }) > 0) {
					show("强烈的羞耻感让你动弹不得。")
					randomattack(10, 1, "路人", false, 5)
				} else {
					show("你连忙逃跑了——希望他们没有看清你的脸。")
				}
			}
		},
		town: true,
		once: false,
		chance: function () {
			if (week % 4 == 2 && ("月夜雌兽" in buff)) {
				return 0
			}
			if (status.e_lv >= 3) return 0.5
		}
	}

	ev["exhibition_beast"] = {
		ev: function () {
			show("受到满月的影响，你的雌兽本能发作了。", true)
			show("你在夜晚的街道上爬行，时不时在墙角留下标记。")
			gain({ e_exp: 3, u_exp: 3 })
			if ("月之祝福" in buff) {
				show("由于月之祝福的效果，你的能力被增强了。")
				gain({ str: 1, dex: 1, wis: 1 })
			}
			if (rand(10)+leak() >= 4 || status.name == "圣骑士") {
				pause()
				show("你遇见了几个过路人。")
				show("你想要逃跑，却发现自己似乎忘了怎么直立行走。")
				gain({ e_exp: 5, v_exp: 6, a_exp: 3, s_exp: 3 })
			} else if (past_event.includes("prostitute_dog")) {
				pause()
				show("娼馆老板发现了你。")
				show("他将你牵到娼馆提供特别服务。")
				gain({ v_exp: 6, a_exp: 3, s_exp: 3, e_exp: 3, money: 100 + prostitute_bonus }, "客人")
			}
		},
		town: true,
		once: false,
		chance: function () {
			if (week % 4 == 2 && ("月夜雌兽" in buff)) {
				if ("月之祝福" in buff) return 6
				return 1.5
			}
		}
	}
	ev["cost"]={
		ev:function(){
			show("商队被打劫了，导致城内物价上涨。")
			show("等到商路恢复畅通后，物价却没有降回去的意思。")
			gain({pay:25})
		},
		town:true,
		once:true,
		chance:function(){
			return 0.5
		},
		start:2
	}
	ev["cost2"]={
		ev:function(){
			show("随着朋友数量的增加，交际费用也随之增长。")
			gain({pay:25})
		},
		town:true,
		once:true,
		chance:function(){
			if(getop("武道家")>0&&getop("魔法师")>0&&getop("刺客")>0)return 0.5
		},
	}
	ev["cost3"]={
		ev:function(){
			show("越到后期，旅馆越贵。")
			show("这可是剑与魔法世界的常识。")
			gain({pay:50})
		},
		town:true,
		once:true,
		chance:function(){
			return 0.5
		},
		start:4
	}
	ev["masturbation"]={
		ev:function(){
			if("露宿街头" in buff || status.e_lv>=3){
				show("你在公园的无人处自慰。")
				masturbation(Math.floor(status.lust/2)+3)
				pause()
				if(rand(8)+status.m_lv>=8){
					show("路过的男人发现了你。")
					show("你毫无抵抗地被侵犯了。")
					gain({v_exp:3,s_exp:1,e_exp:3},"路人")
				}else{
					show("你强忍着快感，没有发出声音。")
				}
			}else{
				show("你在旅馆的房间中自慰。")
				masturbation(Math.floor(status.lust/2)+3)
			}
		},
		town:true,
		once:true,
		chance: function () {
			if ("战士的修行" in buff && status.lust > 0) return 1
			if (status.lust > 0) return 0.5
		}
	}
	ev["masturbation2"]={
		ev:function(){
			show("你在地下城的无人处自慰。")
			masturbation(Math.floor(status.lust/2)+3)
			pause()
			if (rand(6) + status.m_lv >= 6) {
				if (chapter == 1) {
					show("路过的哥布林发现了你。")
					show("你毫无抵抗地被侵犯了。")
					gain({ v_exp: 3, s_exp: 1 }, "哥布林")
				}
				if (chapter == 2) {
					show("路过的史莱姆发现了你。")
					show("你毫无抵抗地被侵犯了——事后又因为史莱姆身上的催情粘液再自慰了一次。")
					gain({ a_exp: 4, m_exp: 2, s_exp: 1 }, "史莱姆")
				}
				if (chapter == 3) {
					show("路过的兽人发现了你。")
					show("你毫无抵抗地被侵犯了。")
					gain({ v_exp: 5, p_exp: 2, s_exp: 2 }, "兽人")
				}
				if (chapter == 4) {
					show("路过的触手发现了你。")
					show("你毫无抵抗地被侵犯了。")
					gain({ v_exp: 3, a_exp: 3, s_exp: 2 }, "触手")
				}
				if (chapter == 5) {
					show("路过的魅魔发现了你。")
					show("她对你的行为表示认可，并加入了你的自慰活动。")
					gain({ v_exp: 3, m_exp: 3, e_exp: 3, les_exp: 3 }, "自慰", true)
				}
			} else{
				show("你强忍着快感，没有发出声音。")
			}
		},
		town:false,
		once:false,
		chance:function(){
			if(status.lust>=5) return 0.3
		}
	}
}

function no_pant() {
	return (status.e_lv >= rand(6) + 1)
}

function leak() {
	var a = 0
	if (getbuff("情报公开") > 0) a += getbuff("情报公开")
	return 0
}

function masturbation(n) {
	ans = rand(4)
	if ("战士的修行" in buff) {
		show("你使用加粗的假阳具进行了激烈的自慰。")
		show("你一边挑战人体的极限，一边劝说自己这是战士的修行。")
		if (rand(3) == 0 && status.a_lv >= 1) {
			gain({ a_exp: status.m_lv + 5, m_exp: status.m_lv + 5, p_exp: status.m_lv + 5 }, "假阳具")
			return
		}
		gain({ v_exp: status.m_lv + 5, m_exp: status.m_lv + 5, p_exp: status.m_lv + 5 }, "假阳具")
		return
	}
	if (getflag("复仇者的屈辱") >= 2) {
		show("你想象着被宿敌侵犯的样子，进行了激烈的自慰。")
		gain({ a_exp: status.m_lv + 3, v_exp: status.m_lv + 3, m_exp: status.m_lv + 3 },"自慰",true)
		return
	}
	if (getbuff("淑女的收藏") > 0) {
		show("你使用假阳具进行了激烈的自慰。")
		if (rand(3) == 0 && status.a_lv >= 1) {
			gain({ a_exp: status.m_lv + 5, m_exp: status.m_lv + 5 }, "假阳具")
			return
		}
		gain({ v_exp: status.m_lv + 5, m_exp: status.m_lv + 5 }, "假阳具")
		return
	}
	if (ans == 0 && status.a_lv >= 2) {
		show("你将手指伸进肛门，体会着异样的快感。")
		gain({ a_exp: status.m_lv + 3, m_exp: status.m_lv + 3 }, "自慰", true)
	} else if (ans == 1 || (ans == 2 && status.v_lv >= 2)) {
		show("你将手指伸进阴道，刺激着内部。")
		gain({ v_exp: status.m_lv + 3, m_exp: status.m_lv + 3 }, "自慰", true)
	} else {
		show("你玩弄着敏感的乳头和阴蒂。")
		gain({ b_exp: 3, v_exp: 3, m_exp: 3 }, "自慰", true)
	}
}

