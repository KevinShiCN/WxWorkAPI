---
title: "ww.getSignature"
source: "https://developer.work.weixin.qq.com/document/path/100694"
last_update: "2024/10/23"
crawl_date: "2026-02-17"
---

# ww.getSignature

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSI4IiBmaWxsPSIjQjM2NzFEIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDNDNy40NDc3MiAzIDcgMy40NDc3MiA3IDRWOEM3IDguNTUyMjggNy40NDc3MiA5IDggOUM4LjU1MjI4IDkgOSA4LjU1MjI4IDkgOFY0QzkgMy40NDc3MiA4LjU1MjI4IDMgOCAzWk04IDExQzcuNDQ3NzIgMTEgNyAxMS40NDc3IDcgMTJDNyAxMi41NTIzIDcuNDQ3NzIgMTMgOCAxM0M4LjU1MjI4IDEzIDkgMTIuNTUyMyA5IDEyQzkgMTEuNDQ3NyA4LjU1MjI4IDExIDggMTFaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==)注意该方法仅用于本地调试，请勿在生产环境对外暴露 JSAPI_TICKET

 

## ww.getSignature(ticket)

### 功能描述

根据 ticket 生成 jsapi 签名

### 参数说明

#### ticket: string

用于签名的 jsapi ticket

### 返回说明

**Object**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | timestamp | string \| number | 是 | 生成签名的时间戳 |
|  | nonceStr | string | 是 | 生成签名的随机串 |
|  | signature | string | 是 | jsapi 签名 |

## ww.getSignature(options)

### 功能描述

根据提供的参数生成 jsapi 签名

### 参数说明

#### options: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | ticket | string | 是 | 用于签名的 jsapi ticket |
|  | nonceStr | string | 否 | 生成签名的随机串 |
|  | timestamp | string \| number | 否 | 生成签名的时间戳 |
|  | url | string | 否 | 当前页面的 URL |

### 返回说明

**Object**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | timestamp | string \| number | 是 | 生成签名的时间戳 |
|  | nonceStr | string | 是 | 生成签名的随机串 |
|  | signature | string | 是 | jsapi 签名 |
