---
title: "ww.register"
source: "https://developer.work.weixin.qq.com/document/path/94313"
last_update: "2024/11/26"
crawl_date: "2026-02-17"
---

# ww.register

## ww.register(options)

### 功能描述

注册应用信息。

      **
      
```ts
ww.register({
  corpId: 'ww7ca4776b2a70000',
  jsApiList: ['getExternalContact'],
  getConfigSignature
})
```

    
### 参数说明

#### options: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | corpId | string | 是 | 当前用户所属企业 ID |
|  | agentId | string \| number | 否 | 当前应用 AgentID |
|  | suiteId | string | 否 | 应用套件 ID |
|  | jsApiList | string[] | 否 | 需要使用的JS接口列表 |
|  | openTagList | string[] | 否 | 需要使用的开放标签列表，例如['wx-open-launch-app'] |
|  | getConfigSignature | Function | 否 | config 签名生成函数 |
|  | 参数url: string用于生成签名的 URL返回值Object \| Promise<Object>属性类型必填说明timestampstring \| number是生成签名的时间戳nonceStrstring是生成签名的随机串signaturestring是签名 |  | 属性 | 类型 | 必填 | 说明 |  | timestamp | string \| number | 是 | 生成签名的时间戳 |  | nonceStr | string | 是 | 生成签名的随机串 |  | signature | string | 是 | 签名 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | timestamp | string \| number | 是 | 生成签名的时间戳 |
|  | nonceStr | string | 是 | 生成签名的随机串 |
|  | signature | string | 是 | 签名 |
|  | onConfigSuccess | Function | 否 | config 成功回调 |
|  | 参数res: Object属性类型必填说明checkResultObject是jsApiList 权限检查结果errMsgstring是通用错误信息errCodenumber是通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | checkResult | Object | 是 | jsApiList 权限检查结果 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | checkResult | Object | 是 | jsApiList 权限检查结果 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | onConfigFail | Function | 否 | config 失败回调 |
|  | 参数res: Error \| Object属性类型必填说明errMsgstring是通用错误信息errCodenumber是通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | onConfigComplete | Function | 否 | config 完成回调 |
|  | 参数res: Error \| Object可能为以下类型属性类型必填说明errMsgstring是通用错误信息errCodenumber是通用错误码或属性类型必填说明checkResultObject是jsApiList 权限检查结果errMsgstring是通用错误信息errCodenumber是通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | checkResult | Object | 是 | jsApiList 权限检查结果 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | checkResult | Object | 是 | jsApiList 权限检查结果 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | getAgentConfigSignature | Function | 否 | agentConfig 签名生成函数 |
|  | 参数url: string用于生成签名的 URL返回值Object \| Promise<Object>属性类型必填说明timestampstring \| number是生成签名的时间戳nonceStrstring是生成签名的随机串signaturestring是签名 |  | 属性 | 类型 | 必填 | 说明 |  | timestamp | string \| number | 是 | 生成签名的时间戳 |  | nonceStr | string | 是 | 生成签名的随机串 |  | signature | string | 是 | 签名 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | timestamp | string \| number | 是 | 生成签名的时间戳 |
|  | nonceStr | string | 是 | 生成签名的随机串 |
|  | signature | string | 是 | 签名 |
|  | onAgentConfigSuccess | Function | 否 | agentConfig 成功回调 |
|  | 参数res: Object属性类型必填说明checkResultObject是jsApiList 权限检查结果errMsgstring是通用错误信息errCodenumber是通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | checkResult | Object | 是 | jsApiList 权限检查结果 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | checkResult | Object | 是 | jsApiList 权限检查结果 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | onAgentConfigFail | Function | 否 | agentConfig 失败回调 |
|  | 参数res: Error \| Object属性类型必填说明errMsgstring是通用错误信息errCodenumber是通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | onAgentConfigComplete | Function | 否 | agentConfig 完成回调 |
|  | 参数res: Error \| Object可能为以下类型属性类型必填说明errMsgstring是通用错误信息errCodenumber是通用错误码或属性类型必填说明checkResultObject是jsApiList 权限检查结果errMsgstring是通用错误信息errCodenumber是通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |  | 属性 | 类型 | 必填 | 说明 |  | checkResult | Object | 是 | jsApiList 权限检查结果 |  | errMsg | string | 是 | 通用错误信息 |  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | checkResult | Object | 是 | jsApiList 权限检查结果 |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |
|  | getSuiteConfigSignature | Function | 否 | suiteConfig 签名生成函数 |
|  | 参数url: string用于生成签名的 URL返回值Object \| Promise<Object>属性类型必填说明timestampstring \| number是生成签名的时间戳nonceStrstring是生成签名的随机串signaturestring是签名 |  | 属性 | 类型 | 必填 | 说明 |  | timestamp | string \| number | 是 | 生成签名的时间戳 |  | nonceStr | string | 是 | 生成签名的随机串 |  | signature | string | 是 | 签名 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | timestamp | string \| number | 是 | 生成签名的时间戳 |
|  | nonceStr | string | 是 | 生成签名的随机串 |
|  | signature | string | 是 | 签名 |

### 附加说明

**参数中的回调函数（如 `getConfigSignature`、`onConfigSuccess` 等）调用时机由 JSSDK 自行控制，开发者无需关心具体的调用顺序。在非微信、企业微信内置浏览器的环境下，JSSDK 不会主动调用 `getConfigSignature` 回调。**

## 旧版jweixin调用

> 此接口为旧版jweixin中进行应用身份鉴权的方式
在新版的wecom-jssdk.js中，统一使用ww.register进行身份注册，通过传入getAgentConfigSignature参数来进行应用身份权限的注册
如果你的应用正在使用旧版 jweixin-1.2.0.js进行接口调用，我们强烈建议进行升级

### 通过config注入企业身份权限

      
```javascript
wx.config({
    beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，企业微信的corpID，必须是本企业的corpID，不允许跨企业使用
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见 附录-JS-SDK使用权限签名算法
    jsApiList: [] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
});
```

    
### 通过agentConfig注入应用的权限

调用 wx.agentConfig需要引入 jwxwork sdk

      
```html
<script src="https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js"></script>
```

    
      
```javascript
wx.agentConfig({
    corpid: '', // 必填，企业微信的corpid，必须与当前登录的企业一致
    agentid: '', // 必填，企业微信的应用id （e.g. 1000247）
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录-JS-SDK使用权限签名算法
    jsApiList: ['selectExternalContact'], //必填，传入需要使用的接口名称
	success: function(res) {
        // 回调
    },
    fail: function(res) {
        if(res.errMsg.indexOf('function not exist') > -1){
            alert('版本过低请升级')
        }
    }
});
```

    
生成签名算法详见：附录-JS-SDK使用权限签名算法

> 注意，参数agentid为企业微信的应用id

**agentConfig的作用**
config注入的是企业的身份与权限，而agentConfig注入的是应用的身份与权限。尤其是当调用者为第三方服务商时，通过config无法准确区分出调用者是哪个第三方应用，而在部分场景下，又必须严谨区分出第三方应用的身份，此时即需要通过agentConfig来注入应用的身份信息。

**调用agentConfig的注意事项**

- agentConfig与config的签名算法完全一样，但是jsapi_ticket的获取方法不一样，请特别注意，查看"[获取应用身份的ticket](/document/path/90539#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E7%9A%84jsapi-ticket)".
- 企业微信3.0.24以前的老版本（可通过企业微信UA判断版本号），在调用wx.agentConfig之前，必须确保先成功调用wx.config
- 当前页面url中的域名必须是在该应用中设置的可信域名。
- agentConfig仅在企业微信2.5.0及以后版本支持，微信客户端不支持（微信开发者工具也不支持）
- 仅部分接口才需要调用agentConfig，需注意每个接口的说明
- 企业微信ios/mac 端如果出现 "wx.agentConfig undefined" 的报错，可将调用放在异步操作中进行，例如使用：setTimeout 包裹
