function hypno() {
	ev["mist"] = {
		ev: function () {
			show("奇怪的雾气在街道上弥漫。")
			show("当你在雾气之中行走，你感到一切都变得模糊不清。")
			newhypno()
		},
		town: true,
		chance: function () {
			if ("破雾者" in buff) return 0
			return 0.05 + month * 0.01
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
			show("酒馆老板告诉你，最近特调饮料库存短缺。")
			show("作为代替，他可以提供鲜榨饮料。")
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
			show("刺客认为对朋友的帮助不能停留在表面。")
			gainflag("刺客的帮助")
			gainop("刺客")
		},
		town: true,
		once: true,
		chance: function () {
			if (("刺客的密友" in buff) && getop("刺客") >= 0 && "常识改变：互相帮助" in buff) return 0.5
		}
	}

	ev["hypno_magic"] = {
		ev: function () {
			show("魔法师向你承认了盗窃内衣的变态罪行。")
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

	ev["hypno_guild"] = {
		ev: function () {
			show("会长召集了冒险者公会的成员。")
			show("她宣布最近有邪神的崇拜者在附近活动，他们似乎拥有扰乱心智的能力。")
			show("如果察觉到自己在做任何异常的举动，要立刻向公会汇报。")
			show("")
			show("然后是第二项议题：冒险者公会更名为肉便器公会。")
			gainbuff("常识改变：公会新政")
			show("和魔物战斗的人就应该被叫做冒险者，这可是常识。")
		},
		town: true,
		once: true,
		chance: function () {
			if ("破雾者" in buff) return 0
			if(!past_event.includes("mist")) return 0
			if (hypnocnt() > 0) return hypnocnt() * 0.05
		}
	}

	ev["hypno_guild2"] = {
		ev: function () {
			show("你前往公共厕所履行冒险者的职责。")
			gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5, p_exp:4 }, "路人")
		},
		town: false,
		chance: function () {
			if ("常识改变：公会新政" in buff) return 1
		}
	}

	ev["hypno_guild3"] = {
		ev: function () {
			show("为了宣传公会的新政，冒险者们当街发放了大量的免费做爱券，迎来了一致好评。")
			gainbuff("免费做爱券", 3)
			show("签署了你的名字的免费做爱券开始流通。")
		},
		town: true,
		once: true,
		chance: function () {
			if ("常识改变：公会新政" in buff) return 2
		}
	}

	ev["hypno_bonus"] = {
		ev: function () {
			show("为了应对冒险者公会的活跃，娼馆推出了优惠措施。")
			gainbuff("卖春价格", -25)
			prostitute_bonus -= 25
		},
		town: true,
		once: true,
		chance: function () {
			if ("常识改变：公会新政" in buff && "卖春价格" in buff) return 0.5
		}
	}

	ev["hypno_boss"] = {
		ev: function () {
			show("你发现了一个戴着兜帽的男人正在城镇附近布置魔法阵。")
			if (rand(3) == 0 && getop("神秘少女") >= 0) {
				show("神秘少女正在一旁和他争论。")
				show("“我可是你应该崇拜的伟大存在！”")
				show("“……我有设置过强化妄想的法阵吗？”")
				show("“还不快将你收集的魔力献给我！”")
				show("“能不能不要妨碍我工作。”")
				show("“等到我恢复真身，一定要让你明白无尽混沌的恐怖……”")
				show("“我和教会的变态不同，对小孩子的身体没有兴趣。”")
				show("神秘少女气愤地离开了。")
				show("")
			}
			show("你想要阻止邪神祭司的行动。")
			show("邪神祭司念了一个古怪的咒语，周围的一切被雾气笼罩。")
			gainflag("hypnoboss", chapter)
			var i = 0
			while (i <= 2) {
				var r = rand(10)
				var d = 0
				if (r == 0 && "触手服" in buff) {
					show("由于迷雾的影响，触手服狂乱地活跃起来。")
					gain({ v_exp: 3, a_exp: 2, p_exp: 2, s_exp: 1 }, "触手服")
					show("你勉强保持着身体的平衡。")
					d = 1
				}
				if (r == 1 && "诅咒铃铛" in buff) {
					show("由于迷雾的影响，诅咒铃铛剧烈地摇晃。")
					gain({ b_exp: 4, p_exp: 2 }, "诅咒铃铛", true)
					show("游荡怪物从雾中冒出。")
					show("你击退了迎面扑来的怪物，却发现那只是幻象。")
					d = 1
				}
				if (r == 2 && "魔力之卵" in buff) {
					show("你正要对邪神祭司发起攻击，魔力之卵以前所未有的强度振动起来。")
					v = gain({ v_exp: 6 }, "魔力之卵", true)
					show("快感打断了你的行动。")
					d = 1
				}
				if (r == 3 && ("母乳体质" in buff)) {
					show("由于迷雾的影响，你不受控制地大量喷乳")
					gain({ b_exp: 4 }, null, "extra")
					show("快感打断了你的行动。")
					d = 1
				}
				if (r == 4 && "漏尿体质" in buff) {
					show("由于迷雾的影响，你不受控制地大量漏尿")
					gain({ u_exp: 4 }, null, "extra")
					show("快感打断了你的行动。")
					d = 1
				}
				if (r == 5 || r == 6) {
					if (hypnocnt() >= rand(10) - 2) {
						show("你冲向邪神祭司，打出全力一击。")
						show("你一边向他展示着自己的小穴，一边激烈地自慰。")
						gain({ m_exp: 4, v_exp: 4, e_exp: 2 }, "自慰", true)
						show("冒险者的最强攻击技能是自慰，这可是常识。")
						d = 1
					} else {
						show("你冲向邪神祭司，打出全力一击。")
						show("每前进一步，你都会感到更强的快感。")
						gain({ orgasm: 3 }, "祭司", true)
						show("但这无法阻止你已经挥出的武器。")
						if ("常识改变：义警行动" in buff) {
							show("你对邪神祭司进行了处刑。")
							gain({ exp: 100, money: 100, v_exp: 6, s_exp: 2 }, "祭司")
						} else {
							gain({ exp: 100, money: 100 })
						}
						gainbuff("破雾者")
						show("奇怪的雾气从街道上消失了。")
						if ("常识改变：勇者之证" in buff) {
							removebuff("常识改变：勇者之证")
							gain({ e_lv: -3 })
							bonus_status.e_lv -= 3
						}
						if ("常识改变：互相帮助" in buff) {
							removebuff("常识改变：互相帮助")
						}
						if ("常识改变：隐藏菜单" in buff) {
							removebuff("常识改变：隐藏菜单")
						}
						if ("常识改变：义警行动" in buff) {
							removebuff("常识改变：义警行动")
						}
						if ("常识改变：公会新政" in buff) {
							removebuff("常识改变：公会新政")
						}
						return
					}
				}
				if (r == 7 && ("败北愿望" in flag || "咕杀" in flag)) {
					show("由于迷雾的影响，你将邪神祭司幻视成了兽人。")
					show("你幻想着接下来会怎么被兽人侵犯，身体无法移动。")
					d = 1
				}
				if (r == 8 && ("月夜雌兽" in flag)) {
					show("由于迷雾的影响，你将邪神祭司幻视成了哥布林。")
					show("你急切地想要向哥布林展示自己进行母狗练习的成果。")
					show("你扑倒了邪神祭司。")
					gain({ exp: 100, money: 100, o_exp: 4, v_exp: 4, s_exp: 2 }, "祭司")
					gainbuff("破雾者")
					show("奇怪的雾气从街道上消失了。")
					if ("常识改变：公会新政" in buff) {
						show("冒险者公会恢复了原样。")
						show("但没有人察觉到，恢复的仅仅只有名字。")
					}
					return
				}
				if (r == 9) {
					show("你冲向邪神祭司，打出全力一击。")
					show("邪神祭司的身体化作一团雾气。")
					show("你意识到自己击中的只是一个幻象。")
					d = 1
				}
				if (d == 1) {
					i++
					if (i == 1) {
						show("邪神祭司打算逃跑。")
					}
					if (i == 2) {
						show("邪神祭司乘机逃跑了。")
						gainflag("hypnoboss", chapter)
						show("你试图追击，却在迷雾中失去了方向感。")
//						newhypno()
						return
					}
				}
			}
		},
		town: false,
		chance: function () {
			if ("破雾者" in buff) return 0
			if (hypnocnt() == 0) return 0
			if (getflag("hypnoboss") == chapter) return 0
			if ("常识改变：公会新政" in buff) return 0.2
			else return 0.1
		}
	}
}

function hypnocnt() {
	var cnt = 0
	if ("常识改变：勇者之证" in buff) cnt++
	if ("常识改变：隐藏菜单" in buff) cnt++
	if ("常识改变：义警行动" in buff) cnt++
	//if ("常识改变：分享秘密" in buff) cnt++
	if ("常识改变：互相帮助" in buff) cnt++
	return cnt
}

let maxhypno=4

function newhypno() {
	if ("破雾者" in buff) {
		show("由于破雾者的效果，你不会再获得常识改变。")
		return
	}
	if (hypnocnt() == maxhypno) {
		show("你无法获得更多的常识改变。")
		gain({ lewd: 2 })
	} else {
		var r=rand(maxhypno)
		if (r == 0 && !("常识改变：勇者之证" in buff)) {
			gainbuff("常识改变：勇者之证")
			show("真正的勇者不必依赖装备的保护，这可是常识。")
			gain({ e_lv: 3, lewd: 3 })
			bonus_status.e_lv += 3
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
		if (r == 3 && !("常识改变：互相帮助" in buff)) {
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
