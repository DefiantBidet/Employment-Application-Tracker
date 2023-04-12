package main

import (
	"defiantbidet/job-tracker/routes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

// func TestStaticRoute(test *testing.T) {}

func TestApiBaseRoute(test *testing.T) {
	router := routes.SetupRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api", nil)
	router.ServeHTTP(w, req)

	expected := `{"version":"v1"}`

	assert.Equal(test, 200, w.Code)
	assert.Equal(test, expected, w.Body.String())
}

// func TestApplicationRoute(test *testing.T) {}
// func TestApplicationRouteGetAll(test *testing.T) {}
// func TestApplicationRouteGetOne(test *testing.T) {}
// func TestApplicationRouteCreate(test *testing.T) {}
// func TestApplicationRouteUpdate(test *testing.T) {}
// func TestApplicationRouteDelete(test *testing.T) {}

// func TestCompanyRoute(test *testing.T) {}
// func TestCompanyRouteGetAll(test *testing.T) {}
// func TestCompanyRouteGetOne(test *testing.T) {}
// func TestCompanyRouteCreate(test *testing.T) {}
// func TestCompanyRouteUpdate(test *testing.T) {}
// func TestCompanyRouteDelete(test *testing.T) {}

// func TestContactRoute(test *testing.T) {}
// func TestContactRouteGetAll(test *testing.T) {}
// func TestContactRouteGetOne(test *testing.T) {}
// func TestContactRouteCreate(test *testing.T) {}
// func TestContactRouteUpdate(test *testing.T) {}
// func TestContactRouteDelete(test *testing.T) {}
