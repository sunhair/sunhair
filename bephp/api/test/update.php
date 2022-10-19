<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');


    include_once('../../config/db.php');
    include_once('../../model/test.php');
 
    $db = new db();

    $connect = $db->connect();

    $test = new test($connect);

    $data = json_decode(file_get_contents("php://input"));

    $test->id = $data->id;
    $test->name = $data->name;

    if($test->update()){
        echo json_encode(array('message','Question Updated'));

    }else {
        echo json_encode(array('message','Fail to update'));
    }
?>