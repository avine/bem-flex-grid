# bem-flex-grid

CSS flex grid, [BEM](http://getbem.com/) compliant.

*A responsive grid system based on the flex display property that perfectly fits to the viewport in both width and height when needed and lets you design native app layout as well as scrollable web page.*

[![Build Status](https://travis-ci.org/avine/bem-flex-grid.svg?branch=master)](https://travis-ci.org/avine/bem-flex-grid)

## Getting started

The library comes with 2 syntaxes: __class__ and __attribute__ (or __attr__ for short). Let's take a look at each of them.

### Class syntax

The first implementation sticks to the BEM convention (*Block*, *Element* and *Modifier*) using only __CSS class__, but has a more verbose syntax.

*Here's an example of a simple grid in the vertical direction (column) that uses the class syntax:*

```html
<div class="bfg bfg--col bfg--gap">
  <div class="bfg__box bfg__box--4">bem</div>
  <div class="bfg__box bfg__box--4">flex</div>
  <div class="bfg__box bfg__box--4">grid</div>
</div>
```

No worries, we'll explain all this in detail below. For now, let's see how this get converted to the attr syntax.

### Attr syntax

The second implementation derives from the BEM convention, but has a more concise syntax.

Here are the conversion rules:

- any BEM *Block* or *Element* is directly used as an HTML tag __attribute__.
- any BEM *Modifier* is used to construct the attribute's __value__.

*The example above get converted to the attr syntax as follows:*

```html
<div bfg="col gap">
  <div bfg__box="4">bem</div>
  <div bfg__box="4">flex</div>
  <div bfg__box="4">grid</div>
</div>
```

### Try it

To get instant access to the library, insert the link tag of the implementation of your choice into your web pages from *unpkg* CDN.

*Class syntax:*

```html
<link rel="stylesheet" href="https://unpkg.com/bem-flex-grid/dist/bem-flex-grid-class.min.css">
```

*Attr syntax:*

```html
<link rel="stylesheet" href="https://unpkg.com/bem-flex-grid/dist/bem-flex-grid-attr.min.css">
```

*Here's the full markup of the example above using the class syntax:*

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bem Flex Grid - Class</title>
  <link rel="stylesheet" href="https://unpkg.com/bem-flex-grid/dist/bem-flex-grid-class.min.css">
  <style>html, body { height:100%; margin:0; }</style>
</head>
<body>
  <div class="bfg bfg--col bfg--gap">
    <div class="bfg__box bfg__box--4">bem</div>
    <div class="bfg__box bfg__box--4">flex</div>
    <div class="bfg__box bfg__box--4">grid</div>
  </div>
</body>
</html>
```

> To learn more about the features, check out the [demos](https://avine.github.io/bem-flex-grid/demo.html) available for both syntaxes.

## Installation and usage

Install the package from [NPM](https://www.npmjs.com/package/bem-flex-grid) (or Yarn) and insert the link tag into your web pages or use Sass import for advanced customization.

### NPM

```bash
npm i bem-flex-grid
```

### Usage with class syntax

*Link tag:*

```html
<link rel="stylesheet" href="[PATH_TO_NODE_MODULES]/bem-flex-grid/dist/bem-flex-grid-class.css">
```

*Sass import:*

```scss
@import "~/bem-flex-grid/src/lib/bem-flex-grid-class.scss";
```

### Usage with attr syntax

*Link tag:*

```html
<link rel="stylesheet" href="[PATH_TO_NODE_MODULES]/bem-flex-grid/dist/bem-flex-grid-attr.css">
```

*Sass import:*

```scss
@import "~/bem-flex-grid/src/lib/bem-flex-grid-attr.scss";
```

### Package content

```text
bem-flex-grid/
├─ dist/
│  ├─ bem-flex-grid-attr.css
│  ├─ bem-flex-grid-attr.min.css
│  ├─ bem-flex-grid-class.css
│  ├─ bem-flex-grid-class.min.css
└─ src/
   └─ lib/
      ├─ attr/
      │  ├─ _card.scss
      │  ├─ _core.scss
      │  └─ _mixins.scss
      ├─ class/
      │  ├─ _card.scss
      │  ├─ _core.scss
      │  └─ _mixins.scss
      ├─ _variables.scss
      ├─ bem-flex-grid-attr.scss
      └─ bem-flex-grid-class.scss
```

> The `dist` folder also contains the __sourcemap__ for each CSS file.

### Browser support

Bem-flex-grid supports the latest, stable releases of all major browsers.

## API

This documentation is based on the class syntax.
But as we said above, it's really easy to switch from one syntax to another.

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

Next, insert the `.bfg-card` *block* as a child of the `.bfg__box` *element* (nesting technique)...

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

Finally, using the markup `.bfg.bfg-card` simply tells that the `.bfg` *block* contains cards elements (content, header and actions) that are not direct children of the `.bfg-card` *block*.

This allows you to define the default look and feel for all cards and lets you customize some of them, using the different `.bfg-card--*` modifiers (you'll see below how to define the card's look and feel).

But order matters! This technique works only when using the `.bfg-card--primary` modifier as the global look and feel.

```html
<!-- global card definition -->
<div class="bfg bfg-card bfg-card--primary">
  <div class="bfg__box">
    <div class="bfg-card__content"><!-- use global "primary" card type --></div>
  </div>

  <div class="bfg__box">
    <div class="bfg-card__content"><!-- use global "primary" card type --></div>
  </div>

  <!-- chained card definition (at box level) -->
  <div class="bfg__box bfg-card bfg-card--secondary">
    <div class="bfg-card__content"><!-- use local "secondary" card type --></div>
  </div>

  <div class="bfg__box">
    <!-- nested card definition (as box child) -->
    <div class="bfg-card bfg-card--secondary">
      <div class="bfg-card__content"><!-- use local "secondary" card type --></div>
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

> When using `.bfg--row` modifier, the grid needs the `.bfg` block width (or its parent width) to be defined (and that's usually the case).

```html
<div class="bfg bfg--col">...</div>
```

> When using `.bfg--col` modifier, the grid needs the `.bfg` block height (or its parent height) to be defined (and that's not always the case!).

#### Auto height: `.bfg--[B]auto-height`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

By default, the main `.bfg` block will try to fit to the height of its parent node, by using the `height: 100%` rule.

Use `.bfg--auto-height` modifier to apply `height: auto` rule instead.

```html
<div class="bfg bfg--auto-height">...</div>
```

As the grid is responsive, you can change this behavior at each breakpoint.

*Example:*

- Fit to the parent height on all *screen sizes* (even greater than 1200px).
- Use auto-height on *large screen* (until 992px).

```html
<div class="bfg bfg--lg-auto-height">...</div>
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

#### Number of lines: `.bfg--[B][N]-lines`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

**[N]** Number: `2`, `3`, `4` or `5`.

As said above, if you use the markup `.bfg.bfg--row.bfg--wrap` then `.bfg__box` elements are placed in the row direction and wrapped onto multiple lines when needed.

But in this case the total height of all `.bfg__box` elements might be bigger than the `.bfg` block height itself!

If you know that there's exactly 2 lines of `.bfg__box` elements, you can constrain them to fit into the `.bfg` block, by using `.bfg--2-lines` modifier.

In the same way, use `.bfg--3-lines`, `.bfg--4-lines` or `.bfg--5-lines` modifiers to fit into exactly 3, 4 or 5 lines respectively.

```html
<div class="bfg bfg--row bfg--wrap bfg--2-lines">...</div>
```

```html
<div class="bfg bfg--row bfg--wrap bfg--3-lines">...</div>
```

```html
<div class="bfg bfg--row bfg--wrap bfg--4-lines">...</div>
```

```html
<div class="bfg bfg--row bfg--wrap bfg--5-lines">...</div>
```

> Notice that all the rows will have the same height.

The same pattern applies to the markup `.bfg.bfg--col.bfg--wrap`.

```html
<div class="bfg bfg--col bfg--wrap bfg--2-lines">...</div>
```

```html
<div class="bfg bfg--col bfg--wrap bfg--3-lines">...</div>
```

```html
<div class="bfg bfg--col bfg--wrap bfg--4-lines">...</div>
```

```html
<div class="bfg bfg--col bfg--wrap bfg--5-lines">...</div>
```

> Notice that all the columns will have the same width.

As the grid is responsive, you can change the number of lines at each breakpoint.

*Example:*

- Fit boxes on 2 lines on all *screen sizes* (even greater than 1200px).
- Fit boxes on 3 lines on *large screen* (until 992px).
- Fit boxes on 4 lines on *small screen* (until 768px).

```html
<div class="bfg bfg--wrap
  bfg--2-lines
  bfg--lg-3-lines
  bfg--sm-4-lines">
  ...
</div>
```

#### Gap: `.bfg--gap`, `.bfg--gap-in`, `.bfg--[B]nogap`

**[B]** Breakpoint: `xl-`, `lg-`, `sm-`, `xs-` or none.

Add a gap between `.bfg__box` elements, using `.bfg--gap` modifier.

```html
<div class="bfg bfg--gap">...</div>
```

In this case, the grid is self contained and you don't need to add margin (or padding) to the parent node of the `.bfg` block.

But if you prefer to define a main margin (or padding) at the parent node of the `.bfg` block then use `.bfg--gap-in` modifier.

```html
<div style="margin: 1.5rem">
  <div class="bfg bfg--gap-in">...</div>
</div>
```

```html
<div style="padding: 1.5rem">
  <div class="bfg bfg--gap-in">...</div>
</div>
```

> The default value of the gap is `1.5rem` (see below the Sass variable `$bfg-gap`).

The advantage of using `.bfg--gap-in` modifier is that you can reduce the main margin (or padding) up to `$bfg-gap/2` when needed.

*Here's an example using the minimal main margin:*

```html
<div style="margin: 0.75rem">
  <div class="bfg bfg--gap-in">...</div>
</div>
```

The `.bfg--gap` modifier targets all `.bfg__box` elements, even those in the inner grids, if any.
To remove the gap between `.bfg__box` elements of an inner grid, use the `.bfg--nogap` modifier at the __inner grid__ level.

Here's an example with *chained* grid.

```html
<!-- main grid -->
<div class="bfg bfg--gap">
  <div class="bfg__box"><!-- box with gap --></div>
  <div class="bfg__box"><!-- box with gap --></div>

  <!-- chained inner grid -->
  <div class="bfg__box bfg bfg--nogap">

    <div class="bfg__box"><!-- box without gap --></div>
    <div class="bfg__box"><!-- box without gap --></div>

  </div>
</div>
```

> See below *chained* and *nested* grids to learn how inner grids works.

But the `.bfg--nogap` modifier can also be useful at the __main grid__ level.
Let's say your grid contains some `.bfg-card` blocks that have a nice `border-radius`.
In this case, putting the cards next to each other without gap will look weird.

To reset the `border-radius` of the card's elements, add `.bfg--nogap` modifier at the main grid.

```html
<div class="bfg bfg--nogap bfg-card bfg-card--primary">
  <div class="bfg__box">
    <div class="bfg-card__content"><!-- card without border-radius --></div>
  </div>
  <div class="bfg__box">
    <div class="bfg-card__content"><!-- card without border-radius --></div>
  </div>
</div>
```

As the grid is responsive, you can remove the gap at each breakpoint.

*Example:*

- Add the gap on all *screen sizes* (even greater than 1200px).
- Remove the gap on *small screen* (until 768px).

```html
<div class="bfg bfg--gap bfg--sm-nogap">...</div>
```

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

#### Type: `.bfg-card--[T]`

**[T]** Type: `primary`, `secondary`, `success`, `danger`, `info`, `warning` or any string.

For example, add "primary" look and feel to the card's content, header and actions using `.bfg-card--primary` modifier.

```html
...
  <div class="bfg-card bfg-card--primary">
    <div class="bfg-card__action">...</div>
    <div class="bfg-card__header">...</div>
    <div class="bfg-card__content">...</div>
  </div>
...
```

> See below the Sass mixin `bfg-card` to create your own card types.

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

## Sass customization

### Variables

You can change the grid look and feel using Sass, by overriding the variables value and referencing the Sass source file afterwards.

```scss
$bfg-breakpoints: (
  xs: 576px,
  sm: 768px,
  lg: 992px,
  xl: 1200px
) !default;

$bfg-gap: 1.5rem !default;

$bfg-card-margin: 1.5rem !default;

$bfg-card-padding: 1rem !default;

$bfg-card-header-height: 2.5rem !default;

$bfg-card-primary: (
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05),
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

$bfg-card-secondary: (
  header-border: darken(#6c757d, 5),
  header-background: #6c757d,
  header-forground: #fff,
) !default;

$bfg-card-success: (
  header-border: darken(#28a745, 5),
  header-background: #28a745,
  header-forground: #fff,
) !default;

$bfg-card-danger: (
  header-border: darken(#dc3545, 5),
  header-background: #dc3545,
  header-forground: #fff,
) !default;

$bfg-card-info: (
  header-border: darken(#17a2b8, 5),
  header-background: #17a2b8,
  header-forground: #fff,
) !default;

$bfg-card-warning: (
  header-border: darken(#ffc107, 5),
  header-background: #ffc107,
) !default;

$bfg-card-theme-included: true !default;
```

*Example:*

Let's customize the boxes gap.

```scss
@import "~/bem-flex-grid/src/lib/bem-flex-grid-class.scss" with ($bfg-gap: 2rem);
```

### Mixins

#### Cards

The `bfg-card` mixin allows you to customize the look and feel of the box's content, header and actions.

```scss
@include bfg-card($type, $settings: (), $defaults: ());
```

By default, Bem-flex-grid generates cards with the following values for the `$type` parameter: `primary`, `secondary`, `success`, `danger`, `info` and `warning`.
But you are free to completely change this naming.

*Example:*

Let's remove the default list of types and define a single type named "fancy".

```scss
@import "~/bem-flex-grid/src/lib/bem-flex-grid-class.scss" with ($bfg-card-theme-included: false);

@include bfg-card(fancy);
```

As you can see, the `$settings`and `$defaults` parameters are optional.

Now, let's use the "fancy" card using the `.bfg-card--fancy` modifier (instead of `.bfg-card--primary` which is no longer available).

```html
...
  <div class="bfg-card bfg-card--fancy">
    <div class="bfg-card__action">...</div>
    <div class="bfg-card__header">...</div>
    <div class="bfg-card__content">...</div>
  </div>
...
```

To understand the `bfg-card` mixin parameters, let's take a look at one of its internal lines of code:

```scss
$s: map-merge($bfg-card-primary, map-merge($defaults, $settings));
```

It simply means that the `$bfg-card-primary` variable is overwritten by your `$defaults` and `$settings` parameters in this order.
This is what defines the final look and feel of a card.

*Example:*

Let's add a card of type `hello` which will be available using the `.bfg-card--hello` modifier.

```scss
@import "~/bem-flex-grid/src/lib/bem-flex-grid-class.scss";

@include bfg-card(hello, (
  border-radius: 0,
  border-width: 3px,

  header-border: #90CAF9,
  header-background: #BBDEFB,
  header-forground: #1E88E5,

  content-border: #BBDEFB,
  content-background: #E3F2FD,
));
```

> Notice that omitted map keys (`box-shadow`, `header-borderless` and `content-forground` in this example) fall back to their default value (picked from the `$bfg-card-primary`).

An advanced use case of the card mixin consists to create 2 different sets of cards for "light" and "dark" themes.

*Example:*

```scss
@import "~/bem-flex-grid/src/lib/bem-flex-grid-class.scss" with (
  $bfg-card-theme-included: false,

  // Overwrite the "primary" card (let's use flat design)
  $bfg-card-primary: map-merge($bfg-card-primary, (
    box-shadow: none,
    border-radius: 0px
  ))
);

body.theme--light {
  @include bfg-card(primary);

  @include bfg-card(secondary, (
    header-border: darken(#6c757d, 5),
    header-background: #6c757d,
    header-forground: #fff
  ));
}

body.theme--dark {
  // Let's tweak the $bfg-card-primary for the "dark" theme
  $bfg-card-dark-defaults: (
    content-border: #4a4a4a,
    content-background: #2a2a2a,
    header-forground: #fff
  );

  @include bfg-card(primary, (
    header-border: #4a4a4a,
    header-background: #3a3a3a
  ), $bfg-card-dark-defaults);

  @include bfg-card(secondary, (
    header-border: darken(#6c757d, 5),
    header-background: #6c757d
  ), $bfg-card-dark-defaults);
}
```

#### Media breakpoints

The `bfg-media-breakpoint-*` mixins lets you add CSS rules that target specific screen sizes.

```scss
@include bfg-media-breakpoint-up($size) { ... }

@include bfg-media-breakpoint-down($size) { ... }
```

> Pick the `$size` value in the following list: `xl`, `lg`, `sm`, `xs`.

*Example:*

Let's add CSS rules that target only the screen whose size is greater than 992 pixels:

```scss
@include bfg-media-breakpoint-up(lg) {
  body { margin: 3rem; }
}
```

This is equivalent to:

```scss
@media (min-width: 992px) {
  body { margin: 3rem; }
}
```

## Selectors summary

Let's recap the available selectors for both __class__ and __attr__ syntaxes.

### For Class syntax

#### `.bfg` block

*Direction:*

- `.bfg--row`
- `.bfg--col`

*Auto height:*

- `.bfg--auto-height`, `.bfg--xl-auto-height`, `.bfg--lg-auto-height`, `.bfg--sm-auto-height`, `.bfg--xs-auto-height`

*Wrap onto multiple lines:*

- `.bfg--wrap`, `.bfg--xl-wrap`, `.bfg--lg-wrap`, `.bfg--sm-wrap`, `.bfg--xs-wrap`
- `.bfg--nowrap`, `.bfg--xl-nowrap`, `.bfg--lg-nowrap`, `.bfg--sm-nowrap`, `.bfg--xs-nowrap`

*Number of lines:*

- `.bfg--2-lines`, `.bfg--xl-2-lines`, `.bfg--lg-2-lines`, `.bfg--sm-2-lines`, `.bfg--xs-2-lines`
- `.bfg--3-lines`, `.bfg--xl-3-lines`, `.bfg--lg-3-lines`, `.bfg--sm-3-lines`, `.bfg--xs-3-lines`
- `.bfg--4-lines`, `.bfg--xl-4-lines`, `.bfg--lg-4-lines`, `.bfg--sm-4-lines`, `.bfg--xs-4-lines`
- `.bfg--5-lines`, `.bfg--xl-5-lines`, `.bfg--lg-5-lines`, `.bfg--sm-5-lines`, `.bfg--xs-5-lines`

*Gap:*

- `.bfg--gap`
- `.bfg--gap-in`
- `.bfg--nogap`, `.bfg--xl-nogap`, `.bfg--lg-nogap`, `.bfg--sm-nogap`, `.bfg--xs-nogap`

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

*Type:*

- `.bfg-card--primary`, `.bfg-card--secondary`, `.bfg-card--success`, `.bfg-card--danger`, `.bfg-card--info`, `.bfg-card--warning`
- ...

#### `.bfg-card__content` element

*Overflow:*

- `.bfg-card__content--overflow-visible`
- `.bfg-card__content--overflow-hidden`

*Padding:*

- `.bfg-card__content--nopad`

### For attr syntax

#### `.bfg` block attribute

*Direction:*

- `bfg="row | col"`

*Auto height:*

- `bfg="auto-height | xl-auto-height | lg-auto-height | sm-auto-height | xs-auto-height"`

*Wrap onto multiple lines:*

- `bfg="wrap | xl-wrap | lg-wrap | sm-wrap | xs-wrap"`
- `bfg="nowrap | xl-nowrap | lg-nowrap | sm-nowrap | xs-nowrap"`

*Number of lines:*

- `bfg="2-lines | xl-2-lines | lg-2-lines | sm-2-lines | xs-2-lines"`
- `bfg="3-lines | xl-3-lines | lg-3-lines | sm-3-lines | xs-3-lines"`
- `bfg="4-lines | xl-4-lines | lg-4-lines | sm-4-lines | xs-4-lines"`
- `bfg="5-lines | xl-5-lines | lg-5-lines | sm-5-lines | xs-5-lines"`

*Gap:*

- `bfg="gap | gap-in | nogap | xl-nogap | lg-nogap | sm-nogap | xs-nogap"`

*Main axis alignment:*

- `bfg="main-center | main-between | main-around"`

*Cross axis alignment:*

- `bfg="cross-start | cross-center | cross-end"`

*Order:*

- `bfg="reverse | xl-reverse | lg-reverse | sm-reverse | xs-reverse"`

*Box overflow:*

- `bfg="box-overflow-visible | box-overflow-hidden"`

*Card overflow:*

- `bfg="card-content-overflow-visible | card-content-overflow-hidden"`

*Disabled:*

- `bfg="disabled | xl-disabled | lg-disabled | sm-disabled | xs-disabled"`
- `bfg="disabled-all | xl-disabled-all | lg-disabled-all | sm-disabled-all | xs-disabled-all"`

#### `.bfg__box` element attribute

*Size:*

- `bfg__box="1 | xl-1 | lg-1 | sm-1 | xs-1"`
- `bfg__box="2 | xl-2 | lg-2 | sm-2 | xs-2"`
- `bfg__box="3 | xl-3 | lg-3 | sm-3 | xs-3"`
- ...
- `bfg__box="11 | xl-11 | lg-11 | sm-11 | xs-11"`
- `bfg__box="12 | xl-12 | lg-12 | sm-12 | xs-12"`

*Fit:*

- `bfg__box="fit"`

*Order:*

- `bfg__box="first | xl-first | lg-first | sm-first | xs-first"`
- `bfg__box="last | xl-last | lg-last | sm-last | xs-last"`
- `bfg__box="in-place | xl-in-place | lg-in-place | sm-in-place | xs-in-place"`

*Overflow:*

- `bfg__box="overflow-visible | overflow-hidden"`

*Padding:*

- `bfg__box="nopad"`

#### `.bfg-card` block attribute

*Type:*

- `bfg-card="primary | secondary | success | danger | info | warning"`
- ...

#### `.bfg-card__content` element attribute

*Overflow:*

- `bfg-card__content="overflow-visible | overflow-hidden"`

*Padding:*

- `bfg-card__content="nopad"`

## Contribute

```bash
git clone https://github.com/avine/bem-flex-grid.git

cd bem-flex-grid

npm i

# Open showcase in your favorite browser
npm start

# Compile SASS (`src/lib/`) to CSS (`dist/`)
npm run build

# Build HTML documentation (`src/index.html`) from `README.md`
npm run readme
```

## License

[MIT](https://github.com/avine/bem-flex-grid/blob/master/LICENSE)
