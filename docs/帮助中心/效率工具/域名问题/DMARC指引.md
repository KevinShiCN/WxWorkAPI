---
title: "DMARC指引"
source: "https://open.work.weixin.qq.com/help2/pc/19819"
crawl_date: "2026-03-26"
---

# DMARC指引

### [](https://open.work.weixin.qq.com)一、了解DMARC（Domain-based Message Authentication, Reporting & Conformance）

DMARC是一种基于现有的SPF和DKIM协议的可扩展电子邮件认证协议，在邮件收发双方建立了邮件反馈机制，便于邮件发送方和邮件接收方共同对域名的管理进行完善和监督。
DMARC要求域名所有者在DNS记录中设置SPF记录和DKIM记录，并明确声明对验证失败邮件的处理策略。邮件接收方接收邮件时，首先通过DNS获取DMARC记录，再对邮件来源进行SPF验证和DKIM验证，对验证失败的邮件根据DMARC记录进行处理，并将处理结果反馈给发送方。
DMARC能够有效识别并拦截欺诈邮件和钓鱼邮件，保障用户个人信息安全。
例子：paypal.com的dmarc记录
_dmarc.paypal.com text = “v=DMARC1\; p=reject\; rua=mailto:d@rua.agari.com\; ruf=mailto:dk@bounce.paypal.com,mailto:d@ruf.agari.com”

### [](https://open.work.weixin.qq.com)二、DMARC记录中常用参数

adkim：（纯文本；可选的；默认为“r”）表明域名所有者要求使用严格的或者宽松的DKIM身份校验模式，有效值如下：
    r: relaxed mode
    s: strict mode
aspf：（纯文本；可选的；默认为“r”）表明域名所有者要求使用严格的或者宽松的SPF身份校验模式，有效值如下：
    r: relaxed mode
    s: strict mode
fo：故障报告选项（纯文本；可选的；默认为0），以冒号分隔的列表，如果没有指定“ruf”，那么该标签的内容将被忽略。
 0：如果所有身份验证机制都不能产生“pass”结果，那么生成一份DMARC故障报告；
 1：如果任一身份验证机制产生“pass”以外的结果，那么生成一份DMARC故障报告；
 d：如果消息的签名验证失败，那么生成一份DKIM故障报告；
 s：如果消息的SPF验证失败，那么生成一份SPF故障报告。
p：要求的邮件接收者策略（纯文本；必要的）表明接收者根据域名所有者的要求制定的策略。
 none：域名所有者要求不采取特定措施
 quarantine：域名所有者希望邮件接收者将DMARC验证失败的邮件标记为可疑的。
 reject：域名所有者希望邮件接收者将DMARC验证失败的邮件拒绝。
pct：（纯文本0-100的整型；可选的，默认为100）域名所有者邮件流中应用DMARC策略的消息百分比。
rf：用于消息具体故障报告的格式（冒号分隔的纯文本列表；可选的；默认为“afrf”）
ri：汇总报告之间要求的间隔（纯文本32位无符号整型；可选的；默认为86400）.表明要求接收者生成汇总报告的间隔不超过要求的秒数。
rua：发送综合反馈的邮件地址（逗号分隔的DMARC URI纯文本列表；可选的）
ruf：发送消息详细故障信息的邮件地址（逗号分隔的DMARC URI纯文本列表；可选的）
sp：要求邮件接收者对所有子域使用的策略（纯文本；可选的），若缺省，则“p”指定的策略将应用到该域名和子域中。
v：版本（纯文本；必要的）值为“DMARC1”，必须作为第一个标签。

### [](https://open.work.weixin.qq.com)三、格式定义

dmarc-uri = URI [ “!” 1*DIGIT [ “k” / “m” / “g” / “t” ] ]
例如：“mailto:reports@example.com!50m”表示要求通过邮件发送给“Example Domain”的报告的有效载荷不超过50MB。

dmarc-record = dmarc-version dmarc-sep
             [dmarc-request]
             [dmarc-sep dmarc-srequest]
             [dmarc-sep dmarc-auri]
             [dmarc-sep dmarc-furi]
             [dmarc-sep dmarc-adkim]
             [dmarc-sep dmarc-aspf]
             [dmarc-sep dmarc-ainterval]
             [dmarc-sep dmarc-fo]
             [dmarc-sep dmarc-rfmt]
             [dmarc-sep dmarc-percent]
             [dmarc-sep]
dmarc-version = “v=DMARC1”
dmarc-sep = “;”
dmarc-request = “p=(none/quarantine/reject)”
dmarc-srequest = “sp=(none/quarantine/reject)”
dmarc-auri = “rua=dmarc-uri (,dmarc-uri)”
dmarc-furi = “ruf=dmarc-uri (,dmarc-uri)”
dmarc-adkim = “adkim=(r/s)”
dmarc-aspf = “aspf=(r/s)”
dmarc-ainterval = “ri= 1DIGIT”
dmarc-fo = “fo=(0/1/d/s)(:(0/1/d/s))”
dmarc-rfmt = “rf= Keyword (:Keyword)”
           ; 仅用于报告格式注册
dmarc-percent = “pct=13DIGIT”

### [](https://open.work.weixin.qq.com)四、举例说明

1、用dig命令查询DMARC记录
% dig +short TXT _dmarc.example.com.
“v=DMARC1; p=none; rua=mailto:dmarc-feedback@example.com;
ruf=mailto:auth-reports@example.com”
注意：DMARC DNS TXT记录的拥有者字段必须始终为“_dmarc”，若指定该记录应用到域或子域，可以采用“_dmarc.example.com”的形式。

2、DMARC DNS记录
; DMARC record for the domain example.com
_dmarc IN TXT ( “v=DMARC1; p=none; “
       “rua=mailto:dmarc-feedback@example.com; “
       “ruf=mailto:auth-reports@example.com” )

**参考文献**
1、DMARC RFC协议：http://tools.ietf.org/html/rfc7489
2、DMARC官方网站：https://dmarc.org/
