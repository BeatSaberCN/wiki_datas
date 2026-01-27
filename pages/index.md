# 首页

欢迎来到节奏光剑中文维基！正在建设中。

这是临时的首页，后续会换掉。可以在这做一下记录。

import { 游戏指南, ModsBtn } from "./index.tsx"

<游戏指南 />
<ModsBtn />

<信息 标题="部署状态">维基最后部署状态如下。失效请联系管理员。<br/>[![Deploy to GitHub Pages](https://github.com/BeatSaberCN/wiki/actions/workflows/deploy.yml/badge.svg)](https://github.com/BeatSaberCN/wiki/actions/workflows/deploy.yml)</信息>

import {BuildTime, QuestLatestVersion, BSManagerRecommand} from "@site/src/components/realtime_infos.tsx"

<信息 标题="维基时效">此维基最后构建于北京时间<BuildTime/>。如果该时间长期未更新，部分内容可能过时。</信息>

<提示 标题="最近的游戏版本信息">
截至<BuildTime />，BSManager推荐的版本号是： <BSManagerRecommand />。Quest的最新可用模组的版本号是：<QuestLatestVersion />，你还可以在Quest端选择1.37版本，这个版本模组较为齐全，但可能过于老旧，部分模组缺乏更新。  
</提示>


import {NewBlogBtn} from "@site/src/components/index_panel.tsx"

<NewBlogBtn />


<hr/>
