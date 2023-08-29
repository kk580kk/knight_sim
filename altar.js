function altar(){
    ev["hidden1"] = {
        ev: function () {
            altarachievement("altar1")

            hiddenplace()
            show("你在一片古老的墓地里穿行，当你走到其中一块墓碑前时，你突然感到一阵亲切。")
            if (status.name == "野蛮人") {
                show("你擦去墓碑的积灰，突然想起来自己不识字。")
                return
            }
            show("你擦去墓碑的积灰，发现上面写着“她是公主中的娼妇，娼妇中的公主”。")
            show("")
            show("你在墓碑前坐了一段时间，阅读碑文上娼妇公主复国的经历。")
            if ("契约：娼妇" in buff) {
                show("你感到身上的娼妇契约和碑文发生了共鸣。")
                gainbuff("娼妇公主的祝福")
                show("每当你进行卖春时，下一次判定必定成功。")
            } else {
                show("你对她的经历难以产生共情。")
            }
        },
        town: false,
        once: true,
        chance: function () {
            return hiddenchance()
        },
    }

    ev["hidden2"] = {
        ev: function () {
            altarachievement("altar2")
            hiddenplace()
            show("你遇到了一座插着剑的石台。")
            show("你感到这把剑散发着一股纯净的能量，既没有用催眠强制你采取行动，也没有发出蛊惑人心的魔音——在这个充满色情陷阱的世界里面竟是如此地格格不入。")
            show("你伸手触碰剑柄。")
            
            if (status.lewd >= 50) {
                show("由于你的淫乱度过高，你无法装备此物品")
            } else {
                var v = Math.floor((59 - status.lewd) / 10)
                gainbuff("圣剑", v)
                gain({ str: v, dex: v, wis: v })
                show("圣剑会随着你的淫乱度提升而弱化")
                if (v >= 3) show("你感到圣剑在欢迎自己的新主人")
                else show("你感到圣剑在嫌弃你不洁的身体")
            }
        },
        town: false,
        once: true,
        chance: function () {
            return hiddenchance()
        },
    }

    ev["hidden3"] = {
        ev: function () {
            altarachievement("altar3")

            hiddenplace()
            show("你遇到了一个装满了财宝的房间。")
            show("在房间正中央，一个黄金头骨被放在高台上。")
            show("在你靠近时，头骨突然对你说话：“你可以拿走我的财宝，但我有一个小小的要求……”")
            show("你没有理会头骨，捡起了一枚金珠。然后，你的手失去了控制。你不由自主地将金珠塞进了后穴。")
            show("“你只能将金子塞在菊花里带走。”")
            show("")
            show("你在扩张度的容许范围内挑战着自己的极限。")
            var m = 25 * (status.a_lv + 1)
            var e = 2 * (status.a_lv + 1)
            var v = gain({ a_exp: e, p_exp: e }, "金珠", true)
            if (check("dex", month + v * 2 + 15) >= 0) {
                show("你小心翼翼地挪着步子，艰难地走出了宝库。")
                gain({ money: m })
            } else {
                show("你刚走了几步路，就在强烈的刺激下跌倒在地。")
                show("一根粗大的触手不知道从哪里冒了出来，将大量精液灌入你的身体。")
                gain({ a_exp: 6, p_exp: 3, s_exp: 3 }, "触手")
                show("金珠在精液的润滑下喷涌而出。")
                show("做人不能太贪。")
                show("无形的力量将你赶出了宝物库。随后，门砰地一声关上了。")
            }
        },
        town: false,
        once: true,
        start: 3,
        chance: function () {
            return hiddenchance()
        },
    }

    ev["hidden4"] = {
        ev: function () {
            altarachievement("altar4")

            hiddenplace()
            show("你在野外遇到了一棵枯萎的古树。")
            show("你听到一个声音在说：“用淫乱少女的体液浇灌……”")
            show("你在树下自慰，淫汁打湿了土壤。")
            var v = gain({ v_exp: 5, m_exp: 5 }, "自慰", true)
            if (v >= 5) {
                show("古树以不可思议的速度恢复绿色，开花结果。")
                if (getop("炼金术师") >= 1) {
                    show("炼金术师告诉你这种果实是制作春药的上好原料。她出钱买下了素材。")
                    gain({ money: v * 20 })
                    show("但愿她别把成品用在你身上。")
                } else {
                    show("商人收购了这些果实。")
                    gain({ money: v * 10 })
                }
            } else {
                show("过了一阵，你回过神来。")
                show("你无法理解自己为什么要在野外自慰。")
            }
        },
        town: false,
        once: true,
        start: 3,
        chance: function () {
            return hiddenchance()
        },
    }

    ev["hidden5"] = {
        ev: function () {
            altarachievement("altar5")
            hiddenplace("holy")
            show("你遇到了一座被亵渎的神像。")
            show("神像的面容和教会的神像相差无几，但身上的衣服却比娼妇还要暴露。")
            show("你感到神像在催促你献上……内裤？")
            show("")
            if ("真空" in buff) {
                show("你向神像展示了自己无遮无拦的下身。")
                show("随后，你感到一股力量涌入自己的身体。")
                gainbuff("露出女神的加护")
                show("只要你处在真空状态，判定的成功率便获得提升。")
                if (status.name == "野蛮人") {
                    setachievement("神选者")
                    show("你不明白这世上为什么会有白送的加护。")
                    return
                }
                show("这么简单就拿到加护让你有些良心不安。")
                show("你决定至少在一段时间内，践行这位神明的教诲。")
                gainbuff("真空", 16)
            } else {
                show("你脱下内裤，放在神像前。")
                show("金币从天而降。")
                gain({ e_exp: 3, money: 100 })
                show("这么简单就拿到钱让你有些良心不安。")
                show("你决定至少在一段时间内，践行这位神明的教诲。")
                gainbuff("真空", 16)
            }
        },
        town: false,
        once: true,
        chance: function () {
            return hiddenchance("holy")
        },
    }

    ev["hidden6"] = {
        ev: function () {
            altarachievement("altar6")
            hiddenplace()
            show("你遇到了一座被遗忘的祭坛。")
            show("祭坛的中央耸立着一根阳具的雕塑。")
            show("你感到祭坛在催促你献上纯洁少女的贞操。")
            show("")
            if (status.o_virgin == "") {
                show("你不受控制地走向祭坛。")
                show("你向祭坛献上了自己的初次口交。")
                show("你感到雕塑似乎在你的体内活了起来。")
                gain({ o_exp: 5, s_exp: 2 }, "祭坛")
                show("事后，你意识到祭坛注入你体内的，是某种纯粹的生命能量。")
                gain({ exp: 150 })
            } else if (status.a_virgin == "") {
                show("你不受控制地走向祭坛。")
                show("你向祭坛献上了自己的后庭处女。")
                show("你感到雕塑似乎在你的体内活了起来。")
                gain({ a_exp: 5, s_exp: 2 }, "祭坛")
                show("事后，你意识到祭坛注入你体内的，是某种纯粹的生命能量。")
                gain({ exp: 150 })
            } else if (status.v_virgin == "") {
                show("你不受控制地走向祭坛。")
                show("你向祭坛献上了自己的处女。")
                show("你感到雕塑似乎在你的体内活了起来。")
                gain({ v_exp: 5, s_exp: 2 }, "祭坛")
                if (status.v_virgin == "") {
                    show("事后，你意识到祭坛注入你体内的，是某种纯粹的媚药。")
                    show("你试图欺骗祭坛的行为遭到了惩罚。")
                    gain({ drug_exp: 10 })
                } else {
                    show("事后，你意识到祭坛注入你体内的，是某种纯粹的生命能量。")
                    gain({ exp: 250 })
                }
            } else {
                show("你带着试一试的心态走向了祭坛。")
                show("你试图向祭坛献上自己并非处女的小穴。")
                show("你跨坐在雕塑上，让假阳具缓缓进入自己的身体。")
                gain({ v_exp: 3, p_exp: 2 }, "祭坛")
                show("雕塑一动不动——就像一块冷冰冰的石头，也确实如此。")
            }
        },
        town: false,
        once: true,
        chance: function () {
            return hiddenchance()
        },
        start: 3
    }
    ev["hidden7"] = {
        ev: function () {
            altarachievement("altar7")
            hiddenplace("holy")
            show("你遇到了一座被亵渎的神像。")
            show("神像的面容和教会的神像相差无几，但身上却挂满了性玩具。")
            show("")
            if ("试炼的后庭拉珠" in buff) {
                show("你注意到神像的浑身上下唯有后穴是空的。")
                show("你取下身上的后庭拉珠，塞进了神像的屁股。")
                show("你感到似乎有液体喷到了你的脸上。")
                gainbuff("圣水的恩惠", 8)
                show("在接下来的一个月内，你的事件判定会进行两次并取较好的结果。")
                show("")
                show("由于后庭拉珠被取出，你感到一阵轻松。")
                gain({str:3, dex: 3, wis: 3})
            } else {
                show("你听到神像的背面传来响动。随后，你在地上发现了一串大小递增的水晶珠。")
                show("在拾取的瞬间，你的手失去了控制。你不由自主地将珠串塞进了后庭。")
                gainbuff("试炼的后庭拉珠")
                show("试炼的后庭拉珠降低了你的属性，同时提高了你的经验获取速度。")
                gain({ str: -3, dex: -3, wis: -3, a_exp: 4, p_exp: 4 }, "后庭拉珠")
                if (status.name == "术士") {
                    show("由于禁忌之书的效果，你在获得诅咒道具时额外获得了经验值")
                    gain({ exp: 50 })
                }
                show("")
                show("你注意到神像的浑身上下唯有后穴是空的。")
            }
        },
        town: false,
        once: true,
        chance: function () {
            return hiddenchance("holy")
        },
    }

    ev["hidden8"] = {
        ev: function () {
            altarachievement("altar8")
            hiddenplace()
            if (getlocalkey("gate") == null || getlocalkey("gate") == 3) {
                show("你遇到了一扇奇怪的门。")
                show("上面应该是门锁的地方被屁股替代。")
                show("不知道为什么，你觉得门上的女阴看起来很熟悉，却又想不起来是谁的。")
                if ("淑女的收藏" in buff) {
                    show("你掏出假阳具插入锁孔。")
                    setlocalkey("gate", 1)
                    gain({ les_exp: 3, m_exp: 5 })
                    show("你发现了两个宝箱！")
                    gain_treasure()
                    gain_treasure()
                } else {
                    show("你不确定自己的舌头能否算作钥匙。")
                    setlocalkey("gate", 2)
                    gain({ les_exp: 3, o_exp: 5 })
                    show("你发现了两个宝箱！")
                    gain_treasure()
                    gain_treasure()
                }
                show("离开后不久，你突然想起来门里还卡了个人，连忙返回解救。")
                show("当你折回时，房间消失得无影无踪。")
            } else {
                show("你遇到了一扇有洞的门，透过洞口，你可以看到门内的宝藏。")
                show("在穿过洞的过程中，洞口突然收缩，将你卡在了门上。")
                if (getlocalkey("gate") == 1) {
                    show("你感到一根假阳具插入了你的体内。")
                    gain({ v_exp: 5, les_exp: 3, p_exp: 2 }, "假阳具")
                } else {
                    show("你感到有人将舌头伸进了你的体内。")
                    gain({ v_exp: 5, les_exp: 3 })
                }
                show("门开了。你看着一个熟悉的身影搜刮着房间里的宝藏，却想不起来这个人是谁。")
                show("等到她离开一段时间后，束缚自动解除了。")
                setlocalkey("gate", 3)
            }
        },
        town: false,
        once: true,
        chance: function () {
            return hiddenchance()
        },
    }
}
function hiddenplace(str) {
    if ("藏宝图" in buff) {
        show("你使用藏宝图发现了一个隐藏地点")
        removebuff("藏宝图")
    } else if ("鹰眼术" in buff && rand(2) == 0) {
        show("你使用鹰眼术发现了一个隐藏地点")
    //} else if ("渎神" in buff && str == "holy") {
    //    show("你被亵渎的气息指引，发现了一个隐藏地点")
    } else{
        show("你发现了一个隐藏地点")
    }
}

function hiddenchance(str) {
    if ("藏宝图" in buff) return 0.5
//    if ("渎神" in buff && str == "holy") return 0.02
    if ("鹰眼术" in buff) {
        return 0.02
    } else return 0.01
    return 0
}

function randbonus(n) {
    var r = rand(3)
    if (r == 0)
        gain({ str: n })
    if (r == 1)
        gain({ dex: n })
    if (r == 2)
        gain({ wis: n })
}

function altarachievement(k) {
    setlocalkey(k)
    if (getlocalkey("altar1") != null && getlocalkey("altar2") != null && getlocalkey("altar3") != null && getlocalkey("altar4") != null && getlocalkey("altar5") != null && getlocalkey("altar6") != null && getlocalkey("altar7") != null && getlocalkey("altar8") != null)
        setachievement("寻谜问道")
    /*	if ("常识改变：分享秘密" in buff) {
            show("作为交换，你分享了自己的秘密")
            var r = rand(3)
            if (r == 0) {
                show("你向酒馆老板谈起自己的性经验。")
            } else if (r == 1) {
                show("你向酒馆老板谈起自己的异常性癖。")
            } else if (r == 2) {
                show("你向酒馆老板谈起自己的敏感部位。")
            }
            gainbuff("情报公开", 2)
            show("泄露的情报降低了你对抗流氓的成功率")
        }*/
}
