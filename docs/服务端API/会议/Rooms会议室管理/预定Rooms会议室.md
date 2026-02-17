---
title: "预定Rooms会议室"
source: "https://developer.work.weixin.qq.com/document/path/98791"
last_update: ""
crawl_date: "2026-02-17"
---

# 预定Rooms会议室

对成功预定的会议添加会议室，支持多个会议室预定。（说明：会议室预定对会议时长有硬性要求，会议时长不得小于15分钟且不得大于24小时；不支持周期性会议。）

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/book?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meetingid": "MEETINGID",
	"meeting_room_id_list": ["RoomId001","RoomId002"],
	"subject_visible": true
}
```

    

**参数说明：**

        
[

| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| meetingid | 是 | 会议ID |
| meeting_room_id_list | 是 | 会议室 ID 列表 |
| subject_visible | 否 | 在会议开始前的一小时内，是否在 Room 上显示会议主题， 默认值为 true。true：显示false：不显示。说明：该参数并不影响预定时间晚过当前时间一个小时以上的会议。超过一小时的会议默认不显示会议主题。 |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"meeting_room_number": 2,
	"meeting_room_list":[
		{
			"meeting_room_id":"100001",
			"meeting_room_name":"会议室测试1",
			"meeting_room_location":"广州-大厦-10"
		},
		{
			"meeting_room_id":"100002",
			"meeting_room_name":"会议室测试2",
			"meeting_room_location":"广州-大厦-11"
		}
	]
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| meeting_room_number | 会议室数量 |
| meeting_room_list | 会议室对象列表，详见MeetingRoom |

**MeetingRoom说明**

        

| 参数 | 说明 |
| --- | --- |
| meeting_room_id | 会议室 ID |
| meeting_room_name | 会议室名称 |
| meeting_room_location | 会议室地址 |
