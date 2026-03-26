---
name: m204-to-cobol-transformer
description: Convert Model 204 logic into production-grade COBOL design and source output with traceability. Use when modernization requires structured mapping from legacy constructs to COBOL paragraphs, sections, data definitions, and file/database access patterns.
---

# M204 to COBOL Transformer

Convert approved M204 understanding artifacts into COBOL deliverables.

## 1) Preconditions

Require:
- Business rules reviewed (or marked pending with risk acceptance).
- Dependency map available.
- Call graph/flowchart available.

If preconditions are missing, produce a blocker report.

## 2) Translation strategy

1. Map M204 entities to COBOL data structures.
2. Map control logic to structured sections/paragraphs.
3. Convert error handling and restart logic to explicit COBOL branches.
4. Preserve audit and reconciliation semantics.

Use `references/m204-cobol-mapping-guidelines.md`.

## 3) Traceability-first generation

For each generated COBOL unit, include mapping metadata:
- source module(s)
- rule IDs implemented
- dependency IDs touched
- unresolved assumptions

Use `assets/templates/cobol-conversion-spec-template.md` and `assets/templates/traceability-matrix-template.csv`.

## 4) Validation checklist

Run checks from `references/conversion-quality-gates.md` before completion.
