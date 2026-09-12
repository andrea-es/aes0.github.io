# andrea-esposito.com

Personal site. Plain HTML and one stylesheet, served by GitHub Pages from this repo. No build step.

## Layout

    index.html                 About (the home page): three paragraphs
    work/index.html            Work: Foundation, Tesla, GE Aerospace, with the two hand videos
    press/index.html           Press links and three YouTube embeds (under Work in the nav)
    hand-analyses/index.html   SynapX, Figure and 1X breakdowns on one page, jump links on top
    assets/img/analyses/       The eight annotated screenshots for the analyses, 1400px JPEGs
    bookshelf/index.html       Bookshelf: Goodreads shelves (live widgets)
    favorite-poetry/index.html Poems and lyrics (under Bookshelf in the nav)
    books.html, quotes.html    Redirect stubs for the old site's /books and /quotes URLs
    404.html                   Not-found page, same header
    assets/css/site.css        All styling; white page, no dark mode
    assets/js/menu.js          The two nav carets toggle their dropdowns; pauses autoplay for reduced-motion
    assets/fonts/              Lora (headings, variable) and Gentium Basic (text), self-hosted
    assets/img/, assets/video/ Local media

Every page has the same header (name top-left; About, Work, Bookshelf top-right — Work and Bookshelf
each have a caret that opens a dropdown: the page itself first, then its sub-pages) and the same footer (an X logo linking to
@aesposito0). The header and footer are duplicated in every file on purpose.

## Adding a hand analysis

Add an `<article id="…">` to `hand-analyses/index.html` (newest first), a matching `<li>` in the
`.jump` list, and drop the screenshots in `assets/img/analyses/` as JPEGs. Tweets are embedded with
the X widget: a `blockquote.twitter-tweet` holding the tweet text and its link, so the page still
reads if the widget doesn't load.

## Bookshelf

The two shelves are Goodreads widgets, exactly as on the original site: `custom_widget` for
"currently reading" and `grid_widget` for "read" (user 78488924). Each script replaces the contents
of its `div` at load; the fallback inside the div is a link to the shelf. Their generated markup is
styled by the `gr_custom_*` / `gr_grid_*` rules in `site.css`. The poems live on their own page, `favorite-poetry/`.

## Media

Videos are H.264 MP4, 720p, autoplaying muted with `preload="metadata"`. `optimus-hand.mp4` is the
720p rendition of @niccruzpatane's X post, credited in its caption. The long Foundation videos are
YouTube embeds on the Press page, not local files. Keep any new clip under ~50 MB (GitHub's hard
limit is 100 MB per file). Images: JPEG for photos and screenshots, PNG only for the favicon (`ae-64.png`, `ae-256.png`, the old site's "ae" mark).
