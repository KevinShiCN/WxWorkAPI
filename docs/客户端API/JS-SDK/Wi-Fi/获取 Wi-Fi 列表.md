---
title: "获取 Wi-Fi 列表"
source: "https://developer.work.weixin.qq.com/document/path/100544"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 获取 Wi-Fi 列表

目录
- ww.getWifiList([params])
- 功能描述
- 参数说明
- params: Object
- 返回说明
- 旧版jweixin调用
- 示例代码

## ww.getWifiList([params])

> 兼容性：企业微信 iOS、Android 2.4.16 开始支持

### 功能描述

获取 Wi-Fi 列表。

      
      
```ts
ww.getWifiList()
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

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.getWifiList({
  success: function(res) {
      console.log(res.errMsg)
  }
})
```
