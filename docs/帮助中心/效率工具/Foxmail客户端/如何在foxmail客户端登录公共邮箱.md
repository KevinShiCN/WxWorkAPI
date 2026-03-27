---
title: "如何在foxmail客户端登录公共邮箱"
source: "https://open.work.weixin.qq.com/help2/pc/19982"
crawl_date: "2026-03-26"
---

# 如何在foxmail客户端登录公共邮箱

公共邮箱是一种为企业内多人协同工作场景设计的邮箱形态，与成员个人邮箱相互独立。不支持绑定个人微信或手机号码，但支持通过账号授权码方式在第三方客户端登录和收发邮件。

### [](https://open.work.weixin.qq.com)一、在第三方客户端登录公共邮箱

#### [](https://open.work.weixin.qq.com)1、获取客户端授权码

（1）由管理员获取：
管理员可前往管理后台【协作->邮件->邮箱管理->公共邮箱】中，为指定公共邮箱生成授权码。
![](https://wework.qpic.cn/wwpic3az/818996_4bg1T_zFQGqmZ5q_1753060285/0)
![](https://wework.qpic.cn/wwpic3az/829514_g_Kci7AoQLSqmYb_1753060308/0)

（2）由公共邮箱使用成员获取：

- 公共邮箱使用成员在电脑网页版登录自己的企业邮箱。
- 在邮箱左上角切换至需要使用的【公共邮箱】。
- 进入公共邮箱的【设置->邮箱绑定】页面，即可获取“客户端授权码”。

**重要提示：**若成员从公共邮箱的使用列表中移除，其此前获取的授权码将同步失效。
![](https://wework.qpic.cn/wwpic/941136_4YmS02ZASeCapJs_1682561753/0)
![](https://wework.qpic.cn/wwpic/454675_ZqlE-lwQTMWRZD4_1682561704/0)

#### [](https://open.work.weixin.qq.com)2、在网页端开启IMAP/POP服务

请确保已在公共邮箱网页版的【设置->收发信设置】中，开启 IMAP/SMTP或 POP3/SMTP服务。
![](https://wework.qpic.cn/wwpic/421849_-a17pqlCRDarx7u_1682562614/0)

#### [](https://open.work.weixin.qq.com)3、在Foxmail客户端配置（以Foxmail为例）

- 下载并打开Foxmail客户端（下载地址：https://www.foxmail.com/）
- 点击【新建账号->选择->腾讯企业邮箱】
- 在登录界面，选择 “账号密码”登录方式（非扫码）。
- 输入公共邮箱完整账号和获取的客户端授权码。
- Foxmail默认使用IMAP协议配置。如需使用POP3协议，请在此页面选择 “手动设置”进行配置。

![](https://wework.qpic.cn/wwpic/749717_PiGb0YMSSRuB-Cf_1682563028/0)

#### [](https://open.work.weixin.qq.com)4、服务器配置信息（手动设置参考）

不区分使用的客户端（如Outlook、Thunderbird），均可参考以下服务器信息进行配置。

**IMAP/SMTP协议类型**
接收邮件服务器：imap.exmail.qq.com ，使用SSL，端口号993
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465

**POP3/SMTP协议类型**
接收邮件服务器：pop.exmail.qq.com ，使用SSL，端口号995
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465

### [](https://open.work.weixin.qq.com)二、常见问题

#### [](https://open.work.weixin.qq.com)1、通过网页、小程序切换登录公共邮箱，能否查看企业通讯录？

支持。登录公共邮箱后，可查看企业通讯录的权限，与公共邮箱的使用成员权限一致。

#### [](https://open.work.weixin.qq.com)2、Foxmail客户端登录公共邮箱是否会同步企业通讯录？

如果公共邮箱使用成员A通过网页登录公共邮箱并获取授权码，再用该授权码在Foxmail登录，则Foxmail内同步获取的是成员A有权查看的企业通讯录。
注意：使用管理后台生成的授权码在Foxmail登录公共邮箱，不支持同步企业通讯录。
