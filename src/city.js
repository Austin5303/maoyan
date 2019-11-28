const cityList = [
    {
        id: 1,
        nm: "北京",
        py: "beijing"
    },
    {
        id: 10,
        nm: "上海",
        py: "shanghai"
    },
    {
        id: 20,
        nm: "广州",
        py: "guangzhou"
    },
    {
        id: 30,
        nm: "深圳",
        py: "shenzhen"
    },
    {
        id: 42,
        nm: "西安",
        py: "xian"
    },
    {
        id: 40,
        nm: "天津",
        py: "tianjin"
    },
    {
        id: 44,
        nm: "福州",
        py: "fuzhou"
    },
    {
        id: 45,
        nm: "重庆",
        py: "chongqing"
    },
    {
        id: 51,
        nm: "宁波",
        py: "ningbo"
    },
    {
        id: 50,
        nm: "杭州",
        py: "hangzhou"
    },
    {
        id: 55,
        nm: "南京",
        py: "nanjing"
    },
    {
        id: 52,
        nm: "无锡",
        py: "wuxi"
    },
    {
        id: 59,
        nm: "成都",
        py: "chengdu"
    },
    {
        id: 57,
        nm: "武汉",
        py: "wuhan"
    },
    {
        id: 56,
        nm: "合肥",
        py: "hefei"
    },
    {
        id: 62,
        nm: "厦门",
        py: "xiamen"
    },
    {
        id: 60,
        nm: "青岛",
        py: "qingdao"
    },
    {
        id: 70,
        nm: "长沙",
        py: "changsha"
    },
    {
        id: 65,
        nm: "大连",
        py: "dalian"
    },
    {
        id: 66,
        nm: "沈阳",
        py: "shenyang"
    },
    {
        id: 76,
        nm: "石家庄",
        py: "shijiazhuang"
    },
    {
        id: 73,
        nm: "郑州",
        py: "zhengzhou"
    },
    {
        id: 84,
        nm: "保定",
        py: "baoding"
    },
    {
        id: 81,
        nm: "淄博",
        py: "zibo"
    },
    {
        id: 80,
        nm: "苏州",
        py: "suzhou"
    },
    {
        id: 83,
        nm: "南昌",
        py: "nanchang"
    },
    {
        id: 82,
        nm: "南通",
        py: "nantong"
    },
    {
        id: 93,
        nm: "桂林",
        py: "guilin"
    },
    {
        id: 92,
        nm: "佛山",
        py: "foshan"
    },
    {
        id: 95,
        nm: "葫芦岛",
        py: "huludao"
    },
    {
        id: 94,
        nm: "海口",
        py: "haikou"
    },
    {
        id: 89,
        nm: "常州",
        py: "changzhou"
    },
    {
        id: 88,
        nm: "蚌埠",
        py: "bengbu"
    },
    {
        id: 91,
        nm: "东莞",
        py: "dongguan"
    },
    {
        id: 90,
        nm: "大庆",
        py: "daqing"
    },
    {
        id: 102,
        nm: "芜湖",
        py: "wuhu"
    },
    {
        id: 103,
        nm: "新乡",
        py: "xinxiang"
    },
    {
        id: 101,
        nm: "太原",
        py: "taiyuan"
    },
    {
        id: 98,
        nm: "锦州",
        py: "jinzhou"
    },
    {
        id: 99,
        nm: "南宁",
        py: "nanning"
    },
    {
        id: 96,
        nm: "济南",
        py: "jinan"
    },
    {
        id: 97,
        nm: "焦作",
        py: "jiaozuo"
    },
    {
        id: 110,
        nm: "泉州",
        py: "quanzhou"
    },
    {
        id: 111,
        nm: "三亚",
        py: "sanya"
    },
    {
        id: 108,
        nm: "珠海",
        py: "zhuhai"
    },
    {
        id: 109,
        nm: "齐齐哈尔",
        py: "qiqihaer"
    },
    {
        id: 106,
        nm: "廊坊",
        py: "langfang"
    },
    {
        id: 107,
        nm: "贵阳",
        py: "guiyang"
    },
    {
        id: 104,
        nm: "烟台",
        py: "yantai"
    },
    {
        id: 105,
        nm: "哈尔滨",
        py: "haerbin"
    },
    {
        id: 119,
        nm: "徐州",
        py: "xuzhou"
    },
    {
        id: 117,
        nm: "汕头",
        py: "shantou"
    },
    {
        id: 116,
        nm: "长春",
        py: "changchun"
    },
    {
        id: 115,
        nm: "九江",
        py: "jiujiang"
    },
    {
        id: 114,
        nm: "昆明",
        py: "kunming"
    },
    {
        id: 113,
        nm: "中山",
        py: "zhongshan"
    },
    {
        id: 112,
        nm: "温州",
        py: "wenzhou"
    },
    {
        id: 127,
        nm: "沧州",
        py: "cangzhou"
    },
    {
        id: 126,
        nm: "承德",
        py: "chengde"
    },
    {
        id: 125,
        nm: "张家口",
        py: "zhangjiakou"
    },
    {
        id: 124,
        nm: "邢台",
        py: "xingtai"
    },
    {
        id: 123,
        nm: "邯郸",
        py: "handan"
    },
    {
        id: 122,
        nm: "秦皇岛",
        py: "qinhuangdao"
    },
    {
        id: 121,
        nm: "唐山",
        py: "tangshan"
    },
    {
        id: 120,
        nm: "扬州",
        py: "yangzhou"
    },
    {
        id: 137,
        nm: "临汾",
        py: "linfen"
    },
    {
        id: 136,
        nm: "忻州",
        py: "xinzhou"
    },
    {
        id: 139,
        nm: "呼和浩特",
        py: "huhehaote"
    },
    {
        id: 138,
        nm: "吕梁",
        py: "lvliang"
    },
    {
        id: 141,
        nm: "乌海",
        py: "wuhai"
    },
    {
        id: 140,
        nm: "包头",
        py: "baotou"
    },
    {
        id: 143,
        nm: "通辽",
        py: "tongliao"
    },
    {
        id: 142,
        nm: "赤峰",
        py: "chifeng"
    },
    {
        id: 129,
        nm: "大同",
        py: "datong"
    },
    {
        id: 128,
        nm: "衡水",
        py: "hengshui"
    },
    {
        id: 131,
        nm: "长治",
        py: "changzhi"
    },
    {
        id: 130,
        nm: "阳泉",
        py: "yangquan"
    },
    {
        id: 133,
        nm: "朔州",
        py: "shuozhou"
    },
    {
        id: 132,
        nm: "晋城",
        py: "jincheng"
    },
    {
        id: 135,
        nm: "运城",
        py: "yuncheng"
    },
    {
        id: 134,
        nm: "晋中",
        py: "jinzhong"
    },
    {
        id: 152,
        nm: "抚顺",
        py: "fushun"
    },
    {
        id: 153,
        nm: "本溪",
        py: "benxi"
    },
    {
        id: 154,
        nm: "丹东",
        py: "dandong"
    },
    {
        id: 155,
        nm: "营口",
        py: "yingkou"
    },
    {
        id: 156,
        nm: "阜新",
        py: "fuxin"
    },
    {
        id: 157,
        nm: "辽阳",
        py: "liaoyang"
    },
    {
        id: 158,
        nm: "盘锦",
        py: "panjin"
    },
    {
        id: 159,
        nm: "铁岭",
        py: "tieling"
    },
    {
        id: 144,
        nm: "鄂尔多斯",
        py: "eerduosi"
    },
    {
        id: 145,
        nm: "呼伦贝尔",
        py: "hulunbeier"
    },
    {
        id: 146,
        nm: "巴彦淖尔",
        py: "bayannaoer"
    },
    {
        id: 147,
        nm: "乌兰察布",
        py: "wulanchabu"
    },
    {
        id: 148,
        nm: "兴安盟",
        py: "xinganmeng"
    },
    {
        id: 149,
        nm: "锡林郭勒",
        py: "xilinguolemeng"
    },
    {
        id: 150,
        nm: "阿拉善盟",
        py: "alashanmeng"
    },
    {
        id: 151,
        nm: "鞍山",
        py: "anshan"
    },
    {
        id: 171,
        nm: "双鸭山",
        py: "shuangyashan"
    },
    {
        id: 170,
        nm: "鹤岗",
        py: "hegang"
    },
    {
        id: 169,
        nm: "鸡西",
        py: "jixi"
    }
]
export default cityList