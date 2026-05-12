---
description: Instructions for querying conversation history. Use when you need to view past conversations.
---

## Conversation Blocks

Blocks whose type is `aichat` are chat blocks.

## How to Query Conversation History

Use the `query_blocks` tool to find blocks that meet all of the following conditions:

- The block type is `aichat`

- The text contains [keyword]

The query result will be historical conversation blocks containing the keyword. Use the `get_blocks_text` tool to retrieve a summary of the conversation history.
