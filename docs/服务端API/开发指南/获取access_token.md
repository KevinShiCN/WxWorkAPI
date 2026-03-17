---
title: "获取access_token"
source: "https://developer.work.weixin.qq.com/document/path/91039"
last_update: "2024/03/26"
crawl_date: "2026-03-17"
---

# 获取access_token

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSI4IiBmaWxsPSIjQjM2NzFEIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDNDNy40NDc3MiAzIDcgMy40NDc3MiA3IDRWOEM3IDguNTUyMjggNy40NDc3MiA5IDggOUM4LjU1MjI4IDkgOSA4LjU1MjI4IDkgOFY0QzkgMy40NDc3MiA4LjU1MjI4IDMgOCAzWk04IDExQzcuNDQ3NzIgMTEgNyAxMS40NDc3IDcgMTJDNyAxMi41NTIzIDcuNDQ3NzIgMTMgOCAxM0M4LjU1MjI4IDEzIDkgMTIuNTUyMyA5IDEyQzkgMTEuNDQ3NyA4LjU1MjI4IDExIDggMTFaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==)注意为了安全考虑，开发者 **请勿** 将 access_token 返回给前端，需要开发者保存在后台，所有访问企业微信api的请求由后台发起

获取access_token是调用企业微信API接口的第一步，相当于创建了一个登录凭证，其它的业务API接口，都需要依赖于access_token来鉴权调用者身份。
因此开发者，在使用业务接口前，要明确access_token的颁发来源，使用正确的access_token。
**请求方式：** GET（**HTTPS**）
**请求地址：** https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ID&corpsecret=SECRET![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSI4IiBmaWxsPSIjMTU4ODMxIi8+PHBhdGggZD0iTTUgNS44NTkwOUM1IDYuMjczMyA1LjMzNTc5IDYuNjA5MDkgNS43NSA2LjYwOTA5QzYuMTY0MjEgNi42MDkwOSA2LjUgNi4yNzMzIDYuNSA1Ljg1OTA5SDVaTTcuMjUgOS4yNUM3LjI1IDkuNjY0MjEgNy41ODU3OSAxMCA4IDEwQzguNDE0MjEgMTAgOC43NSA5LjY2NDIxIDguNzUgOS4yNUg3LjI1Wk04LjEwMDA2IDcuOTY2MTNMOC4wNjkzMiA3LjIxNjc2TDguMTAwMDYgNy45NjYxM1pNOS41IDUuODU5MDlDOS41IDYuNTQ2MjkgOC45MDkgNy4xODIzMiA4LjA2OTMyIDcuMjE2NzZMOC4xMzA4IDguNzE1NUM5LjY4MzUzIDguNjUxODEgMTEgNy40Mzg2NyAxMSA1Ljg1OTA5SDkuNVpNNi41IDUuODU5MDlDNi41IDUuMTUzNDQgNy4xMjUxNCA0LjUgOCA0LjVWM0M2LjM4OTU4IDMgNSA0LjIzNTExIDUgNS44NTkwOUg2LjVaTTggNC41QzguODc0ODYgNC41IDkuNSA1LjE1MzQ0IDkuNSA1Ljg1OTA5SDExQzExIDQuMjM1MTEgOS42MTA0MiAzIDggM1Y0LjVaTTcuMjUgOC4wNjgxOFY5LjI1SDguNzVWOC4wNjgxOEg3LjI1Wk04LjA2OTMyIDcuMjE2NzZDNy42MzI4MyA3LjIzNDY3IDcuMjUgNy41OTAzOCA3LjI1IDguMDY4MThIOC43NUM4Ljc1IDguNDM1NTMgOC40NTY5MiA4LjcwMjEzIDguMTMwOCA4LjcxNTVMOC4wNjkzMiA3LjIxNjc2WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSI4IiBjeT0iMTIiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+)提示此处标注大写的单词 ID 和 SECRET，为需要替换的变量，根据实际获取值更新。其它接口也采用相同的标注，不再说明。

**参数说明：**

        
| 参数 | 必须 | 说明 |
| --- | --- | --- |
| corpid | 是 | 企业ID，获取方式参考：术语说明-corpid |
| corpsecret | 是 | 应用的凭证密钥，注意应用需要是启用状态，获取方式参考：术语说明-secret |

**权限说明：**
每个应用有独立的secret，获取到的access_token只能本应用使用，所以每个应用的access_token应该分开来获取

**返回结果：**

      
```javascript
{
   "errcode": 0,
   "errmsg": "ok",
   "access_token": "accesstoken000001",
   "expires_in": 7200
}
```

    
**参数说明：**

        
| 参数 | 说明 |
| --- | --- |
| errcode | 出错返回码，为0表示成功，非0表示调用失败 |
| errmsg | 返回码提示语 |
| access_token | 获取到的凭证，最长为512字节 |
| expires_in | 凭证的有效时间（秒） |

**注意事项：**
开发者需要缓存access_token，用于后续接口的调用（注意：不能频繁调用gettoken接口，否则会受到频率拦截）。当access_token失效或过期时，需要重新获取。

access_token的有效期通过返回的expires_in来传达，正常情况下为7200秒（2小时）。
由于企业微信每个应用的access_token是彼此独立的，所以进行缓存时需要区分应用来进行存储。
access_token至少保留512字节的存储空间。
企业微信可能会出于运营需要，提前使access_token失效，开发者应实现access_token失效时重新获取的逻辑。
