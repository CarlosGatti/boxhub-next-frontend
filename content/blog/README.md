# Blog Content Guide

This directory contains all blog posts for the Pires Builders website. Each post is written in Markdown format with frontmatter metadata.

## File Structure

```
content/blog/
├── README.md                    # This file
├── post-slug.mdx               # Individual blog posts
└── another-post.mdx            # More blog posts
```

## Creating a New Blog Post

1. **Create a new `.mdx` file** in the `content/blog/` directory
2. **Use a descriptive filename** that matches your post title (lowercase, hyphens instead of spaces)
3. **Add frontmatter metadata** at the top of the file
4. **Write your content** in Markdown format

## Frontmatter Metadata

Every blog post must include the following metadata at the top of the file:

```yaml
---
title: "Your Post Title"
description: "A brief description of your post (used for SEO and social sharing)"
date: "YYYY-MM-DD"
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
coverImage: "/image/blog/your-image.jpg"
---
```

### Required Fields

- **title**: The main title of your blog post
- **description**: A concise summary (150-160 characters for SEO)
- **date**: Publication date in YYYY-MM-DD format
- **author**: Author name
- **tags**: Array of relevant keywords/topics
- **coverImage**: Path to the cover image (stored in `/public/image/blog/`)

## Content Guidelines

### Writing Style
- **Professional but accessible**: Write for homeowners and construction professionals
- **Clear and concise**: Use short paragraphs and simple language
- **Actionable content**: Provide practical tips and advice
- **SEO-friendly**: Include relevant keywords naturally

### Content Structure
- **Compelling introduction**: Hook readers in the first paragraph
- **Clear headings**: Use H2 and H3 for organization
- **Bullet points and lists**: Make content scannable
- **Strong conclusion**: End with a call-to-action

### Word Count
- **Target**: 400-600 words for optimal engagement
- **Minimum**: 300 words
- **Maximum**: 800 words

## Markdown Formatting

### Headers
```markdown
# Main Title (H1)
## Section Title (H2)
### Subsection Title (H3)
```

### Lists
```markdown
**Bullet points:**
- Item 1
- Item 2
- Item 3

**Numbered lists:**
1. First step
2. Second step
3. Third step
```

### Emphasis
```markdown
**Bold text** for important points
*Italic text* for emphasis
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/path/to/image.jpg)
```

## Image Guidelines

### Cover Images
- **Size**: 1200x630 pixels (16:9 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Under 500KB
- **Location**: Store in `/public/image/blog/`
- **Naming**: Use descriptive names (e.g., `renovation-tips.jpg`)

### In-Content Images
- **Size**: 800x400 pixels or similar aspect ratio
- **Format**: JPG or PNG
- **File size**: Under 300KB
- **Alt text**: Always include descriptive alt text

## SEO Best Practices

### Keywords
- **Primary keyword**: Include in title and first paragraph
- **Secondary keywords**: Use naturally throughout content
- **Long-tail keywords**: Target specific search phrases

### Content Optimization
- **Meta description**: Write compelling 155-character descriptions
- **Headings**: Use keywords in H2 and H3 tags
- **Internal links**: Link to relevant pages on your site
- **External links**: Link to authoritative sources

## Publishing Process

1. **Write your post** following the guidelines above
2. **Add cover image** to `/public/image/blog/`
3. **Test locally** to ensure proper rendering
4. **Review metadata** for accuracy
5. **Submit for review** (if applicable)
6. **Deploy** to production

## Example Post Structure

```markdown
---
title: "5 Essential Tips for Home Renovation"
description: "Discover proven strategies to reduce renovation costs while maintaining quality. Expert tips for budget-friendly home improvements."
date: "2025-01-15"
author: "Pires Builders Team"
tags: ["renovation", "tips", "cost reduction", "planning"]
coverImage: "/image/blog/renovation-tips.jpg"
---

# 5 Essential Tips for Home Renovation

Brief introduction that hooks the reader...

## Tip 1: Plan Thoroughly

Content for the first tip...

## Tip 2: Choose Materials Wisely

Content for the second tip...

## Conclusion

Wrap up with a call-to-action...
```

## Need Help?

If you have questions about creating blog content, contact the marketing team or refer to existing posts for examples. 