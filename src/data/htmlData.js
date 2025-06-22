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
    question:`can div behave like a span using display: inline? `,
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
];
export default htmlData;
