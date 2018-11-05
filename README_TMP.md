# TMP

By default, the card's elements do not have any look and feel.
For example, add the `.bfg-card--primary` modifier to style your card with the "primary" theme.

You can mix the `.bfg-card` block at the `.bfg__box` element level to use a different look and feel for each box.

```html
<div class="bfg">
  <div class="bfg__box bfg-card bfg-card--primary">
    <div class="bfg-card__content"></div>
  </div>
  <div class="bfg__box bfg-card bfg-card--secondary">
    <div class="bfg-card__content"></div>
  </div>
  ...
</div>
```

Or you can mix the `.bfg-card` block at the `.bfg` block level to use the same look and feel for all boxes.

```html
<div class="bfg bfg-card bfg-card--primary">
  <div class="bfg__box">
    <div class="bfg-card__content"></div>
  </div>
  <div class="bfg__box">
    <div class="bfg-card__content"></div>
  </div>
  ...
</div>
```