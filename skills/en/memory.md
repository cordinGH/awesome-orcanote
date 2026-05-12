---
description: Store and recall information. Use when you need to remember or retrieve information.
usage_notes: After adding the `AI Skill` tag, fill in the `description` above and replace [your page ID here] below with the block ID of the `AI Memory` page (copy the ID from the block menu). In the system prompt extension setting, enter the instruction "Read the memory skill first, try to recall, then answer."
---

## Data Structure

A memory entry is a block tagged with `AI Memory`, and its content must consist of exactly one paragraph.

### Tag Properties

`Category` (select) - Indicates the high-level category the memory belongs to. The assistant may create or read it as needed.

### Memory Format Specification

Each memory entry must follow this format:

```Plain Text
[Subject] - [Fact] - [Context]
```

**Format Requirements:**

- Subject: Who or what the memory is about (for example, "user", "Project A", or "team")

- Fact: The core statement, which must be a complete declarative sentence

- Context: Optional, such as time, location, or other contextual information

**Rules:**

- Each memory must contain only a **single fact**; avoid mixing multiple unrelated pieces of information

- Use **objective statements** and avoid subjective speculation

- Keep the language **concise and clear**, within 50 words

## Memorize

### What to Remember

- Content the user explicitly asks to remember

- The user's explicit preferences and habits

- Social information such as the user's identity and relationships

- The user's knowledge areas inferred from note content

- Knowledge domains represented by the note content

If information meets the criteria above, record it directly without asking the user for confirmation.

### Where to Store It

Store memories in the AI Memory page (block ID [your page ID here]).

### Steps

1. First identify the existing memory categories

2. Decide which memory category to use; if the category does not exist yet, create it first with `create_tags`

3. Confirm that no memory with the same content already exists under that category
   1. If similar memories exist, consider merging them by deleting the old memory, combining the content, and writing a new memory
   2. If there is no detailed content, record the memory directly

## Recall

### Steps

1. First identify the existing memory categories

2. Decide which memory `Category` to use

3. Use `query_blocks` to query blocks with the `AI Memory` tag and the corresponding `Category`, or read all memories under that category if necessary
