# bem-flex-grid

CSS flex grid, [BEM](http://getbem.com/) compliant.

*A responsive grid system based on the flex display property that perfectly fits to the window size in both width and height if needed and lets you design fixed dashboard as well as scrollable page of widgets.*

[![Build Status](https://travis-ci.org/avine/bem-flex-grid.svg?branch=master)](https://travis-ci.org/avine/bem-flex-grid)

## Quick start

Get instant access by inserting the link tag into your web pages from *unpkg* CDN.

### Link tag

*For Evergreen browser:*

```html
<link rel="stylesheet" href="https://unpkg.com/bem-flex-grid/dist/bem-flex-grid.css">
```

*For IE11 compatibility:*

```html
<link rel="stylesheet" href="https://unpkg.com/bem-flex-grid/dist/bem-flex-grid.ie11.css">
```

### HTML starter markup

Here's a simple grid in the vertical direction (column) that fits to the window.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bem Flex Grid</title>
  <link rel="stylesheet" href="https://unpkg.com/bem-flex-grid/dist/bem-flex-grid.css">
  <style>
    html, body { height:100%; }
    body { margin:0; padding:1rem; box-sizing:border-box; }
  </style>
</head>
<body>
  <div class="bfg bfg--col">
    <div class="bfg__box bfg__box--4">bem</div>
    <div class="bfg__box bfg__box--4">flex</div>
    <div class="bfg__box bfg__box--4">grid</div>
  </div>
</body>
</html>
```

> To learn more about the features, check out the [demos](https://avine.github.io/bem-flex-grid/demo.html).

## Installation and usage

Install the package from [NPM](https://www.npmjs.com/package/bem-flex-grid) (or Yarn) and insert the link tag into your web pages or use Sass import for more customization.

*NPM:*

```bash
npm i bem-flex-grid
```

*Link tag:*

```html
<link rel="stylesheet" href="[PATH_TO]/node_modules/bem-flex-grid/dist/bem-flex-grid.css">
```

*Sass import:*

```scss
@import "[PATH_TO]/node_modules/bem-flex-grid/src/lib/bem-flex-grid.scss";
```

*Package content:*

```bash
├─ dist
│  ├─ bem-flex-grid.css
│  ├─ bem-flex-grid.ie11.css
│  ├─ bem-flex-grid.min.css
│  └─ bem-flex-grid.ie11.min.css
└─ src
   └─ lib
      ├─ _variables.scss
      ├─ _mixins.scss
      ├─ _core.scss
      ├─ _card.scss
      ├─ bem-flex-grid.scss
      └─ bem-flex-grid.ie11.scss
```

## API

### Grid blocks and elements

At core the grid system consists of one `.bfg` block and one or more `.bfg__box` elements.

```html
<div class="bfg">
  <div class="bfg__box">...</div>
  <div class="bfg__box">...</div>
  ...
</div>
```

The box's content can be anything, but the `.bfg-card` block can be used to fill the box with a card.

> Only one card is allowed per box.

The card's content must be placed inside a `.bfg-card__content` element.

```html
<div class="bfg-card">
  <div class="bfg-card__content">...</div>
</div>
```

Then you can add an header to the card using the optional `.bfg-card__header` element and one or more actions to the header using the optional `.bfg-card__action` element.

```html
<div class="bfg-card">
  <div class="bfg-card__action">...</div>
  <div class="bfg-card__action">...</div>
  ...
  <div class="bfg-card__header">...</div>
  <div class="bfg-card__content">...</div>
</div>
```

Insert the `.bfg-card` *block* as a child of the `.bfg__box` *element* (nesting technique)...

```html
<div class="bfg">
  <div class="bfg__box">
    <div class="bfg-card">
      <div class="bfg-card__content">...</div>
    </div>
  </div>
</div>
```

...or use the markup `.bfg__box.bfg-card` to treat a `.bfg__box` *element* as a `.bfg-card` *block* too (chaining technique).

```html
<div class="bfg">
  <div class="bfg__box bfg-card">
    <div class="bfg-card__content">...</div>
  </div>
</div>
```

Finally, using the markup `.bfg.bfg-card` simply tells that the `.bfg` *block* contains cards elements (content, header and action) that are not direct children of the `.bfg-card` *block*.

This allows you to define a default look and feel for all cards and lets you customize some of them, using the different `.bfg-card--*` modifiers (you'll see below how to define the card's look and feel).

```html
<!-- global card definition -->
<div class="bfg bfg-card bfg-card--primary">
  <div class="bfg__box">
    <div class="bfg-card__content"><!-- use global "primary" theme --></div>
  </div>

  <div class="bfg__box">
    <div class="bfg-card__content"><!-- use global "primary" theme --></div>
  </div>

  <!-- chained card definition (at box level) -->
  <div class="bfg__box bfg-card bfg-card--secondary">
    <div class="bfg-card__content"><!-- use local "secondary" theme --></div>
  </div>

  <div class="bfg__box">
    <!-- nested card definition (as box child) -->
    <div class="bfg-card bfg-card--secondary">
      <div class="bfg-card__content"><!-- use local "secondary" theme --></div>
    </div>
  </div>
</div>
```

> The `.bfg-card` block can also be used as a standalone component, outside of the `.bfg` block.

### `.bfg` modifiers

#### Direction: `.bfg--row`, `.bfg--col`

It is required to define the direction the `.bfg__box` elements are placed in the `.bfg` block, using `.bfg--row` or `.bfg--col` modifiers.

```html
<div class="bfg bfg--row">...</div>
```

> When using `.bfg--row` modifier, the grid needs the `.bfg` block width (or its parent width) to be defined.

```html
<div class="bfg bfg--col">...</div>
```

> When using `.bfg--col` modifier, the grid needs the `.bfg` block height (or its parent height) to be defined.

#### Auto height: `.bfg--height-auto`

By default, the main `.bfg` block will try to fit to the height of its parent node, by using the `height: 100%` rule.

Use `.bfg--height-auto` modifier to apply `height: auto` rule instead.

```html
<div class="bfg bfg--height-auto">...</div>
```

#### Wrap onto multiple lines: `.bfg--[B]wrap`,  `.bfg--[B]nowrap`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

By default, `.bfg__box` elements are displayed onto one line and can not leave outside the `.bfg` block.

To allow `.bfg__box` elements to wrap as needed onto multiple lines, use the `.bfg--wrap` modifier.

```html
<div class="bfg bfg--wrap">...</div>
```

As the grid is responsive, you can change this behavior at each breakpoint.

*Example:*

- Wrap onto multiple lines on all *screen sizes* (even greater than 1200px).
- Do not wrap on *large screen* (until 992px).
- Wrap again on *small screen* (until 768px).

```html
<div class="bfg
  bfg--wrap
  bfg--lg-nowrap
  bfg--sm-wrap">
  ...
</div>
```

#### Number of lines: `.bfg--[B]lines-[N]`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

**[N]** Number: `2`, `3` or `4`.

As said above, if you use the markup `.bfg.bfg--row.bfg--wrap` then `.bfg__box` elements are placed in the row direction and wrapped onto multiple lines when needed.

But in this case the total height of all `.bfg__box` elements might be bigger than the `.bfg` block height itself!

If you know that there's exactly 2 lines of `.bfg__box` elements, you can constrain them to fit into the `.bfg` block, by using `.bfg--lines-2` modifier.

In the same way, use `.bfg--lines-3` or `.bfg--lines-4` modifiers to fit into exactly 3 or 4 lines respectively.

```html
<div class="bfg bfg--row bfg--wrap bfg--lines-2">...</div>
```

```html
<div class="bfg bfg--row bfg--wrap bfg--lines-3">...</div>
```

```html
<div class="bfg bfg--row bfg--wrap bfg--lines-4">...</div>
```

> Notice that all the rows will have the same height.

The same pattern applies to the markup `.bfg.bfg--col.bfg--wrap`.

```html
<div class="bfg bfg--col bfg--wrap bfg--lines-2">...</div>
```

```html
<div class="bfg bfg--col bfg--wrap bfg--lines-3">...</div>
```

```html
<div class="bfg bfg--col bfg--wrap bfg--lines-4">...</div>
```

> Notice that all the columns will have the same width.

As the grid is responsive, you can change the number of lines at each breakpoint.

*Example:*

- Fit boxes on 2 lines on all *screen sizes* (even greater than 1200px).
- Fit boxes on 3 lines on *large screen* (until 992px).
- Fit boxes on 4 lines on *small screen* (until 768px).

```html
<div class="bfg bfg--wrap
  bfg--lines-2
  bfg--lg-lines-3
  bfg--sm-lines-4">
  ...
</div>
```

#### Gap: `.bfg--gap`, `.bfg--gap-in`, `.bfg--nogap`

Add a gap between `.bfg__box` elements, using `.bfg--gap` modifier.

```html
<div class="bfg bfg--gap">...</div>
```

In this case, the grid is self contained and you don't need to add margin (or padding) to the parent node of the `.bfg` block.

But if you prefer to define a main margin (or padding) at the parent node of the `.bfg` block then use `.bfg--gap-in` modifier.

```html
<div style="margin: 1rem">
  <div class="bfg bfg--gap-in">...</div>
</div>
```

```html
<div style="padding: 1rem">
  <div class="bfg bfg--gap-in">...</div>
</div>
```

> The default value of the gap is `1rem` (see below the Sass variable `$bfg-gap`).

Use `.bfg--nogap` modifier to remove the gap on an inner grid.
Here's an example with *chained* grid.

```html
<div class="bfg bfg--gap">
  <div class="bfg__box"><!-- with gap --></div>
  <div class="bfg__box"><!-- with gap --></div>

  <div class="bfg__box bfg bfg--nogap">

    <div class="bfg__box"><!-- without gap --></div>
    <div class="bfg__box"><!-- without gap --></div>

  </div>
</div>
```

> See below *chained* and *nested* grids to learn how inner grids works.

#### Main axis alignment: `.bfg--main-[P]`

**[P]** Position: `center`, `end`, `between`, `around`.

Justify content along the "main" axis using `.bfg--main-*` modifiers.

By default, `.bfg__box` elements are packed toward the start line.

```html
<div class="bfg bfg--main-center">...</div>

<div class="bfg bfg--main-end">...</div>

<div class="bfg bfg--main-between">...</div>

<div class="bfg bfg--main-around">...</div>
```

> This is relevant only when the total size of the boxes along the line is less than `12` (see below the size modifiers for `.bfg__box` element).
> Then you can choose the distribution mode of the remaining space.

#### Cross axis alignment: `.bfg--cross-[P]`

**[P]** Position: `start`, `center`, `end`.

Align items along the "cross" axis using `.bfg--cross-*` modifiers.

By default, `.bfg__box` elements stretch to fill the `.bfg` block.

```html
<div class="bfg bfg--cross-start">...</div>

<div class="bfg bfg--cross-center">...</div>

<div class="bfg bfg--cross-end">...</div>
```

#### Order: `.bfg--[B]reverse`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

Reverse the boxes order using `.bfg--reverse` modifier.

```html
<div class="bfg bfg--reverse">...</div>
```

As the grid is responsive, you can reverse the `.bfg__box` elements order at each breakpoint.

```html
<div class="bfg bfg--reverse">...</div>

<div class="bfg bfg--xl-reverse">...</div>

<div class="bfg bfg--lg-reverse">...</div>

<div class="bfg bfg--sm-reverse">...</div>

<div class="bfg bfg--xs-reverse">...</div>
```

#### Overflow: `.bfg--box-overflow-[T]`, `.bfg--card-content-overflow-[T]`

**[T]** Type: `visible`, `hidden`.

By default, `.bfg__box` and `.bfg-card__content` elements use the `overflow: auto;` rule.

Use `.bfg--box-overflow-visible` modifier on `.bfg` block to apply the `overflow: visible;` rule instead on all `.bfg__box` elements.

In the same way, use `.bfg--box-overflow-hidden` modifier to apply the `overflow: hidden;` rule instead.

```html
<div class="bfg bfg--box-overflow-visible">...</div>
<div class="bfg bfg--box-overflow-hidden">...</div>
```

Use `.bfg--card-content-overflow-visible` modifier on `.bfg` block to apply the `overflow: visible;` rule instead on all `.bfg-card__content` elements.

In the same way, use `.bfg--card-content-overflow-hidden` modifier to apply the `overflow: hidden;` rule instead.

```html
<div class="bfg bfg--card-content-overflow-visible">...</div>
<div class="bfg bfg--card-content-overflow-hidden">...</div>
```

> See below `.bfg__box--overflow-[T]` and `.bfg-card__content--overflow-[T]` modifiers to apply this behavior to a specific element.

#### Disabled: `.bfg--[B]disabled`, `.bfg--[B]disabled-all`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

To disable the grid system for the current `.bfg` block only, use `.bfg--disabled` modifier.

To disable the grid system for the current `.bfg` block and its chained or nested `.bfg` blocks, use `.bfg--disabled-all` modifier.

```html
<div class="bfg bfg--disabled">...</div>

<div class="bfg bfg--disabled-all">...</div>
```

As the grid is responsive, you can disable the grid system at each breakpoint.

Here's an example of disabling the grid system for the current `.bfg` block only.

```html
<div class="bfg bfg--disabled">...</div>

<div class="bfg bfg--xl-disabled">...</div>

<div class="bfg bfg--lg-disabled">...</div>

<div class="bfg bfg--sm-disabled">...</div>

<div class="bfg bfg--xs-disabled">...</div>
```

### `.bfg__box` modifiers

#### Size: `.bfg__box--[B][S]`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

**[S]** Size: `1`, `2`, ..., `11`, `12`.

Define the `.bfg__box` element size using `.bfg__box--1`,  `.bfg__box--2`, ...,  `.bfg__box--11`,  `.bfg__box--12` modifiers.

The total size available for each line is 12.

```html
...
  <div class="bfg__box bfg__box--1">...</div>
  <div class="bfg__box bfg__box--2">...</div>
  ...
  <div class="bfg__box bfg__box--11">...</div>
  <div class="bfg__box bfg__box--12">...</div>
...
```

> If the total size of the boxes along the line is less than `12`, the remaining space is distributed based on the `.bfg--main-[P]` modifiers.

As the grid is responsive, you can change the `.bfg__box` element size at each breakpoint.

*Example:*

- Use `.bfg__box--5` to set the box size to be 5/12 of the available size for all *screen size* (even greater than 1200px).
- Add `.bfg__box--xl-6` to increase the size on *extra large screen* (until 1200px).
- Add `.bfg__box--lg-4` to reduce the size on *large screen* (until 992px).
- Add `.bfg__box--sm-8` to increase the size on *small screen* (until 768px).
- Add `.bfg__box--xs-12` to increase the size on *extra small screen* (until 576px).

```html
...
  <div class="bfg__box
    bfg__box--5
    bfg__box--xl-6
    bfg__box--lg-4
    bfg__box--sm-8
    bfg__box--xs-12">
    ...
  </div>
...
```

#### Fit: `.bfg__box--fit`

Use `.bfg__box--fit` modifier to indicate that a `.bfg__box` element should not grow or shrink.

Here's an example when using `.bfg--row` modifier:

```html
<div class="bfg bfg--row">
  <div class="bfg__box bfg__box--fit" style="width:150px">
    <!-- width is fixed at 150px -->
  </div>
  <div class="bfg__box bfg__box--4">
    <!-- width is 4/12 of the remaining space (`.bfg` width, minus 150px) -->
  </div>
  <div class="bfg__box bfg__box--8">
    <!-- width is 8/12 of the remaining space (`.bfg` width, minus 150px) -->
  </div>
</div>
```

> Defining the box `width` is optional. If not defined the box width will simply fit to its content.

Here's an example when using `.bfg--col` modifier:

```html
<div class="bfg bfg--col">
  <div class="bfg__box bfg__box--fit" style="height:150px">...</div>
  <div class="bfg__box bfg__box--4">...</div>
  <div class="bfg__box bfg__box--8">...</div>
</div>
```

> Defining the box `height` is optional. If not defined the box height will simply fit to its content.

#### Order: `.bfg__box--[B]first`, `.bfg__box--[B]last`, `.bfg__box--[B]in-place`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

Change the box order using `.bfg__box--first` or `.bfg__box--last` modifiers.

Restore the box order using `.bfg__box--in-place` modifier.

```html
...
  <div class="bfg__box bfg__box--last"><!-- will move to last position --></div>
  <div class="bfg__box bfg__box--in-place"><!-- will stay in place --></div>
  <div class="bfg__box bfg__box--first"><!-- will move to first position --></div>
...
```

As the grid is responsive, you can change the `.bfg__box` element order at each breakpoint.

*Example:*

- Use `.bfg__box--first` to place the box in first position on all *screen sizes* (even greater than 1200px).
- Add `.bfg__box--lg-last` to place the box in last position on *large screen* (until 992px).
- Add `.bfg__box--sm-in-place` to restore the original box position on *small screen* (until 768px).

```html
...
  <div class="bfg__box
    bfg__box--first
    bfg__box--lg-last
    bfg__box--sm-in-place">
    ...
  </div>
...
```

#### Overflow: `.bfg__box--overflow-[T]`

**[T]** Type: `visible`, `hidden`.

By default, `.bfg__box` element use the `overflow: auto;` rule.

Use `.bfg__box--overflow-visible` modifier to apply the `overflow: visible;` rule instead.

Or use `.bfg__box--overflow-hidden` modifier to apply the `overflow: hidden;` rule instead.

```html
...
  <div class="bfg__box bfg__box--overflow-visible">...</div>
  <div class="bfg__box bfg__box--overflow-hidden">...</div>
...
```

#### Padding: `.bfg__box--nopad`

When using `.bfg--gap` modifier, add `.bfg__box--nopad` modifier to remove the padding of a specific box.

```html
<div class="bfg bfg--row bfg--gap">
  <div class="bfg__box bfg__box--4">...</div>
  <div class="bfg__box bfg__box--4 bfg__box--nopad">
    <!-- no padding -->
  </div>
  <div class="bfg__box bfg__box--4">...</div>
</div>
```

### `.bfg-card` modifier

#### Theme: `.bfg-card--[T]`

**[T]** Theme: `primary` or any string.

Add "primary" look and feel to the card's content, header and actions using `.bfg-card--primary` modifier.

```html
...
  <div class="bfg-card bfg-card--primary">
    <div class="bfg-card__action">...</div>
    <div class="bfg-card__header">...</div>
    <div class="bfg-card__content">...</div>
  </div>
...
```

> See below the Sass mixin `bfg-card` to create your own card themes.

### `.bfg-card__content` modifiers

#### Overflow: `.bfg-card__content--overflow-[T]`

**[T]** Type: `visible`, `hidden`.

By default, `.bfg-card__content` element use the `overflow: auto;` rule.

Use `.bfg-card__content--overflow-visible` modifier to apply the `overflow: visible;` rule instead.

Or use `.bfg-card__content--overflow-hidden` modifier to apply the `overflow: hidden;` rule instead.

```html
...
  <div class="bfg-card__content bfg-card__content--overflow-visible">...</div>
  <div class="bfg-card__content bfg-card__content--overflow-hidden">...</div>
...
```

#### Padding: `.bfg-card__content--nopad`

Remove the card content padding using `.bfg-card__content--nopad` modifier.

```html
...
  <div class="bfg-card__content bfg-card__content--nopad">...</div>
...
```

### Chained and nested grids

#### Chained grid

To chain grids, use markup `.bfg__box.bfg` to treat a `.bfg__box` *element* as a `.bfg` *block* too.

*Example:*

See below the `<div>` that has both roles:

- `.bfg__box.bfg__box--6` as it is an *element* of its parent `.bfg.bfg--col` *block*.
- `.bfg.bfg--row` as it is a *block* of its children `.bfg__box` *elements*.

```html
<div class="bfg bfg--col bfg--gap">
  <div class="bfg__box bfg__box--3">...</div>

  <!-- chained grid starts here, on the `.bfg__box` element -->
  <div class="bfg__box bfg__box--6 bfg bfg--row">

    <div class="bfg__box bfg__box--3">...</div>
    <div class="bfg__box bfg__box--6">...</div>
    <div class="bfg__box bfg__box--3">...</div>

  </div>

  <div class="bfg__box bfg__box--3">...</div>
</div>
```

#### Nested grid

An alternative to chained grids consists to simply nest a new `.bfg` *block* inside a `.bfg__box` *element*.

> With this markup, if you use `.bfg--gap` modifier, you'll need to add `.bfg__box--nopad` modifier on the parent node of the nested grid.

```html
<div class="bfg bfg--col bfg--gap">
  <div class="bfg__box bfg__box--3">...</div>

  <!-- `.bfg__box--nopad` modifier added to the parent node of
    the nested grid, because of the `.bfg--gap` modifier above -->
  <div class="bfg__box bfg__box--6 bfg__box--nopad">

    <!-- nested grid starts here, inside the `.bfg__box` element -->
    <div class="bfg bfg--row">
      <div class="bfg__box bfg__box--3">...</div>
      <div class="bfg__box bfg__box--6">...</div>
      <div class="bfg__box bfg__box--3">...</div>
    </div>

  </div>

  <div class="bfg__box bfg__box--3">...</div>
</div>
```

### Sass customization

#### Variables

```scss
$ie11-support: false !default;

$bfg-breakpoints: (
  xs: 576px,
  sm: 768px,
  lg: 992px,
  xl: 1200px
) !default;

$bfg-gap: 1rem !default;

$bfg-margin: 1.5rem !default;

$bfg-padding: 0.5rem !default;

$bfg-header-height: 2rem !default;

$bfg-card-primary: (
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.075),
  border-radius: 3px,
  border-width: 1px,

  header-borderless: false,
  header-border: #d5d5d5,
  header-background: #f6f6f6,
  header-forground: false,

  content-border: #ddd,
  content-background: #fff,
  content-forground: false
) !default;

$bfg-card-primary-included: true !default;
```

*Example:*

To customize the boxes gap, create a file `custo-bfg.scss` with the following content:

```scss
// Overwrite gap
$bfg-gap: 2rem;

@import "[PATH_TO]/node_modules/bem-flex-grid/src/lib/bem-flex-grid.scss";
```

#### Mixin

The `bfg-card` mixin allows you to customize the look and feel of the box's content, header and actions.

```scss
@mixin bfg-card($name, $settings) { ... }
```

*Example:*

To add a theme named `info`, create a file `custo-bfg.scss` with the following content:

```scss
@import "[PATH_TO]/node_modules/bem-flex-grid/src/lib/bem-flex-grid.scss";

// Add new theme
@include bfg-card(info, (
  border-radius: 0,
  border-width: 3px,

  header-border: #90CAF9,
  header-background: #BBDEFB,
  header-forground: #1E88E5,

  content-border: #BBDEFB,
  content-background: #E3F2FD,
));
```

> Notice that omitted map keys (`box-shadow`, `header-borderless` and `content-forground` in this example) fall back to their default value (picked from the "primary" theme).

Now, let's use the `info` theme:

```html
...
  <div class="bfg-card bfg-card--info">
    <div class="bfg-card__action">...</div>
    <div class="bfg-card__header">...</div>
    <div class="bfg-card__content">...</div>
  </div>
...
```

### Selectors summary

#### `.bfg` block

*Direction:*

- `.bfg--row`
- `.bfg--col`

*Auto height:*

- `.bfg--height-auto`

*Wrap onto multiple lines:*

- `.bfg--wrap`, `.bfg--xl-wrap`, `.bfg--lg-wrap`, `.bfg--sm-wrap`, `.bfg--xs-wrap`
- `.bfg--nowrap`, `.bfg--xl-nowrap`, `.bfg--lg-nowrap`, `.bfg--sm-nowrap`, `.bfg--xs-nowrap`

*Number of lines:*

- `.bfg--lines-2`, `.bfg--xl-lines-2`, `.bfg--lg-lines-2`, `.bfg--sm-lines-2`, `.bfg--xs-lines-2`
- `.bfg--lines-3`, `.bfg--xl-lines-3`, `.bfg--lg-lines-3`, `.bfg--sm-lines-3`, `.bfg--xs-lines-3`
- `.bfg--lines-4`, `.bfg--xl-lines-4`, `.bfg--lg-lines-4`, `.bfg--sm-lines-4`, `.bfg--xs-lines-4`

*Gap:*

- `.bfg--gap`
- `.bfg--gap-in`
- `.bfg--nogap`

*Main axis alignment:*

- `.bfg--main-center`
- `.bfg--main-end`
- `.bfg--main-between`
- `.bfg--main-around`

*Cross axis alignment:*

- `.bfg--cross-start`
- `.bfg--cross-center`
- `.bfg--cross-end`

*Order:*

- `.bfg--reverse`, `.bfg--xl-reverse`, `.bfg--lg-reverse`, `.bfg--sm-reverse`, `.bfg--xs-reverse`

*Box overflow:*

- `.bfg--box-overflow-visible`
- `.bfg--box-overflow-hidden`

*Card overflow:*

- `.bfg--card-content-overflow-visible`
- `.bfg--card-content-overflow-hidden`

*Disabled:*

- `.bfg--disabled`, `.bfg--xl-disabled`, `.bfg--lg-disabled`, `.bfg--sm-disabled`, `.bfg--xs-disabled`
- `.bfg--disabled-all`, `.bfg--xl-disabled-all`, `.bfg--lg-disabled-all`, `.bfg--sm-disabled-all`, `.bfg--xs-disabled-all`

#### `.bfg__box` element

*Size:*

- `.bfg__box--1`, `.bfg__box--xl-1`, `.bfg__box--lg-1`, `.bfg__box--sm-1`, `.bfg__box--xs-1`
- `.bfg__box--2`, `.bfg__box--xl-2`, `.bfg__box--lg-2`, `.bfg__box--sm-2`, `.bfg__box--xs-2`
- `.bfg__box--3`, `.bfg__box--xl-3`, `.bfg__box--lg-3`, `.bfg__box--sm-3`, `.bfg__box--xs-3`
- ...
- `.bfg__box--11`, `.bfg__box--xl-11`, `.bfg__box--lg-11`, `.bfg__box--sm-11`, `.bfg__box--xs-11`
- `.bfg__box--12`, `.bfg__box--xl-12`, `.bfg__box--lg-12`, `.bfg__box--sm-12`, `.bfg__box--xs-12`

*Fit:*

- `.bfg__box--fit`

*Order:*

- `.bfg__box--first`, `.bfg__box--xl-first`, `.bfg__box--lg-first`, `.bfg__box--sm-first`, `.bfg__box--xs-first`
- `.bfg__box--last`, `.bfg__box--xl-last`, `.bfg__box--lg-last`, `.bfg__box--sm-last`, `.bfg__box--xs-last`
- `.bfg__box--in-place`, `.bfg__box--xl-in-place`, `.bfg__box--lg-in-place`, `.bfg__box--sm-in-place`, `.bfg__box--xs-in-place`

*Overflow:*

- `.bfg__box--overflow-visible`
- `.bfg__box--overflow-hidden`

*Padding:*

- `.bfg__box--nopad`

#### `.bfg-card` block

*Theme:*

- `.bfg-card--primary`
- ...

#### `.bfg-card__content` element

*Overflow:*

- `.bfg-card__content--overflow-visible`
- `.bfg-card__content--overflow-hidden`

*Padding:*

- `.bfg-card__content--nopad`

### Contribute

```bash
git clone https://github.com/avine/bem-flex-grid.git

cd bem-flex-grid

npm i

# Open showcase in your favorite browser
npm start

# Compile SASS (`src/lib/`) to CSS (`dist/`)
npm run build

# Build HTML documentation (`src/index.html`) from `README.md`
npm run index
```
