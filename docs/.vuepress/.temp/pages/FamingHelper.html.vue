<template><div><h1 id="farming-helper" tabindex="-1"><a class="header-anchor" href="#farming-helper" aria-hidden="true">#</a> Farming Helper</h1>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<ul>
<li>angle 选择方块的<strong>角度</strong></li>
<li>range 选择方块的<strong>距离</strong></li>
<li>crops 选择可以作为<strong>目标的</strong>农作物
<ul>
<li>blocks</li>
</ul>
</li>
<li>waypoint 输入一个<strong>路径点组</strong>以完成自动收割</li>
<li>keep world 总是保证你的位置为<strong>escape.cmd</strong>输入的目标值</li>
<li>escape 是否开启逃逸？
<ul>
<li>cmd 输入一个<strong>命令</strong> 例如  <strong>/warp garden</strong></li>
<li>waiting time(m) 逃逸后等待多少久继续开始自动收割单位<strong>分钟</strong></li>
<li>escapes 逃逸方式
<ul>
<li>slot 当你的<strong>物品栏</strong>发生变动（<strong>通过服务器</strong>）</li>
<li>fov 当你的<strong>视角</strong>发生变动（<strong>通过服务器</strong>）</li>
<li>location 当你的<strong>位置</strong>发生变动（<strong>通过服务器</strong>）</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="如何工作" tabindex="-1"><a class="header-anchor" href="#如何工作" aria-hidden="true">#</a> 如何工作？</h2>
<p>当按下绑定键时，<strong>Farming Helper</strong> 将自动遵循您设置的<strong>路径点组</strong>中的每个<strong>路径点</strong>，并自动收割路径上周围的农作物。</p>
<p>当发生逃逸时，<strong>Farming Helper</strong> 将会立即执行命令 <strong>escape.cmd</strong> 并在等待 <strong>escape.waiting time(m)</strong> 后重新开始。</p>
<p>若开启keep world，<strong>Farming Helper</strong> 将会在世界发生变动后，等待3秒后执行命令 <strong>escape.cmd</strong> 并重新开始。</p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<p>建议您将您的 <strong>速度</strong> 保持在 127以下。</p>
</div></template>


