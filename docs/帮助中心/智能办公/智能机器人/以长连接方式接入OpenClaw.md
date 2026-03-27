---
title: "以长连接方式接入OpenClaw"
source: "https://open.work.weixin.qq.com/help2/pc/21658"
crawl_date: "2026-03-26"
---

# 以长连接方式接入OpenClaw

## [](https://open.work.weixin.qq.com)前提

请确保你的设备已经安装了OpenClaw

## [](https://open.work.weixin.qq.com)一、安装企业微信 OpenClaw 插件

** 1.打开终端，输入以下命令，安装企微插件**
`openclaw plugins install @wecom/wecom-openclaw-plugin`

**2.安装成功提示如图**
![](https://wework.qpic.cn/wwpic3az/161324_z30hb8k-RHOqwJ1_1772984779/0)

##### [](https://open.work.weixin.qq.com)**3.重启openclaw**

`openclaw gateway start`
![](https://wework.qpic.cn/wwpic3az/811608_wZVEUIzgQmySm3O_1772802227/0)

## [](https://open.work.weixin.qq.com)二、更新企业微信 OpenClaw 插件

** 1.打开终端，输入以下命令，更新企微插件**
`openclaw plugins update wecom-cpenclaw-plugin`

## [](https://open.work.weixin.qq.com)三、配置 OpenClaw

**1.在终端中，输入以下命令，添加渠道**
`openclaw channels add`

**2.会出一个命令行的配置引导，使用方向键切换选项，空格选择，回车确定。选择「Yes」**
![](https://wework.qpic.cn/wwpic3az/839763_MxA1CHELRLK4BP5_1772802716/0)

**3.在「select channel」步骤，选择 channel 为「企业微信」**
![](https://wework.qpic.cn/wwpic3az/225709_0hqr4YwTQ1OafLU_1772802357/0)

**4.输入企业微信机器人Bot ID、secret**
![](https://wework.qpic.cn/wwpic3az/908565_g1SVjdC7Sbe-tOx_1772802370/0)

**5.选择finish**
![](https://wework.qpic.cn/wwpic3az/447010_gxZUS2z7Q2miwu5_1772802380/0)

**6.选择先完成配对，选择「Yes」**
![](https://wework.qpic.cn/wwpic3az/11243_xh80HqkyS6GDuFY_1772802388/0)

**7.选择配对方式，选择「Pairing」**
![](https://wework.qpic.cn/wwpic3az/175447_J2mxTAOqSFiGzdv_1772802398/0)

**8.完成后续配置**
![](https://wework.qpic.cn/wwpic3az/303841_cTVT4ILmQd-xF4E_1772802407/0)

**9.可看到配置渠道成功**
![](https://wework.qpic.cn/wwpic3az/298138_Lj8cXOt1RF2_4s1_1772802415/0)

**10.在企业微信中，保存机器人，并跟他发消息。会收到一个配置密钥**
![](https://wework.qpic.cn/wwpic3az/953493_UMoMYwYKSJOCIDb_1772802423/0)

**11.复制此信息，并输入在终端中**
![](https://wework.qpic.cn/wwpic3az/358140_oEV1G1uySb2dtFN_1772802434/0)

**12.配对成功**
![](https://wework.qpic.cn/wwpic3az/545075_u0c8ZuY_QUCq02-_1772802441/0)

**13.此时可在企业微信中正常对话**
![](https://wework.qpic.cn/wwpic3az/82359_O08avo-6SlOY0Km_1772802450/0)
