---
title: "获取电话入会的成员ID"
source: "https://developer.work.weixin.qq.com/document/path/98825"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取电话入会的成员ID

- 会议创建者、主持人、联席主持人可以查询 PSTN 的 tmp_openid。
- tmp_openid 是 PSTN 的识别标识，用户拨号进入后，在实时参会列表等 API 及 Webhook 中可以获取。
- 由于可能出现一个座机号同时拨入的情况，所以同一个座机号可能对应多个 tmp_openid。
- 仅当 PSTN 接通后，该接口会返回对应的 tmp_openid。
- 支持查询会议下 PSTN 的历史 tmp_openid 列表。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/phone/get_tmp_openid?access_token=ACCESS_TOKEN

**请求包体：**

      
```
{
	"meetingid": "MEETINGID",
	"userid": "USERID",
	"phone_numbers": [
		{
			"area": 86,
			"phone": "13333333333,
			"extension_number": "12345678"
		}
	]
}
```

    

**参数说明：**

        

| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| meetingid | 是 | 会议ID |
| userid | 是 | 操作者 ID。会议创建者、主持人、联席主持人可以调用该接口。 |
| phone_numbers | 是 | 外呼的电话号码对象数组。详见PhoneNumber。 |

**PhoneNumber说明**

        

| 参数 | 必须 | 说明 |
| --- | --- | --- |
| area | 是 | 国家/地区代码。（例如：中国是86） |
| phone | 是 | 电话号码或固定电话总机号 |
| extension_number | 否 | 固定电话分机号 |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"tmp_openid_list": [
		{
			"area": 86,
			"phone": "13333333333,
			"extension_number": "12345678",
			"tmp_openid": "TMP_OPENID"
		}
	]
}
```

    

**参数说明**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| tmp_openid_list | 返回的 ms_open_id 对象数组。详见TmpOpenId。 |

**TmpOpenId**

        

| 参数 | 说明 |
| --- | --- |
| area | 国家/地区代码。（例如：中国是86） |
| phone | 电话号码或固定电话总机号 |
| extension_number | 固定电话分机号 |
| tmp_openid | 当场会议的用户临时 ID，可用于会控操作，适用于所有用户。 |
