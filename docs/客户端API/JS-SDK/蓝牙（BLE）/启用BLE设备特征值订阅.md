---
title: "启用BLE设备特征值订阅"
source: "https://developer.work.weixin.qq.com/document/path/100565"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 启用BLE设备特征值订阅

## ww.notifyBLECharacteristicValueChange(params)

> 兼容性：企业微信

### 功能描述

启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。

      **
      
```ts
ww.notifyBLECharacteristicValueChange({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId,
  state: true
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID需要已经通过 createBLEConnection 与对应设备建立链接 |
|  | serviceId | string | 是 | 蓝牙特征值对应服务的 uuid需要通过 getBLEDeviceServices 接口获取 |
|  | characteristicId | string | 是 | 蓝牙特征值的 uuid需要通过 getBLEDeviceCharacteristics 接口获取 |
|  | state | boolean | 是 | 是否启用 notify |
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

- 设备的特征值必须支持 notify 或者 indicate 才可以成功调用，具体参照 characteristic 的 properties 属性
- 订阅操作成功后需要设备主动更新特征值的 value 才会触发 onBLECharacteristicValueChange 回调
- 安卓平台上，在调用 notify 成功后立即调用 write 接口，在部分机型上会发生 10008 系统错误

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.notifyBLECharacteristicValueChange({
  state: true, // 启用 notify 功能
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接  
  deviceId: deviceId,
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: serviceId,
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: characteristicId,
  success: function (res) {
    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
  }
})
```
