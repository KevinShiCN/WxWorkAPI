---
title: "如何使用iPhone自带的邮件客户端管理企业微信邮箱？"
source: "https://open.work.weixin.qq.com/help2/pc/19872"
crawl_date: "2026-03-26"
---

# 如何使用iPhone自带的邮件客户端管理企业微信邮箱？

### [](https://open.work.weixin.qq.com)一、如何iPhone/iPod touch上的邮件客户端收取企业微信邮箱的邮件

以iPhone为例：手机【设置->APP->邮件->邮件账户】进入“添加账户”，选择“其他”，新建一个邮件账户，输入完整的企业微信邮箱账号和邮箱密码，点击“下一步”。
注：如邮箱已开启安全登录需要使用客户端专用密码：[如何获取客户端专用密码](https://open.work.weixin.qq.com/help2/pc/19902)）
![](https://wework.qpic.cn/wwpic3az/521563_XPLtLiASSSGarZO_1758512719/0)

#### [](https://open.work.weixin.qq.com)1、POP协议配置方式

POP方式的设置如下所示：
接收邮件服务器：pop.exmail.qq.com ，使用SSL，端口号995
用户名：填写完整的企业微信邮箱账号
密码：填写账号密码（如邮箱已开启安全登录需要使用客户端专用密码：[如何获取客户端专用密码](https://open.work.weixin.qq.com/help2/pc/19902)）

发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465
用户名：填写完整的企业微信邮箱账号
密码：填写账号密码（如邮箱已开启安全登录需要使用客户端专用密码：[如何获取客户端专用密码](https://open.work.weixin.qq.com/help2/pc/19902)）
![](https://wework.qpic.cn/wwpic3az/628154_C547wg2zTTOYOVJ_1758513182/0)

#### [](https://open.work.weixin.qq.com)2、IMAP协议配置方式

如果您希望使用IMAP协议来进行收取邮件，请在页面上方选择“IMAP”标签，然后将服务器设置如下：
接收邮件服务器：imap.exmail.qq.com ，使用SSL，端口号993
用户名：填写完整的企业微信邮箱账号
密码：填写账号密码（如邮箱已开启安全登录需要使用客户端专用密码：[如何获取客户端专用密码](https://open.work.weixin.qq.com/help2/pc/19902)）

发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465
用户名：填写完整的企业微信邮箱账号
密码：填写账号密码（如邮箱已开启安全登录需要使用客户端专用密码：[如何获取客户端专用密码](https://open.work.weixin.qq.com/help2/pc/19902)）
![](https://wework.qpic.cn/wwpic3az/337456_bSa8tay3TgeZhzy_1758513407/0)

#### [](https://open.work.weixin.qq.com)3、exchange协议配置

入口：手机【设置->APP->邮件->邮件账户】进入“”，选择“Microsoft Exchange”
exchange邮件服务器填写：ex.exmail.qq.com
域：非必填，可不填写
用户名：填写完整的企业微信邮箱账号
密码：必填项，填写账号密码（如邮箱已开启安全登录需要使用客户端专用密码：[如何获取客户端专用密码](https://open.work.weixin.qq.com/help2/pc/19902)）
![](https://wework.qpic.cn/wwpic3az/80385_riWzQjNbTSW6Jkx_1758514793/0)

#### [](https://open.work.weixin.qq.com)4、更多设置

如果您还想进行更多的设置，请进入【设置->邮件】
如下图，可使用SSL方式进行连接。采用SSL方式时，如果使用POP协议，使用SSL，端口号为995，如果是IMAP协议，使用SSL，端口号为993 。

此外，建议您通过设置将iPhone上的文件夹与邮箱中的文件夹对应起来。
如图“邮箱行为”：
![](https://wework.qpic.cn/wwpic3az/611259_priyCZZrRESgEp6_1758515162/0)

### [](https://open.work.weixin.qq.com)二、其他问题

#### [](https://open.work.weixin.qq.com)1、IMAP协议和POP协议的区别

（1）客户端配置POP协议，不同步网页端已发送文件夹、其他文件夹至客户端；POP允许邮件客户端下载服务器上的邮件，但在电子邮件客户端的操作（如：移动邮件、标记已读、删除邮件等），这是不会反馈到服务器。
（2）客户端配置IMAP协议，支持同步网页端收件箱、已发送、其他文件夹至客户端；且邮件客户端的操作都会反馈到服务器上，客户端对邮件进行的操作（如：移动邮件、标记已读、删除邮件等），服务器上的邮件也会做相应的操作。

#### [](https://open.work.weixin.qq.com)2、服务器设置、账号密码填写正确但配置失败

需【网页端登录邮箱->设置->收发信设置】中核查是否有开启了客户端IMAP/POP服务协议，需开启服务协议后保存重试。
