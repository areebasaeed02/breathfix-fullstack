<?php

// Enable CORS and allow JSON requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Respond to preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include the database connection file
include('../database/connect.php');

// Decode the incoming JSON request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $email = $data['email'];

    // Check if email already exists in the database
    $check_query = "SELECT * FROM email WHERE email = ?";
    $stmt = $conn->prepare($check_query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Email is already registered"]);
    } else {
        // Insert the new email into the database
        $sql_query = "INSERT INTO email(email) VALUES(?)";
        $stmt = $conn->prepare($sql_query);
        $stmt->bind_param("s", $email);
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Email Registered Successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error in Registration"]);
        }
    }

    $stmt->close();
}

$conn->close();
