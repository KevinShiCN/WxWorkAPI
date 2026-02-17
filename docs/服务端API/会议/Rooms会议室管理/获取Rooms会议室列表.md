---
title: "获取Rooms会议室列表"
source: "https://developer.work.weixin.qq.com/document/path/98795"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取Rooms会议室列表

查询企业下的会议室列表。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/list?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meeting_room_name": "ROOMNAME",
	"cursor": "CURSOR",
	"limit": 50
}
```

    

**参数说明：**

        
[
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| meeting_room_name | 否 | 会议室名称（支持模糊匹配查找） |
| cursor | 否 | 分页查询用，将上一个请求返回的next_cursor字段传入。第一次查询时可不传值 |
| limit | 否 | 分页大小，从1开始，最大50，默认20 |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"has_more": true,
	"next_cursor": "CURSOR",
	"meeting_room_list":[
		{
			"meeting_room_id":"100001",
			"meeting_room_name":"会议室测试1",
			"meeting_room_location":"广州-大厦-10",
			"account_type":1,
			"active_code":"69MS2PKC",
			"participant_number":12,
			"meeting_room_status":1,
			"scheduled_status":0
			"is_allow_call":true
		},
		{
			"meeting_room_id":"100002",
			"meeting_room_name":"会议室测试2",
			"meeting_room_location":"广州-大厦-11",
			"account_type":1,
			"active_code":"69MS2PKC",
			"participant_number":12,
			"meeting_room_status":1,
			"scheduled_status":0
			"is_allow_call":true
		}
	]
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| has_more | 是否还有更多会议室列表 |
| next_cursor | 分页用，has_more为true时，下一次拉取列表将该字段填入cursor字段 |
| meeting_room_list | 会议室对象列表，详见MeetingRoom |

**MeetingRoom说明**

        

| 参数 | 说明 |
| --- | --- |
| meeting_room_id | 会议室 ID |
| meeting_room_name | 会议室名称 |
| meeting_room_location | 会议室地址 |
| account_type | 账号类型：0：普通1：专款2：试用 |
| active_code | 激活码 |
| participant_number | 容纳人数 |
| meeting_room_status | 会议室状态：0：未激活1：未绑定2：空闲3：使用中4：离线 |
| scheduled_status | 预定状态：0：未开放预定1：开放预定 |
| is_allow_call | 是否允许被呼叫：true：是false：否 |
