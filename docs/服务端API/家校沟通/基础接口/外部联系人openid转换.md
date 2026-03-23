---
title: "外部联系人openid转换"
source: "https://developer.work.weixin.qq.com/document/path/92323"
last_update: "2020/01/12"
crawl_date: "2026-03-23"
---

# 外部联系人openid转换

企业和服务商可通过此接口，将**微信**外部联系人的userid（如何获取?）转为微信openid，用于调用支付相关接口。**暂不支持企业微信外部联系人（ExternalUserid为wo开头）的userid转openid**。

**请求方式：**POST（**HTTPS**）
**请求地址**：https://qyapi.weixin.qq.com/cgi-bin/externalcontact/convert_to_openid?access_token=ACCESS_TOKEN

**请求参数：**

      
```javascript
{
  "external_userid":"wmAAAAAAA"
}
```

    
**参数说明：**

        
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证 |
| external_userid | 是 | 外部联系人的userid，注意不是企业成员的账号 |

**返回结果：**

      
```javascript
｛
 "errcode":0,
 "errmsg":"ok",
 "openid":"ooAAAAAAAAAAA"
｝
```

    
**参数说明：**

        
| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| openid | 该企业的外部联系人openid |
