function treasure() {
	ev["treasure"] = {
		ev: function () {
			if ("鹰眼术" in buff && rand(2) == 0) show("你使用鹰眼术发现了一个隐藏的宝箱")
			else show("你发现了一个宝箱。")
			gain_treasure()
		},
		town: false,
		chance: function () {
			if ("鹰眼术" in buff && "诱触手体质" in buff) return 2
			if ("鹰眼术" in buff) return 1
			if ("诱触手体质" in buff) return 1
			return 0.5
		}
	}

	ev["pinktreasure"] = {
		ev: function () {
			if ("鹰眼术" in buff && rand(2) == 0) show("你使用鹰眼术发现了一个隐藏的粉色宝箱")
			else show("你发现了一个粉色宝箱。")
			show("旁边的标志牌上写着：宝箱里必定开出一件色情物品！")
			if (status.name == "野蛮人") show("为了防止有人看不懂，标志牌上还贴心地画了各种色情玩具的图示。")
			show("你试图原路返回，却发现门被关上了。")
			gainsextreasure()
		},
		town: false,
		start: 3,
		chance: function () {
			if ("鹰眼术" in buff) return 0.1
			return 0.05
		}
	}

	ev["treasure_goblin"] = {
		ev: function () {
			show("你注意到墙上有一个洞。")
			if (check("dex", goblin_pow + 2) >= 0) {
				show("你钻进去之后，发现了一个宝箱。")
				gain_treasure()
			} else {
				show("你试图钻进去，却被卡在墙里。")
				show("哥布林小队发现了你卡在墙里的屁股。")
				show("他们轮流侵犯了你。")
				gain({ v_exp: 6, a_exp: 3, s_exp: 3 }, "哥布林")
			}
		},
		town: false,
		once: true,
		chance: function () {
			if ("鹰眼术" in buff) return 0.2
			return 0.1
		},
		start: 1,
		end: 1
	}

	ev["treasure_slime"] = {
		ev: function () {
			show("你注意到在粘液池的深处藏着一个宝箱。")
			gain({ drug_exp: 3 })
			if (check("wis", slime_pow + 2) >= 0) {
				show("你忍耐着媚药粘液的触感将宝箱捞了出来。")
				gain_treasure()
			} else {
				show("中途你就被媚药搞得神志不清，然后被史莱姆淹没了。")
				gain({ v_exp: 5, a_exp: 3, s_exp: 3, u_exp: 3 }, "史莱姆")
				if (rand(2) == 0) gainbuff("怀孕：史莱姆", 1)
			}
		},
		town: false,
		once: true,
		chance: function () {
			if ("鹰眼术" in buff) return 0.2
			return 0.1
		},
		start: 2,
		end: 2
	}

	ev["treasure_orc"] = {
		ev: function () {
			show("你发现了一个被兽人卫兵看守着的宝箱。")
			if (check("str", orc_pow + 4) >= 0) {
				show("你无视体格上的差距，用蛮力打倒了卫兵。")
				gain({ money: orc_m, exp: orc_e })
				gain_treasure()
			} else {
				show("在面对兽人卫兵压倒性的体格优势时，你意识到自己根本不是对手。")
				show("在解除了你的武装后，卫兵亮出了胯下的巨物——这个你就更加不是对手了。")
				gain({ v_exp: 5, p_exp: 3, s_exp: 2 }, "兽人卫兵")
			}
		},
		town: false,
		once: true,
		chance: function () {
			if ("鹰眼术" in buff) return 0.2
			return 0.1
		},
		start: 3,
		end: 3
	}

	ev["treasure_tentacle"] = {
		ev: function () {
			show("你在触手洞窟的深处发现了满满的一池精液。")
			show("在池塘的对面是一个宝箱。")
			show("而通向对面的唯一途径是一根绳索。")
			if (check("dex", tentacle_pow + status.s_lv) >= 0) {
				show("你灵巧地踩在绳索上，抵达了对岸。")
				gain_treasure()
			} else {
				show("你沿着绳索爬了过去——在途中绳索突然动了起来！")
				var v = gain({ v_exp: 3, a_exp: 2 }, "触手", true)
				if (check("wis", tentacle_pow + v * 2) >= 0) {
					show("你忍耐着拟态触手对身体的刺激，艰难地抵达了对岸。")
					gain_treasure()
				} else {
					show("你失去平衡，摔进了精液池当中。")
					gain({ s_exp: 10 })
				}
			}
		},
		town: false,
		once: true,
		chance: function () {
			if ("鹰眼术" in buff) return 0.2
			return 0.1
		},
		start: 4,
		end: 4
	}

	ev["treasure_succubus"] = {
		ev: function () {
			show("魅魔指着两个宝箱，让你猜其中哪一个装着色情道具。")
			if (check("wis", succubus_pow + 4) >= 0) {
				show("“魅魔的宝箱里面就只会有色情道具。”你识破了魅魔的陷阱。")
				gain({ money: succubus_m, exp: succubus_e })
			} else {
				if (rand(2) == 0) show("你打开了左边的宝箱。")
				else show("你打开了右边的宝箱。")
				gainsextreasure()
			}
		},
		town: false,
		once: true,
		chance: function () {
			if ("鹰眼术" in buff) return 0.2
			return 0.1
		},
		start: 5,
		end: 5
	}

	ev["trader"] = {
		ev: function () {
			var cost = getflag("trade")
			show("你买下了商人推销的装备。")
			gain({ money: -cost })
			gainshoptreasure()
			gainflag("trade", 20)
		},
		town: true,
		chance: function () {
			if (status.money >= getflag("trade") + 100) return status.money / 100
			if (status.money >= getflag("trade")) return 0.5
		}
	}
	ev["trader2"] = {
		ev: function () {
			var cost = getflag("trade")
			show("商人向你推销了一件装备，但你身上的钱不够。")
			show("你用身体支付了一半价钱。")
			gain({ money: -cost / 2, b_exp: 2, o_exp: 4, s_exp: 1, e_exp: 2 }, "商人")
			gainshoptreasure()
			gainflag("trade", 20)
		},
		town: true,
		chance: function () {
			if (status.money >= getflag("trade") / 2 && status.money < getflag("trade") && status.lewd >= 40) return 0.5
		}
	}
	ev["trader22"] = {
		ev: function () {
			show("商人向你推销了一件装备，但你身上一点钱都没有。")
			show("为了拿到想要的装备，你同意为商人工作。")
			show("")
			show("当天，商人举办了买道具送口交的促销活动。")
			gain({ o_exp: 15, s_exp: 5, e_exp: 5 }, "路人")
			gainshoptreasure()
		},
		town: true,
		once: true,
		chance: function () {
			if (status.money < 0 && status.lewd >= 60) return 0.5
		}
	}
	ev["trader3"] = {
		ev: function () {
			show("商人提出要购买你的母乳。")
			if (status.e_lv >= 3) {
				show("你问他如果当场现挤能不能加钱。")
				gain({ money: 50, e_exp: 2, b_exp: 3 })
				gainflag("trade2", 1)
			} else {
				show("你勉为其难地答应了。")
				gain({ money: 50, b_exp: 3 })
				gainflag("trade2", 1)
			}

		},
		town: true,
		once: true,
		chance: function () {
			if ("母乳体质" in buff && status.money < 0) return 0.5
		}
	}
	ev["trader_u"] = {
		ev: function () {
			show("商人提出要购买你的尿液。")
			gain({ money: 50, u_exp: 2, e_exp: 2 })
			show("到底是什么样的变态会想要买这个？")
		},
		town: true,
		once: true,
		chance: function () {
			if ("漏尿体质" in buff && status.money < 0) return 0.5
		}
	}
	ev["trader4"] = {
		ev: function () {
			show("商人提出要购买你身上的内裤。")
			if ("真空" in buff) {
				show("你掀起裙子，指出自己身上没穿内裤。")
				gain({ e_exp: 2 })
			} else {
				gainflag("lost_underwear", 1)

				if (status.e_lv >= 3) {
					show("你毫不迟疑地答应了，当场就脱下你的内裤。")
					gain({ money: 50, e_exp: 2 })
					gainflag("trade2", 1)
				} else {
					show("你勉为其难地答应了，找了个无人的角落脱下你的内裤。")
					gain({ money: 50, e_exp: 1 })
					gainflag("trade2", 1)
				}
				gainbuff("真空", 0)
			}
		},
		town: true,
		once: true,
		chance: function () {
			if (status.money < 0) return 0.2
		}
	}
}

let maxtreasure = 32
let basictreasure = 23
let sextreasure = 16
function safeloot1(n) {
	var ans=rand(9)
	if(n!=null)ans=n
	if (ans == 0) {
		show("你获得了一件比基尼铠甲。真正的勇士都应该无所畏惧地暴露身体，你这么劝说着自己换上了新的装备。")
		gain({ str: 2, e_lv: 1, lewd: 1 })
		bonus_status.e_lv += 1
		return
	}
	if (ans == 1) {
		show("你获得了一件拘束衣。传说中的女战士就时常穿着这样的衣服来磨炼自己的意志，另外还有一些传说指出她有受虐倾向。")
		gain({ str: 2, p_lv: 1, lewd: 1 })
		bonus_status.p_lv += 1
		return
	}
	if (ans == 2) {
		show("你获得了一件紧身衣。穿上之后你的身体变得更加迅捷了，但做出剧烈动作时，这件衣服就会勒紧你的下体。")
		gain({ dex: 2, v_lv: 1, lewd: 1 })
		bonus_status.v_lv += 1
		return
	}
	if (ans == 3) {
		show("你获得了一件兔女郎装。比起为什么兔女郎装能够提高敏捷这样的问题，你更加在意为什么你能够感受到尾巴上的刺激。")
		gain({ dex: 2, a_lv: 1, lewd: 1 })
		bonus_status.a_lv += 1
		return
	}
	if (ans == 4) {
		show("你获得了一件魔女制服。你感觉胸口有些紧，这让你对魔女的身材心生怜悯。")
		gain({ wis: 2, b_lv: 1, lewd: 1 })
		bonus_status.b_lv += 1
		return
	}
	if (ans == 5) {
		show("你获得了一件炼金术师长袍。不知道为什么，上面有着无论如何都无法洗净的异味。")
		gain({ wis: 2, s_lv: 1, lewd: 1 })
		bonus_status.s_lv += 1
		return
	}
	if (ans == 6) {
		show("你获得了一柄战锤。战锤的重量并不适合你拿上战场，但挥舞它确实可以锻炼你的力量。")
		gain({ str: 1 })
		return
	}
	if (ans == 7) {
		show("你获得了一把匕首。你觉得这把新匕首用起来比原先那把更趁手。")
		gain({ dex: 1 })
		return
	}
	if (ans == 8) {
		show("你获得了一根法杖。握住法杖时，你感觉到自己的魔力和它发生了感应。")
		gain({ wis: 1 })
		return
	}
	show("宝箱里空无一物。")
	show("却充满了催情气体。")
	gain({ drug_exp: 2 })
}

function safeloot2(n) {
	var ans = rand(7)
	if (n != null) ans = n
	if (ans == 0) {
		if (!("胸甲" in flag)) {
			show("你获得了一件胸甲。你认出它属于一位失踪的公主骑士。穿上之后，原主的力量和凌辱记忆都涌入了你的身体。")
			gain({ str: 1, wis: 1, dex: 1, lewd: 1 })
			gainflag("胸甲")
			if ("裙甲" in flag) {
				show("集齐公主骑士套装后，公主骑士错乱的认知涌入了你的身体……")
				newhypno()
				gainbuff("公主骑士的传承")
				show("根据拥有的常识改变数量获得加成")
				var v = hypnocnt()
				gain({ str: v, wis: v, dex: v })
				setachievement("公主骑士的传承")
			}
			return
		}
	}
	if (ans == 1) {
		if (!("裙甲" in flag)) {
			show("你获得了一件裙甲。你认出它属于一位失踪的公主骑士。穿上之后，原主的力量和凌辱记忆都涌入了你的身体。")
			gain({ str: 1, wis: 1, dex: 1, lewd: 1 })
			gainflag("裙甲")
			if ("胸甲" in flag) {
				show("集齐公主骑士套装后，公主骑士错乱的认知涌入了你的身体……")
				newhypno()
				gainbuff("公主骑士的传承")
				show("根据拥有的常识改变数量获得加成")
				var v = hypnocnt()
				gain({ str: v, wis: v, dex: v })
				setachievement("公主骑士的传承")
			}
			return
		}
	}
	if (ans == 2 || ans == 3) {
		show("你在宝箱里发现了一些金币。")
		gain({ money: 50 })
		return
	}
	if (ans == 4) {
		show("你在宝箱里发现了大量金币。")
		gain({ money: 100 })
		return
	}
	if (ans == 5) {
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
		show("在上一任圣女恶堕之后，这样高品质的圣水已经很难见到了。")
		gainbuff("圣水的恩惠", 8)
		show("在接下来的一个月内，你的事件判定会进行两次并取较好的结果。")
		water()
		return
	}
	if (ans == 6) {
		if (!("藏宝图" in buff)) {
			show("你获得了藏宝图")
			gainbuff("藏宝图")
			show("藏宝图指向了一个隐藏地点的位置")
			return
		}
	}
	show("宝箱里空无一物。")
	show("却充满了催情气体。")
	gain({ drug_exp: 2 })
}

function curseloot(n) {
	var r = rand(7)
	if (n != null) r = n
	if (r == 0) {
		if (!("魔力之卵" in buff)) {
			show("你在宝箱里发现了一个金色的小球。")
			show("在打开宝箱的瞬间，你的手失去了控制。你不由自主地将这颗圆球塞进了自己的身体。")
			curse(2)
			return
		}
	} else if (r == 1) {
		if (!("诅咒铃铛" in buff)) {
			show("你在宝箱里发现了一对铃铛。")
			show("在打开宝箱的瞬间，你的手失去了控制。你不由自主地将铃铛装备在乳头上。")
			curse(3)
			return
		}
	} else if (r == 2) {
		if (!("罪人的颈环" in buff)) {
			show("你在宝箱里发现了一个颈环。")
			show("在打开宝箱的瞬间，你的手失去了控制。你不由自主地将颈环装备在脖子上。")
			gainbuff("罪人的颈环", 8)
			show("在接下来的一个月内，你的事件判定会进行两次并取较坏的结果。")
			show("每当你犯下淫行时，颈环的持续时间会重置。")
			if (status.name == "术士") {
				show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
				gain({ exp: 50 })
			}
			gainflag("罪人的颈环", week)
			return
		}
	} else if (r == 3) {
		if (!("试炼的后庭拉珠" in buff)) {
			show("你在宝箱里发现了一串大小递增的水晶珠。")
			show("在打开宝箱的瞬间，你的手失去了控制。你不由自主地将珠串塞进了后庭。")
			gainbuff("试炼的后庭拉珠")
			show("试炼的后庭拉珠降低了你的属性，同时提高了你的经验获取速度。")
			gain({ str: -3, dex: -3, wis: -3, a_exp: 4, p_exp: 4 }, "后庭拉珠")
			if (status.name == "术士") {
				show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
				gain({ exp: 50 })
			}
			return
		}
	} else if (r == 4) {
		if (!("肉体书写" in buff)) {
			show("你在宝箱里发现了一盒魔法颜料。")
			show("在打开宝箱的瞬间，你的手失去了控制。你不由自主地用颜料标记了自己的每一处敏感点。")
			gainbuff("肉体书写")
			show("露出经验获取量加倍，性弱点带来的属性减值加倍。")
			show("事后，你发现这些涂鸦无论如何都无法洗净。")
			if (status.name == "术士") {
				show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
				gain({ exp: 50 })
			}
			if (status.name == "野蛮人") {
				show("你顺手用剩下来的涂料给自己画了个战纹。")
				gain({str: 2, dex: 2, wis: 2})
			}
			return
		}
	} else if (r == 5) {
		if (!("奴隶脚镣" in buff)) {
			show("你在宝箱里发现了一对漂亮的脚环。")
			show("在装备之后，脚环现出了原型。")
			gainbuff("奴隶脚镣", 1)
			gain({str:-1,dex:-1,wis:-1})
			show("奴隶脚镣会随着时间推移而变沉重。")
			show("只有击败首领级的魔物可以让你获得解脱（暂时地）。")
			if (status.name == "术士") {
				show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
				gain({ exp: 50 })
			}
			return
		}
	} else {
		if (!("触手服" in buff)) {
			var r = rand(6)
			if (r == 0) flag["触手服"] = "比基尼铠甲"
			if (r == 1) flag["触手服"] = "拘束衣"
			if (r == 2) flag["触手服"] = "紧身衣"
			if (r == 3) flag["触手服"] = "兔女郎装"
			if (r == 4) flag["触手服"] = "魔女制服"
			if (r == 5) flag["触手服"] = "炼金术师长袍"
			show("你获得了一件" + flag["触手服"] + "。")
			show("在穿上新获得的装备后，你发现它在动。")
			show("你试图将这件衣服脱下。触手服立刻做出了反应——它同时贯穿了你的前后两穴，强烈的刺激令你失去了意识。")
			gain({ v_exp: 5, a_exp: 5, b_exp: 5, p_exp: 2, s_exp: 3 }, "触手服")
			gainbuff("触手服")
			pause()
			show("当你恢复意识时，触手服变回了" + flag["触手服"] + "的样子。仿佛什么都没有发生过。")
			show("但你体内的精液却在提醒你，刚才发生的事情并非幻觉。")

			if (status.name == "术士") {
				show("由于禁忌之书的效果，你在获得诅咒道具时获得了经验值")
				gain({ exp: 50 })
			}
		}
		return
	}
	show("宝箱里空无一物。")
	show("却充满了催情气体。")
	gain({ drug_exp: 2 })
}

function lewdloot1(n) {
	var ans = rand(9)
	if (n != null) ans = n

	if (ans == 0) {
		show("是宝箱怪！")
		show("你被宝箱怪拖进体内，凌辱一直持续到你失去意识。")
		gain({ v_exp: 5, a_exp: 5, o_exp: 5, b_exp: 5, p_exp: 2, s_exp: 3 }, "宝箱怪")
		return
	}
	if (ans == 1) {
		show("你在宝箱里发现了一根假阳具。")
		if (rand(2) == 0) {
			show("在打开宝箱的瞬间，你的手失去了控制。你不由自主地开始用假阳具自慰。")
			gain({ v_exp: status.m_lv + 4, m_exp: status.m_lv + 4 }, "假阳具")
		}
		gainbuff("淑女的收藏", 1)
		return
	}
	if (ans == 2) {
		if (getbuff("梦境乐园的门票") >= 0) {
			show("你获得了一张梦境乐园的奖券")
			gainbuff("梦境乐园的奖券", 1)
		} else {
			show("你获得了一枚粉红色的硬币。")
			show("你伸手触碰，硬币立刻就消失了。")
			gainbuff("梦境乐园的门票")
		}
		return
	}

	if (ans == 3) {
		show("你获得了一条沾满精液的内裤。从某些意义上来说，这确实是某人的宝藏。")
		if (status.name == "野蛮人") {
			show("你不明白为什么有人要穿这个东西，更不明白为什么有人要对这个东西发情。")
			return
		}
		if (getflag("lost_underwear") > rand(4)) {
			show("你认出这条内裤曾经属于自己。")
			gain({ lust: 3 })
		} else {
			gain({ lust: 1 })
		}
		return
	}
	if (ans == 4) {
		if (status.name == "野蛮人") {
			show("你获得了一本小说。")
			show("对你来说这和空宝箱毫无区别。")
			return
		}
		show("你获得了一本以女骑士的冒险为主题的小说。")
		show("书中描写的种种凌辱场景令你大开眼界。")
		gain({ exp: 50, lust: 5 })
		return
	}
	if (ans = 5) {
		var r = rand(4)
		if (r == 0) {
			show("你获得了史莱姆软糖")
			show("你完全无法确定这是食物还是拟态魔物")
			if (getop("武道家") > 0) {
				show("武道家一脸满足地享用了美食")
				gainop("武道家")
			} else {
				show("你意外地发现商人愿意出钱收购这东西")
				gain({ money: 50 })
			}
		}
		if (r == 1) {
			show("你获得了可疑的绘本")
			show("从封面来看，绘本讲了一个公主被女巫诅咒的经典童话")
			if (getop("魔法师") > 0) {
				show("你随手将绘本送给了从年龄来看还算是适合绘本的魔法师")
				show("后来，你才知道，公主从第二页到最后一页都和女巫缠绵在一起")
				gainop("魔法师")
			} else {
				show("你意外地发现商人愿意出钱收购这东西")
				gain({ money: 50 })
			}
		}
		if (r == 2) {
			show("你获得了触手飞机杯")
			show("光是看着洞口处不可名状的蠕动，你就有一种理智受损的感觉")
			if (getop("刺客") > 0) {
				show("刺客告诉你，只有她这样的专业人士才能探索深处的秘密")
				gainop("刺客")
			} else {
				show("你意外地发现商人愿意出钱收购这东西")
				gain({ money: 100 })
			}
		}
		if (r == 3) {
			show("你获得了加粗假阳具")
			show("你惊讶于这根假阳具的尺寸，又有些好奇用这东西自慰的话会是怎样的感觉")
			show("在你来得及进行尝试之前，会长就没收了你的战利品")
			gainop("会长")
		}
		return
	}
	if (ans == 6 || ans == 7) {
		return curseloot()
	}
	if (ans == 8) {
		show("你获得了一张介绍露出女神的传单。")
		if ("真空" in buff) {
			show("由于你正在执行女神的教诲，你获得了少量的加护。")
			randbonus(1)
		} else {
			show("你随手丢弃了传单，然后因为这个行为遭到了无法装备内裤的诅咒。")
			gainbuff("真空", 16)
		}
	}
	show("宝箱里空无一物。")
	show("却充满了催情气体。")
	gain({ drug_exp: 2 })
}



function lewdequipment(n, dream) {
	var ans = rand(4)
	if (n != null) ans = n
	if (ans == 0) {
		show("你获得了公主骑士的缰绳。你认出它属于一位失踪的公主骑士。但是，为什么口衔的部分被替换成了阳具形状的口塞？")
		if (status.lewd >= 30 || dream == true || status.name=="野蛮人") {
			show("装备之后，你觉得自己的身体像母马一样有力——对了，这算不算和公主骑士间接接吻？")
			gain({ str: 3, o_lv: 2, lewd: 2 })
			bonus_status.o_lv += 2
			gainflag("缰绳")
		} else {
			show("你的淫乱度不足以装备这件衣服。")
		}
		return
	}
	if (ans == 1) {
		show("你获得了一条绳子。箱子里面附赠了各种捆绑样式的说明。")
		if (status.lewd >= 30 || dream == true || status.name == "野蛮人") {
			show("锻炼绳技增长了你的敏捷。")
			gain({ dex: 3, p_lv: 2, lewd: 2 })
			bonus_status.p_lv += 2
		} else {
			show("你的淫乱度不足以装备这件衣服。")
		}
		return
	}
	if (ans == 2) {
		show("你获得了只有聪明人才能看得见的衣服。既然这个世界连魔法都有，为什么不能有这样的衣服呢？")
		if (status.lewd >= 30 || dream == true || status.name == "野蛮人") {
			show("你当然是聪明人。")
			gain({ wis: 3, e_lv: 2, lewd: 2 })
			bonus_status.e_lv += 2
		} else {
			show("你的淫乱度不足以装备这件衣服。")
		}
		return
	}
	if (ans == 3) {
		show("你获得了几片半透明的布。你很好奇这样的衣服（如果能称之为衣服的话）会提供什么加成。")
		if (status.lewd >= 30 || dream == true || status.name == "野蛮人") {
			show("穿上之后，你发现这件衣服只能提升淫乱度。")
			gain({ lewd: 3 })
		} else {
			show("你的淫乱度不足以装备这件衣服。")
		}
		return
	}
}

function lewdloot2(n) {
	var ans = rand(7)
	if (n != null) ans = n
	if (ans == 0 && !("堕落之种" in buff)) {
		show("你获得了一枚奇怪的种子。你突然产生了用盆栽装饰房间的念头。")
		gainbuff("堕落之种")
		show("愿你在花香中做个好梦。")
		if (status.name == "术士") {
			show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
			gain({ exp: 50 })
		}
		return
	}
	if (ans == 1 && !("魅魔的香水" in buff)) {
		show("你获得了魅魔的香水。")
		gainbuff("魅魔的香水")
		if ("卖春价格" in buff) {
			show("你的卖春价格提高了。")
			gainbuff("卖春价格", 25)
			prostitute_bonus += 25
			if (prostitute_bonus >= 50) setachievement("名人堂")
		}
		show("你在城镇内更容易被袭击了。")
		if (status.name == "术士") {
			show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
			gain({ exp: 50 })
		}
		return
	}
	if (ans == 2) {
		if (getbuff("免费做爱券") > 0 && rand(2) == 0) {
			show("你获得了" + status.name + "的免费做爱券。")
			show("为什么在宝箱里能开到这个？")
			gainbuff("免费做爱券",-1)
		} else {
			show("你获得了魅魔的免费做爱券。")
			if (status.les_lv >= 4) {
				show("你难得在对抗魅魔时当了一回主动方。")
				gain({ v_exp: 2, o_exp: 2, les_exp: 4 }, "魅魔", true)
			} else {
				show("有不少人愿意出大价钱买下这张纸。")
				gain({ money: 100 })
			}
		}
		return
	}
	if (ans == 3 ) {
		show("是宝箱怪！")
		show("你被宝箱怪拖进体内，凌辱一直持续到你失去意识。")
		gain({ v_exp: 5, a_exp: 5, o_exp: 5, b_exp: 5, p_exp: 2, s_exp: 3 }, "宝箱怪")
		return
	}
	if (ans == 4) {
		show("你获得了学习装置。")
		show("戴上之后，你获得了各种各样的知识。")
		gain({ exp: 100 })
		newhypno()
		return
	}
	if (ans == 5 || ans == 6) {
		return curseloot()
	}
	show("宝箱里空无一物。")
	show("却充满了催情气体。")
	gain({ drug_exp: 2 })
}

function gain_treasure(n) {
	//0-2 equipment
	//3-4 safe
	//5-7 lewd
	//8-9 lewd2
	//10 lewd equipment
	var m = 8
	if (chapter >= 3) m = 11
	if (chapter == 2 && rand(2) == 0) m = 11
	var ans = rand(m)
	if ("诱触手体质" in buff) {
		if (rand(3) == 0) {
			lewdloot1(0)
			return
		}
		if (rand(3) == 0) {
			gainsextreasure()
			return
		}
	}
	if (n != null && n >= 0) ans = n
	if (ans <= 2) {
		safeloot1()
	} else if (ans <= 4) {
		safeloot2()
	} else if (ans <= 7) {
		lewdloot1()
	} else if (ans <= 9) {
		lewdloot2()
	} else {
		lewdequipment()
	}
}

function gainsextreasure(n) {
	var ans = 5 + rand(6)
	if (n != null && n >= 0) ans = n
	if (ans <= 2) {
		safeloot1()
	} else if (ans <= 4) {
		safeloot2()
	} else if (ans <= 7) {
		lewdloot1()
	} else if (ans <= 9) {
		lewdloot2()
	} else {
		lewdequipment()
	}
}

function gainshoptreasure() {
	if ((status.lewd >= 30) && rand(4) == 0) lewdequipment(rand(3))
	else safeloot1()
}

function water() {
	if (getlocalkey("holywater1") && getlocalkey("holywater2") && getlocalkey("holywater3") && getlocalkey("drink1") && getlocalkey("drink2") && getlocalkey("drink3") && getlocalkey("drink4"))
		setachievement("美食家")
}