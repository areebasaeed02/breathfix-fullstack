<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Respond to preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// path of database connection file from database folder
include('../database/connect.php');

// get data on from request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $username = $data["username"];
    $email = $data["email"];
    $password = $data["password"];

    // check if email and username already registered
    $check_query = "SELECT * FROM users WHERE username = ? OR email = ?";
    $stmt = $conn->prepare($check_query);
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if ($row['username'] === $username) {
            echo json_encode(["status" => "error", "message" => "username is already registered"]);
        } elseif ($row['email'] === $email) {
            echo json_encode(["status" => "error", "message" => "Email is already registered"]);
        }
    } else {
        // validate password strength
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
        $number = preg_match('@[0-9]@', $password);
        $special_character = preg_match('@[^\w]@', $password);

        if (strlen($password) < 7) {
            echo json_encode(["status" => "error", "message" => "Password must be greater than 7 characters"]);
        } elseif (!$uppercase || !$lowercase || !$number || !$special_character) {
            echo json_encode(["status" => "error", "message" => "Password is not in a valid combination"]);
        } else {
            // hash the password
            $hash_password = password_hash($password, PASSWORD_DEFAULT);
            // query to insert data into users table
            $sql_query = "INSERT INTO users(username, email, password) VALUES(?,?,?)";
            $stmt = $conn->prepare($sql_query);
            $stmt->bind_param("sss", $username, $email, $hash_password);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "User Registered Successfully"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error in Registration"]);
            }
        }
    }
    $stmt->close();
}
$conn->close();
