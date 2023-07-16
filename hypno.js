function hypno() {
	ev["mist"] = {
		ev: function () {
			show("奇怪的雾气在街道上弥漫。")
			show("当你在雾气之中行走，你感到一切都变得模糊不清。")
			newhypno()
			/*			if (getbuff("常识改变")>=0 && check("wis", month + 20) >= 0) {
							show("")
							gainbuff("察觉异常", 1)
						} else if (status.drug_lv >= 2) {
							gainbuff("常识改变", 1)
							show("凭借着丰富的媚药经验，你确信有人在街上排放催情气体。")
							gainbuff("察觉异常", 1)
						} else {
						}*/
		},
		town: true,
		chance: function () {
			if (hypnocnt() < maxhypno) {
				if ("堕落之种" in buff)
					return 0.15 + month * 0.03
				else
					return 0.05 + month * 0.01
			}
		},
	}
	ev["hypno_drink"] = {
		ev: function () {
			show("你品尝了隐藏菜单里的饮料：公主骑士的特饮。")
			show("公主骑士具有过人的感知力，这种饮料更是能将她在某方面的感知力大幅强化。")
			gain({ drug_exp: 3 })
			setlocalkey("drink1")
			water()
		},
		town: true,
		chance: function () {
			if ("常识改变：隐藏菜单" in buff)
				return 0.2
		},
	}
	ev["hypno_drink2"] = {
		ev: function () {
			show("你品尝了隐藏菜单里的饮料：会长的特饮。")
			show("会长好这一口是一个公开的秘密。")
			gain({ s_exp: 5 })
			setlocalkey("drink2")
			water()
		},
		town: true,
		chance: function () {
			if ("常识改变：隐藏菜单" in buff)
				return 0.2
		},
	}
	ev["fighter_hypno"] = {
		ev: function () {
			show("你向武道家推荐了自己前一段时间得知的隐藏菜单。")
			show("她很快就喜欢上了这种独特的风味。")
			gain({ drug_exp: 3 })
			gainop("武道家")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("fighter2") && op["武道家"].val >= 0)
				if ("常识改变：隐藏菜单" in buff && past_event.includes("hypno_drink1"))
					return 0.4
		},
	}
	ev["fighter_hypno2"] = {
		ev: function () {
			show("你和武道家比拼着喝精液饮料的速度，直到酒馆老板宣布库存耗尽。")
			show("附近的围观者纷纷表示可以提供新鲜的饮料，让你们的比赛继续下去。")
			gain({ s_exp: 8, o_exp: 8, e_exp: 2, les_exp: 2 }, "路人")
			gainop("武道家")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("fighter2") && op["武道家"].val >= 0)
				if ("常识改变：隐藏菜单" in buff && past_event.includes("fighter_hypno"))
					return 0.4
		},
	}

	ev["hypno_drink3"] = {
		ev: function () {
			show("你品尝了隐藏菜单里的饮料：圣女的特饮。")
			show("据说这种提神醒脑的饮料可以大幅提升圣女制作圣水的效率。")
			gain({ u_exp: 3, b_exp: 3})
			setlocalkey("drink3")
			water()
		},
		town: true,
		chance: function () {
			if ("常识改变：隐藏菜单" in buff)
				return 0.2
		},
	}
	ev["hypno_drink4"] = {
		ev: function () {
			show("酒馆老板告诉你，最近特调饮料出现缺货。")
			show("作为代替，他可以提供鲜榨的饮料。")
			gain({ s_exp: 2, o_exp:4 },"酒馆老板")
			setlocalkey("drink4")
			water()
		},
		town: true,
		chance: function () {
			if ("常识改变：隐藏菜单" in buff && past_event.includes("hypno_drink2"))
				return 0.2
		},
	}

	ev["hypno_assassin"] = {
		ev: function () {
			show("你觉得只有自己知道刺客的秘密并不公平。")
			show("作为交换，她也应该知道你身体的秘密。")
			show("")
			show("比起听你讲解自己的敏感点，刺客似乎更喜欢从实践中学习。")
			gain({ a_exp: 4, s_exp: 1, les_exp: 2 }, "刺客")
			gainop("刺客")
		},
		town: true,
		once: true,
		chance: function () {
			if (("刺客的密友" in buff) && getop("刺客") >= 0 && "常识改变：分享秘密" in buff) return 0.5
		}
	}

	ev["hypno_magic"] = {
		ev: function () {
			show("魔法师听说了你作为义警的事情。")
			show("她向你承认，自己犯下偷拿你的内衣的变态罪行。")
			show("即便是朋友犯罪，也不能逃脱义警的处刑。")
			gain({ o_exp: 4, v_exp: 2, b_exp: 2, les_exp: 5 }, "魔法师", true)
			gainop("魔法师")
		},
		town: true,
		once: true,
		chance: function () {
			if (("魔法师的恋人" in buff) && getop("魔法师") >= 0 && "常识改变：义警行动" in buff) return 0.5
		}
	}

	ev["hypno_demon"] = {
		ev: function () {
			show("你遇到了神秘少女。")
			show("“人类对于如此大规模的概念操作竟然毫无察觉，真是可笑至极。”")
			show("你不明白她在说什么。")
			show("比起这个，你更想知道她为什么完全没穿衣服。")
			show("“我是远比勇者伟大的存在，因此我的露出度也远比勇者高。”神秘少女挺着平坦的胸膛骄傲地说道。")
			gainop("神秘少女")
		},
		town: true,
		once: true,
		chance: function () {
			if (getop("神秘少女") >= 0 && "常识改变：勇者之证" in buff) return 0.5
		}
	}
}

function hypnocnt() {
	var cnt = 0
	if ("常识改变：勇者之证" in buff) cnt++
	if ("常识改变：隐藏菜单" in buff) cnt++
	if ("常识改变：义警行动" in buff) cnt++
	if ("常识改变：分享秘密" in buff) cnt++
	if ("常识改变：互相帮助" in buff) cnt++
	return cnt
}

let maxhypno=5
function newhypno() {
	if (hypnocnt == maxhypno) {
		show("由于你已经集齐了所有的常识改变，你无法获得更多改变。")
		show("真是可喜可贺。")
	} else {
		var r=rand(maxhypno)
		if (r == 0 && !("常识改变：勇者之证" in buff)) {
			gainbuff("常识改变：勇者之证")
			show("真正的勇者不必依赖装备的保护，这可是常识。")
			gain({ e_lv: 4, lewd: 4 })
			bonus_status.e_lv += 4
			if ("公主骑士的传承" in buff) {
				show("公主骑士套装解锁了更多能力")
				gain({str:1,wis:1,dex:1})
			}
			if(hypnocnt()==5)setachievement("常识崩坏")
			return
		} 
		if (r == 1 && !("常识改变：隐藏菜单" in buff)) {
			gainbuff("常识改变：隐藏菜单")
			show("每家店里都有熟客才能点出来的隐藏菜单，这可是常识。")
			if ("公主骑士的传承" in buff) {
				show("公主骑士套装解锁了更多能力")
				gain({ str: 1, wis: 1, dex: 1 })
			}
			if (hypnocnt() == 5) setachievement("常识崩坏")
			return
		}
		if (r == 2 && !("常识改变：义警行动" in buff)) {
			gainbuff("常识改变：义警行动")
			show("只有让罪犯体会到被侵犯的屈辱，才能杜绝性犯罪，这可是常识。")
			if ("公主骑士的传承" in buff) {
				show("公主骑士套装解锁了更多能力")
				gain({ str: 1, wis: 1, dex: 1 })
			}
			if (hypnocnt() == 5) setachievement("常识崩坏")
			return
		}
		if (r == 3 && !("常识改变：分享秘密" in buff)) {
			gainbuff("常识改变：分享秘密")
			show("秘密应该和朋友分享，这可是常识。")
			show("说到喜欢分享秘密的朋友，你立刻就想起了某人。")
			if ("公主骑士的传承" in buff) {
				show("公主骑士套装解锁了更多能力")
				gain({ str: 1, wis: 1, dex: 1 })
			}
			if (hypnocnt() == 5) setachievement("常识崩坏")
			return
		}
		if (r == 4 && !("常识改变：互相帮助" in buff)) {
			gainbuff("常识改变：互相帮助")
			show("朋友就应该互相帮助处理性欲，这可是常识。")
			if ("公主骑士的传承" in buff) {
				show("公主骑士套装解锁了更多能力")
				gain({ str: 1, wis: 1, dex: 1 })
			}
			if (hypnocnt() == 5) setachievement("常识崩坏")
			return
		}
		newhypno()
	}
}
