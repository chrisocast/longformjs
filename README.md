# LongformJS

### MAIN ELEMENTS

- Article
  - The top-level container
  - Must have the class "longformjs" applied
  - Can contain 'sections' or 'components'

- Section
  - The story is broken into parts via section tags
  - All text within should have <p> tags around it
  - Can contain 'components'


### COMPONENTS

#### Component types

- Masthead: Large header for the beginning of the story
  - headline *required*
  - subhead
  - author
  - font-style (options are 'serif' or 'sans-serif' - default)

- Image: Image with caption and credit, various display options
  - src *required*
  - credit
  - caption
  - alt-text
  - display (options are: modal, small, large - default)
  - position (options are: 'fixed' and 'scroll' - default)