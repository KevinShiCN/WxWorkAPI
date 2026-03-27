---
title: "DKIM指引"
source: "https://open.work.weixin.qq.com/help2/pc/20058"
crawl_date: "2026-03-26"
---

# DKIM指引

### [](https://open.work.weixin.qq.com)一、DKIM（DomainKeys Identified Mail）

DKIM是一种防范电子邮件欺诈的验证技术，通过消息加密认证的方式对邮件发送域名进行验证。
邮件发送方发送邮件时，利用本域私钥加密邮件生成DKIM签名，将DKIM签名及其相关信息插入邮件头。邮件接收方接收邮件时，通过DNS查询获得公钥，验证邮件DKIM签名的有效性。从而确认在邮件发送的过程中，防止邮件被恶意篡改，保证邮件内容的完整性。

### [](https://open.work.weixin.qq.com)二、DKIM签名头字段参数

1、例子：
DKIM-Signature: v=1; a=rsa-sha256; d=example.net; s=brisbane;
c=simple; q=dns/txt; i=@eng.example.net;
t=1117574938; x=1118006938;
h=from:to:subject:date;
z=From:[foo@eng.example.net](https://open.work.weixin.qq.commailto:foo@eng.example.net)|To:[joe@example.com](https://open.work.weixin.qq.commailto:joe@example.com)|Subject:demo=20run|Date:July=205,=202005=203:44:08=20PM=20-0700;
bh=MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTI=;
b=dzdVyOfAKCdLXdJOc9G2q8LoXSlEniSbav+yuU4zGeeruD00lszZVoG4ZHRNiYzR

2、解析：

v= 版本号（纯文本，必要的），值为1
格式：v=1*DIGIT

a= 生成签名的算法（纯文本，必要的），验证者必须支持“rsa-sha1”和“rsa-sha256”两种算法，签名者使用“rsa-sha256”签名。
格式：a=rsa-sha1或者a=rsa-sha256

b= 签名数据（base64，必要的）
格式：b=base64string

bh= 消息的规范化主体的哈希值，受“l=”标签限制（base64，必要的）。
格式：bh=base64string

c= 消息规范化算法（纯文本，可选的，默认为“simple/simple”）,”/“两边分别对应头部和主体的规范化算法，当“c=simple”或者“c=relaxed”时，表示头部规范化算法使用simple或者relaxed，而主体规范化算法默认为simple。

格式：c=sig-c-tag-alg[“/“sig-c-tag-alg]

sig-c-tag-alg=”simple”/“relaxed”

d= Signing Domain Identifier ，即SDID （纯文本，必要的）

格式：d=domain-name

h= 签名的头字段（纯文本，必要的），提交给签名算法的头字段名称列表，用“:”分隔。
格式：h=hdr-name*(“:”hdr-name)

i= Agent or User Identifier ，即AUID，值为@domain

格式：i=[Local-part]”@”domain-name
  Local-part为空，domain-name与“d=”的值一样或者是其子域。

l= 主体长度数（纯文本无符号十进制整型，可选的，默认为整个主体）

 格式：l=1*76DIGIT

q= 一个查询方式的列表，以冒号分隔，用于检索公钥（纯文本，可选的，默认为“dns/txt”），每个查询方式的形式为“type[/options]”。

格式：q=dns/txt

s= selector，（纯文本，必要的）

格式：s=selector

t= 签名时间戳（纯文本无符号十进制整型；推荐的，默认为一个未知的创建时间）。

格式：t=1*12DIGIT

x= 签名到期时间（纯文本无符号十进制整型；推荐的，默认永不过期）

格式：x=1*12DIGIT

z= 复制的头字段（dkim-quoted-printable，可选的，默认为null）

格式：z=sig-z-tag-copy*（”|”sig-z-tag-copy）

sig-z-tag-copy= hdr-name”:”qp-hdr-value

### [](https://open.work.weixin.qq.com)三、DKIM DNS TXT记录

1、例子：

$ORIGIN _domainkey.example.org.

brisbane IN TXT (“v=DKIM1;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQ”
“KBgQDwIRP/UC3SBsEmGqZ9ZJW3/DkMoGeLnQg1fWn7/zYt”
“IxN2SnFCjxOCKG9v3b4jYfcTNh5ijSsq631uBItLa7od+v”
“/RtdC2UzJ1lWT947qR+Rcac2gbto/NMqJ0fzfVjH4OuKhi”
“tdY9tf6mcwGjaNBcWToIMmPSPDdQPNUYckcQ2QIDAQAB”)

2、解析：

v= DKIM密钥记录的版本（纯文本，推荐的，默认为“DKIM1”）

格式：v=DKIM1

p= 公钥数据（base64，必要的）。值为空表示公钥已被撤销。

格式：p=base64string

h= 可接受的哈希算法（纯文本，可选的，默认允许所有算法），以冒号分隔。

格式：h= key-h-tag-alg*(“:” key-h-tag-alg)

key-h-tag-alg= “sha1”/“sha256”

k= 密钥类型（纯文本，可选的，默认为“rsa”）

格式：k=rsa

n= 可能感兴趣的人（qp-setion，可选的，默认为空）。

格式：n=qp-setion

s= 服务类型（纯文本，可选的，默认为“*”），用冒号分隔。目前定义的服务类型有两种，一是“*”，匹配所有服务类型；二是“email”，电子邮件，不限于SMTP。

格式：s=key-s-tag-type*(“:”key-s-tag-type)

key-s-tag-type=”email”/“*”

t= 标记，表示以冒号分隔的名称列表（纯文本，可选的，默认没有标记）。定义的标记有两种，一是“y”，表示该域正在测试DKIM；二是“s”，“i=”标签的domain必须与“d=”标签一致。

格式：t=key-t-tag-flag*(“:”key-t-tag-flag)

 key-t-tag-flag=”y”/“s”

注意：所有DKIM密钥存储在一个子域，命名为“_domainkey”。给定DKIM签名字段d=example.com，s=foo.bar，DNS查询为：“foo.bar._domainkey.example.com”。

### [](https://open.work.weixin.qq.com)四、规范化算法

1、头部规范化算法
（1）“simple”头部规范化算法

不以任何方式改变头字段。提交给签名或验证算法的头字段必须和被签名或验证消息时一致。尤其是，头字段名称禁止大小写转换，空白不可改变。

（2）“relaxed” 头部规范化算法
①所有头字段名称（不是头字段的值）转化为小写。例如，将“SUBJect: AbC”转化为“subject: AbC”。

②展开所有头字段的续行，特别是，带有嵌入在头字段值的终止符（即在CRLF后接有WSP）的行需解释为不带CRLF。实现时需在头字段值末尾去掉CRLF。

③将所有由一个或多个WSP字符组成的序列转化为单个SP字符。这里WSP字符包括在一行的之前和之后那些字符。

④删除所有在每一个展开的头字段的值末尾处的WSP字符。

⑤删除所有在用于分隔头字段名称和头字段值的冒号之前和之后剩下的WSP字符。必须保留分号分隔符。

2、主体规范化算法
（1）“simple”主体规范化算法
忽略信息主体末尾处所有空白行；如果没有主体或者在消息主体中没有末尾CRLF，需添加一个CRLF；一个完全空的或者缺失的主体需标准化为一个“CRLF”，即标准化长度为2字节。

（2）“relaxed”主体规范算法
 ①减少空白：

 a.略行末尾所有空白。实现时禁止删除行末尾的CRLF；

 b.行中WSP的所有序列转化为单个SP字符；

 ②.忽略消息主体末尾处所有空白行。如果主体非空白且不以CRLF结尾，则需添加CRLF。

3、例子

A:< SP>X< CRLF>

B  < SP> : < SP> Y < HTAB>< CRLF>

< HTAB> Z < SP>< SP>< CRLF>

< CRLF>

< SP> C < SP>< CRLF>

D < SP>< HTAB>< SP> E < CRLF>

< CRLF>

< CRLF>

（1）头部

simple：

 A: < SP> X < CRLF>

B < SP> : <  SP> Y < HTAB>< CRLF>

 < HTAB> Z < SP>< SP>< CRLF>

relaxed:

a:X < CRLF>

b:Y < SP> Z < CRLF>

（2）主体

simple:

< SP> C < SP>< CRLF>

D < SP>< HTAB>< SP> E < CRLF>

relaxed:

< SP> C < CRLF>

D < SP> E < CRLF>

### [](https://open.work.weixin.qq.com)五、签名算法

1、签名算法的伪代码：

body-hash = hash-alg (canon-body, l-param)

data-hash = hash-alg (h-headers, D-SIG, body-hash)

signature = sig-alg (d-domain, selector, data-hash)

2、解析：

body-hash:是使用哈希算法哈希主体的输出值

hash-alg:是“a”参数指定的哈希算法

canon-body:主体的规范化表示，按“c”参数指定的规范化算法生成的，排除DKIM签名字段。

l-param:是“l”参数的值，主体的长度。

data-hash:使用hash-alg算法哈希头部的输出，包括DKIM签名头部和主体哈希值。

h-headers:“h”参数指定的被签名的头字段列表。

D-SIG:规范化的DKIM签名字段，去除参数签名值部分即为一个空的参数值。

signature:签名算法生成的签名值

sig-alg:“a”参数指定的签名算法。

d-domain:“d”参数指定的域名

selector:“s”参数指定的selector值。

注意：许多数字签名API提供RSA私钥的哈希和应用，使用原始的“sign()”。当使用这样的API时，算法的最后两个步骤可能会合并成一个调用，执行“a-hash-alg”和“sig-alg”。

### [](https://open.work.weixin.qq.com)六、验证结果

签名验证结果的三种状态：

1、SUCCESS:返回一个成功验证

2、PERMFAIL:返回一个永久的、不可恢复的错误，例如签名验证失败

3、TEMPFAIL:返回一个暂时的、可恢复的错误，例如DNS查询超时

### [](https://open.work.weixin.qq.com)七、签名者操作

签名者按下面步骤顺序执行。

1、确定邮件是否要签名，应由谁签名。

签名者可以签名某域的邮件，该域需要满足以下条件：有一个私钥，相应公钥的必要知识和selector信息。

2、选择一个私钥和相应的selector信息

3、规范化信息以防传输过程中被修改

4、确定要签名的头字段

建议的签名内容，选择构成消息内容的核心字段，如地址字段和与主体相关的文本内容字段：

o From (REQUIRED;)
o Reply-To
o Subject
o Date
o To, Cc
o Resent-Date, Resent-From, Resent-To, Resent-Cc
o In-Reply-To, References
o List-Id, List-Help, List-Unsubscribe, List-Subscribe, List-Post,List-Owner, List-Archive

不建议签名的字段：
o Return-Path
o Received
o Comments, Keywords
o DKIM-Signature field

5、计算消息的哈希和签名

6、插入DKIM签名头字段

**参考文献**

1、DKIM RFC协议：http://tools.ietf.org/html/rfc6376

2、DKIM官方网站：http://www.dkim.org/
