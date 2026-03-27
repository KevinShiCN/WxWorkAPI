---
title: "常用邮件客户端软件POP/IMAP/EXCHANGE协议设置"
source: "https://open.work.weixin.qq.com/help2/pc/19886"
crawl_date: "2026-03-26"
---

# 常用邮件客户端软件POP/IMAP/EXCHANGE协议设置

### [](https://open.work.weixin.qq.com)一、如何开启腾讯企业邮箱的POP/IMAP/SMTP服务

为了保障用户邮箱的安全，企业邮箱设置了POP/SMTP/IMAP的开关。

#### [](https://open.work.weixin.qq.com)1、管理员后台开启成员邮箱POP/IMAP/SMTP服务

登录企业微信管理端【协作->邮件->安全管理->客户端访问权限】开启/修改POP/SMTP服务或者IMAP/SMTP服务范围。
注：管理后台未设置IMAP/SMTP或者POP/SMTP服务范围，那么成员邮箱无法启用IMAP/SMTP或者POP/SMTP服务。
![](https://wework.qpic.cn/wwpic3az/434266_3rKrUR16T32iXiX_1753062883/0)

#### [](https://open.work.weixin.qq.com)2、成员如何开启POP/IMAP/SMTP服务

电脑网页版登录企业邮箱【设置->收发信设置->开启服务】中开启服务。
![](https://wework.qpic.cn/wwpic/153374_tII631ifQ8-vVID_1692004631/0)

### [](https://open.work.weixin.qq.com)二、常用邮件客户端软件设置

您可以使用支持POP3/IMAP的客户端软件（例如Foxmail,Outlook以及其他PC或手机上的邮件客户端）收发您的邮件。
请准确配置您的电子邮件客户端，以在客户端上使用腾讯企业邮箱。

#### [](https://open.work.weixin.qq.com)1、通用配置参数

##### [](https://open.work.weixin.qq.com)①POP3/SMTP协议

接收邮件服务器：pop.exmail.qq.com ，使用SSL，端口号995
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465

##### [](https://open.work.weixin.qq.com)②IMAP协议/SMTP协议

接收邮件服务器：imap.exmail.qq.com ，使用SSL，端口号993
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465

电子邮件地址：企业邮箱完整邮件地址
密码：企业邮箱密码；若邮箱已开启安全登录需网页端登录企业邮箱【设置->邮箱绑定】中获取客户端授权码。
同时网页端企业邮箱【设置->收发信设置】中需开启POP3/IMAP客户端服务协议。
![](https://wework.qpic.cn/wwpic3az/71767_Su4zHv9bTWic9F8_1718954450/0)
![](https://wework.qpic.cn/wwpic3az/423181_o_ca-GQETjC2MXv_1718954479/0)

##### [](https://open.work.weixin.qq.com)③exchange协议

服务器：ex.exmail.qq.com  使用SSL，端口号443

#### [](https://open.work.weixin.qq.com)2、信创配置参数

**POP3/SMTP协议**
接收邮件服务器：xcpop.exmail.qq.com ，使用SSL，端口号995
发送邮件服务器：xcsmtp.exmail.qq.com ，使用SSL，端口号465

**IMAP协议/SMTP协议**
接收邮件服务器：xcimap.exmail.qq.com ，使用SSL，端口号993
发送邮件服务器：xcsmtp.exmail.qq.com ，使用SSL，端口号465

电子邮件地址：企业邮箱完整邮件地址
密码：企业邮箱密码；若邮箱已开启安全登录需网页端登录企业邮箱【设置->邮箱绑定】中获取客户端授权码。
同时网页端企业邮箱【设置->收发信设置】中需开启客户端服务协议。

**温馨提示：**企业开启信创邮箱后，客户端不支持配置exchange 协议。

### [](https://open.work.weixin.qq.com)三、常见问题

#### [](https://open.work.weixin.qq.com)1、客户端配置企业微信邮箱提示密码错误

网页端登录企业邮箱【设置->邮箱绑定】中核查是否开启了安全登录，开启安全登录需生成客户端专用密码填写在第三方客户端密码框。

#### [](https://open.work.weixin.qq.com)2、网页端登录邮箱下「收发信设置」无法勾选客户端服务协议

请联系公司邮箱管理员，核查管理后台客户端服务范围是否有包含该成员。

#### [](https://open.work.weixin.qq.com)3、imap协议和POP协议的区别是什么？

POP允许电子邮件客户端下载服务器上的邮件，但在电子邮件客户端的操作（如：移动邮件、标记已读、删除邮件等），这是不会反馈到服务器上;
IMAP协议在电子邮件客户端的操作都会反馈到服务器上，对邮件进行的操作（如：移动邮件、标记已读、删除邮件等），服务器上的邮件也会做相应的动作。
详情可以参考：[IMAP是什么？IMAP和POP有什么区别？](https://open.work.weixin.qq.com/help2/pc/19887)

#### [](https://open.work.weixin.qq.com)4、配置imap/pop/exchange协议，客户端只拉取最近30天的邮件/拉取邮件不全。

网页端登录企业邮箱【设置->收发信设置】查看是否收取范围未设置收取全部，可修改为全部后保存重启客户端看下。
详情可参考：[如何指定POP3、IMAP或Exchange收信时的收取设置](https://open.work.weixin.qq.com/help2/pc/19889)

#### [](https://open.work.weixin.qq.com)5、客户端配置imap协议后，网页端自定义文件夹邮件无法同步

需网页端登录企业邮箱【设置->收发信设置】中核查是否勾选了“收取我的文件夹”，以及是否设置了“文件夹加锁区域”，若设置了加锁文件夹需解锁后重试，解锁方式参考：[企业微信邮箱如何设置加锁/解锁「邮箱文件夹」](https://open.work.weixin.qq.com/help2/pc/19904)

#### [](https://open.work.weixin.qq.com)6、海外使用客户端配置腾讯企业微信邮箱，服务器设置是否需要加hw?

不需要，使用官方通用服务器配置参数即可。

#### [](https://open.work.weixin.qq.com)7、foxmail、Outlook等客户端发信后未同步至网页端【已发送】文件夹

若在Foxmail、Outlook等客户端通过SMTP方式发送邮件后，邮件未保存至网页端企业邮箱的【已发送】文件夹，请按以下步骤进行排查：

（1）检查网页端【收发信设置】
登录网页版企业邮箱【设置->收发信设置（客户端设置）】，确认是否已勾选“保存已发送至服务器”选项。如没有勾选，客户端发出的邮件将不会同步至网页端。勾选后，后续新发送的邮件可同步到网页端【已发送】文件夹。

（2）检查邮箱总邮件数是否已达上限
如已勾选“保存已发送到服务器”仍无法同步，请检查网页端邮件总封数是否已超过50w封（包含50w）。网页端登录企业邮箱，确保界面设置为标准模式（可在【设置->常规】中确认），进入【设置->文件夹与标签】或首页下方的【邮件清理助手】，查看当前邮件总数。若邮件数≥50w后，客户端已发送邮件不会同步网页端【已发送】文件夹，建议先对重要邮件进行本地备份，再清理部分邮件以释放空间。

注意：清理邮件后，后续在客户端新发送的邮件可正常同步至网页端，历史客户端已发送的邮件不会自动同步至网页端。
