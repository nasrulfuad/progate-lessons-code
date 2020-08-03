<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>
  <div class="header">
    <div class="header-left">Progate</div>
    <div class="header-right">
      <ul>
        <li>About Progate</li>
        <li>Recruitment</li>
        <li class="selected">Contact</li>
      </ul>
    </div>
  </div>

  <div class="main">
    <div class="contact-form">
      <div class="form-title">Contact</div>
      <form method="post" action="sent.php">
        <div class="form-item">Name</div>
        <input type="text" name="name">

        <div class="form-item">Age</div>
        <select name="age">
          <option value="unselected">Select your age</option>
          <!-- Use a for loop to make age options 6 to 100 -->
          <?php 
            for($i = 6; $i <= 100; $i++){
              echo "<option value='$i'>$i</option>";
            }
          ?>
        </select>

        <div class="form-item">Category</div>
        <?php 
          $types = array('About Progate', 'Comments/Opinions', 'Job inquiry', 'Media', 'Payment', 'Other');
         ?>
        <!-- Write the <select> tag below -->
        <select name="category">
          <option value="unselected">Select reason for contacting us</option>
          <?php
            foreach($types as $type) {
              echo "<option value='$type'>$type</option>";
            }
          ?>
        </select>
        
        <div class="form-item">Message</div>
        <textarea name="body"></textarea>

        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
  
  <div class="footer">
    <div class="footer-left">
      <ul>
        <li>About Progate</li>
        <li>Recruitment</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="like-box">
      <iframe src="https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FProgate%2F742679992421539&amp;show_faces=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:300px;" allowTransparency="true"></iframe>
    </div>
  </div>
</body>
</html>