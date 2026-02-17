---
title: "获取BLE设备特征值"
source: "https://developer.work.weixin.qq.com/document/path/100562"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 获取BLE设备特征值

## ww.getBLEDeviceCharacteristics(params)

> 兼容性：企业微信

### 功能描述

获取蓝牙设备某个服务中的所有 characteristic（特征值）。

      **
      
```ts
ww.getBLEDeviceCharacteristics({
  deviceId: deviceId,
  serviceId: serviceId
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID，需要已经通过 createBLEConnection 与对应设备建立链接 |
|  | serviceId | string | 是 | 蓝牙服务 uuid，需要通过 getBLEDeviceServices 接口获取 |
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
|  | characteristics | Object[] | 是 | 设备特征值列表 |
|  | 属性类型必填说明uuidstring是蓝牙设备特征值的 uuidpropertiesObject是该特征值支持的操作类型属性类型必填说明readboolean是该特征值是否支持 read 操作writeboolean是该特征值是否支持 write 操作notifyboolean是该特征值是否支持 notify 操作indicateboolean是该特征值是否支持 indicate 操作 |  | 属性 | 类型 | 必填 | 说明 |  | uuid | string | 是 | 蓝牙设备特征值的 uuid |  | properties | Object | 是 | 该特征值支持的操作类型 |  | 属性类型必填说明readboolean是该特征值是否支持 read 操作writeboolean是该特征值是否支持 write 操作notifyboolean是该特征值是否支持 notify 操作indicateboolean是该特征值是否支持 indicate 操作 |  | 属性 | 类型 | 必填 | 说明 |  | read | boolean | 是 | 该特征值是否支持 read 操作 |  | write | boolean | 是 | 该特征值是否支持 write 操作 |  | notify | boolean | 是 | 该特征值是否支持 notify 操作 |  | indicate | boolean | 是 | 该特征值是否支持 indicate 操作 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | uuid | string | 是 | 蓝牙设备特征值的 uuid |
|  | properties | Object | 是 | 该特征值支持的操作类型 |
|  | 属性类型必填说明readboolean是该特征值是否支持 read 操作writeboolean是该特征值是否支持 write 操作notifyboolean是该特征值是否支持 notify 操作indicateboolean是该特征值是否支持 indicate 操作 |  | 属性 | 类型 | 必填 | 说明 |  | read | boolean | 是 | 该特征值是否支持 read 操作 |  | write | boolean | 是 | 该特征值是否支持 write 操作 |  | notify | boolean | 是 | 该特征值是否支持 notify 操作 |  | indicate | boolean | 是 | 该特征值是否支持 indicate 操作 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | read | boolean | 是 | 该特征值是否支持 read 操作 |
|  | write | boolean | 是 | 该特征值是否支持 write 操作 |
|  | notify | boolean | 是 | 该特征值是否支持 notify 操作 |
|  | indicate | boolean | 是 | 该特征值是否支持 indicate 操作 |

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  success (res) {
  console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```
