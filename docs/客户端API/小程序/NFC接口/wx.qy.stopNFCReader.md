---
title: "wx.qy.stopNFCReader"
source: "https://developer.work.weixin.qq.com/document/path/91528"
last_update: "2019/05/10"
crawl_date: "2026-02-17"
---

# wx.qy.stopNFCReader

### wx.qy.stopNFCReader(Object object)

> 需要用户授权

关闭 NFC 模块，仅支持安卓系统

#### 参数

##### Object object

        
| 属性 | 类型 | 默认值 | 是否必填 | 说明 | 支持版本 |  |
| --- | --- | --- | --- | --- | --- | --- |
| success | function |  | 否 | 接口调用成功的回调函数 |  |  |
| fail | function |  | 否 | 接口调用失败的回调函数 |  |  |
| complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |  |  |

 

**错误说明**

        
| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 0 | ok | 正常 |

 

#### 示例代码：

      
```js
wx.qy.stopNFCReader({
  success: (res) => {
    wx.showModal({
      title: 'NFC-Stop',
      content: JSON.stringify(res),
    })
  },
  fail: (res) => {
    console.log(JSON.stringify(res))
  }
})
```
