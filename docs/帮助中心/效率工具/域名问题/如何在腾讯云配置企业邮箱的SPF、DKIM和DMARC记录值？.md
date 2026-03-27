---
title: "如何在腾讯云配置企业邮箱的SPF、DKIM和DMARC记录值？"
source: "https://open.work.weixin.qq.com/help2/pc/21540"
crawl_date: "2026-03-26"
---

# 如何在腾讯云配置企业邮箱的SPF、DKIM和DMARC记录值？

### [](https://open.work.weixin.qq.com)一、简介：为何需要配置三项解析记录

部分收件人服务商为加强安全防护，会要求发件方域名配置SPF、DKIM和DMARC记录，以验证邮件合法性、防范欺诈和垃圾邮件。
1、SPF记录值：(Sender Policy Framework) 的缩写，一种以IP地址认证电子邮件发件人身份的技术，是非常高效的垃圾邮件解决方案。
2、DKIM记录值：DKIM是一种防范电子邮件欺诈的验证技术，通过消息加密认证的方式对邮件发送域名进行验证。
3、DMARC记录值：DMARC是一种基于现有的SPF和DKIM协议的可扩展电子邮件认证协议，在邮件收发双方建立了邮件反馈机制，便于邮件发送方和邮件接收方共同对域名的管理进行完善和监督。

### [](https://open.work.weixin.qq.com)二、腾讯云添加域名解析设置入口

登录腾讯云管理后台【控制台->全部产品】搜索并进入 “DNS 解析 DNSPod”服务。
![](https://wework.qpic.cn/wwpic3az/664640_f_zPG1vKSLWJGsD_1739762992/0)

### [](https://open.work.weixin.qq.com)三、腾讯云配置企业邮箱的SPF记录值步骤

1、企业微信邮箱的SPF记录值要求如下：
主机记录：@或者为空
记录类型：TXT记录
TXT记录值为：v=spf1 include:spf.mail.qq.com ~all

2、通过腾讯云管理后台【我的域名->全部域名】找到需要添加解析的域名，点击“解析”进入云解析DNS页面，点击【添加记录】，记录类型选择TXT类型，保存即可。
![](https://wework.qpic.cn/wwpic3az/800868_06tK3NMXQoefY-a_1739762664/0)
![](https://wework.qpic.cn/wwpic3az/424440_k4WB-h0uTs2zwai_1739761545/0)

### [](https://open.work.weixin.qq.com)四、腾讯云配置企业邮箱的DKIM记录值步骤

**1、获取记录信息**
打开企业微信管理后台【协作->邮件->安全管理->DKIM验证->配置】，在此页面复制系统生成的主机记录、记录类型和记录值。
![](https://wework.qpic.cn/wwpic3az/806454_RNBStC8WSoSy7Pi_1755162679/0)

**2、 在腾讯云添加记录**
通过腾讯云管理后台【我的域名->全部域名】找到需要添加解析的域名，点击“解析”进入云解析DNS页面，点击【添加记录】，记录类型选择TXT类型，并将上一步复制的信息对应填入。
![](https://wework.qpic.cn/wwpic3az/10352_9ptzV1n-Taqm__l_1739763077/0)

**3、返回验证**
在腾讯云添加解析记录后（通常需要几分钟生效），返回企业微信管理后台的【DKIM验证】页面，点击 “已完成配置，立即验证”；验证通过后，状态将显示为 “已验证”。

### [](https://open.work.weixin.qq.com)五、腾讯云配置企业邮箱的DMARC记录值步骤

**1、了解并设置记录值**
腾讯企业邮箱DMARC记录设置要求如下：
主机记录：_dmarc
记录类型：TXT
记录值（企业可以根据企业要求设置记录值的p参数和rua）：v=DMARC1;p=reject;rua=mailto:m**@qq.com

**关键参数说明：**
（1）p策略参数 (必选)：

- p=none：不对邮件执行任何操作，并将其邮件投递给目标收件人。
- p=quarantine：将邮件标记为垃圾邮件，并将邮件发送至收件人的“垃圾邮件”文件夹。
- p=reject：执行拒绝，将DMARC验证失败的邮件拒绝接收。

（2）rua报告地址 (可选)：

- 用于接收有关企业网域的DMARC活动报告的电子邮件地址
- 格式必须以 mailto:开头，后接邮箱地址。
- 建议：使用公共邮箱或专门的服务邮箱来接收报告。
- 如不需要记录中rua，那么记录值为：v=DMARC1; p=reject;

DMARC记录标记如下：
![](https://wework.qpic.cn/wwpic3az/377829_oBEBKJ3VRPqUInl_1739763161/0)

**2、在腾讯云添加记录**

- 进入域名的腾讯云DNSPod解析设置页面。
- 点击【添加记录】，记录类型选择 TXT。
- 填写主机记录（_dmarc）和记录值，保存即可。

![](https://wework.qpic.cn/wwpic3az/843155_KlmBPPZnQPyy1NH_1739763211/0)
