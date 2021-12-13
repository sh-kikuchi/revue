---
title: CSSで三角形を作ろう。
description: スライドの矢印にも使える！
category: CSS
createdAt: 2021-10-07
updatedAt: 2021-10-07
sortNumber: 1
---

## 三角形を作ろう。
> CSSで三角形を作ってみましょう。といっても、下記のコードだけで出来てしまいます。
> 本サイトの<Design>のページでは三角形のデモがあります。borderの調整をしながら様々な三角形を作ってみて下さい。


■ HTML
```
<div class="triangle"></div>
```

■ CSS
```
.triangle{
  width: 0px;
  border-color: tomato; //ここは好きな色♪
  border-right: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid transparent; 
}
```
