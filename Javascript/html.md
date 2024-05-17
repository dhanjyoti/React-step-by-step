# Difference between Html tags, elements and attributes.

1. 
-   HTML tag:   HTML tags are used to hold the HTML element.
-   HTML element:   HTML element holds the content.
-   HTML attribute:   HTML attributes are used to describe the characteristic of an HTML element in detail.

2.
-   HTML tag:   It consists of an opening bracket and a closing bracket. HTML tag starts with < and ends with >.
-   HTML element:   It consists of a starting tag, content, and an end tag. Whatever written within a HTML tag are HTML elements.
-   HTML attribute:    It is written inside tags. HTML attributes are found only in the starting tag.

3.
-   HTML tag:   HTML tags are almost like keywords where every single tag has unique meaning.
-   HTML element:   HTML elements specifies the general content.
-   HTML attribute:   HTML attributes specify various additional properties to the existing HTML element.

4.
-   HTML tag:   Tags define the type of HTML element (e.g., heading, paragraph).
-   HTML element:   Elements represent the complete, functional unit on a webpage.
-   HTML attribute:   Attributes provide extra information or settings for elements.


# What are the new elements introduced in HTML5?

HTML5 introduced several new elements to enhance the structure, semantics, and multimedia capabilities of web pages. Here are the key new elements:

**Structural Elements**

    <header>: Represents the introductory content or a group of introductory content for its nearest ancestor sectioning content or sectioning root element.
    <nav>: Represents a section of a page that links to other pages or to parts within the page.
    <article>: Represents a self-contained composition in a document, page, or site, which is intended to be independently distributable or reusable.
    <section>: Represents a standalone section of functionality contained within an HTML document.
    <aside>: Represents content that is tangentially related to the content around it, like sidebars.
    <footer>: Represents the footer for its nearest sectioning content or sectioning root element.

**Semantic Elements**

    <main>: Represents the dominant content of the <body> of a document.
    <figure>: Represents self-contained content, often with a caption, and is usually used to refer to images, diagrams, or code snippets.
    <figcaption>: Represents a caption or legend for the content of its parent <figure> element.

**Multimedia Elements**

    <audio>: Used to embed sound content in documents. It may contain one or more audio sources.
    <video>: Used to embed video content. It may contain one or more video sources.
    <source>: Specifies multiple media resources for media elements like <video> and <audio>.
    <track>: Used as a child of the media elements <audio> and <video> to specify text tracks for time-based data like subtitles.

**Form Elements**

    <datalist>: Contains a set of <option> elements that represent the permissible or suggested options available to other controls.
    <keygen>: Facilitates the generation of key pairs for web applications (deprecated in HTML 5.2).
    <output>: Represents the result of a calculation or user action.
    <progress>: Represents the completion progress of a task.
    <meter>: Represents a scalar measurement within a known range, or a fractional value.

**Interactive Elements**

    <details>: Used as a disclosure widget from which the user can obtain additional information or controls.
    <summary>: Used as a summary or legend for the content of a <details> element.

**Text-level Semantics**

    <mark>: Represents text which is marked or highlighted for reference or notation purposes.
    <time>: Represents either a time on a 24-hour clock or a precise date in the calendar.
    <ruby>, <rt>, and <rp>: Used for marking up ruby annotations, which are small texts alongside the base text, typically used in East Asian typography.

These elements are designed to improve the semantic structure of web documents, provide more flexible and efficient multimedia integration, and enhance the user experience through interactive features.


# Difference between semantic and syntactic elements in HTML

In HTML, semantic and syntactic elements serve different purposes and understanding the difference between them is crucial for creating well-structured and accessible web content.

**Semantic Elements**

***Definition:*** Semantic elements clearly describe their meaning in a human- and machine-readable way. They provide information about the role of the content contained within the tags.

***Purpose:*** Semantic elements improve the readability of the HTML document by providing meaningful information about the structure and content. This helps browsers, search engines, and assistive technologies (like screen readers) to understand the content of a web page better.

***Examples:***

    <article>: Represents a self-contained piece of content that could stand alone or be distributed independently.
    <section>: Defines a section in a document, such as a chapter or a group of thematic content.
    <header>: Represents introductory content or a set of navigational links.
    <footer>: Represents a footer for its nearest sectioning content or sectioning root element.
    <nav>: Represents a section of a page that links to other pages or parts within the page.
    <aside>: Represents content tangentially related to the content around it, often used for sidebars.

***Benefits:***

    Improved Accessibility: Assistive technologies can more easily interpret the structure and purpose of the content.
    Better SEO: Search engines can better understand the context and importance of the content, potentially improving search rankings.
    Code Readability: Makes the HTML code easier to read and maintain for developers.

**Syntactic Elements**

***Definition:*** Syntactic elements refer to the actual structure or syntax of the HTML document. These elements do not inherently carry semantic meaning but are used to organize and format content.

Purpose: Syntactic elements focus on the correct construction and organization of the HTML document. They ensure that the HTML is properly formatted and adheres to the correct syntax rules.

***Examples:***

    <div>: A generic container for flow content, used to group elements for styling or scripting purposes.
    <span>: A generic inline container for phrasing content, used to apply styles or scripts to a part of the text.
    <br>: Produces a line break in text.
    <b> and <i>: Used to apply bold and italic styles to text without conveying any semantic meaning.

***Benefits:***

    Flexible Layout: Allows developers to structure content without imposing semantic meaning, useful for complex layouts.
    Styling and Scripting: Enables applying CSS styles and JavaScript functionality to specific parts of the document.
    Control Over Formatting: Provides precise control over the presentation of the content.

***Key Differences***

    Purpose: Semantic elements convey meaning and context, while syntactic elements organize and format content without imparting additional meaning.
    Accessibility: Semantic elements improve accessibility by providing context to assistive technologies, whereas syntactic elements do not contribute to understanding content.
    SEO Impact: Semantic elements can enhance SEO by making the content more understandable to search engines, while syntactic elements have no direct impact on SEO.
    Code Readability: Semantic elements make the code more readable and maintainable by providing clear indications of content roles, whereas syntactic elements are more about the structure and formatting without implying specific meaning.

Understanding and appropriately using both semantic and syntactic elements is essential for creating robust, accessible, and well-structured web pages.


# Difference between SVG and Canvas

1.
-   SVG:   SVG uses geometric shapes to render graphics.
-   Canvas:   Canvas uses pixels.

2.
-   SVG:   Vector based (composed of shapes).
-   Canvas:   Raster based (composed of pixel).

3.
-   SVG:   SVG has better scalability. So it can be printed with high quality at any resolution.
-   Canvas:   Canvas has poor scalability. Hence it is not suitable for printing on higher resolution.

4.
-   SVG:   SVG gives better performance with smaller number of objects or larger surface.
-   Canvas:   Canvas gives better performance with smaller surface or larger number of objects.

5.
-   SVG:   SVG can be modified through script and CSS.
-   Canvas:   Canvas can be modified through script only.

6.
-   SVG:   Multiple graphical elements, which become the part of the page’s DOM tree.
-   Canvas:   Single element similar to <img> in behavior. Canvas diagram can be saved to PNG or JPG format.


# Difference Table between id and class attribute

1. 
-   ID:  Uniquely identifies one element.
-   Class:  Can be applied to multiple elements.

2.
-   ID:  Primarily used for styling or JavaScript.
-   Class:  Also used for styling or JavaScript.

3.
-   ID:  Only one element can have a specific ID.
-   Class:  Multiple elements can share the same class.

4.
-   ID:  Written as id="example".
-   Class:  Written as class="example".

5.
-   ID:  Accessed in CSS with #example selector.
-   Class:  Accessed in CSS with .example selector.

6.
-   ID:  Often used for unique page elements.
-   Class:  Commonly used for styling groups of elements.


# How is the DOM rendered by browser
1. HTML Parsing

    HTML is parsed into a DOM tree where each HTML element becomes a node.

2. CSS Parsing

    CSS is parsed into a CSSOM tree representing the styles for the DOM elements.

3. Building the Render Tree

    The DOM and CSSOM are combined to create a render tree containing only the elements to be displayed.

4. Layout (Reflow)

    Layout calculation determines the position and size of each render tree node.

5. Painting

    The browser paints the render tree, converting nodes to pixels on the screen.

6. JavaScript Execution

    JavaScript can modify the DOM and CSSOM, potentially causing reflows and repaints.

7. Dynamic Changes

    Dynamic updates to the DOM or styles trigger reflows (layout changes) or repaints (visual updates).

Optimization Techniques

    Minimize reflows and repaints by batching changes.
    Lazy loading resources.
    Using hardware acceleration for complex rendering tasks.

These steps transform HTML, CSS, and JavaScript into a visual representation on the screen.


# Difference between async and defer
1.
-   async:  Asynchronous blocks the parsing of the page.
-   defer:  Deferred never blocks the page.

2.
-   async:  Asynchronous scripts don’t wait for each other. So if a smaller script is second in the order, it will be loaded before the previous longer one.
-   defer:  Deferred scripts maintain their relative order which means the first script will be loaded first while all others below it will have to wait.

3.
-   async:  The execution of scripts begins by pause parsing.
-   defer:  The execution of scripts begins only after parsing is completely finished but before the document’s DOMContentLoadedevent.


# What is responsive web design?

Responsive web design (RWD) refers to designing websites to adapt to a user's device. The goal is for a website to retain its optimal usability and appearance regardless of the device it's displayed on. Responsive web design responds to user needs by adapting to different screen sizes, orientations, layouts, and platforms. This is accomplished with the use of flexible grids and layouts, responsive images, and CSS media queries.  

# Difference between attributes and properties.
1.
-   Attribute:  Attributes are defined by HTML.
-   Property:   Properties are defined by the DOM.

2.
-   Attribute:  The value of an attribute is constant.
-   Property:   The value of a property is variable.

3.
-   Attribute:  These are used to initialize the DOM properties. After initialization, the job is finish. 
-   Property:   No such job defined.


# What is an <iframe>?

An <iframe> is an HTML element that embeds another HTML page or content into a section of a web page. It acts as a window to another resource, which can be from the same site or an entirely different site.


# What is GeoLocation api?
The Geolocation API provides access to geographical location information associated with the hosting device.


# What is web worker?
A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.


