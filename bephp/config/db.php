<?php 
    class db {
        //connect db PDO
        
    private $servername = "sql613.main-hosting.eu";
    private $username = "u428350866_sanh";
    private $password = "Sanh0804";
    private $dbName = "u428350866_sunhair";
    private $conn;
    public function connect(){
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbName", $this->username, $this->password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //print "Connected successfully \n"; 
            } catch(PDOException $e) {
            print "Connection failed: " . $e->getMessage();
        }
        return $this->conn;
    }
    }
?>