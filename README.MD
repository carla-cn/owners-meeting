## 主题色

`$primary-color: #44bb55;`

需要用到主题色时，从如下的路径引入变量：

```ts
import { primaryColor } from "@/constants/color";

<h2 style={{ color: primaryColor }} className='a'>
  Yay! Welcome to umi!
</h2>;
```

```scss
@import "~@/styles/variable.scss";

a {
  color: $primary-color;
}
```
