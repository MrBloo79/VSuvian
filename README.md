VSuvian is a personal knowledge management (PKM) system designed to offer a **consistent formatting and rendering across VSCode and Obsidian**.

It aims to facilitate collaboration in situations where Obsidian is not an option, without reinventing the wheel. To do so, it focuses on essential features supplied by popular extensions and some extra customization.

## Expected Features

- [ ] User Experience
    - [x] Auto save
    - [x] Link autocompletion
    - [x] Sync links on file rename
    - [x] Incoming links
    - [ ] Templates
    - [ ] Daily notes
    - [x] Consistent keyboard shortcuts
    - [x] Consistent layout
    - [ ] Custom theme (colors, icons, font)
- [x] Basic formatting syntax
    - [x] New-Line-to-Break
    - [x] Headings
    - [x] Bold, italics
    - [x] External Links
    - [x] Quotes
    - [x] Code (as inline or blocks)
- [ ] Extended formatting syntax
    - [x] Internal links (as wikilinks with aliases)
    - [ ] Embed files and images (with custom width)
    - [x] Properties
    - [x] Tasks
    - [x] Strikethrough
    - [ ] Highlights
    - [x] Callouts (NOTE, TIP, IMPORTANT, WARNING, CAUTION)
    - [ ] Tables (edition and formatting)
    - [ ] Diagrams
    - [x] Math
    - [ ] Slides
    - [x] Footnotes
    - [ ] HTML content and comments

## Credits

- [Customizing VSCode for Markdown Note-taking](https://mybyways.com/blog/customizing-vs-code-for-markdown-note-taking) article by C.Y. Wong
- [A Guide On Links vs. Tags](https://forum.obsidian.md/t/a-guide-on-links-vs-tags-in-obsidian/28231) article by Price Baldwin
- [Markdown Alert](https://marketplace.visualstudio.com/items?itemName=kejun.markdown-alert) extension by KeJunMao
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension by Yu Zhang
- [Markdown Extended](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended) extension by jebbs
- [Markdown Memo](https://marketplace.visualstudio.com/items?itemName=svsool.markdown-memo) extension by Svyat Sobol
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) extension by Alessandro Fragnani

## Design Rationales

### Non-Intrusive Setup

- Documentation is stored in the current `README.md` file, which may lead to clutter but prevents pollution of the PKM.
- The `.vsuvian` folder ensures that setup do not interfere with user or workspace settings.
- VSCode profile provides a consistent and non intrusive way to share customization (including layout).
    - Although profiles are valid JSON, they are not human-readable. NodeJS tasks allow (de)serialize its content.
    - This approach results in better incremental diffs, at the cost of extra operations.

### Note Linking

Markdown Memo may not the most popular note-linking extension for VSCode. It lacks a tag system and graph view. However, unlike Foam, it allows wikilinks (as strings) in the frontmatter and offers better completion than Markdown Notes.

### Render Consistency

Live Preview and Sticky Scroll are disabled to ensure a consistent behavior between Obsidian and VSCode. However an alternative could be to replicate Sticky Scroll using the [Another Sticky Headings](https://github.com/zhouhua/obsidian-sticky-headings) plugin.

### Keyboard Shortcuts Consistency

Custom hotkeys allow to maintain a consistent experience between Obsidian and VSCode:

- `Ctrl + E` to toggle preview/source mode
- `Ctrl + O` to quick open files
- `Ctrl + P` to show commands
- `Ctrl + V` to paste as Markdown
- `Ctrl + Shift + V` to paste without converting