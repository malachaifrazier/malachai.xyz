activate :aria_current
activate :autoprefixer
activate :inline_svg
# activate :blog do |blog|
#   blog.prefix            = "blog"
#   blog.layout            = "blog_layout"
#   blog.summary_separator = /(READMORE)/
#   blog.summary_length    = 300
#   blog.permalink         = '{title}.html'
#   blog.sources           = 'posts/{year}-{month}-{day}-{title}.html'

#   # # Enable pagination
#   blog.paginate = true
#   blog.per_page = 5
#   # blog.taglink = 'categories/{tag}.html'
#   # blog.layout = 'post'

#   # blog.default_extension = '.md'
#   # blog.tag_template = 'tag.html'
#   # blog.calendar_template = 'calendar.html'
#   # blog.new_article_template = 'source/article.slim'
# end

set :css_dir, "assets/stylesheets"
set :fonts_dir, "assets/fonts"
set :images_dir, "assets/images"
set :js_dir, "assets/javascripts"
set :markdown,
  autolink: true,
  fenced_code_blocks: true,
  footnotes: true,
  highlight: true,
  smartypants: true,
  strikethrough: true,
  tables: true,
  with_toc_data: true
set :markdown_engine, :redcarpet

page "/*.json", layout: false
page "/*.txt", layout: false
page "/*.xml", layout: false

configure :production do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end

configure :development do
  activate :livereload
  activate :pry
end

# Time.zone = 'Detroit'
