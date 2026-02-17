---
title: "ww.getContext"
source: "https://developer.work.weixin.qq.com/document/path/94315"
last_update: "2025/04/09"
crawl_date: "2026-02-17"
---

# ww.getContext

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

## Entry入口说明

### 联系人详情的入口

> 注意配置入口是在企业管理端--外部沟通管理--自定义详情页)

![](https://wework.qpic.cn/wwpic/392858_Z4lp-08nR1O3xaO_1589871476/0)配置之后，用户在终端查看外部联系人详情时，入口如下图：
![](https://wework.qpic.cn/wwpic/949416_Q1Bk_FXWRcyyZbu_1588835339/0)

### 工具栏的入口（单聊或群聊）

![](https://wework.qpic.cn/wwpic/667375_HvA5SFxZSIa6Ll-_1588835371/0)

### 聊天附件栏的入口

![](https://wework.qpic.cn/wwpic/881130_zJPgEp-RTYet_IA_1616058202/0)

### 内部群群看板的入口

配置入口在内部群的聊天信息-群看板（目前仅桌面端支持配置）：
![](https://wework.qpic.cn/wwpic3az/801149_EN-bcNLvR_aPtys_1742973646/0)

配置之后，桌面端查看入口：
![](https://wework.qpic.cn/wwpic3az/782105_k_jaKMY8SEKEbdA_1742974156/0)

移动端查看入口：
![](https://wework.qpic.cn/wwpic3az/738968_ZkxR_sHgQXyQ28i_1742975947/0)

### 特别注意

成员自定义对外信息的入口进入的，调用getContext返回的是**normal**（为什么呢？因为这里不涉及客户管理功能，并不能调用客户联系的相关接口），设置入口如下图：
![](https://wework.qpic.cn/wwpic/153609_3UzMOoKrRSG5QkH_1592207233/0)

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
