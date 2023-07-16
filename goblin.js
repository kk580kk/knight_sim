let goblin_pow=15
let goblin_e=5
let goblin_m=20
function goblin(){
	ev["goblin1"]={
		ev:function(){
			if (check("str",goblin_pow)>=0) {
				show("你杀死了一个落单的哥布林。")
				gain({exp:goblin_e,money:goblin_m})
			}else{
				ans=rand(3)
				if(ans==0){
					show("你攻击了一个落单的哥布林，但是没造成多少伤害。他在摸了一下你的屁股之后从容地逃跑了。")
					gain({a_exp:1})
				}else if(ans==1){
					show("你攻击了一个落单的哥布林，但是没造成多少伤害。他在摸了一下你的胸部之后从容地逃跑了。")
					gain({b_exp:1})
				}else if(ans==2){
					show("你攻击了一个落单的哥布林，但是没造成多少伤害。他在摸了一下你的阴部之后从容地逃跑了。")
					gain({v_exp:1})
				}
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		end:1
	}
	ev["goblin2"]={
		ev:function(){
			if (check("dex",goblin_pow)>=0) {
				show("你发现了哥布林设下的陷阱。")
				show("你不动声色地绕开了，随后揪出埋伏在一旁的哥布林。")
				gain({exp:goblin_e,money:goblin_m})
			}else{
				show("你踩中了哥布林设下的陷阱。")
				if(rand(2)>=1){
					show("埋伏在一旁的哥布林侵犯了你。")
					gain({v_exp:3,p_exp:2,s_exp:1},"哥布林")
				}
				else{
					show("幸运的是，哥布林似乎忘了这个陷阱的存在。")
					show("不久之后，你设法解开了束缚。")
				}
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		end:1
	}
	ev["goblin3"]={
		ev: function () {
			show("你杀死了一个落单的哥布林。")
			gain({ exp: goblin_e, money: goblin_m })
			pause()
			show("在你搜刮战利品时，藏在一旁的哥布林从背后抓住了你。")
			if (check("str", goblin_pow + status.b_lv * 2) >= 0) {
				show("你被揉了几下胸部之后摆脱了压制，随后你又多了一份战利品。")
				gain({ exp: goblin_e, money: goblin_m, b_exp: 1 })
			} else {
				show("他抓住你的胸部使劲揉弄。你一时之间浑身酸软，无法反抗。")
				gain({ b_exp: 3 })
				if (rand(4) == 0) {
					show("更多哥布林冒了出来。你被他们捆得严严实实。")
					gainbuff("监禁：哥布林", 1)
				} else {
					show("你赶在更多哥布林出现前逃跑了。")
				}
			}
		},
		town:false,
		chance:function(){
			if(week-chapter_startweek<=3)return 0
			return 1
		},
		end:1
	}
	ev["goblin4"]={
		ev:function(){
			show("你遭遇了一支哥布林小队。",true)
			ans=check("max",goblin_pow + 10)
			if(ans>=0){
				show("你巧妙地将哥布林小队各个击破。")
				gain({exp:goblin_e*3,money:goblin_m*3})
			}else{
				show("他们轮流袭击你身上的敏感部位，令你手忙脚乱。")
				var tmp = gain({ "v_exp": 1, "b_exp": 1, "a_exp": 1 })
				if (tmp == 0||check("dex", goblin_pow + tmp*4)>=0) {
					show("在击倒其中一个哥布林后，你突破了他们的包围。")
					gain({ exp: goblin_e, money: goblin_m })
				} else {
					show("你无法在这样的刺激下保持平衡。", true)
					if (rand(2) == 0) {
						show("他们分别占据了你身上的一个洞，各自动起了腰。")
						gain({ "v_exp": 3, "a_exp": 3, "o_exp": 3, "s_exp": 3 }, "哥布林")
					} else {
						show("他们为谁先侵犯你发生了争执，你乘机逃跑了。")
					}
				}
			}
		},
		town:false,
		chance:function(){
			if(week-chapter_startweek<=3)return 0
			return 1
		},
		end:1
	}
	ev["goblin5"]={
		ev:function(){
			var pp = goblin_pow + 4
			if ("兽化魔法" in buff) pp += buff["兽化魔法"]
			var ans=check("wis",pp)
			if (ans < 0) {
				show("哥布林法师对你释放了一个法术。")
				show("好像什么都没有发生。", true)
				var ans2 = rand(10)
				if (ans2 <= 4) {
					show("他示意你靠近。你走上前结果了他。")
					gain({ exp: goblin_e, money: goblin_m * 2 })
				} else if (ans2 <= 7) {
					show("他示意你靠近。你的身体不受控制地遵循了他的指示。")
					show("你趴下身子，朝着哥布林法师爬了过去，随后伸出舌头舔舐他的肉棒。")
					gainbuff("兽化魔法", 1)
					gain({ o_exp: 3, b_exp: 3, s_exp: 1 }, "哥布林法师")
					pause()
					show("在哥布林法师满足之后，他掏出一条链子试图拴在你的脖子上。")
					show("你及时地夺回了身体的操控权。")
				} else {
					show("他示意你靠近。你的身体不受控制地遵循了他的指示。")
					show("你趴下身子，朝着哥布林法师爬了过去，随后伸出舌头舔舐他的肉棒。")
					gainbuff("兽化魔法", 1)
					gain({ o_exp: 3, b_exp: 3, s_exp: 1 }, "哥布林法师")
					pause()
					show("在哥布林法师满足之后，他掏出一条链子试图拴在你的脖子上。")
					show("你顺从地被他牵着，一路爬进了哥布林村。")
					gainbuff("监禁：哥布林", 1)
				}
			}else{
				show("哥布林法师打算对你释放了一个法术，你赶在吟唱完成前结果了他。")
				gain({exp:goblin_e,money:goblin_m*2})
			}
		},
		town:false,
		chance:function(){
			if(week-chapter_startweek<=3)return 0
			return 1
		},
		end:1
	}
	ev["goblin_village"]={
		ev:function(){
			show("你闯进了哥布林村。",true)
			for(i=1;i<=4;i++){
				var r=rand(4)
				if (r == 1) {
					if (check("dex", goblin_pow) >= 0) {
						show("你发现了哥布林设下的陷阱。")
						show("你不动声色地绕开了，随后揪出埋伏在一旁的哥布林。")
						gain({ exp: goblin_e, money: goblin_m })
					} else {
						show("你踩中了哥布林设下的陷阱。")
						show("埋伏在一旁的哥布林侵犯了你。")
						gain({ v_exp: 3, p_exp: 2, s_exp: 1 }, "哥布林")
						pause()
						show("然后，更多哥布林围了上来。")
						gainbuff("监禁：哥布林", 1)
						return
					}
				} else if (r == 2) {
					show("你杀死了一个落单的哥布林。")
					gain({ exp: goblin_e, money: goblin_m })
					pause()
					show("在你搜刮战利品时，藏在一旁的哥布林从背后抓住了你。")
					if (check("str", goblin_pow + status.b_lv * 2) >= 0) {
						show("你被揉了几下胸部之后摆脱了压制，随后你又多了一份战利品。")
						gain({ exp: goblin_e, money: goblin_m, b_exp: 1 })
					} else {
						show("他抓住你的胸部使劲揉弄。你一时之间浑身酸软，无法反抗。")
						gain({ b_exp: 3 })
						show("更多哥布林冒了出来。你被他们捆得严严实实。")
						gainbuff("监禁：哥布林", 1)
						return
					}
				} else if (r == 3) {
					show("你遭遇了一支哥布林小队。", true)
					ans = check("max", goblin_pow + 10)
					if (ans >= 0) {
						show("你巧妙地将哥布林小队各个击破。")
						gain({ exp: goblin_e * 3, money: goblin_m * 3 })
					} else {
						show("他们轮流袭击你身上的敏感部位，令你手忙脚乱。")
						var tmp = gain({ "v_exp": 1, "b_exp": 1, "a_exp": 1 })
						if (tmp == 0 || check("dex", goblin_pow + tmp * 4) >= 0) {
							show("在击倒其中一个哥布林后，你突破了他们的包围。")
							gain({ exp: goblin_e, money: goblin_m })
						} else {
							show("你无法在这样的刺激下保持平衡。", true)
							if (rand(2) == 0) {
								show("他们分别占据了你身上的一个洞，各自动起了腰。")
								gain({ "v_exp": 3, "a_exp": 3, "o_exp": 3, "s_exp": 3 }, "哥布林")
								gainbuff("监禁：哥布林", 1)
								return
							} else {
								show("他们为谁先侵犯你发生了争执。")
								show("别的哥布林反而抢先使用了你的身体。")
								gain({ "v_exp": 3, "s_exp": 1 }, "哥布林")
								gainbuff("监禁：哥布林", 1)
								return
							}
						}
					}
				} else {
					var pp = goblin_pow + 4
					if ("兽化魔法" in buff) pp += buff["兽化魔法"]
					var ans = check("wis", pp)
					if (ans < 0) {
						show("哥布林法师对你释放了一个法术。")
						show("好像什么都没有发生。", true)
						var ans2 = rand(10)
						if (ans2 <= 4) {
							show("他示意你靠近。你走上前结果了他。")
							gain({ exp: goblin_e, money: goblin_m * 2 })
						} else {
							show("他示意你靠近。你的身体不受控制地遵循了他的指示。")
							show("你趴下身子，朝着哥布林法师爬了过去，随后伸出舌头舔舐他的肉棒。")
							gainbuff("兽化魔法", 1)
							gain({ o_exp: 3, b_exp: 3, s_exp: 1 }, "哥布林法师")
							pause()
							show("在哥布林法师满足之后，更多在一旁围观的哥布林包围了你。")
							gainbuff("监禁：哥布林", 1)
							return
						}
					} else {
						show("哥布林法师打算对你释放了一个法术，你赶在吟唱完成前结果了他。")
						gain({ exp: goblin_e, money: goblin_m * 2 })
					}
				}
				pause()
			}
			if(getop("武道家")<-100){
				show("你救出了被折磨得不成人形的武道家。")
				if(week<=op["武道家"].prison){
					show("武道家拒绝了你的搀扶，挣扎着站了起来。")
					op["武道家"].val+=10000
					gainop("武道家")
					gainbuff("武道家的战友")
				}else{
					show("武道家似乎已经忘了如何直立行走，跟在你后面爬行着。")
					show("",true)
					show("武道家退出了冒险者公会。")
					if("武道家的战友" in buff)
						gainbuff("武道家的战友",-10000)
				}
				pause()
			}
			show("你在哥布林村里大杀特杀，然后放火烧毁了这个地方。",true)
			gain({"money":100})
			nextchapter()
			if(getbuff("兽化魔法")>=4)setachievement("平常心")
			//gainbuff("讨伐证明：哥布林村")
			if (past_event.includes("avenger_goblin")) {
				pause()
				show("完成复仇后，你感到有些空虚。")
				gain({str:-2,dex:-2,wis:-2})
			}

		},
		town:false,
		chance:function(){
			if("讨伐证明：哥布林村"in buff){
				return 0
			}
			if(week-chapter_startweek<=7)return 0
			if(getop("武道家")<-100)return 2
			return 1
		},
		end: 1
	}
	ev["goblin_aftermath"]={
		ev:function(){
			show("你遇到了一个眼熟的哥布林。")
			show("你看着他朝你勃起的肉棒，想起了在哥布林村的日子。")
			ans = rand(8 + getbuff("兽化魔法"))
			if(ans>=7){
				show("你下意识地舔了几下他的肉棒，才想起了哥布林是你必须打倒的敌人。",true)
				show("但你有些怀念哥布林精液的味道，一直舔到他射出来为止。")
				gain({o_exp:3,s_exp:1},"哥布林")
				show("",true)
				show("你以狗爬的姿势随着他返回了哥布林村。")
				show("当冰冷的链条再一次栓到你的脖子上时，你才意识到这并不是一场春梦。")
				gainbuff("监禁：哥布林",1)
			}else if(ans>=4){
				show("你下意识地舔了几下他的肉棒，才想起了哥布林是你必须打倒的敌人。",true)
				show("但你有些怀念哥布林精液的味道，一直舔到他射出来为止。")
				gain({ o_exp: 3, s_exp: 1 }, "哥布林")
			}else{
				show("你下意识地舔了几下他的肉棒，才想起了哥布林是你必须打倒的敌人。")
				gain({exp:goblin_e,money:goblin_m,o_exp:1})
			}
		},
		town:false,
		chance:function(){
			if(past_event.includes("goblin_prison2")){
				return 1
			}
		},
		end:1
	}
	ev["goblin_aftermath2"] = {
		ev: function () {
			show("会长公布了一个坏消息：")
			show("一些哥布林正在形成新的聚落。")
			show("虽然说少量的哥布林构不成威胁，但如果他们重新繁衍起来的话，又会成为一个大麻烦。")
		},
		town: true,
		once: true,
		chance: function () {
			return 0.5
		},
		start: 4,
		end: 4
	}
	ev["goblin_aftermath3"] = {
		ev: function () {
			if ("月夜雌兽" in buff) {
				show("你遇到了一个哥布林。")
				show("你在战斗中假装失误，给了他抓住你的机会。")
				show("你爬行在哥布林身后，找到了新哥布林村。")
				show("急需繁殖工具的哥布林对你进行了热烈的欢迎。")
				randomattack(20, 1, "哥布林", false, 5)
				if ("暗精灵" in flag) {
					show("尽兴之后，你轻易地挣脱了束缚。")
					show("当你正要痛下杀手时，一双手悄无声息地从后面伸出，精准地刺激着你的弱点部位。")
					gain({b_exp:2,v_exp:2, les_exp:3},"暗精灵",true)
					show("你发现袭击你的竟是一位熟人。")
					show("“我不会再次让你毁掉我中意的肉棒。”说着，暗精灵用精灵语念起了一段咒语。")
					show("一轮圆月凭空出现在空中，在月光的治愈力量下，一切都显得祥和安宁。")
					show("而你的雌兽本能被空前地强化。")
					if (status.les_lv >= rand(4)) {
						show("你手足并用地扑向暗精灵，舔起她丰满的胸部，随后又将她压在身下，让哥布林同时侵犯你们两人。")
						show("月光的效果被打断了。")
						randomattack(20, 1, "哥布林", false, 5)
						show("")
						show("当你的意识恢复正常时，暗精灵表示她认可了你的实力。")
						show("另外，为了避免你和她争抢哥布林肉棒，她希望你尽快离开。")
						gainbuff("月之祝福")
						setachievement("月之祝福")
						show("沐浴在月光下会强化你的能力")
						return
					} else {
						show("你手足并用地扑向一个哥布林，舔起他的肉棒，随后又抬起屁股迎接另一个哥布林的到来。")
						show("在入侵者彻底化为雌兽，被哥布林用肉棒惩罚的同时，暗精灵也迎来了她的奖励——哥布林的肉棒。")
						show("至于奖励和惩罚为什么都是哥布林的肉棒，沉迷于交合的雌兽们不会在意这种细节。")
						show("结局：暗精灵的复仇")
						endofgame("暗精灵的复仇")
						return
					}
				} else {
					show("尽兴之后，你轻易地挣脱了束缚。")
					show("你在新哥布林村里大杀特杀，然后放火烧毁了这个地方。")
					gain({ money: 100, exp: 25 })
				}
			} else {
				show("你遇到了一个哥布林。")
				show("你在战斗中假装失误，给了他逃跑的机会。")
				show("你潜行在哥布林身后，找到了新哥布林村。")
				show("你在新哥布林村里大杀特杀，然后放火烧毁了这个地方。")
				gain({ money: 100, exp: 25 })
			}
		},
		town: false,
		once: true,
		chance: function () {
			if (past_event.includes("goblin_aftermath2")) return 0.5
		},
		start: 4,
	}
	ev["goblin_prison1"]={
		ev:function(){
			show("你被哥布林扒光衣服，拴在村里的广场上。")
			if(buff["监禁：哥布林"]<=2)
				show("连在项圈上的锁链很短，令你只能屈辱地趴在地上，任凭哥布林侵犯。")
			else{
				show("连在项圈上的锁链很短，但你渐渐地习惯了。")
				show("当哥布林侵犯你时，你会自觉地将屁股抬起到合适的高度。")
			}
			randomattack(15, 1, "哥布林", false, 5)
			if(op["武道家"]!=null&&op["武道家"].val<0){
				show("",true)
				if(week<=op["武道家"].prison){
					show("武道家被拴在你的旁边。")
					show("你时不时能听到她高亢的骂声。")
				}else{
					show("武道家被拴在你的旁边。")
					show("你时不时能听到她不成言语的淫声。")
				}
			}
		},
		town:true,
		chance:function(){
			if("监禁：哥布林"in buff){
				return 100000
			}
		}
	}

	ev["goblin_prison2"]={
		ev:function(){
			var ans = rand(4)
			if (ans == 0 && op["武道家"] == null) ans = 2
			if (ans == 2 && getbuff("兽化魔法") <= 0 && getbuff("监禁：哥布林") >= 3) ans=1
			if (week % 4 == 2) {
				if ("兽化魔法" in buff) {
					show("满月之夜。")
					show("你感到自己的身体在月光下无比躁动。")
					gainbuff("兽化魔法", 1)
					gain({ lust: 5 })
					show("")
					var rr = rand(4)
					if (rr >= 2 && getbuff("监禁：哥布林") >= 3) rr = 0
					if (rr == 1 && getbuff("兽化魔法") >= 4) rr = 0
					if (rr == 0) {
						pause()
						show("你挣脱了锁链。")
						show("你惊讶于自己的力量，但残存的理智不足以让你进行复杂的思考。", true)
						show("你手足并用地扑向一个哥布林，舔起他的肉棒，随后又抬起屁股迎接另一个哥布林的到来。")
						show("更多哥布林聚集过来，用交尾庆祝雌兽的诞生。")
						pause()
						show("结局：哥布林村的雌兽")
						endofgame("哥布林村的雌兽")
						return
					} else if (rr == 1) {
						pause()
						show("你挣脱了锁链。")
						show("你惊讶于自己的力量，但残存的理智不足以让你进行复杂的思考。", true)
						show("你手足并用地逃出了哥布林村。")
						gainbuff("监禁：哥布林", -10000)
					} else {
						pause()
						show("你度过了难眠的一夜。")
						gainbuff("监禁：哥布林", 1)
					}
					return
				} else {
					show("满月之夜。")
					if (op["武道家"] != null && op["武道家"].val < 0) 
						show("你看到武道家在月光下如同野兽一般躁动不安。")
					else show("你看到旁边的女人在月光下如同野兽一般躁动不安。")
					show("你也会变得和她一样吗？")
					gainbuff("监禁：哥布林", 1)
					return
				}
			}

			if(ans==0){
				if(op["武道家"]!=null){
					if(op["武道家"].val<0){
						show("哥布林村的村长想要试一试双人侍奉的滋味，命令武道家和你一起为他服务。",true)
						if (buff["监禁：哥布林"] < 3) {
							show("武道家主动抢下了口交的活。")
							show("但这并不意味着留给你的部分就更加轻松——直到村长满足为止，你被迫舔舐着哥布林的蛋蛋。")
							gain({ "o_exp": 2, "les_exp": 1 })
							gainbuff("监禁：哥布林", 1)
						} else {
							show("武道家主动抢下了口交的活。")
							show("你不甘落后地舔起了哥布林的菊花。")
							gain({ "o_exp": 4, "les_exp": 1 })
							gainbuff("监禁：哥布林", 1)
						}
					}else{
						show("武道家闯入了哥布林村。",true)
						if (rand(2) == 1) {
							show("她被哥布林法师的兽化魔法命中，脱光衣服摆出四肢着地的姿势，然后被哥布林干得高潮连连。")
							show("等到她被锁链拴住后，她才恢复意识，还困惑地问你刚才发生了什么。")
							show("你无言以对。")
							op["武道家"].val -= 10000
							op["武道家"].prison = week + 6
							gainbuff("监禁：哥布林", 1)
						} else {
							show("她掏出一把匕首斩断了锁链，带着你逃了出去。")
							gainbuff("监禁：哥布林", -10000)
							show("", true)
							show("事后你请她到城里最好的餐馆大吃了一顿。")
							gain({ money: -60 })
						}
					}
				}else{
					ans=2
				}
			}else if(ans==1){
				show("哥布林法师以你为教具，向学徒传授魔法。",true)
				if (status.name == "术士") {
					show("你发现这是一个难得的学习施法技巧的机会，听得比法师学徒还认真。")
					gain({ exp: 20 })
				}
				if (rand(2) == 0) {
					gainbuff("兽化魔法", 1)
					show("魔法生效了。")
					show("你像狗一样爬行，打滚，抬起腿在树底撒尿。")
					gain({ e_exp: 2, u_exp: 2 })
				} else {
					show("直到成功为止，他反复地尝试，并声称前面的都是错误示范。")
					gainbuff("兽化魔法", 1)
					gain({ e_exp: 2})
					pause()
				}
				gainbuff("监禁：哥布林",1)
			}else if(ans==2){
				if (op["武道家"] != null && op["武道家"].val < 0) {
					if (week <= op["武道家"].prison)
						show("你和武道家低声商量着逃跑计划，直到被哥布林的肉棒打断。")
					else
						show("你试图和武道家交谈，但她沉迷于哥布林的肉棒，没有理你。")
				}
				else
					show("你默默地忍受着哥布林的侵犯，等待着逃跑的时机。")
				gain({ v_exp: 3, s_exp: 1 }, "哥布林")
				gainbuff("监禁：哥布林", 1)
			}else{
				gain({ v_exp: 3, s_exp: 1 }, "哥布林")
				show("负责看守的哥布林在操了你一顿之后睡着了，你注意到钥匙从他的怀中掉了出来。",true)
				show("你设法用足尖勾到了钥匙，然后解开了锁链。")
				if(op["武道家"]!=null&&op["武道家"].val<0){
					show("你为武道家打开了锁。")
					if(week>op["武道家"].prison){
						show("武道家似乎已经忘了如何直立行走，你只能独自逃出去。")
					}
				}
				if(check("dex",goblin_pow+getbuff("兽化魔法"))>=0){
					if(op["武道家"]!=null&&op["武道家"].val<0&&week<=op["武道家"].prison){
						show("你和武道家相互支持着逃了出去。")
						op["武道家"].val+=10000
						gainbuff("监禁：哥布林",-10000)
						gainop("武道家")
						gainbuff("武道家的战友")
					}else{
						show("你逃了出去。")
						gainbuff("监禁：哥布林",-10000)
					}
				}else{
					if (op["武道家"] != null && op["武道家"].val < 0 && week <= op["武道家"].prison) {
						show("在逃跑途中你们被哥布林发现了。")
						show("武道家当机立断地迎上去舔舐哥布林的肉棒。哥布林以为只是一条母狗没拴好，没有意识到逃跑的母狗不止一条。")
						show("你乘机逃了出来。")
						gainbuff("监禁：哥布林", -10000)
					} else{
				
						show("在逃跑途中你被哥布林发现了。")
						if(getbuff("兽化魔法")<=2){
							show("作为惩罚，你接受了大量的凌辱。")
							randomattack(25, 1, "哥布林", false, 5)
						}else{
							show("你当机立断地迎上去舔舐哥布林的肉棒。哥布林以为只是一条母狗没拴好，没有意识到你试图逃跑。")
							gain({o_exp:5,s_exp:2},"哥布林")
						}
						gainbuff("监禁：哥布林",1)
					}
				}
			}
		},
		town:false,
		chance:function(){
			if("监禁：哥布林"in buff){
				return 100000
			}
		}
	}
}