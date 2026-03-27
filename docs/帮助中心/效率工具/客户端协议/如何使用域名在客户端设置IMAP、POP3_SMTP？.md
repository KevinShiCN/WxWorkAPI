---
title: "如何使用域名在客户端设置IMAP、POP3/SMTP？"
source: "https://open.work.weixin.qq.com/help2/pc/19888"
crawl_date: "2026-03-26"
---

# 如何使用域名在客户端设置IMAP、POP3/SMTP？

### [](https://open.work.weixin.qq.com)第一步：设置cname

1、进入域名管理页面：域名管理页面是由购买域名时，域名提供商所提供的。如不清楚域名提供商，可先查询域名提供商。

2、找到cname记录设置的位置。

3、添加cname记录：

（1）如果选择POP类型，请设置：
Cname：pop.域名 别名主机：pop.exmail.qq.com
Cname值： smtp.域名 别名主机：smtp.exmail.qq.com
示例：
![](https://wework.qpic.cn/wwpic/180582_2nPDt1N0SsKlioQ_1678333695/0)

（2）如果选择IMAP类型，则设置：
Cname值：imap.域名 指向：imap.exmail.qq.com
Cname值： SMTP.域名 指向：smtp.exmail.qq.com
示例：
![](https://wework.qpic.cn/wwpic/774725_U4rg8iZPTO2S_T1_1678333704/0)

### [](https://open.work.weixin.qq.com)第二步：客户端设置

POP3/SMTP协议
接收邮件服务器：pop.域名，去掉SSL，端口号110
发送邮件服务器：smtp.域名 ，去掉SSL，端口号25
![](https://wework.qpic.cn/wwpic/378728_sFdbQ2kAQdG81rW_1678333712/0)
IMAP/SMTP协议
接收邮件服务器：imap.域名 ，去掉SSL，端口号143
发送邮件服务器：smtp.域名 ，去掉SSL，端口号25

注：win foxmail最新版不支持非SSL配置
