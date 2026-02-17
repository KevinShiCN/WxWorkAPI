---
title: "监听 Wi-Fi 连接成功"
source: "https://developer.work.weixin.qq.com/document/path/100546"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 监听 Wi-Fi 连接成功

## ww.onWifiConnected(callback)

> 兼容性：企业微信 iOS、Android 2.4.16 开始支持

### 功能描述

监听 Wi-Fi 连接成功。

      **
      
```ts
ww.onWifiConnected(function(event) {
  console.log(event)
})
```

    
### 参数说明

#### callback: Function

**参数**

**event: Object**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
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
wx.onWifiConnected(function(res) {
   console.log(res.wifi)
})
```
