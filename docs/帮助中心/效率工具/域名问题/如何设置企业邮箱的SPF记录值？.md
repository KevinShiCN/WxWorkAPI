---
title: "如何设置企业邮箱的SPF记录值？"
source: "https://open.work.weixin.qq.com/help2/pc/19817"
crawl_date: "2026-03-26"
---

# 如何设置企业邮箱的SPF记录值？

### [](https://open.work.weixin.qq.com)一、什么是SPF？

(Sender Policy Framework) 的缩写，一种以IP地址认证电子邮件发件人身份的技术，是非常高效的垃圾邮件解决方案。
接收邮件方会首先检查域名的SPF记录，来确定发件人的IP地址是否被包含在SPF记录里面，如果在，就认为是一封正确的邮件，否则会认为是一封伪造的邮件进行退回。

### [](https://open.work.weixin.qq.com)二、如何设置企业邮箱的SPF？

SPF是通过域名的TXT记录来进行设置的。

为了提升域名邮箱发送外域（@qq.com以外的邮箱）邮件的成功率，建议您给自己的域名设置一条TXT记录来避免这种情况。

**设置方法：登录【域名服务商后台->域名管理->域名解析->添加解析】添加腾讯企业邮箱的TXT记录值，记录值要求如下：**
主机记录：@或者为空
记录类型：TXT记录
TXT记录值为：v=spf1 include:spf.mail.qq.com ~all

**温馨提示：**若域名后台同时启用多条SPF记录值，为避免影响企业微信邮箱发信，需删除多余的邮箱服务商SPF记录，只保留企业微信邮箱要求设置的SPF记录值。

如图：腾讯云设置页面
1、登录【域名管理系统->添加解析】
2、在TXT（正文字串）处设置一条TXT记录，如下：
![](https://wework.qpic.cn/wwpic3az/847187_Qw1Q6mMVQTmFM_N_1709881414/0)
