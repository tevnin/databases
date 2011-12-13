<?php

			//insert user in users collection
			$thisGuy = $users->findOne( array( "name" => $userName  ) );
		  if ( $thisGuy ) {
		    
		  }else{
				$users->insert(array('name'=>$userName,'email'=>$userEmail));
			}
			
		

?>

