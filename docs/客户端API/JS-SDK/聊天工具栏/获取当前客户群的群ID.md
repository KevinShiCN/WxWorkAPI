---
title: "获取当前客户群的群ID"
source: "https://developer.work.weixin.qq.com/document/path/100747"
last_update: "2025/11/17"
crawl_date: "2026-02-17"
---

# 获取当前客户群的群ID

## ww.getCurExternalChat([params])

> 兼容性：企业微信 2.8.17 开始支持

### 功能描述

获取当前客户群的群 ID。

      **
      
```ts
ww.getCurExternalChat()
```

    
### 使用限制

- 本接口必须使用应用身份进行注册
- 从客户群或班级群的聊天工具栏进入页面时才可成功调用该接口
- 「营销获客」应用仅可获取该应用带来的客户群
- 不同的入口对应用及用户有相应的限制

        
| 入口 | getContext 接口返回的 entry 值 | 自建应用 | 第三方应用 | 用户 | 兼容性 |
| --- | --- | --- | --- | --- | --- |
| 外部群聊工具栏 | group_chat_tools | 需有客户联系功能权限 | 需有“企业客户权限->客户基础信息”权限 | 配置了客户联系功能 | 企业微信 2.8.17 |
| 班级群的聊天工具栏 | group_chat_tools | 所有 | 需有「家校沟通」使用权限 | 所有 | 企业微信 3.0.36 |
| 学生群的聊天工具栏 | group_chat_tools | 所有 | 需有「家校沟通」使用权限 | 所有 | 企业微信 4.0.8 |

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
|  | chatId | string | 是 | 当前客户群的群 ID |

### 错误信息

        
| errMsg | 说明 |
| --- | --- |
| getCurExternalChat:ok | 执行成功 |
| getCurExternalChat:fail no permission | 应用签名校验失败，或签名所使用的应用不满足权限要求 |
| getCurExternalChat:fail without context of external contact | 当前页面入口不支持调用 |

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.invoke('getCurExternalChat', {
        }, function(res){
        if(res.err_msg == "getCurExternalChat:ok"){
            chatId  = res.chatId ; //返回当前外部群的群聊ID
        }else {
            //错误处理
        }
    });
```
