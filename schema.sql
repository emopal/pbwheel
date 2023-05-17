CREATE TABLE IF NOT EXISTS submissions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    poem TEXT,
    author TEXT,
    created TEXT,
    votes INTEGER
);