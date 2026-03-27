---
title: "如何在新版outlook客户端配置腾讯企业邮箱"
source: "https://open.work.weixin.qq.com/help2/pc/21565"
crawl_date: "2026-03-26"
---

# 如何在新版outlook客户端配置腾讯企业邮箱

腾讯企业邮箱支持在outlook客户端配置收发邮件，下面以新版outlook客户端为例：

### [](https://open.work.weixin.qq.com)一、启动Outlook并手动配置账户

1、若outlook客户端未配置任何邮箱账户，打开outlook客户端页面会弹出添加账户页面。
2、若outlook客户端之前已绑定其他邮箱使用，需新增绑定邮箱地址，可打开Outlook客户端，点击添加账户。
![](https://wework.qpic.cn/wwpic3az/656276_-oRSQlmIT-6Ca3__1747212696/0)

### [](https://open.work.weixin.qq.com)二、填写账户信息

在弹出来的表单中，填入您需要添加的企业邮箱账号。
注意：需填写完整的企业邮箱账号。
![](https://wework.qpic.cn/wwpic3az/737340_Utw98AqrQh67ZzO_1747211876/0)

### [](https://open.work.weixin.qq.com)三、配置腾讯企业邮箱服务器

进入客户端服务器填写页面，选择【IMAP】，填写腾讯企业邮箱IMAP服务器信息进行配置。
注：若需要配置【POP】协议，可在页面点击“选择提供商”进入【选择电子邮件提供程序->POP协议】进行配置，在弹出的表单中，填写配置参数。
![](https://wework.qpic.cn/wwpic3az/864692_Ln1eOP1sTPSvFfx_1747211724/0)

**通用配置参数：**
POP3/SMTP协议
接收邮件服务器：pop.exmail.qq.com ，使用SSL，端口号：995
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号：465

IMAP协议/SMTP协议
接收邮件服务器：imap.exmail.qq.com ，使用SSL，端口号：993
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号：465

电子邮件地址：企业邮箱完整邮件地址
密码：【网页端登录邮箱->设置->邮箱绑定】中获取客户端授权码。
同时【网页端设置->收发信设置】中需开启客户端服务协议。

### [](https://open.work.weixin.qq.com)四、完成配置

全部设置完毕后，连续点两次“继续”，出现如下加载界面，加载结束后，即成功配置成功企业邮箱账号,在Outlook界面的左侧，可以看见添加成功的账号。
![](https://wework.qpic.cn/wwpic3az/530643_M4dhvEl3RMKW_3f_1747212114/0)

### [](https://open.work.weixin.qq.com)五、常见问题

#### [](https://open.work.weixin.qq.com)1、imap协议和POP协议的区别是什么？

POP允许电子邮件客户端下载服务器上的邮件，但在电子邮件客户端的操作（如：移动邮件、标记已读、删除邮件等），这是不会反馈到服务器上;
IMAP协议在电子邮件客户端的操作都会反馈到服务器上，对邮件进行的操作（如：移动邮件、标记已读、删除邮件等），服务器上的邮件也会做相应的动作。
详情可以参考：[IMAP是什么？IMAP和POP有什么区别](https://open.work.weixin.qq.com/help2/pc/19887)

#### [](https://open.work.weixin.qq.com)2、配置客户端只拉取了最近30天的邮件

网页端登录【邮箱->设置->收发信设置】查看是否收取范围设置的收取30天，可修改为全部后保存重启客户端看下。

#### [](https://open.work.weixin.qq.com)3、客户端配置imap协议后，网页端自定义文件夹邮件无法同步

需网页端【登录邮箱->设置->收发信设置】中核查是否勾选了“收取我的文件夹”，以及是否设置了“文件夹加锁区域”，若设置了加锁文件夹需解锁后重试，解锁方式参考：[企业微信邮箱如何设置加锁/解锁「邮箱文件夹」](https://open.work.weixin.qq.com/help2/pc/19904)

#### [](https://open.work.weixin.qq.com)4、outlook客户端配置企业邮箱后无法同步网页端通讯录或邮箱日历

目前outlook客户端配置企业邮箱imap/pop协议不支持同步网页端邮箱通讯录和邮箱日历。

#### [](https://open.work.weixin.qq.com)5、企业微信邮箱如何获取客户端授权码？

可以通过网页端登录企业邮箱【设置->邮箱绑定】，通过客户端专用密码设置项点击“生成新密码”。
![](https://wework.qpic.cn/wwpic3az/718561_KnhylGQdSRO00Wj_1747212366/0)
