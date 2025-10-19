CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(150),
  event_date DATE NOT NULL
);

CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE tickets (
  ticket_id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(event_id) ON DELETE CASCADE,
  customer_id INT REFERENCES customers(customer_id) ON DELETE CASCADE,
  ticket_type VARCHAR(50),
  price NUMERIC(10, 2) NOT NULL,
  purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO events (name, location, event_date)
VALUES ('Next.js Conference', 'Jakarta', '2025-12-01'),
       ('Vue Summit', 'Bali', '2025-10-20');

INSERT INTO customers (first_name, last_name, email)
VALUES ('Dicky', 'Pratama', 'dicky@example.com'),
       ('Luke', 'Skywalker', 'luke@galaxy.com');

INSERT INTO tickets (event_id, customer_id, ticket_type, price)
VALUES (1, 1, 'VIP', 800.00),
       (2, 2, 'Regular', 150.00);

SELECT
  c.first_name || ' ' || c.last_name AS customer_name,
  e.name AS event_name,
  t.ticket_type,
  t.price,
  t.purchase_date
FROM tickets t
JOIN customers c ON t.customer_id = c.customer_id
JOIN events e ON t.event_id = e.event_id;
