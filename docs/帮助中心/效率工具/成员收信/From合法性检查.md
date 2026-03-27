---
title: "From合法性检查"
source: "https://open.work.weixin.qq.com/help2/pc/20060"
crawl_date: "2026-03-26"
---

# From合法性检查

一、根据RFC5322协议，邮件标头中需要包含’From’信息。

二、根据RFC2047, RFC822协议，邮件标头中的’From’形式为：

1、邮箱地址形式：prefix@domain, 如 ‘[abc@qq.com](https://open.work.weixin.qq.commailto:abc@qq.com)’。

2、昵称+空格+<邮箱地址>形式：nickname [prefix@domain](https://open.work.weixin.qq.commailto:prefix@domain)，其中，nickname为ASCII字符集中字符组合或编码文本:

（1）如果昵称全为ASCII字符，如’ABC’，邮箱地址为’[abc@qq.com](https://open.work.weixin.qq.commailto:abc@qq.com)’，则标头中的’From’为’ABC [abc@qq.com](https://open.work.weixin.qq.commailto:abc@qq.com)‘。注意’ABC’和’[abc@qq.com](https://open.work.weixin.qq.commailto:abc@qq.com)‘之间用空格隔开；

（2）如果昵称包含非ASCII字符，如中文，则请使用base64对昵称进行编码。nickname最终的形式为：”=?” charset “?” encoding “?” encoded-text “?=”。其中，charset为字符集；encoding为编码方式，’B’代表base64；encoded-text为编码后的文本。例如，昵称为’QQ邮箱昵称示例’，邮箱地址为’[abc@qq.com](https://open.work.weixin.qq.commailto:abc@qq.com)’，则对昵称进行base64编码，字符集使用UTF-8，则nickname为 ‘=?UTF-8?B?UVHpgq7nrrHmmLXnp7DnpLrkvos=?=’，最终邮件标头中的’From’为’”=?utf-8?B?UVHpgq7nrrHmmLXnp7DnpLrkvos=?=” [abc@qq.com](https://open.work.weixin.qq.commailto:abc@qq.com)‘。注意编码文本和邮件地址间用空格隔开。

参考文献
https://www.rfc-editor.org/rfc/rfc5322
https://www.rfc-editor.org/rfc/rfc822
https://www.rfc-editor.org/rfc/rfc2047
