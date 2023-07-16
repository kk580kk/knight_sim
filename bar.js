function bar(){
	ev["bar_guild"]={
		ev:function(){
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("公会会长和教官曾经是恋人。",true)
			show("由于会长多次在冒险中被魔物强奸，她的身体无法再被教官满足。两个人就此分手。")
			show("据说，教官在那之后苦练床技，立誓要让每个他教过的女冒险者用身体记住人类男性的好处。")
			show("你从未听说过如此离奇……不对，是离谱的爱情故事。")
			setlocalkey("barp1")
			checkbarachievement()
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("guild_trainer"))return 0.02
		},
	}
	ev["bar_guild2"]={
		ev:function(){
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("公会会长是一个分得清工作和生活的人。",true)
			show("见你没有听明白，他用更小的声音补充道：讨伐魔物是工作，输给魔物才是生活。")
			setlocalkey("barp2")
			checkbarachievement()
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("guild_leader"))return 0.02
		}
	}

	ev["bar_demon"] = {
		ev: function () {
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("上古时代的魔族远比现在的更为强大。")
			show("他们的言语可以歪曲世界的法则，他们的身体可以变化为诸多形态。")
			setlocalkey("barp3")
			checkbarachievement()
		},
		town: true,
		once: true,
		chance: function () {
			if (past_event.includes("demon")) return 0.02
		}
	}
	ev["bar_alchemist"] = {
		ev: function () {
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("城里大部分的治疗药水由炼金术师供应。")
			show("你立刻向酒馆老板询问，有没有不从炼金术师那里拿货的商店。")
			setlocalkey("baralch")
			checkbarachievement()
		},
		town: true,
		once: true,
		chance: function () {
			if (getop("炼金术师") >= 0) return 0.02
		}
	}

	ev["bar_princess"] = {
		ev: function () {
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("失踪的公主骑士曾经受到过严重的洗脑。",true)
			show("过了一会儿，他补充道：举个例子，她以为骑士决斗比的是性技。")
			setlocalkey("barp4")
			checkbarachievement()
		},
		town: true,
		once: true,
		chance: function () {
			if ("胸甲" in flag || "裙甲" in flag) return 0.02
		}
	}
	ev["bar_elf"] = {
		ev: function () {
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("精灵的魔力源自月亮。")
			show("过了一会儿，他补充道：这或许是她们喜欢在月下野合的原因。")
			setlocalkey("barelf")
			checkbarachievement()
		},
		town: true,
		once: true,
		chance: function () {
			if ("暗精灵" in flag) return 0.02
		}
	}
	ev["bar_goblin"]={
		ev:function(){
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("在昔日的战争当中，哥布林法师会用兽化魔法强化己方的战士。")
			show("如今，战斗的形式发生了变化。")
			show("哥布林也为兽化魔法找到了新的用途。")
			checkbarachievement()
			show("情报提升了你对抗哥布林的成功率。")
			goblin_pow-=2
			setlocalkey("barc1")
		},
		town:true,
		once:true,
		chance:function(){
			return 0.1
		},
		start:1,
		end:1
	}
	ev["bar_slime"]={
		ev:function(){
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("人类生下的史莱姆可能会继承母体的外表和技能。")
			checkbarachievement()
			show("情报提升了你对抗史莱姆的成功率。")
			slime_pow -= 2
			setlocalkey("barc2")
		},
		town:true,
		once:true,
		chance:function(){
			return 0.1
		},
		start:2,
		end:2
	}
	ev["bar_orc"]={
		ev:function(){
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("兽人是一个荣誉的种族。")
			show("但他们将公开强奸视为一种荣誉。")
			checkbarachievement()
			show("情报提升了你对抗兽人的成功率。")
			orc_pow -= 2
			setlocalkey("barc3")
		},
		town:true,
		once:true,
		chance:function(){
			return 0.1
		},
		start:3,
		end:3
	}
	ev["bar_tentacle"]={
		ev:function(){
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("一些幼体触手在胎内时就会对母体释放魔力，让她对触手产生母性本能。")
			show("每年都有产下触手的女冒险者造成或大或小的事故。")
			checkbarachievement()
			show("情报提升了你对抗触手的成功率。")
			tentacle_pow -= 2
			setlocalkey("barc4")
		},
		town:true,
		once:true,
		chance:function(){
			return 0.1
		},
		start:4,
		end:4
	}
	ev["bar_boss"]={
		ev:function(){
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("众所周知，四大天王对应着四种攻击属性。")
			show("见你没有听明白，他补充道：我不是指力量，智力，敏捷和全才。")
			checkbarachievement()
			show("情报提升了你对抗魅魔的成功率。")
			succubus_pow -= 2
			setlocalkey("barc5")
		},
		town:true,
		once:true,
		chance:function(){
			return 0.1
		},
		start:5,
		end:5
	}
	ev["bar_player"] = {
		ev: function () {
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("随着月夜雌兽的出现，本地的七大不可思议已经多达十九个了。")
			setlocalkey("barplayer")
			checkbarachievement()
		},
		town: true,
		once: true,
		chance: function () {
			if ("月夜雌兽" in buff) return 0.02
		},
	}
	ev["bar_h1"] = {
		ev: function () {
			show("“说起来你们可能不信，战士的修行方法是……”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			setlocalkey("barh1")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "战士" && "战士的修行" in buff) return 0.1
		}
	}
	ev["bar_h2"] = {
		ev: function () {
			show("“宝藏猎人的鹰眼术不仅可以看见宝藏，也能窥视他人的隐私。”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			show("过了一会儿，他小声补充道：“最新发现：鹰眼术还能看到背后说自己坏话的人。”")
			setlocalkey("barh2")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "宝藏猎人" && past_event.includes("treasurehunter")) return 0.1
		}
	}
	ev["bar_h3"] = {
		ev: function () {
			show("“大部分神官都希望到新圣堂工作，但冒险者公会的那位主动提出要去旧圣堂。”")
			show("“教会嘉奖了她的节俭。”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			show("过了一会儿，他小声补充道：“旧圣堂忏悔室的墙上有个洞。”")
			setlocalkey("barh3")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "神官" && status.lewd >= 50 && !("女神的加护" in buff)) return 0.1
		}
	}
	ev["bar_h4"] = {
		ev: function () {
			show("“有时候我真的想知道，骑士小姐做的事情和骑士有任何关系吗？”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			setlocalkey("barh4")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "骑士" && "契约：娼妇" in buff) return 0.1
		}
	}
	ev["bar_h5"] = {
		ev: function () {
			show("“圣骑士至今可能还没有意识到，发光的正字在夜间露出的时候是多么醒目。”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			setlocalkey("barh5")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "圣骑士" && past_event.includes("exhibition")) return 0.1
		}
	}
	ev["bar_h6"] = {
		ev: function () {
			show("“复仇者的自慰对象竟然是……”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			setlocalkey("barh6")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "复仇者" && getflag("复仇者的屈辱")>=2) return 0.1
		}
	}
	ev["bar_h7"] = {
		ev: function () {
			show("“术士是一个求知欲旺盛的人，连魔物的知识都会去学习。”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			setlocalkey("barh7")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "术士" && (past_event.includes("orc_prison2") || past_event.includes("demon_warlock4") || past_event.includes("goblin_prison2"))) return 0.1
		}
	}
	ev["bar_h8"] = {
		ev: function () {
			show("“骑士会忘记的可不止是战斗经验。”")
			show("“她有时候甚至能忘记自己刚刚被人轮奸——考虑到遗忘诅咒的原理，这倒也不奇怪。”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			show("过了一会儿，他小声补充道：“其实被她听到也没关系，反正过两天她就忘了。”")
			setlocalkey("barh8")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "被诅咒的骑士" && "遗忘诅咒" in buff) return 0.02
		}
	}
	ev["bar_h9"] = {
		ev: function () {
			show("“娼妇契约是一条古老的魔法，千百年来用于保证交易的公平。”")
			show("“放逐者竟然能找到其中的漏洞，真是天赋异禀。”")
			show("酒馆老板见你走进酒馆，连忙闭上了嘴。")
			show("过了一会儿，他小声补充道：“我很想知道她是怎么对魔物收钱的。”")
			setlocalkey("barh7")
			checkbarachievement2()
		},
		once: true,
		town: true,
		chance: function () {
			if (status.name == "放逐者" && "魔族娼妇的秘法" in buff) return 0.1
		}
	}

	ev["bar_hypno"] = {
		ev: function () {
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("你每购买一杯特调饮料，就有一个无辜的兽人遭到榨取。")
			show("没有买卖，就没有伤害。")
			setlocalkey("barhypno")
			checkbarachievement()
		},
		town: true,
		once: true,
		chance: function () {
			if ("常识改变：隐藏菜单" in buff) return 0.1
		}
	}

	ev["bar_saint"] = {
		ev: function () {
			show("在收了一笔可观的小费后，酒馆老板小声说道：")
			show("不必费心探究圣水的来源，心存感激就行。")
			setlocalkey("barsaint")
			checkbarachievement()
		},
		town: true,
		once: true,
		chance: function () {
			if ("圣水的恩惠" in buff) return 0.2
		}
	}
}

function checkbarachievement() {
	if (getlocalkey("baralch") != null && getlocalkey("barplayer") != null && getlocalkey("barp1") != null && getlocalkey("barp2") != null && getlocalkey("barp3") != null && getlocalkey("barp4") != null)
		if (getlocalkey("barc1") != null && getlocalkey("barc2") != null && getlocalkey("barc3") != null && getlocalkey("barc4") != null && getlocalkey("barc5") != null && getlocalkey("barhypno") != null && getlocalkey("barsaint") != null && getlocalkey("barelf") != null)
			setachievement("说好的小费呢")
	if ("常识改变：分享秘密" in buff) {
		show("作为交换，你分享了自己的秘密")
		var r = rand(3)
		if (r == 0) {
			show("你向酒馆老板谈起自己的性经验。")
		} else if (r == 1) {
			show("你向酒馆老板谈起自己的异常性癖。")
		} else if (r == 2) {
			show("你向酒馆老板谈起自己的敏感部位。")
		}
		gainbuff("情报公开", 1)
		show("泄露的情报降低了你对抗流氓的成功率")
	}
}
function checkbarachievement2() {
}