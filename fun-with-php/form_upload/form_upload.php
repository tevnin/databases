<?php
	$mimeTypes = array('jpg');
	$uploadDirectory = './uploads/';	
	$error = false;
	if(isset($_FILES)) {
		if(isset($_FILES['file_uploaded'])) {
			$fileUploadedData = $_FILES['file_uploaded'];
			
			if($fileUploadedData['error'] == UPLOAD_ERR_OK) {
				$extension = end(explode(".", $fileUploadedData['name']));

				if(in_array($extension,$extensions) !== false) {
					$filename = uniqid(); // generate a new unique name for this file
					$finalDestination = $uploadDirectory . $filename . $extension;
					$fileMoveSuccess = move_uploaded_file($fileUploadedData['tmp_name'],$finalDestination);
					if($fileMoveSuccess) {
						$error = 'Successfully uploaded!';
					}
					else {
						$error = 'Something wrong went happened with the final file move';
					}
				}
				else {
					$error = 'Invalid file type uploaded!';
				}
			}
			else {
				$error = 'There was an error uploading the file.';
			}
		}
	}
?>

<!doctype html>
<html>
	<head>
		<title>Form Upload Example</title>
	</head>
	<body>
		<?php if($error): ?>
		<h4>Error: <?= $error; ?></h4>
		<?php endif;?>

		<h5>Upload</h5>
		<form method="POST" action="form_upload.php" enctype="multipart/form-data">
			File: <input type="file" name="file_uploaded" />
			<br />
			<input type="submit" />
		</form>
	</body>
</html>