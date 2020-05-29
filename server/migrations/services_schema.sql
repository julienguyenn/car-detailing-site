CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    service_name VARCHAR(255),
    price INTEGER,
    time NUMERIC,
    description TEXT,
    add_on BOOLEAN DEFAULT false
);
