---
title: "Foxmail for Mac客户端设置"
source: "https://open.work.weixin.qq.com/help2/pc/19883"
crawl_date: "2026-03-26"
---

# Foxmail for Mac客户端设置

### [](https://open.work.weixin.qq.com)一、自动配置

Foxmail for Mac可以自动配置企业邮箱，完成邮件收发：
1、进入Foxmail for Mac客户端，选择【设置->添加邮箱账户】，在弹出的添加账户页面选择【腾讯企业邮->点击此处添加】，可使用企业微信APP扫码登录企业微信邮箱。
![](https://wework.qpic.cn/wwpic3az/270997_O3aBi_iDQLisXUa_1757644438/0)
2、创建成功。企业邮箱将默认使用IMAP协议接收邮件。
![](https://wework.qpic.cn/wwpic3az/591170_l3C748N3TBq7qfy_1757645080/0)

### [](https://open.work.weixin.qq.com)二、手动配置

在Foxmail for Mac中您也可以在添加企业邮箱时进行手动配置，方法是：
1、进入Foxmail for Mac客户端，选择【设置->添加邮箱账户】，在弹出的添加账户页面选择【腾讯企业邮->点击此处添加】，在弹出的添加账户页面选择【腾讯企业邮->点击此处添加->手动设置】填入完整的电子邮件地址、密码和客户端服务器配置企业微信邮箱。
注意：如已开启安全登录需要使用客户端专用密码：[如何获取客户端专用密码](https://open.work.weixin.qq.com/help2/pc/19902)
![](https://wework.qpic.cn/wwpic3az/84298_ELLUCAy-Q2S-Bl4_1757644544/0)
2、可以选择使用IMAP或POP来接收您的邮件。
如果选择POP类型，则请填写：
接收邮件服务器：pop.exmail.qq.com ，使用SSL，端口号995
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465

如果选择IMAP类型，则请填写：
接收邮件服务器：imap.exmail.qq.com ，使用SSL，端口号993
发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465
安全连接默认勾选。

### [](https://open.work.weixin.qq.com)三、常见问题

#### [](https://open.work.weixin.qq.com)1、客户端配置企业微信邮箱提示密码错误

网页端【登录邮箱->设置->邮箱绑定】中核查是否开启了安全登录，开启安全登录需生成客户端专用密码填写在第三方客户端密码框。

#### [](https://open.work.weixin.qq.com)2、如何开启腾讯企业邮箱的POP/IMAP/SMTP服务

开启客户端服务需通过电脑网页版登录企业邮箱【设置->收发信设置/客户端设置->开启服务】中开启IMAP/POP服务。
详情可参考：https://open.work.weixin.qq.com/help2/pc/19886

#### [](https://open.work.weixin.qq.com)3、网页端登录邮箱下「收发信设置」无法勾选客户端服务协议

请联系公司邮箱管理员，核查管理后台客户端服务范围是否有包含该成员。

#### [](https://open.work.weixin.qq.com)4、配置客户端只拉取了最近30天的邮件

网页端登录【邮箱->设置->收发信设置】查看是否收取范围设置的收取30天，可修改为全部后保存重启客户端看下。

#### [](https://open.work.weixin.qq.com)5、客户端配置imap协议后，网页端自定义文件夹邮件无法同步

需网页端【登录邮箱->设置->收发信设置】中核查是否勾选了“收取我的文件夹”，以及是否设置了“文件夹加锁区域”，若设置了加锁文件夹需解锁后重试，解锁方式参考：https://open.work.weixin.qq.com/help2/pc/19904
