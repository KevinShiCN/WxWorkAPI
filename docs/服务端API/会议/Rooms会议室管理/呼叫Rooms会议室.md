---
title: "呼叫Rooms会议室"
source: "https://developer.work.weixin.qq.com/document/path/98804"
last_update: ""
crawl_date: "2026-02-17"
---

# 呼叫Rooms会议室

会议可以通过会议室 ID 呼叫会议室邀请其入会。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/call?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meeting_id": "MEETINGID",
	"meeting_room_id": "ROOMID",
	"mra_address": {
		"protocol": 2,
		"dial_string": "xxx"
	}
}
```

    

**参数说明：**

        
[
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| meeting_id | 是 | 会议室 ID |
| meeting_room_id | 否 | 会议室 ID，与 mra_address 二选一 |
| mra_address | 否 | MRA 对象，详见MRA |

**MRA说明**

        

| 参数 | 说明 |
| --- | --- |
| protocol | 信令协议。1：SIP2：H.323 |
| dial_string | 信令地址。如果是 H.323 类型，输入 IP 地址或 E.164 号码。如果是 SIP 类型，输入 IP 地址或 URI。 |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"invite_id": "INVITEID" 
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| invite_id | 呼叫 ID |
