# bem-flex-grid

CSS flex grid, [BEM](http://getbem.com/) compliant

## Grid block and elements

At core the grid system consists of one block `.bfg` and one element `.bfg__box`.

```html
<div class="bfg">
  <div class="bfg__box"></div>
  <div class="bfg__box"></div>
  ...
</div>
```

You can fill the boxes using the optional element `.bfg__content`.

```html
<div class="bfg">
  <div class="bfg__box">
    <div class="bfg__content"></div>
  </div>
  ...
</div>
```

You can add an header to the filled boxes using the optional element `.bfg__header`.

```html
<div class="bfg">
  <div class="bfg__box">
    <div class="bfg__header"></div>
    <div class="bfg__content"></div>
  </div>
  ...
</div>
```

## .bfg modifiers

### .bfg--row and .bfg--col

It is required to define the direction the `.bfg__box` are placed in the `.bfg` container, using `.bfg--row` or `.bfg--col`.

```html
<div class="bfg bfg--row">...</div>
```

> When using `.bfg--row`, the grid needs the `.bfg` width (or its parent width) to be defined.

```html
<div class="bfg bfg--col">...</div>
```

> When using `.bfg--col`, the grid needs the `.bfg` height (or its parent height) to be defined.

### .bfg--wrap

To allow the `.bfg__box` to wrap as needed onto multiple lines, use the optional `.bfg--wrap`.

```html
<div class="bfg bfg--wrap">...</div>
```

### .bfg--lines-[N]

**[N]** (Number):`2`, `3` or `4`.

As said above, if using `.bfg.bfg--row.bfg--wrap` then the `.bfg__box` are placed in the row direction and wrapped onto multiple lines when needed.

In this case the total height of all `.bfg__box` might be bigger than the `.bfg` container height itself.

If you know that there's exactly 2 lines of `.bfg__box`, you can constrain them to fit into the `.bfg` container, by using `.bfg--lines-2`.

In the same way, use `.bfg--lines-3` or `.bfg--lines-4` to fit exactly 3 or 4 lines respectively.

```html
<div class="bfg bfg--row bfg--wrap bfg--lines-2">...</div>
```

```html
<div class="bfg bfg--row bfg--wrap bfg--lines-3">...</div>
```

```html
<div class="bfg bfg--row bfg--wrap bfg--lines-4">...</div>
```

The same pattern applies to `.bfg.bfg--wrap.bfg--col`.

```html
<div class="bfg bfg--col bfg--wrap bfg--lines-2">...</div>
```

```html
<div class="bfg bfg--col bfg--wrap bfg--lines-3">...</div>
```

```html
<div class="bfg bfg--col bfg--wrap bfg--lines-4">...</div>
```

### .bfg--gap

To add a gap between `.bfg__box`, use `.bfg--gap`.

```html
<div class="bfg bfg--gap">...</div>
```

### .bfg--overflow

By default, `.bfg__box` and `.bfg__content` are using `overflow: auto;`.

Use `.bfg--overflow` on the block to use `overflow: visible;` instead for all boxes.

```html
<div class="bfg bfg--overflow">...</div>
```

In the same way, use `.bfg__box--overflow` on the element to apply this behavior to a specific box.

```html
...
  <div class="bfg__box bfg_box--overflow">...</div>
...
```

### .bfg--[B-]disabled

**[B-]** (Breakpoint): `xl-`, `lg-`, `sm-`, `xs-` or none.

To disable the grid system use `.bfg--disabled`.

As the grid is responsive, you can disable the grid system at each breakpoint.

(see below for more details about responsive grid).

```html
<div class="bfg bfg--disabled">...</div>

<div class="bfg bfg--xl-disabled">...</div>

<div class="bfg bfg--lg-disabled">...</div>

<div class="bfg bfg--sm-disabled">...</div>

<div class="bfg bfg--xs-disabled">...</div>
```

## .bfg__box modifiers

### .bfg__box--[B-][S]

**[B-]** (Breakpoint): `xl-`, `lg-`, `sm-`, `xs-` or none.

**[S]** (Size): `1`, `2`, ..., `11`, `12`.

Define the `.bfg__box` size using `.bfg__box--1`,  `.bfg__box--2`, ...,  `.bfg__box--11`,  `.bfg__box--12`.

```html
...
  <div class="bfg__box bfg__box--1"></div>
  <div class="bfg__box bfg__box--2"></div>
  ...
  <div class="bfg__box bfg__box--11"></div>
  <div class="bfg__box bfg__box--12"></div>
...
```

### .bfg__box--fixed

Use `.bfg__box--fixed` to indicate that a `.bfg__box` should not grow or shrink.

Here's an example when using `.bfg--row`:

```html
<div class="bfg bfg--row">
  <div class="bfg__box bfg__box--fixed" style="width:150px">
    <!-- width is fixed at 150px -->
  </div>
  <div class="bfg__box bfg__box--4">
    <!-- width is 4/12 of the `.bfg` width -->
  </div>
  <div class="bfg__box">
    <!-- width is 8/12 of the `.bfg` width, minus 150px -->
  </div>
</div>
```

Here's an example when using `.bfg--col`:

```html
<div class="bfg bfg--col">
  <div class="bfg__box bfg__box--fixed" style="height:150px"></div>
  <div class="bfg__box bfg__box--4"></div>
  <div class="bfg__box"></div>
</div>
```

### Responsive grid

The grid is responsive, meaning the `.bfg__box` size can be configured to change at each breakpoint.

**Example:**

- Use `.bfg__box--5` to set the box size to be 5/12 of the available size for all *screen size* (even greater than 1200px).
- Add `.bfg__box--xl-6` to increase the size on *extra large screens* (until 1200px).
- Add `.bfg__box--lg-4` to reduce the size on *large screens* (until 992px).
- Add `.bfg__box--sm-8` to increase the size on *small screens* (until 768px).
- Add `.bfg__box--xs-12` to increase the size on *extra small screens* (until 576px).

```html
...
  <div class="
    bfg__box
    bfg__box--5
    bfg__box--xl-6
    bfg__box--lg-4
    bfg__box--sm-8
    bfg__box--xs-12">
  </div>
...
```

## .bfg__header and .bfg__content modifiers

Use `.bfg__content.bfg__content--fill` to fill the box content.

Use optional `.bfg__header.bfg__header--fill` to add an header to the box content.

```html
...
  <div class="bfg__header bfg__header--fill"></div>
  <div class="bfg__content bfg__content--fill"></div>
...
```

Use `.bfg__content--nopad` to remove the box content padding.

```html
...
  <div class="bfg__content bfg__content--nopad"></div>
...
```

## Nested .bfg

To nest grids, use `.bfg` *block* on the `.bfg__box` *element*.

**Example:**

See below the `<div>` which have 2 roles:

- `.bfg__box.bfg__box--6` as it is an *element* of the global `.bfg.bfg--col` *block*.
- `.bfg.bfg--row` as it is a *block* of the nested `.bfg__box` *elements*.

```html
<div class="bfg bfg--col bfg--gap">
  <div class="bfg__box bfg__box--3"></div>

  <!-- Nested grid starts here, on the .bfg__box element -->
  <div class="bfg__box bfg__box--6 bfg bfg--row">

    <div class="bfg__box bfg__box--3"></div>
    <div class="bfg__box bfg__box--6"></div>
    <div class="bfg__box bfg__box--3"></div>

  </div>

  <div class="bfg__box bfg__box--3"></div>
</div>
```
