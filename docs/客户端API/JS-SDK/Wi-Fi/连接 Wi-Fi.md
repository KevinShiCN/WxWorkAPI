---
title: "连接 Wi-Fi"
source: "https://developer.work.weixin.qq.com/document/path/100543"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 连接 Wi-Fi

目录
- ww.connectWifi(params)
- 功能描述
- 参数说明
- params: Object
- 返回说明
- 旧版jweixin调用
- 示例代码

## ww.connectWifi(params)

> 兼容性：企业微信 iOS、Android 2.4.16 开始支持

### 功能描述

连接 Wi-Fi。

      
      
```ts
ww.connectWifi({
  SSID: 'vincenthome',
  BSSID: '8c:a6:df:c8:f7:4b',
  password: 'test1234',
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | SSID | string | 是 | Wi-Fi 设备 SSID |
|  | BSSID | string | 是 | Wi-Fi 设备 BSSID |
|  | password | string | 否 | Wi-Fi 设备密码 |
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

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.connectWifi({
  SSID: 'vincenthome',  // 设备SSID
  BSSID: '8c:a6:df:c8:f7:4b',  // 设备BSSID
  password: 'test1234',  // 设备密码
  success: function(res) {
    console.log(res.errMsg)
  }
})
```
