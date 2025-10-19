package main

import (
  "encoding/json"
  "fmt"
  "net/http"
)

type User struct {
  ID   int    `json:"id"`
  Name string `json:"name"`
}

func handler(w http.ResponseWriter, r *http.Request) {
  users := []User{{1, "vermilion"}, {2, "State"}}
  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(users)
}

func main() {
  http.HandleFunc("/users", handler)
  fmt.Println("Server running on http://localhost:8080")
  http.ListenAndServe(":8080", nil)
}
