CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    win INTEGER,
    loss INTEGER,
    user_id INTEGER REFERENCES users(id)
);