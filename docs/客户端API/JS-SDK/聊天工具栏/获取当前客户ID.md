---
title: "获取当前客户ID"
source: "https://developer.work.weixin.qq.com/document/path/100746"
last_update: "2025/11/17"
crawl_date: "2026-02-17"
---

# 获取当前客户ID

## ww.getCurExternalContact([params])

> 兼容性：企业微信 2.5.8 开始支持

### 功能描述

获取当前外部联系人 userId。

      **
      
```ts
ww.getCurExternalContact()
```

    
### 使用限制

- 本接口必须使用应用身份进行注册
- 「营销获客」应用只能获取到该应用带来的客户
- 不同的入口对应用及用户有相应的限制，目前支持的入口有联系人详情页、外部单聊工具栏

        
| getContext 接口返回的 entry 值 | 自建应用 | 第三方应用 | 用户 | 支持的最低版本 |
| --- | --- | --- | --- | --- |
| contact_profile | 客户联系功能权限 | 需有“企业客户权限->客户基础信息”权限 | 配置了客户联系功能 | 企业微信 2.5.8 |
| single_chat_tools | 客户联系功能权限 | 需有“企业客户权限->客户基础信息”权限 | 配置了客户联系功能 | 企业微信 2.8.10 |
| single_kf_tools | 所有 | 需有“微信客服权限->获取基础信息”权限 | 所有 | 企业微信 3.1.10 |

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
|  | userId | string | 是 | 当前外部联系人的 userId |

### 错误信息

        
| errMsg | 说明 |
| --- | --- |
| getCurExternalContact:ok | 执行成功 |
| getCurExternalContact:fail no permission | 应用签名校验失败或应用不满足权限条件 |
| getCurExternalContact:fail without context of external contact | 当前页面入口不支持调用 |

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.invoke('getCurExternalContact', {
        }, function(res){
        if(res.err_msg == "getCurExternalContact:ok"){
            userId  = res.userId ; //返回当前外部联系人userId
        }else {
            //错误处理
        }
    });
```
