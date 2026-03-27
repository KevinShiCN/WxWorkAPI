---
title: "「个性化登录设置」如何添加/修改Cname记录值？"
source: "https://open.work.weixin.qq.com/help2/pc/19843"
crawl_date: "2026-03-26"
---

# 「个性化登录设置」如何添加/修改Cname记录值？

邮件高级功能企业邮箱，设置「个性化登录」功能，需登录域名服务商后台添加正确的CNAME解析记录。请您按照以下指引进行操作。

### [](https://open.work.weixin.qq.com)一、解析记录说明

需要根据企业邮箱的HTTPS功能状态，设置对应的CNAME记录值：
**记录值类型：**CNAME记录
**主机记录：**mail
**记录值：**

- 若未开启「HTTPS」功能，指向：tp.exmail.qq.com
- 若已开启「HTTPS」功能，指向：ssl.exmail.qq.com

注：「个性化登录」仅需设置一条上述CNAME记录，请根据贵公司的实际情况进行添加或修改。

### [](https://open.work.weixin.qq.com)二、腾讯云设置步骤详解（以腾讯云为例）

可以通过以下步骤在腾讯云完成解析设置：

#### [](https://open.work.weixin.qq.com)1、进入域名管理

登录腾讯云控制台，点击页面左上角的导航菜单（“三”），选择【我的域名】，进入域名管理首页。
![](https://wework.qpic.cn/wwpic3az/273475_UD53MnCcQyyqL2d_1727583407/0)

#### [](https://open.work.weixin.qq.com)2、进入解析设置页

在管理控制台左侧主导航栏中，点击【我的域名】，在右侧的域名列表中找到您需要设置的域名，点击对应的【解析】按钮。
![](https://wework.qpic.cn/wwpic3az/119293_uNaGuZ1tQaGERS2_1727583508/0)

#### [](https://open.work.weixin.qq.com)3、添加解析记录

在解析设置页面，点击【添加记录】按钮；在弹出的表单中，按以下信息填写：
**主机记录：**填写 mail
**记录类型：**选择 CNAME
**记录值（请根据企业实际情况进行添加）：**

- 若未开启「HTTPS」功能，指向：tp.exmail.qq.com
- 若已开启「HTTPS」功能，指向：ssl.exmail.qq.com

**其他设置：**如TTL（生存时间），可保持默认值。
填写完毕后，点击【确认】保存。

**温馨提示：**
（1）记录值更新：如果您之前为邮箱解析设置的记录值是：exmail.qq.com，请将其修改为上述新的记录值（tp.exmail.qq.com或 ssl.exmail.qq.com）；
（2）唯一性：只需要保留一条「个性化登录」功能要求设置CNAME解析记录，避免因重复添加导致解析冲突。
![](https://wework.qpic.cn/wwpic3az/555299_4e48-MKsSu2lKjD_1727584101/0)
![](https://wework.qpic.cn/wwpic3az/773699_5U-PXrcySQmO_rn_1727584552/0)
