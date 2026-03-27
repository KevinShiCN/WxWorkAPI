---
title: "HTTPS设置"
source: "https://open.work.weixin.qq.com/help2/pc/19844"
crawl_date: "2026-03-26"
---

# HTTPS设置

### [](https://open.work.weixin.qq.com)一、什么是HTTPS安全连接：

HTTPS，即Hypertext Transfer Protocol over Secure Socket Layer（HTTP安全连接），可以说是HTTP协议的安全版。

### [](https://open.work.weixin.qq.com)二、为什么要使用HTTPS安全连接?

如果您的邮件中有敏感数据，不希望被人窃听；如果您不希望被钓鱼网站盗用账号信息；如果您希望您在使用邮箱的过程中更安全；那么我们推荐使用https安全连接。

### [](https://open.work.weixin.qq.com)三、企业邮箱官网登录如何启用https连接？

成员可以通过电脑网页版登录邮箱【设置->账户->账户安全】中设置全程使用https。
![](https://wework.qpic.cn/wwpic/351666_WSP9-3bDTveoVb6_1691995494/0)

### [](https://open.work.weixin.qq.com)四、自定义域名（个性化登录）HTTPS加密访问：

HTTPS是由HTTP+SSL两部分组成，设置HTTPS访问需要上传/申请你的域名的SSL证书。
HTTPS安全访问，能防止贵公司邮箱登录页mail.域名被钓鱼网站劫持，确保邮箱信息的安全传输。
设置入口：网页版登录企业管理后台【协作->邮件->配置->加密访问】
![](https://wework.qpic.cn/wwpic3az/600710__7Vx6ynpT_y9MRI_1753082354/0)
![](https://wework.qpic.cn/wwpic3az/217013_GkkPgwJsR5Otddd_1753082627/0)
**方式一：**已有证书
将PEM编码的证书内容和私钥贴在页面对应文本框中。
![](https://wework.qpic.cn/wwpic3az/879229_rdOoffvgQ_yJIOm_1753082555/0)
PEM 证书格式
Root CA 机构颁发的证书，PEM样例如下：
![](https://wework.qpic.cn/wwpic/892707_Ored9LeWTumDz5b_1678267753/0)
· [——-BEGIN CERTIFICATE——-, ——-END CERTIFICATE——-] 开头和结尾；请将这些内容一并上传；
· 每行64字符，最后一行不超过64字符；中级机构颁发的证书链：
——-BEGIN CERTIFICATE——-
——-END CERTIFICATE——-
——-BEGIN CERTIFICATE——-
——-END CERTIFICATE——-
——-BEGIN CERTIFICATE——-
——-END CERTIFICATE——-
证书链规则：
· 证书之间不能有空行；
· 每一份证书遵守第一点关于证书的格式说明；PEM 私钥格式
RSA 私钥可以包括所有私钥（RSA 和 DSA）、公钥（RSA 和 DSA）和 (x509) 证书。它存储用 Base64 编码的 DER 格式数据，用 ascii 报头包围，因此适合系统之间的文本模式传输。样例如下：
![](https://wework.qpic.cn/wwpic/921540_NIcLyvlLRl2RHY2_1678267765/0)

RSA 私钥规则：
· [——-BEGIN RSA PRIVATE KEY——-, ——-END RSA PRIVATE KEY——-] 开头结尾；请将这些内容一并上传；
· 每行64字符，最后一行长度可以不足64字符。
如果您不是按照上述方案生成私钥，得到[——-BEGIN PRIVATE KEY——-, ——-END PRIVATE KEY——-] 这种样式的私钥，您可以按照如下方式转换：如果您不是按照上述方案生成私钥，得到[——-BEGIN PRIVATE KEY——-, ——-END PRIVATE KEY——-] 这种样式的私钥，您可以通过openssl相关命令进行转换
证书不合法的原因：
1.证书链不完整
2.证书与域名不匹配
3.证书签名算法不安全，禁止使用SHA1算法
4.证书时间无效
5.证书是否被吊销
6.推荐使用VeriSign、GeoTrust 、GlobalSign 、Symantec、GoDaddy等知名证书提供商，允许添加单域名证书和泛域名证书（注：泛域名证书，只能匹配同级的子域名，不能跨级匹配，例：*.example.com的域名证书，，可以匹配abc.example.com，不能匹配mycard.good.example.com）

**方式二：**免费申请SSL证书+设置cname记录
1、邮箱管理后台提交SSL证书申请前需先设置cname指向：ssl.exmail.qq.com；设置方式参考：登录域名后台设置cname记录，然后主机记录填写mail、记录类型选择CNAME、记录值填写ssl.exmail.qq.com，其它保持默认。
2、邮箱后台点击免费申请SSL证书，填写接收邮箱，提交申请。
![](https://wework.qpic.cn/wwpic3az/791379_eJDwCtJnSQS_fQZ_1753082955/0)

### [](https://open.work.weixin.qq.com)五、常见问题

#### [](https://open.work.weixin.qq.com)1、管理后台申请的免费SSL证书有效期是多久？

管理后台新申请SSL证书，免费证书的有效期为90天；临近到期时需手动操作续期。
