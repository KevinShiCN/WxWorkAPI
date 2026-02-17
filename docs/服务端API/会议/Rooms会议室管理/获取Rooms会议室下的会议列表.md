---
title: "获取Rooms会议室下的会议列表"
source: "https://developer.work.weixin.qq.com/document/path/98796"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取Rooms会议室下的会议列表

查询指定会议室下的会议列表。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/list_meetings?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"start_time": 1679299200,
	"end_time": 1679558400,
	"cursor": "CURSOR",
	"limit": 20
}
```

    

**参数说明：**

        
[
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| start_time | 否 | Unix 时间戳。查询起始时间，时间区间不超过90天 |
| end_time | 否 | Unix 时间戳。查询结束时间，时间区间不超过90天 |
| cursor | 否 | 分页查询用，将上一个请求返回的next_cursor字段传入。第一次查询时可不传值 |
| limit | 否 | 分页大小，默认20条，最大20条 |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"has_more": true,
	"next_cursor": "CURSOR",
	"meeting_info_list":[
		{
			"meeting_id": "100001",
			"meeting_code": "14512",
			"subject": "周会",
			"status": "",
			"meeting_type": 0,
			"start_time": 1679313600,
			"end_time": 1679317200,
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
| meeting_info_list | 会议对象列表，详见MeetingInfo |

**MeetingInfo说明**

        

| 参数 | 说明 |
| --- | --- |
| meeting_id | 会议 ID |
| meeting_code | 有效会议 Code |
| subject | 会议主题 |
| status | 会议状态 |
| meeting_type | 会议类型：0：一次性会议。1：周期性会议。2：微信专属会议。4：rooms 投屏会议。5：个人会议号会议。6：网络研讨会（Webinar）。 |
| start_time | 会议预订开始时间（Unix 秒） |
| end_time | 会议预订结束时间（Unix 秒） |
