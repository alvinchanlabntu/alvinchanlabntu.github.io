Visit **[alvinchanlabntu.github.io](https://alvinchanlabntu.github.io)** 🚀

# Alvin Chan Lab Website

Official website source for the Alvin Chan Lab at Nanyang Technological University.

The site is built with the [Greene Lab Website Template](https://github.com/greenelab/lab-website-template) and deployed to GitHub Pages at <https://alvinchanlabntu.github.io/>.

## Content

- Team profiles are stored in `_members/`.
- Publication inputs are stored in `_data/sources.yaml`.
- Publication thumbnails and PDFs are stored in `images/publications/` and `files/publications/`.
- Site pages are written in Markdown.

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Pushing to `main` runs the citation and site-build workflows and publishes the generated site to the `gh-pages` branch.
