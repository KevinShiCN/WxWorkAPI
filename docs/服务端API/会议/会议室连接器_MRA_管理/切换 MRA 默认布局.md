---
title: "切换 MRA 默认布局"
source: "https://developer.work.weixin.qq.com/document/path/98787"
last_update: ""
crawl_date: "2026-02-17"
---

# 切换 MRA 默认布局

会议中对 MRA 的默认布局进行设置。如果当前 MRA 已显示会议自定义布局或个性布局或焦点视频，则不支持进行默认布局设置。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/mra/set_layout?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meetingid": "MEETINGID",
	"instance_id": 1,
	"query_tmp_openid": "TMP_OPENID",
	"query_instance_id": 9
}
```

    

**参数说明：**

        
[
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证。获取方法查看“获取access_token” |
| meetingid | 是 | 会议ID |
| instance_id | 是 | 设备类型 ID |
| query_tmp_openid | 是 | 被查询用户临时身份 ID |
| query_instance_id | 是 | 被查询用户设备类型 ID |

**返回结果：**

      
```
{
	"errcode": 0,
	"errmsg": "ok",
	"tmp_openid": "TMP_OPENID",
	"instance_id": 9,
	"user_role": 0,
	"webinar_member_role": 0,
	"IP": "192.168.2.2",
	"name":"user2",
	"audio_state":true,
	"video_state":false,
	"screen_shared_state":false,
	"default_layout":1,
	"raise_hands_state":false
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| tmp_openid | 当场会议的用户临时 ID，可用于会控操作，适用于所有用户 |
| instance_id | 用户的终端设备类型 ID |
| user_role | 用户角色： 0：普通成员角色 1：创建者角色 2：主持人 3：创建者+主持人 4：游客 5：游客+主持人 6：联席主持人 7：创建者+联席主持人 |
| webinar_member_role | 网络研讨会成员角色：0：普通参会角色 1：内部嘉宾2：外部嘉宾3：邀请链接入会嘉宾4：观众 |
| IP | 用户的 IP 地址。当用户在会中时才能返回 |
| name | 用户当前显示名称 |
| audio_state | 麦克风状态：true：开启false：关闭 |
| video_state | 摄像头状态：true：开启false：关闭 |
| screen_shared_state | 屏幕共享状态：true：开启false：关闭 |
| default_layout | 当前成员的默认分屏设置：1：等分模式2：全屏模式3：1+N |
| raise_hands_state | 举手状态：true：举手中false：手放下 |
