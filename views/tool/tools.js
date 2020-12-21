/**
 * 常用工具集
 */
const tools = {
  randomMaxToMin: function (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
}
export default tools;