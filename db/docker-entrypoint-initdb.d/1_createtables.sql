\connect employment_db

-- case-insensitive text
-- used for email addresses
CREATE EXTENSION citext;

-- Functions
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.modified_timestamp = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION process_status_history()
RETURNS TRIGGER AS $status_history$
    BEGIN
        --
        -- Create a row in status_history to reflect the status change on employment,
        --
        IF (TG_OP = 'UPDATE') THEN
            INSERT INTO status_history(
              application_id,
              company_id,
              status
            )
            VALUES(
              NEW.id,
              NEW.company_id,
              NEW.status
            );
            RETURN NEW;
        ELSIF (TG_OP = 'INSERT') THEN
            INSERT INTO status_history(
              application_id,
              company_id,
              status
            )
            VALUES(
              NEW.id,
              NEW.company_id,
              NEW.status
            );
            RETURN NEW;
        END IF;
        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
$status_history$ LANGUAGE plpgsql;

-- Application Status
CREATE TYPE APPLICATION_STATUS AS ENUM ('Applied', 'Ghosted', 'Interviewing', 'Denied', 'Approved');

-- Tables

-- company
CREATE TABLE IF NOT EXISTS company(
  id SERIAL primary key NOT NULL,
  name text NOT NULL,
  notes text,
  created_timestamp timestamp DEFAULT NOW(),
  modified_timestamp timestamp DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
  BEFORE UPDATE ON company
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

-- contact
CREATE TABLE IF NOT EXISTS contact(
  id SERIAL primary key NOT NULL,
  company_id SERIAL NOT NULL REFERENCES company(id),
  name text NOT NULL,
  email citext UNIQUE NOT NULL,
  notes text,
  created_timestamp timestamp DEFAULT NOW(),
  modified_timestamp timestamp DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
  BEFORE UPDATE ON contact
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

-- application
CREATE TABLE IF NOT EXISTS employment(
  id SERIAL primary key NOT NULL,
  company_id SERIAL NOT NULL REFERENCES company(id),
  role text NOT NULL,
  status APPLICATION_STATUS NOT NULL,
  salary decimal(8,2) NOT NULL,
  applied_date text DEFAULT TO_CHAR(NOW()::date,'YYYY-MM-DD'),
  notes text,
  red_flag boolean DEFAULT false NOT NULL,
  created_timestamp timestamp DEFAULT NOW(),
  modified_timestamp timestamp DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
  BEFORE UPDATE ON employment
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER record_status_history
  AFTER INSERT OR UPDATE ON employment
  FOR EACH ROW
  EXECUTE FUNCTION process_status_history();

-- status history
CREATE TABLE IF NOT EXISTS status_history(
  id SERIAL primary key NOT NULL,
  application_id SERIAL NOT NULL,
  company_id SERIAL NOT NULL,
  status APPLICATION_STATUS NOT NULL,
  created_timestamp timestamp DEFAULT NOW()
);
