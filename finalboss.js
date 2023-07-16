let succubus_pow=35
let succubus_m=50
let succubus_e=40
function finalboss(){
	ev["succubus"]={
		ev:function(){
			show("你被魅魔从后方偷袭了。")
			if(rand(2)==0){
				show("她一边玩弄着你的胸部，一边在你的耳边低语着。")
				if(check("str",succubus_pow+status.b_lv-3)>=0){
					show("你挣脱了她的控制。")
					gain({money:succubus_m,exp:succubus_e,b_exp:1,les_exp:1})
				}else{
					show("你沉迷于快感，没有挣脱。")
					gain({b_exp:5,les_exp:5},"魅魔",true)
				}
			}else{
				show("她一边玩弄着你的蜜裂，一边在你的耳边低语着。")
				if (check("str", succubus_pow +status.v_lv-3)>=0){
					show("你挣脱了她的控制。")
					gain({ money: succubus_m, exp: succubus_e, v_exp:1,les_exp:1})
				}else{
					show("你沉迷于快感，没有挣脱。")
					gain({ v_exp: 5, les_exp: 5 }, "魅魔", true)
				}
			}
		},
		town:false,
		chance:function(){
			return 1.5
		},
		start:5,
		end:5
	}

	ev["succubus2"]={
		ev:function(){
			show("魅魔对你释放了魅惑魔法。")
			if(check("wis",succubus_pow + status.m_lv-3)>=0){
				show("你抵抗住诱惑，击败了魅魔。")
				gain({money:succubus_m,exp:succubus_e})
			}else{
				show("你按照魅魔的指示开始自慰。")
				masturbation(5)
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:5,
		end:5
	}

	ev["succubus3"]={
		ev:function(){
			show("魅魔对你释放了催眠魔法。")
			if(check("wis",succubus_pow+status.lust/4)>=0){
				show("你没有中招。")
				gain({money:succubus_m,exp:succubus_e})
			}else{
				show("你觉得自己没有中招。")
				gainbuff("催眠")
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:5,
		end:5
	}

	ev["succubus4"]={
		ev:function(){
			show("魅魔的胸部向着你的脸压了过来。",true)
			if(check("dex",status.o_lv + status.drug_lv + succubus_pow)>=0){
				show("你抵抗住诱惑，闪开了这一击。")
				gain({money:succubus_m,exp:succubus_e})
			}else{
				show("你败给了欲望，吮吸着她充满魔力的乳汁。")
				gain({ o_exp: 3, les_exp: 3, drug_exp: 3 }, "魅魔", true)
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:5,
		end:5
	}

	ev["succubus_coin"] = {
		ev: function () {
			show("魅魔对你释放了魅惑魔法。")
			show("你抵抗住诱惑，击败了魅魔。")
			gain({ money: succubus_m, exp: succubus_e })
			show("")
			show("在魅魔的掉落物当中有一枚粉红色的硬币。")
			show("你伸手触碰，硬币立刻就消失了。")
			gainbuff("梦境乐园的门票")
		},
		town: false,
		once: true,
		chance: function () {
			if (!"梦境乐园的门票" in buff) return 0.3
		},
		start: 5,
		end: 5
	}

	ev["succubus_assassin"]={
		ev:function(){
			if(week<=op["刺客"].prison){
				show("你从一个诡异的魔法阵当中救出了刺客，她的下腹部多了一个淫纹。")
				show("刺客感谢了你的帮助。")
				show("你很清楚她接下来会做什么。")
				gain({v_exp:4,a_exp:4,s_exp:2,les_exp:2},"刺客")
				op["刺客"].val+=10000
				gainop("刺客")
				gainbuff("刺客的密友")
			}else{
				show("你遇到了被转化为魅魔的刺客。")
				show("她的肤色变成了暗色，背后多了小巧的翅膀和可爱的尾巴，还有，她的扶她肉棒变得更大了。")
				show("她要求你尽快离开——赶在她控制不住扶她魅魔的本能之前。",true)
				show("")
				show("刺客退出了冒险者公会。")
				if("刺客的密友" in buff){
					gainbuff("刺客的密友",-10000)
				}
			}
		},
		town:false,
		once:true,
		chance:function(){
			if(past_event.includes("assassin5_1")) return 2
		},
		start:5,
		end:5
	}

	ev["succubus3_after"]={
		ev:function(){
			ans=rand(3)
			if (ans == 0) {
				show("当你恢复意识时，你正躺在一间破旧的男厕里，满身都是精液。")
				gain({ v_exp: 8, a_exp: 4, o_exp: 6, s_exp: 6, e_exp: 5 }, "路人")
				gainbuff("公共厕所", 1)
			} else if (ans == 1) {
				show("当你恢复意识时，你正在触手洞窟里泡精液浴。")
				gain({ s_exp: 10 }, "触手")
			} else {
				show("当你恢复意识时，你正在和魔法师共享一根双头假阳具，而武道家骑在刺客的身上扭动身体。")
				gain({ v_exp: 6, b_exp: 3, o_exp: 5, les_exp: 10, a_exp: 3, s_exp: 1 }, "魔法师")
			}
			gainbuff("催眠",-10000)
		},
		town:true,
		chance:function(){
			if("催眠"in buff)return 10000
		},
		start:5,
		end:5
	}

	ev["guild_succubus"] = {
		ev: function () {
			show("会长召集了公会的成员。")
			show("她宣布魔王要回来了，她感受到了对方的魔力。")
			show("她掀开上衣，展示出自己的小腹。")
			show("那里有着一个心形纹路，散发着微弱的粉色光芒。", true)
			show("会长表示自己当年在讨伐魔王时受到了诅咒，在与魔物交合时能够获得加倍的快感，却无法对人类的身体产生任何反应。")
			show("魔王认为这样就会让她堕落，但她坚持下来了。")
			show("她也会继续坚持下去。")
			op["会长"].prison = week + 2
		},
		town: true,
		once: true,
		chance: function () {
			if (week - chapter_startweek >= 4) return (week - chapter_startweek) / 2
		},
		start: 5,
		end: 5
	}

	ev["guild_succubus2"]={
		ev:function(){
			show("你前往公会办理手续时，发现会长只穿着内衣。")
			show("会长表示，这是为了让别人时刻监督自己身上淫纹的恶化程度。")
			gainop("会长")
		},
		town:true,
		once:true,
		chance:function(){
			if(past_event.includes("guild_succubus")&&getop("会长")>=3)
				return 1
		},
		start:5,
		end:5
	}
	ev["guild_succubus3"]={
		ev:function(){
			show("会长召集了公会的成员。")
			show("她宣布自己已经坚持不下去了，然后她身上的淫纹发出了耀眼的光芒。")
			show("当光芒散去时，会长已经变成了魅魔。")
			show("人群一片慌乱。",true)
			show("教官站了出来，表示自己掩护，让你们先撤。")
			show("但会长没有袭击任何人，张开翅膀逃跑了。",true)
			show("会长退出了冒险者公会。")
			op["会长"].val-=10000
			show("",true)

			show("你决定前去讨伐魔王，将会长带回来。")
			team1=false
			team2=false
			team3=false
			if (getop("武道家") >= 0 && "武道家的战友" in buff) {
				show("“这样的大战怎么能少得了我呢？”")
				show("武道家加入了你的队伍。", true)
				team1=true
			}
			if (getop("魔法师") >= 0 && "魔法师的恋人" in buff){
				show("“不管要面对什么，我都会和姐姐在一起。”")
				show("魔法师加入了你的队伍。",true)
				team2=true
			}
			if (getop("刺客") >= 0 &&　"刺客的密友" in buff){
				show("“必须终结淫魔的诅咒……”")
				show("刺客加入了你的队伍。",true)
				team3=true
			}
			if (getop("炼金术师") >= 4) {
				show("“带上这个，在对付魔王的时候你会用得到的。”")
				show("炼金术师交给你一瓶药剂。")
				gainbuff("炼金术师的秘密武器")
				pause()
			}
			show("“是时候给过去的恩怨做个了断了。”")
			show("教官加入了你的队伍。")
		},
		town:true,
		once:true,
		chance:function(){
			if(week>op["会长"].prison && op["会长"].prison!=null && op["会长"].prison!=0)return week-op["会长"].prison
		},
		start:5,
		end:5
	}
	ev["succubus_boss"]={
		ev:function(){
			show("你踏入了魔王的宫殿。")
			show("一个可爱的幼女正等在门后。")
			show("“不要大意！那是前代魔王的女儿！”教官大喊着。")
			show("你反应慢了一步，被她触碰了身体。")
			gainbuff("淫纹")
			var cnt=status.orgasm+50
			show("你注意到自己的下腹部出现了一个心形纹路，上面闪烁着数字50。")
			show("",true)
			show("“只是战斗的话，未免也太无趣了，让我们来玩个游戏吧。”")
			show("“游戏规则很简单——在高潮五十次之后，你就会被转化成魅魔。”")
			show("“不论你是否救出会长，你都会和她再度成为同伴。”魔王发出魔王式的怪异笑声，随即消失不见。",true)
			show("")
			show("“按照惯例，在挑战我之前，你必须先打倒我手下的四大天王。”魔王不知在何处解说着。")
			show("",true)
			show("口天王出现了。")
			show("“想要通过这里的话，就先吞下我的精液吧！”口天王是一个强壮的兽人，他的肉棒看起来甚至比一般的兽人还要大上几分。",true)
			if(getop("武道家")>=0 && "武道家的战友"in buff){
				show("“就由我来做你的对手！”武道家站了出来，“看看到底是你的存货多，还是我的胃口更大。”")
				show("她一口气吞下了整根兽人肉棒。")
			}else{
				show("你双手握住兽人的巨根，勉强地吞吐着前端。")
				show("兽人对此并不满意，按着你的头一下子就顶到了喉咙的深处。")
				gain({ o_exp: 20, p_exp: 10, s_exp: 10 }, "口天王")
				pause()
				var cnt2=cnt-status.orgasm
				if(cnt2<=0){
					show("淫纹上的数字变成了0。")
					show("你感到子宫内有一种奇妙的感觉。")
					show("你意识到自己无法抗拒，也不必抗拒。")
					show("你躺倒在地，任凭快感传遍全身上下，体内体外的每一个位置。")
					show("粉色的光芒笼罩了你，你抵达了前所未有的强烈高潮。")
					show("当光芒散去时，你成为了魅魔。")
					show("结局：魔王的部下")
					gameover=true

					endofgame("魔王的部下")

					return
				}else{
					show("淫纹上的数字变成了"+cnt2+"。")
				}
			}
			show("“口天王只是四大天王当中最弱的一个，接下来的三人可没这么好对付。”魔王评论道。")
			show("",true)
			show("乳天王出现了。")
			show("“让你们见识一下，我最伟大的发明——自动榨乳装置3000型！”乳天王是一个老人，在他身边放着一台奇怪的装置。",true)
			if(getop("魔法师")>=0 && "魔法师的恋人" in buff){
				show("“这次该我来保护姐姐了！”魔法师躺到榨乳装置的操作台上，褪去上衣，露出平坦的胸部。")
				show("乳天王对榨乳装置下达指令，但机器似乎扫描不到胸部的存在。")
				show("他反复按下启动键，直到机器发生故障。",true)
				show("“这就是传说中的铁壁防御吗？”魔王评论道。")
			}else{
				if ("母乳体质" in buff) {
					show("榨乳装置的吸盘牢牢地吸附在你的胸口。")
					show("强烈的吸力令你的母乳喷涌而出。")
					gain({ b_exp: 30, p_exp: 10 }, "胸天王")
				} else {
					show("榨乳装置的吸盘牢牢地吸附在你的胸口。")
					show("强烈的吸力将你的胸部吸得生疼。")
					show("见到你没有产出母乳，乳天王按下了一个按钮。")
					show("两针催乳剂被打进了你的乳头，随后，母乳喷涌而出。")
					gain({ b_exp: 20, p_exp: 20 }, "胸天王")
					gainbuff("母乳体质")
				}
				pause()
				show("")
				var cnt2=cnt-status.orgasm
				if(cnt2<=0){
					show("淫纹上的数字变成了0。")
					show("你感到子宫内有一种奇妙的感觉。")
					show("你意识到自己无法抗拒，也不必抗拒。")
					show("你躺倒在地，任凭快感传遍全身上下，体内体外的每一个位置。")
					show("粉色的光芒笼罩了你，你抵达了前所未有的强烈高潮。")
					show("当光芒散去时，你成为了魅魔。")
					show("结局：魔王的部下")
					gameover = true
					endofgame("魔王的部下")

					return
				}else{
					show("淫纹上的数字变成了"+cnt2+"。")
				}
				show("“你的乳汁在人类当中称得上美味了。我很期待你成为魅魔后的发挥。”魔王评论道。")
			}
			show("",true)
			show("菊天王出现了。")
			if(rand(20)==0){
				show("“我的鸡鸡可是能够分泌媚药的鸡鸡。”菊天王是一个魅魔，她说话间舔了舔自己的龟头——你没有看错，扶她肉棒的长度就是可以这么离谱。",true)
				show("然后她陷入发情状态，手口胸并用地爱抚着自己的超长肉棒。",true)
				setachievement("经典重现")
				show("你们无视了她，继续前进。")
				show("“这个是小概率出现的彩蛋环节，如果你碰到了，说明你运气很好。”魔王评论道。")
			}else{
				show("“就让姐姐来好好疼爱一下你的菊花吧。”菊天王是一个魅魔，她说话间舔了舔自己的龟头——你没有看错，扶她肉棒的长度就是可以这么离谱。",true)
				if(getop("刺客")>=0 &&　"刺客的密友" in buff){
					show("“在侵犯别人的菊花之前，先担心一下你自己的菊花吧！”刺客不知道何时绕到了她的身后。")
					show("刺客贯穿了魅魔的后庭。魅魔象征性地反抗了两下就不再挣扎，陶醉在被侵犯的快感当中，她的肉棒随着身后的撞击大幅摇晃着。")
				}else{
					show("你被魅魔催眠了。",true)
					show("当你的意识恢复时，你正跨坐在魅魔的腰上，她的肉棒大半没入了你的肛门。")
					show("你挣扎着想要起身，但每次尝试都会刺激到肠壁内侧，令你的身体失去力量再次落下。")
					gain({ a_exp: 20, p_exp: 5, les_exp: 10, s_exp: 5 },"菊天王")
					pause()
					var cnt2=cnt-status.orgasm
					if(cnt2<=0){
						show("淫纹上的数字变成了0。")
						show("你感到子宫内有一种奇妙的感觉。")
						show("你意识到自己无法抗拒，也不必抗拒。")
						show("你躺倒在地，任凭快感传遍全身上下，体内体外的每一个位置。")
						show("粉色的光芒笼罩了你，你抵达了前所未有的强烈高潮。")
						show("当光芒散去时，你成为了魅魔。")
						show("结局：魔王的部下")
						gameover = true
						endofgame("魔王的部下")

						return
					}else{
						show("淫纹上的数字变成了"+cnt2+"。")
					}
				}
			}
			show("",true)
			show("“最后是穴天王，她可是四大天王里最为淫乱的一个……等等，穴天王人呢？”")
			show("另一个声音给了她答复：“前一段时间，穴天王说她好不容易才找到的顶级肉棒被冒险者毁了。现在，她踏上了寻找肉棒的旅途。”")
			show("你好像在哪里听过这句话。",true)
			show("过了一会儿，魔王的声音再次响起：“按照惯例，这个位置应当属于魔王军当中最为淫乱的成员。那么……现在满足这个要求的人选是谁来着？”")
			show("另一个声音低声说了什么。")
			show("“有意思。”魔王评论道。")
			show("",true)
			show("新任的穴天王出现了。")
			show("“魔王命令我用这个和你战斗。我没法拒绝……”穴天王，也就是魅魔化的会长拿出了一根粗大的双头阳具，用口水做着润滑。",true)
			show("“这里就交给我吧！”教官脱下裤子，露出自己早已勃起的肉棒。")
			show("“没用没用……只不过是人类短小的鸡鸡，我一点感觉都不会有。”")
			show("“不试试看怎么知道呢？”教官挺腰攻向会长带着魔性魅力的肉穴。",true)
			show("在插入的一瞬间，教官就快要射了出来。")
			show("但他没有放弃，保持着坚挺的状态，继续动着腰。")
			show("你知道教官不是会长的对手，只能希望会长看在多年的交情上少榨一点。")
			show("",true)
			show("在同伴做出了壮烈的牺牲后，你总算是来到了王座前。")
			show("“居然能做到这种程度，就让我称赞你一下吧。”魔王说道，“但是，你也就到此为止了。”")
			var hp = 4
			var flag = 0
			show("这一刻，你想起了你的同伴们。")
			show("想起了她们做出的牺牲……")
			show("想起了和同伴在一起经历的一切……")
			show("")
			if ("冒险者的反击" in buff || status.les_lv >= 4) {
				show("特别是性经历。")
				show("")
				show("你意识到了自己应该做什么。")
				if (!("冒险者的反击" in buff)) {
					gainbuff("冒险者的反击")
					show("在对抗魅魔时，获得等同于百合中毒等级的加值")
					succubus_pow -= status.les_lv
				}
				show("")
			}

			if ("炼金术师的秘密武器" in buff) {
				show("你打开了炼金术师送给你的药剂，一股浓郁的精液气息散发出来——如果你还有机会回去，一定要把炼金术师打一顿。")
				show("这时，你注意到魔王对这股怪味的反应比你还大。")
				show("你将药剂朝着魔王丢了出去。")
				flag = 1
			}

			show("你下定决心，发起进攻。")
			show("魔王剩余生命值：" + hp)
			var cnt2 = cnt - status.orgasm
			show("淫纹上的数字：" + cnt2)

			while (hp > 0) {
				var ans = check("max", succubus_pow + 10)
				if (ans >= 10) {
					if ("冒险者的反击" in buff) {
						var vv = rand(3)
						if (vv == 0)
							show("你精准地刺激着魔王的阴蒂，魔王受到重创。")
						else if (vv == 1)
							show("你的手指探入了魔王的菊花，魔王发出可爱的尖叫声。")
						else
							show("你吸着魔王贫瘠的胸部，魔王看起来快要哭了。")
					} else show("你的攻击命中了魔王的要害，魔王受到重创。")
					hp -= 2
				} else if (ans >= 0) {
					if ("冒险者的反击" in buff) {
						var vv = rand(3)
						if (vv == 0)
							show("你触碰到魔王的乳首，魔王抖了一下。")
						else if (vv == 1)
							show("你将手伸进魔王的内裤，魔王的身体僵硬起来。")
						else
							show("你在魔王的胸部上轻轻地画着圈，魔王的眼神变得湿润。")
					} else
						show("你的攻击命中了魔王。")
					hp -= 1
				} else {
					show("你的攻击被魔王躲开了。")
				}
				show("魔王剩余生命值：" + hp)
				pause()
				if (hp > 0) {
					var a2 = rand(3)
					if (flag > 0) {
						show("魔王处于失神状态。")
						flag = 0
						a2 = 2
					} else if (a2 == 0) {
						show("魔王看了你一眼，你的子宫内立刻就产生了反应。")
						gain({ orgasm: rand(10) + 1 }, "魔王", true)
					} else if (a2 == 1) {
						show("魔王用指尖轻触你的下腹。快感随着淫魔的魔力涌入你的身体。")
						gain({ orgasm: rand(5) + 11 }, "魔王", true)
					} else {
						show("你躲开了魔王的攻击。")
					}
					var cnt2 = cnt - status.orgasm
					if (cnt2 <= 0) {
						show("淫纹上的数字变成了0。")
						show("你感到子宫内有一种奇妙的感觉。")
						show("你意识到自己无法抗拒，也不必抗拒。")
						show("你躺倒在地，任凭快感传遍全身上下，体内体外的每一个位置。")
						show("粉色的光芒笼罩了你，你抵达了前所未有的强烈高潮。")
						show("当光芒散去时，你成为了魅魔。", true)
						if ("冒险者的反击" in buff) {
							show("")
							show("魔王警惕地看着魅魔化的你。")
							show("她命令你滚得越远越好，永远不要出现在她的面前。")
							show("永远。")
							show("")
							show("结局：放逐")
							gameover = true
							endofgame("放逐")
							return
						} else {
							show("你被命令舔舐魔王的阴户。")
							show("每当她的蜜汁流入你的嘴，你身上的淫魔之力就强化了一分。", true)
							show("会长出现了。")
							show("看着她不停滴落精液的下身，你知道冒险者们已经彻底失败了。")
							show("", true)
							if (hp <= 2 && "会长的同好" in buff) {
								show("会长表示要向魔王献上自己的战利品。")
								show("获得魔王的准许后，她突然坐在了魔王的脸上，向她献上自己体内的精液。")
								show("魔王被她的颜面骑乘压制，一时无法用言语下达命令。", true)
								show("你意识到这是个机会，猛烈地攻击魔王的阴蒂。")
								show("你和会长一上一下地责备着魔王的身体，直到她浑身抽搐，失去了意识。")
								op["会长"].val += 10000
								gainop("会长")
								show("", true)
								show("你们架空了魔王，颁布了停止袭击人类，由魅魔族负责处理全体魔物性欲的新政。")
								show("作为新晋的魅魔首领，你们以身作则地投入到了对异种族的慰问工作当中，过上了无比充实的生活。", true)
								show("结局：魅魔的下克上")
								gameover = true
								chapter = 6
								endofgame("魅魔的下克上", true)

								return
							}
							show("几个月后，你作为魔王军的先锋，向着人类的国度发起远征。")
							show("所到之处尽是一片淫靡景象。", true)
						}
						show("结局：魔王的先锋")
						gameover = true
						endofgame("魔王的先锋")

						return
					} else {
						show("淫纹上的数字：" + cnt2)
						show("")
					}
				}
			}
			if (cnt - status.orgasm==1)setachievement("一血传奇")

			if ("高潮禁止" in buff) {
				show("魔王无论如何都无法对你进行有效的攻击。")
				show("“这不公平！”在魔王的抗议中，你赢得了最后的胜利。")
				setachievement("作弊")
			} else if ("冒险者的反击" in buff) {
				show("终于，魔王倒下了。")
				show("“要坏掉了！真的要坏掉了！”魔王如是说。")
				show("淫纹上的数字停止了跳动。")
				setachievement("以牙还牙")
			} else {
				show("终于，魔王倒下了。")
				show("“像我这么强的还有四个……”魔王如是说。")
				show("淫纹上的数字停止了跳动。")
			}
			op["会长"].val+=10000

			pause()
			show("")
			var max_op=4.5
			chapter=6
			var a1=0
			if ("武道家的战友" in buff && getop("武道家") >= max_op) {
				max_op = getop("武道家")
				a1=1
			}
			if ("魔法师的恋人" in buff && (getop("魔法师") > max_op || (getop("魔法师") == max_op && rand(2)==0))) {
				max_op = getop("魔法师")
				a1 = 2
			}
			if ("刺客的密友" in buff && (getop("刺客") > max_op || (getop("刺客") == max_op && rand(2) == 0))) {
				max_op = getop("刺客")
				a1=3
			}
			if(status.v_virgin==""){
				show("你们尝试了各种手段，也没能让会长从魅魔变回人类。")
				show("会长和教官决定去向遥远国度的贤者寻求帮助，他们一同踏上了旅途。",true)
				show("由于讨伐魔王的功绩，公会会长的位置被传给了你。")
				show("你接下了冒险者公会的烂摊子，忙得焦头烂额。",true)
				if ("守护魔纹" in buff) {
					show("人们称你为奇迹的处女勇者，但你知道，真正造就了这个奇迹的人是……")
					show("想起那个面纱下狡猾的笑容，你就感到有些头疼。")
					show("但你也有些期待，下一次见面的她会给你带来怎样的惊喜。",true)
					show("结局：淫乱的处女勇者")
					endofgame("淫乱的处女勇者", true)
				} else {
					show("但冒险经历已经改变了你的身体。你时不时会……")
					show("等一下……你居然还是处女，这怎么可能？")
					show("你怎么可能从这么多随机事件当中幸免？", true)
					show("结局：奇迹的处女勇者")
					endofgame("奇迹的处女勇者", true)
				}
				gameover=true

				return
			}
			if(a1==1){
				show("你们尝试了各种手段，也没能让会长从魅魔变回人类。")
				show("会长和教官决定去向遥远国度的贤者寻求帮助，他们一同踏上了旅途。",true)
				show("由于讨伐魔王的功绩，公会会长的位置被传给了你。")
				show("你接下了冒险者公会的烂摊子，忙得焦头烂额。",true)
				show("为了分担你的压力，武道家接替了教官的位置。")
				show("你们在职场上的配合就像在战场上一样默契。",true)
				show("结局：武道家的战友")
				endofgame("武道家的战友", true)
				gameover=true

				return
			}
			if(a1==2){
				show("你们尝试了各种手段，也没能让会长从魅魔变回人类。")
				show("会长和教官决定去向遥远国度的贤者寻求帮助，他们一同踏上了旅途。",true)
				show("由于讨伐魔王的功绩，公会会长的位置被传给了你。")
				show("你接下了冒险者公会的烂摊子，忙得焦头烂额。",true)
				show("在家里等待着你的魔法师，是这忙碌生活里的唯一慰藉。")
				show("今天的她又会以什么样的姿态迎接归家的你呢？")
				show("结局：魔法师的恋人")
				gameover=true
				endofgame("魔法师的恋人", true)

				return
			}
			if(a1==3){
				show("你们尝试了各种手段，也没能让会长从魅魔变回人类。")
				show("会长和教官决定去向遥远国度的贤者寻求帮助，他们一同踏上了旅途。",true)
				show("由于讨伐魔王的功绩，公会会长的位置被传给了你。")
				show("你拒绝了冒险者公会的烂摊子，表示自己也要向遥远国度的贤者寻求帮助，治疗刺客的扶她诅咒。",true)
				show("在那之后的某一天，你带着面色潮红的刺客进了旅馆，准备为她处理性欲。")
				show("恰巧你碰到神清气爽的会长和委顿不堪的教官从旅馆了走了出来。")
				show("你们露出了心照不宣的笑容。",true)
				show("结局：刺客的密友")
				gameover = true
				endofgame("刺客的密友", true)

				return
			}
			show("你们尝试了各种手段，也没能让会长从魅魔变回人类。")
			show("会长和教官决定去向遥远国度的贤者寻求帮助，他们一同踏上了旅途。",true)
			show("由于讨伐魔王的功绩，公会会长的位置被传给了你。")
			show("你接下了冒险者公会的烂摊子，忙得焦头烂额。",true)
			show("但冒险经历已经改变了你的身体。你时不时会消失几天，外出释放一下性欲。")
			show("每当你抵达高潮时，下腹的淫纹都会产生微弱的魔力反应——这是个危险的信号，但你已经离不开这样的生活了。")
			show("或许有一天你的淫纹会再次亮起光芒，到时候会有新的英雄拯救世界吗？或者，就此堕落也不失为一个快乐的结局？")
			show("结局：会长的继承者")
			gameover = true
			endofgame("会长的继承者",true)

			return
		},
		town:false,
		once:true,
		chance:function(){
			if(past_event.includes("guild_succubus3"))
				return 10000
		},
		start:5,
		end:5
	}
}