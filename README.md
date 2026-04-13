# Legacy Coursework Web Project (Modernized)

<!-- BrandCloud:readme-standard -->
[![Maintained](https://img.shields.io/badge/Maintained-yes-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Showcase](https://img.shields.io/badge/Portfolio-Showcase-blue.svg)](#)

_Part of the `sakib-maho` project showcase series with consistent documentation and quality standards._

This repository upgrades a legacy coursework placeholder into a functional, modern task-board web app.
It demonstrates clean front-end structure, JSON-driven rendering, and lightweight dataset validation tests.

## Features

- Multi-stage task board (`Backlog`, `In Progress`, `Review`, `Done`)
- Add new tasks with priority labels
- Advance tasks across stages with one click
- Seed data loaded from JSON
- Schema tests for task data quality

## Quick Start

```bash
git clone https://github.com/sakib-maho/legacy-coursework-web-project.git
cd legacy-coursework-web-project
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Tests

```bash
python3 -m unittest discover -s tests -p "test_*.py"
```

## License

MIT License. See `LICENSE`.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Python `unittest` for data validation

## Project Structure

```text
legacy-coursework-web-project/
├── index.html
├── assets/
│   ├── app.js
│   └── styles.css
├── data/
│   └── tasks.json
└── tests/
    └── test_tasks_schema.py
```
