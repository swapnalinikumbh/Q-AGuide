const htmlData = [
  {
    id: 1,
    question: `What are the features of HTML5? `,
    answer: `HTML5 introduced semantic elements (like <header>, <nav>, <section>), native audio/video support, the <canvas> element, geolocation, localStorage/sessionStorage, form input enhancements, web workers, drag and drop, and support for responsive design via media queries. `,
    example: `<video controls>\n  <source src="video.mp4" type="video/mp4">\n</video>\n\n<canvas id="gameCanvas"></canvas>`,
  },
  {
    id: 2,
    question: `Why do we declare DOCTYPE in HTML? `,
    answer: `The DOCTYPE declaration tells the browser which version of HTML is used, helping it render the page correctly. It enables standards mode instead of quirks mode, supports validation, accessibility, and ensures forward compatibility. `,
    example: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n</html>`,
  },
  {
    id: 3,
    question: `Why do we use <meta> tags in HTML? `,
    answer: `<meta> tags provide metadata about the HTML document, such as character encoding, viewport settings, description, keywords, author, and refresh behavior. They help with SEO, responsive design, and accessibility. `,
    example: `<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="description" content="Interview preparation for HTML5.">`,
  },
  {
    id: 4,
    question: `Differentiate between semantic and non-semantic tags in HTML. `,
    answer: `Semantic tags convey meaning (e.g., <header>,<nav>, <main>, <article>, <section>, <footer>), improving accessibility and SEO. 
    Non-semantic tags (e.g., <div>, <span>, <b>, <i>, <table>, <tr>, <td>) are generic containers with no inherent meaning and are used mostly for styling or grouping content. `,
    example: `<header>Welcome</header>\n<div class="header">Welcome</div>`,
  },
  {
    id: 5,
    question: `Can a <span> behave like a <div> using display: block? `,
    answer: `Yes, by setting \`display: block\` in CSS, a <span> can behave like a <div>, taking full width and breaking onto a new line. `,
    example: `span.block-style {\n  display: block;\n}`,
  },
  {
    id: 6,
    question: `can div behave like a span using display: inline? `,
    answer: `Yes, by setting \`display: inline\` in CSS, a <div> can behave like a <span>, allowing it to flow inline with text and not start on a new line. `,
    example: `div.inline-style {\n  display: inline;\n}`,
  },
  {
    id: 7,
    question: `What are attributes in HTML? `,
    answer: `Attributes provide additional information about HTML elements. They are written as name-value pairs in the start tag and modify behavior, appearance, or functionality. 
    Examples: href, src, alt, id, class, style. `,
    example: `<a href="https://example.com" title="Go to Example">Link</a>`,
  },
  {
    id: 8,
    question: `What are required attributes in the <img> tag? `,
    answer: `While not technically required, \`src\` is essential to load the image, and \`alt\` is recommended for accessibility. Other optional attributes include: width, height, title, loading, decoding, sizes, and srcset. `,
    example: `<img src="photo.jpg" alt="Profile photo" width="200" height="200" loading="lazy">`,
  },
  {
    id: 9,
    question: `What are inline and block tags in HTML?`,
    answer: `In HTML, elements are classified as either block-level or inline-level based on how they are rendered:

- Block-level elements take up the full width available and always start on a new line. They can contain other block or inline elements.
- Inline elements do not start on a new line and only take up as much width as needed. They cannot contain block elements.

This classification affects layout and structure of HTML pages.`,
    example: `<!-- Block-level elements -->
<div>This is a block element</div>
<p>This is another block element</p>

<!-- Inline elements -->
<span>This is an inline element</span>
<a href="#">This is also inline</a>
<strong>Bold inline text</strong>
  `,
  },
  {
    id: 10,
    question: `What are common block-level tags in HTML?`,
    answer: `Block-level elements start on a new line and occupy the full width of their container. They are used to structure the layout of the document.`,
    example: `<address>     <!-- Contact information -->
<article>     <!-- Independent, self-contained content -->
<aside>       <!-- Sidebar or content indirectly related -->
<blockquote>  <!-- Quoted block of text -->
<div>         <!-- Generic container -->
<dl>          <!-- Description list -->
<fieldset>    <!-- Group related form elements -->
<footer>      <!-- Footer section -->
<form>        <!-- HTML form -->
<h1> to <h6>  <!-- Headings -->
<header>      <!-- Header section -->
<hr>          <!-- Horizontal rule -->
<li>          <!-- List item -->
<main>        <!-- Main content -->
<nav>         <!-- Navigation links -->
<ol>          <!-- Ordered list -->
<p>           <!-- Paragraph -->
<pre>         <!-- Preformatted text -->
<section>     <!-- Section of document -->
<table>       <!-- Table -->
<ul>          <!-- Unordered list -->
<video>       <!-- Video player -->
  `,
  },
  {
    id: 11,
    question: `What are common inline-level tags in HTML?`,
    answer: `Inline elements do not start on a new line and take up only as much width as necessary. They are typically used inside block elements to style or format small parts of text or content.`,
    example: `<a>           <!-- Hyperlink -->
<abbr>        <!-- Abbreviation -->
<b>           <!-- Bold text -->
<br>          <!-- Line break -->
<button>      <!-- Clickable button -->
<cite>        <!-- Citation -->
<code>        <!-- Inline code -->
<em>          <!-- Emphasized text -->
<i>           <!-- Italic text -->
<img>         <!-- Image -->
<input>       <!-- Form input -->
<label>       <!-- Label for input -->
<mark>        <!-- Highlighted text -->
<q>           <!-- Inline quotation -->
<s>           <!-- Strikethrough -->
<select>      <!-- Dropdown menu -->
<small>       <!-- Smaller text -->
<span>        <!-- Generic inline container -->
<strong>      <!-- Important text -->
<sub>         <!-- Subscript -->
<sup>         <!-- Superscript -->
<textarea>    <!-- Multi-line input -->
<time>        <!-- Time/date -->
<u>           <!-- Underlined text -->
  `,
  },
  {
    id: 13,
    question: `What is the difference between <img> and <figure> tags in HTML?`,
    answer: `<img> is used to embed an image in an HTML document.

<figure> is a semantic container used to group media (like an image or chart) along with its <figcaption> (caption/description).

<figure> improves **semantic meaning** and is useful for accessibility and SEO.
<img> is not semantic—it only embeds the image.

👉 Use <figure> when you want to include a caption or describe the image in context.

`,
    example: `<!-- Just an image --> <img src="dog.jpg" alt="A cute dog"> <!-- Semantic grouping with caption --> <figure> <img src="dog.jpg" alt="A cute dog"> <figcaption>A happy Labrador playing in the park.</figcaption> </figure> `,
  },
  {
    id: 14,
    question: `create 5 row and 5 column table in HTML?`,
    answer: ` To create a 5x5 table in HTML, you can use the <table>, <tr>, and <td> tags. Each <tr> represents a row, and each <td> represents a cell within that row. Here's an example of a simple 5x5 table:`,
    example: `<!DOCTYPE html>
<html>
<head>
  <title>5x5 HTML Table</title>
  <style>
    table {
      border-collapse: collapse;
    }
    td {
      border: 1px solid black;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>

<h3>5x5 Table</h3>
<table>
  <tr>
    <td>1,1</td><td>1,2</td><td>1,3</td><td>1,4</td><td>1,5</td>
  </tr>
  <tr>
    <td>2,1</td><td>2,2</td><td>2,3</td><td>2,4</td><td>2,5</td>
  </tr>
  <tr>
    <td>3,1</td><td>3,2</td><td>3,3</td><td>3,4</td><td>3,5</td>
  </tr>
  <tr>
    <td>4,1</td><td>4,2</td><td>4,3</td><td>4,4</td><td>4,5</td>
  </tr>
  <tr>
    <td>5,1</td><td>5,2</td><td>5,3</td><td>5,4</td><td>5,5</td>
  </tr>
</table>

</body>
</html>
`,
  },
];
export default htmlData;
