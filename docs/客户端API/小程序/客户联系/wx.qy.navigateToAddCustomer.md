---
title: "wx.qy.navigateToAddCustomer"
source: "https://developer.work.weixin.qq.com/document/path/93864"
last_update: "2020/12/21"
crawl_date: "2026-02-17"
---

# wx.qy.navigateToAddCustomer

### wx.qy.navigateToAddCustomer(Object object)

> **调用前提：**
必须先调用过wx.qy.login，且session_key未过期，开发者可调用checkSession 检查当前登录态
当前成员必须在应用的可见范围
仅配置了客户联系功能的用户可调用，否则报错：no permission
应用需有客户联系功能权限（第三方应用需具有“企业客户权限->客户基础信息”权限），否则会报“no permission”错误
仅企业微信移动端3.0.36版本及以上可用

 

快速跳转到添加客户的界面

#### 参数

##### Object object

        
| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数 |
| fail | Function | 否 | 接口调用失败的回调函数 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

 

#### 示例代码：

      
```js
wx.qy.navigateToAddCustomer({
      success: function(res) {
        // 回调
      }
});
```
