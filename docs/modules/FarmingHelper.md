---
title: FarmingHelper
---
# Farming Helper

## 配置

- angle 选择方块的**角度**
- range 选择方块的**距离**
- crops 选择可以作为**目标的**农作物
	- blocks
- waypoint 输入一个**路径点组**以完成自动收割
- keep world 总是保证你的位置为**escape.cmd**输入的目标值
- escape 是否开启逃逸？
	- cmd 输入一个**命令** 例如  **/warp garden**
	- waiting time(m) 逃逸后等待多少久继续开始自动收割单位**分钟**
	- escapes 逃逸方式
		- slot 当你的**物品栏**发生变动（**通过服务器**）
		- fov 当你的**视角**发生变动（**通过服务器**）
		- location 当你的**位置**发生变动（**通过服务器**）

## 如何工作？

当按下绑定键时，**Farming Helper** 将自动遵循您设置的**路径点组**中的每个**路径点**，并自动收割路径上周围的农作物。

当发生逃逸时，**Farming Helper** 将会立即执行命令 **escape.cmd** 并在等待 **escape.waiting time(m)** 后重新开始。

若开启keep world，**Farming Helper** 将会在世界发生变动后，等待3秒后执行命令 **escape.cmd** 并重新开始。

## 注意事项

建议您将您的 **速度** 保持在 127以下。