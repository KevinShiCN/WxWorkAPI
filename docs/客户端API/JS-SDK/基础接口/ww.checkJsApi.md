---
title: "ww.checkJsApi"
source: "https://developer.work.weixin.qq.com/document/path/94312"
last_update: "2024/11/26"
crawl_date: "2026-02-17"
---

# ww.checkJsApi

## ww.checkJsApi(params)

### 功能描述

判断当前客户端版本是否支持指定 JS 接口。

      **
      
```ts
ww.checkJsApi({
  jsApiList: ['chooseImage']
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | jsApiList | string[] | 是 | JS 接口列表 |
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
|  | checkResult | Object | 是 | 检查结果以键值对的形式返回，接口可用时为 true，不可用为 false |

## 旧版jweixin 调用

### 代码示例

      
```js
wx.checkJsApi({
  jsApiList: ['chooseImage'],
  success(res) {
    console.log(res)
  }
})
```
