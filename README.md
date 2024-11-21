VSuvian is a personal knowledge management (PKM) system designed to offer a **consistent formatting and rendering across VSCode and Obsidian**.

It aims to facilitate collaboration in situations where Obsidian is not an option, without reinventing the wheel. To do so, it focuses on essential features supplied by popular extensions and some extra customization.

## Expected Features

- [ ] User Experience
    - [x] Auto save
    - [x] Link autocompletion
    - [x] Sync links on file rename
    - [x] Backlinks
    - [ ] Templates
    - [ ] Daily notes
    - [x] Graph Visualization
    - [ ] Consistent keyboard shortcuts
    - [ ] Consistent layout
    - [ ] Custom theme (colors, icons, font)
- [ ] Basic formatting syntax
    - [x] New-Line-to-Break
    - [x] Headings
    - [x] Bold, italics
    - [x] External Links
    - [x] Quotes
    - [x] Code (as inline or blocks)
- [ ] Extended formatting syntax
    - [x] Internal links (as wikilinks with aliases and anchors)
    - [ ] Embed files and images (with custom width)
    - [ ] Properties
    - [x] Tags
    - [ ] Tasks
    - [x] Strikethrough
    - [ ] Highlights
    - [ ] Callouts
    - [ ] Tables (edition and formatting)
    - [ ] Diagrams
    - [ ] Math
    - [ ] Slides
    - [ ] Footnotes
    - [ ] HTML content and comments

## Credits

- [Foam](https://foambubble.github.io/foam/) by Riccardo

## Design Rationales

### Non-Intrusive Setup

- Documentation is stored in the current `README.md` file, which may lead to clutter but prevents pollution of the PKM.
- The `.vsuvian` folder ensures that setup do not interfere with user or workspace settings.
- VSCode profile provides a consistent and non intrusive way to share customization (including layout).
    - Although profiles are valid JSON, they are not human-readable. NodeJS tasks allow (de)serialize its content.
    - This approach results in better incremental diffs, at the cost of extra operations.

### Sticky Scroll

Sticky scroll is disabled on VSuvian to maintain parity with Obsidian. However, this feature can be replicated using the [Another Sticky Headings](https://github.com/zhouhua/obsidian-sticky-headings) plugin.