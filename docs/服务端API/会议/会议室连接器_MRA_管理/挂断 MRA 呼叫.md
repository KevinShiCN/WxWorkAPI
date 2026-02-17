---
title: "挂断 MRA 呼叫"
source: "https://developer.work.weixin.qq.com/document/path/98789"
last_update: ""
crawl_date: "2026-02-17"
---

# 挂断 MRA 呼叫

会议中对 MRA 的进行呼叫挂断操作。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/mra/hangup?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meetingid": "MEETINGID",
	"operated_user": {
		"tmp_openid": "TMP_OPENID",
		"instance_id": 1
	}
}
```

    

**参数说明：**

        
[

| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| meetingid | 是 | 会议ID |
| operated_user.tmp_openid | 是 | 被操作用户的会中临时ID |
| operated_user.instance_id | 是 | 被查询用户设备类型 : 9：voip、sip 设备 |

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
