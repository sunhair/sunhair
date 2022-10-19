<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    
    include_once('../../config/db.php');
    include_once('../../model/test.php');
    
    $db = new db();

    $connect = $db->connect();

    $test = new test($connect);

    $read = $test->read();
    
    $num = $read->rowCount();

    if($num > 0) {
        $test_arr = [];
        $test_arr['data'] = [];

        while ($row = $read->fetch(PDO::FETCH_ASSOC)) {

            extract($row);

            $test_item = array(
                'id' => $id,
                'name' => $name,
            );
            array_push($test_arr['data'], $test_item);
        }
        echo json_encode($test_arr);
    }
?>