<?php
	$dev = $_SERVER['HTTP_HOST'] == "drublic.de";

	function base_url () {
		global $dev;

		if ($dev) {
			return "http://drublic.de/";
		} else {
			return "http://localhost/vc/dist/";
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">

	<title>drublic &mdash; State of the Art Front-end Development - Hans
			Christian Reinl, Freiburg – HTML5 Boilerplate, Working Draft, TYPO3</title>

	<!--
		     _            _     _ _
		  __| |_ __ _   _| |__ | (_) ___
		 / _` | '__| | | | '_ \| | |/ __|
		| (_| | |  | |_| | |_) | | | (__
		 \__,_|_|   \__,_|_.__/|_|_|\___|

		Feel free to view and copy my source-code if you want to.
		Contact me if you have questions: info@drublic.de

		Thanks for visiting,
		Hans
	-->

	<!-- Who did this page -->
	<link type="text/plain" rel="author" href="/humans.txt">
	<meta name="author" content="Hans Christian Reinl">

	<!-- The Feed -->
	<link rel="alternate" type="application/rss+xml" title="drublic"
			href="http://feeds.feedburner.com/drublic">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="<?php print base_url(); ?>css/main.css">

	<!-- Meta-Tagging -->
	<meta name="description" content="drublic - Hans Christian Reinl - Front-end
			Development on the edge.">
	<meta name="keywords" content="Hans Christian Reinl,
			CSS,
			JavaScript,
			HTML5,
			drublic,
			Front-end,
			Development,
			HTML5 Boilerplate,
			Working Draft,
			TYPO3,
			Webdesign,
			Freiburg,
			Flipthemes">
	<meta name="application-name" content="drublic">

	<link rel="canonical" href="<?php print base_url(); ?>">
	<link rel="index" title="drublic - State of the Art Webdesign -
			HTML, CSS, JavaScript – Hans Christian Reinl"
			href="<?php print base_url(); ?>">

	<!--[if lt IE9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>

<body>

	<header class="site-header">
		<nav class="site-navigation" role="navigation">
			<a href="#content" class="visuallyhidden">Skip to Content</a>

			<a href="#!" class="navigation-target" id="navigation"></a>
			<ul>
				<li class="site-logo"><a href="<?php print base_url(); ?>" title="Go to the home page">∆</a></li>
				<li><a href="<?php print base_url(); ?>resume/" title="My official résumé">Résumé</a></li>
				<li><a href="<?php print base_url(); ?>blog/" title="Get some cutting edge goodness">Blog</a></li>
				<li><a href="<?php print base_url(); ?>#work" title="View some of the work I do">Work</a></li>
				<li><a href="<?php print base_url(); ?>#hire-me" title="I do client work and propably would love to work with you">Hire me</a></li>
				<li><a href="<?php print base_url(); ?>#contact" title="Contact me if you have any questions">Contact</a></li>
			</ul>

			<a href="#navigation" class="navigation-toggle">☰</a>
		</nav>
	</header>

<div id="main" class="main" role="main">
	<header class="resume-header">
		<h1>Hans Christian Reinl</h1>
		<h4>Front-End Developer</h4>

		<address>
			79102 Freiburg, Germany<br>
			<a href="http://drublic.de/">drublic.de</a> &mdash; <a href="mailto:info@drublic.de">info@drublic.de</a><br>
			<a href="http://drublic.de/blog/">My blog</a> &ndash; <a href="https://twitter.com/drublic">Twitter</a> &ndash; <a href="https://github.com/drublic">GitHub</a>
		</address>
	</header>

	<section>
		<h2>Expertise</h2>

		<ul>
			<li>Writing cross-browser optimized HTML- and CSS-code</li>
			<li>Writing object-oriented JavaScript (including libraries like jQuery, Modernizr and MVC-Frameworks such as Backbone.js and the task based build tool Grunt.js).</li>
			<li>Highly scalable, modular and expressive code, great knowledge about performance optimization, accessibility and usability.</li>
			<li>A lot of experience in building responsive websites for iOS, Android and Windows Phone</li>
			<li>Expert knowledge in working with the content management systems TYPO3 CMS and WordPress.</li>
			<li>Experience with PHP-frameworks (Zend, TYPO3 Flow).</li>
			<li>Working with LAMP environments, expert knowledge with the versioning management software Git.</li>
			<li>Experience in Agile Development (Scrum), deep understanding of technical workflows.</li>
		</ul>
	</section>

	<section>
		<h2>Open Source Engagement</h2>
		<p>I contribute to Open Source Software with a lot of smart people.</p>

		<ul>
			<li>Core developer of <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>, a solid front-end template to start projects with. It is <a href="https://github.com/h5bp/html5-boilerplate/wiki/sites">wildly used worldwide</a>.</li>
			<li>Co-host of the weekly web-development and web-news podcast <a href="http://workingdraft.de/">Working Draft</a>.</li>
			<li>Contributions to the core of the enterprise content management system <a href="http://typo3.org/">TYPO3 CMS</a>.</li>
			<li>Developed <a href="https://github.com/drublic/init">init</a>, an extension to HTML5 Boilerpalte with more structure for SCSS files and JavaScript, built upon Grunt.js.</li>
			<li>Core developer of <a href="http://api.html5please.com/">HTML5 Please API</a>, a tool to help you check if requirements for webapps are met in the current browser.</li>
		</ul>
	</section>

	<section>
		<h2>Work</h2>

		<p>In the past I worked on projects for clients such as <a href="http://dgu-online.de/">Deutsche Gesellschaft für Unfallchirurgie</a>, publisher <a href="http://www.haufe-lexware.com/">Haufe-Lexware</a>, <a href="http://app-meister.com/">AppMeister</a>, <a href="http://www.guj.de/">Gruner + Jahr</a> and others.</p>


		<h3>Front-end Developer at <a href="http://gebruederheitz.de/">/gebrüderheitz</a></h3>
		<p>April 2010 &ndash; present</p>

		<ul>
			<li>Lead front-end developer.</li>
			<li>Consultant for mobile web applications.</li>
			<li>Client-work with Content-Management-Systems such as TYPO3 CMS and Drupal.</li>
			<li>Focusing on developing HTML, CSS and JavaScript using Open Source Software.</li>
		</ul>

		<h3>Software Developer and Co-Founder at <a href="http://colored.by/">colored.by</a></h3>
		<p>November 2011 &ndash; present</p>

		<ul>
			<li>Leading a technical team.</li>
			<li>Product development.</li>
			<li>Development of a Facebook app.</li>
			<li>Building upon Backbone.js and working with PHP-framework Zend.</li>
		</ul>

		<h3>Freelance Web-Developer</h3>
		<p>June 2008 &ndash; present</p>

		<ul>
			<li>Working on client projects using, configuring and developing front-end for TYPO3 CMS, WordPress and Magento</li>
			<li>Working with agencies like <a href="http://www.eol.de/">EOL Group</a> and tech-startups such as AppMeister.</li>
		</ul>
	</section>

	<section>
		<h2>About</h2>
		<p>I am a front-end engineer located in Freiburg, Germany. I have experience in developing scalable web-applications based on cutting edge technologies including but not limited to HTML5 APIs, CSS3 features and object-oriented JavaScript.</p>
		<p>I am passioned about writing clean and performant code.</p>
	</section>

	<section>
		<h2>Education</h2>
		<p>Goethe Schule Wetzlar; Abitur „certificate“ (high school diploma) &mdash; 2006 - 2009</p>

		<h2>Social Commitment</h2>
		<p>Civil Service at Lahn-Dill-Kliniken - Wetzlar, Germany; Department „Medical Engineering“<br>
		July 2009 - March 2010</p>
	</section>
</div>




	<footer class="site-footer">
		<div class="follow-me">
			<a href="https://twitter.com/drublic" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @drublic</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>

		<p>Made in with love. 2012. Freiburg, Germany. <a href="#imprint" title="Who does this stuff?">Legal</a>.</p>

		<ul class="social-media-links">
			<li class="rss"><a href="http://feeds.feedburner.com/drublic">Subscribe to Feed</a></li>
			<li class="github"><a href="https://github.com/drublic">Github</a></li>
			<li class="twitter"><a href="https://twitter.com/drublic">Twitter</a></li>
			<li class="google-plus"><a href="https://plus.google.com/112019818423540363330/posts">Google+</a></li>
		</ul>

		<a href="#" class="visuallyhidden">go back up to top</a>
	</footer>


	<!-- JavaScript at the bottom for fast page loading -->
	<script src="<?php print base_url(); ?>js/main.js"></script>

	<!-- Wufoo form -->
	<script>
		var z7x3k7;
		(function(d, t) {
			var s = d.createElement(t),
				options = {
					'userName':'drublic',
					'formHash':'z7x3k7',
					'autoResize':true,
					'height':'557',
					'async':true,
					'header':'show'
				};
				s.src = 'http://wufoo.com/scripts/embed/form.js';
				s.onload = s.onreadystatechange = function() {
					var rs = this.readyState;
					if (rs) if (rs != 'complete') if (rs != 'loaded') return;
					try {
						z7x3k7 = new WufooForm();
						z7x3k7.initialize(options);
						z7x3k7.display();
					} catch (e) {}
				};
				var scr = d.getElementsByTagName(t)[0],
				par = scr.parentNode; par.insertBefore(s, scr);
		}(document, 'script'));
	</script>

	<!-- Piwik -->
	<script>
		var pkBaseURL = '//drublic.de/piwik/';
		document.write('<script src="' + pkBaseURL + 'piwik.js"><\/script>');
	</script><script>
	try {
		var piwikTracker = Piwik.getTracker(pkBaseURL + 'piwik.php', 1);
		piwikTracker.trackPageView();
		piwikTracker.enableLinkTracking();
	} catch( err ) {}
	</script>
	<noscript><img src="http://drublic.de/piwik/piwik.php?idsite=1" style="border:0" alt="" /></noscript>
</body>
</html>
