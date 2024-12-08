// let end = prompt("请输入end (格式: YYYY/MM/DD HH:MM:SS):");
// let start = prompt("请输入start (格式: YYYY/MM/DD HH:MM:SS):");
// 2024/12/07 :00:00
let end = prompt("请输入结束日期(如 2024/1/1 12:34:56");
let start = new Date().getFullYear() +'/'+ (new Date().getMonth() + 1) +'/'+ new Date().getDate() +' 00:00:00';
function tick() {
    let date = new Date();
    let endt = new Date(end);
    let startt = new Date(start);

    // 计算总时间
    let total = endt.getTime() - startt.getTime();
    // 计算当前时间距离开始时间的时间
    let now = date.getTime() - startt.getTime();
    console.log("已经过了"+(now/total*100).toFixed(10)+"%");
    // 如果当前时间超过目标时间
    if (date.getTime() >= endt.getTime()) {
        document.getElementsByClassName("u-progress")[0].style.background = getUndulatingColor();
        document.getElementsByClassName("u-progress")[0].style.width = "100%";
        document.getElementById("progress").innerHTML=`100%`;
        return;
    }
    
    // 更新进度条
    document.getElementsByClassName("u-progress")[0].style.background = `#0f0`;
    document.getElementsByClassName("u-progress")[0].style.width = `${(now / total) * 100}%`;
    document.getElementById("progress").innerHTML=`${((now / total) * 100).toFixed(10)}%`;
}
function convertToB16(n) {
  let codes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let x = n % 16
  return codes[(n - x) / 16] + codes[x]
}
function getUndulatingColor(period = Math.sqrt(760)) {
  let t = new Date().getTime()
  let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0)
  let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
  let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
  a = convertToB16(Math.floor(a * 128) + 128)
  b = convertToB16(Math.floor(b * 128) + 128)
  c = convertToB16(Math.floor(c * 128) + 128)
  return "#" + String(a) + String(b) + String(c)
}
setInterval(tick,30);
