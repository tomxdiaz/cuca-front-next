import sanitizeHtml from 'sanitize-html';

const htmlHelper = {
  sanitizeTheHTML: (htmlString: string) => {
    return sanitizeHtml(htmlString, {
      allowedTags: ['b', 'i', 'em', 'strong', 'p', 'h1', 'h2'],
    });
  },
};

// dirty = '<a href="my-slug" target="_blank" onClick="evil()">click</a>';

export default htmlHelper;
