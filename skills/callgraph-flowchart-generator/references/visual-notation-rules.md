# Visual Notation Rules

## Call graph
- Use directed edges caller -> callee.
- Prefix node labels with component type (`PRG`, `SUB`, `EXT`, `UTIL`).
- Mark critical edges with `:::critical` class when execution is mandatory for business completion.

## Flowchart
- Use `decision` node labels as business questions.
- Label outcomes on edges (`Yes`, `No`, `Error`, `Retry`).
- Show explicit start and end markers.
- Use a distinct style/class for exception blocks.

## Verification states
- `verified`: directly supported by source evidence.
- `inferred`: likely but not explicitly shown.
- `unverified`: missing evidence, pending SME confirmation.
