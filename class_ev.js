let rune_val=0
function class_ev() {
    ev["warlock"] = {
        ev: function () {
            show("通过观察哥布林法师的施法，你掌握了禁忌之书上一项类似的法术。")
            show("在尝试着对自己施法之后，你感觉到自己变强了——也变蠢了。")
            gain({ str: 2, dex: 2, wis: -2 })
        },
        town: true,
        once: true,
        chance: function () {
            if ("禁忌之书" in buff && getbuff("兽化魔法") >= 1) return 3
        }
    }

    ev["warlock2"] = {
        ev: function () {
            show("你在禁忌之书当中找到了史莱姆粘液的十二种用途。")
            show("在经历过史莱姆出产之后，你并不缺少这一素材。")
            gain({ dex: 2 })
        },
        town: true,
        once: true,
        chance: function () {
            if ("禁忌之书" in buff && getbuff("史莱姆的母亲") >= 1) return 3
        }
    }
    ev["warlock3"] = {
        ev: function () {
            show("你决定尝试一下兽人萨满向你传授的魔法之道。")
            gain({ str: 2 })
            pause()
            show("锻炼身体驱散了你内心的阴暗——对于一个术士来说，这是相当难得的体验。")
            setachievement("弃暗投明")
        },
        town: true,
        once: true,
        chance: function () {
            if ("禁忌之书" in buff && getflag("shaman") >= 0) return 3
        }
    }
    ev["warlock_living_clothes"] = {
        ev: function () {
            show("你在禁忌之书上找到了支配魔物的咒语。")
            show("你命令触手服在战斗中支援自己。",true)
            show("而触手服的支援方式是操控你的身体做出你平时无法做出的动作。")
            show("到底是谁在支配谁？",true)
            gainbuff("支配触手")
            show("现在，触手服改为在战斗中提供加值")
        },
        town: true,
        once: true,
        chance: function () {
            if ("触手服" in buff && "禁忌之书" in buff) return 3
        },
    }

    ev["warlock_hypno"] = {
        ev: function () {
            show("你感到城镇里弥漫着一股黑暗的魔法力量。")
            show("或许拥抱这种力量会让你变得更强？")
            gain({ str: 2, dex: 2, wis: 2 })
            newhypno()
        },
        town: true,
        once: true,
        chance: function () {
            if ("禁忌之书" in buff && hypnocnt() >= 2 && hypnocnt() <= 4) return 1
        }
    }
    ev["demon_warlock"] = {
        ev: function () {
            show("戴着面纱的少女拦住了你。")
            show("她送给你一个护符，声称这个护符能保护你的处女之身。")
            show("作为一个术士，你当即就认出了上面的恶魔语：“我是一个菊花敏感的变态女孩子，请尽情使用我的后穴”")
            show("你拒绝了这份礼物。")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.v_virgin == "" && status.name == "术士") return 1
        }
    }

    ev["demon_warlock2"] = {
        ev: function () {
            show("最近，你在研究禁忌之书时遇到了一些困难。")
            show("你想起了自己认识的唯一一个懂恶魔语的人。", true)
            show("你找到神秘少女向她求教。")
            show("少女随口给出的解释令你受益匪浅。")
            gain({ exp: 50 })
            pause()
            show("少女声称自己今天心情不错就不收取代价了。换做以往，这些知识至少得用一人份的鲜血来交换。")
            show("你觉得神秘少女的说话方式非常符合术士的审美。")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (past_event.includes("demon_warlock")) return 1
        }
    }

    ev["demon_warlock3"] = {
        ev: function () {
            show("你遇到了神秘少女。")
            show("你又拿出了禁忌之书向她请教。",true)
            show("“我这等伟大的存在为什么要理会凡人的请求？”",true)
            show("“像你这样渺小的术士应该崇拜我才对。”",true)
            show("“你说谁是小矮子？等到我现出真身的时候，就该你为自己的愚蠢而颤抖了。”",true)
            show("你越来越欣赏神秘少女的说话方式了。")
            gain({ exp: 50 })
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (past_event.includes("demon_warlock2")) return 1
        },
        start: 2
    }

    ev["demon_warlock4"] = {
        ev: function () {
            show("神秘少女为了让你这样渺小的存在认识到自己的伟大，允许你向她学习一条古咒。")
            show("但是，在你看来，她只是单纯地在用恶魔语胡乱地喊话——你小时候也有过这种把冷门语言幻想成咒语的经历。")
            show("她坚持说是你的魔力不够，不是她教的不好。")
            show("当然，她自己也无法让古咒生效——她的解释是目前的身体比较节能。")
            gain({ wis: 3 })
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (past_event.includes("demon_warlock3")) return 1
        },
        start: 3
    }

    ev["warrior"] = {
        ev: function () {
            show("你突然想到：既然自己可以从疼痛当中获得力量，为什么不主动地去追求疼痛呢？")
            show("你觉得自己简直就是个天才。", true)
            show("你使用加粗的假阳具进行了激烈的自慰。")
            gain({ v_exp: status.m_lv + 4, m_exp: status.m_lv + 4, p_exp: status.m_lv + 4 }, "假阳具")
            gainbuff("战士的修行")
        },
        town: true,
        once: true,
        chance: function () {
            if ("淑女的收藏" in buff && "无惧疼痛" in buff && status.v_virgin != "") return 1
        },
    }

    ev["treasurehunter"] = {
        ev: function () {
            var r = rand(4)
            show("你使用鹰眼术窥探着城镇里的秘密。")
            if (r == 0 && getop("魔法师") >= 0) {
                show("你发现魔法师正在闻你的内衣。")
                setachievement("怪盗的真身")
            } else if (r == 1 && getop("刺客") >= 0) {
                show("你发现变装打扮的刺客进入了一间……破旧的男厕？")
            } else if (r == 2 && getop("武道家") >= 0) {
                show("你发现武道家正在和人豪迈地拼酒。", true)
                show("你还发现有人在往酒里加媚药。")
            } else if (r == 3 && getop("神秘少女") >= 0) {
                show("你发现神秘少女在做着用风魔法掀裙子的恶作剧。")
            } else {
                show("你发现像是在精液里面泡过澡的会长正在潜入城镇。", true)
                show("或许不只是像。")
            }
            show("有些秘密还是不要知道比较好。")
        },
        town: true,
        once: false,
        chance: function () {
            if ("鹰眼术" in buff) return chapter*0.1
        },
    }

    ev["nun"] = {
        ev: function () {
            var r = rand(3)

            show("你以善行祈求神明的原谅。")
            if (r == 0) {
                show("你在忏悔室里谅解信徒的罪孽。")
            } else if (r == 1) {
                show("你向孤儿院的孩子们讲解教义。")
            } else {
                show("你将自己作为冒险者的收入捐给了教会。")
                gain({ money: -25 })
            }
            show("")
            if (rand(50) > status.lewd) {
                show("女神回应了你的祈祷。你感到自己的加护回来了。")
                gainbuff("女神的加护")
                gain({ str: 3, dex: 3, wis: 3 })
            } else {
                show("女神没有回应你的祈祷。")
            }
        },
        town: true,
        once: false,
        chance: function () {
            if (!("女神的加护" in buff) && status.name == "神官" && status.lewd <= 50) return 1
        },
    }
    ev["nun2"] = {
        ev: function () {
            var r = rand(3)

            show("在意识到自己再也不可能获得加护后，你用淫行亵渎神明。")
            if (r == 0) {
                show("你在忏悔室里处理信徒的性欲。")
                gain({ o_exp: 6, s_exp: 2 }, "路人")
            } else if (r == 1) {
                show("你向孤儿院的孩子们讲解生理知识。")
                gain({ v_exp: 2, a_exp: 2, o_exp: 2, s_exp: 3 }, "少年")
                setachievement("教科书般的亵渎")
            } else {
                show("你用身体为教会募捐")
                randomattack(10, 1, "路人", false, 5)
            }
            show("")
            show("你发现自己的行为没有遭来天谴，决定下次继续。")
        },
        town: true,
        once: false,
        chance: function () {
            if (!("女神的加护" in buff) && status.name == "神官" && status.lewd > 50 && !("罪人的颈环" in buff)) return 1
        },
    }
    ev["nun3"] = {
        ev: function () {
            show("教会发现了你的淫行。")
            show("作为惩罚，你被迫戴上了罪人的颈环。")
            gainbuff("罪人的颈环", 4)
            show("在接下来的一个月内，你的事件判定会进行两次并取较坏的结果。")
            show("每当你犯下淫行时，颈环的持续时间会重置。")
            gainflag("罪人的颈环", week)
        },
        town: true,
        once: true,
        chance: function () {
            if (past_event.includes("nun2") && !("罪人的颈环" in buff)) return 0.5
        },
    }

    ev["nun4"] = {
        ev: function () {
            show("教会嘉奖了你的贞洁。")
            show("对于直接和魔物战斗的神官来说，这堪称是奇迹。")
            show("你获得了一瓶圣水。")
            gainbuff("圣水的恩惠", 4)
            show("在接下来的一个月内，你的事件判定会进行两次并取较好的结果。")
        },
        town: true,
        start: 3,
        chance: function () {
            if (status.name == "神官" && status.v_virgin == "" && !("圣水的恩惠" in buff)) return chapter * 0.1
        },
    }

    ev["knight"] = {
        ev: function () {
            show("娼馆的客人认出了你是骑士团的成员。")
            show("他多给了你一些钱。",true)
            show("后来，你才知道，多给的钱是加时的费用。")
            gain({ v_exp: 8, a_exp: 4, s_exp: 3, money: 100 + prostitute_bonus }, "客人")
        },
        town: true,
        once: true,
        chance: function () {
            if (past_event.includes("prostitute2") && "契约：娼妇" in buff && status.name == "骑士" && status.name == "被诅咒的骑士") return prostitute_chance()
        },
    }


    ev["paladin"] = {
        ev: function () {
            show("一个来自远方的冒险者询问你是否知道在大腿上写正字的含义。")
            show("你对圣骑士之道的信念迎来了前所未有的考验。")
            gain({lust:3})
        },
        town: true,
        once: true,
        chance: function () {
            if ("正义圣印" in buff) return 0.1
        },
    }

    ev["avenger_goblin"] = {
        ev: function () {
            show("由于近期的讨伐目标是哥布林，你的战意高涨。")
            gain({ str: 3, dex: 3, wis: 3 })
        },
        town: true,
        once: true,
        start:1,
        end:1,
        chance: function () {
            if("宿敌：哥布林"in buff)return 10
        },
    }
    ev["avenger_orc"] = {
        ev: function () {
            show("由于近期的讨伐目标是兽人，你的战意高涨。")
            gain({ str: 4, dex: 4, wis: 4 })
        },
        town: true,
        once: true,
        start: 3,
        end: 3,
        chance: function () {
            if ("宿敌：兽人" in buff) return 10
        },
    }
    ev["avenger_tentacle"] = {
        ev: function () {
            show("由于近期的讨伐目标是触手，你的战意高涨。")
            gain({ str: 5, dex: 5, wis: 5})
        },
        town: true,
        once: true,
        start: 4,
        end: 4,
        chance: function () {
            if ("宿敌：触手" in buff) return 10
        },
    }
    ev["outcast"] = {
        ev: function () {
            show("伴随着经验的积累，你榨取精液的技术愈发娴熟。", true)
            gainbuff("淫魔天赋")
            show("精液获得量增加")
            gainbuff("血脉觉醒", 1)
        },
        town: true,
        once: true,
        chance: function () {
            if ("能量吸取" in buff && status.s_lv >= 2) return 3
        },
    }
    ev["outcast2"] = {
        ev: function () {
            show("你发现自己能够读懂娼妇契约上面的魔法文字。")
            show("你在上面略微改了几笔。",true)
            gainbuff("魔族娼妇的秘法")
            show("无论何时，使用你的身体都必须付费")
            gainbuff("血脉觉醒", 1)
        },
        town: true,
        once: true,
        chance: function () {
            if ("契约：娼妇" in buff && "能量吸取" in buff) return 3
        },
    }
    ev["outcast3"] = {
        ev: function () {
            show("冒险者的前辈们常常会谈起媚药的可怕。")
            show("你却发现自己越喝越精神。", true)
            gainbuff("魔族意志")
            show("在发情状态下，事件的成功率提高")
            gainbuff("血脉觉醒", 1)
        },
        town: true,
        once: true,
        chance: function () {
            if (status.lust >= 10 && "能量吸取" in buff) return 3
        },
    }

    ev["outcast4"] = {
        ev: function () {
            show("魔物的凌辱不仅在改变你的身体，也在改变他们自身。", true)
            gainbuff("灵魂链接")
            show("当你获得来自魔物的异常状态时，增加对抗该类型魔物的成功率")
            gainbuff("血脉觉醒", 1)
        },
        town: true,
        once: true,
        chance: function () {
            if ((getbuff("兽化魔法") > 0 || getbuff("史莱姆的母亲") > 0 || getbuff("兽人的调教") > 0 || getbuff("触手的饲主") > 0) && "能量吸取" in buff) return 3
        },
    }

    ev["outcast5"] = {
        ev: function () {
            show("随着淫乱度的提高，你长出了翅膀和尾巴。", true)
            gainbuff("第三形态")
            var v = getbuff("血脉觉醒")
            gain({ str: v + 1, dex: v + 1, wis: v + 1 })
            gainbuff("血脉觉醒", 1)
            if (v + 1 >= 6) {
                setachievement("我已觉醒")
            }
        },
        town: true,
        once: true,
        chance: function () {
            if (status.lewd >= 60 && "第二形态" in buff) return 3
        },
    }

    ev["outcast6"] = {
        ev: function () {
            show("你产生了一个大胆的想法。", true)
            gainbuff("冒险者的反击")
            show("在对抗魅魔时，获得等同于百合中毒等级的加值")
            succubus_pow -= status.les_lv
            if (status.name == "放逐者") gainbuff("血脉觉醒", 1)
        },
        town: true,
        once: true,
        start: 5,
        chance: function () {
            if ("能量吸取" in buff && status.les_lv >= 1) return status.les_lv
            else if (status.les_lv >= 1) return 0.1 * status.les_lv
        }
    }
    ev["outcast7"] = {
        ev: function () {
            show("随着淫乱度的提高，你长出了小巧的角。", true)
            gainbuff("第二形态")
            gain({ str: 2, dex: 2, wis: 2 })
            gainbuff("血脉觉醒", 1)
        },
        town: true,
        once: true,
        chance: function () {
            if (status.lewd >= 30 && "能量吸取" in buff) return 3
        },
    }


    ev["outcast8"] = {
        ev: function () {
            show("随着血脉的不断觉醒，你的身体散发出诱人的香气。", true)
            gainbuff("魅魔的香水")
            if ("卖春价格" in buff) {
                show("你的卖春价格提高了。")
                gainbuff("卖春价格", 25)
                prostitute_bonus += 25
                if (prostitute_bonus >= 50) setachievement("名人堂")
            }
            show("你在城镇内更容易被袭击了。")
            gainbuff("血脉觉醒", 1)
        },
        town: true,
        once: true,
        chance: function () {
            if (getbuff("血脉觉醒") >= 5 && !("魅魔的香水" in buff)) return 3
        },
    }
    ev["outcast_demon1"] = {
        ev: function () {
            show("戴着面纱的少女拦住了你。")
            show("她送给你一个护符，声称这个护符能保护你的处女之身。")
            show("你正要收下时，她又收回了手。")
            show("“慢着，我才注意到你不需要这个。”")
            gainop("神秘少女")
            show("你不确定这算不算一种新型的歧视。")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.v_virgin == "" && "能量吸取" in buff) return 1
        }
    }
    ev["outcast_demon2"] = {
        ev: function () {
            show("你遇到了神秘少女。")
            show("当你从她旁边经过时，似乎听到她小声地说：")
            show("“真是后生可畏。”")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (getbuff("血脉觉醒") >= 7 && getop("神秘少女") >= 0) return 1
        }
    }

  /*  ev["avenger_aftermath"] = {
        ev: function () {
            show("你决定将为友人复仇作为新的人生目标。")
            gain({ str: 3, dex: 3, wis: 3 })
            gainop("刺客")
        },
        town: true,
        once: true,
        start: 5,
        end: 5,
        chance: function () {
            if (status.name == "复仇者" && "刺客的密友" in buff) return 1
        },
    }*/
/*    ev["alchemist1"] = {
        ev: function () {
            show("在经历了各种各样的事情后，你收集了足够的素材，是时候尝试炼成了。")
            pause()
            tmp=rand(6)
            show("你炼成了一瓶怎么看都很可疑的药剂，在犹豫了一番之后，鼓起勇气喝了下去。")
            if (tmp == 0) {
                show("你的属性提升了。")
                gain({str: 1})
            }
            if (tmp == 1) {
                show("你的属性提升了。")
                gain({ dex: 1 })
            }
            if (tmp == 2) {
                show("你的属性提升了。")
                gain({ wis: 1 })
            }
            if (tmp == 3) {
                show("你的全部属性提升了。")
                gain({ str: 1, dex: 1, wis: 1 })
            }
            if (tmp == 4) {
                show("你陷入了发情状态。")
                gain({ lust: 5 })
            }
            if (tmp == 5) {
                show("好像什么都没发生。")
            }
            buff["素材收集"]=0
        },
        town: true,
        chance: function () {
            if (getbuff("素材收集")>=10) return 5
        },
    }*/
}