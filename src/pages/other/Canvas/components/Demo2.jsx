import React, { useEffect } from 'react';
import './demo.less';
const Demo2 = () => {
  useEffect(() => {
    draw()
  })
  const draw = () => {
    var canvas = document.getElementById('canvas2')
    if (canvas.getContext) {
      // 若有值说明canvas 支持当前浏览器,在其中写代码...
      var ctx = canvas.getContext('2d') // 获得 2d 上下文对象(好比一个画笔)
      // 笑脸 
      // ctx.beginPath()
      // ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
      // ctx.moveTo(110, 75)
      // ctx.arc(75, 75, 35, 0, Math.PI, false)
      // ctx.moveTo(65, 65)
      // ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
      // ctx.moveTo(95, 65)
      // ctx.arc(90, 65, 5, 0, Math.PI * 2, true)
      // ctx.stroke()


      // 线性渐变
      // createLinearGradient(x0,y0,x1,y1);
      // 参数1：渐变开始点的 x 坐标  
      // 参数2：渐变开始点的 y 坐标
      // 参数3：渐变结束点的 x 坐标
      // 参数4：渐变结束点的 y 坐标


      // var lingrad = ctx.createLinearGradient(20, 140, 20, 270) //渐变开始点及结束点是以画布为基准的，颜色渲染的时候只会渲染已经画出来的内容 
      // // 参数1：必须是0.0~1.0之间的数值，数值表示颜色所在的相对位置
      // // 参数2：颜色，white #fff #ffffff rgb(255,255,255)
      // lingrad.addColorStop(0, '#cc6677')
      // lingrad.addColorStop(0.5, '#fff')
      // lingrad.addColorStop(0.5, '#c6c776')
      // ctx.fillStyle = lingrad
      // ctx.fillRect(20, 140, 130, 130)

      // var lingrad2 = ctx.createLinearGradient(0, 190, 20, 240)
      // lingrad2.addColorStop(0.5, '#000')
      // lingrad2.addColorStop(1, 'rgba(0,0,0,0)')
      // ctx.strokeStyle = lingrad2
      // ctx.strokeRect(60, 170, 50, 50)


      var lingrad = ctx.createLinearGradient(0, 0, 0, 150)
      // 参数1：必须是0.0~1.0之间的数值，数值表示颜色所在的相对位置
      // 参数2：颜色，white #fff #ffffff rgb(255,255,255)
      lingrad.addColorStop(0, '#cc6677')
      lingrad.addColorStop(0.5, '#fff')
      lingrad.addColorStop(0.5, '#c6c776')
      ctx.fillStyle = lingrad
      ctx.fillRect(10, 10, 130, 130)
      var lingrad2 = ctx.createLinearGradient(0, 50, 0, 90)
      lingrad2.addColorStop(0.5, '#000')
      lingrad2.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.strokeStyle = lingrad2
      ctx.strokeRect(50, 50, 50, 50)

      // 径向渐变
      // createRadialGradient(x0,y0,r0,x1,y1,r1);
      // x0	渐变的开始圆的 x 坐标
      // y0	渐变的开始圆的 y 坐标
      // r0	开始圆的半径
      // x1	渐变的结束圆的 x 坐标
      // y1	渐变的结束圆的 y 坐标
      // r1	结束圆的半径

      var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
      radgrad.addColorStop(0, '#A7D30C ');
      radgrad.addColorStop(0.9, '#019F62');
      radgrad.addColorStop(1, 'rgba(1,159,98,0)');
      ctx.fillStyle = radgrad;
      ctx.fillRect(0, 0, 150, 150);

      var radgrad1 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
      radgrad1.addColorStop(0, '#cc6677 ');
      radgrad1.addColorStop(0.9, '#FF0188');
      radgrad1.addColorStop(1, 'rgba(255,1,136,0)');
      //画图形
      ctx.fillStyle = radgrad1;
      ctx.fillRect(0, 0, 150, 150);




      // var img = new Image()
      // img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.gtimg.com%2Fbj2022%2Fpics%2Fhv1%2F250%2F251%2F2315%2F150597130.png&refer=http%3A%2F%2Fimg1.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647158204&t=2a3e7e934a3796781c72beeaf0211bcd'
      // img.width = '200'
      // img.onload = function () {
      //   var ptrn = ctx.createPattern(img, 'no-repeat')
      //   ctx.fillStyle = ptrn
      //   ctx.fillRect(0, 0, 800  , 600)
      // }
      // 注意：在绘制图像时，一定要确保图片被加载完成 

    }
    else {
      // 否则不支持,提示用户
      alert('你的浏览器太Low了,请更新~!')
    }
  }
  return (
    <div className='wrap'>
      <canvas id='canvas2' width='380' height='500'>
        你的浏览器太Low了,请更新~! (当浏览器不支持canvas 时才会显示文字,支持则不显示)
      </canvas>
    </div>
  );
};

export default Demo2;