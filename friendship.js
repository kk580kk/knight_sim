function friendship(){
	ev["fighter"] = {
		ev: function () {
			show("你踩中了哥布林设下的陷阱。", true)
			show("埋伏在一旁的哥布林向你扑来。")
			show("正当你以为自己会遭到侵犯时，一位路过的女武道家打倒了哥布林。")
			gainop("武道家")
			pause()
			show("你想要向她支付谢礼。")
			show("她表示这只是举手之劳，改天请她吃顿饭就好了。")
		},
		town: false,
		once: true,
		chance: function () {
			return 2
		},
		end: 1
	}
	ev["fighter2"]={
		ev:function(){
			show("你在街上遇到了帮助过你的武道家。",true)
			show("为了表达感谢，你请她吃了一顿大餐。")
			show("她的饭量显著地超出了你的预算。")
			gain({"money":-40})
			gainop("武道家")
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("fighter")&&op["武道家"].val>=0)return 1
		},
	}
	ev["fighter3"] = {
		ev: function () {
			show("武道家向你推荐了城中新开的餐馆。", true)
			show("见你有些犹豫，她补充道：各人付各人的钱就行了。")
			gain({ "money": -10 })
			gainop("武道家")
		},
		town: true,
		once: false,
		chance: function () {
			if (status.money <= 50) return 0
			if (past_event.includes("fighter2") && op["武道家"].val >= 0) return 0.25
		},
	}
	ev["fighter4"]={
		ev:function(){
			show("你在翻检敌人的尸体时碰见了武道家。")
			show("她一眼看出，一件被你忽略的残破护符是附魔的宝物。",true)
			show("你将护符卖了不少钱。")
			show("当天晚上，这笔钱就在请武道家吃饭时花掉了一半。")
			gain({"money":50})
			gainop("武道家")
		},
		town:false,
		once:true,
		chance:function(){
			if(past_event.includes("fighter2")&&op["武道家"].val>=0)return 1
		},
	}
	ev["fighter5"]={
		ev:function(){
			show("你在公会的校场里和武道家进行对战练习。")
			gain({"str":2})
			show("你在连败几局后总算是扳回一城。",true)
			show("旁观的公会教官表示，武道家完全就是在放水。")
			show("随后他和武道家拆了几招，逼迫她拿出了真本事，你这才意识到了她刚才让了你多少。",true)
			show("没过多久，武道家被教官抓住了胸部。")
			if(status.b_lv<=1){
				show("你扭过头不忍心再看下去，耳边传来武道家高亢的娇声。")
			}else{
				show("你上前帮助武道家。")
				show("教官一边表扬你关心同伴的精神，一边揉着你的胸部。")
				gain({b_exp:3},"教官")
				gainop("武道家")
			}
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("fighter2")&&past_event.includes("guild_trainer")&&op["武道家"].val>=0)return 0.5
		},
	}
	ev["fighter6"]={
		ev:function(){
			show("得知你最近手头紧张，武道家塞给你一些钱，并爽快地表示不用还。")
			show("你不知道该怎么报答她。")
			gain({"money":100})
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("fighter2")&&status.money<0&&op["武道家"].val>=0)return 1
		},
	}
	ev["fighter7"] = {
		ev: function () {
			show("你主动还上了武道家借给你的钱。")
			gain({ "money": -100 })
			gainop("武道家")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("fighter6") && status.money >= 100 && op["武道家"].val >= 0) return 1
		},
	}

	ev["fighter8"] = {
		ev: function () {
			show("武道家告诉你有一家对女性顾客优惠的店。",true)

			if (check("wis", status.lewd) >= 0) {
				show("你觉得她说的优惠力度实在有些可疑。")
			} else {
				show("你们被灌得酩酊大醉，在那之后的下场可想而知。")
				gain({ v_exp: 6, a_exp: 3, o_exp: 3, s_exp: 4}, "路人")
				gainop("武道家")
			}
		},
		town: true,
		once: true,
		chance: function () {
			if (getop("武道家") > 1) return 0.5
		},
		start: 3
	}
	ev["fighter_beast"] = {
		ev: function () {
			show("你和武道家谈起自己碰到满月就会发作的雌兽本能。")
			show("她表示自己也有类似的毛病，可以和你互相监督。")
			show("", true)
			show("结果，月夜雌兽的传说变成了月夜双雌兽。")
			gain({ e_exp: 3, les_exp: 3, u_exp: 2 }, "武道家")
			gainop("武道家")
			if (!("武道家的战友" in buff)) gainbuff("武道家的战友")
		},
		town: true,
		once: true,
		chance: function () {
			if (week % 4 == 2 && ("月夜雌兽" in buff) && getop("武道家") > 0) {
				return 1
			}
		}
	}

	ev["fighter_s"] = {
		ev: function () {
			show("一天深夜，武道家敲响了你的房门。")
			if (check("wis", succubus_pow + getop("武道家")) >= 0) {
				show("你察觉到她有被催眠的迹象，将她带去公会解咒。")
				gainop("武道家")
			} else {
				show("你刚打开门，立刻就被武道家按倒在床上。")
				gain({ v_exp: 4, les_exp: 4 }, "武道家", true)
				gainop("武道家")
				show("事后你才发现她被魅魔催眠了。")
			}
		},
		town: true,
		once: true,
		chance: function () {
			if (getop("武道家") > 1) return 0.5
		},
		start: 5
	}

	ev["fighter_prison"]={
		ev:function(){
			show("武道家在接下清理哥布林据点的任务之后没有回来。")
			op["武道家"].val-=10000
			op["武道家"].prison=week+8
			if (myclass.name == "复仇者") {
				pause()
				show("你的复仇名单上又多了一个目标")
				gain({ str: 1, wis: 1, dex: 1 })
			}
		},
		town:true,
		once:true,
		chance:function(){
			if(week-chapter_startweek<=7)return 0
			if(past_event.includes("fighter")&&!("讨伐证明：哥布林村"in buff)&&(op["武道家"].val>=0))return 1
		},
		end:1
	}
	ev["magic"] = {
		ev: function () {
			show("你从史莱姆的粘液中救出了一个娇小的女孩子，根据她身上装备的残留部分，你判断她可能是个魔法师。")
			gainop("魔法师")
			pause()
			show("她突然开始大哭。", true)
			show("你不顾她身上污秽的粘液，给了她一个温柔的拥抱。")
			show("她在你的怀中渐渐平静了下来。")
			gain({ les_exp: 1 })
			gainop("魔法师")
			pause()
			show("你将魔法师背回城里。")
			show("医生表示她只是受了些刺激，身体并无大碍。")
		},
		town: false,
		once: true,
		chance: function () {
			return 2
		},
		start: 2,
		end: 2
	}
	ev["magic2"]={
		ev:function(){
			show("你在街上遇到了被你救助过的魔法师。")
			show("她送给你一件可爱的挂坠。",true)
			show("当天晚上，你发现她送给你的饰品居然是附魔的高级品。")
			gain({wis:2})
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("magic")&&op["魔法师"].val>=0)return 1
		},
	}
	ev["magic3"] = {
		ev: function () {
			show("魔法师在跟你聊天时，将你叫成了姐姐。")
			show("她解释道，自己在内心里一直是这么叫的，只是不小心说出了口。")
			pause()
			show("你让她随意称呼自己，不必拘谨。她立刻就姐姐，姐姐地叫了起来。")
			show("你也为多了一个妹妹感到有些欣慰。")
			gain({ les_exp: 1 })
			gainop("魔法师")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("magic2") && op["魔法师"].val >= 0) return 1
		},
		end: 3
	}
	ev["magic4"] = {
		ev: function () {
			show("你和魔法师一起上街购物。")
			ans = rand(3)
			if (ans == 1) {
				show("你们分享了一份美味的甜食。")
			} else if (ans == 2) {
				if (status.lewd>=30)
					show("你们讨论着内衣的款式。")
				else show("你们讨论着衣服的款式。")
			} else {
				show("你们分别为对方购买了一件小礼物。")
			}
			gain({ les_exp: 1 })
			gainop("魔法师")
		},
		town: true,
		once: false,
		chance: function () {
			if (past_event.includes("magic2") && op["魔法师"].val >= 0 && !("魔法师的恋人" in buff)) return 0.3
		},
		end: 3
	}
	ev["magic41"] = {
		ev: function () {
			show("你和魔法师一起上街购物。")
			ans = rand(3)
			if (ans == 1) {
				show("你们分享了一份美味的甜食。")
			} else if (ans == 2) {
				if (status.lewd >=30)
					show("你们讨论着内衣的款式。")
				else show("你们讨论着衣服的款式。")
			} else {
				show("你们分别为对方购买了一件小礼物。")
			}
			show("约会临近结束时，你们在一个无人的角落接吻。")
			var v = gain({ o_exp: 2, les_exp: 2 }, "魔法师")
			if (v >= rand(4) + 1) {
				show("你意犹未尽地将魔法师带进了旅馆。")
				gain({ o_exp: 4, v_exp: 2, b_exp: 2, les_exp: 5 }, "魔法师", true)
			}
			gainop("魔法师")
		},
		town: true,
		once: false,
		chance: function () {
			if (past_event.includes("magic2") && op["魔法师"].val >= 0 && ("魔法师的恋人" in buff)) return 0.3
		}
	}
	ev["magic5"] = {
		ev: function () {
			show("魔法师向你承认，自己小时候差一点被孤儿院的院长侵犯，为此讨厌男性。")
			show("你不知道该怎么答复，只好将她抱在怀里，轻轻抚摸着她的头。", true)
			show("接着她用害羞的声音补充道：在遇到你之后，她发现自己……喜欢女孩子。")
			show("你不确定继续让她靠在你的胸口是不是一个好主意，但你无法推开她。")
			show("魔法师踮起脚尖亲吻了你的嘴唇。")
			gain({ o_exp: 2, les_exp: 1 }, "魔法师")
			gainop("魔法师")
			gainbuff("魔法师的恋人")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("magic3") && op["魔法师"].val >= 2 && op["魔法师"].prison == 0) return 1
		},
	}
	ev["magic6"] = {
		ev: function () {
			show("你又一次从史莱姆的粘液当中救出了魔法师。")
			show("和上次不同的是，这次的粘液带有催情效果。")
			pause()
			if (rand(2) == 0) {
				show("虽然你也沾上了一些媚药粘液，但你还是把她安全地带了出去。")
				gain({drug_exp:1})
				gainop("魔法师")
			} else {
				show("你选择优先处理同伴的异常状态。")
				gain({ les_exp: 3 })
				gainop("魔法师")
			}
		},
		town: false,
		once: true,
		chance: function () {
			if (getop("魔法师") >= 0)return 0.3
		},
		start: 2,
		end: 2
	}
	ev["magic7"] = {
		ev: function () {
			show("你看到魔法师在向刺客打听她受到诅咒的过程。")
			show("你很怀疑魔法师的动机。")
			gainop("魔法师")
		},
		town: true,
		once: true,
		chance: function () {
			if ("魔法师的恋人" in buff && past_event.includes("assassin9")) return 0.2
		}
	}
	ev["magic8"] = {
		ev: function () {
			show("当你和魔法师约会时，触手服突然乱动起来。")
			gain({v_exp: 2, a_exp: 2},"触手服",true)
			show("你只能和魔法师说自己身体不舒服。")
			show("魔法师取消了接下来的安排，提前和你进了旅馆。")
			if (rand(3) == 0) show("你注意到神秘少女在一旁偷笑。")
			pause()
			gain({ o_exp: 4, v_exp: 2, b_exp: 2, les_exp: 5 },"魔法师",true)
			gainop("魔法师")
		},
		town: true,
		once: true,
		chance: function () {
			if ("魔法师的恋人" in buff && "触手服" in buff && getop("神秘少女") >= 0) return 0.2
		}
	}
	ev["magic_prison"]={
		ev:function(){
			show("魔法师被兽人抓走了。")
			op["魔法师"].val-=10000
			op["魔法师"].prison=week+8
			if (myclass.name == "复仇者") {
				pause()
				show("你的复仇名单上又多了一个目标")
				gain({str:1, wis:1, dex:1})
			}
		},
		town:true,
		once:true,
		chance:function(){
			if(week-chapter_startweek<=7)return 0
			if(past_event.includes("magic")&&!("讨伐证明：兽人族长"in buff)&&(op["魔法师"].val>=0))return 1
		},
		start:3,
		end:3
	}

	ev["magic_s"] = {
		ev: function () {
			show("一天深夜，魔法师敲响了你的房门。")
			show("你打开门，装备着假阳具的魔法师向你扑来。")
			if (check("wis", succubus_pow + getop("魔法师")) >= 0) {
				show("你确信只有被魅魔催眠的人才干得出这种事，将她带去公会解咒。")
				gainop("魔法师")
			} else {
				show("你确信只有被魅魔催眠的人才干得出这种事。")
				show("但是机会难得，不试一试岂不可惜？")
				gain({ v_exp: 4, les_exp: 4 }, "魔法师")
				gainop("魔法师")
			}
		},
		town: true,
		once: true,
		chance: function () {
			if (getop("魔法师") > 1) return 0.5
		},
		start: 5
	}


	ev["assassin"] = {
		ev: function () {
			show("你听到打斗的声音。当你赶到现场时，看到兽人压倒了一个矮小的冒险者。")
			show("兽人将魔爪伸向了冒险者的下身。", true)
			show("你正要出手相助时，兽人的动作突然停了一下。")
			show("冒险者乘机掏出一把匕首，洞穿了兽人的腹部。")
			gainop("刺客")
			pause()
			show("你试图和她搭话。")
			show("她丢出一个烟雾弹，在烟雾的掩护下消失了。")
		},
		town: false,
		once: true,
		chance: function () {
			return 2
		},
		start: 3,
		end: 3
	}

	ev["assassin2"] = {
		ev: function () {
			show("你注意到刺客独自一人坐在酒馆阴暗的角落里。")
			show("你坐到了她的对面。")
			show("刺客要求你离她远点。")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("assassin") && getop("刺客") >= 0) {
				return 1
			}
		},
		end: 3
	}
	ev["assassin22"] = {
		ev: function () {
			show("你向刺客请教她的逃脱技术。")
			show("刺客表示无可奉告。")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("assassin") && getop("刺客") >= 0) {
				return 1
			}
		},
		end: 3
	}
	ev["assassin3"] = {
		ev: function () {
			show("你遇到了正在和触手打斗的刺客。")
			show("她的紧身衣被触手撕碎了，暴露出了……和她娇小的身形并不相称的，勃起的肉棒。")
			show("刺客满脸通红地丢出了烟雾弹。")
			gainop("刺客")
		},
		town: false,
		once: true,
		chance: function () {
			if (past_event.includes("assassin") && getop("刺客") >= 0) return 1.5
		},
		start: 4,
		end: 4
	}



	ev["assassin4"] = {
		ev: function () {
			show("刺客半夜里潜入了你的房间，威胁你不要暴露她的秘密。")
			show("你再三向她承诺，她总算移开了顶住你后心的匕首。")
			show("“那么，你打算什么时候移开顶着我屁股的匕首呢？”你问道。")
			show("烟雾弹立刻在你的房间里炸裂开来。")
			gainop("刺客")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("assassin3") && getop("刺客") >= 0 && !(past_event.includes("assassin5"))) return 1
		},
		start: 4
	}

	ev["assassin5"] = {
		ev: function () {
			if (chapter == 4) {
				show("你遇到了正在被触手榨取精液的刺客。")
				show("刺客表示不需要你的帮助，但你还是出手赶跑了触手。")
			}
			else {
				show("你遇到了正在被魅魔榨取精液的刺客。")
				show("刺客表示不需要你的帮助，但你还是出手赶跑了魅魔。")
			}
			show("刺客声称你是多管闲事，而你觉得她只是有些害羞。")
			show("然后，受到媚药影响，失去理智的刺客袭击了你。")
			show("她爆发出一股怪力，将你按在洞窟的石壁上。")
			show("扶她肉棒进入了你的身体。")
			gain({ a_exp: 4, s_exp: 1, les_exp: 2 }, "刺客")
			gainop("刺客")
		},
		town: false,
		once: true,
		chance: function () {
			if (past_event.includes("assassin3") && getop("刺客") >= 0) return 1
		},
		start: 4
	}

	ev["assassin5_1"]={
		ev:function(){
			show("你遇到了正在被魅魔榨取精液的刺客。")
			show("她似乎想对你说什么，但魅魔用接吻封住了她的嘴。")
			show("你决定不要多管闲事。")
			op["刺客"].val-=10000
			op["刺客"].prison=week+8
			show("接下来的一段时间里，刺客都没有半夜造访你的房间——你意识到刺客可能是真的败给魅魔了。")
			if (myclass.name == "复仇者") {
				pause()
				show("你的复仇名单上又多了一个目标")
				gain({ str: 1, wis: 1, dex: 1 })
			}
		},
		town:false,
		once:true,
		chance:function(){
			if(past_event.includes("assassin5")&&getop("刺客")>=0) return 1
		},
		start:5
	}

	ev["assassin6"]={
		ev: function () {
			show("刺客半夜里潜入了你的房间，为之前侵犯你的事情向你道歉。")
			show("作为赔偿，她送给你一柄制作精良的匕首。")
			gain({ dex: 2 })
			pause()
			show("刺客讲述了自己过去在冒险时获得扶她化诅咒的经历。")
			show("近年她都在忍受着性欲——实在忍不住的时候，就会找个魔物发泄一下。")
			show("你表示，她不必这么冒险，自己就可以帮她解决欲望。")
			show("看到她纠结的样子，你温柔地握住了她早已坚硬的肉棒。")
			gain({ o_exp: 4, s_exp: 1, les_exp: 2 }, "刺客")
			gainop("刺客")
			gainbuff("刺客的密友")
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("assassin5")&&getop("刺客")>=0) return 2
		},
		start:4
	}
	ev["assassin7"]={
		ev:function(){
			show("刺客半夜里潜入了你的房间，拜托你为她处理性欲。")
			if(past_event.includes("succubus_assassin"))
				gain({v_exp:4,a_exp:4,s_exp:2,les_exp:2},"刺客")
			else gain({a_exp:4,s_exp:1,les_exp:2},"刺客")
			gainop("刺客")
		},
		town:true,
		once:true,
		chance:function(){
			if(("刺客的密友" in buff)&&getop("刺客")>=0) return 0.6
		},
		start:4
	}
	ev["assassin8"] = {
		ev: function () {
			show("刺客正在阅读一块石碑。")
			show("在发现你过来后，她突然大声警告你这是个陷阱。")
			show("然后，她熟练地逃离了现场。")
			gainop("刺客")
			if ("上古淫魔的奖赏" in buff) {
				show("你凑上去看石碑，上面的数据又变回了你自己的。")
			}
		},
		town: false,
		once: true,
		chance: function () {
			if (getop("刺客") >= 2) return 0.1
		},
		start: 5
	}

	ev["assassin9"] = {
		ev: function () {
			show("刺客半夜里潜入了你的房间，拜托你为她处理性欲。")
			show("她惊动了睡在你旁边的魔法师。",true)
			if (rand(2) == 0) {
				show("你对魔法师说这只是一个梦。")
				show("证据是：女孩子的下身不可能有这东西。")
				gainop("魔法师")
			} else {
				show("你当机立断地和刺客打斗起来，假装她是来找你寻仇的。")
				show("刺客配合了你的演出。")
				gainop("刺客")
			}
		},
		town: true,
		once: true,
		chance: function () {
			if (("刺客的密友" in buff) && getop("刺客") >= 0 && getop("魔法师") >= 0 && ("魔法师的恋人"in buff)) return 0.3
		},
		start: 5
	}
}