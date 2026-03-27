---
title: "如何将本地部署Exchange的所有邮箱访问权限授予邮箱管理员账号"
source: "https://open.work.weixin.qq.com/help2/pc/21496"
crawl_date: "2026-03-26"
---

# 如何将本地部署Exchange的所有邮箱访问权限授予邮箱管理员账号

### [](https://open.work.weixin.qq.com)一、什么是“邮箱访问权限”

“邮箱访问权限”是允许便其他用户能够打开此邮箱以及查看、添加和删除邮箱的内容的权限。
可以通过赋予管理员邮箱此权限，实现迁移历史邮件。

### [](https://open.work.weixin.qq.com)二、如何设置“邮箱访问权限”

你可以通过以下两种办法设置：

#### [](https://open.work.weixin.qq.com)方法一：使用Windows PowerShell向管理员授予所有用户邮箱的访问权限

步骤 1：Windows电脑左下角搜索PowerShell，选中Windows PowerShell，右键，然后单击“以管理员身份运行”
![](https://wework.qpic.cn/wwpic3az/530378_siAb1quNTQqJ0oI_1733797534/0)

步骤2：安装 ExchangeOnlineManagement 模块 （如果模块已安装，可以跳过此步骤）
`Install-Module -Name ExchangeOnlineManagement`

步骤3：连接到 Exchange
`Connect-ExchangeOnline -UserPrincipalName <UPN> [-ShowBanner:$false]`

备注：
1、有关详细的语法和参数信息，请参阅[ Connect-IPPSSession](https://learn.microsoft.com/zh-cn/powershell/module/exchange/connect-ippssession)。
2、< UPN >  是用户主体名称格式的帐户， (例如 [navin@contoso.onmicrosoft.com](https://open.work.weixin.qq.commailto:navin@contoso.onmicrosoft.com)) 。

步骤4：授予管理员对 Microsoft 365 中所有用户邮箱的完全访问权限
此示例为 Raymond Sam 分配 Terry Adams 的邮箱的完全访问权限。
`Add-MailboxPermission -Identity <MailboxIdentity> -User <DelegateIdentity> -AccessRights FullAccess -InheritanceType All [-AutoMapping $false]`

**建议：设置EWS最大并发数**
使用PowerShell将EWS最大并发数设置为企业的邮件搬家员工数量，可以显著提升搬家的速度
例如：需要邮件搬家的员工数量为1000，通过以下指令将最大并发数修改为1000
`Set-ThrottlingPolicy -Identity "Default" -EWSMaxConcurrency 1000`

---

#### [](https://open.work.weixin.qq.com)方式二： 通过 Exchange 管理中心邮箱向管理员授予所有用户邮箱的访问权限

步骤1.在 EAC 中，导航到收件人>邮箱。
![](https://wework.qpic.cn/wwpic3az/330569_8ceX_piJRUe33OX_1734925602/0)

步骤2.在邮箱列表中，选择要为其分配完全访问权限的邮箱，然后单击右侧的“更多选项”
![](https://wework.qpic.cn/wwpic3az/694804_xUzD6yEPT7S4fC5_1734925646/0)

步骤3.在邮箱属性页上，单击“ 邮箱委派”。
![](https://wework.qpic.cn/wwpic3az/704047_O91PE9oEQkySbGH_1734925670/0)

步骤4. 若要向代理人分配权限，请单击“完全访问权限”下的“+”，以显示一个页面，其中列出了 Exchange 组织中可分配权限的所有收件人。

选择所需的收件人，将其添加到列表中，然后单击“确定”。 还可以通过在搜索框中键入收件人的姓名，然后单击“搜索搜索”来搜索特定收件人。

![](https://wework.qpic.cn/wwpic3az/945957_IoYEXhDBQiKM4Bg_1734925899/0)

步骤5. 通过完全访问权限，代理可以打开用户邮箱并访问邮箱内容。

参考链接
https://learn.microsoft.com/zh-cn/exchange/recipients/mailbox-permissions?view=exchserver-2019 

**建议：设置EWS最大并发数**
使用PowerShell将EWS最大并发数设置为企业的邮件搬家员工数量，可以显著提升搬家的速度
例如：需要邮件搬家的员工数量为1000，通过以下指令将最大并发数修改为1000
`Set-ThrottlingPolicy -Identity "Default" -EWSMaxConcurrency 1000`
