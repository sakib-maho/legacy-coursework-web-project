import json
from pathlib import Path
import unittest


class TasksSchemaTests(unittest.TestCase):
    def test_seed_tasks_schema(self) -> None:
        data = json.loads(Path("data/tasks.json").read_text(encoding="utf-8"))
        self.assertGreaterEqual(len(data), 3)
        allowed_stages = {"Backlog", "In Progress", "Review", "Done"}
        allowed_priorities = {"low", "medium", "high"}

        for task in data:
            self.assertIn("id", task)
            self.assertIn("title", task)
            self.assertIn("priority", task)
            self.assertIn("stage", task)
            self.assertIsInstance(task["id"], int)
            self.assertTrue(task["title"].strip())
            self.assertIn(task["priority"], allowed_priorities)
            self.assertIn(task["stage"], allowed_stages)


if __name__ == "__main__":
    unittest.main()
