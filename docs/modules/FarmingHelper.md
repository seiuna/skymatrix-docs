---
title: FarmingHelper
---
# Farming Helper

## 选项

### mode
可选项 legit normal manual
### angle
### range
### crops
### blocks
### waypoint
选择的路径点组，名字必须以FM开头。(注意大小写)
### when over
当完成一轮循环是否做些什么。
### cmd1
当完成一轮循环执行的命令。
### keep world
保证你处在当前世界。当世界发生变化时等待若干秒执行cmd中的命令。
### lock view
锁定你的视角。
### reach
将你的挖掘距离扩展0.5格,原版为4.5仅在legit模式有效。
### free look
自由视角。
### waiting time of next(m)
当完成一轮循环后，等待若干秒继续。(单位分钟)
### cmd
**keep world**和**escape**使用的命令。
### escape
是否开启逃逸。
### waiting time(m)
当逃逸后等待若干秒重新开始。(单位分钟)
### escapes
逃逸方式 

可选值
<iframe src="//player.bilibili.com/player.html?aid=913874721&bvid=BV16M4y1p7qK&cid=1209506102&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
**fov** 当你的视角发生变化 

**location** 当你的位置发生变化

**slot** 当你的物品栏发生变化

## 如何工作？

### legit 合法 模式
自动收割视角前方的农作物 
你可以为一个路径点添加rotation switch来完成视角的自动旋转，当经过被设置的路径点后你的视角会自动的旋转180度。
### normal nuke 模式
需要在crops中选择目标农作物。
wipe soon。
### manual 手动 模式
normal 模式的手动版本 要去按住鼠标左键。
需要在crops中选择目标农作物。