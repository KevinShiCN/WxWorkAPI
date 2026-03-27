---
title: "邮箱域名如何配置DKIM签名"
source: "https://open.work.weixin.qq.com/help2/pc/19647"
crawl_date: "2026-03-26"
---

# 邮箱域名如何配置DKIM签名

### [](https://open.work.weixin.qq.com)一、什么是DKIM（DomainKeys Identified Mail）

概述：DKIM是一种防范电子邮件欺诈的验证技术，通过消息加密认证的方式对邮件发送域名进行验证。
邮件发送方发送邮件时，利用本域私钥加密邮件生成DKIM签名，将DKIM签名及其相关信息插入邮件头。邮件接收方接收邮件时，通过DNS查询获得公钥，验证邮件DKIM签名的有效性。从而确认在邮件发送的过程中，防止邮件被恶意篡改，保证邮件内容的完整性。

### [](https://open.work.weixin.qq.com)二、在域名服务商处添加DKIM签名

#### [](https://open.work.weixin.qq.com)1、获取DKIM记录值要求

（1）企业专属域名已在管理后台完成绑定，并且状态显示为“使用中”。可以通过企业管理后台【协作->邮件->邮箱域名】页面查看域名状态。
（2）若企业绑定了多个专属域名，需要为每个域名分别生成对应的DKIM记录值，并登录各域名所属的服务商后台独立完成配置。

#### [](https://open.work.weixin.qq.com)2、获取DKIM签名

打开企业管理后台【协作->邮件->安全管理->DKIM验证->配置】
![](https://wework.qpic.cn/wwpic3az/211158_1OUIFmaPR3eaQtJ_1753087777/0)

#### [](https://open.work.weixin.qq.com)3、复制配置DKIM所需的信息

![](https://wework.qpic.cn/wwpic3az/51940_hWjuW0qwRiWbAZw_1752823530/0)

#### [](https://open.work.weixin.qq.com)4、登录域名服务商DNS控制台添加记录

打开域名服务商控制台（以腾讯云为例），点击【DNS 解析 DNSPod->点击需要配置的域名】
![](https://wework.qpic.cn/wwpic/116715_TGQxV3FSQqmZfCJ_1678780967/0)
![](https://wework.qpic.cn/wwpic/384960_dAnE3YuOSViA4___1678781004/0)
点击【添加记录】，填写记录值等信息，然后点击【保存】
![](https://wework.qpic.cn/wwpic/480250_AJ6zYX9RT6i8Q8t_1678781016/0)

#### [](https://open.work.weixin.qq.com)5、企业管理后台完成配置

在企业管理后台【协作->邮件->安全管理->DKIM验证->配置】点击“已完成配置，立即验证”，完成配置。dkim解析记录生效，状态显示为“已验证”。
![](https://wework.qpic.cn/wwpic3az/325257_nkVpZupCSVipqjH_1770969461/0)

### [](https://open.work.weixin.qq.com)三、常见问题

#### [](https://open.work.weixin.qq.com)1、已设置DKIM记录值，管理后台显示：验证中/已失效

（1）注意生成的DKIM记录主机记录、记录值字母大小写，需按系统显示的设置。
（2）检查添加的记录值中是否包含多余空格，需注意去掉记录值中的空格。

#### [](https://open.work.weixin.qq.com)2、如何查询DKIM记录值？

可通过以下2种方式核查：
（1）可通过网址：https://dnschecker.org/#MX/  查询dkim记录。
操作方式：打开网址，输入 主机记录.domain(查询的域名)，选择【TXT记录】类型检查。

（2）使用window 的nslookup命令查询dkim记录：
Windows：nslookup -qt=TXT 主机记录.domain(查询的域名)，再点击回车。
