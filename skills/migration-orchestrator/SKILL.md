---
name: migration-orchestrator
description: Orchestrate multiple specialized agents/skills for end-to-end M204 to COBOL migration. Use when a user wants an agentic workflow that sequences understanding, business-rule extraction, dependency discovery, visualization, and conversion with governed handoffs.
---

# Migration Orchestrator

Run the migration as a staged multi-agent pipeline.

## 1) Agent lineup

Use this sequence:
1. `m204-code-understanding`
2. `business-rule-docx-builder`
3. `legacy-dependency-mapper`
4. `callgraph-flowchart-generator`
5. `m204-to-cobol-transformer`

Load `references/orchestration-playbook.md` and `assets/contracts/agent-handoff-contract.yaml`.

## 2) Stage gates

Do not advance a stage until required artifacts are present and pass quality checks.

Required artifacts:
- Understanding package
- Business rules document draft
- Dependency catalog + risk matrix
- Call graph + flowcharts
- COBOL conversion specification + traceability matrix

## 3) Governance protocol

1. Track assumptions centrally.
2. Carry confidence levels end-to-end.
3. Enforce bidirectional traceability (source -> rule -> dependency -> COBOL output).
4. Record unresolved items as migration risks.

## 4) Delivery bundle

Assemble final package with:
- Executive migration summary
- All staged artifacts
- Risk register
- Next-wave recommendations
