<?php
$users = [
  ["id" => 1, "name" => "Alice"],
  ["id" => 2, "name" => "Bob"]
];

function getUsers($users) {
  header("Content-Type: application/json");
  echo json_encode($users);
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
  getUsers($users);
}
?>
