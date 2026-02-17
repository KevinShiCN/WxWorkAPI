---
title: "释放Rooms会议室"
source: "https://developer.work.weixin.qq.com/document/path/98792"
last_update: ""
crawl_date: "2026-02-17"
---

# 释放Rooms会议室

通过会议 ID 释放会议室，支持多个会议室释放。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/release?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meetingid": "MEETINGID",
	"meeting_room_id_list": ["RoomId001","RoomId002"]
}
```

    

**参数说明：**

        
[
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| meetingid | 是 | 会议ID |
| meeting_room_id_list | 是 | 会议室 ID 列表 |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok"
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
