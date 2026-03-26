---
name: business-rule-docx-builder
description: Generate business-rule documentation from legacy code analysis into a Word-ready structure. Use when a migration workflow requires explicit rule catalogs, decision logic narratives, and traceability from source evidence to business statements.
---

# Business Rule DOCX Builder

Produce business-rule documentation that is ready to move into a Word document.

## 1) Ingest analysis package

1. Load normalized findings from upstream code-understanding output.
2. Keep source traceability for every rule.
3. Reject rules without evidence anchors.

Use `references/rule-taxonomy.md` to classify rules consistently.

## 2) Extract and classify rules

Classify each rule as one of:
- Validation
- Derivation/Calculation
- Eligibility
- Routing/Workflow
- Exception handling
- Reconciliation/Audit

Capture rule statement in business language first, then technical expression.

## 3) Build Word-ready structure

Use `assets/templates/business-rules-document-template.md` to assemble:
- Executive summary
- Rule catalog tables
- Decision tables
- Open issues / SME validation section

## 4) Traceability and quality gates

1. Include `source_path` + `line_span` for each rule.
2. Add confidence score and rationale.
3. Add ambiguity notes where rule interpretation is inferred.

Use `references/docx-delivery-checklist.md` before final handoff.
