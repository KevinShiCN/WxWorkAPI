---
title: "获取网络研讨会成员报名 ID"
source: "https://developer.work.weixin.qq.com/document/path/98873"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取网络研讨会成员报名 ID

- 描述： 支持查询网络研讨会中已报名成员的报名 ID，仅会议创建者可查询。
- 可通过会中成员的 ms_open_id 查询到对应的报名 ID，成员的 ms_open_id 可通过 [获取参会成员列表 接口获取。
- 成员的报名 ID 在每场会议是唯一的，可以通过 [查询会议报名信息 接口匹配其对应的报名信息。
- 如果传入的成员没有报名，则不会返回该成员的 ms_open_id 和报名 ID。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/webinars/enroll/get_attendee_id_list?access_token=ACCESS_TOKEN

**请求包体：**

      
```
{
	"meetingid": "MEETINGID",
	"userid": "USERID",
	"guests": {
		"guest_type": 1,
		"userid": "USERID",
		"area": 86,
		"phone_number": "13333333333",
		"guest_name": "NAME",
		"email": "xxxxx@yy.com"
	}
}
```

    

**参数说明：**

        

| 参数 | 必须 | 类型 | 说明 |
| --- | --- | --- | --- |
| meetingid | 是 |  |  |
| operator_id | 否 | String | 操作者 ID。会议创建者可以导入报名信息。operator_id 必须与 operator_id_type 配合使用。根据 operator_id_type 的值，operator_id 代表不同类型。operator_id_type=2，operator_id 必须和公共参数的 openid 一致。operator_id 和 userid 至少填写一个，两个参数如果都传了以 operator_id 为准。使用 OAuth 公参鉴权后不能使用 userid 为入参。 |
| operator_id_type | 否 | String | 操作者 ID 的类型：1：userid2：open_id如果 operator_id 和 userid 具有值，则以 operator_id 为准。 |
| meeting_id | 是 | String | 会议 ID。 |
| userid | 否 | String | 会议创建者的用户 ID。为了防止现网应用报错，此参数实则仍然兼容 openid，如无 oauth 应用使用报名接口则也可做成不兼容变更。 |
| instanceid | 是 | Integer | 用户的终端设备类型：0：PSTN1：PC2：Mac3：Android4：iOS5：Web6：iPad7：Android Pad8：小程序9：voip、sip 设备10：linux20：Rooms for Touch Windows21：Rooms for Touch MacOS22：Rooms for Touch Android30：Controller for Touch Windows32：Controller for Touch Android33：Controller for Touch iOS |
| sorting_rules | 否 | Integer | 查询报名 ID 的排序规则。当该账号存在多条报名记录（手机号导入、手动报名等）时，该接口返回的顺序。1：优先查询手机号导入报名，再查询用户手动报名，默认值。2：优先查询用户手动报名，再查手机号导入。 |
| ms_open_id_list | 是 | String 数组 | 当场会议的用户临时 ID（适用于所有用户）数组，单次最多支持500条。 |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok"
}
```

    

**参数说明**

        

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errcode | Integer | 返回码 |
| errmsg | String | 对返回码的文本描述内容 |
