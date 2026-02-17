---
title: "写入BLE设备特征值数据"
source: "https://developer.work.weixin.qq.com/document/path/100564"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 写入BLE设备特征值数据

## ww.writeBLECharacteristicValue(params)

> 兼容性：企业微信

### 功能描述

向低功耗蓝牙设备特征值中写入二进制数据。

      **
      
```ts
ww.writeBLECharacteristicValue({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId,
  value: arrayBufferValue
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID需要已经通过 createBLEConnection 与对应设备建立链接 |
|  | serviceId | string | 是 | 蓝牙特征值对应服务的 uuid需要通过 getBLEDeviceServices 接口获取 |
|  | characteristicId | string | 是 | 蓝牙特征值的 uuid需要通过 getBLEDeviceCharacteristics 接口获取 |
|  | value | ArrayBuffer | 是 | 需要写入的二进制数据 |
|  | success | Function | 否 | 成功回调 |
|  | fail | Function | 否 | 失败回调 |
|  | cancel | Function | 否 | 取消回调 |
|  | complete | Function | 否 | 完成回调 |

### 返回说明

**Promise<Object>**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |

### 使用说明

- 设备的特征值必须支持 write 才可以成功调用，具体参照 characteristic 的 properties 属性
- 并行调用多次读写接口存在读写失败的可能性
- 接口不会对写入数据包大小做限制，但系统与蓝牙设备会确定蓝牙 4.0 单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过 20 字节
- 安卓平台上，在调用 notify 成功后立即调用 write 接口，在部分机型上会发生 10008 系统错误
- 若单次写入数据过长，iOS 平台上存在系统不会有任何回调的情况（包括错误回调）

## 旧版jweixin调用

### 示例代码

      
```javascript
// 向蓝牙设备发送一个0x00的16进制数据
let buffer = new ArrayBuffer(1)
let dataView = new DataView(buffer)
dataView.setUint8(0, 0)

wx.writeBLECharacteristicValue({
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: serviceId,
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: characteristicId,
  // 这里的value是ArrayBuffer类型
  value: buffer,
  success: function (res) {
    console.log('writeBLECharacteristicValue success', res.errMsg)
  }
})
```
