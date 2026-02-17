---
title: "获取健康上报任务ID列表"
source: "https://developer.work.weixin.qq.com/document/path/93677"
last_update: ""
crawl_date: "2026-02-17"
---

# 获取健康上报任务ID列表

通过此接口可以获取企业当前正在运行的上报任务ID列表。

**请求方式：**POST（**HTTPS**）
**请求地址：**https://qyapi.weixin.qq.com/cgi-bin/health/get_report_jobids?access_token=ACCESS_TOKEN

**请求包体：**

```
{
    "offset": 0,
    "limit": 100
}

```

**参数说明：**

| 参数 | 必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证 |
| offset | 否 | 分页，偏移量, 默认为0 |
| limit | 否 | 分页，预期请求的数据量，默认为100，取值范围 1 ~ 100 |

**权限说明：**

- 仅健康上报应用可调用。

**返回结果：**

```
{
   "errcode": 0,
   "errmsg": "ok",
   "ending":1,
   "jobids":[
        "jobid1",
        "jobid2"
   ]
}

```

**参数说明：**

| 参数 | 说明 |
| --- | --- |
| errcode | 返回码 |
| errmsg | 对返回码的文本描述内容 |
| ending | 是否结束。0：表示还有更多数据，需要继续拉取，1：表示已经拉取完所有数据 |
| jobids | 任务id |
