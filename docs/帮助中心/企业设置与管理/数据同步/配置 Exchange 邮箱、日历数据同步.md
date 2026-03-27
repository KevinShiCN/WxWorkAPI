---
title: "配置 Exchange 邮箱、日历数据同步"
source: "https://open.work.weixin.qq.com/help2/pc/19247"
crawl_date: "2026-03-26"
---

# 配置 Exchange 邮箱、日历数据同步

### [](https://open.work.weixin.qq.com)一、功能简介

可统一为成员配置 Exchange 账户，同步 Exchange 邮箱、日历数据。成员可在企业微信中使用 Exchange 日历与邮件服务，更新的信息会实时同步至 Exchange 中。

### [](https://open.work.weixin.qq.com)二、操作步骤

1、登录需要同步AD架构企业的[企业微信管理后台](https://work.weixin.qq.com/wework_admin/loginpage_wx)，进入「安全与管理->管理工具->数据同步」页面。
![](https://wework.qpic.cn/wwpic3az/893856_8crnxd1xT9uboeI_1753337794/0)
2、点击「Exchange 邮箱、日历数据同步」中「开始同步」按钮。

---

请确保Exchange管理员账号已配置好Impersonation权限，配置完成后30分钟再执行以下操作。[如何配置](https://learn.microsoft.com/zh-cn/exchange/client-developer/exchange-web-services/how-to-configure-impersonation)

---

3、输入Exchange管理员账号、密码以及Exchange Web Service地址。
![](https://wework.qpic.cn/wwpic3az/535241_BvCjuUVmRP-TaEe_1753337816/0)
4、如果已经配置了AD，可以选择从AD中直接同步Exchange邮箱、日历数据。
![](https://wework.qpic.cn/wwpic3az/210177_sO3wKAsaTkOMXYT_1753848533/0)
5、如果没有配置AD，可以选择通过上传账户列表方式同步Exchange邮箱、日历数据。流程如下：

- 下载模板后导入账户

![](https://wework.qpic.cn/wwpic3az/507478_Hw37PmdcTPqTO2u_1753848567/0)
![](https://wework.qpic.cn/wwpic3az/21501_VH2gnhyYSIqdr9t_1753848615/0)

- 查看导入账户

![](https://wework.qpic.cn/wwpic3az/536386_OkfoXsOnQXeyLrz_1753848647/0)
![](https://wework.qpic.cn/wwpic/9595_v17B6mRXSb2qZWX_1651216963/0)

- 删除同步账户

![](https://wework.qpic.cn/wwpic3az/668493_6mdv3OSsQpeNDeI_1753849001/0)
![](https://wework.qpic.cn/wwpic3az/674787_8u3Zzn2aSuuAx6k_1753849050/0)

### [](https://open.work.weixin.qq.com)三、数据同步后表现

同步完成后，被同步成员企业微信邮箱中将显示导入邮箱账户，并可通过该邮箱进行代收、代发；日程中将新增导入邮箱账户下的日历本及对应日程。
