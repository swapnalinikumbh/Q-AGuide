export const cssData = [
  {
    id: 1,
    question: `What are Sass, Less, and Stylus in CSS (CSS Preprocessors)? `,
    answer: `CSS preprocessors are scripting languages that extend the capabilities of standard CSS. They allow developers to write more maintainable and efficient CSS by adding features like variables, nesting, mixins, and functions. `,
    example: `Sass:\n$primary-color: #333;\nbody { color: $primary-color; }`,
  },
  {
    id: 2,
    question: `What is CSS opacity? `,
    answer: `The opacity property controls the transparency of an element. It accepts values from 0 (completely transparent) to 1 (fully opaque). `,
    example: `div { opacity: 0.5; } // 50% transparent`,
  },
  {
    id: 3,
    question: `What is meant by universal selectors in CSS? `,
    answer: `The universal selector (*) matches all elements on the page. It’s often used for resetting margin and padding to ensure consistent styling. `,
    example: `* { margin: 0; padding: 0; box-sizing: border-box; }`,
  },
  {
    id: 4,
    question: `What is the float property in CSS? `,
    answer: `The float property is used to position elements to the left or right within their container, allowing content to wrap around them. `,
    example: `img { float: left; margin-right: 10px; }`,
  },
  {
    id: 5,
    question: `What are the main properties of Flexbox in CSS? `,
    answer: `Flexbox provides a one-dimensional layout system with properties like display: flex, flex-direction, justify-content, align-items, etc., used to control spacing and alignment. `,
    example: `.container { display: flex; justify-content: space-between; align-items: center; }`,
  },
  {
    id: 6,
    question: `What are pseudo-classes in CSS? `,
    answer: `Pseudo-classes allow styling elements in a specific state, such as :hover, :focus, :active, :visited, :first-child, :last-child and :nth-child. 
        They enhance interactivity and dynamic styling. `,
    example: `a:hover { color: red; }\ninput:focus { border-color: blue; }`,
  },
  {
    id: 7,
    question: `What is the difference between pseudo-elements and pseudo-classes? `,
    answer: `Pseudo-elements (e.g., ::before, ::after, ::first-line, ::first-letter) style parts of elements, while 
        Pseudo-classes (e.g., :hover, :focus, :active, :visited, :first-child, :last-child and :nth-child.) apply based on element states or conditions. `,
    example: `p::first-line { font-weight: bold; }\na:hover { text-decoration: underline; }`,
  },
  {
    id: 8,
    question: `Explain the CSS Box Model. `,
    answer: `The Box Model includes content, padding, border, and margin. These layers define the size and spacing of elements. The box-sizing property can be used to include or exclude padding/border from the total size. 
       
       Content: The actual content inside an HTML element, such as text, images, or other nested elements.
       Padding: The space between the content and the border of the element. It pushes the border away from the content, increasing spacing inside the box.
       Border:  A line or outline that wraps around the padding and content of the element. It visually separates the element from others.
       Margin:  The outermost space around the element that separates it from other elements. It does not have background or color.
       margin → border → padding → content`,
    example: `.box { width: 200px; padding: 20px; border: 5px solid black; margin: 10px; box-sizing: border-box; }`,
  },
  {
    id: 9,
    question: `What are the properties used in CSS borders? `,
    answer: `CSS provides border, border-width, border-style, border-color, border-radius, and directional properties (like border-top). `,
    example: `div { border: 2px dashed blue; border-radius: 8px; }`,
  },
  {
    id: 10,
    question: `What is the shorthand border property in CSS? `,
    answer: `The border shorthand sets width, style, and color in one line. It simplifies code by combining multiple border properties. `,
    example: `div { border: 1px solid #000; } // width, style, color in one`,
  },
  {
    id: 11,
    question: `Why do we use Flexbox in CSS? `,
    answer: `Flexbox (Flexible Box Layout) is used to create responsive layouts and efficiently align and distribute space among items in a container. It simplifies layout creation, enables dynamic alignment (vertical/horizontal), supports reordering, and adapts well to different screen sizes. `,
    example: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
  },
  {
    id: 12,
    question: `What is z-index in CSS? `,
    answer: `The z-index property controls the stack order of elements along the z-axis. Elements with higher z-index values are displayed in front of those with lower values. It works on positioned elements (relative, absolute, fixed) and is essential for managing overlapping elements. `,
    example: `.box1 { position: absolute; z-index: 1; }\n.box2 { position: absolute; z-index: 2; } // .box2 will appear in front`,
  },
  {
    id: 13,
    question: `What are the different types of CSS selectors? `,
    answer:
      'CSS selectors are patterns used to select and style HTML elements. Types include: universal (*), type (div), class (.class), ID (#id), descendant (div p), child (div > p), sibling (div + p), attribute ([type="text"]), pseudo-classes (:hover), and pseudo-elements (::before).',
    example: `div > p { color: blue; }\n[type="text"] { border: 1px solid #ccc; }`,
  },
  {
    id: 14,
    question: `What are default and other position values in CSS?`,
    answer: `The \`position\` property in CSS determines how an element is placed in the document flow and how it behaves in relation to other elements.

1. "static (default)":
   - Elements are positioned according to the normal document flow (top to bottom).
   - Top, right, bottom, left properties "do not apply".
   - This is the default behavior of all HTML elements unless overridden.

2. "relative":
   - The element stays in the normal flow, occupying space as usual.
   - But it can be moved visually using \`top\`, \`right\`, \`bottom\`, or \`left\`, "relative to its original position".
   - Useful for minor shifts without affecting other elements’ layout.

3. "absolute":
   - Removed from normal flow — it doesn't take up space.
   - Positioned "relative to the nearest ancestor with a position other than static" (relative, absolute, or fixed).
   - If no such ancestor, it’s positioned relative to the \`<html>\` element.
   - Commonly used in dropdowns, modals, tooltips, etc.

4. "fixed":
   - Similar to absolute but "always positioned relative to the viewport", not any ancestor.
   - It stays fixed in place even when the page is scrolled.
   - Good for headers, footers, or floating buttons.

5. "sticky":
   - A hybrid between relative and fixed.
   - It behaves like relative until a scroll threshold is met, then it behaves like fixed.
   - Useful for sticky headers or section titles that stick while scrolling that section.
   - Requires a defined threshold (e.g., \`top: 0\`) and a scrollable ancestor.

Understanding how each position affects layout and stacking (z-index) is crucial for responsive and layered designs.`,
    example: `.container {
  position: relative;
}
.box {
  position: absolute;
  top: 10px;
  left: 20px;
}
/* This .box will be placed 10px from the top and 20px from the left of .container,
   because .container is the nearest positioned ancestor */
`,
  },

  {
    id: 15,
    question: `What is normalization in CSS? `,
    answer: `Normalization refers to techniques and styles used to make styling consistent across browsers. It includes resetting default styles, applying box-sizing, font smoothing, and margin/padding normalization using a library like normalize.css. `,
    example: `* { margin: 0; padding: 0; box-sizing: border-box; }`,
  },
  {
    id: 16,
    question: `Difference between Flexbox and Grid in CSS? `,
    answer: `Flexbox is a one-dimensional layout system for rows or columns, great for aligning items. 
        Grid is two-dimensional, allowing for both rows and columns. Grid is better for full-page or complex layouts, while Flexbox is ideal for smaller UI components. `,
    example: `/* Flex */\n.container { display: flex; }\n/* Grid */\n.grid { display: grid; grid-template-columns: 1fr 1fr; }`,
  },
  {
    id: 17,
    question: `Difference between SVG and Canvas? `,
    answer: `SVG uses vector graphics, is resolution-independent, accessible, and part of the DOM.
        Canvas uses raster graphics, requires JS for drawing, and is better for complex, high-performance animations or games. `,
    example: `<svg><circle cx="50" cy="50" r="40" /></svg>\n<canvas id="canvas" width="200" height="100"></canvas>`,
  },
  {
    id: 18,
    question: `What is CSS3? `,
    answer: `CSS3 is the latest evolution of CSS and includes new features like selectors, transitions, animations, gradients, flexbox, grid layout, custom fonts, media queries, box-shadow, and more. `,
    example: `div {\n  transition: all 0.3s ease;\n  box-shadow: 0 0 10px #000;\n}`,
  },
  {
    id: 19,
    question: `What are Media Queries in CSS? `,
    answer: `Media queries enable responsive design by applying styles based on device properties like width, height, orientation, and resolution. `,
    example: `@media (max-width: 768px) {\n  body { font-size: 14px; }\n}`,
  },
  {
    id: 20,
    question: `Difference between display: none and visibility: hidden? `,
    answer: `\`display: none\` hides the element and removes it from the layout flow.
        \`visibility: hidden\` hides the element but keeps its space in layout. The former is not interactive or accessible, while the latter is still present in the DOM and can trigger events. `,
    example: `.hidden1 { display: none; }\n.hidden2 { visibility: hidden; }`,
  },
  {
    id: 21,
    question: `relative vs absolute positioning in CSS? `,
    answer: `.parent has position: relative;
→ This means it will be the reference (anchor) for absolutely positioned children.

.child has position: absolute;
→ It will be positioned 20px from the top and right of the parent, not the whole screen.`,
    example: `.parent { position: relative; }\n.child { position: absolute; top: 20px; right: 20px; }
    
<!DOCTYPE html>
<html>
<head>
  <style>
    .parent {
      position: relative;
      width: 200px;
      height: 150px;
      background: lightgray;
    }
    .child {
      position: absolute;
      top: 30px;
      left: 10px;
      background: red;
      padding: 5px;
      color: white;
    }
  </style>
</head>
<body>
  <div class="parent">Parent (Relative)
    <div class="child">Child (Absolute)</div>
  </div>
</body>
</html>`,
  },
  {
    id: 22,
    question: "What is box-sizing: border-box in CSS?",
    answer: `The CSS property 'box-sizing: border-box' tells the browser to include the element's padding and border within the specified width and height. This means the total size of the element won't increase when you add padding or borders — it stays constrained to the declared width/height.`,
    example: `div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
}

/* The total width of the element will still be 200px,
   not 200 + 20*2 + 5*2 = 250px */
`,
  },
];
export default cssData;
