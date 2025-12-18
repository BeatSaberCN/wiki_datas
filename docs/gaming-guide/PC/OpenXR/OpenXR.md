---
sidebar_position: 2
---
# 选择VR运行时环境

<提示 内容="游戏运行时环境">节奏光剑支持OpenXR运行时。你需要将你的VR设备连接至PC，并安装一个OpenXR运行时环境（即厂商提供的设备连接程序）。</提示>

你可以根据本页内容，选择一种串流方案。

<提示 标题="串流环境下，是否需要安装Steam VR？">
对于节奏光剑这款游戏，如果串流**环境支持OpenXR，那就没有必要安装Steam VR**。节奏光剑不依赖SteamVR，它会增加游戏延迟并消耗额外的显存资源，这不是必须的。但是，如果你想要使用SlimeVR等设备，那就需要安装，因为这些第三方项目只支持SteamVR，而不支持由串流软件提供的Runtime环境。安装[SteamVR](https://store.steampowered.com/app/250820/SteamVR/)后，你可以在串流环境中启动SteamVR，然后再在SteamVR里启动游戏。
</提示>


## Quest头显设备官方串流软件
<提示 内容="此节内容适用于Quest 2、Quest 3、Quest3s等Meta推出的一体机设备。"/>

关于所需电脑的配置，可以参考[系统需求](Meta/sys-require)。

请在电脑上安装[Meta Horizon Link](https://www.meta.com/help/quest/1517439565442928/)，然后：
- 使用一根串流线（通常是5米长度的TypeC数据线）连接头显和电脑。可以参考[优化有线串流](OptGuide/optLineStream)。
- 或者，在头显中开启Air Link功能，并通过无线网络连接电脑。可以参考[优化无线串流](OptGuide/optAirStream)。

<提示 标题="是否需要安装SteamVR？">
由于Oculus Runtime支持OpenXR，因此无需安装SteamVR。
</提示>

## Virtual Desktop串流软件

<提示 内容="此节内容适用于Quest 2、Quest 3、Quest3s、Pico4等一体机设备。"/>

你需要在头显的应用商店里购买/安装Virtual Desktop应用。然后在PC上安装并正确配置[Streamer App](https://www.vrdesktop.net/)。

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