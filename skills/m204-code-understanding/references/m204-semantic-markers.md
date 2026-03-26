# M204 Semantic Markers

Use these marker categories during analysis:

1. **Control markers**: IF/THEN patterns, loop structures, perform-like transfers.
2. **Data markers**: record fetch/update verbs, temporary work areas, key-field transforms.
3. **Business markers**: eligibility checks, rate lookups, lifecycle transitions, status flags.
4. **Operational markers**: restart checkpoints, batch windows, job-step dependencies.
5. **Assurance markers**: audit writes, reconciliation totals, balancing checks.

For each marker, capture:
- source location
- plain-language interpretation
- impact scope (record-level, file-level, batch-level)
