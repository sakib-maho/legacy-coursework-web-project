# Legacy Coursework Web Project (Modernized)

This repository upgrades a legacy coursework placeholder into a functional, modern task-board web app.
It demonstrates clean front-end structure, JSON-driven rendering, and lightweight dataset validation tests.

## Features

- Multi-stage task board (`Backlog`, `In Progress`, `Review`, `Done`)
- Add new tasks with priority labels
- Advance tasks across stages with one click
- Seed data loaded from JSON
- Schema tests for task data quality

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Python `unittest` for data validation

## Run Locally

```bash
git clone https://github.com/sakib-maho/legacy-coursework-web-project.git
cd legacy-coursework-web-project
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Run Tests

```bash
python3 -m unittest discover -s tests -p "test_*.py"
```

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

## License

MIT License. See `LICENSE`.
