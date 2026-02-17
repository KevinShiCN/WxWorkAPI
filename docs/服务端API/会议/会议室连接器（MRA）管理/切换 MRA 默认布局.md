---
title: "切换 MRA 默认布局"
source: "https://developer.work.weixin.qq.com/document/path/98787"
last_update: "2023/04/25"
crawl_date: "2026-02-17"
---

# 切换 MRA 默认布局

会议中对 MRA 的默认布局进行设置。如果当前 MRA 已显示会议自定义布局或个性布局或焦点视频，则不支持进行默认布局设置。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/mra/set_default_layout?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```javascript
{
	"meetingid": "MEETINGID",
	"default_layout": 2,
	"default_novideo_user": 1,
	"mra": {
		"tmp_openid": "TMP_OPENID"
	}
}
```

    
**参数说明：**

        
| 参数 | 必须 | 类型 | 说明 |
| --- | --- | --- | --- |
| access_token | 是 | string | 调用接口凭证。获取方法查看“获取access_token” |
| meetingid | 是 | string | 会议ID |
| default_layout | 是 | int32 | 当前成员的默认分屏设置：1：等分模式2：全屏模式3：1+N |
| default_novideo_user | 是 | int32 | 默认非视频与会者在分屏中显示方式：1：显示2：隐藏 |
| mra.tmp_openid | 是 | string | 被操作 mra 设备 的会中临时ID |

 

**权限说明**

- 仅配置在“可调用接口的应用”列表中的自建应用可调用
- 仅允许修改该应用创建的会议的数据

 

**返回结果：**

      
```javascript
{
	"errcode": 0,
	"errmsg": "ok"
}
```

    
**参数说明：**

        
| 参数 | 说明 |  |
| --- | --- | --- |
| errcode | int32 | 返回码 |
| errmsg | string | 对返回码的文本描述内容 |
