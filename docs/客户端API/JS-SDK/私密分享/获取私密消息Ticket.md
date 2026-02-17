---
title: "获取私密消息Ticket"
source: "https://developer.work.weixin.qq.com/document/path/100509"
last_update: "2025/03/27"
crawl_date: "2026-02-17"
---

# 获取私密消息Ticket

## ww.getContext([params])

> 兼容性：企业微信 3.0.24 开始支持

### 功能描述

获取当前页面打开场景。

      **
      
```ts
ww.getContext()
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
|  | entry | string | 是 | 进入页面的场景类型 |
|  | 合法值说明最低版本contact_profile从联系人详情进入single_chat_tools从单聊会话的工具栏进入group_chat_tools从群聊会话的工具栏进入chat_attachment从会话的聊天附件栏进入企业微信 3.1.6single_kf_tools从微信客服的工具栏进入企业微信 3.1.10chain_single_chat_tools上下游单聊会话的工具栏企业微信 4.0.8chain_group_chat_tools上下游群聊会话的工具栏企业微信 4.0.8internal_group_chat_board从内部群群看板进入企业微信 4.1.36normal除以上场景之外进入，例如工作台，聊天会话等 |  | 合法值 | 说明 | 最低版本 |  | contact_profile | 从联系人详情进入 |  |  | single_chat_tools | 从单聊会话的工具栏进入 |  |  | group_chat_tools | 从群聊会话的工具栏进入 |  |  | chat_attachment | 从会话的聊天附件栏进入 | 企业微信 3.1.6 |  | single_kf_tools | 从微信客服的工具栏进入 | 企业微信 3.1.10 |  | chain_single_chat_tools | 上下游单聊会话的工具栏 | 企业微信 4.0.8 |  | chain_group_chat_tools | 上下游群聊会话的工具栏 | 企业微信 4.0.8 |  | internal_group_chat_board | 从内部群群看板进入 | 企业微信 4.1.36 |  | normal | 除以上场景之外进入，例如工作台，聊天会话等 |  |
|  | 合法值 | 说明 | 最低版本 |
|  | contact_profile | 从联系人详情进入 |  |
|  | single_chat_tools | 从单聊会话的工具栏进入 |  |
|  | group_chat_tools | 从群聊会话的工具栏进入 |  |
|  | chat_attachment | 从会话的聊天附件栏进入 | 企业微信 3.1.6 |
|  | single_kf_tools | 从微信客服的工具栏进入 | 企业微信 3.1.10 |
|  | chain_single_chat_tools | 上下游单聊会话的工具栏 | 企业微信 4.0.8 |
|  | chain_group_chat_tools | 上下游群聊会话的工具栏 | 企业微信 4.0.8 |
|  | internal_group_chat_board | 从内部群群看板进入 | 企业微信 4.1.36 |
|  | normal | 除以上场景之外进入，例如工作台，聊天会话等 |  |
|  | shareTicket | string | 否 | 从设置了 withShareTicket: true 的消息进入时返回该字段，用于私密分享 |

### 使用说明

调用该接口可以判断用户是从哪个入口打开页面，从而决定是否可以调用客户联系相关的接口。

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.invoke('getContext', {
        }, function(res){
        if(res.err_msg == "getContext:ok"){
            entry  = res.entry ; //返回进入H5页面的入口类型，目前有normal、contact_profile、single_chat_tools、group_chat_tools、chat_attachment
            shareTicket = res.shareTicket; //可用于调用getShareInfo接口
        }else {
            //错误处理
        }
    });
```
