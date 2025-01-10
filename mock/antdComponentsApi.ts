// antd 组件案例使用数据集合

export const areaTreeList = [
  {
    arcoCode: "110000",
    arcoName: "北京",
    children: [
      {
        arcoCode: "110100",
        arcoName: "北京市",
      }
    ]
  },
  {
    arcoCode: "120000",
    arcoName: "天津",
    children: [
      {
        arcoCode: "120100",
        arcoName: "天津市",
      }
    ]
  },
  {
    arcoCode: "130000",
    arcoName: "河北省",
    children: [
      { "arcoCode": "130100", "arcoName": "石家庄市" },
      { "arcoCode": "130200", "arcoName": "唐山市" },
      { "arcoCode": "130300", "arcoName": "秦皇岛市" },
      { "arcoCode": "130400", "arcoName": "邯郸市" },
      { "arcoCode": "130500", "arcoName": "邢台市" },
      { "arcoCode": "130600", "arcoName": "保定市" },
      { "arcoCode": "130700", "arcoName": "张家口市" },
      { "arcoCode": "130800", "arcoName": "承德市" },
      { "arcoCode": "130900", "arcoName": "沧州市" },
      { "arcoCode": "131000", "arcoName": "廊坊市" },
      { "arcoCode": "131100", "arcoName": "衡水市" }
    ],
  },
  {
    arcoCode: "140000",
    arcoName: "山西省",
    children: [
      { "arcoCode": "140100", "arcoName": "太原市" },
      { "arcoCode": "140200", "arcoName": "大同市" },
      { "arcoCode": "140300", "arcoName": "阳泉市" },
      { "arcoCode": "140400", "arcoName": "长治市" },
      { "arcoCode": "140500", "arcoName": "晋城市" },
      { "arcoCode": "140600", "arcoName": "朔州市" },
      { "arcoCode": "140700", "arcoName": "晋中市" },
      { "arcoCode": "140800", "arcoName": "运城市" },
      { "arcoCode": "140900", "arcoName": "忻州市" },
      { "arcoCode": "141000", "arcoName": "临汾市" },
      { "arcoCode": "141100", "arcoName": "吕梁市" }
    ]
  },
  {
    arcoCode: "210000",
    arcoName: "辽宁省",
    children: [
      { "arcoCode": "210100", "arcoName": "沈阳市" },
      { "arcoCode": "210200", "arcoName": "大连市" },
      { "arcoCode": "210300", "arcoName": "鞍山市" },
      { "arcoCode": "210400", "arcoName": "抚顺市" },
      { "arcoCode": "210500", "arcoName": "本溪市" },
      { "arcoCode": "210600", "arcoName": "丹东市" },
      { "arcoCode": "210700", "arcoName": "锦州市" },
      { "arcoCode": "210800", "arcoName": "营口市" },
      { "arcoCode": "210900", "arcoName": "阜新市" },
      { "arcoCode": "211000", "arcoName": "辽阳市" },
      { "arcoCode": "211100", "arcoName": "盘锦市" },
      { "arcoCode": "211200", "arcoName": "铁岭市" },
      { "arcoCode": "211300", "arcoName": "朝阳市" },
      { "arcoCode": "211400", "arcoName": "葫芦岛市" },
      { "arcoCode": "211500", "arcoName": "金普新区" }
    ]
  },
]

export default {
  'GET /api/v1/arealist': (req: any, res: any) => {
    console.log(req, 'abbb')
    const { query } = req
    const handleDataList: any[] = []
    function loop(list: any[], pid: string) {
      list.forEach(item => {
        handleDataList.push({ arcoCode: item.arcoCode, arcoName: item.arcoName, pid: pid, isLeaf: item?.children?.length ? false : true })
        if (item.children?.length) {
          loop(item.children || [], item.arcoCode)
        }
      })
    }
    loop(areaTreeList, '0')
    const filterList = handleDataList.filter(item => item.pid === (query?.parentCode || '0'))
    res.json({
      success: true,
      code: 200,
      data: filterList,
      message: '操作成功',
    });
  },
};
