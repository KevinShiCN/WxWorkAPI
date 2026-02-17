---
title: "获取Rooms会议室配置项"
source: "https://developer.work.weixin.qq.com/document/path/98802"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取Rooms会议室配置项

查询会议室的配置项。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/config_info?access_token=ACCESS_TOKEN
 
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
| meeting_room_id | 是 | 会议室 ID |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"meeting_settings": {
		"water_mark":2,
		"auto_response":1,
		"caption":true,
		"room_pmi":true,
		"room_notification":true
	},
	"record_settings":{
		"share_record":0,
		"dowload_record":true
	}
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| meeting_settings | 会议室会议配置对象，详见MeetingSettings |
| record_settings | 会议室录制配置对象，详见RecordSettings |

**MeetingSettings说明**

        

| 参数 | 说明 |
| --- | --- |
| water_mark | 水印。0：关闭1：单排水印2：多排水印 |
| auto_response | 自动接听。1：开启2：关闭 |
| caption | 字幕。true：开启false：关闭 |
| room_pmi | 专属 ID。true：开启false：关闭 |
| room_notification | Rooms 屏幕是否展示消息通知。true：开启false：不开启 |

**RecordSettings说明**

        

| 参数 | 说明 |
| --- | --- |
| share_record | 分享云录制。0：关闭分享1：全部成员可查看2：仅登录成员可查看3：仅同企业成员可查看4：仅参会成员可查看 |
| dowload_record | 是否允许下载云录制。true：开启false：关闭 |
