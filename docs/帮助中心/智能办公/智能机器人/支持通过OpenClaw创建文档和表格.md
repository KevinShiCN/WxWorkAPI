---
title: "支持通过OpenClaw创建文档和表格"
source: "https://open.work.weixin.qq.com/help2/pc/21672"
crawl_date: "2026-03-26"
---

# 支持通过OpenClaw创建文档和表格

### [](https://open.work.weixin.qq.com)1 说明

企业微信为API模式智能机器人提供文档MCP能力，机器人可以便捷地创建文档和智能表格，提高办公效率。
成员可以让机器人完成报告生成、信息汇集等工作。
将以机器人的身份使用此能力，创建后，机器人将成为文档的创建者；机器人仅可编辑自己创建的文档。

### [](https://open.work.weixin.qq.com)2 场景示例

#### [](https://open.work.weixin.qq.com)2.1 创建文档

帮我搜集本周零售行业重要新闻，汇总成一篇企业微信文档
![](https://wework.qpic.cn/wwpic3az/418075_YSBZNx0jTbqXMBU_1773902636/0)
创建效果
![](https://wework.qpic.cn/wwpic3az/354075_gfR1SDBER7-dB8F_1773902650/0)

#### [](https://open.work.weixin.qq.com)2.2 创建智能表格

帮我整理餐饮行业top10企业的基础信息和本月动向，整理成一份企业微信智能表格，包括企业名称、企业规模、主营餐饮类目、近期动向
![](https://wework.qpic.cn/wwpic3az/283998_jimiAGhdRam86Ib_1773902670/0)
创建效果
![](https://wework.qpic.cn/wwpic3az/421852_UEMn1EjkRJyLOYF_1773902682/0)

### [](https://open.work.weixin.qq.com)3 配置步骤

注：以下配置步骤以本地版openclaw为例

#### [](https://open.work.weixin.qq.com)3.1 安装或更新到最新版本插件

- 在本地终端输入命令行，自动进行插件安装或更新：
`npx -y @wecom/wecom-openclaw-cli install --force`
- 若此前未接入过企微机器人，会引导使用企业微信一键扫码创建机器人，扫码后按页面操作即可完成创建
![](https://wework.qpic.cn/wwpic3az/930452_qUKDdjrbRdSfMA7_1773902758/0)
- 若此前已经接入过企业微信智能机器人，会提示是否还原，输入“Y”即可，继续使用原机器人id及配置
![](https://wework.qpic.cn/wwpic3az/856844_q2GwQxnCRU2cuYH_1773902776/0)

#### [](https://open.work.weixin.qq.com)3.2 授权机器人使用文档能力

**方式一：直接在对话中完成授权**

- 对话前，建议在机器人对话中，输入“/reset”指令新起会话，避免旧会话会干扰新skill识别
![](https://wework.qpic.cn/wwpic3az/425577_hzFpcKEHR_KuSfg_1773902807/0)
- 通过自然语言要求机器人进行文档操作，例如：“帮我搜集本周零售行业重要新闻，汇总成一篇企业微信文档”
- 机器人会自动给你发送授权链接
![](https://wework.qpic.cn/wwpic3az/533001_nJcWKuBcR3u-1eW_1773902822/0)
- 点击进入授权页面，点击“确认授权”，授权机器人文档使用权限
![](https://wework.qpic.cn/wwpic3az/352414_r8Mng112TH-1-YL_1773902850/0)
5.授权成功，只需要告诉机器人“授权了”，就会自动对接MCP服务并生成文档
![](https://wework.qpic.cn/wwpic3az/663445_ODP-_eQhR8u3Grq_1773902863/0)

**方式二：在智能机器人编辑页，授权机器人文档使用权限**
前提：已经在企业微信创建过API模式机器人，并且接入到openclaw

- 入口：「工作台」-「智能机器人」-找到对应接入了openclaw的机器人，点击“编辑”
- 在编辑页，点击「可使用权限」
![](https://wework.qpic.cn/wwpic3az/636054_POZSty8YRvOlut1_1773902885/0)
- 点击授权
![](https://wework.qpic.cn/wwpic3az/943243_Vj2LeEF9R8mLPmt_1773902897/0)
- 授权成功，当前授权有效期为7天，点击查看使用方式
![](https://wework.qpic.cn/wwpic3az/613232_ppLQ9ad1RZa2l_5_1773902910/0)
- 点击复制streamableHTTP URL或者JSON Config，两者任一即可
![](https://wework.qpic.cn/wwpic3az/155426_xqHWRMOERxW4Voz_1773902921/0)
- 将复制的配置，发给机器人，即可完成安装
![](https://wework.qpic.cn/wwpic3az/268156_0o4CfI0bTOud2Mh_1773902934/0)
