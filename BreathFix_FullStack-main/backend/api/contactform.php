<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Enable CORS and allow JSON requests
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Respond to preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include the database connection file
include('../database/connect.php');

// Check if there is any data in the POST request
$data = json_decode(file_get_contents('php://input'), true);

// Check if the data is valid
if ($data) {
    // Extract variables from the data
    $name = $data['name'];
    $email = $data['email'];
    $gender = $data['gender'];
    $description = $data['description'];

    // Validate input fields
    if (empty($name) || empty($email) || empty($gender) || empty($description)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit();
    }

    // SQL query to insert data into the database
    $sqlquery = 'INSERT INTO contactform(name, email, gender, description) VALUES(?,?,?,?)';

    // Prepare the statement and bind the parameters
    if ($stmt = $conn->prepare($sqlquery)) {
        $stmt->bind_param("ssss", $name, $email, $gender, $description);

        // Execute the query
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Form submitted successfully"]);
        } else {
            // Log detailed error for debugging purposes
            error_log("Database error: " . $stmt->error);
            echo json_encode(["status" => "error", "message" => "Failed to submit form"]);
        }

        // Close the prepared statement
        $stmt->close();
    } else {
        // Log the error if the query preparation failed
        error_log("Database query preparation failed: " . $conn->error);
        echo json_encode(["status" => "error", "message" => "Database query preparation failed"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input data"]);
}

// Close the database connection
$conn->close();
