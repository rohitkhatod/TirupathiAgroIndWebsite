---
name: legacy-dependency-mapper
description: Discover and document technical and business dependencies in legacy M204 systems. Use when migration planning requires dependency inventories across programs, files, control jobs, interfaces, and shared data contracts.
---

# Legacy Dependency Mapper

Create a dependency map that supports migration sequencing and risk control.

## 1) Dependency discovery

Capture dependencies across:
- Internal program calls
- Shared data stores/files
- Batch schedules and job steps
- External interfaces and downstream consumers
- Control/reference datasets

Use `references/dependency-categories.md` to keep labels consistent.

## 2) Dependency normalization

Normalize each dependency to:
- `dependency_id`
- `source_component`
- `target_component`
- `dependency_type`
- `criticality`
- `failure_impact`

## 3) Critical path analysis

1. Identify high-centrality components.
2. Identify single points of failure.
3. Flag dependencies blocking incremental migration.

Use `assets/templates/dependency-catalog-template.csv` and `assets/templates/dependency-risk-matrix.md`.

## 4) Handoff outputs

Deliver:
- Machine-readable dependency catalog
- Human-readable risk matrix
- Migration wave recommendations anchored to dependency clusters
