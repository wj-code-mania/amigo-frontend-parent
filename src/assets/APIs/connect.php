<?php
	class UserMessage
	{
		public $name;
		public $email;
		public $message;
	}
	
	class Response
	{
		public $error;
		public $data;
		public $message;
	}
	
	function getMessage($name, $email, $message)
	{
		$message1 = '
<html>
<head>
<title></title>
</head>
<body>
<table>
<tr>
  <td>Name : '.$name.'</td>
</tr>
<tr>
  <td>Email : '.$email.'</td>
</tr>
<tr>
  <td>Message : '.$message.'</td>
</tr>
</table>
</body>
</html>
';
	return $message1;
	}
?>
<?php
	$response = new Response();
	if (isset($_POST["name"]) && !empty($_POST["name"]) &&
		isset($_POST["email"]) && !empty($_POST["email"]) &&
		isset($_POST["message"]) && !empty($_POST["message"]) 
		) {
		$name = $_POST["name"];
		$email = $_POST["email"];
		$message = $_POST["message"];
		
		$message1 = getMessage($name, $email, $message);
		$subject="Enquiry from amigos";
		$headers1  = "MIME-Version: 1.0\r\n";
		$headers1 .= "Content-type: text/html; charset=iso-8859-1\r\n";
		$headers1 .= "To:";
		$to1="schandanshive2@gmail.com,cheriansabs@gmail.com,swapnibk@gmail.com";
		$headers1 .= "\r\n";
		$headers1 .= "From: <$email>\r\n";
		mail($to1, $subject, $message1, $headers1);	
		//echo $message1;
		$response->error = false;
		$response->data = [];
		$response->message = "Thank you for contacting amigos. We will Get back to you in 24 hours. Stay tuned!";
		echo json_encode($response);
	}else{  
		$response->error = true;
		$response->data = [];
		$response->message = "Incomplete Data";
		echo json_encode($response);
	}
?>