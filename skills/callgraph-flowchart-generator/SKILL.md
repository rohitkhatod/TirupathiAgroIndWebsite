---
name: callgraph-flowchart-generator
description: Generate call graphs and execution flowcharts for legacy programs and subroutines. Use when modernization teams need visual architecture views for understanding, validation, and migration planning.
---

# Callgraph and Flowchart Generator

Create accurate visual artifacts from analyzed legacy code.

## 1) Input assumptions

Require:
- Resolved list of callable units
- Control-flow findings with source traceability
- Identified branch conditions

If input is incomplete, publish a gap list before generating visuals.

## 2) Call graph generation

1. Create directed graph from caller to callee.
2. Distinguish internal, external, and utility calls by style labels.
3. Annotate critical edges (high-frequency, transaction boundary, error path).

Use `assets/templates/callgraph-mermaid-template.mmd`.

## 3) Flowchart generation

1. Build per-program or per-subroutine flowcharts.
2. Use explicit labels for decision nodes and outcomes.
3. Highlight exception flows and restart points.

Use `assets/templates/flowchart-mermaid-template.mmd`.

## 4) Quality rules

Apply guidance in `references/visual-notation-rules.md`.
Do not omit uncertain paths; mark them as `unverified`.
