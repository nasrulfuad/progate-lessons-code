<?php
class Review {
  private $menuName;
  // Declare the $userName private property
  private $userName;
  
  private $body;

  // Add $userName to the second parameter
  public function __construct($menuName, $userName, $body) {
    $this->menuName = $menuName;
    // Assign $userName to the userName property
    $this->userName = $userName;
    
    $this->body = $body;
  }

  public function getMenuName() {
    return $this->menuName;
  }

  public function getBody() {
    return $this->body;
  }
  
  // Define the getUser method
  public function getUser($users) {
    foreach($users as $user) {
      if ($user->getName() == $this->userName) {
        return $user;
      }
    }
  }
  
}

?>