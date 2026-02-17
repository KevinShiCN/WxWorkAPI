---
title: "读取BLE设备特征值数据"
source: "https://developer.work.weixin.qq.com/document/path/100563"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 读取BLE设备特征值数据

## ww.readBLECharacteristicValue(params)

> 兼容性：企业微信

### 功能描述

读取低功耗蓝牙设备的特征值的二进制数据值。

      **
      
```ts
ww.readBLECharacteristicValue({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID需要已经通过 createBLEConnection 与对应设备建立链接 |
|  | serviceId | string | 是 | 蓝牙特征值对应服务的 uuid需要通过 getBLEDeviceServices 接口获取 |
|  | characteristicId | string | 是 | 蓝牙特征值的 uuid需要通过 getBLEDeviceCharacteristics 接口获取 |
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

- 设备的特征值必须支持 read 才可以成功调用，具体参照 characteristic 的 properties 属性
- 并行调用多次读写接口存在读写失败的可能性
- 接口读取到的信息需要在 onBLECharacteristicValueChange 的回调中获取

## 旧版jweixin调用

### 示例代码

      
```javascript
// 必须在这里的回调才能获取
wx.onBLECharacteristicValueChange(function(characteristic) {
  console.log('characteristic value comed:', characteristic)
})

wx.readBLECharacteristicValue({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接  [**new**]
  deviceId: deviceId,
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: serviceId,
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: characteristicId,
  success: function (res) {
    console.log('readBLECharacteristicValue:', res.errCode)
  }
})
```
