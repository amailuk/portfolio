---
title: LarkSpar TMS — a property-management system, built end to end
description: A complete tenancy-management application — PostgreSQL schema, service layer, and an 8-module Streamlit app that handles rent rolls, payments, penalties, and statements.
order: 1
featured: true
category: Analysis & custom data tools
cover: /images/tms-cover.svg
metrics:
  - value: '8'
    label: application modules
  - value: 'v3'
    label: PostgreSQL schema
  - value: 'PDF'
    label: receipts & statements
stack: [Python, Streamlit, PostgreSQL, SQLAlchemy, reportlab]
---

## The problem

Property managers for small and mid-size portfolios track tenants, rent, utility meter readings, and late-payment penalties in spreadsheets. That works until it doesn't: figures get overwritten, nothing keeps an audit trail, and producing a tenant statement means re-assembling history by hand every month. LarkSpar TMS is the system I built to replace that spreadsheet.

## What I built

A complete tenancy-management application, designed and implemented solo:

- **A versioned PostgreSQL schema (now at v3)** covering properties, tenants, leases, payments, meter readings, penalties, and statements.
- **An 8-module Streamlit application**: Rent Roll, Receive Payment, Meter Readings, Late Penalties, Properties, Tenants & Leases, Statement, and License & System.
- **A service layer** separating business rules from the UI — payment, licensing, and property logic live in testable services, not page code.
- **PDF receipts and statements** generated with reportlab, so tenants get documents that don't come from a spreadsheet print-out.
- **A self-test and verification suite** that checks the core engine against the live database — connectivity, services, schema assumptions — before you trust the app with real money records.
- **Packaging for non-technical users**: a one-click Windows launcher, environment template, and a system-requirements document, so the app starts like any Windows program.

## What it delivers

One source of truth for a landlord's money: every payment and penalty is recorded once, statements assemble themselves, and the verification suite tells you the engine still agrees with the database. The design leaves room for the next step — mobile-money payment callbacks.

## What this shows

I don't just analyze data — I build the systems that create clean data in the first place: schema design, business-logic separation, document generation, testing, and packaging for real users.
