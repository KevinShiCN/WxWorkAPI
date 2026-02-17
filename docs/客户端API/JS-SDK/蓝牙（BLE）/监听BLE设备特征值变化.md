---
title: "监听BLE设备特征值变化"
source: "https://developer.work.weixin.qq.com/document/path/100566"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 监听BLE设备特征值变化

## ww.onBLECharacteristicValueChange(callback)

> 兼容性：企业微信

### 功能描述

监听低功耗蓝牙设备的特征值变化。

必须先启用 notify 才能接收到设备推送的 notification。

      **
      
```ts
ww.onBLECharacteristicValueChange(function(event) {
  console.log(event)
})
```

    
### 参数说明

#### callback: Function

**参数**

**event: Object**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID |
|  | serviceId | string | 是 | 特征值所属服务 uuid |
|  | characteristicId | string | 是 | 特征值 uuid |
|  | value | ArrayBuffer | 是 | 特征值最新的值使用说明VConsole 无法打印出 ArrayBuffer 类型数据 |

## 旧版jweixin调用

### 示例代码

      
```javascript
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
wx.onBLECharacteristicValueChange(function(res) {
  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
  console.log(ab2hex(res.value))
})
```
