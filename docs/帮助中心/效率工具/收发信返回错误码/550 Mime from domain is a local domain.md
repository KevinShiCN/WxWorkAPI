---
title: "550 Mime from domain is a local domain"
source: "https://open.work.weixin.qq.com/help2/pc/20072"
crawl_date: "2026-03-26"
---

# 550 Mime from domain is a local domain

**出错原因:** 邮件头中From的域名已经注册腾讯企业邮箱，禁止在域名未配置dkim签名或dkim签名无法通过校验的情况下，通过非企业邮箱域名代发的方式，通过外部服务器发送邮件至腾讯企业邮箱服务器。

**改善建议: **有两种选择:
(1) 为邮件头中From对应的域名配置dkim签名，并且发信时dkim签名可以通过校验。(dkim指引: https://open.work.weixin.qq.com/help2/pc/20058)
(2) 邮件头中的From使用子域名（如：mail.domain.com）或MX记录不是腾讯企业邮箱的域名。
