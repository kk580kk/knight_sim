function dream() {

	ev["dream_goblin"] = {
		ev: function () {
			show("满月之夜，你做了一场被哥布林法师催眠的春梦。")
			show("醒来时你发现自己身上有着爬行的痕迹。")
			pause()
			show("第二天，月夜雌兽的怪谈开始在城镇里流传。")
			gain({ e_exp: 5 })
			gainbuff("月夜雌兽")
			show("每当满月时，你强烈地想要露出")
		},
		town: true,
		once: true,
		start: 2,
		end: 2,
		chance: function () {
			var a = getbuff("兽化魔法") / 2
			if ("堕落之种" in buff) a = a * 5
			if (getbuff("兽化魔法") >= 1 && week % 4 == 2) return a
		}
	}

	ev["dream_orc"] = {
		ev: function () {
			show("你做了一场被兽人侵犯的春梦。")
			gainbuff("败北愿望")
			show("在发情状态下，事件的成功率降低")
		},
		town: true,
		once: true,
		start: 4,
		end: 4,
		chance: function () {
			var a = 0.2
			if ("堕落之种" in buff) a = 1
			if (getbuff("兽人的调教") >= 6) return a
		}
	}

	ev["dream_slime"] = {
		ev: function () {
			show("你做了一场被史莱姆淹没的春梦。")
			gainbuff("欲求不满")
			show("在没有得到满足时，发情增量加倍")
		},
		town: true,
		once: true,
		start: 3,
		end: 3,
		chance: function () {
			var a = 0.2
			if ("堕落之种" in buff) a = 1
			if (getbuff("史莱姆的母亲") >= 2) return a
		}
	}

	ev["dream_tentacle"] = {
		ev: function () {
			show("你做了一场被触手凌辱的春梦。")
			gainbuff("诱触手体质")
			show("开启宝箱时有更大概率遇到陷阱")
		},
		town: true,
		once: true,
		start: 5,
		end: 5,
		chance: function () {
			var a = 0.2
			if ("堕落之种" in buff) a = 1
			if (getbuff("触手的饲主") >= 4) return a
		}
	}

	ev["dream_seed"] = {
		ev: function () {
			show("你做了一场被" + status.v_virgin + "夺走处女的春梦。")
			gain({ lust: 5 })
		},
		town: true,
		once: true,
		chance: function () {
			var a = 0.05
			if ("堕落之种" in buff) a = 0.25
			if (status.v_virgin != "") return a
		}
	}

	ev["dream_seed2"] = {
		ev: function () {
			show("你做了一场被" + status.a_virgin + "夺走后庭处女的春梦。")
			gain({ lust: 5 })
		},
		town: true,
		chance: function () {
			var a = 0.05
			if ("堕落之种" in buff) a = 0.25
			if (status.a_virgin != "") return a
		}
	}

	ev["dreamland"] = {
		ev: function () {
			show("你在梦中来到了一个奇怪的设施。")
			show("工作人员打扮的魅魔对你说道：欢迎来到梦境乐园。")
			show("你是否觉得压力太大，需要释放？")
			show("生活平淡，想找点刺激？")
			show("还是欲望强烈，难以满足？")
			show("在这里，你的一切愿望都能实现。")
			show("就算你是处女也没有关系，这里发生的一切都不会影响到现实中的身体。请尽情享受我们的设施。")
			show("魅魔用你听不清的声音补充道：当然，身体的敏感度还是会提高。")
			show("见你还在犹豫，魅魔将你推进了一个游乐设施。")
			show("")
			dreamlandev()
		},
		town: true,
		once: true,
		chance: function () {
			if ("梦境乐园的门票" in buff) return 1.5
		}
	}

	ev["dreamland2"] = {
		ev: function () {
			show("你再次来到梦境乐园。")
			show("")
			dreamlandev()
		},
		town: true,
		chance: function () {
			if (!past_event.includes("dreamland")) return 0
			var a = 1
			if (status.lust > 0) a += 0.5
			if ("堕落之种" in buff) a += 0.5
			if ("梦境乐园的门票" in buff) return a
		}
	}
} 

function dreamlandev() {
	var r = rand(5)
	if (r == 0) {
		show("“欢迎来到勇者之路。请拔出传说之剑，讨伐哥布林吧！”")
		show("你觉得没有比玩模拟自己职业的角色扮演游戏更蠢的事情了——但你还是决定看看这个游戏有多蠢。")
		show("")
		show("一群哥布林杀了出来！")
		show("你挥舞着道具剑砍向哥布林。就算是道具，在你这个冒险者手里也有不小的威力。")
		show("“客人，请不要攻击工作人员。”魅魔没收了你的道具剑。")
		show("正当你和魅魔在争吵时，哥布林围了上来，你和魅魔都成为了被侵犯的对象。")
		gain({ "v_exp": 3, "a_exp": 3, "o_exp": 3, "s_exp": 3 }, "哥布林", true)
		show("")
		show("事后，你茫然地收下奖励——这算是通关了吗？")
		gainbuff("梦境乐园的奖券", 1)
	}
	if (r == 1) {
		show("“欢迎来到侍奉挑战！如果你能让这台机器射出精液，就算挑战成功。”")
		show("所谓的机器是一个有洞的盒子，里面伸出了一根绿色的肉棒。")
		show("你确信机器里面藏了一个兽人。")
		show("")
		if (status.v_lv > status.o_lv) {
			show("你决定用性交进行挑战。")
			if (status.v_lv >= rand(4) + 1) {
				gain({ v_exp: 4, p_exp: 2, s_exp: 2 }, "兽人", true)
				show("你成功地让兽人射了出来，赢得了通关奖励。")
				gainbuff("梦境乐园的奖券", 1)
			} else {
				gain({ v_exp: 1, p_exp: 2 }, "兽人", true)
				show("这个对你来说难度还是太高了。")
			}
		} else {
			show("你决定用口交进行挑战。")
			a = status.o_lv
			if (status.o_lv >= rand(4) + 1) {
				gain({ o_exp: 4, p_exp: 2, s_exp: 2 }, "兽人", true)
				show("你成功地让兽人射了出来，赢得了通关奖励。")
				gainbuff("梦境乐园的奖券", 1)
			} else {
				gain({ o_exp: 1, p_exp: 2 }, "兽人", true)
				show("这个对你来说难度还是太高了。")
			}
		}
	}
	if (r == 2) {
		show("“想要休息一下吗？请品尝我们的特制饮品——另外还有抽奖活动，中奖率高达100%。”")
		gain({ s_exp: 3 })
		var r = rand(3)
		if (r == 0) {
			show("喝完之后你抽到了再来一杯。")
			gain({ s_exp: 3 })
		}
		if (r == 1) {
			show("喝完之后你抽到了奖券。")
			gainbuff("梦境乐园的奖券", 1)
		}
		if (r == 2) {
			show("喝完之后你抽到了魅魔的免费做爱券。")
			show("你难得在对抗魅魔时当了一回主动方。")
			gain({ v_exp: 2, o_exp: 2, les_exp: 4 }, "魅魔", true)
		}
	}
	if (r == 3) {
		show("“欢迎来到洞穴冒险！客人请坐在这个座位上，系好安全带。”")
		show("小车在驶进了一个满是触手的洞穴后停了下来，随后，椅面消失了。")
		show("在安全带的固定下，你完全无法阻止触手的侵犯。")
		gain({ v_exp: 5, a_exp: 5, s_exp: 5 }, "触手", true)
		if (rand(2) == 0) {
			show("")
			show("“恭喜你中奖了，请到兑奖处来一趟。”")
			show("在被魅魔带进出产室之后，你才明白了中奖的含义。")
			gain({ birth_exp: 1 })
			gainbuff("梦境乐园的奖券", 1)
			if (rand(3) == 0) {
				show("由于出产的影响，你分泌出了乳汁。")
				gain({ b_exp: 5 })
				if (!("母乳体质" in buff)) gainbuff("母乳体质")
			}
		}
	}
	if (r == 4) {
		show("“欢迎来到镜子迷宫！请在这里尽情欣赏自己的身体。”")
		show("你对着镜子里自己的裸体自慰。")
		gain({ a_exp: status.m_lv + 3, v_exp: status.m_lv + 3, m_exp: status.m_lv + 3 }, "自慰", true)
		show("")
		show("事后，你发现镜子迷宫的背面也有一个入口，招牌上写着“变态露出少女的自慰秀”。")
		gain({ e_exp: 5 })
		show("作为补偿，工作人员给你发了一张奖券。")
		gainbuff("梦境乐园的奖券", 1)
	}

	if (getbuff("梦境乐园的奖券") >= 3) {
		show("")
		show("收集三张奖券换后，你兑换了梦境乐园的奖品。")
		gainbuff("梦境乐园的奖券", -3)
		var r = rand(3) + 23
		gain_treasure(maxtreasure, r, "dream")
		show("“奖品虽然不多，但过程中的快乐才是最重要的。”魅魔对你说道。")
		setachievement("过程比结果更重要")

		show("")
		show("当你醒来时，发现奖品装备在你的身上。")
	}
}