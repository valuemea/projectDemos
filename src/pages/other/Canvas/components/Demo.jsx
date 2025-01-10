import { useEffect } from 'react';
import './demo.less';
const Demo = () => {
  useEffect(() => {
    draw()
  })
  const draw = () => {
    var canvas = document.getElementById('canvas')
    if (canvas.getContext) {
      // 若有值说明canvas 支持当前浏览器,在其中写代码...
      var ctx = canvas.getContext('2d') // 获得 2d 上下文对象(好比一个画笔)

      ctx.fillStyle = 'rgb(200,0,0)'
      ctx.fillRect(20, 20, 100, 100)  //绘制“被填充”的矩形

      ctx.fillStyle = 'rgb(200,0,0)'
      ctx.strokeRect(140, 20, 100, 100) //绘制矩形（无填充）

      ctx.fillStyle = 'rgb(0,0,0)'
      ctx.fillRect(260, 20, 100, 100)
      ctx.clearRect(280, 40, 60, 60)  // 清除指定矩形区域
      ctx.strokeRect(285, 45, 50, 50)

      // 1. 创建起始路径
      // 2. 使用画图命令画出路径
      // 3. 路径闭合
      // 4. 通过描边或填充绘制图形
      // 三角形
      ctx.beginPath()
      ctx.moveTo(20, 140)
      ctx.lineTo(20, 240)
      ctx.lineTo(120, 190)
      ctx.closePath()
      // ctx.stroke() // 绘制已定义的路径
      ctx.fill() //填充当前绘图（路径）

      ctx.beginPath()
      ctx.moveTo(140, 140)
      ctx.lineTo(140, 240)
      ctx.lineTo(240, 190)
      ctx.closePath()
      ctx.stroke() // 绘制已定义的路径

      ctx.beginPath()
      ctx.moveTo(260, 140)
      ctx.lineTo(260, 220)
      ctx.lineTo(260, 140)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(260, 140)
      ctx.lineTo(260, 220)
      ctx.lineTo(340, 140)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(360, 240)
      ctx.lineTo(280, 240)
      ctx.lineTo(360, 160)
      ctx.closePath()
      ctx.stroke()

      // 圆
      // 圆的组成：圆心(x,y) 半径 开始角度 结束角度 顺时针/逆时针
      ctx.strokeStyle = 'orange'
      ctx.lineWidth = 6  // 设置或返回当前的线条宽度。

      // 多个圆多个路径画
      // ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise)
      ctx.beginPath()
      ctx.arc(70, 310, 50, 0, Math.PI, true)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(190, 310, 50, 0, Math.PI / 2, true)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(310, 310, 50, -Math.PI / 2, Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(70, 430, 50, 0, Math.PI * 2)
      ctx.stroke()

      // 多个圆一个路径画出来
      // ctx.beginPath()
      // ctx.arc(70, 310, 50, 0, Math.PI, true)
      // ctx.moveTo(240, 310)
      // ctx.arc(190, 310, 50, 0, Math.PI / 2, true)
      // ctx.moveTo(310,260)
      // ctx.arc(310, 310, 50, -Math.PI / 2, Math.PI)
      // ctx.moveTo(120, 430)
      // ctx.arc(70, 430, 50, 0, Math.PI * 2)
      // ctx.stroke()


      // 说明 canvas 在画图形时，该图形的属性必须在画之前设置
    } else {
      // 否则不支持,提示用户
      alert('你的浏览器太Low了,请更新~!')
    }
  }
  return (
    <div className='wrap'>
      <canvas id='canvas' width='380' height='500'>
        你的浏览器太Low了,请更新~! (当浏览器不支持canvas 时才会显示文字,支持则不显示)
      </canvas>
    </div>
  );
};

export default Demo;