---
title: "如何将Office365的所有邮箱访问权限授予邮箱管理员账号"
source: "https://open.work.weixin.qq.com/help2/pc/21495"
crawl_date: "2026-03-26"
---

# 如何将Office365的所有邮箱访问权限授予邮箱管理员账号

### [](https://open.work.weixin.qq.com)一、什么是“邮箱访问权限”

“邮箱访问权限”是允许便其他用户能够打开此邮箱以及查看、添加和删除邮箱的内容的权限。
可以通过赋予管理员邮箱此权限，实现迁移历史邮件。

### [](https://open.work.weixin.qq.com)二、如何设置“邮箱访问权限”

你可以通过以下两种办法设置：

#### [](https://open.work.weixin.qq.com)方法一：使用Windows PowerShell向管理员授予对 Microsoft 365 中所有用户邮箱的访问权限

步骤 1：Windows电脑左下角搜索PowerShell，选中Windows PowerShell，右键，然后单击“以管理员身份运行”
![](https://wework.qpic.cn/wwpic3az/222857_ADd3zM_9Q_WaEWQ_1733797032/0)

步骤2：安装 ExchangeOnlineManagement 模块 （如果模块已安装，可以跳过此步骤）
`Install-Module -Name ExchangeOnlineManagement`

步骤3：连接到 Exchange Online
如果是国际版输入以下命令
`Connect-ExchangeOnline`

如果是国内版输入以下命令
`Connect-ExchangeOnline -ExchangeEnvironmentName O365China`

会弹出以下登录框，登录管理员账号密码

步骤4：授予管理员对 Microsoft 365 中所有用户邮箱的完全访问权限
注意将以下命令中的 [AdministratorAccount@contoso.com](https://open.work.weixin.qq.commailto:AdministratorAccount@contoso.com) 替换为需要你的授权管理员账号
`Get-Mailbox -ResultSize unlimited -Filter {(RecipientTypeDetails -eq 'UserMailbox') -and (Alias -ne 'Admin')} | Add-MailboxPermission -User [AdministratorAccount@contoso.com](https://open.work.weixin.qq.commailto:AdministratorAccount@contoso.com) -AccessRights fullaccess -InheritanceType all`

#### [](https://open.work.weixin.qq.com)方法二：Exchange 管理中心邮箱委派

步骤1：使用管理员账号登录进入 Exchange 管理中心
国际版 Exchange 管理中心地址
[https://admin.exchange.microsoft.com/#/](https://admin.exchange.microsoftonline.cn/#/)

世纪互联版 Exchange 管理中心地址
[https://admin.exchange.microsoftonline.cn/#/](https://admin.exchange.microsoftonline.cn/#/)

步骤2：左侧导航栏选择 收件人>邮箱
![](https://wework.qpic.cn/wwpic3az/741825_X55TbJuOQyaMj7J_1733796914/0)
步骤3: 多选选中需要分配权限的邮箱
![](https://wework.qpic.cn/wwpic3az/550003_mc09NxCcQyKh6AB_1733797004/0)
步骤4: 单击“邮箱委派”，在 “添加代理”文本框中，输入你的邮箱账号。
![](https://wework.qpic.cn/wwpic3az/616281_zuiZDVefRcyxdNo_1733797011/0)

步骤5: 在 “选择权限类型” 下拉列表中，选择“完全访问权限”，并单击下方“保存”按钮确认。
![](https://wework.qpic.cn/wwpic3az/414218_P8-KJSQTROOvzhG_1733797021/0)

步骤6: 稍微等待一段时间，显示“已添加批量添加的邮箱代理” 的提示说明本次操作已经成功。

参考链接
https://learn.microsoft.com/zh-cn/exchange/recipients-in-exchange-online/manage-permissions-for-recipients 

参考链接
https://learn.microsoft.com/zh-cn/exchange/troubleshoot/administration/how-to-use-powershell-to-grant-admin-access-to-all-mailboxes
