let orc_pow=25
let orc_e=20
let orc_m=30

function orcchance() {
	if (getbuff("兽人的调教") <= 2) return false
	if (getbuff("兽人的调教") <= 6) return (rand(4) == 0)
	if (getbuff("兽人的调教") <= 10) return (rand(3) == 0)
	return (rand(2) == 0)
}
function orc(){
	ev["orc1"]={
		ev:function(){
			var ans=check("dex",orc_pow)
			show("兽人在战斗中不顾一切地向你扑了过来。")
			if(ans>=0){
				show("你冷静地攻击了兽人的要害。兽人冲了几步就栽倒在地。")
				gain({money:orc_m,exp:orc_e})
			}else{
				show("你在慌乱中攻击了兽人，但是没有什么效果。你被兽人扑倒了。",true)
				if (status.v_lv + getbuff("兽人的调教") >= 5) {
					show("兽人的巨根顺畅地进入了你早已湿润的小穴。")
					gain({ v_exp: 5, p_exp: 2, s_exp: 1 }, "兽人")
				} else {
					show("兽人的巨根强行侵入了你的小穴。你痛得几乎晕了过去。")
					gain({ v_exp: 3, p_exp: 4, s_exp: 1 }, "兽人")
				}
				if (orcchance()) {
					pause()
					show("你成为了兽人的俘虏。")
					gainbuff("监禁：兽人", 1)
					return
				}
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:3,
		end:3
	}


	ev["orc2"]={
		ev:function(){
			var ans=check("str",orc_pow)
			show("兽人抓住了你的肩膀。")
			if(ans>=0){
				show("你奋力挣扎，摆脱了兽人的控制，随后反杀了兽人。")
				gain({money:orc_m,exp:orc_e,p_exp:2})
			}else{
				show("兽人的力量压制了你。你被迫跪在地上，兽人狰狞的肉棒近在眼前。",true)
				if (status.o_lv + getbuff("兽人的调教") >= 5) {
					show("你吞下了半根兽人肉棒。兽人对此并不满意，按着你的头大力抽送起来。")
					gain({ o_exp: 3, p_exp: 2, s_exp: 1 }, "兽人")
				} else {
					show("你勉强将兽人的龟头含进嘴里。兽人对此并不满意，按着你的头大力抽送起来。")
					gain({ o_exp: 3, p_exp: 3, s_exp: 1 }, "兽人")
				}
				if (orcchance()) {
					pause()
					show("你成为了兽人的俘虏。")
					gainbuff("监禁：兽人", 1)
					return
				}
			}

		},
		town:false,
		chance:function(){
			return 1
		},
		start:3,
		end:3
	}

	ev["orc3"]={
		ev: function () {
			show("你遇到了一个正在侵犯村娘的兽人。", true)
			var ans = check("dex", orc_pow + 7)
			if (ans >= 0) {
				show("你悄无声息地从背后接近，一刀结果了兽人的性命。")
				gain({ money: orc_m, exp: orc_e })
				pause()
				show("事后，你收到了来自村民的谢礼。")
				gain({ money: 20 })
			} else if (ans >= -10) {
				show("你试图从背后接近，但兽人发现了你。")
				show("你且战且退地引开了兽人，村娘乘机逃脱了。", true)
				pause()
				show("事后，你收到了来自村民的谢礼。")
				gain({ money: 20 })
			} else {
				show("你试图从背后接近，但兽人发现了你。")
				show("你且战且退地引开了兽人，村娘乘机逃脱了。", true)
				pause()
				show("但你没能逃掉。兽人将被打断的欲火发泄在你的身上。")
				gain({ v_exp: 5, p_exp: 5, b_exp: 3, s_exp: 1 }, "兽人")
				if (orcchance()) {
					pause()
					show("你成为了兽人的俘虏。")
					gainbuff("监禁：兽人", 1)
					return
				}
				pause()
				show("事后，你收到了来自村民的谢礼。")
				gain({ money: 20 })
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:3,
		end:3
	}

	ev["orc3_2"] = {
		ev: function () {
			show("你遇到了一个正在侵犯村娘的兽人。", true)
			show("既然兽人想要侵犯，村娘不想被侵犯，而你想被兽人侵犯。")
			show("为什么不做一些皆大欢喜的事情呢？")
			gain({ v_exp: 5, p_exp: 1, b_exp: 2, s_exp: 2 }, "兽人")
			if (orcchance()) {
				pause()
				show("你成为了兽人的俘虏。")
				gainbuff("监禁：兽人", 1)
				return
			}
			pause()
			show("事后，你收到了来自村民的谢礼。")
			gain({ money: 20 })
		},
		town: false,
		chance: function () {
			if (getbuff("兽人的调教") >= 6) return 1
		},
		start: 3,
		end: 3
	}

	ev["orc4"] = {
		ev: function () {
			var ans = check("wis", orc_pow)
			show("兽人萨满朝着你挥动手杖。")
			if (ans >= 5) {
				show("你察觉到手杖上并没有魔力，然后在远距离的消耗战当中解决了萨满。")
				gain({ money: orc_m * 2, exp: orc_e })
			} else if (ans >= 0) {
				show("你察觉到手杖上并没有魔力，但光是一个挥着棍子的兽人也不是你能对付的。")
			} else {
				show("你试图反制魔法，却没有任何效果。")
				show("你被萨满一棍子打翻。",true)
				gain({ v_exp: 6, p_exp: 3, s_exp: 2}, "兽人萨满")
				if (orcchance()) {
					pause()
					show("你成为了兽人的俘虏。")
					gainbuff("监禁：兽人", 1)
					return
				}
			}
		},
		town: false,
		chance: function () {
			return 1
		},
		start: 3,
		end: 3
	}

	ev["orc_boss"]={
		ev:function(){
			var r=rand(3)
			if (r == 0) {
				show("你从正门杀进了兽人部落。")
				var ans = check("str", orc_pow + 3)
				if (ans >= 0) show("你无视体格上的差距，用蛮力打败了卫兵。随后杀向族长的帐篷。")
				else {
					show("在面对兽人卫兵压倒性的体格优势时，你意识到自己根本不是对手。",true)
					show("在解除了你的武装后，卫兵亮出了胯下的巨物——这个你就更加不是对手了。")
					gain({ v_exp: 5, p_exp: 3, s_exp: 2 }, "兽人卫兵")
					gainbuff("监禁：兽人", 1)
					return
				}
			}
			if (r == 1) {
				show("你潜入了兽人部落。")
				var ans = check("dex", orc_pow + getbuff("兽人的调教"))
				if (ans >= 0) show("你悄悄地越过了卫兵，直奔族长的帐篷而去。")
				else {
					show("在潜入途中，你经过了一顶不停传出淫声的帐篷。")
					if (rand(2) == 0 || "鹰眼术" in buff) {
						if ("鹰眼术" in buff) show("你下意识地发动了鹰眼术，看见了帐篷里的乱交。")
						else show("你说服自己这是在侦查敌情，开始偷窥帐篷里的乱交。")
						show("直到被路过的卫兵发现为止，你都没能移开视线。")
						gainflag("侦查敌情")
						gain({ v_exp: 5, p_exp: 3, s_exp: 2 }, "兽人卫兵")
						gainbuff("监禁：兽人", 1)
						return
					} else {
						show("在这分不清是痛苦还是快乐的叫声的掩护下，你不必再担心脚步声被人听见了。")
						gain({lust:3})
					}
				}
			}
			if (r == 2) {
				show("你伪装成奴隶混进了兽人部落。")
				show("在寻找目标的过程中被卫兵发现了。")
				var x = gain({ e_exp: 2 })
				var ans = check("wis", orc_pow + 2 * x)
				if (ans >= 0) {
					show("你声称自己今晚原本要去给族长侍寝，却找不到族长的帐篷。")
					show("热心的卫兵替你指明了方向。")
				} else {
					show("你声称自己正在返回奴隶的囚室。")
					show("热心的卫兵提醒你，身上看不到精液痕迹的奴隶必定遭到责罚——他愿意帮你遮掩一下。")
					gain({ v_exp: 5, p_exp: 3, s_exp: 2 }, "兽人卫兵")
					show("现在你看起来更像是一个性奴隶了——问题是，你要怎么出去？")
					gainbuff("监禁：兽人", 1)
					return
				}
			}
			show("",true)

			var hostage = "暗精灵"
			if (getop("魔法师") <= -100) hostage = "魔法师"
			show("当你杀进兽人族长的帐篷时，他正在侵犯" + hostage + "。")
			show("见你进来，他丝毫没有停下的意思。")
			show("他站起身，维持着插入的状态向你走了过来。",true)
			slayer()

			if(hostage=="暗精灵")show("暗精灵随着兽人族长的动作淫靡地扭动着腰肢。")
			else show("魔法师随着兽人族长的动作痛苦地呻吟。")
			show("你试图发起攻击，发现兽人族长的动作看似粗暴，却巧妙地用人质封住了你的进攻路线。")
			pause()
			if (check("max", orc_pow + 8) >= 0) {
				show("你冷静地应对着，等待对手露出破绽。",true)
				if ("魔法师的恋人" in buff && hostage == "魔法师") {
					show("你注意到魔法师即将高潮的征兆。")
					show("你把握住了那一瞬间敌人动作的僵硬。", true)
				} else if (getbuff("兽人的调教") >= 6) {
					show("你注意到兽人族长即将射精的征兆。")
					show("你把握住了那一瞬间敌人的松懈。", true)
				} else {
					show("兽人族长突然从"+hostage+"的体内抽出肉棒，腥臭的精液朝着你喷涌而来。")
					if (gain({ s_exp: 1 }) > 0) {
						if (check("wis", orc_pow + getbuff("兽人的调教")) >= 0) {
							show("强烈的雄性气味令你一时恍惚，但你并没有忘记自己要做的事情。")
							show("你把握住射精之后敌人的松懈。")
						} else {
							show("强烈的雄性气味令你一时恍惚。")
							show("下一刻兽人的巨根已经近在眼前。")
							gain({ o_exp: 6, p_exp: 3, s_exp: 3 }, "兽人族长")
							gainbuff("监禁：兽人", 1)
							return
						}
					} else {
						show("除了让你感到有些恶心之外，并没有产生什么特别的效果。")
						show("你把握住射精之后敌人的松懈。")
					}
				}
				show("一击毙命，兽人族长硕大的身躯栽倒在地。")

				gain({ money: orc_m * 5, exp: orc_e * 5 })
				pause()
				show("你解开了" + hostage + "的束缚。")
				if (hostage == "暗精灵") {
					show("暗精灵却说你多管闲事，她好不容易才找到的顶级肉棒就这么被你毁了。")
					show("现在，她必须重新踏上寻找肉棒的旅途。")
					show("你无语地看着暗精灵骂骂咧咧地走了。")
					gainflag("暗精灵")
				} else {
					if (getbuff("魔法师的恋人") >= 0 || op["魔法师"].prison >= week) {
						show("你抱住魔法师，她在你怀里大哭起来。")
						gainop("魔法师")
						op["魔法师"].val += 10000
					} else {
						show("魔法师缩起身子，避开了你的拥抱。")
						show("", true)
						show("魔法师退出了冒险者公会。")
						if ("魔法师的恋人" in buff)
							gainbuff("魔法师的恋人", -10000)
					}
				}
				nextchapter()
				if (past_event.includes("avenger_orc")) {
					pause()
					show("完成复仇之后，你感觉到有些空虚。")
					gain({ str: -4, dex: -4, wis: -4 })
				}
				if ("咕，杀了我吧" in buff) removebuff("咕，杀了我吧")
			} else {
				if (status.lewd <= 30) {
					show("他们结合的样子令你无法直视。")
					show("在战斗中不好好看着对手可不是个好习惯。兽人族长这么说着打倒了你。")
					gainbuff("监禁：兽人", 1)
					gain({ v_exp: 6, p_exp: 3, s_exp: 3 }, "兽人族长")
					return
				} else {
					show("你紧盯着他们结合的部位，想着如果自己输了会被怎么对待。")
					show("在战斗中看着对手的性器可不是个好习惯。兽人族长这么说着打倒了你。")
					gain({ v_exp: 6, p_exp: 3, s_exp: 3 }, "兽人族长")

					gainbuff("监禁：兽人", 1)
					return
				}
			}
		},
		town:false,
		chance:function(){
			if(week-chapter_startweek<=7)return 0
			if ("失衡" in buff) return 0.5
			if(getop("魔法师")<=-100)return 2
			return 1
		},
		start:3,
		end:3
	}

	ev["orc_prison"]={
		ev:function(){
			show("你被兽人监禁了。")
			if(getbuff("监禁：兽人")==1){
				gainflag("orcprison",1)
				if (getflag("orcprison") == 1) {
					show("你要求兽人杀死自己。")
					show("但兽人表示他很欣赏你，所以要给你一个机会——如果你能忍受住一个月的调教，就放你出去。")
					show("你不确定这是不是一个陷阱，但这至少给了你一些希望。")
				} else if (getflag("orcprison") == 2) {
					show("“为什么又是你？”兽人将你带进了牢房。")
				} else {
					show("“为什么总是你？”兽人将你带进了牢房。")
					setachievement("为什么总是你")
				}
				return
			}
			randomorcev()

		},
		town:true,
		chance:function(){
			if("监禁：兽人" in buff)return 10000
		}
	}
	ev["orc_prison2"]={
		ev:function(){
			show("你被兽人监禁了。")
			if(getbuff("监禁：兽人")==4){
				show("今天是调教的最后一天。")
				show("你等待着兽人调教的到来——却什么都没有发生。",true)

				show("你感到欲求不满，开始自慰。但手指并不能代替兽人的巨根。")
				gain({ v_exp: 5, m_exp: 5 }, "自慰", true)
				gainbuff("兽人的调教", 1)
				if (monk_empty()) {
					show("由于空明体的效果，你勉强保持了内心的清明。")
				}else if (getbuff("兽人的调教") >= rand(10) + 4) {
					show("当兽人进入你的牢房时，你并没有停止自慰。")
					show("你意识到自己不想离开。", true)
					show("兽人和你在先祖的雕像前举办了结合的仪式。")
					show("你们接受了萨满的祝福，在众多兽人的注视下交合。")
					show("这一刻，你感到无上的幸福。")
					pause()
					show("结局：兽人的新娘")
					endofgame("兽人的新娘")
					gameover = true
					return
				} else {
					show("你赶在兽人进入牢房前停下了手上的动作。")
					show("你察觉到兽人似乎在对着你湿漉漉的下体偷笑。")
					show("",true)
				}

				show("兽人按照约定释放了你。")
				show("你意外地发现他没有耍任何花样。")
				gainbuff("监禁：兽人",-10000)
				return
			}
			randomorcev()
			if(chapter!=3)return
			gainbuff("监禁：兽人",1)
		},
		town:false,
		chance:function(){
			if("监禁：兽人" in buff)return 10000
		}
	}
}

function randomorcev(){

	var r=rand(7)
	if (r == 6) {
		if (status.name == "术士") {
			show("你在接受兽人萨满的调教时，向他请教黑暗魔法的技艺。")
			show("萨满惊讶于这世上有人想向自己学习魔法。",true)
			show("然后，他劝你多锻炼肌肉。")
			gain({ v_exp: 6, p_exp: 3, s_exp: 2 }, "兽人萨满")
			gainflag("shaman")
		} else {
			show("兽人萨满告诉你，哥布林需要用魔法来将女人变成雌兽。")
			show("而兽人仅凭肉棒就能做到这一点。")
			gain({ v_exp: 6, p_exp: 3, s_exp: 2 }, "兽人萨满")
		}
	}
	if(r==1){
		show("兽人喂你吃下了一些催乳药物，然后尝试榨出你的乳汁。")
		gain({drug_exp:1})
		if("母乳体质"in buff){
			show("很快，你的身体就对兽人的刺激做出了回应。")
			gain({b_exp:5,p_exp:1},"兽人","extra")
			return
		}
		show("不管他怎么粗暴地挤压你的乳头，都没有任何反应。")
		gain({ b_exp: 3, p_exp: 3 }, "兽人", "extra")
		show("他生气地后入了你。")
		gain({v_exp:5,p_exp:3,s_exp:1},"兽人")
		if (status.b_lv >= 2 + rand(3)) {
			show("你在被侵犯的过程中分泌出了母乳。")
			gain({ b_exp: 3 }, null, "extra")
			gainbuff("母乳体质")
		}
		return
	}
	if (r == 2) {
		show("兽人对你的菊花进行了调教。")
		if (status.a_lv <= 0) {
			show("他勉强塞进来一根手指。")
			gain({ a_exp: 2, p_exp: 3 }, "兽人", true)
		} else if (status.a_lv <= 2) {
			show("他塞进来两根手指，在你的肛门内搅动起来。")
			gain({ a_exp: 4, p_exp: 3 }, "兽人", true)
		} else {
			show("他用手指玩弄了一番后，掏出差不多有你手腕粗细的肉棒对准了你的菊穴。")
			show("你感到了强烈的痛苦，和……一些异样的感觉。")
			gain({ a_exp: 5, p_exp: 5, s_exp: 1 }, "兽人")
		}
		return
	}
	if (r == 3) {
		var rr=rand(4)
		if ((status.name == "骑士" || status.name == "被诅咒的骑士") && !("咕，杀了我吧" in buff)) {
			show("在得知了你的骑士身份之后，兽人要求你在调教开始前先说一遍“咕，杀了我吧”。")
			show("然后……")
			show("“这种程度也配叫女骑士吗？再来！”")
			show("“给我叫得更有感情一点！”")
			show("“你分不清什么是感情，什么是色情吗？”")
			show("“拿出你的骑士精神来！”")
			show("你几乎产生了自己正在骑士团里接受训练的幻觉。")
			gainbuff("咕，杀了我吧")
			gainflag("咕杀")
			show("小于“兽人的调教”层数的掷骰总是判定为失败。")
			return
		}
		if (rr == 0) {
			show("兽人带你去看了一个做工粗糙的雕像。")
			show("你隐约能看出雕的是女人被兽人从后方侵犯。")
			show("兽人告诉你，这是兽人先祖和大魔女。")
			show("大魔女为了不被兽人侵犯，用魔法封印了自己的前穴。然后兽人就不停侵犯她的后穴，直到她自愿解咒。", true)
			show("他一边向你讲述先祖建立异种族后宫的壮举，一边玩弄着你的身体。")
			gain({ v_exp: 2 },"兽人",true)
		} else if (rr == 1) {
			show("兽人带你去看了一个做工粗糙的雕像。")
			show("你隐约能看出雕的是女人跨坐在兽人身上。")
			show("兽人告诉你，这是前代领袖和公主骑士。")
			show("公主骑士号称是天下无双的战士，却在与兽人的决斗中一败涂地。", true)
			show("他一边向你讲述兽人进军人类王国的壮举，一边玩弄着你的身体。")
			gain({ v_exp: 2 }, "兽人", true)
		} else if (rr = 2) {
			show("兽人带你去看了一个做工粗糙的雕像。")
			show("你隐约能看出雕的是女人跪在兽人面前。")
			show("兽人告诉你，这是兽人先祖和精灵女王。")
			show("在传说中，精灵女王最为高傲，堕落的也是最快。", true)
			show("他一边向你讲述先祖建立异种族后宫的壮举，一边玩弄着你的身体。")
			gain({ v_exp: 2 }, "兽人", true)
		} else {
			show("兽人带你去看了一个做工粗糙的雕像。")
			show("你隐约能看出雕的是女人被兽人压在身下。")
			show("兽人告诉你，这是前代领袖和圣女。")
			show("圣女的体液带有奇迹的治愈力量，因此侵犯她的兽人永远不会感到疲惫。", true)
			show("他一边向你讲述兽人进军人类王国的壮举，一边玩弄着你的身体。")
			gain({ v_exp: 2 }, "兽人", true)
		}
	}
	if(r==4){
		if (getop("刺客") >= 0 && rand(2) == 0 && past_event.includes("orc_boss") && !("assassin_vs_orc" in flag)) {
			show("当刺客杀进兽人族长的房间时，他正在侵犯你。")
			show("见到刺客进来，他丝毫没有停下的意思。")
			show("他站起身，维持着插入的状态向刺客走了过去。")
			show("你全身的重量都压在了族长的肉棒上，发出了分不清是痛苦还是快乐的叫声。")
			gainflag("assassin_vs_orc")
			pause()
			show("兽人族长一边侵犯着你一边和刺客战斗。")
			gain({ v_exp: 6, p_exp: 4, s_exp: 2, e_exp: 2 }, "兽人族长")
			if (rand(8) + 1 < getbuff("兽人的调教")) {
				show("刺客面红耳赤盯着你们结合的部位，呼吸变得渐渐粗重。")
				show("她丢出烟雾弹逃跑了。")
				return
			} else {
				show("你配合着兽人的动作扭动腰肢。")
				show("当你感到体内的兽人肉棒进一步膨胀时，你大叫起来。")
				show("刺客明白了你的意图，在兽人族长因为射精而松懈的瞬间绕到了他的背后。")
				show("一击毙命，兽人族长硕大的身躯栽倒在地。")
				gainbuff("监禁：兽人", -10000)
				if (getop("魔法师") < -100) {
					show("", true)
					show("你们救出了被囚禁的魔法师。")
					if (op["魔法师"].prison >= week) {
						show("你抱住魔法师，她在你怀里大哭起来。")
						op["魔法师"].val += 10000
						gainop("魔法师")
					} else {
						show("魔法师缩起身子，避开了你的拥抱。")
						show("", true)
						show("魔法师退出了冒险者公会。")
						if ("魔法师的恋人" in buff)
							gainbuff("魔法师的恋人", -10000)
					}
				}
				show("", true)
				show("几天之后的一个早上，你发现床头多了一袋金币。")
				show("刺客留下的便条上说，击杀兽人首领的赏金应该有你一份。")
				gain({ money: orc_m / 2 * 5, exp: orc_e / 2 * 5 })
				gainop("刺客")
				pause()
				show("你的冒险者等级提升了。")
				if (past_event.includes("avenger_orc")) {
					pause()
					show("你不确定这算不算是完成了复仇")
					gain({ str: -4, dex: -4, wis: -4 })
				}
				if ("咕，杀了我吧" in buff) removebuff("咕，杀了我吧")

				chapter = 4
				chapter_startweek = week
				return
			}
		} else if (past_event.includes("orc_boss")) {
			show("兽人族长将你绑在他的身上，保持着插入的状态和冒险者战斗。")
			gain({ v_exp: 6, p_exp: 4, s_exp: 2, e_exp: 2 }, "兽人族长")
		} else {
			r=0
		}
	}
	if (r == 0) {
		show("你的食物中加入了大量的兽人精液。")
		if (getbuff("兽人的调教") >= 8) {
			show("你将盘子里的食物吃得干干净净。")
			gain({ s_exp: 4 }, "兽人", true)
		} else if (getbuff("兽人的调教") >= 4) {
			show("你渐渐地适应了这种特殊的调料。")
			gain({ s_exp: 3 },"兽人",true)
		} else {
			show("你勉强吃了几口就无法下咽。")
			gain({ s_exp: 2 },"兽人",true)
		}
	}
	if (r == 5) {
		if (getop("魔法师") <= -100) {
			show("你和魔法师一起接受了双人调教。", true)
			show("你尽量表现得主动，试图减少魔法师的负担。")
			gain({ v_exp: 8, a_exp: 4, o_exp: 4, p_exp: 5, s_exp: 5 }, "兽人")
			op["魔法师"].prison += 6
		}
		else {
			show("你和暗精灵一起接受了双人调教。", true)
			show("由于暗精灵的活跃，你几乎无事可做。")
			gain({ v_exp: 1, o_exp: 1, p_exp: 1 }, "兽人")
		}
	}
}