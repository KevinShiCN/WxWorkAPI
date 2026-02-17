---
title: "获取上下游互联群ID"
source: "https://developer.work.weixin.qq.com/document/path/100368"
last_update: "2025/03/27"
crawl_date: "2026-02-17"
---

# 获取上下游互联群ID

## ww.getCurCorpGroupChat([params])

> 兼容性：企业微信 4.0.12 开始支持

### 功能描述

页面在聊天工具栏中打开时，获取当前上下游互联群的群 ID.

      **
      
```javascript
ww.getCurCorpGroupChat()
```

    
### 使用限制

- 仅支持上下游聊天工具栏中进入的页面调用，即 getContext 返回 `entry` 为 `chain_single_chat_tools` 或 `chain_group_chat_tools` 的场景
- 本接口必须使用应用身份进行注册
- 当前成员必须在应用的可见范围

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
|  | chatId | string | 是 | 当前互联群的群 ID |

### 错误信息

        
| errMsg | 说明 |
| --- | --- |
| getCurCorpGroupChat:ok | 执行成功 |
| getCurCorpGroupChat:no permission | 应用身份鉴权失败 |
| getCurCorpGroupChat:without context of corpgroup contact | 当前页面入口不支持调用 |

## 旧版jweixin调用

### 代码示例

      
```javascript
wx.invoke('getCurCorpGroupChat', {
        }, function(res){
        if(res.err_msg == "getCurCorpGroupContact:ok"){
            chatId = res.chatId; // 返回当前互联群的群ID
        }else {
            //错误处理
        }
    });
```
