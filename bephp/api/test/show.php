<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    
    include_once('../../config/db.php');
    include_once('../../model/test.php');
    
    $db = new db();

    $connect = $db->connect();

    $test = new test($connect);

    $test-> id = isset($_GET['id']) ? $_GET['id'] : die();

    $test->show();

    $test_item = array(
        'id' => $test->id,
        'name' => $test->name,
    );
print_r(json_encode($test_item));

?>