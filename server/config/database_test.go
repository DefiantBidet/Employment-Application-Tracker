package config

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestBuildPostgresConfig(test *testing.T) {
	// create mock env
	test.Setenv("POSTGRES_HOST", "0.0.0.0")
	test.Setenv("POSTGRES_PORT", "1234")
	test.Setenv("POSTGRES_USER", "foo")
	test.Setenv("POSTGRES_PASSWORD", "12345")
	test.Setenv("POSTGRES_DB", "foo_db")

	// create expected mock
	expected := &PostgresConfig{
		Host:     "0.0.0.0",
		Port:     1234,
		User:     "foo",
		DBName:   "foo_db",
		Password: "12345",
	}

	// create actual instance to test
	actual := BuildPostgresConfig()

	assert.Exactly(test, expected, actual, "The Config Object should match.")
}

func TestBuildPostgresConfigMissingPortVar(test *testing.T) {
	// create mock env
	test.Setenv("POSTGRES_HOST", "0.0.0.0")
	test.Setenv("POSTGRES_PORT", "")
	test.Setenv("POSTGRES_USER", "foo")
	test.Setenv("POSTGRES_PASSWORD", "12345")
	test.Setenv("POSTGRES_DB", "foo_db")

	// create expected mock
	expected := &PostgresConfig{
		Host:     "0.0.0.0",
		Port:     5432,
		User:     "foo",
		DBName:   "foo_db",
		Password: "12345",
	}

	// create actual instance to test
	actual := BuildPostgresConfig()

	assert.Exactly(test, expected, actual, "The Config Object should match.")
}

func TestBuildPostgresConfigPortNotIntegerError(test *testing.T) {
	// create mock env
	test.Setenv("POSTGRES_HOST", "0.0.0.0")
	test.Setenv("POSTGRES_PORT", "12AB")
	test.Setenv("POSTGRES_USER", "foo")
	test.Setenv("POSTGRES_PASSWORD", "12345")
	test.Setenv("POSTGRES_DB", "foo_db")

	// create expected mock
	expected := &PostgresConfig{
		Host:     "0.0.0.0",
		Port:     5432,
		User:     "foo",
		DBName:   "foo_db",
		Password: "12345",
	}

	// create actual instance to test
	actual := BuildPostgresConfig()

	assert.Exactly(test, expected, actual, "The Config Object should match.")
}

func TestDbURL(test *testing.T) {
	// create mock env
	test.Setenv("POSTGRES_HOST", "0.0.0.0")
	test.Setenv("POSTGRES_PORT", "9999")
	test.Setenv("POSTGRES_USER", "foo")
	test.Setenv("POSTGRES_PASSWORD", "12345")
	test.Setenv("POSTGRES_DB", "foo_db")

	var expected string = "postgres://foo:12345@0.0.0.0:9999/foo_db"

	config := BuildPostgresConfig()
	actual := DbURL(config)

	assert.Equal(test, expected, actual, "The connection string should match.")
}
