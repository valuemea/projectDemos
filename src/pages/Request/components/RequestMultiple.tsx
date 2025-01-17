// 多个请求并发操作处理（例：如果有100个请求如何处理）
// 实现思路：：利用Set集合，创建一个请求池数组，当Set集合中的数量大于最大并发数时，将请求放入等待队列中，当Set集合中的数量小于最大并发数时，将请求从等待队列中取出，并执行请求。
import { getAreaList } from "@/pages/antdComponents/FormUI/components/service";
import { getReqMuData } from "./service";
const RequestMultiple = () => {
  // 多个请求并发操作处理(假设有50个请求)
  /* Params: 
     max: number  最大并发数，默认为1
   */
  function reqMult(max: number = 1): void {
    const reqList = [];
    for (let index = 0; index < 20; index++) {
      reqList.push({ req: getReqMuData, params: { index: index } })
      reqList.push({ req: getAreaList, })
    }
    console.log(reqList, 'reqList')
    let pool: Set<any> = new Set(); // 运行池
    const waitQueue: any[] = reqList;  // 等待队列
    const filterList = reqList.slice(0, max)
    // 创建新的请求
    function newReqFn(reqFn: any, params: any, callBack: () => void = () => { }): void {
      if (reqFn) {
        reqFn(params).then((res: API.Result) => { callBack(); })
          .catch((err: any) => { console.log(err); })
          .finally(() => {
            pool.delete(newReqFn)  // 请求完成后，将该请求从运行池中删除
            const next = waitQueue.shift()
            if (next) {
              pool.add(next)
              newReqFn(next.req, next.params)
            }
          })
      }
    }
    filterList.forEach(item => {
      pool.add(newReqFn)
      newReqFn(item.req, item.params)
      waitQueue.shift()
    })
  }
  return (<button onClick={() => { reqMult(5) }}> 触发并发请求</button>
  );
};

export default RequestMultiple;