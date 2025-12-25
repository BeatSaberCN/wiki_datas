---
sidebar_position: 2
---
# 选择VR运行时环境

<提示 标题="游戏运行时环境">节奏光剑支持OpenXR运行时。你需要将你的VR设备连接至PC，并安装一个OpenXR运行时环境（即VR软件厂商提供的设备连接程序）。</提示>


<提示 标题="串流环境下，是否需要安装Steam VR？">
一些其它教程/软件可能会引导你安装[Steam VR](https://store.steampowered.com/app/250820/SteamVR/)。不必盲目安装它，是否需要安装取决于你的游戏环境。  
仅限于节奏光剑，如果你的**串流环境支持OpenXR，则无需安装Steam VR**。此游戏**不依赖Steam VR**，通过Steam VR运行游戏会增加游戏延迟并消耗额外的显存资源，这不是必须的。  
但是，如果你想要使用[Slime VR](https://slimevr.dev/)等设备，那就需要安装并使用Steam VR（通过串流软件启动Steam VR，再于Steam VR中启动游戏）。因为这些项目只支持Steam VR。
</提示>

你可以根据本页内容，选择任意一种串流方案。


## Quest头显设备官方串流软件
<提示 内容="此节内容适用于Quest 2、Quest 3、Quest3s等Meta推出的一体机设备。"/>

关于所需电脑的配置，可以参考[系统需求](Meta/sys-require)。

请在电脑上安装[Meta Horizon Link](https://www.meta.com/help/quest/1517439565442928/)，然后：
- 使用一根串流线（通常是5米长度的TypeC数据线）连接头显和电脑。可以参考[优化有线串流](OptGuide/optLineStream)。
- 或者，在头显中开启Air Link功能，并通过无线网络连接电脑。可以参考[优化无线串流](OptGuide/optAirStream)。


<提示 标题="让软件保持更新">
过旧版本的Quest系统可能无法与（具有自动更新功能的）PC串流软件Meta Horizon Link软件连接。版本不匹配会造成连接不稳定的问题，如果遇到，需要及时更新Quest的操作系统。
</提示>

<提示 标题="优化网络服务">
在启动PC端的Meta Horizon Link软件之前，请确保PC可以访问Meta服务。此软件**不响应**系统全局代理。如有需要，请在启动软件前，使用具有虚拟网卡/TUN功能的代理软件。软件启动后可关闭代理。
</提示>

<提示 标题="是否需要安装SteamVR？">
无需安装SteamVR。游戏能够直接接入由Oculus Link串流软件提供的OpenXR环境。
</提示>


## Virtual Desktop串流软件

<提示 内容="此节内容适用于Quest 2、Quest 3、Quest3s、Pico4等一体机设备。"/>

需要在头显的应用商店里购买/安装Virtual Desktop应用。然后在PC上安装并正确配置[Streamer App](https://www.vrdesktop.net/)。

然后确保你的Quest头显与PC处于同一个局域网环境内，并在头显端开启Vitrual Desktop应用，连接PC电脑。

<提示 标题="是否需要安装SteamVR？">
Virtual Desktop提供VDXR环境，可以取代SteamVR的功能。
</提示>

可以参考[优化无线串流](OptGuide/optAirStream)。

# Valve Index

参考[Valve Index 安装指南](https://help.steampowered.com/zh-cn/faqs/view/7F7D-77FB-8CAA-4329)，通常只需安装Steam VR即可使用。

## 其它VR设备

其它直连PCVR的设备，请参考厂商说明。除厂商提供的串流软件之外，可能需要额外安装SteamVR来启动游戏。

- [Pico互联](https://www.picoxr.com/cn/software/pico-link)
- [Pimax play](https://cn.pimax.com/pages/download)