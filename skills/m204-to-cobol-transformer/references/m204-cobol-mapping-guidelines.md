# M204 to COBOL Mapping Guidelines

## Control flow mapping
- Map nested conditional constructs to structured IF/EVALUATE blocks.
- Use paragraph-level separation for business phases.
- Isolate exception branches for readability and testing.

## Data mapping
- Define COBOL data names aligned to business glossary terms.
- Preserve key-field semantics and formatting assumptions.
- Document encoding/packing assumptions for numeric fields.

## Transaction and integrity mapping
- Keep commit/rollback intent explicit.
- Preserve ordering constraints when updating related entities.
- Retain balancing/reconciliation controls.
