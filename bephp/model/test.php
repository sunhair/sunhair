<?php
class test{
    private $conn;

    public $id;
    public $name;
    // public $category;
    
    public function __construct($db) {
        $this->conn = $db;
    }
    
    //read
    public function read() {
        $query = "SELECT * FROM test";
    
        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;

    }
    
    //read by id
    public function show() {
        $query = "SELECT * FROM test WHERE id = ? LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $row['name'];
        // return $stmt;

    }


    //create
    public function create() {
        $query = "INSERT INTO test SET name=:name";

        $stmt  = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));

        $stmt->bindParam(':name', $this->name);

        if($stmt -> execute()) {
            return true;
        }

        print("Error %s. \n" .$stmt->error);
        return false;

    }


    //update
    public function update() {
        $query = "UPDATE test SET name=:name WHERE id=:id";

        $stmt  = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':id', $this->id);

        if($stmt -> execute()) {
            return true;
        }

        print("Error %s. \n" .$stmt->error);
        return false;

    }

    //delete
    public function delete() {
        $query = "DELETE FROM test WHERE id=:id";

        $stmt  = $this->conn->prepare($query);

       
        $this->id = htmlspecialchars(strip_tags($this->id));

       
        $stmt->bindParam(':id', $this->id);

        if($stmt -> execute()) {
            return true;
        }

        print("Error %s. \n" .$stmt->error);
        return false;

    }

}
?>