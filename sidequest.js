function sidequest() {
    ev["alchemist"] = {
        ev: function () {
            show("你前往公会办理手续时，一个学者打扮的女人拦住了你。")
            gainop("炼金术师")
            show("她说你身上有一股特别的气息，是为她采集魔物素材的绝佳人选。", true)
            show("你同意接下她的委托之后，她才告诉你，她需要的素材是精液。")
            show("这时你想起她刚才说的“特别的气息”，你很想打人。")
            gainbuff("素材收集", 0)
            alchemist_week = week
        },
        town: true,
        once: true,
        chance: function () {
            return 0.25 * status.s_lv
        },
    }
    ev["alchemist2"] = {
        ev: function () {
            show("你将收集的素材交付给了炼金术师。", true)
            if (getbuff("素材收集") >= 20) {
                show("她对你收集到的精液量大为惊讶。")
                show("你完全不想在这方面被人表扬。")
                gain({ money: 75 })
                gainop("炼金术师")
                if (getop("炼金术师") >= 4) setachievement("任务达人")
            } else if (week - alchemist_week <= 6) {
                show("她称赞了你完成委托的效率。")
                show("你强烈地想要打人。")
                gain({ money: 75 })
                gainop("炼金术师")
                if (getop("炼金术师") >= 4) setachievement("任务达人")
            } else if (week - alchemist_week <= 12) {
                show("她收下了素材。")
                gain({ money: 50 })
                gainop("炼金术师")
                if (getop("炼金术师") >= 4) setachievement("任务达人")
            } else {
                show("她指出由于你拖延得太久，素材都坏了。")
                show("好在她有一位朋友就好这口，你收集的这些精液也不会完全浪费。")
                show("你试图避免思考她的朋友是谁。")
                gain({ money: 25 })
            }
            buff["素材收集"] = 0
            alchemist_week = week
        },
        town: true,
        once: false,
        chance: function () {
            if (getbuff("素材收集") >= 10) return getbuff("素材收集") / 3
        },
    }

    ev["demon"] = {
        ev: function () {
            show("戴着面纱的少女拦住了你。")
            show("她送给你一个护符，声称这个护符能保护你的处女之身。")
            show("你将信将疑地收下了这份礼物。")
            gainbuff("贞洁护符")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (status.v_virgin == "" && status.name != "术士" && status.name!="放逐者") return 1
        }
    }
    ev["demon_dreamland"] = {
        ev: function () {
            show("戴着面纱的少女拦住了你。")
            show("她塞给你一枚粉红色的硬币。")
            show("你随手将硬币塞进口袋里，返回旅馆后却发现硬币不见了。")
            gainop("神秘少女")
            gainbuff("梦境乐园的门票")
        },
        town: true,
        once: true,
        chance: function () {
            if (getop("神秘少女") >= 0 && status.v_virgin == "" && !("梦境乐园的门票" in buff)) return 0.05
        }
    }
    ev["demon_ex"] = {
        ev: function () {
            show("你遇到了神秘少女。")
            show("魔力之卵突然震动起来")
            gain({ v_exp: 2 })
            show("你自认为没有做任何会刺激到魔力之卵的事情，为什么……")
            pause()
            show("魔力之卵突然震动起来")
            gain({ v_exp: 2 })
            pause()
            show("魔力之卵突然震动起来")
            gain({ v_exp: 2 })
            pause()
            show("魔力之卵突然震动起来")
            gain({ v_exp: 2 })
            pause()
            show("面纱下的少女在偷笑。")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (getop("神秘少女") >= 0 && "魔力之卵" in buff) return 0.5
        }
    }
    ev["demon_ex2"] = {
        ev: function () {
            show("你遇到了神秘少女。")
            show("她称赞了你的穿衣品味，并询问你是在哪里入手的。")
            show("你一时不知道该如何解释。")
            show("触手服倒是因为拟态得到肯定而有些高兴。")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (getop("神秘少女") >= 0 && "触手服" in buff) return 0.5
        }
    }

    ev["demon2"] = {
        ev: function () {
            show("你又一次遇到了神秘少女。")
            show("你想起被魔物侵犯后穴时的痛苦，试图和她争论。")
            show("她反问你护符是否救下了你的贞操。", true)
            show("你无言以对。")
            show("在你思考该怎么反驳时，她又塞给你一张护符。")
            gainbuff("贞洁护符")
            gainop("神秘少女")
        },
        town: true,
        chance: function () {
            if (past_event.includes("demon") && !past_event.includes("demon3") && status.v_virgin == "" && !("贞洁护符" in buff) && status.name != "术士") return 1
        }
    }

    ev["demon3"] = {
        ev: function () {
            show("你又一次遇到了神秘少女。")
            show("你向她索要护符。")
            show("她表示你消耗护符的速度太快了。并提议将魔纹画在你的身上，这样可以借助你身体的魔力，提供更久的保护。", true)
            show("少女让你闭上眼睛，随后你感受到纤细的手指划过你的小腹。")
            show("奇妙的触感持续了一阵后，仪式结束了。你低头看去，魔纹被刻印在了你的身上。")
            gain({ les_exp: 2 }, "神秘少女")
            pause()
            gainbuff("守护魔纹")
            show("你隐约感觉面纱下的少女在偷笑。")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (past_event.includes("demon2") && getop("神秘少女") >= 3 && status.v_virgin == "" && !("贞洁护符" in buff)) return 1
        }
    }

    ev["demon4"] = {
        ev: function () {
            show("你又一次遇到了神秘少女。")
            show("少女检查了你的魔纹之后，询问你是否在为越来越强的后庭快感而困扰。")
            show("你小声承认了。")
            pause()
            show("少女提出为你补充一个抵抗快感的魔纹。")
            gainbuff("高潮禁止")
            pause()
            show("“要不要现在就让我给你测试一下效果？”")
            gain({ les_exp: 3, b_exp: 3 }, "神秘少女")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (past_event.includes("demon3") && status.a_lv >= 4 && "守护魔纹" in buff) return status.a_lv - 3
        }
    }

    ev["demon5"] = {
        ev: function () {
            show("你又一次遇到了神秘少女。")
            show("你请求少女为你解除高潮禁止。", true)
            show("“如你所愿。”")
            show("少女的指尖轻轻划过魔纹。")
            show("储存的快感在一瞬间激发，你在空前的快感下陷入了昏迷。")
            var v = getbuff("高潮禁止")
            gainbuff("高潮禁止", -10000)
            gain({orgasm: v}, "神秘少女", true)
            pause()
            show("")
            show("当你醒来时，少女正以一根小巧的扶她肉棒对准你的下体。")
            show("你一时无法理解正在发生什么。")
            gainbuff("守护魔纹", -10000)
            pause()
            show("")
            show("“在我压倒性的实力面前颤抖吧！”")
            show("少女说着发起了进攻。")
            show("唯一值得庆幸的是，以她的尺寸来看，第一次不会太痛。")
            gain({ v_exp: 2, les_exp: 1 },"神秘少女")
            pause()
            show("")
            show("“不愧是被我相中的淫乱处女，看来我得拿出点真本事了。”")
            gain({ v_exp: 5, les_exp: 2, p_exp: 3}, "神秘少女")
            pause()
            show("")
            show("“竟然能把我逼到这等地步，是时候二段变身了。”")
            gain({ v_exp: 10, les_exp: 5, p_exp: 5, s_exp: 7 }, "神秘少女")
            pause()
            show("")
            show("“愚蠢的人类，不要以为这样就结束了！”")
            gain({ v_exp: 10, les_exp: 5, p_exp: 5, s_exp: 7 }, "神秘少女")
            setachievement("愚蠢的人类")
            pause()
            show("")
            show("“只是这种程度就失去意识了吗？我还没到三阶段呢……”")
            gainop("神秘少女")
        },
        town: true,
        once: true,
        chance: function () {
            if (getbuff("高潮禁止") >= 100) return getbuff("高潮禁止") / 30
        }
    }

    ev["fallen_princess"] = {
        ev: function () {
            show("你遇到了失踪的公主骑士。")
            show("她提出想和你这样的强者进行一场堂堂正正的骑士决斗。", true)
            show("虽然说公主骑士看起来不太清醒，能够得到这位传奇人物的认可还是让你颇为得意。")
            show("")
            show("战斗一开始你就被她压倒在地。")
            show("当她开始撕开你的衣服时，你意识到公主骑士对决斗的定义可能和你不太一样。")
            if ("缰绳" in flag) {
                show("你拿出了公主骑士的缰绳。")
                show("公主骑士立刻就向你认输，并请你对败者进行责罚。")
                gain({ money: 200, exp: 200, les_exp: 8 }, "公主骑士", true)
                gainbuff("传奇克星")
                setachievement("传奇克星")
            }else if ("淑女的收藏" in buff && status.m_lv + rand(6) >= 6) {
                show("你掏出了随身携带的假阳具，一击贯穿了公主骑士的阴户。")
                show("公主骑士立刻就失去了战意。")
                gain({ money: 200, exp: 200, les_exp: 5, v_exp: 5 }, "公主骑士", true)
                gainbuff("传奇克星")
                setachievement("传奇克星")
            } else if (status.les_lv + rand(8) >= 8) {
                show("你不甘示弱地掀开了公主骑士破破烂烂的战裙。")
                show("你们斗得难解难分。")
                show("最终两人双双脱力，打成了平手。")
                gain({ money: 200, exp: 200, les_exp: 10, v_exp: 10, o_exp: 10 },"公主骑士",true)
                gainbuff("传奇克星")
                setachievement("传奇克星")
            } else {
                show("你试图推开她，但丝毫无法撼动她的身体。")
                show("只能任凭她玩弄身体。")
                gain({ les_exp: 10, v_exp: 10, a_exp: 5 }, "公主骑士", true)
            }
            show("", true)
            show("事后，公主骑士用标准的骑士礼仪感谢了你愿意与她切磋。")
            show("你完全跟不上她的思路。")
        },
        town: false,
        once: true,
        chance: function () {
            if (status.lewd >= 70 && ("魅魔的香水" in buff)) return 1.5
            if (status.lewd >= 70) return 0.5
        }
    }

    ev["tablet"] = {
        ev: function () {
            if (status.name == "被诅咒的骑士") {
                show("你发现了一块眼熟的石碑——当初就是这东西诅咒了你")
                show("当你掏出武器准备砸掉石碑时，上面浮现出文字：")
            } else {
                show("你发现了一块古老的石碑")
                show("当你靠近石碑时，上面浮现出文字：")
            }
            show("")
            var cnt = 0
            show("至今为止，你做出了下列淫行：")
            if (status.v_virgin == "") {
            } else {
                show("你初体验的对象是" + status.v_virgin)
            }
            show("你一共高潮了" + status.orgasm + "次")
            show("你的淫乱度达到了" + status.lewd)
            if (status.birth_exp >= 1) {
                show("你有着" + status.birth_exp + "次出产经验")
                if (status.birth_exp >= 2) cnt++
            }
            if (status.lewd >= 50) {
                cnt++
            }
            if (status.orgasm >= 200) {
                cnt++
            }
            if (status.lewd >= 100) {
                cnt++
            }
            if (status.orgasm >= 400) {
                cnt++
            }
            var cnt1=cnt
            if ("契约：娼妇" in buff) {
                show("你在娼馆卖春" + getflag("娼妇") + "次")
                if (getflag("娼妇") >= 3) cnt++
            }
            if ("漏尿体质" in buff || "母乳体质" in buff) {
                var s = ""
                if ("母乳体质" in buff) s += "分泌母乳 "
                if ("漏尿体质" in buff) s += "漏尿 "
                show("你在高潮时会" + s)
                cnt++
            }
            if ("触手服" in buff || "魔力之卵" in buff || "诅咒铃铛" in buff || "试炼的后庭拉珠" in buff) {
                var s = ""
                if ("触手服" in buff) s += "触手服 "
                if ("魔力之卵" in buff) s += "魔力之卵 "
                if ("诅咒铃铛" in buff) s += "诅咒铃铛 "
                if ("试炼的后庭拉珠" in buff) s += "后庭拉珠 "
                show("你随身装备着" + s)
                cnt++
            }
            if ("月夜雌兽" in buff) {
                show("你在夜晚的街道上化身野兽")
                cnt++
            }
            if ("败北愿望" in buff) {
                show("你为了满足欲望会故意输给魔物")
                cnt++
            }
            if ("诱触手体质" in buff) {
                show("你的身体散发着吸引触手的气味")
                cnt++
            }
            if (past_event.includes("dreamland2")) {
                show("你在淫魔的乐园里流连忘返")
                cnt++
            }
            if (hypnocnt() > 0) {
                show("你将" + hypnocnt() + "种淫行当做常识")
                if (hypnocnt() >= 2) cnt++
            }
            if ("欲求不满" in buff) {
                show("即便如此，你的身体仍然欲求不满")
                cnt++
            }
            show("")
            if (cnt >= 4) {
                show("你有资格获得我的奖赏。")
                gainbuff("上古淫魔的奖赏", cnt-1)
                gain({ str: cnt-1, dex: cnt-1, wis: cnt-1 })
            } else if (cnt >= 2 ) {
                show("请继续努力。")
            } else {
                if (status.name == "被诅咒的骑士") {
                    show("看来光是一个诅咒还不够。")
                } else if (status.name == "放逐者") {
                    show("你对得起自己的血统吗？")
                } else {
                    show("你根本就是在浪费生命。")
                }
                curse()
                setachievement("浪费生命")
            }
        },
        town: false,
        once: true,
        chance: function () {
            if (status.name == "放逐者") return 3
            return 0.2
        },
        start: 5,
        end: 5
    }

    
    ev["altar"] = {
        ev: function () {
            show("你遇到了一座被遗忘的祭坛。")
            show("祭坛的中央是一根耸立的阳具雕像。")
            show("你感到祭坛在催促你献祭。")
            show("你缓缓地坐上去，然后动起了腰。")
            gain({v_exp:6, p_exp:4},"祭坛")
            show("随着你的体液沾湿了雕像，你感到雕像似乎活了起来。你无法区分是自己在动还是雕像在动。")
            show("")
            show("你在一段时间后清醒过来，察觉到自己获得了新的力量：")
            show("你获得了卖春价格除以25的全属性")
            var v = getbuff("卖春价格") / 25
            gain({ str: v, dex: v, wis: v })
        },
        town: false,
        once: true,
        chance: function () {
            if (getflag("娼妇") >= 5) return 0.02
        },
    }

    ev["altar2"] = {
        ev: function () {
            show("你遇到了一座被遗忘的祭坛。")
            show("祭坛的中央是一张平整的祭台。")
            show("你感到祭坛在催促你献祭。")
            show("你躺在了祭台上。一副眼罩凭空出现在你的脸上，夺取了你的视线。")
            gain({ v_exp: 3, a_exp: 3, o_exp:3, o_exp:3, p_exp:3, u_exp:3}, "祭坛")
            show("在各种你无法识别的性玩具的刺激下，一切陷入黑暗。")
            show("")
            show("你在一段时间后清醒过来，察觉到自己获得了新的力量：")
            show("你获得了等于诅咒道具数量的全属性")
            var v = countcurseditem()
            gain({ str: v, dex: v, wis: v })
        },
        town: false,
        once: true,
        chance: function () {
            if (countcurseditem() > 1) return 0.02
        },
    }
    /*
    ev["note_for_yourself"] = {
        ev: function () {
            show("一根柱子吸引了你的注意，你发现上面有一块松动的石块。")
            show("搬动砖块，你在里面找到了一张折起来的纸条。")
            var s = localStorage.getItem("noteforyourself")
            if (s == null) s = "战士"
            if (s == "战士") {
                show("纸条上写着一种攻守兼备的战斗技巧。")
                gain({ str: 2 })
                setachievement("铁门")
            }
            if (s == "宝藏猎人") {
                show("纸条上写着一个秘密的藏宝地点。")
                gain_treasure(maxtreasure)
            }
            if (s == "神官") {
                show("纸条上写着教会的秘闻。")
                gain({ wis: 2 })
            }
            if (s == "骑士") {
                show("纸条上写着偿还债务的方法。")
                gain({ money: 100 })
            }
            if (s == "圣骑士") {
                show("纸条上写着一系列的戒律。")
                gain({ str: 2 })
            }
            if (s == "复仇者") {
                show("纸条上写着魔物的弱点。")
                gain({ dex: 2 })
            }
            if (s == "术士") {
                show("纸条上写着一种倾泻魔力的战斗技巧。")
                gain({ wis: 2 })
            }
            if (s == "被诅咒的骑士") {
                show("纸条上描述了一个古怪的石碑，并强调了不要接近。")
                gainflag("石碑")
            }
            if (s == "放逐者") {
                show("纸条上写着发掘自身潜力的方式。")
                gain({ exp: 100 })
            }
            localStorage.setItem("noteforyourself", status.name)
            show("你从前人留下的笔记当中获益匪浅，或许你也应该给后人留下点什么？")
        },
        town: false,
        once: true,
        chance: function () {
            return 0.01
        },
    }*/
}