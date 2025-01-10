import { useEffect } from 'react';
import './demo.less';
const Demo1 = () => {
  useEffect(() => {
    draw()
  })
  const draw = () => {
    var canvas = document.getElementById('canvas1')
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d') // 获得 2d 上下文对象
      // 圆的组成：圆心(x,y) 半径 开始角度 结束角度 顺时针/逆时针
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          const x = 50 + (j + 1) * 20 + j * 100
          const y = 50 + (i + 1) * 20 + i * 100
          const radius = 50
          const startAngel = 0
          const endAngel = Math.PI + Math.PI * j / 2
          const anticlockwise = (i % 2 === 0 ? false : true)
          ctx.beginPath()
          ctx.arc(x, y, radius, startAngel, endAngel, anticlockwise)
          if (i <= 1) { ctx.stroke() }
          else { ctx.fill() }
        }
      }
      // 说明 canvas 在画图形时，该图形的属性必须在画之前设置
    } else {
      // 否则不支持,提示用户
      alert('你的浏览器太Low了,请更新~!')
    }
  }
  return (
    <div className='wrap'>
      <canvas id='canvas1' width='380' height='500'>
        你的浏览器太Low了,请更新~! (当浏览器不支持canvas 时才会显示文字,支持则不显示)
      </canvas>
    </div>
  );
};

export default Demo1;