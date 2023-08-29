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
            gain({ wis: 2 })
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

    ev["warrior_taunt"] = {
        ev: function () {
            show("你遇到了神秘少女。")
            show("神秘少女问你是否想要保护自己的同伴。")
            show("在你做出了肯定的答复后，她表示能教你一种让敌人优先攻击自己的技能。")
            show("“来，跟我一起念。”")
            show("“杂鱼——杂鱼！”")
            show("“像你这么弱的杂鱼魔物肯定还是处男吧！”")
            show("“就这么想侵犯我吗？但你连我的一根头发都摸不到。”")
            show("“没想到兽人里面还有像你这么短小的（笑）。”")
            show("“就你这点魔力怎么可能对高阶冒险者生效？我就算站着不动，你也没法命中我。”")
            show("“明明马上就要被消灭了，还这么有精神的杂鱼肉棒真是可怜。”")
            show("“这就结束了吗？无聊，比讨伐哥布林还容易。”")
            gainbuff("嘲讽")
            show("在你被侵犯时，有概率获得额外的被虐经验。")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (getop("神秘少女") >= 0 && "无惧疼痛" in buff) return 0.2
        },
    }

    ev["treasurehunter"] = {
        ev: function () {
            var r = rand(4)
            show("你使用鹰眼术窥探着城镇里的秘密。")
            if (r == 0 && getop("魔法师") >= 0) {
                show("你发现魔法师将脸埋在你的内衣里。")
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
            if ("鹰眼术" in buff) return chapter * 0.1
        },
    }

    ev["dancer"] = {
        ev: function () {
            show("你进行了定期的舞蹈表演。")
            if (month != 1 && lastdance != month - 1) {
                if (!("进阶职业：脱衣舞女" in buff)) {
                    show("你刚登上舞台，台下突然有人大声问起你上个月为何缺席表演。")
                    show("你声称自己忙于冒险者的工作，言语的暴力却愈演愈烈。")
                    show("“什么冒险者的工作，明明就是在被魔物凌辱。”")
                    show("“说是冒险者，实际上就是个会对魔物张开双腿的变态。”")
                    show("“这么说的话冒险者的工作不就是被魔物侵犯吗？”")
                    show("“既然这个身体能免费让魔物使用，为什么不能让我们使用？”")
                    show("观众冲上了舞台。")
                    randomattack(10 + getbuff("人气明星") * 5, 1, "观众", false, 5)
                    gainbuff("进阶职业：脱衣舞女")
                    show("在舞蹈表演时，可以通过色情的动作获得加成。")
                } else {
                    show("你刚登上舞台，台下突然有人大声问起你上个月为何缺席表演。")
                    show("你声称自己沉迷于被魔物侵犯，忘记了舞女的工作。")
                    show("你愿意献上身体，换取各位的原谅。")
                    show("观众冲上了舞台。")
                    randomattack(10 + getbuff("人气明星") * 5, 1, "观众", false, 5)
                }
                lastdance = month
                return
            }
            if ("卖春价格" in buff && !("舞女卖春" in flag)) {
                show("你登上舞台，宣布自己作为娼妇出道。")
                show("欢迎各位前往娼馆指名。")
                show("你知道这个决定会让很多人感到失望。因此，你愿意献上身体，换取各位的原谅。")
                show("观众冲上了舞台。")
                randomattack(10 + getbuff("人气明星") * 5, 1, "观众", false, 5)
                if (!("进阶职业：脱衣舞女" in buff)) {
                    gainbuff("进阶职业：脱衣舞女")
                    show("在舞蹈表演时，可以通过色情的动作获得加成。")
                }
                gainflag("舞女卖春")
                return
            }
            lastdance = month
            var v=check("dex", 15 + getbuff("人气明星") * 5)
            if ("进阶职业：脱衣舞女" in buff) {
                var r=rand(3)
                if (r == 0) {
                    show("你伴随着音乐不断脱下身上的衣服。")
                    gain({ e_exp: 3 })
                    v += status.e_lv
                } else if (r == 1) {
                    show("你在钢管上摩擦着自己的身体。")
                    gain({ v_exp: 3 })
                    v += status.v_lv
                } else {
                    show("你在表演时戴上了色情的饰品。")
                    gain({ p_exp: 3 })
                    v += status.p_lv
                }
            }
            if (v >= 0) {
                show("你完美地完成了一系列高难度动作，赢得了满堂喝彩。")
                gain({ money: 20 * getbuff("人气明星") })
                gainbuff("人气明星", 1)
                if (getbuff("人气明星") >= 10) setachievement("完美舞步")
            } else if (v >= -10) {
                show("观众对你的舞姿反应平平。")
                gain({ money: 10 })
            } else {
                if ("进阶职业：脱衣舞女" in buff) {
                    show("你失足摔倒在地，表演以失败告终。")
                    show("直到在场的每一个人满足为止，你都没能获得站起来的机会。")
                    randomattack(10 + getbuff("人气明星") * 5, 1, "观众", false, 5)
                } else {
                    show("你失足摔倒在地，表演以失败告终。")
                    if ("真空" in buff) {
                        show("观众对着你不穿内裤的大胆行为议论纷纷。")
                        gain({ e_exp: 2 })
                    } else {
                        show("观众对着你的内裤式样议论纷纷。")
                        gain({ e_exp: 1 })
                    }
                }
            }
        },
        town: true,
        once: false,
        chance: function () {
            if (status.name == "舞女" && week % 4 == 0) return 1000
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
            gainflag("渎神")
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
            gainbuff("罪人的颈环", 8)
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
            gainbuff("圣水的恩惠", 8)
            show("在接下来的一个月内，你的事件判定会进行两次并取较好的结果。")
        },
        town: true,
        start: 3,
        chance: function () {
            if (status.name == "神官" && status.v_virgin == "" && !("圣水的恩惠" in buff)) return chapter * 0.1
        },
    }

    ev["knight_prositute"] = {
        ev: function () {
            show("娼馆的客人认出了你是骑士团的成员。")
            show("他多给了你一些钱。", true)
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
            show("渎神的言论动摇了你的信仰。")
            gain({ lewd: 1 })
        },
        town: true,
        once: true,
        chance: function () {
            if ("正义圣印" in buff) return 0.2
        },
    }

    ev["paladin2"] = {
        ev: function () {
            show("得知你是和邪恶战斗的冒险者之后，崇拜英雄的少年围着你问个不停。")
            show("你尽量剔除了自己日常生活中少儿不宜的部分，向他们讲述自己的战斗经历。")
            show("他听得津津有味，并强烈地希望看到你能够逆转局势的正义圣印。")
            show("你无法拒绝少年憧憬的目光，只得掀起了裙子。")
            gain({ e_exp: 2 })
        },
        town: true,
        once: true,
        chance: function () {
            if ("正义圣印" in buff && status.lewd >= 20) return 0.5
        },
    }
    ev["paladin3"] = {
        ev: function () {
            show("你在夜晚的街道上露出。")
            gain({ e_exp: 2 })
            show("你遇到了崇拜英雄的少年。")
            show("你正要转身逃跑，少年却对着你大喊圣骑士姐姐。")
            show("你试图蒙混过关，他却说他认出了你身上的正字。")
            show("为了不引起更多人的注意，你将少年拉进了小巷子里。")
            show("")
            show("你声称自己在执行一项秘密任务，所以不能暴露身份。”")
            show("“秘密任务为什么要不穿衣服呢？”少年问道。")
            show("“这是为了……寻找正义的伙伴，为圣印补充能量。”")
            show("“圣骑士姐姐，我可以成为正义的伙伴吗？”")
            show("你无法拒绝少年憧憬的目光，只得脱下他的裤子。")
            gain({ o_exp: 2, s_exp: 1, e_exp: 2 }, "少年")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.lewd >= 40 && status.e_lv >= 3 && past_event.includes("paladin2")) return 0.5
        },
    }
    ev["paladin4"] = {
        ev: function () {
            show("你遇到了崇拜英雄的少年。")
            show("少年说他的朋友们也想成为正义的伙伴。")
            show("")
            show("“我来组成头部！”")
            gain({ o_exp: 2, s_exp: 1 }, "少年")
            show("“我来组成裆部！”")
            gain({ v_exp: 2, s_exp: 1 }, "少年")
            show("“教会的姐姐和我说过，这边的洞也可以插。”")
            gain({ a_exp: 2, s_exp: 1 }, "少年")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.lewd >= 60 && getbuff("正义圣印") <= 1 && past_event.includes("paladin3")) return 0.5
        },
    }
    ev["avenger_goblin"] = {
        ev: function () {
            show("你梦见了被哥布林毁灭的故乡。")
            show("一觉醒来后，你坚定了复仇的决心。")
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
            show("你梦见了被兽人毁灭的故乡。")
            show("一觉醒来后，你坚定了复仇的决心。")
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
            show("你梦见了被触手毁灭的故乡。")
            show("一觉醒来后，你坚定了复仇的决心。")
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
    ev["necromancer1"] = {
        ev: function () {
            show("你做了一个哥布林的梦。")
            show("梦中的你正在巡视一个关着各族女人的兽栏。")
            show("你意识到哥布林在简单的语言里对不同种族的雌兽也有不同的称呼方式。")
            show("精灵是尖耳朵的雌兽。")
            show("魔族是长角的雌兽。")
            show("人类是特别淫乱的雌兽。")
            gainbuff("兽化魔法",1)
            gain({lust:getbuff("灵魂收割")})
        },
        town: true,
        once: true,
        start: 1,
        end: 1,
        chance: function () {
            if ("灵魂收割" in buff && week - chapter_startweek >= 5) return getbuff("灵魂收割")*0.03
        },
    }
    ev["necromancer2"] = {
        ev: function () {
            show("你做了一个史莱姆的梦。")
            show("史莱姆看见了一个光着的屁股。")
            show("史莱姆擅长钻洞。")
            show("洞穴在蠕动，史莱姆也在蠕动。")
            show("洞穴在分泌液体，史莱姆也在分泌液体。")
            show("史莱姆擅长模仿。")
            gainbuff("强制排卵")
            show("下一次被史莱姆侵犯时必定受孕")
            gain({ lust: getbuff("灵魂收割") })
        },
        town: true,
        once: true,
        start: 2,
        end: 2,
        chance: function () {
            if ("灵魂收割" in buff && week - chapter_startweek >= 5 && !("强制排卵" in buff)) return getbuff("灵魂收割") * 0.03
        },
    }
    ev["necromancer3"] = {
        ev: function () {
            show("你做了一个兽人的梦。")
            show("梦中的你正在和全副武装的女骑士战斗。")
            show("在你亮出胯下的巨物后，女骑士很快就失去了战意。")
            show("众所周知，女骑士是赢不了兽人的。")
            gainbuff("兽人的调教",1)
            gain({ lust: getbuff("灵魂收割") })
        },
        town: true,
        once: true,
        start: 3,
        end: 3,
        chance: function () {
            if ("灵魂收割" in buff && week - chapter_startweek >= 5) return getbuff("灵魂收割") * 0.03
        },
    }
    ev["necromancer4"] = {
        ev: function () {
            show("你做了一个触手的梦。")
            show("触手想要让女人怀孕……")
            show("想要让女人怀孕……")
            show("想要怀孕……")
            show("怀孕……")
            gainbuff("强制排卵")
            show("下一次被触手侵犯时必定受孕")
            gain({ lust: getbuff("灵魂收割") })
        },
        town: true,
        once: true,
        start: 4,
        end: 4,
        chance: function () {
            if ("灵魂收割" in buff && week - chapter_startweek >= 5 && !("强制排卵" in buff)) return getbuff("灵魂收割") * 0.03
        },
    }
    ev["necromancer5"] = {
        ev: function () {
            show("你做了一个魅魔的梦。")
            show("梦中的你正在肆意地跨坐在男人腰上扭动身体。")
            show("每当男人射精时，你就会感到无上的喜悦，并用更进一步的榨取来回馈这份喜悦。")
            show("男人陷入昏迷后，你不经意间扭头看向一面镜子。")
            show("你突然发现梦中的魅魔有着你自己的脸。")
            show("这到底是魅魔的梦还是你的梦？")
            gainbuff("免费做爱券", 2)
            show("签署了你的名字的免费做爱券开始流通。")
            gain({lust: getbuff("灵魂收割") })
        },
        town: true,
        once: true,
        start: 5,
        end: 5,
        chance: function () {
            if ("灵魂收割" in buff && week - chapter_startweek >= 5) return getbuff("灵魂收割") * 0.03
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
            show("在对抗魅魔时，减少等同于百合中毒等级的挑战难度")
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
            if (getbuff("血脉觉醒") >= 6 && !("魅魔的香水" in buff)) return 1
        },
    }
    ev["outcast_demon1"] = {
        ev: function () {
            show("戴着面纱的少女拦住了你。")
            show("她送给你一个护符，声称这个护符能保护你的处女之身。")
            show("你正要收下时，她又收回了手。")
            show("“我刚刚注意到你不需要这个。”")
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

    ev["outcast_demon3"] = {
        ev: function () {
            show("你遇到了神秘少女。")
            show("她突然开始批评如今的魅魔只知道通过魔法和淫纹来让人堕落，全然忘记了肉体才是欲望的根本。")
            show("“真是世风日下，人心不古。”")
            show("你不确定自己应该怎么接话。")
            show("“如果你碰到魔王的话，记得替我好好教训一下她。”")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        start: 5,
        chance: function () {
            if (getbuff("血脉觉醒") >= 1 && getop("神秘少女") >= 0) return 0.3
        }
    }

    ev["barbarian_exhibition"] = {
        ev: function () {
            show("你穿着接近全裸的家乡服饰在街道上行走。")
            gain({ e_exp: 5 })
            show("你不明白为什么人们要用奇怪的眼光注视自己。")
            var r=rand(4)
            if (r == 0 && getop("武道家") >= 0) {
                show("武道家坚信你一定是中了某种催眠咒语，强硬地将你带去解咒。")
                show("你感觉她对于被催眠一定很有经验。")
                return
            }
            if (r == 1 && getop("魔法师") >= 0) {
                show("魔法师将你带进了一家服装店，挑出几套她觉得适合你的衣服供你选择。")
                show("你觉得看起来都差不多就随便选了一件。")
                show("几天后你因为穿在身上太别扭，换回了家乡的服饰。")
                return
            }
            if (r == 2 && getop("刺客") >= 0) {
                show("刺客藏在附近的房顶上，观察着你的屁股。")
                show("你有一种被捕食者盯上的感觉。")
                return
            }
            if (r == 3 && getop("会长") >= 0) {
                show("会长训斥了一直盯着你看的人，要求人们尊重你家乡的风俗。")
                show("你总算有一个能够理解自己的人了。")
                if (getop("会长") >= 3) {
                    show("会长脱掉了身上大部分的衣服，和你并排行走，并声称对你的歧视就是对她的歧视。")
                    show("你很感谢会长，但是你不明白为什么她身上会有一股发情的气味。")
                    gainop("会长")
                    if(!("会长的同好" in buff)) gainbuff("会长的同好")
                }
                return
            }
        },
        town: true,
        chance: function () {
            if (status.name == "野蛮人") return 0.3 + chapter * 0.1
        }
    }

    ev["monk1"] = {
        ev: function () {
            show("你试图通过冥想来恢复平静。")
            show("你将少量真气导入了正轨。")
            buff["失衡"] -= 3
            if (buff["失衡"] <= 0) removebuff("失衡")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && "失衡" in buff) return 2
        }
    }

    ev["monk2"] = {
        ev: function () {
            show("你试图通过冥想来恢复平静。")
            show("但是，闭上眼睛后，你只能想象到种种淫靡的画面。")
            masturbation()
            show("尽管自慰的快感让躁动的真气有所缓解，但你不认为这是一个解决问题的好办法。")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && "失衡" in buff && past_event.includes("monk1") && status.lewd>=20) return 2
        }
    }
    ev["monk3"] = {
        ev: function () {
            show("神秘少女送给你一支熏香，并声称这种香气可以有效处理你的真气失衡。")
            show("你并不太相信她的话，但还是尝试了一下。")
            show("")
            show("闭上眼睛后，你想象到的画面变得空前的淫靡。")
            masturbation()
            gainbuff("魅魔的香水")
            if ("卖春价格" in buff) {
                show("你的卖春价格提高了。")
                gainbuff("卖春价格", 25)
                prostitute_bonus += 25
                if (prostitute_bonus >= 50) setachievement("名人堂")
            }
            show("你在城镇内更容易被袭击了——从某些意义上来说，神秘少女确实给你提供了一种处理失衡真气的手段。")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && "失衡" in buff && past_event.includes("monk2") && !("魅魔的香水" in buff) && getop("神秘少女") >= 0) return 2
        }
    }
/*    ev["monk4"] = {
        ev: function () {
            show("你决定以更加亲近自然的方式进行冥想。")
            show("你找到一处无人的山洞，褪去身上的衣服，感受自然的气息。")
            show("冷风吹过你燥热的身体，让你渐渐地进入了入定状态。")
            gain({e_exp:5})
            show("你感到真气的运行流畅了不少——但你无法确定这是因为冥想，还是因为露出快感。")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && "失衡" in buff && past_event.includes("monk2") && status.e_lv >= 3) return 2
        }
    }
    ev["monk5"] = {
        ev: function () {
            show("你决定以更加亲近自然的方式进行冥想。")
            show("你找到一处无人的山洞，褪去身上的衣服，感受自然的气息。")
            show("冷风吹过你燥热的身体，让你渐渐地进入了入定状态。")
            show("你察觉到一个少年进入了山洞。他好奇地将手伸向了你动弹不得的身体。")
            show("由于冥想遭到打断，你体内的真气彻底失控。")
            show("而眼前的少年正是绝佳的发泄目标。")
            gain({v_exp:6,s_exp:3,o_exp:3,b_exp:2,e_exp:3},"少年")
            show("你向他声称自己是一个修行中的女妖，榨取阳气是对他擅自闯入洞府的惩罚。")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && "失衡" in buff && past_event.includes("monk4") && status.e_lv >= 3) return 2
        }
    }
    ev["monk6"] = {
        ev: function () {
            show("你决定以更加亲近自然的方式进行冥想。")
            show("你找到一处无人的山洞，褪去身上的衣服，感受自然的气息。")
            show("冷风吹过你燥热的身体，让你渐渐地进入了入定状态。")
            show("你察觉到几个少年进入了山洞。")
            show("你听到他们在布置战术，然后同步发起了攻击。")
            gain({ v_exp: 6, a_exp:6, o_exp:6, s_exp: 8, e_exp: 5, b_exp: 5}, "少年")
            show("你向他们承认败北，承诺让出山洞的地盘。")
            show("但少年们坚持认为败者应该成为胜者的性奴隶——如果他们输了也是一样。")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && "失衡" in buff && past_event.includes("monk5") && status.e_lv >= 3) return 2
        }
    }
    ev["monk7"] = {
        ev: function () {
            show("你前往山洞冥想。")
            show("少年们在此等候多时。")
            gain({ v_exp: 4, a_exp: 4, o_exp: 4, b_exp:2, s_exp: 4}, "少年")
        },
        town: true,
        chance: function () {
            if (status.name == "武僧" && "失衡" in buff && past_event.includes("monk6") && status.e_lv >= 3) return 2
        }
    }*/
    ev["monk_learn"] = {
        ev: function () {
            show("随着等级的提升，你加深了对真气的理解。")
            if (rand(2) == 0) {
                gainbuff("阴")
                show("在空明状态下，你的全属性获得3点临时加成")
            } else {
                gainbuff("阳")
                show("在失衡状态下，你的全属性获得3点临时加成")
            }
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && status.lv >= 5) return status.lv * 0.1
        }
    }
    ev["monk_learn2"] = {
        ev: function () {
            show("在多次经历了平衡的打破和重建后，你加深了对两仪的理解。")
            var v=getflag("失衡")
            gainbuff("两仪")
            gain({ str: getflag("失衡"), dex: getflag("失衡"), wis: getflag("失衡") })
            show("每当你进入失衡状态时，获得永久加成")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.name == "武僧" && getflag("失衡") >= 2) return getflag("失衡") * 0.2
        }
    }
}

function monk_empty() {
    if ("空灵体" in buff && !("失衡" in buff) && rand(2) != 0) {
        return true
    }
    return false
}
