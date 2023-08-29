prostitute_firstweek = -100000

function prostitute(){
	/*ev["prostitute"]={
		ev:function(){
			show("你遇到了多日不见的武道家，她看起来从哥布林监禁造成的创伤当中恢复了一些。")
			show("她表示自己在从事一份收入不菲的新职业，建议你前来试一试。")
			show("你随她来到工作地点，才发现这是一家娼馆。",true)
			show("你被武道家的怪力拉进了娼馆老板的办公室。")
			show("老板询问你的来意，武道家立刻抢着表示你对于卖春有兴趣。")
			show("老板注视着你，询问这是不是你的真实想法。")
			show("",true)
			show("你本想拒绝，不知道为什么却无法说出口。",true)
			show("你立下了卖身的魔法契约。")
			show("娼馆老板交给你一袋金币。")
			gain({money:200})
			gainbuff("契约：娼妇")
			gainflag("娼妇",1)
			prostitute_week=week
			prostitute_cnt=0
		},
		town:true,
		once:true,
		chance:function(){
			if(chapter==2 && week-chapter_startweek<=3)return 0
			if(getop("武道家")<0 && ("负债"in buff) && (status.money<0) && !("娼妇" in flag)) return 1
		},
		start:2
	}*/
	ev["prostitute2"]={
		ev:function(){
			show("你穿着暴露的衣服，在娼馆的客人面前初次亮相。")
			if(status.name == "战士")show("“今晚的新人是——战士。这一双腿曾经踢翻了无数敌人，如今却要在各位的面前打开。”")
			if (status.name == "宝藏猎人") show("“今晚的新人是——宝藏猎人。她为了财富踏遍了魔物的巢穴，最后发现还是我们这儿金币又多又快活！”")
			if (status.name == "神官") show("“今晚的新人是——这位的身份可要保密，不然教会准得找我麻烦。”")
			if (status.name == "骑士") show("“今晚的新人是——骑士。众所周知，女骑士在面对兽人的肉棒时毫无胜算，不知道她在面对人类的肉棒时表现又会如何？”")
			if (status.name == "圣骑士") show("“今晚的新人是——圣骑士。据说圣骑士只有在直面淫邪时才能积蓄圣印的力量，今晚各位可不得帮她好好充能吗？”")
			if (status.name == "复仇者") show("“今晚的新人是——复仇者。愿她今晚可以放下对魔物的仇恨，感受到人类的爱。")
			if (status.name == "术士") show("“今晚的新人是——术士。谁想狠狠地教育一下这个沉迷黑暗力量的小丫头？”")
			if (status.name == "被诅咒的骑士") show("“今晚的新人是——被诅咒的骑士。如果有什么能比女骑士更受我们这个业界的欢迎，自然就是受到淫魔诅咒的女骑士！”")
			if (status.name == "放逐者") show("“今晚的新人是——放逐者。她只是因为一丁点魅魔血统就遭到了放逐。当然，在我们这里，她的血统是个加分项。”")
			if (status.name == "野蛮人") show("“今晚的新人是——野蛮人。相信大家早已见过她的裸体，也早已想要尝试她的滋味。”")
			if (status.name == "武僧") show("“今晚的新人是——武僧。我们这些人对遥远国度的文化一直都很感兴趣，特别是合欢宗，极乐蛊，采补法和阴阳和合散。”")
			if (status.name == "舞女") show("“今晚的新人是——舞女。以她的收入水平根本不该出现在这里，真是世事难料啊。”")
			if (status.name == "魔剑士") show("“今晚的新人是——魔剑士。我得事先说明一下，如果在和她交合的过程中看到奇怪的灵体冒出来，那是她抵达高潮的标志。”")
			if(status.v_virgin==""){
				show("你被要求亲手张开阴部，向他们展示了你未经人事的小穴。")
				gain({e_exp:2})
				pause()
				show("娼馆公开拍卖了你的处女。")
				show("成交价达到了一个惊人的数额，但你只分到了一小部分。")
				gain({v_exp:4,s_exp:1,money:200},"客人")
				if (status.v_virgin == "") {
					show("客人表示自己买下的是处女，所以刚才那次不算。")
					gain({ v_exp: 4, s_exp: 1}, "客人")
				}
				if (status.v_virgin == "") {
					show("直到体力耗尽为止，客人反复地尝试着。")
					gain({ v_exp: 4, s_exp: 1 }, "客人")
				}
			}else{
				if(status.v_lv>=3)
					show("你被要求亲手张开阴部，向他们展示了你经验丰富的小穴。")
				else
					show("你被要求亲手张开阴部，向他们展示了你几乎全新的小穴。")
				gain({ e_exp: 2 })
				pause()
				show("娼馆公开拍卖了你的初次接客。")
				show("成交价达到了一个可观的数额，但你只分到了一小部分。")
				gain({v_exp:4,s_exp:1,money:100},"客人")
			}
			gainflag("娼妇",1)
			gainbuff("卖春价格", 50)
			if ("魅魔的香水" in buff) {
				show("由于魅魔的香水，你的卖春价格提高了。")
				gainbuff("卖春价格", 25)
				prostitute_bonus += 25 
			}
			prostitute_week=week
			prostitute_firstweek = week
		},
		town:true,
		once:true,
		chance:function(){
			if("契约：娼妇" in buff) return 50
		}
	}
	ev["prostitute_dog"]={
		ev:function(){
			show("不知道从何时起，娼馆的客人都知道了月夜雌兽的真身。","stable")
			show("你变得更受欢迎了——尤其是在满月时。", true)
			gainbuff("卖春价格", 25)
			prostitute_bonus +=25 
			if (prostitute_bonus >= 50) setachievement("名人堂")
		},
		town:true,
		once:true,
		chance:function(){
			if ("卖春价格" in buff && "月夜雌兽"in buff) return 2
		},
		start:2
	}

	ev["prostitute3"]={
		ev:function(){
			show("你前往娼馆工作。",true)
			var ans=rand(5)
			if(ans==0){
				show("你温柔地侍奉着客人的肉棒。")
				gain({ v_exp: 3, o_exp: 3, b_exp: 3, s_exp: 2, money: 50 + prostitute_bonus },"客人")
			}else if(ans==1){
				show("客人激烈地干着你的小穴，直到你失去意识。")
				gain({ v_exp: 5, p_exp: 3, s_exp: 2, money: 50 + prostitute_bonus },"客人")
			}else if(ans==2){
				show("客人在你身上使用了各种各样的调教工具。")
				gain({ b_exp:3, a_exp: 3, drug_exp:3, u_exp:3, p_exp: 6, money: 50 + prostitute_bonus },"客人")
			}else if(ans==3){
				show("你穿着暴露的服装在街头为娼馆拉客，吸引了不少异样的目光。")
				gain({ e_exp: 5, money: 50 + prostitute_bonus })
			}else{
				show("你为集体客提供了服务。")
				gain({ v_exp: 3, a_exp: 3, o_exp: 3, b_exp: 3, s_exp: 4, money: 100 + 2*prostitute_bonus },"客人")
			}
			gainflag("娼妇",1)
			prostitute_week=week
		},
		town:true,
		once:false,
		chance:function(){
			if ("卖春价格" in buff) return prostitute_chance()*2
		}
	}
	ev["prostitute4"] = {
		ev: function () {
			show("在你首次卖春一周年的纪念日那天，娼馆举办了庆祝活动。", true)
			show("你在众人的怂恿下豪饮着掺了媚药的酒。")
			gain({drug_exp:5})
			pause()
			show("直到客人尽兴为止，你以五个金币一次的优惠价格供人使用着身体。")
			randomattack(prostitute_bonus + 25, 1, "客人", false, 5)
			gain({ money: prostitute_bonus * 5 + 125})

			gainflag("娼妇", 1)
			prostitute_week = week
			setachievement("感谢祭")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("prostitute2") && "契约：娼妇" in buff && (week - 48 >= prostitute_firstweek)) return 5
		}
	}
	ev["prostitute_princess"] = {
		ev: function () {
			show("你前往娼馆工作。", true)
			show("一位年迈的客人突然问起你是否听说过公主骑士的踪迹。",true)
			if (past_event.includes("fallen_princess")) {
				show("你提起自己遭遇公主骑士的经历并和她较量的经历——但你没敢提较量了什么")
				show("你告诉对方遭遇的地点，并提醒他，公主骑士可能有些神志不清")
			} else {
				show("你提起自己发现公主骑士装备的经历，将装备失落在迷宫里的她恐怕已经遭遇了不幸")
			}
			show("客人听后感慨了一阵", true)
			pause()
			show("然后他要求你穿上公主骑士的装备进行角色扮演。")
			gain({ v_exp: 6, a_exp: 3, o_exp: 2, b_exp: 2, s_exp: 3, money: 200 + prostitute_bonus }, "客人")
			prostitute_week = week
			pause()
			show("在那之后，公主骑士play在娼馆大为流行")
			gainbuff("卖春价格", 25)
			prostitute_bonus += 25
			gainflag("娼妇", 1)
			if (prostitute_bonus >= 50) setachievement("名人堂")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("prostitute2") && "契约：娼妇" in buff && ("胸甲" in flag || "裙甲" in flag)) return prostitute_chance()
		}
	}
	ev["prostitute_bonus"] = {
		ev: function () {
			show("不知道从何时起，娼馆的客人都知道了你有一次在潜入兽人部落时，沉迷于偷窥群交，导致被兽人抓住的事情。")
			show("客人们对你的变态程度肃然起敬。",true)
			gainbuff("卖春价格", 25)
			prostitute_bonus += 25
			if (prostitute_bonus >= 50) setachievement("名人堂")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("prostitute2")  && "契约：娼妇" in buff && "侦查敌情" in flag) return 2
		}
	}
	ev["prostitute_bonus2"] = {
		ev: function () {
			show("不知道从何时起，娼馆的客人都知道了你身上有着守护处女的魔纹，任何插入的尝试都会被引导到后庭。")
			show("你本以为这会影响生意，结果想要尝试淫乱处女的客人络绎不绝。", true)
			gainbuff("卖春价格", 25)
			prostitute_bonus += 25
			if (prostitute_bonus >= 50) setachievement("名人堂")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("prostitute2") && "契约：娼妇" in buff && "守护魔纹" in buff) return 2
		}
	}
	ev["prostitute_bonus3"] = {
		ev: function () {
			show("不知道从何时起，娼馆的客人都知道了你在决斗中击败堕落公主骑士的壮举。")
			show("很多人都想和你来一场这样的决斗。", true)
			gainbuff("卖春价格", 25)
			prostitute_bonus += 25
			if(prostitute_bonus>=50) setachievement("名人堂")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("prostitute2") && "契约：娼妇" in buff && "传奇克星" in buff) return 2
		}
	}
	ev["prostitute_bonus4"] = {
		ev: function () {
			show("不知道从何时起，娼馆的客人都知道了义警的真身。")
			show("你不明白为什么人们愿意花钱被义警处刑。", true)
			gainbuff("卖春价格", 25)
			prostitute_bonus += 25
			if (prostitute_bonus >= 50) setachievement("名人堂")
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("prostitute2") && "契约：娼妇" in buff && "常识改变：义警行动" in buff) return 1
		}
	}
}

function prostitute_chance() {
	if (!("卖春价格"in buff)) return 0
	var ans = (week - prostitute_week) * 0.1
	if (status.money < 0) ans -= status.money / 200
	if (ans < 0 || ans == null) return 0
	return ans
}