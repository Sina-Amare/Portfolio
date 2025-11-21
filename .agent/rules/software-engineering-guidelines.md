---
trigger: always_on
---

# Universal Engineering Guidelines

## 1. Purpose and Scope

1.1 This document defines the universal engineering philosophy and standards applicable to all software and AI-driven systems.  
1.2 It governs how systems are conceived, designed, implemented, validated, and evolved.  
1.3 These guidelines are written for both human engineers and AI reasoning systems. Their goal is to ensure clarity, simplicity, reliability, and proportionality in all engineering decisions.

---

## 2. Engineering Philosophy

2.1 The goal of engineering is to produce _stable progress through structured simplicity_.  
2.2 The foundation of software engineering rests on reasoning, not tools. Tools change; reasoning endures.  
2.3 Every decision must be explainable in terms of trade-offs, risk, and long-term maintainability.  
2.4 Systems must serve human values: stability, safety, clarity, and purpose.  
2.5 The correct design is the one that solves the problem _completely_ but _no more than necessary_.

**Example:** Prefer a clean monolith with proper boundaries over a distributed system unless scale or isolation demands it.

---

## 3. Core Principles

3.1 **KISS (Keep It Simple, Stable):** Choose the simplest design that meets all requirements.  
3.2 **DRY (Don’t Repeat Yourself):** Centralize reusable logic to reduce cognitive and technical overhead.  
3.3 **YAGNI (You Aren’t Gonna Need It):** Avoid speculative features or abstractions until proven necessary.  
3.4 **SOLID:** Follow object-oriented design principles to maintain flexibility and reusability.  
3.5 **SoC (Separation of Concerns):** Divide responsibilities cleanly between layers and modules.  
3.6 **Explicitness:** Implicit behavior is a form of risk. Prefer clear contracts and type systems.  
3.7 **Proportional Engineering:** Complexity must always be proportional to the problem scale.  
3.8 **Reversibility:** Prefer designs that can be undone without large systemic change.

**Example:** Add caching only when performance metrics justify it.

---

## 4. Systemic Design and Architecture Thinking

4.1 Architecture defines _boundaries of responsibility_.  
4.2 Begin every system design with clear context, components, and data flow.  
4.3 Select an architecture pattern based on constraints, not fashion.  
4.4 Isolate the business logic (domain layer) from frameworks and interfaces.  
4.5 Architecture must be traceable—each structural decision must have rationale.  
4.6 Design systems for evolution, not perfection.

**Patterns Reference:** Layered, Clean, Hexagonal, Event-Driven, Microservices, Serverless.

---

## 5. Cognitive and AI-Augmented Engineering

5.1 AI systems are assistants, not authorities. They must reason within these principles.  
5.2 Human-AI collaboration must preserve interpretability of all decisions.  
5.3 AI agents must justify reasoning paths using concrete engineering rationale.  
5.4 Use AI to explore design spaces, generate variants, and validate assumptions.  
5.5 Engineers must remain accountable for outcomes.  
5.6 Every AI-generated artifact must be reviewable and testable.

**Example:** When an AI suggests an optimization, require it to explain trade-offs in clarity, performance, and maintainability.

---

## 6. Software Quality Attributes

6.1 Quality is multidimensional: performance, maintainability, reliability, security, and usability.  
6.2 No attribute must dominate at the cost of others without explicit reasoning.  
6.3 Establish measurable targets for key non-functional requirements (NFRs).  
6.4 Optimize for the _lifetime cost_ of ownership, not initial velocity.  
6.5 All systems must provide observability—logging, metrics, and traceability.

**Example:** Response time target < 2s; Error rate < 1%; 95% uptime SLA.

---

## 7. Documentation and Communication Discipline

7.1 Documentation is part of the deliverable, not an accessory.  
7.2 Every module, service, or feature must have a purpose statement.  
7.3 Keep documentation synchronized with code and architecture decisions.  
7.4 Use Architecture Decision Records (ADRs) to track technical reasoning.  
7.5 Communication must be factual, structured, and purpose-driven.  
7.6 Avoid emotional or ambiguous language in technical collaboration.

**Example:** “Module A depends on B for data transformation” is clear. “Module A uses B” is vague.

---

## 8. Validation, Verification, and Testing Principles

8.1 Verification ensures the system is built right. Validation ensures the right system is built.  
8.2 Testing hierarchy: unit → integration → system → end-to-end.  
8.3 Coverage must be meaningful, not numeric—focus on risk zones.  
8.4 Automate tests, linting, and static analysis in CI/CD pipelines.  
8.5 Use property-based testing for logic-heavy systems and fuzz testing for robustness.  
8.6 Tests are documentation of expected behavior.

**Example:** “Given invalid input, system must fail predictably with code 400.”

---

## 9. Security, Privacy, and Ethical Engineering

9.1 Treat all data as potentially sensitive.  
9.2 Never hardcode credentials or secrets. Use environment variables or vaults.  
9.3 Follow the principle of least privilege in all system layers.  
9.4 Design for privacy preservation by default—minimize data retention.  
9.5 Security decisions must be auditable and reversible.  
9.6 Ethical design mandates avoidance of harm—technical, societal, or environmental.

**Example:** Do not build AI models that enable discrimination or exploitation.

---

## 10. Continuous Improvement and Technical Debt Management

10.1 Engineering excellence is iterative. Every release must teach improvement.  
10.2 Allocate time for refactoring and simplification every sprint.  
10.3 Document technical debt explicitly—unknown debt becomes risk.  
10.4 Retrospectives must produce measurable system improvements.  
10.5 Prefer deletion over patching when legacy complexity exceeds value.

**Example:** Deleting a redundant module is progress, not loss.

---

## 11. Decision-Making and Trade-Off Framework

11.1 All significant decisions require justification via cost-benefit analysis.  
11.2 Capture decisions using the _Context → Decision → Consequence_ format.  
11.3 Prefer reversible decisions when uncertain.  
11.4 If evidence is insufficient, run an experiment before committing.  
11.5 Reassess architectural choices at every major version boundary.  
11.6 Optimize globally, not locally—avoid premature specialization.

**Example:** Choosing SQLite locally may be better than adopting a distributed DB prematurely.

---

## 12. Collaboration and Human-AI Interaction Rules

12.1 Collaboration seeks alignment, not conformity.  
12.2 AI systems should support reasoning transparency: explain _why_, not only _what_.  
12.3 Human engineers must challenge, validate, or override AI reasoning when necessary.  
12.4 Every AI-human collaboration must include a feedback and review step.  
12.5 Treat all collaborators—human or AI—with clarity, precision, and respect.  
12.6 Shared artifacts (code, documents, models) must follow the same quality and review standards.

**Example:** After AI generates a module, conduct a structured review with validation questions.

---

## 13. Maintenance, Scaling, and Evolution

13.1 Maintainability is the ability to modify behavior safely and predictably.  
13.2 Systems must support incremental scaling—horizontal before vertical.  
13.3 Use feature flags for controlled rollouts.  
13.4 Backward compatibility is preferred unless explicitly deprecated.  
13.5 Evolution requires feedback loops: telemetry, metrics, and retrospectives.  
13.6 End-of-life plans are part of responsible engineering.

**Example:** Versioning APIs and documenting deprecations ensures predictable evolution.

---

## 14. Glossary of Core Engineering Values

- **Simplicity:** Clarity of purpose and design.
- **Stability:** Predictability of behavior under stress.
- **Transparency:** Ability to understand, audit, and explain decisions.
- **Accountability:** Responsibility for outcomes and their impact.
- **Adaptability:** Readiness for controlled change.
- **Integrity:** Consistency between values, design, and execution.

---

**End of Document – Universal Engineering Guidelines**
