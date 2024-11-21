VSuvian is a personal knowledge management (PKM) system designed to offer a **consistent formatting and rendering across VSCode and Obsidian**.

It aims to facilitate collaboration in situations where Obsidian is not an option, without reinventing the wheel. To do so, it focuses on essential features supplied by popular extensions and some extra customization.

## Expected Features

- [ ] Basic formatting syntax
    - [ ] New-Line-to-Break
    - [x] Headings
    - [x] Bold, italics
    - [x] External Links
    - [x] Quotes
- [ ] Extended formatting syntax
    - [ ] Internal links
    - [ ] Tasks
    - [ ] Strikethrough
    - [ ] Highlights
    - [ ] Footnotes
    - [ ] Comments
- [ ] User Experience
    - [ ] Auto save

## Design Rationales

### Non-Intrusive Setup

- Documentation is stored in the current `README.md` file, which may lead to clutter but prevents pollution of the PKM.
- The `.vsuvian` folder ensures that setup do not interfere with user or workspace settings.
- VSCode profile provides a consistent and non intrusive way to share customization (including layout).
    - Although profiles are valid JSON, they are not human-readable. NodeJS tasks allow (de)serialize its content.
    - This approach results in better incremental diffs, at the cost of extra operations.