---
name: m204-code-understanding
description: Analyze Model 204 (M204) programs for structure, runtime behavior, and business intent. Use when a user needs first-pass comprehension of M204 codebases before migration, including control-flow summaries, data usage interpretation, and prioritized ambiguity lists for SME validation.
---

# M204 Code Understanding

Follow this workflow to build an accurate understanding package for M204 source.

## 1) Intake and normalization

1. Classify input artifacts (procedures, include files, JCL/job control, macros, dictionary extracts, copybooks).
2. Normalize source into a canonical inventory with stable IDs (`program_id`, `member_name`, `source_path`, `line_span`).
3. Flag unresolved includes or unknown directives early.

Use `references/m204-analysis-checklist.md` as the baseline quality gate.

## 2) Build semantic inventory

1. Detect entry points and callable units.
2. Identify file/table access patterns, key fields, and update/commit semantics.
3. Track business events (validation, pricing, posting, settlement, exception routing).
4. Separate confirmed behavior from inferred behavior.

Use `references/m204-semantic-markers.md` for extraction cues.

## 3) Produce understanding outputs

Generate these outputs:

- Program intent summary by module.
- Data interaction summary (read/write/report).
- Control hotspots and risk points.
- Unknowns requiring SME clarification.

Write results using `assets/templates/m204-understanding-template.md`.

## 4) Handoff contract

Provide downstream skills with:

- Canonical program inventory.
- Semantic findings mapped to source line spans.
- Explicit assumptions and confidence tags (`high`, `medium`, `low`).
