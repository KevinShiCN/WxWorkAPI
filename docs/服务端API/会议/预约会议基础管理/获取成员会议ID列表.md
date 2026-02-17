---
title: "获取成员会议ID列表"
source: "https://developer.work.weixin.qq.com/document/path/99050"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取成员会议ID列表

## 获取成员会议ID列表

通过此接口可以获取指定成员指定时间内的所有会议ID

**请求方式：**POST（**HTTPS**）
**请求地址：**https://qyapi.weixin.qq.com/cgi-bin/meeting/get_user_meetingid?access_token=ACCESS_TOKEN

**请求包体：**

```
{
    "userid": "USERID",
    "cursor": "cursor",
    "begin_time": 1586136317,
    "end_time": 1586236317,
    "limit": 100
}

```

**参数说明：**

| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证 |
| userid | 是 | 企业成员的userid |
| cursor | 否 | 上一次调用时返回的cursor，初次调用可以填”0” |
| limit | 否 | 每次拉取的数据量，默认值和最大值都为100 |
| begin_time | 否 | 开始时间 |
| end_time | 否 | 结束时间，时间跨度不超过180天。如果begin_time和end_time都没填的话，默认end_time为当前时间 |
| include_meetings_from_app | 否 | 是否要获取用户所有的会议列表，包括通过企业微信客户端和腾讯会议APP创建的。 |

**权限说明：**

- 系统应用「会议」可以拉取所有成员的会议ID
- 自建应用和第三方应用只能拉取该应用创建的会议ID

**返回结果：**

```
{
   "errcode": 0,
   "errmsg": "ok",
   "next_cursor": "1223",
   "meetingid_list":[
        "meetingid1",
        "meetingid2"
   ]
}

```

**参数说明：**

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| next_cursor | 当前数据最后一个key值，如果下次调用带上该值则从该key值往后拉，用于实现分页拉取，next_cursor为未返回或者为空字符串表示数据已取完 |
| meetingid_list | 会议ID列表，可能为空 |
