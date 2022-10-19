<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');


    include_once('../../config/db.php');
    include_once('../../model/test.php');
 
    $db = new db();

    $connect = $db->connect();

    $test = new test($connect);

    $data = json_decode(file_get_contents("php://input"));

    $test->id = $data->id;
    
    if($test->delete()){
        echo json_encode(array('message','Question Deleted'));

    }else {
        echo json_encode(array('message','Fail to delete'));
    }
?>