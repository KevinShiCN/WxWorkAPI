---
title: "获取Rooms会议室资源"
source: "https://developer.work.weixin.qq.com/document/path/98809"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取Rooms会议室资源

查询企业购买的 Rooms 资源。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/inventory?access_token=ACCESS_TOKEN

**参数说明：**

        
[
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |

 

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"normal_count":10,
	"special_count":2,
	"normal_used_count":2,
	"special_used_count":1,
	"normal_expired_count":0,
	"special_expired_count":0
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| normal_count | 普通设备数 |
| special_count | 专款设备数 |
| normal_used_count | 普通设备使用数 |
| special_used_count | 专款设备使用数 |
| normal_expired_count | 普通设备过期数 |
| special_expired_count | 专款设备过期数 |
