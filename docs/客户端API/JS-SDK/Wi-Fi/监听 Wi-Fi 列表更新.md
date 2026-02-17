---
title: "监听 Wi-Fi 列表更新"
source: "https://developer.work.weixin.qq.com/document/path/100545"
last_update: "2025/08/19"
crawl_date: "2026-02-17"
---

# 监听 Wi-Fi 列表更新

## ww.onGetWifiList(callback)

> 兼容性：企业微信 Android 2.4.16 开始支持

### 功能描述

监听 Wi-Fi 列表更新。

      **
      
```ts
ww.onGetWifiList(function(event) {
  console.log(event)
})
```

    
### 参数说明

#### callback: Function

**参数**

**event: Object**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | wifiList | Object[] | 是 | Wi-Fi 列表数据 |
|  | 属性类型必填说明SSIDstring是Wi-Fi 的 SSIDBSSIDstring是Wi-Fi 的 BSSIDsecureboolean是Wi-Fi 是否安全signalStrengthnumber是Wi-Fi 信号强度 |  | 属性 | 类型 | 必填 | 说明 |  | SSID | string | 是 | Wi-Fi 的 SSID |  | BSSID | string | 是 | Wi-Fi 的 BSSID |  | secure | boolean | 是 | Wi-Fi 是否安全 |  | signalStrength | number | 是 | Wi-Fi 信号强度 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | SSID | string | 是 | Wi-Fi 的 SSID |
|  | BSSID | string | 是 | Wi-Fi 的 BSSID |
|  | secure | boolean | 是 | Wi-Fi 是否安全 |
|  | signalStrength | number | 是 | Wi-Fi 信号强度 |

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.onGetWifiList(function(res) {
  if (res.wifiList.length) {
       for(var i = 0; i < res.wifiList.length; i++)
       {
           console.log("=====wifiList======")
           console.log("SSID:"  +  res.wifiList[i].SSID)
           console.log("BSSID:" + res.wifiList[i].BSSID)
           console.log("secure:" + res.wifiList[i].secure)
           console.log("secure:" + res.wifiList[i].signalStrength)
           console.log("====================")
        }
  }
})
```
