---
title: "如何通过OpenClaw使用企业微信接口能力"
source: "https://open.work.weixin.qq.com/help2/pc/21668"
crawl_date: "2026-03-26"
---

# 如何通过OpenClaw使用企业微信接口能力

## [](https://open.work.weixin.qq.com)概述

- 个人/小团队场景的接口能力：
对于10人及以下的个人/小团队，企业微信为API模式智能机器人提供了消息、文档、日程、会议、待办等MCP能力，以满足个人或小团队提效场景。
- 企业场景的接口能力：
对于10人以上规模的企业，企业微信为API模式智能机器人提供了文档MCP能力，机器人可以创建文档和智能表格，提高企业场景下的办公效率。

## [](https://open.work.weixin.qq.com)一、个人/小团队接口能力使用指引

### [](https://open.work.weixin.qq.com)1.1 说明

面向10人及以下的个人/小团队，企业微信为API模式智能机器人提供了消息、文档、日程、会议等MCP能力。
机器人创建人可授权机器人使用MCP能力，授权后，机器人将以**授权用户身份**使用对应能力。同时，为避免造成越权，授权了个人/小团队接口能力的机器人将限制仅创建者可对话，其他成员不可使用。
具体能力包括：

- 收发单聊和群聊消息
- 新建和读取文档
- 新建和获取日程
- 预约和修改会议
- 新建和更新待办
- 获取通讯录成员信息

### [](https://open.work.weixin.qq.com)1.2 场景示例

#### [](https://open.work.weixin.qq.com)1.2.1 收发单聊和群聊消息

允许机器人获取单聊、群聊消息，并可向指定用户和群聊发送消息。消息总结、待办汇总、通知提醒场景更便捷。
授权后，机器人可使用当前授权用户身份获取、发送消息，请妥善保管MCP配置。

场景示例：

- 帮我查询我和张三今天的沟通内容，进行内容总结
![](https://wework.qpic.cn/wwpic3az/309514_3NzQkj2tTLq-TLf_1773993504/0)
- 帮我总结“周会群”今天的重要事项
![](https://wework.qpic.cn/wwpic3az/167226_F49oGYzFSnuCuv5_1773993534/0)
- 帮我在“工作汇报群”、“周会群”发送一个通知，内容是“今天开会时间改到4点”
![](https://wework.qpic.cn/wwpic3az/72093_G8fnDwRkRnOeSWV_1773993554/0)
发送效果
![](https://wework.qpic.cn/wwpic3az/751542_KKFSUKjxSa-nSxK_1773993565/0)
- 帮我查询最新3天的AI新闻，汇总发送给张三
![](https://wework.qpic.cn/wwpic3az/351825_RXvUL7dWSEeTCWf_1773993574/0)
发送效果：
![](https://wework.qpic.cn/wwpic3az/990539_kes7QIx8RLCcwMK_1773993584/0)

#### [](https://open.work.weixin.qq.com)1.2.2 新建和读取文档

机器人可以便捷地新建、写入、读取文档和智能表格，提高办公效率。成员可以让机器人完成报告生成、信息汇集、文档总结等工作。授权后，机器人将以完成授权的当前用户身份进行文档操作。

场景示例：

- 帮我搜集本周零售行业重要新闻，汇总成一篇企业微信文档
![](https://wework.qpic.cn/wwpic3az/487856_17ebyu33QDqSkDm_1773901950/0)
创建效果：
![](https://wework.qpic.cn/wwpic3az/421278_gRa8pmz9T2uHr5N_1773901971/0)
- 帮我整理餐饮行业top10企业的基础信息和本月动向，整理成一份企业微信智能表格，包括企业名称、企业规模、主营餐饮类目、近期动向
![](https://wework.qpic.cn/wwpic3az/633443_CQCTeJVgSwyStXw_1773901996/0)
创建效果：
![](https://wework.qpic.cn/wwpic3az/961526_zp7JJarRQjSHTjq_1773902004/0)
- 请总结下这篇文档里的内容，文档链接是：xxxxx
![](https://wework.qpic.cn/wwpic3az/67550_-VkHWFbiSqSRswf_1773993607/0)

#### [](https://open.work.weixin.qq.com)1.2.3 新建和获取日程

机器人可以新建、查询、更新日程，并且可以查看其他人的闲忙状态，添加日程的参与人员。

场景示例：

- 帮我创建一个明天下午3点-4点的日程，主题是“阶段性总结与反思”
![](https://wework.qpic.cn/wwpic3az/722204_54bSbWWARLe0WH4_1773902063/0)
创建效果：
![](https://wework.qpic.cn/wwpic3az/549694_dzhET6z9QSKjKJB_1773993649/0)
- 查询下我本周所有的日程信息，列出日程的名称、日期、时间
![](https://wework.qpic.cn/wwpic3az/714426_hlue1fcOSj21rql_1773993662/0)
- 看下我和XX下周四下午的空闲时间，安排一个1小时的讨论会
![](https://wework.qpic.cn/wwpic3az/815483_bjkn-Na8Rz2JQT__1773993695/0)
创建效果：
![](https://wework.qpic.cn/wwpic3az/562160_eMaJfsB4TLGxnOk_1773993704/0)

#### [](https://open.work.weixin.qq.com)1.2.4 预约和修改会议

机器人可以为你预定会议，并可完成查询会议信息、取消会议、添加参会人等多种操作

场景示例：

- 帮我预约一个明天下午5点的需求沟通会，邀请XXX参与，时长为1小时
![](https://wework.qpic.cn/wwpic3az/864862_8u1Kz_RNSFaCbJA_1773902134/0)
创建效果：
![](https://wework.qpic.cn/wwpic3az/992171_a5GDsDDeTYWBCmS_1773993734/0)
- 查询下我最近3天有哪些预定会议
![](https://wework.qpic.cn/wwpic3az/433500_7TmwdZ32RHuDrXY_1773993766/0)

#### [](https://open.work.weixin.qq.com)1.2.5 新建和更新待办

机器人可以为你创建待办任务，也可获取你指定时间内的待办列表、添加待办参与人、更改待办状态，任务管理更方便

场景示例：

- 帮我创建一个待办，主题为“提交项目体验报告”，提醒时间是明天下午3点
![](https://wework.qpic.cn/wwpic3az/22228_utm3l67uR9Wtwh6_1773902169/0)
创建效果：
![](https://wework.qpic.cn/wwpic3az/593639_-fjYjDq9RQiatBi_1773902175/0)
- 查询下我本周的待办事项，告诉我待办内容、提醒时间
![](https://wework.qpic.cn/wwpic3az/365160_LIwY0PuQRsWJ9U6_1773993786/0)
- 将“XXXX”这个待办改为已完成
![](https://wework.qpic.cn/wwpic3az/747443_XyaItvBVTUON8OE_1773993798/0)
修改效果：
![](https://wework.qpic.cn/wwpic3az/217942_S5Pins8FSPiDff9_1773993814/0)

#### [](https://open.work.weixin.qq.com)1.2.6 通讯录MCP能力

机器人可以获取用户通讯录内的成员基础信息，可用于预约多人日程或会议、添加待办参与人等涉及成员协作的场景。具体可见上述日程、会议等场景示例。
授权后，机器人可查询当前授权用户有权限查看的通讯录，请注意控制机器人的可使用成员范围，并妥善保管MCP配置。

### [](https://open.work.weixin.qq.com)1.3 配置步骤

注：以下配置步骤以本地版openclaw为例

#### [](https://open.work.weixin.qq.com)1.3.1 安装或更新到最新版本插件，接入智能机器人

- 在本地终端输入命令行，自动进行插件安装或更新：
`npx -y @wecom/wecom-openclaw-cli install --force`
- 若此前未接入过企微机器人，会引导使用企业微信一键扫码创建机器人，扫码后按页面操作即可完成创建
![](https://wework.qpic.cn/wwpic3az/464223_g77aUoHuQd-bWs0_1773902314/0)
- 若此前已经接入过企业微信智能机器人，会提示是否还原，输入“Y”即可，继续使用原机器人id及配置
![](https://wework.qpic.cn/wwpic3az/782313_k08HW84NTs6_fz-_1773902337/0)

#### [](https://open.work.weixin.qq.com)1.3.2 对机器人进行授权

**方式1：一键扫码授权**
若在安装插件时一键扫码创建机器人，可以便捷完成授权：
![](https://wework.qpic.cn/wwpic3az/719760_3qhtFDMDTJqM2Iv_1773902407/0)

**方式2：前往机器人完成授权**
前往「工作台-智能机器人」，找到对应机器人，点击编辑，在「可使用权限」处进行授权
![](https://wework.qpic.cn/wwpic3az/540056_AT6FkggPTJy_wfU_1773993914/0)
授权对应权限
![](https://wework.qpic.cn/wwpic3az/837850_lUiTr0J0TYC2e7H_1773993929/0)
![](https://wework.qpic.cn/wwpic3az/300710_SnDpeqUaQ2O7GMS_1773993953/0)
点击可查看具体能力
![](https://wework.qpic.cn/wwpic3az/453660_5ll-yGG0QcSfGcZ_1773993976/0)

#### [](https://open.work.weixin.qq.com)1.3.3 与机器人对话使用相关能力

- 对话前，建议在机器人对话中，输入“/reset”指令新起会话，避免旧会话会干扰新skill识别
![](https://wework.qpic.cn/wwpic3az/358805_cl8P3jl2Su6Dg9A_1773993992/0)
- 向机器人发送企微功能指令，openclaw会自动完成对应前置配置，并引导重启
![](https://wework.qpic.cn/wwpic3az/53756_KlGcwN9XSaernB__1773994005/0)
- 在本地命令行输入重启指令；重启后，便可完成初始化配置，机器人后续可顺利使用企微能力
`openclaw gateway restart`
![](https://wework.qpic.cn/wwpic3az/776368_qCUG_iwLRr6ZIMj_1773994017/0)

## [](https://open.work.weixin.qq.com)二、企业场景接口使用指引

### [](https://open.work.weixin.qq.com)2.1 说明

对于10人以上企业，企业微信为API模式智能机器人提供文档MCP能力，机器人可以便捷地创建文档和智能表格，提高办公效率。
成员可以让机器人完成报告生成、信息汇集等工作。
将以机器人的身份使用此能力，创建后，机器人将成为文档的创建者；机器人仅可编辑自己创建的文档。

### [](https://open.work.weixin.qq.com)2.2 场景示例

#### [](https://open.work.weixin.qq.com)2.2.1 创建文档

帮我搜集本周零售行业重要新闻，汇总成一篇企业微信文档
![](https://wework.qpic.cn/wwpic3az/418075_YSBZNx0jTbqXMBU_1773902636/0)
创建效果
![](https://wework.qpic.cn/wwpic3az/354075_gfR1SDBER7-dB8F_1773902650/0)

#### [](https://open.work.weixin.qq.com)2.2.2 创建智能表格

帮我整理餐饮行业top10企业的基础信息和本月动向，整理成一份企业微信智能表格，包括企业名称、企业规模、主营餐饮类目、近期动向
![](https://wework.qpic.cn/wwpic3az/283998_jimiAGhdRam86Ib_1773902670/0)
创建效果
![](https://wework.qpic.cn/wwpic3az/421852_UEMn1EjkRJyLOYF_1773902682/0)

### [](https://open.work.weixin.qq.com)2.3 配置步骤

注：以下配置步骤以本地版openclaw为例

#### [](https://open.work.weixin.qq.com)2.3.1 安装或更新到最新版本插件

- 在本地终端输入命令行，自动进行插件安装或更新：
`npx -y @wecom/wecom-openclaw-cli install --force`
- 若此前未接入过企微机器人，会引导使用企业微信一键扫码创建机器人，扫码后按页面操作即可完成创建
![](https://wework.qpic.cn/wwpic3az/930452_qUKDdjrbRdSfMA7_1773902758/0)
- 若此前已经接入过企业微信智能机器人，会提示是否还原，输入“Y”即可，继续使用原机器人id及配置
![](https://wework.qpic.cn/wwpic3az/856844_q2GwQxnCRU2cuYH_1773902776/0)

#### [](https://open.work.weixin.qq.com)2.3.2 授权机器人使用文档能力

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
