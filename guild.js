function guild(){
	ev["welcome"] = {
		ev: function () {
			if (myclass.name == "战士") {
				show("你为了锻炼自己成为了一名冒险者。")
				show("作为一名战士，痛苦会给你带来力量——但也会带来快感。")
				gainbuff("无惧疼痛")
			}
			if (myclass.name == "宝藏猎人") {
				show("你带着对财富的渴望成为了一名冒险者。")
				show("作为一名宝藏猎人，你可以发现隐藏的宝箱——但宝箱里时常藏着陷阱。")
				gainbuff("鹰眼术")
			}
			if (myclass.name == "神官") {
				show("你受到女神的指引成为了一名冒险者。")
				show("作为一名神官，女神的加护提升了你的能力——仅限你还是处女时。")
				gainbuff("女神的加护")
				gain({ str: 3, dex: 3, wis: 3 })
			}
			if (myclass.name == "骑士") {
				show("你为了复兴家族成为了一名冒险者。")
				show("作为贵族血脉的继承者，你有着更高的潜力——也有着更高的消费标准。")
				gainbuff("落难贵族")
				gain({ pay: 100 })
			}
			if (myclass.name == "圣骑士") {
				show("你带着强烈的使命感成为了一名冒险者。")
				show("作为一名圣骑士，你身上刻着五道足以反败为胜的正义圣印——这些圣印碰巧位于你的大腿内侧，并且组成了一个正字。")
				gainbuff("正义圣印")
			}
			if (myclass.name == "复仇者") {
				show("你为了复仇成为了一名冒险者。")
				show("作为一名复仇者，你做好了和宿敌战斗的准备——但是并没有做好被宿敌凌辱的准备。")
				tmp = rand(3)
				if (tmp == 0) {
					gainbuff("宿敌：哥布林")
				}
				if (tmp == 1) {
					gainbuff("宿敌：兽人")
				}
				if (tmp == 2) {
					gainbuff("宿敌：触手")
				}
			}
			if (myclass.name == "术士") {
				show("你按照魔法书的指导成为了一名冒险者。")
				show("作为一名术士，你寻求禁忌的力量——这免不了要和魔物亲密接触。")
				gainbuff("禁忌之书")
			}
			if (myclass.name == "被诅咒的骑士") {
				show("你为了破解淫魔的诅咒成为了一名冒险者。")
				show("作为一名骑士，你有着强大的实力——但那是你被诅咒之前的事情了。")
				curse()
			}
			if (myclass.name == "放逐者") {
				show("你遭到放逐成为了一名冒险者。")
				show("由于潜在的魔族血统，你可以觉醒一些特殊的能力——而这正是你被放逐的原因。")
				gainbuff("能量吸取")
				show("你可以从精液中获得经验值")
				gainbuff("血脉觉醒", 1)
			}
			if (myclass.name == "野蛮人") {
				show("你在流浪途中被公会收留，成为了一名冒险者。")
				show("作为一名野蛮人，你不会从露出获得快感——因为你早已习惯更暴露的穿着。")
				gainbuff("轻装上阵")
				gainbuff("真空", 1000)
				gain({ e_lv: 5 })
				bonus_status.e_lv += 5
			}
			if (myclass.name == "武僧") {
				show("你在云游途中目睹魔物的暴行，成为了一名冒险者。")
				show("作为一名修行者，你可以减轻获得的快感——但真气总会有失控的时候。")
				gainbuff("空灵体", 0)
			}
			if (myclass.name == "舞女") {
				show("你在众人的关注之下，成为了一名冒险者。")
				show("作为一名舞女，你可以获得观众的支持——请不要辜负他们的期待。")
				gainbuff("人气明星", 1)
			}
			if (myclass.name == "魔剑士") {
				show("你在魔剑的驱使下，成为了一名冒险者。")
				show("作为一名魔剑士，你手中的武器能够收割敌人的灵魂——外加敌人的欲望。")
				gainbuff("灵魂收割", 0)
				show("每收集2点灵魂，提升1点全属性")
			}
			//			gain({lust:10000})
			//			gain({str:10,dex:10,wis:10})
			//gain({pay:500})
			pause()
			show("公会会长是一个三十岁出头的高大女性，她欢迎了你的加入并提醒你要保护好自己。")
			gainop("会长")
			show("公会教官是一个满身伤痕的魁梧男人，你被他观察你的眼光弄得有些不自在。")
			gainop("教官")
			gainflag("trade", 60)
			goblin_pow = 14
		},
		town: true,
		once: true,
		chance: function () {
			return 100000
		}
	},
		ev["guild_leader"] = {
			ev: function () {
				show("会长召集了新人冒险者当中的女孩子，向你们讲述了自己被魔物侵犯的亲身经历。", true)
				if (rand(2) == 0) {
					show("会长刚讲了几句自己失去处女时的场景，你就开始胡思乱想起来，导致你根本没听清后面说的防护措施。")
					gain({ lust: 1 })
				} else {
					show("你认真地听着课，从会长的悲惨经历当中吸取了一些教训。")
					gain({ exp: 10 })
				}
			},
			town: true,
			once: true,
			chance: function () {
				return 1
			},
			end: 1
		},
		ev["party"] = {
			ev: function () {
				if ("卖春价格" in buff) {
					show("由于你达到了等级10，娼馆为你举办了庆祝活动。")
					gain({ v_exp: 3, a_exp: 3, o_exp: 3, b_exp: 3, s_exp: 4, money: 100 + 2 * prostitute_bonus }, "客人")
					show("谁不想吹嘘自己上过一个高等级的冒险者呢？")
					gainbuff("卖春价格", 25)
					prostitute_bonus += 25
					if (prostitute_bonus >= 50) setachievement("名人堂")
					gainflag("娼妇", 1)
				} else {
					show("由于你达到了等级10，公会为你举办了庆祝活动。")
					show("好友齐聚一堂。")
					if ("常识改变：公会新政" in buff) {
						gain({ v_exp: 6, b_exp: 3, o_exp: 5, les_exp: 10, a_exp: 3, s_exp: 1 }, "魔法师")
					}
					if (getop("武道家") >= 0) gainop("武道家")
					if (getop("魔法师") >= 0) gainop("魔法师")
					if (getop("刺客") >= 0) gainop("刺客")
				}
			},
			town: true,
			once: true,
			chance: function () {
				if (status.lv >= 10) return 2
			},
		},
	ev["guild_leader2"]={
		ev:function(){
			show("你在前往冒险者公会办理手续时，碰见会长在向新人讲述被魔物侵犯的亲身经历。",true)
			if(rand(2)==0){
				show("你听到公会的工作人员低声谈论着会长热衷于公开羞耻行为的异常性癖。")
				show("你对会长这个人有了新的认识。")
				gain({lust:3})
				gainop("会长")
			}else{
				show("你对她为了教导后辈不顾个人名誉的行为肃然起敬，希望自己有一天也可以像她一样坚强。")
			}
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("guild_leader")) return 1
		},
		start:2,
		end:3
	}
	ev["guild_leader3"]={
		ev:function(){
			show("你在前往冒险者公会办理手续时，又一次碰见会长在向新人讲述被魔物侵犯的亲身经历。")
			show("你走上讲台，和后辈们分享了你被"+status.v_virgin+"夺走处女的经历。")
			show("台下的新人和过去的你一样陷入了混乱。")
			gain({lust:5})
			gainop("会长")
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("guild_leader2")&&status.v_virgin!="") return 1
		},
		start:4,
		end:5
	}
	ev["guild_leader_exhibition"]={
		ev:function(){
			show("你在夜晚的街道上露出。")
			gain({e_exp:2})
			show("")
			show("你遇到了和你一样赤身裸体的会长，场面顿时十分尴尬。")
			gain({e_exp:2})
			show("最终，会长表示，身为冒险者，总会碰到在装备完全破损的情况下战斗的不利局面。你们都是在进行这方面的练习。")
			show("你的注意力集中在会长下腹部的心形纹路上，没有听清她在说什么。")
			gainop("会长")
			gainbuff("会长的同好")
		},
		town:true,
		once:true,
		chance:function(){
			if (status.name == "野蛮人") return 0
			if(getop("会长")>=3 && status.e_lv>=3) return 0.5
		}
	}
	ev["guild_leader_drink"]={
		ev:function(){
			if ("常识改变：公会新政" in buff) {
				show("你前往冒险者公会办理手续时，会长正在给你没见过的男人口交。")
				if (status.o_lv <= 3) {
					show("会长表示人类的精液对她而言寡淡如水。她只是在履行冒险者的职责，根本没有在享受。")
					gain({lust: 3})
				} else {
					show("你上去帮忙，籍此缩短了等待时间。")
					gain({ o_exp: 2 }, "路人")
					gainop("会长")
				}
			} else {
				show("你前往冒险者公会办理手续时，会长正在喝加了牛奶的茶。", true)
				if (status.s_lv <= 2) {
					if (rand(3) == 1) {
						show("你提醒她有头发掉进了茶里。")
						show("她捞出了头发后继续喝着。你有些奇怪谁的头发这么弯曲。")
						gainop("会长")
					}
				} else {
					show("你闻到一股熟悉的精液味——会长在茶里加的到底是什么？")
					show("会长察觉到了你的眼神，却继续淡定地品着茶。")
					gainop("会长")
					if (rand(3) == 1) {
						pause()
						show("你无言地看着会长喝下去一根不知道是什么生物的阴毛。")
					}
				}
			}
		},
		town:true,
		once:false,
		chance:function(){
			if(past_event.includes("guild_leader")) return 0.2
		},
	}
	ev["guild_trainer"]={
		ev:function(){
			show("你接受了公会教官的战斗训练。在指导动作时，他假装不小心碰到了你的胸部。")
			gain({ exp: 10, b_exp: 1 }, "教官",true)
			gainop("教官",1)
		},
		town:true,
		once:true,
		chance:function(){
			return 1
		}
	}
	ev["guild_trainer2"]={
		ev:function(){
			show("你接受了公会教官的战斗训练。在指导动作时，他突然抓住你的胸部，你立刻推开了他。")
			show("随后，他声称这是在训练你应对魔物突袭的能力。")
			gain({ exp: 30, b_exp: 2 }, "教官", true)
			gainop("教官",1)
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("guild_trainer")&&status.lewd>=20) return 1
		}
	}
	ev["guild_trainer3"]={
		ev:function(){
			show("你接受了公会教官的战斗训练。在指导动作时，他突然抓住你的胸部揉搓起来，你没有反抗。")
			gain({ exp: 50, b_exp: 4 }, "教官", true)
			pause()
			show("训练结束后，他闯进更衣室，对你进行了应对魔物强奸的特训。")
			gain({b_exp:3,v_exp:5,s_exp:1},"教官")
			gainop("教官",1)
		},
		town:true,
		once:true,
		chance:function(){
			if (past_event.includes("guild_trainer2") && status.lewd >= 40) return 1
		}
	}
	ev["guild_trainer4"]={
		ev: function () {
			show("你作为公会教官的助手，在战斗训练中向众人演示了如何应对魔物的性攻击。")
			gain({ exp: 70, b_exp: 1, a_exp: 1, v_exp: 1, e_exp: 2 })
			pause()
			show("点到为止的演示动作并不能令你满足。")
			show("下课后，他又给你补上了一场实战训练。")
			gain({ b_exp: 3, v_exp: 6, s_exp: 2 }, "教官")
			gainop("教官", 1)
		},
		town:true,
		once:true,
		chance:function(){
			if (past_event.includes("guild_trainer3") && status.lewd >= 60) return 1
		}
	}
	ev["guild_trainer5"]={
		ev: function () {
			show("公会教官提出要在他的家里对你进行一对一的战斗训练。")
			show("你带着半是紧张半是期待的心情去了公会教师的家中。")
			pause()
			show("到了他家里，你才发现真的是战斗训练。")
			show("你被他操练得意识模糊。")
			gain({ exp: 100 })
			pause()
			show("完事之后你又被他操得意识模糊。")
			gain({ b_exp: 5, v_exp: 6, a_exp: 3, s_exp: 3 }, "教官")
			gainop("教官", 1)
		},
		town:true,
		once:true,
		chance:function(){
			if (past_event.includes("guild_trainer4") && status.lewd >= 80) return 1
		}
	}
	ev["weakness"]={
		ev:function(){
			var att="str"
			var s="力量"
			if(status[att]>status.dex){
				att="dex"
				s="敏捷"
			}
			if(status[att]>status.wis){
				att="wis"
				s="智力"
			}
			show("在输给哥布林村后，你认识到自己的弱点是"+s+"。")
			show("你对此展开了特训。")
			if(att=="str")gain({str:1})
			if(att=="dex")gain({dex:1})
			if(att=="wis")gain({wis:1})
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("goblin_prison2")) return 2
		},
		start:1,
		end:1
	}
	ev["weakness2"]={
		ev:function(){
			var att="str"
			var s="力量"
			if(status[att]>status.dex){
				att="dex"
				s="敏捷"
			}
			if(status[att]>status.wis){
				att="wis"
				s="智力"
			}
			show("在输给巨型史莱姆后，你认识到自己的弱点是"+s+"。")
			show("你对此展开了特训。")
			if(att=="str")gain({str:2})
			if(att=="dex")gain({dex:2})
			if(att=="wis")gain({wis:2})
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("slime_boss")) return 2
		},
		start:2,
		end:2
	}
	ev["weakness3"]={
		ev:function(){
			var att="str"
			var s="力量"
			if(status[att]>status.dex){
				att="dex"
				s="敏捷"
			}
			if(status[att]>status.wis){
				att="wis"
				s="智力"
			}
			show("在输给兽人首领后，你认识到自己的弱点是"+s+"。")
			show("你对此展开了特训。")
			if(att=="str")gain({str:3})
			if(att=="dex")gain({dex:3})
			if(att=="wis")gain({wis:3})
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("orc_boss")) return 2
		},
		start:3,
		end:3
	}
	ev["weakness4"]={
		ev:function(){
			var att="str"
			var s="力量"
			if(status[att]>status.dex){
				att="dex"
				s="敏捷"
			}
			if(status[att]>status.wis){
				att="wis"
				s="智力"
			}
			show("在输给触手原体后，你认识到自己的弱点是"+s+"。")
			show("你对此展开了特训。")
			if(att=="str")gain({str:4})
			if(att=="dex")gain({dex:4})
			if(att=="wis")gain({wis:4})
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("tentacle_boss")) return 2
		},
		start:4,
		end:4
	}
}