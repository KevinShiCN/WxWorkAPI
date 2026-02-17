---
title: "获取Rooms会议室详情"
source: "https://developer.work.weixin.qq.com/document/path/98793"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取Rooms会议室详情

根据会议室 ID 查询该会议室详细信息。

**请求方式：** POST（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/meeting/rooms/info?access_token=ACCESS_TOKEN
 
**请求包体：**

      
```
{
	"meeting_room_id": "RoomId001"
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
    "basic_info":{
        "rooms_id_list":[
            "200115200039985708"
        ],
        "meeting_room_name":"会议室测试1",
        "city":"广州",
        "building":"大厦",
        "floor":"10",
        "participant_number":3,
        "device":"ROOMS",
        "desc":"aGVsbG8=",
        "password":"MzMz"
    },
    "account_info":{
        "account_type":0,
        "valid_period":"-"
    },
    "hardware_info":{
        "factory":"",
        "device_model":"",
        "sn":"",
        "ip":"10.10.10.69",
        "mac":"a1:ee:27:c1:8a:1a",
        "rooms_version":"2.7.2.420",
        "firmware_version":"",
        "health_status":"ERROR",
        "system_type":"10.13.6",
        "meeting_room_status":1,
        "active_time":"2021-03-23 15:37:34",
        "cpu_info":"Intel(R) Core(TM) i7-7700K",
        "cpu_usage":"",
        "gpu_info":"",
        "net_type":"ethernet",
        "memory_info":"",
        "monitor_frequency":0,
        "camera_model":"FaceTime 高清摄像头（内建）",
        "enable_video_mirror":true,
        "microphone_info":"内建麦克风 ",
        "speaker_info":"内建输出"
    },
    "pmi_info":{
        "pmi_code":"12345678",
        "pmi_pwd":"XXXXXXX"
    },
    "monitor_status":0
    "is_allow_call":true,
    "scheduled_status":1
}
```

    

**参数说明：**

        

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| basic_info | 会议室基本信息，详见BasicInfo |
| account_info | 会议室账号信息，详见AccountInfo |
| hardware_info | 会议室硬件信息，详见HardwareInfo |
| pmi_info | 会议室PMI信息，详见MPIInfo |
| monitor_status | 告警通知状态：0：未开启1：已开启 |
| is_allow_call | 是否允许被呼叫：true：是false：否 |
| scheduled_status | 预定状态：0：未开放预定1：开放预定 |

 

**BasicInfo说明**

        

| 参数 | 说明 |
| --- | --- |
| rooms_id_list | 会议室 ID 列表 |
| meeting_room_name | 会议室名称 |
| city | 城市 |
| building | 建筑 |
| floor | 楼层 |
| participant_number | 容纳人数 |
| device | 会议室设备 |
| desc | 描述（base64） |
| password | 管理员密码（base64） |

**AccountInfo说明**

        

| 参数 | 说明 |
| --- | --- |
| account_type | 账号类型：0：普通1：专款2：试用 |
| valid_period | 有效期限（普通账号有效期限即企业账号的有效期限，固定返回“-”） |

**HardwareInfo说明**

        

| 参数 | 说明 |
| --- | --- |
| factory | 厂家 |
| device_model | 设备型号 |
| sn | 序列号 |
| ip | IP 地址 |
| mac | MAC 地址 |
| rooms_version | Rooms 版本 |
| firmware_version | 固件版本 |
| health_status | 健康状况 |
| system_type | 设备系统 |
| meeting_room_status | 会议室状态：0：未激活1：未绑定2：空闲3：使用中4：离线 |
| active_time | 激活时间 |
| cpu_info | CPU 信息 |
| cpu_usage | CPU 最大占用率 |
| gpu_info | GPU 信息 |
| net_type | 网络类型 |
| memory_info | 内存信息 |
| monitor_frequency | 显示器刷新率 |
| camera_model | 摄像头型号 |
| enable_video_mirror | 是否开启视频镜像 |
| microphone_info | 麦克风信息 |
| speaker_info | 扬声器信息 |

**PMIInfo说明**

        

| 参数 | 说明 |
| --- | --- |
| pmi_code | 会议室专属 ID |
| pmi_pwd | 入会密码（base64） |
