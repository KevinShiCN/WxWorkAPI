---
title: "管理员统一配置Exchange日历"
source: "https://open.work.weixin.qq.com/help2/pc/19006"
crawl_date: "2026-03-26"
---

# 管理员统一配置Exchange日历

### [](https://open.work.weixin.qq.com)一、功能简介

管理员可统一为企业成员配置 Exchange 账号，同步 Exchange 日历。
配置后，企业成员可在企业微信中查看和编辑 Exchange 日程，更新的日程信息会实时同步至 Exchange 日历中。

### [](https://open.work.weixin.qq.com)二、操作流程

#### [](https://open.work.weixin.qq.com)1、添加管理员账号

（1）在【管理后台->协作->日程->Exchange日历同步->配置同步账户】
![](https://wework.qpic.cn/wwpic3az/842760_bvq8hhTATd-JdxV_1753693510/0)

**请确保 Exchange 管理员账号已配置好Impersonation权限，配置完成后30分钟再执行以下操作。**[如何配置](https://learn.microsoft.com/zh-cn/exchange/client-developer/exchange-web-services/how-to-configure-impersonation)

（2）输入Exchange管理员账号、密码以及Exchange web service地址
![](https://wework.qpic.cn/wwpic3az/600822_WtbUUewrSTSoO20_1753693528/0)

#### [](https://open.work.weixin.qq.com)2、导入成员的Exchange账号

下载空白导入模板或包含成员企业微信账号的模板，完善用户Exchange账号及企业微信账号的匹配信息后上传。
![](https://wework.qpic.cn/wwpic3az/653725_tuiKpjohSJKIZ-s_1753847509/0)

#### [](https://open.work.weixin.qq.com)3、确认导入结果

系统会提示导入成功、有风险、导入失败的账号数，以及导入异常的原因说明。
![](https://wework.qpic.cn/wwpic3az/710978_ljyHcYwsRQ2R_PC_1753847547/0)

#### [](https://open.work.weixin.qq.com)4、启动同步

管理员可以下载账户列表查看详情并重新导入，或选择忽略风险，启动同步。
![](https://wework.qpic.cn/wwpic3az/538110_JkD2aVHZQbStUOh_1753847600/0)

#### [](https://open.work.weixin.qq.com)5、查看和删除同步关系

（1）启动同步后，可查看已配置的 Exchange 管理员账号以及管理员账号所关联的所有员工Exchange账号。
![](https://wework.qpic.cn/wwpic/219779_lNBVOxNPRHaGc75_1646900786/0)

（2）管理员可以在Exchange管理员页面点击…-删除，删除该管理员账号及其关联的所有员工账号，删除后该Exchange管理员账号下的全部日历数据将不再同步到企业微信。
![](https://wework.qpic.cn/wwpic3az/455198_uL12hWY4QiKPFr8_1753847671/0)

（3）管理员可以删除管理员账号下所关联的某位员工exchange账号绑定关系，删除后，该员工的exchange日历数据将不会同步到企业微信。
![](https://wework.qpic.cn/wwpic3az/12484_Tvxx_SfuS0ytA7d_1753847714/0)

### [](https://open.work.weixin.qq.com)三、常见问题

1、在企业微信日程绑定exchange邮箱，发送了日程邮件，但是企业微信日程看不到日程邮件的附件。
目前暂不支持同步日程邮件的附件。

2、添加日程日历提示“无法连接服务器，请检查配置”。
（1）需确认账号密码是否正确。
（2）目前日程代收暂不支持非ews协议的邮箱。
请您让出现该异常的成员尝试打开：https://[host]/EWS/Exchange.aswx这个页面，确认能不能访问 （[host]需替换成贵司自建的服务器地址，比如outlook.office365.com） 若不清楚贵司的服务器地址，可联系贵司IT部或相关人员确认。
若不能打开，也就是非ews协议，目前暂不支持。
若能打开，但仍然不能同步，有可能有防火请或网路限制，请贵司确认是否有设置。
（3）目前暂不支持配置阿里的邮箱。
（4）需确认配置的邮箱域名是否为企业邮的，目前不支持第三方代收企业邮日历。
（5）可以尝试把邮箱配置到第三方邮箱app尝试、例如QQMail App等，如果这些邮箱app也不能配置成功，需找邮箱服务商进行咨询。
