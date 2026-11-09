**Student Name:** Abhay Robert 
**Student Number:** ST10534638  
**Module:** WEDE5020: Web Development POE Part 3  

## Links
- **Github Repository:** `https://github.com/EMGPSD/wede5020-2026-part-3-abhayrobert`
- **Live site:**

## Project Overview
Phantom Recipes is a comprehensive digital recipe website designed to empower home cooks with reliable, step-by-step recipes. 
The website is filled with detailed, relevant content.

## Website Goals and Objectives
* Provide a highly relevant and well-organized range of curated recipes.
* Attain 10,000 monthly active users and a 25% user retention rate.

## Key Features and Functionality
* **Homepage:** Logically organized layout featuring a hero image, introductory text, and a clear call to action.
* **Recipe Categories:** Comprehensive recipe cards utilizing all essential HTML tags (H1, P, IMG) for correct structure.
* **Interactive elements:** Mobile navigation (hamburger menu), Hover, focus and active feedback across nav, buttons and cards.
* **Interactive map:** Embedded Google maps iframe, lets visitors locate the office without leaving the page.
* **Gallery & Lightbox:** 20 recipe images organised into 5 categories with filter buttons and the ability to enlarge any image to full-screen.
* **Search:** Home page search box allows visitors to find matching category pages based on their input.

## Timeline and Milestones
* **Week 1:** Wireframing, HTML layout format and content gathering
* **Week 2:** CSS styling and design implementation. 
* **Week 3:** Website functionality test and bug fixing.
* **Week 4:** Optimisation and finalising.


## Part 1 Details
This submission encompasses the initial project planning phases. 
The file structure is well-organized and logical, separating assets into specific `css`, `js`, and `images` folders. 
All HTML files have been structured correctly with semantic HTML5 elements, properly indented, and include comments that explain the code.

## Sitemap
The website follows a comprehensive, well-detailed hierarchical structure:
1. **index.html:** Includes a search bar, meal categories, and featured meal.
2. **about.html:** Features information about the website such as the mission and vision.
3. **recipes.html:** This is the recipe collection page which guides users to the different categories.
4. **enquiry.html and Contact.html:** Simple form for user enquires and contact to submit errors on the website or new recipes to be added.
5. **breakfast.html, lunch.html, dinner.html, dessert.html, quick.html:**  Contains the relevant recipes per category.
6. **404.html:** Used as the error page.
7. **gallery.html:** Filterable and searchable gallery with lightbox. 

# Part 2 Details
## 1. Project Overview Part 2
Part 2 transitions the Phantom Recipes website from standard HTML to a styled and formatted layout using CSS.

## 2. Design and Style
### Colour Palette
The colour scheme was chosen to convey a fresh, organic, and artisanal culinary feel.
The colours chosen was a sage green, warm terracotta and light cream.

### Typography
Text has been organized into h1-h4 headings to add structure. The body text was formatted in a "Roboto" styled font.

## 3. CSS Technical Features
All styling is in a single external stylesheet ("styles.css"). 
The website has implemented responsive design and media queries to ensure the website can be viewed on a wide range of devices from desktops to mobile phones.
Also added was visual elements to give the website depth and responsiveness.

## Preview of responsive design

<img width="1900" height="871" alt="Desktop size" src="https://github.com/user-attachments/assets/bbf3e99a-41e4-4561-b491-439f1ee416b5" />
<br>
<caption> Desktop view of the website.</caption>

<br>
<img width="756" height="755" alt="Tablet size" src="https://github.com/user-attachments/assets/7c4488da-187a-4e22-b820-9b7320321fdb" />
<br>
<caption> Tablet view of the website.</caption>

<br>
<img width="418" height="751" alt="Mobile size" src="https://github.com/user-attachments/assets/ce701cb1-eb9f-4d28-b0c7-bef71a07949b" />
<br>
<caption> Mobile view of the website.</caption>

# Part 3 Details
## Project Overview Part 3
- This part addressed the feedback from part 2.
- Added JavaScript to make a functional contact and enquiry form.
- Added an interactive map.
- Included SEO.

## Website structure
```
└── wede5020-2026-part-3-abhayrobert/
    ├── assets/
    │   └── images
    ├── js/
    │   ├── app.js
    │   └── script.js
    ├── 404.html
    ├── about.html
    ├── breakfast.html
    ├── contact.html
    ├── dessert.html
    ├── dinner.html
    ├── enquiry.html
    ├── gallery.html
    ├── index.html
    ├── lunch.html
    ├── quick.html
    ├── recipes.html
    ├── robots.txt
    ├── sitemap.xml
    └── styles.css
```
## Updated Screenshots
<img width="1350" height="1920" alt="_C__Emeris_WEDE_POE_index html" src="https://github.com/user-attachments/assets/be898a97-6cb7-4f70-9231-f6eaf0000024" />

<br>
<caption> Desktop view of the website.</caption>

<br>
<img width="1400" height="4962" alt="_C__Emeris_WEDE_POE_index html (2)" src="https://github.com/user-attachments/assets/c4224250-9763-4c38-a987-3452e4a85093" />

<br>
<caption> Tablet view of the website.</caption>

<br>
<img width="1000" height="7166" alt="_C__Emeris_WEDE_POE_index html (1)" src="https://github.com/user-attachments/assets/17ee7846-e3ac-452d-b9c6-b76649157315" />

<br>
<caption> Mobile view of the website.</caption>


## JavaScript
### Enquiry form
- Collects name, email, recipe name, category, and the full method
- Validates every field and shows per field error messages.
- On success it processes the data and generates a reference number.
- Presents a summary card, allowing the user to see their submission.

```javaScript
var feedback = document.getElementById('enquiry-feedback');
enquiryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  ['name', 'email', 'recipe-name', 'recipe-category', 
  'recipe-description'].forEach(function (id) { setError(id, ''); });
  feedback.className = 'form-feedback';
  feedback.textContent = '';
```

### Contact form
- Validates name, email, subject and message.
- Builds a formatted `mailto:` link with an auto-populated subject and a formatted body, then opens the default email client. A confirmation message is shown.

```javascript
var mailto = 'mailto:hello@phantomrecipes.co.za' +
    '?subject=' + encodeURIComponent('[Contact] ' + subject) +
    '&body='    + encodeURIComponent(body);
window.location.href = mailto;
```

## Changelog
* **27 August 2026:** Started part 1 and created a well-organized, logical file and folder structure.
* **28 August 2026:** Research for recipes and images begun.
* **30 August 2026:** Developed HTML structure using all necessary HTML5 semantic elements appropriately.
* **31 August 2026 :** Integrated highly relevant content and fully explained the code using detailed HTML comments.
* **1 September 2026:** Finished coding the html pages.
* **3 October 2026:** Updated the CSS file to format all the pages.
* **4 October 2026:** Added page specific CSS.
* **5 October 2026:** Added assets for responsive design.
* **7 November 2026:** Addressed Part 2 Feedback. Fixed broken images.
* **8 November 2026:** Added mobile navigation, gallery.html, JavaScript enquiry processing with validation and summary card.
* **9 November 2026:** Added: Mailto, interactive map, SEO, sitemap.xml, robots.txt and 404.html page.
 
## References
1. Google, 2026. Google Fonts. [online] Available at: <https://fonts.google.com/specimen/Outfit> [Accessed 14 August 2026].
2. Figma, 2026. Website structure: How to plan the perfect site layout. [online] Available at: <https://www.figma.com/resource-library/website-structure/> [Accessed 14 August 2026].
3. Figma, 2026. Figma. [online] Available at: <figma.com> [Accessed 14 August 2026].
4. Afrihost, 2026. Domains. [online] Available at: <https://www.afrihost.com/domains> [Accessed 14 August 2026].
5. Jon Duckett, 2011. HTML & CSS: Design and Build Web Sites. [pdf] [s.l.]: John Wiley & Sons. Available at: <https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/HTML%20and%20CSS%20design%20and%20build%20websites.pdf> [Accessed 14 August 2026].
6. W3 Schools, 2026. HTML Color Names. [online] Available at: <https://www.w3schools.com/tags/ref_colornames.asp> [Accessed 14 August 2026].
7. Dixon & Moe, 2026. HTML Color Codes. [online] Available at: <https://htmlcolorcodes.com/> [Accessed 14 August 2026].
8. W3 Schools, 2026. CSS Reference. [online] Available at: <https://www.w3schools.com/tags/ref_colornames.asp> [Accessed 1 September 2026].
9. Unsplash, 2026. The internet’s source for visuals. Powered by creators everywhere.. [online] Available at: <https://unsplash.com/> [Accessed 1 September 2026].
10. Pexels, 2026. The best free stock photos, royalty free images & videos shared by creators.. [online] Available at: <https://www.pexels.com/> [Accessed 1 September 2026].
11. Public Domain Recipes, 2026. What do you want to cook?. [online] Available at: <https://publicdomainrecipes.com/> [Accessed 1 September 2026].
12. Ozan Tekin, 2023. Flex Your CSS Muscles: Understanding and Using the flex:1 Property. [online] Available at: <https://medium.com/shsfwork/flex-your-css-muscles-understanding-and-using-the-flex-1-property-6657fb2382b3> [Accessed 5 October 2026].
13. W3 Schools, 2026. CSS Flexbox. [online] Available at: <https://www.w3schools.com/css/css3_flexbox.asp> [Accessed 5 October 2026].
14. W3 Schools, 2026. CSS Media Queries. [online] Available at: <https://www.w3schools.com/css/css3_mediaqueries.asp> [Accessed 5 October 2026].
15. W3 Schools, 2026. CSS scroll-behavior Property. [online] Available at: <https://www.w3schools.com/cssref/pr_scroll-behavior.php> [Accessed 5 October 2026].
16. W3 Schools, 2026. CSS Universal (*) Selector. [online] Available at: <https://www.w3schools.com/cssref/sel_all.php> [Accessed 5 October 2026].
17. W3 Schools, 2026. HTML  height Attribute. [online] Available at: <https://www.w3schools.com/tags/att_img_height.asp> [Accessed 5 October 2026].
18. W3 Schools, 2026. HTML srcset Attribute. [online] Available at: <https://www.w3schools.com/tags/att_source_srcset.asp> [Accessed 5 October 2026].
19. GeekForGeeks, 2026. Create a Contact Form using HTML CSS & JavaScript. [online] Available at: <https://www.geeksforgeeks.org/javascript/create-a-contact-form-using-html-css-javascript/> [Accessed 09 November 2026].
20. W3 Schools, 2026. How TO - Contact Form. [online] Available at: <https://www.w3schools.com/howto/howto_css_contact_form.asp> [Accessed 09 November 2026].
21. W3 Schools, 2026. How TO - Filter/Search List. [online] Available at: <https://www.w3schools.com/howto/howto_js_filter_lists.asp> [Accessed 09 November 2026].
22. W3 Schools, 2026. How TO - Lightbox. [online] Available at: <https://www.w3schools.com/howto/howto_js_lightbox.asp> [Accessed 09 November 2026].
