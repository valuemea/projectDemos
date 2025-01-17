
// 请求相关案例
const getReqList = function () {
  const list = []
  for (let index = 0; index < 100; index++) {
    list.push(`模拟请求：${index}`)
  }
  return list
}
export const reqApi = getReqList()

export default {
  'GET /api/v1/reqApi': (req: any, res: any) => {
    const { query } = req
    res.json({
      success: true,
      code: 200,
      data: reqApi[query.index],
      message: '操作成功',
    });
  },
};
