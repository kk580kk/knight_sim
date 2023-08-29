function status_ev() {
	ev["saint"] = {
		ev: function () {
			show("你无法压制自己的发情状态，打算在地下城里找个没人的地方自慰。")
			show("这时，你突然听到一阵锁链在地上拖行的声音。")
			show("一个身穿各种刑具的女人向你走来。")
			show("“你不必承担这些……”")
			show("她给了你一个拥抱。")
			show("你积累的欲望突然消失了。")
			gain({ lust: -status.lust })
			show("你想和她交谈，不知为何却无法开口。")
			show("你目送罪人离开。")
			gainop("罪人")
			if ("魔族意志" in buff) {
				show("等到罪人走远之后，你突然意识到自己忘了告诉她：发情对你算正面状态。")
			}
		},
		town: false,
		once: true,
		chance: function () {
			if (status.lust >= 5) return 0.25
		}
	}
	ev["saint_holywater"] = {
		ev: function () {
			show("你听到锁链在地上拖行的声音。")
			show("你朝着声音的方向走去。")
			show("你没能找到罪人，却发现了一个宝箱。")
			var r = rand(3)
			if (r == 0) {
				show("你获得了一瓶金黄色的圣水。")
				setlocalkey("holywater1")
			} else if (r == 1) {
				show("你获得了一瓶乳白色的圣水。")
				setlocalkey("holywater2")
			} else {
				show("你获得了一瓶有些粘稠的半透明圣水。")
				setlocalkey("holywater3")
			}
			show("你伸手触摸，发现圣水甚至还是热的。")
			show("这是怎么回事？")
			gainbuff("圣水的恩惠", 8)
			show("在接下来的一个月内，你的事件判定会进行两次并取较好的结果。")
			water()
			gainop("罪人")
		},
		town: false,
		once: true,
		chance: function () {
			if (getop("罪人") >= 0) return 0.05
		}
	}
	ev["saint2"] = {
		ev: function () {
			show("你身上的触手服躁动不安。")
			show("不知道为什么，你觉得触手服在……害怕？")
			gain({ v_exp: 2, a_exp: 2, b_exp: 2 }, "触手服", true)
			show("这时，你听到锁链在地上拖行的声音。")
			show("一个身穿各种刑具的女人向你走来。")
			show("“你不必承担这些……”")
			show("她给了你一个拥抱。")
			show("触手服从你的身上消失了。")
			removebuff("触手服")
			show("你想和她交谈，不知为何却无法开口。")
			show("你注意到罪人的衣领里冒出了触手。")
			gainop("罪人")
			if ("支配触手" in buff) {
				show("等到罪人走远之后，你突然意识到自己忘了告诉她：触手服对你算正面状态。")
			}
			gainflag("净化")
		},
		town: false,
		once: true,
		chance: function () {
			if ("净化" in flag) return 0
			if (getop("罪人") >= 0 && "触手服" in buff) return 0.05
		}
	}

	ev["saint3"] = {
		ev: function () {
			show("在一次凄惨的败北后，你狼狈地在地下城里逃窜着。")
			show("但是，你跑得越快，诅咒铃铛就会吸引来越多的游荡怪物。")
			gain({ b_exp: 3 }, "诅咒铃铛", true)
			show("这时，你听到锁链在地上拖行的声音。")
			show("一个身穿各种刑具的女人向你走来。")
			show("“你不必承担这些……”")
			show("她给了你一个拥抱。")
			show("诅咒铃铛从你的身上消失了。")
			removebuff("诅咒铃铛")
			show("你想和她交谈，不知为何却无法开口。")
			show("叮叮当当的响声随着罪人渐行渐远。")
			gainop("罪人")
			gainflag("净化")
		},
		town: false,
		once: true,
		chance: function () {
			if (status.name == "被诅咒的骑士") return 0
			if ("净化" in flag) return 0
			if (getop("罪人") >= 0 && "诅咒铃铛" in buff) return 0.05
		}
	}
	ev["saint4"] = {
		ev: function () {
			show("你忍耐着来自魔力之卵的刺激，艰难地斩杀了最后一个敌人。")
			show("你蹲在地上，等待振动结束——但这次的振动却比平时更持久。")
			gain({ v_exp: 4 }, "魔力之卵", true)
			show("这时，你听到锁链在地上拖行的声音。")
			show("一个身穿各种刑具的女人向你走来。")
			show("“你不必承担这些……”")
			show("她给了你一个拥抱。")
			show("魔力之卵从你的身上消失了。")
			removebuff("魔力之卵")
			show("你想和她交谈，不知为何却无法开口。")
			show("嗡嗡的振动声随着罪人渐行渐远。")
			gainop("罪人")
			gainflag("净化")
		},
		town: false,
		once: true,
		chance: function () {
			if (status.name == "被诅咒的骑士") return 0
			if ("净化" in flag) return 0
			if (getop("罪人") >= 0 && "魔力之卵" in buff) return 0.05
		}
	}
	ev["saint5"] = {
		ev: function () {
			if (status.name == "野蛮人") {
				show("你发现魔法颜料绘制的战纹并不会因为水洗而褪色。")
				show("你对此很满意——唯一的遗憾就是，大部分花纹绘制在会长一再强调不能给别人看的地方。")
				show("这时，你听到锁链在地上拖行的声音。")
				show("一个身穿各种刑具的女人向你走来。")
				show("“你不必承担这些……”")
				show("她给了你一个拥抱。")
				show("肉体书写从你的身上消失了。")
				removebuff("肉体书写")
				show("你想和她交谈，不知为何却无法开口。")
				show("你注意到罪人的脸上出现了一些你看不懂的纹路。")
				gainop("罪人")
				gainflag("净化")
				gain({ str: -2, dex: -2, wis: -2 })
			} else {
				show("你试图洗去身上的魔法颜料。")
				show("但是，不管如何搓洗，让你倍感耻辱的文字都不见丝毫的模糊。")
				show("这时，你听到锁链在地上拖行的声音。")
				show("一个身穿各种刑具的女人向你走来。")
				show("“你不必承担这些……”")
				show("她给了你一个拥抱。")
				show("肉体书写从你的身上消失了。")
				removebuff("肉体书写")
				show("你想和她交谈，不知为何却无法开口。")
				show("你注意到罪人的脸上出现了“叛徒”，“渎神者”等字样。")
				gainop("罪人")
				gainflag("净化")
			}
		},
		town: false,
		once: true,
		chance: function () {
			if ("净化" in flag) return 0
			if (getop("罪人") >= 0 && "肉体书写" in buff) return 0.05
		}
	}
	ev["saint6"] = {
		ev: function () {
			show("你试图斩断奴隶脚镣。")
			show("但脚镣的材料比你预想得还要坚固。")
			show("这时，你听到锁链在地上拖行的声音。")
			show("一个身穿各种刑具的女人向你走来。")
			show("“你不必承担这些……”")
			show("她给了你一个拥抱。")
			show("奴隶脚镣从你的身上消失了。")
			var v = buff["奴隶脚镣"]
			removebuff("奴隶脚镣")
			gain({ str: v, dex: v, wis: v })

			show("你想和她交谈，不知为何却无法开口。")
			show("多一根脚链丝毫不影响她的行动。")
			gainop("罪人")
			gainflag("净化")
		},
		town: false,
		once: true,
		chance: function () {
			if ("净化" in flag) return 0
			if (getop("罪人") >= 0 && "奴隶脚镣" in buff && !("放贷者的脚镣" in flag || "哥布林的脚镣" in flag)) return 0.05
		}
	}
	ev["saint_end"] = {
		ev: function () {
			show("你听到锁链在地上拖行的声音。")
			show("你朝着声音的方向走去。")
			show("你遇到了罪人。")
			show("你有很多话想对她说，却不知道该从什么说起。")
			if ("传奇克星" in buff) {
				show("“我前一段时间……遇到了公主骑士。她已经……快要恢复正常了。”")
				show("你意识到罪人已经发现了你在说谎，但你还是继续说了下去：")
				show("“你也会恢复正常的。一切……所有的一切都会恢复正常的。”")
			} else {
				show("“只要打倒施咒者，常识改变就会失效——然后一切都能够恢复正常……”")
				show("你意识到罪人并不同意你说的话，但你还是继续说了下去：")
				show("“相信我，真的可以。”")
			}
			show("“谢谢你。”")
			show("她给了你一个拥抱。")
			show("你想再多说几句，不知为何却无法开口。")
			show("你目送罪人离开。")
			gainop("罪人")
			gainbuff("圣女之泪")
			show("你的事件判定会进行两次并取较好的结果。")
			setachievement("圣女之泪")
		},
		town: false,
		once: true,
		chance: function () {
			if (getop("罪人") >= 1 && ("传奇克星" in buff || "破雾者" in buff)) return 0.5
		},
		start: 5
	}

	ev["weaka"] = {
		ev: function () {
			show("随着后穴经验的积累，你的屁股越来越像是性器，不再能看到当初久经锻炼的样子。")
			gainbuff("弱点：菊")
			gain({ lewd: 2, a_lv:2, str: -2 })
			bonus_status.a_lv+=2
			getweakness()
		},
		town: true,
		once: true,
		chance: function () {
			if (status.a_exp >= weakness.a)
				if ("堕落之种" in buff) return 2 + status.a_lv*0.1
				else return 1 + status.a_lv * 0.1
		}
	}
	ev["weakb"] = {
		ev: function () {
			show("随着胸部经验的积累，你的乳头时常挺立，只要轻轻一碰就会让你全身无力。")
			gainbuff("弱点：胸")
			gain({ lewd: 2, b_lv: 2, str: -2 })
			bonus_status.b_lv += 2
			getweakness()
		},
		town: true,
		once: true,
		chance: function () {
			if (status.b_exp >= weakness.b) if ("堕落之种" in buff) return 2 + status.b_lv * 0.1
			else return 1 + status.b_lv * 0.1
		}
	}
	ev["weako"] = {
		ev: function () {
			show("随着口腔经验的积累，你的嘴变得更加适合口交，而不是念咒。")
			gainbuff("弱点：口")
			gain({ lewd: 2, o_lv: 2, wis: -2 })
			bonus_status.o_lv += 2
			getweakness()
		},
		town: true,
		once: true,
		chance: function () {
			if (status.o_exp >= weakness.o) if ("堕落之种" in buff) return 2 + status.o_lv * 0.1
			else return 1 + status.o_lv * 0.1
		}
	}
	ev["weaks"] = {
		ev: function () {
			show("随着精液经验的积累，你只要闻到精液的味道，就无法冷静地思考。")
			gainbuff("弱点：精")
			gain({ lewd: 2, s_lv: 2, wis: -2 })
			bonus_status.s_lv += 2
			getweakness()
		},
		town: true,
		once: true,
		chance: function () {
			if (status.s_exp >= weakness.s) if ("堕落之种" in buff) return 2 + status.s_lv * 0.1
			else return 1 + status.s_lv * 0.1
		}
	}
	ev["weakv"] = {
		ev: function () {
			show("随着阴道经验的积累，你对下体的刺激越来越敏感，哪怕被衣服摩擦到也会有感觉。")
			gainbuff("弱点：穴")
			gain({ lewd: 2, v_lv: 2, dex: -2 })
			bonus_status.v_lv += 2
			getweakness()
		},
		town: true,
		once: true,
		chance: function () {
			if (status.v_exp >= weakness.v) if ("堕落之种" in buff) return 2 + status.v_lv * 0.1
			else return 1 + status.v_lv * 0.1
		}
	}
	ev["weakp"] = {
		ev: function () {
			show("随着受虐经验的积累，你渴望疼痛的感觉，时不时会忘记闪避敌人的攻击。")
			gainbuff("弱点：虐")
			gain({ lewd: 2, p_lv: 2, dex: -2 })
			bonus_status.p_lv += 2
			getweakness()
		},
		town: true,
		once: true,
		chance: function () {
			if (status.p_exp >= weakness.p) if ("堕落之种" in buff) return 2 + status.p_lv * 0.1
			else return 1 + status.p_lv * 0.1
		}
	}
}

function curse(val) {
	var tmp=rand(4)
	if (val != null) tmp = val
	if (tmp == 0 && getbuff("遗忘诅咒")<0) {
		gainbuff("遗忘诅咒")
		show("每当你达到高潮时，都会忘记一些战斗经验。")
		return
	} else if (tmp == 1 && getbuff("感度倍增") < 0) {
		gainbuff("感度倍增")
		show("你的全身开发度提高")
		bonus_status.a_lv += 5
		bonus_status.b_lv += 5
		bonus_status.v_lv += 5
		bonus_status.o_lv += 5
		gain({ a_lv: 5, b_lv: 5, v_lv: 5, o_lv: 5, lewd: 20 })
		return
	} else if (tmp == 2 && getbuff("魔力之卵") < 0) {
		gainbuff("魔力之卵")
		show("当你的掷骰结果为19或者更高时，魔力之卵会开始震动")
		if (status.name == "术士") {
			show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
			gain({exp:50})
		}
		return
	} else if (tmp == 3 && getbuff("诅咒铃铛") < 0) {
		gainbuff("诅咒铃铛")
		show("当你受到侵犯时，铃铛的响声会引来更多的袭击者")
		if (status.name == "术士") {
			show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
			gain({ exp: 50 })
		}
		return
	}
	curse()
}

function countcurseditem() {
	var a = 0
	if ("触手服" in buff) a++
	if ("诅咒铃铛" in buff) a++
	if ("魔力之卵" in buff) a++
	if ("试炼的后庭拉珠" in buff) a++
	if ("罪人的颈环" in buff) a++
	return a
}