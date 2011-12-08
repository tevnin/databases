<?php
	include( 'includes/header.php' );
?>

	<!-- BODY goes here-->
	<section id="intro">
		<h2>How do I get my project funded?</h2>
			<form id="regForm" method="POST">
				<ul>
					<li><input name="name" id="name" value="name" onfocus="if (this.value=='name') this.value = ''"/></li>
					<li><input name="email" id="email" value="email" onfocus="if (this.value=='email') this.value = ''"></li>
					<li><input name="project" id="project" value="project name" onfocus="if (this.value=='project name') this.value = ''"></li>
				</ul>
			</form>
	</section>

	<h3 id="start" class="saveUser"><span>get started</span></h3>
	
	<section id="flow"></section>
	

<?php
	include( 'includes/footer.php' );
?>