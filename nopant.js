function nopant(){
	ev["wind"] = {
		ev: function () {
			if (status.name == "野蛮人") {
				show("一阵奇怪的风吹过，你的裙底风光暴露在人前。")
				show("由于野蛮人暴露身体的样子过于常见，路人都懒得往你这边看。")
				gain({ e_exp: 2 })
				return
			}
			show("一阵奇怪的风吹过，你的裙底风光暴露在人前。")
			if ("真空" in buff) {
				show("至少没有人看见你的内裤。")
				show("当你没穿内裤的下体被路人一览无余时，你乐观地想着。")
				gain({ e_exp: 3 })
			} else {
				show("人们看见了你的内裤。")
				gain({ e_exp: 1 })
			}
		},
		town: true,
		chance: function () {
			return 0.5
		}
	}

	ev["stolen_underwear"] = {
		ev: function () {
			show("你的内衣被人偷走了——这下你没有了可以替换的衣物。")
			gainbuff("真空", 0)
			gainflag("lost_underwear", 1)
			if (status.lewd >= 20) {
				show("你幻想着内衣小偷要用你的贴身衣物去做什么，下体不禁有些湿润。")
				gain({ lust: 2 })
			}
		},
		town: true,
		chance: function () {
			if ("真空" in buff) return 0
			return 0.2 + 0.05 * chapter
		}
	}
	ev["nopant"] = {
		ev: function () {
			show("你想到了一个对付内衣小偷的绝妙办法：")
			show("只要你没有内衣，就不会被偷。")
			gainbuff("真空", 16)
			gain({ e_exp: 5 })
		},
		town: true,
		once: true,
		chance: function () {
			if ("真空" in buff) return 0
			if ("lost_underwear" in flag) return status.e_lv * 0.1
		}
	}
	ev["nopant2"] = {
		ev: function () {
			if (status.str > status.dex && status.str > status.wis)
				show("你认为不穿内裤有助于血液循环。")
			else if (status.dex > status.wis)
				show("你认为不穿内裤有助于动作灵活。")
			else
				show("你认为不穿内裤有助于魔力流动。")
			gainbuff("真空", 16)
			gain({ e_exp: 5 })
		},
		town: true,
		chance: function () {
			if ("真空" in buff) return 0
			if ("露出女神的加护" in buff) return status.e_lv * 0.2
			if (past_event.includes("nopant")) return status.e_lv * 0.1
		}
	}
	ev["goblin_nopant"] = {
		ev: function () {
			show("哥布林钻到了你的裙子下面。")
			if (check("str", goblin_pow + 4) >= 0) {
				show("你仓卒之中用双腿夹住了哥布林的脖子。")
				show("哥布林幸福地晕了过去。")
				gain({ v_exp: 1, exp: goblin_e, money: goblin_m * 2, a_exp: 1 })
			} else {
				if ("真空" in buff) {
					show("由于没有内裤的阻拦，哥布林将手指直接伸进了你的小穴。")
					var v = gain({ v_exp: 3 }, "哥布林", true)
					if (v > rand(4)) {
						show("你失去了战意，任凭哥布林摆布。")
						gainbuff("监禁：哥布林", 1)
					} else {
						show("哥布林炫耀地展示着指间粘稠的液体。")
					}
				} else {
					show("你的内裤成为了哥布林的战利品。")
					gain({ v_exp: 1, e_exp: 1 }, "哥布林", true)
					gainbuff("真空", 0)
				}
			}
		},
		town: false,
		chance: function () {
			if (week >= 4)
				return 0.5
		},
		start: 1,
		end: 1
	}
	ev["slime_nopant"] = {
		ev: function () {
			if (check("wis", slime_pow + 6) < 0) {
				show("你坐在一块石头上休息。")
				show("是史莱姆的拟态！")
				if ("真空" in buff) {
					show("史莱姆钻进了你毫无遮拦的后穴。")
					gain({ a_exp: 4, s_exp: 1 }, "史莱姆")
					if (rand(4) == 0 || (rand(2) == 0 && "evo2" in flag) || "强制排卵" in buff) gainbuff("怀孕：史莱姆")
					if ("evo1" in flag) {
						show("体内的史莱姆粘液令你浑身发烫。")
						gain({ drug_exp: 1 })
					}
				} else {
					show("你的内裤被史莱姆溶解了。")
					gain({ a_exp: 1, e_exp: 1 }, "史莱姆", true)
					gainbuff("真空", 0)
				}
			} else {
				show("你正要坐到一块石头上休息，却发现那是史莱姆的拟态。")
				show("你不敢想坐下去会发生什么。")
				gain({ money: slime_m * 2, exp: slime_e })
			}
		},
		town: false,
		chance: function () {
			return 0.5
		},
		start: 2,
		end: 2
	}
	ev["orc_nopant"] = {
		ev: function () {
			show("你遇到了一个强壮的兽人。")
			show("他声称自己无意侵犯，只是想找人切磋武艺。")
			show("你惊讶于世间还有这么正经的兽人。")
			if (check("str", orc_pow + 8) < 0) {
				show("你很快就发现，热衷于习武的兽人比一般的兽人更难对付。")
				show("兽人要求败者交出内裤，并声称这是献给神明的祭品。")
				if ("真空" in buff) {
					show("你掀起裙子，证明自己并非不想配合。")
					show("当你意识到这个动作可能会刺激到兽人时，兽人的巨根已经直指你的胯下。")
					gain({ v_exp: 6, p_exp: 4, s_exp: 2 }, "兽人")
				} else {
					show("更正，这世间就没有正经的兽人。")
					gain({ e_exp: 2 })
					gainbuff("真空", 0)
				}
			} else {
				show("你们斗得不相上下。")
				show("事后，你和兽人交换了一些武艺上的心得。")
				gain({ exp: 60 })
				show("他越谈越高兴，甚至想带你去看他的收藏品。")
				if (status.name == "野蛮人") {
					show("你听说他的收藏品是一些衣服后便失去了兴趣。")
				} else {
					show("你礼貌地拒绝了。")
				}
			}
		},
		town: false,
		once: true,
		chance: function () {
			return 0.5
		},
		start: 3,
		end: 3
	}
	ev["tentacle_nopant"] = {
		ev: function () {
			show("触手从脚下的地面钻了出来。")
			if (check("dex", tentacle_pow + 10) < 0) {
				if ("真空" in buff) {
					show("不巧的是，你正在践行不穿内裤主义。")
					gain({ v_exp: 3, s_exp: 1 }, "触手")
					if (rand(3) == 1 || "强制排卵" in buff) {
						gainbuff("怀孕：触手", 1)
					}
				} else {
					show("你连忙躲闪，却还是被它撕坏了内裤")
					gain({ v_exp: 1, e_exp: 1 }, "触手", true)
					gainbuff("真空", 0)
				}
			} else {
				show("你极限地避开了触手的偷袭。")
				gain({ money: tentacle_m, exp: tentacle_e })
			}
		},
		town: false,
		chance: function () {
			return 0.5
		},
		start: 4,
		end: 4
	}
	ev["succubus_nopant"] = {
		ev: function () {
			show("魅魔对你释放了活化内衣的法术。")
			if ("真空" in buff) {
				show("还好你没穿内衣。")
				gain({ money: succubus_m, exp: succubus_e })
			} else {
				var v = gain({ v_exp: 2, a_exp: 2, b_exp: 2, p_exp: 2}, "触手服", true)
				if (v <= 4) {
					show("你强忍着快感打倒了魅魔，衣服立刻就恢复了正常。")
					gain({ money: succubus_m, exp: succubus_e })
				} else {
					show("你费了很大的力气才把触手化的内衣从身上脱下。")
					show("魅魔建议你去试一试真正的触手服，体验更佳。")
					gainbuff("真空", 0)
				}
			}
		},
		town: false,
		chance: function () {
			return 0.5
		},
		start: 5,
		end: 5
	}
}
