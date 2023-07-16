let slime_pow=20
let slime_e=10
let slime_m=25
function slime(){
	ev["slime"]={
		ev:function(){
			ans=check("max",slime_pow)
			if(ans>=8){
				show("你击穿了蓝色史莱姆的核心。")
				show("史莱姆炸裂开来，你避开了它的腐蚀体液。")
				gain({money:slime_m,exp:slime_e})
			}else if(ans>=0){
				show("你击穿了蓝色史莱姆的核心。")
				show("史莱姆炸裂开来，你被它的腐蚀体液溅了一身，只得衣不蔽体地撤退了。")
				gain({money:slime_m,exp:slime_e,e_exp:1})
			}else{
				show("你的攻击没有对蓝色史莱姆产生效果。")
				show("你被它的腐蚀体液喷了一身，只得衣不蔽体地撤退了。")
				gain({e_exp:2})
			}
			if (ans < 8 && (rand(2) == 0 || "evo3" in flag)){
				pause()
				show("在撤退途中，你听到了冒险者的脚步声。")
				if(check("wis",slime_pow)>=0){
					show("你觉得冒险者应该坦诚相见。")
					gain({e_exp:1})
				}else{
					show("你躲进了一个隐蔽的死角。",true)
					show("这里竟然埋伏着一只史莱姆。")
					show("你想起要呼救，却被史莱姆堵住了嘴。")
					gain({o_exp:3,s_exp:1},"史莱姆")
					if ("evo1" in flag) {
						show("体内的史莱姆粘液令你浑身发烫。")
						gain({ drug_exp: 1 })
					}
				}
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:2,
		end:2
	}
	ev["slime2"]={
		ev:function(){
			ans=check("max",slime_pow)
			if(ans>=8){
				show("你击穿了红色史莱姆的核心。")
				show("史莱姆炸裂开来，你避开了它的媚药体液。")
				gain({money:slime_m,exp:slime_e})
			}else if(ans>=0){
				show("你击穿了红色史莱姆的核心。")
				show("史莱姆炸裂开来，你被它的媚药体液溅了一脸，随后感觉到下腹部有一股热流。")
				gain({money:slime_m,exp:slime_e,drug_exp:2})
			}else{
				show("你的攻击没有对红色史莱姆产生效果。")
				show("你被它的媚药体液喷了一脸，随后感觉到下腹部有一股热流。")
				gain({drug_exp:3})
			}
			if (ans < 8 && (rand(2) == 0 || "evo3" in flag)){
				pause()
				show("在你因为媚药的效果迷迷糊糊时，一个史莱姆从天花板掉了下来。")
				if(check("dex",slime_pow)>=0){
					show("你及时闪开了。")
				}else{
					show("你大意了，没有闪。")
					show("你的身体被史莱姆裹住，动弹不得，然后被史莱姆侵入了身体。")
					gain({v_exp:3,s_exp:1},"史莱姆")
					if (rand(4) == 0 || (rand(2) == 0 && "evo2" in flag))gainbuff("怀孕：史莱姆")
					if ("evo1" in flag) {
						show("体内的史莱姆粘液令你浑身发烫。")
						gain({ drug_exp: 1 })
					}
				}
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:2,
		end:2
	}
	ev["slime3"]={
		ev:function(){
			ans=check("max",slime_pow)
			if(ans>=8){
				show("你击穿了黄色史莱姆的核心。")
				show("史莱姆炸裂开来，你避开了它的利尿体液。")
				gain({money:slime_m,exp:slime_e})
			} else if (ans >= 0) {
				show("你击穿了黄色史莱姆的核心。")
				show("史莱姆炸裂开来，你被它的利尿体液溅了一脸，片刻之后你就憋不住了，只能找一个没人的角落解决。")
				gain({ money: slime_m, exp: slime_e, u_exp: 1})
			} else{
				show("你的攻击没有对黄色史莱姆产生效果。")
				show("你被它的利尿体液喷了一脸，片刻之后你就憋不住了，只能找了找一个没人的角落解决。")
				gain({ u_exp: 2})
			}
			if (ans < 8 && (rand(2)==0||"evo3" in flag)){
				pause()
				show("正当你在排尿时，你感到屁股一凉。")
				if(check("str",slime_pow)>=0){
					show("你赶在史莱姆侵犯你的后穴之前将它扯了下来。")
					gain({a_exp:1})
				}else{
					show("你手足无措地被史莱姆侵犯了后穴。")
					gain({a_exp:3,s_exp:1},"史莱姆")
					if (rand(4) == 0 || (rand(2) == 0 && "evo2" in flag))gainbuff("怀孕：史莱姆")
					if ("evo1" in flag) {
						show("体内的史莱姆粘液令你浑身发烫。")
						gain({ drug_exp: 1 })
					}
				}
			}
		},
		town:false,
		chance:function(){
			return 1
		},
		start:2,
		end:2
	}
	ev["slime_pool"]={
		ev:function(){
			show("你失足掉进了史莱姆池中。")
			show("当你勉强爬出来时，你身上沾满了全部类型的史莱姆粘液。")
			gain({e_exp:2,drug_exp:4,s_exp:2,u_exp:2},"史莱姆",false)
		},
		town:false,
		once:true,
		chance:function(){
			if(status.dex<15)return 0.3
		},
		start:2,
		end:2
	}
	ev["slime_evo"] = {
		ev: function () {
			show("会长公布了一个坏消息：")
			show("最近史莱姆族群发生了进化。")
			show("它们变得更强，并且会附加媚药效果。")
			slime_pow += 2
			gainflag("evo1")
		},
		town: true,
		once: true,
		chance: function () {
			if (week - chapter_startweek >= 8) return 0.4
		},
		start: 2,
		end: 2
	}
	ev["slime_evo2"] = {
		ev: function () {
			show("会长公布了一个坏消息：")
			show("最近史莱姆族群发生了进化。")
			show("它们变得更强，并且有更高几率导致怀孕。")
			slime_pow += 2
			gainflag("evo2")
		},
		town: true,
		once: true,
		chance: function () {
			if (week - chapter_startweek >= 8) return 0.4
		},
		start: 2,
		end: 2
	}
	ev["slime_evo3"] = {
		ev: function () {
			show("会长公布了一个坏消息：")
			show("最近史莱姆族群发生了进化。")
			show("它们变得更强，并且学会了团队配合。")
			slime_pow += 2
			gainflag("evo3")

		},
		town: true,
		once: true,
		chance: function () {
			if (week - chapter_startweek >= 4) return 0.4
		},
		start: 2,
		end: 2
	}
	ev["slime_rare"] = {
		ev: function () {
			show("你遇到了一只刀枪不入的史莱姆。")
			if (check("wis", slime_pow + 6)) {
				show("你注意到它并不防火。")
				gain({ money: slime_m * 3, exp: slime_e * 3 })
			} else {
				show("你累得满身大汗，不得不停下来休息。")
				show("它却依然像一块石头一样纹丝不动。,true")
				show("你不禁怀疑自己是否将一块石头看成了史莱姆。")
			}
		},
		town: false,
		once: true,
		chance: function () {
			return 0.1
		},
		start: 2,
		end: 2
	}
	ev["slime_girl"]={
		ev:function(){
			show("你遇到了一只长得像武道家的史莱姆娘。")
			show("她用粘液构成的身体向你挥出软趴趴的一拳，然后被你轻易打倒。")
			show("你拒绝思考武道家遇到了什么。")
			gain({money:slime_m,exp:slime_e})
			gainflag("slimegirl",1)
			if (getflag("slimegirl") >= 4) setachievement("全收集")
		},
		town:false,
		once:true,
		chance:function(){
			if (op["武道家"]!=null) return 1
		},
		start:2,
		end:2
	}
	ev["slime_girl2"]={
		ev:function(){
			show("你遇到了一只长得像魔法师的史莱姆娘。")
			show("她冲着你不断地重复着：姐姐，抱抱。")
			if(op["魔法师"]>=2){
				show("你抱住了她，然后意识到她试图将你整个人吞下去。")
				show("这可是正当防卫——你这么劝说着自己，但下手的时候还是感觉有些愧疚。")
				gain({money:slime_m,exp:slime_e,les_exp:1})
			}else{
				show("你带着愧疚感将其消灭。")
				gain({money:slime_m,exp:slime_e})
			}
			gainflag("slimegirl", 1)
			if (getflag("slimegirl") >= 4) setachievement("全收集")
		},
		town:false,
		once:true,
		chance:function(){
			if (op["魔法师"]!=null) return 1
		},
		start:2,
		end:2
	}
	ev["slime_girl3"]={
		ev:function(){
			show("你遇到了一只长得像会长的史莱姆娘。")
			show("不管她继承了会长的什么特质，你都绝不会是对手。")
			show("你果断地撤退了。",true)
			show("你突然感觉到有些不对劲。")
			show("为什么是会长？")
			gainflag("slimegirl", 1)
			if (getflag("slimegirl") >= 4) setachievement("全收集")
		},
		town:false,
		once:true,
		chance:function(){
			if(past_event.includes("slime_girl")||past_event.includes("slime_girl2")) return 0.5
		},
		start:2,
		end:2
	}
	ev["slime_self"]={
		ev:function(){
			show("你遇到了一只长得像你自己的史莱姆娘。")
			show("她称你为妈妈。")
			show("你不忍心对自己的孩子下手，只能任凭她离开。")
		},
		town:false,
		once:true,
		chance:function(){
			if (getbuff("史莱姆的母亲")>=1) return getbuff("史莱姆的母亲")
		},
		start:2,
		end:2
	}
	ev["slime_self2"]={
		ev:function(){
			show("你被一群长得像你自己的史莱姆娘包围了。")
			show("你试图和她们战斗，但继承了你的特质的史莱姆娘总能反制你的动作。")
			show("你被制服，囚禁在粘液沼泽的深处。",true)
			show("在那之后，你不断地生下史莱姆的孩子——直到一天，一个外表和你一模一样的史莱姆娘诞生了。")
			show("她拿起了你的装备，宣称要以你的身份回到冒险者公会，并将更多人带进这个家庭。")
			show("你沉浸在被史莱姆填满身体的触感当中，并没有听清她说了什么。",true)
			show("结局：史莱姆的家族")
			gameover=true
			endofgame("史莱姆的家族")

		},
		town:false,
		once:true,
		chance:function(){
			if (past_event.includes("slime_self")&&getbuff("史莱姆的母亲")>=2) return getbuff("史莱姆的母亲")/2
		},
		start:2,
		end:2
	}
	ev["slime_girl4"]={
		ev:function(){
			show("你遇到了一只长相陌生的小个子史莱姆娘。")
			show("你感觉你在冒险者公会见过体型差不多的人，但又想不起来是谁。")
			show("她双手持着两支匕首和你斗了一阵。",true)
			show("突然，她的胯下冒出了第三支匕首。")
			show("你极限地避开了。")
			show("你很好奇哪位冒险者会有这样的招式。")
			gain({money:slime_m,exp:slime_e})
			gainflag("slimegirl", 1)
			if (getflag("slimegirl") >= 4) setachievement("全收集")
		},
		town:false,
		once:true,
		chance:function(){
			if(past_event.includes("slime_girl")||past_event.includes("slime_girl2")) return 0.5
		},
		start:2,
		end:2
	}
	ev["slime_birth"]={
		ev:function(){
			show("你产下了史莱姆。")
			show("新生的史莱姆迅速化成了人形，样子看起来就像是缩小版的你。")
			show("你不忍心对她下手，只能任凭她离开。")
			gain({birth_exp:1})
			gainbuff("史莱姆的母亲",1)
			gainbuff("怀孕：史莱姆",-10000)
			
			if(rand(3)==0){
				pause()
				show("由于出产的影响，你分泌出了乳汁。")
				gain({b_exp:5})
				if(!("母乳体质"in buff)) gainbuff("母乳体质")		
			}
		},
		town:true,
		chance:function(){
			if("怀孕：史莱姆"in buff) return 100000
		}
	}
	ev["slime_boss"]={
		ev:function(){
			show("你前去讨伐巨型史莱姆。")
			slime_boss_pow=slime_pow+5
			slime_boss_num=1
			slime_boss_hp =3

			if(op["会长"].val>=1 && rand(5)==0){
				show("正当你要进入首领所在的区域时，你看到会长神清气爽地走了出来。")
				show("会长拍了拍你的肩膀，表示自己已经削弱了首领的战力，接下了就交给你了。")
				show("你瞠目结舌地看着会长顶着浑圆的肚子离开。")
				gainop("会长")
				slime_boss_hp-=1
				show("你进去之后，发现巨型史莱姆的身子比传闻中的要小不少。")
			}
			pause()
			var round=0
			while (slime_boss_num >= 1) {
				var ans = check("max", slime_pow + 5)
				round++
				if (ans >= 0 && (rand(3) + 1 < slime_boss_num || slime_boss_hp <= 1)) {
					if (slime_boss_num == 1) show("你消灭了巨型史莱姆的最后一个分身")
					else show("你消灭了巨型史莱姆的分身")
					slime_boss_num -= 1
				} else if (ans >= 0) {
					show("你的攻击对巨型史莱姆造成了显著的伤害。")
					show("巨型史莱姆分裂了。")
					slime_boss_num += 1
					slime_boss_hp -= 1
				} else {
					show("你的攻击好像击穿了巨型史莱姆的身体，又好像什么都没打中。")
				}
				pause()
				if (slime_boss_num >= 1) {
					show("分裂成" + slime_boss_num + "份的巨型史莱姆向你袭来")
					var tt = randomattack(slime_boss_num, 2, null, true, 4)
					var u=rand(4)
					if (tt > u && rand(2)==0) {
						show("你立足不稳，摔倒在粘液池当中，随后被史莱姆粘液淹没。", true)
						show("当你被冒险者救出来时，你浑身上下的每一个洞都塞满了史莱姆。")
						show("", true)
						gain({ v_exp: 10, a_exp: 10, o_exp: 10, p_exp: 10, u_exp: 10, s_exp: 10 }, "巨型史莱姆")
						gainbuff("怀孕：史莱姆")
						return
					} else show("你忍受着史莱姆粘液的奇特触感。")
					if (round >= 5) {
						pause()
						show("随着战斗的进行，你的身上沾满了媚药粘液。")
						gain({ drug_exp: 1 })
					}
				}
				show("", true)
			}
			gain({ money: slime_m * 5, exp: slime_e * 5 })
			nextchapter()
		},
		town:false,
		chance:function(){
			if(week-chapter_startweek<=7)return 0
			if(week-chapter_startweek>=16)return 2
			return 1
		},
		start:2,
		end:2
	}
}

