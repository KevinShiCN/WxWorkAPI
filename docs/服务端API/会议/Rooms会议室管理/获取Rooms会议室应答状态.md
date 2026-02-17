---
title: "获取Rooms会议室应答状态"
source: "https://developer.work.weixin.qq.com/document/path/98806"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取Rooms会议室应答状态

一个会议可以查询它所呼叫的会议室对其的应答状态。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/call_info?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meetingid": "MEETINGID",
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
| meetingid | 是 | 会议 ID |
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
	"errmsg": "ok"
	"status": 2,
	"response_time": "2022/11/22 14:35:26"
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| status | 应答状态：0：无应答，60秒无回应1：未呼叫2：入会中3：被拒绝4：呼叫中5：取消呼叫（仅 Rooms 会议室有该状态）6：已离会 |
| response_time | 最近一次应答时间 |
