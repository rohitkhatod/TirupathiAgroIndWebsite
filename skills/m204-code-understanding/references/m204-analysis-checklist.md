# M204 Analysis Checklist

## Scope control
- Confirm source corpus completeness.
- Confirm include/copy resolution status.
- Confirm execution context assumptions.

## Structural analysis
- List entry points.
- List callable procedures/subroutines.
- List external dependencies (files, DB objects, schedulers, utilities).

## Data behavior analysis
- Identify core business entities and their keys.
- Classify access mode: read-only, read-write, append-only, purge/archive.
- Capture transaction boundaries and rollback cues.

## Rule extraction prep
- Highlight validation logic branches.
- Highlight threshold/rate/eligibility calculations.
- Highlight exception and error-handling pathways.

## Quality controls
- Mark each finding as observed or inferred.
- Attach confidence tag.
- Add unresolved questions for SME.
