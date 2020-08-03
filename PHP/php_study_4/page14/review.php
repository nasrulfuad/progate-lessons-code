<?php
class Review {
  private $menuName;
  // Change $userName to $userId
  private $userId;
  private $body;

  // Change the parameter $userName to $userId
  public function __construct($menuName, $userId, $body) {
    $this->menuName = $menuName;
    // Change userName to userId
    $this->userId = $userId;
    $this->body = $body;
  }

  public function getMenuName() {
    return $this->menuName;
  }

  public function getBody() {
    return $this->body;
  }
  
  public function getUser($users) {
    foreach ($users as $user) {
      // Rewrite the code below
      if ($user->getId() == $this->userId) {
        return $user;
      }
    }
  }
  
}

?>