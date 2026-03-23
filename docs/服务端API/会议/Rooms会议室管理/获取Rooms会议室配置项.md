---
title: "获取Rooms会议室配置项"
source: "https://developer.work.weixin.qq.com/document/path/98802"
last_update: "2023/05/30"
crawl_date: "2026-03-23"
---

# 获取Rooms会议室配置项

获取Rooms会议室的配置项。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/get_config?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```javascript
{
	"meeting_room_id": "ROOMID"
}
```

    
**参数说明：**

        
| 参数 | 必须 | 类型 | 说明 |
| --- | --- | --- | --- |
| access_token | 是 | string | 调用接口凭证。获取方法查看“获取access_token” |
| meeting_room_id | 是 | string | Rooms会议室 ID |

**返回结果：**

      
```javascript
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
		"download_record":true
	}
}
```

    
**参数说明：**

        
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errcode | int32 | 返回码 |
| errmsg | string | 对返回码的文本描述内容 |
| meeting_settings | object | Rooms会议室会议配置对象，详见MeetingSettings |
| record_settings | object | Rooms会议室录制配置对象，详见RecordSettings |

**MeetingSettings说明**

        
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| water_mark | uint32 | 水印。0：关闭1：单排水印2：多排水印 |
| auto_response | uint32 | 自动接听。1：开启2：关闭 |
| caption | bool | 字幕。true：开启false：关闭 |
| room_pmi | bool | 专属 ID。true：开启false：关闭 |
| room_notification | bool | Rooms 屏幕是否展示消息通知。true：开启false：不开启 |

**RecordSettings说明**

        
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| share_record | uint32 | 分享云录制。0：关闭分享1：全部成员可查看2：仅登录成员可查看3：仅同企业成员可查看4：仅参会成员可查看 |
| download_record | bool | 是否允许下载云录制。true：开启false：关闭 |
