---
title: "获取已连接中的 Wi-Fi 信息"
source: "https://developer.work.weixin.qq.com/document/path/100547"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 获取已连接中的 Wi-Fi 信息

## ww.getConnectedWifi([params])

> 兼容性：企业微信 iOS、Android 2.4.16 开始支持

### 功能描述

获取已连接中的 Wi-Fi 信息。

      **
      
```ts
ww.getConnectedWifi()
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
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
|  | wifi | Object | 是 | Wi-Fi 信息 |
|  | 属性类型必填说明SSIDstring是Wi-Fi 的 SSIDBSSIDstring是Wi-Fi 的 BSSIDsecureboolean是Wi-Fi 是否安全signalStrengthnumber是Wi-Fi 信号强度 |  | 属性 | 类型 | 必填 | 说明 |  | SSID | string | 是 | Wi-Fi 的 SSID |  | BSSID | string | 是 | Wi-Fi 的 BSSID |  | secure | boolean | 是 | Wi-Fi 是否安全 |  | signalStrength | number | 是 | Wi-Fi 信号强度 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | SSID | string | 是 | Wi-Fi 的 SSID |
|  | BSSID | string | 是 | Wi-Fi 的 BSSID |
|  | secure | boolean | 是 | Wi-Fi 是否安全 |
|  | signalStrength | number | 是 | Wi-Fi 信号强度 |

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.getConnectedWifi({
   success: function(res){
       console.log(res.wifi)
   }
})
```
