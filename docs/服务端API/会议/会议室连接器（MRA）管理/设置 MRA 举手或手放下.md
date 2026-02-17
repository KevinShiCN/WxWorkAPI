---
title: "设置 MRA 举手或手放下"
source: "https://developer.work.weixin.qq.com/document/path/98788"
last_update: "2023/04/25"
crawl_date: "2026-02-17"
---

# 设置 MRA 举手或手放下

API创建的会议中对 MRA进行举手和手放下操作

 

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/mra/set_raise_hand?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```javascript
{
	"meetingid": "MEETINGID",
	"raise_hand": true,
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
| raise_hand | 是 | bool | MRA 设备举手操作：true：举手false：手放下 |
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

        
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errcode | int32 | 返回码 |
| errmsg | string | 对返回码的文本描述内容 |
