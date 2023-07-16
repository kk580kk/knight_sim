function status_ev(){
	/*ev["living_clothes"]={
		ev:function(){
			show("你前往公会的图书室查阅解除触手服的办法。")
			show("突然，你身上的衣服不安分起来。")
			gain({ b_exp: 2, a_exp: 2, v_exp: 2, p_exp: 1 }, "触手服")
			gainflag("living_clothes")
			show("你差一点在图书室内叫出了声。")
			if(check("wis",16+month)>=0){
				pause()
				show("你意识到，在人前这么折腾并不符合触手服隐藏自身的习性。")
				show("或许触手服不希望你看到某本书？")
				show("你记得自己查看的最后一本书是某个古代教派的圣典。")
				gainflag("living_clothes_clue")
			}
		},
		town:true,
		once:true,
		chance:function(){
			if ("触手服" in buff && !("禁忌之书" in buff))return 1
		},
	}
	ev["living_clothes2"]={
		ev:function(){
			show("你在地下城中冒险时，突然感觉到触手服在刺激你的阴蒂。")
			gain({v_exp:1})
			pause()
			show("你向前又走了几步，快感当中又多了几分疼痛。")
			gain({ v_exp: 2, p_exp: 2 }, "触手服")
			pause()
			if(check("wis",16+month)>=0){
				show("或许，前方有什么触手服不希望你接触的东西？",true)
				show("你注意到一个满是灰尘的祭坛。")
				show("你每向着它前进一步，触手服的刺激就强烈一分。")
				gain({ v_exp: 3, p_exp: 5}, "触手服")
				pause()
				show("当你勉强走到祭坛旁边时，触手服的刺激也达到了巅峰。")
				gain({ v_exp: 4, a_exp: 4, p_exp: 9, b_exp: 3, s_exp: 3 }, "触手服")
				show("你失去了意识。",true)
				show("当你醒来时，身上的触手服已经消失了——至于你要怎么光着身子回去，那就是后话了。")
				gainbuff("触手服",-10000)
				gain({exp:50, e_exp:4})
				gain({ str: 2, dex: 2, wis: 2 })

			}else if(flag["living_clothes_clue"]!=null){
				show("你注意到前方的石壁上刻着一个似乎在哪本古书上看过的圣徽",true)
				show("圣辉下方是一个满是灰尘的祭坛。")
				show("你每向着它前进一步，触手服的刺激就强烈一分。",true)
				gain({ v_exp: 3, p_exp: 5}, "触手服")
				pause()
				show("当你勉强走到祭坛旁边时，触手服的刺激也达到了巅峰。")
				gain({ v_exp: 4, a_exp: 4, p_exp: 9, b_exp: 3, s_exp: 3 }, "触手服")
				show("你失去了意识。",true)
				show("当你醒来时，身上的触手服已经消失了——至于你要怎么光着身子回去，那就是后话了。")
				gainbuff("触手服",-10000)
				gain({exp:50,e_exp:4})
				gain({ str: 2, dex: 2, wis: 2 })
			}else{
				show("你停下脚步，等待触手服安分下来。")
			}
		},
		town:false,
		once:true,
		chance:function(){
			if("触手服"in buff && past_event.includes("living_clothes") && !("禁忌之书"in buff))return 1
		},
	}*/
}

function curse(val) {
	var tmp=rand(4)
	if (val != null) tmp = val
	if (tmp == 0 && getbuff("遗忘诅咒")<0) {
		gainbuff("遗忘诅咒")
		show("每当你达到高潮时，都会忘记一些战斗经验。")
		return
	} else if (tmp == 1 && getbuff("感度倍增") < 0) {
		gainbuff("感度倍增")
		show("你的全身开发度提高")
		bonus_status.a_lv += 5
		bonus_status.b_lv += 5
		bonus_status.v_lv += 5
		bonus_status.o_lv += 5
		gain({ a_lv: 5, b_lv: 5, v_lv: 5, o_lv: 5, lewd: 20 })
		return
	} else if (tmp == 2 && getbuff("魔力之卵") < 0) {
		gainbuff("魔力之卵")
		show("当你做出大幅度的动作时，魔力之卵会被激活")
		if (status.name == "术士") {
			show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
			gain({exp:50})
		}
		return
	} else if (tmp == 3 && getbuff("诅咒铃铛") < 0) {
		gainbuff("诅咒铃铛")
		show("当你受到侵犯时，铃铛的响声会引来更多的袭击者")
		if (status.name == "术士") {
			show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
			gain({ exp: 50 })
		}
		return
	}
	curse()
}

function countcurseditem() {
	var a = 0
	if ("触手服" in buff) a++
	if ("诅咒铃铛" in buff) a++
	if ("魔力之卵" in buff) a++
	if ("试炼的后庭拉珠" in buff) a++
	if ("罪人的颈环" in buff) a++
	return a
}