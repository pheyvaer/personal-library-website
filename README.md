# Library Website

This [Jekyll](https://jekyllrb.com) website displays the books you've read.
It features the following details of each book:
- title
- author(s)
- day finished reading
- rating (1-5)
- suggestion for others on whether they should buy, borrow, or burn the book

The books can be filtered on the latter feature.
Additionally, you can sort them based on the day finished reading, title, or rating.

## Adding books
Books can be added by updating `_data/library.yml`.

## Adding additional pages
You can add additional pages to this website by creating them like you always do with Jekyll and by adding them to `_data/nav.yml`.
They will be added to the nav bar (as defined in `_layouts/default.html`).

## RDFa
[RDFa](https://en.wikipedia.org/wiki/RDFa) is added on the page to enable Semantic Web technologies.
Be sure to update the `me` parameter in `_config.yml` so that it points to your [FOAF](https://en.wikipedia.org/wiki/FOAF_(ontology)) profile.

## Dependencies
- [Isotope](https://isotope.metafizzy.co) for lay-outing, sorting, and filtering
- [lazyload](https://github.com/fasterize/lazyload) for the lazy loading of the book covers

# License and contributions
The website is copyrighted by [Pieter Heyvaert](https://pieterheyvaert.com) and released under the [MIT License](https://github.com/pheyvaer/personal-library-website/blob/master/LICENSE).

Contributions are welcome, and bug reports or pull requests are always helpful. If you plan to implement a larger feature, it's best to contact me first.
