# 🧭 Git Best Practices & Standards Guide

> **Purpose:** Establish a clean, professional, and scalable Git workflow for AI-assisted and human-engineered projects.
>
> **Audience:** Developers, AI coding agents, and project maintainers following structured engineering principles.

---

## 📘 1. Repository Setup

### 1.1. Initial Structure
- Always initialize Git **inside the project root** (never at a higher directory).
- Include a properly defined `.gitignore` before the first commit.
- Commit the initial setup as:
  ```bash
  git commit -m "chore(init): initial project structure and documentation"
  ```

### 1.2. .gitignore Essentials
A standard Node/Next.js `.gitignore`:
```gitignore
# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
.next/
dist/
out/
coverage/

# System files
.DS_Store
Thumbs.db

# Environment
.env
.env.local
*.local
*.log

# Misc
project/styles/output.css
docs/logs/*.tmp
```

---

## 🌿 2. Branching Strategy

### 2.1. Core Branches
| Branch | Purpose | Rule |
|---------|----------|------|
| `main` | Stable, production-ready baseline | Only merge validated, tested code |
| `develop` *(optional)* | Staging/integration branch | Used in larger projects before main merges |

### 2.2. Feature & Maintenance Branches
Use **prefix-based naming** for clarity:
| Prefix | Use For | Example |
|---------|----------|----------|
| `feat/` | New features or modules | `feat/blog-system` |
| `fix/` | Bug fixes or issue resolutions | `fix/tailwind-build` |
| `chore/` | Maintenance, updates, version bumps | `chore/docs-sync` |
| `hotfix/` | Emergency fixes directly to main | `hotfix/deployment-error` |

Branch example workflow:
```bash
git checkout -b feat/nextjs-scaffold
# ... work, commit, verify ...
git checkout main
git merge feat/nextjs-scaffold --no-ff -m "merge: integrated Next.js scaffold"
```

---

## 🧱 3. Commit Standards (Conventional Commits)

### 3.1. Commit Message Format
```
<type>(<scope>): <short summary>
```
**Examples:**
```bash
git commit -m "feat(task-1.0): add Next.js scaffold and TailwindCSS integration"
git commit -m "fix(task-0.2): resolve dependency conflicts"
git commit -m "docs: update project logs and readme"
```

### 3.2. Common Commit Types
| Type | Meaning |
|------|----------|
| `feat` | New feature added |
| `fix` | Bug fix or patch |
| `docs` | Documentation updates only |
| `style` | Code style (no logic changes) |
| `refactor` | Code restructure without feature change |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Maintenance or tooling changes |

### 3.3. Atomic Commits
- Each commit should represent **one logical change**.
- Avoid mixing docs, code, and config in a single commit.
- Prefer small, meaningful commits over bulk updates.

---

## 🧩 4. Pull Requests & Merging

### 4.1. Merge Strategy
Use **`--no-ff` merges** to preserve commit history:
```bash
git merge --no-ff feat/app-layout -m "merge: integrated app layout feature"
```

### 4.2. Code Review Checklist
- ✅ Code compiles without errors
- ✅ Documentation updated
- ✅ Lint and format checks pass
- ✅ No unnecessary debug or temp files committed

### 4.3. Post-Merge Cleanup
```bash
git branch -d feat/app-layout
```

---

## 🔄 5. Version Control Discipline

### 5.1. After Every Validated Task
Always perform a full sync:
```bash
git add -A
git commit -m "feat(task-X.X): <summary>"
```
Then append this to `/docs/logs/init_log.txt`:
```
[Timestamp] : Task <X.X> committed and validated
Agent/Developer : (your name or agent name)
Summary : <task summary>
```

### 5.2. Regular Maintenance
- Run `git status` and `git log --oneline` regularly.
- Ensure `main` remains stable.
- Rebase small branches frequently to keep them up-to-date.

---

## ☁️ 6. Remote Repository Management

### 6.1. Setup Remote
```bash
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### 6.2. Sync Workflow
```bash
git pull origin main --rebase
git push origin main
```

### 6.3. Backup & Recovery
```bash
git branch backup/<date>
git push origin backup/<date>
```

---

## 🧠 7. AI + Git Integration Guidelines

When using AI coding agents:
- Ensure every code action leads to a **traceable commit**.
- Agents should automatically update documentation and logs.
- Never let the AI push to `main` directly — always merge manually or via PR.

---

## ✅ 8. Summary Principles
1. **Traceability:** Every change should have a clear reason and record.
2. **Atomicity:** One change = one commit.
3. **Clean History:** Avoid unnecessary branches and merges.
4. **Transparency:** Document Git actions alongside task logs.
5. **Consistency:** Use the same conventions across all projects.

---

> **In short:**
> *Your Git history is your engineering journal — make it readable, explainable, and reliable.*

