---
title: "企业邮箱如何设置DMARC（TXT记录）"
source: "https://open.work.weixin.qq.com/help2/pc/19820"
crawl_date: "2026-03-26"
---

# 企业邮箱如何设置DMARC（TXT记录）

### [](https://open.work.weixin.qq.com)一、设置腾讯企业邮箱SPF记录值

1、在设置DMARC记录之前，请务必确保已设置腾讯企业邮箱的TXT记录
设置方法：登录【域名所在服务商->域名解析】中添加TXT记录。
TXT记录值设置要求如下：
主机记录：@或为空
记录类型：TXT
记录值为：v=spf1 include:spf.mail.qq.com ~all
![](https://wework.qpic.cn/wwpic3az/59161_AbRvzPRrRfW3gBB_1718862999/0)

### [](https://open.work.weixin.qq.com)二、如何设置DMARC记录

**1、DMARC记录设置要求如下：**
主机记录：_dmarc

记录类型：TXT

DMARC记录值：企业可以根据企业要求设置记录值的p参数和rua

**2、DMARC记录值参数说明：**
① v：版本（纯文本；必要值）值为“DMARC1”。
② p：要求的邮件接收者策略（纯文本；必要值）表明接收者根据域名所有者的要求制定的策略。

- p=none：不对邮件执行任何操作，并将其邮件投递给目标收件人。
示例: v=DMARC1;p=none;rua=mailto:m****@qq.com
- p=quarantine：将邮件标记为垃圾邮件，并将邮件发送至收件人的“垃圾邮件”文件夹。
示例：v=DMARC1;p=quarantine;rua=mailto:m****@qq.com
- p=reject：执行拒绝，将DMARC验证失败的邮件拒绝接收。
示例：v=DMARC1;p=reject;rua=mailto:m****@qq.com

③ 解析记录值中的rua（非必要）：用于接收有关企业网域的DMARC活动报告的电子邮件地址。该电子邮件地址必须包含 mailto:，
建议使用公共邮箱、群组或专门处理 DMARC 报告的第三方服务。

例如：rua=mailto:mailauth-reports@qq.com

注：如不需要记录中rua，那么记录值为v=DMARC1;p=none;

### [](https://open.work.weixin.qq.com)三、腾讯云域名的设置页面

1、【腾讯云账号登录 -> DNS解析设置->点击对应的域名->域名解析】
![](https://wework.qpic.cn/wwpic3az/284733_sl3Hjv-YQXi1Dwx_1709871656/0)

2、进入添加记录页面，点击【添加记录】，记录类型选择TXT类型，然后根据DMARC记录要求填写主机记录、记录值到对应表格。其它保持默认。
![](https://wework.qpic.cn/wwpic3az/888947_sER38WX1RA-Ah75_1709871639/0)
![](https://wework.qpic.cn/wwpic3az/837066_V3vAb-x7SgSXrM__1709884601/0)

### [](https://open.work.weixin.qq.com)四、常见问题

#### [](https://open.work.weixin.qq.com)1、如何查询DMARC记录

可通过以下2种方式核查：
（1）可通过网址：https://dnschecker.org/#MX/bosin-industry.com 查询DMARC记录。
操作方式：打开网址，输入_dmarc.domain(查询的域名)，选择【TXT记录】类型检查。

（2）使用window 的nslookup命令查询DMARC记录：
Windows：nslookup -qt=TXT _dmarc.domain(查询的域名) ，再点击回车。
