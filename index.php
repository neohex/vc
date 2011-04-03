<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
       Remove this if you use the .htaccess -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>@drublic</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Place favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">


  <!-- CSS: implied media="all" -->
  <link rel="stylesheet" href="css/style.css?v=2">

  <!-- Uncomment if you are specifically targeting less enabled mobile browsers
  <link rel="stylesheet" media="handheld" href="css/handheld.css?v=2">  -->

  <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
  <script src="js/libs/modernizr-1.7.min.js"></script>

</head>

<body>

  <div id="container">
    <header>
      <nav>
        <ul>
          <li class="active"><a href="home">Home</a></li>
          <li><a href="imprint">Imprint</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
      
      <hgroup>
        <a href="/">@drublic</a>
      </hgroup>
    </header>
    
    <div id="main" role="main">
      <section class="flipthemes">
        <h2><a href="http://flipthemes.de/" target="_blank">Flipthemes</a></h2>
        
        <div class="feed">
          <ul>
            <li>This stream is empty&hellip;</li>
          </ul>
        </div>
      </section>
      
      <section class="pagetimer">
        <h2><a href="http://pagetimer.de/" target="_blank">Pagetimer</a></h2>
        
        <div class="feed">
          <ul>
            <div class="loader"></div>
          </ul>
        </div>
      </section>
      
      <section class="twitter">
        <h2><a href="http://twitter.com/drublic" target="_blank">Twitter</a></h2>
        
        <div class="feed">
          <ul>
            <div class="loader"></div>
          </ul>
        </div>
      </section>
      
      <section class="projects">
        <h2><a href="">Latest Projects</a></h2>
        
        <div class="feed">
          <ul>
            <li>
              <span class="front">
                <img src="img/jsfiddle.png" alt="">
                <h4>Google Chrome App - jsFiddle</h4>
              </span>
              <span class="back">
                <p><a href="http://jsfiddle.net" target="_blank">jsFiddle</a> is a pretty useful social coding tool. This is an app for Google Chrome which works like a bookmark.</p>
                <p><a href="https://chrome.google.com/webstore/detail/combhimnlhkmpfebbfbccnkgopecnoem" target="_blank">Visit</a> Chrome Web Store to view the app and download it.</p>
              </span>
            </li>
          
          </ul>
        </div>
      </section>
      
      <section class="tumblr">
        <h2><a href="http://drublic.tumblr.com/" target="_blank">Tumblr</a></h2>
        
        <div class="feed">
          <ul>
            <div class="loader"></div>
          </ul>
        </div>
      </section>
      

    </div>
    
    <!--! Imprint -->
    <section class="imprint">
      <h2>Imprint</h2>
      
      <div class="clearfix">
        <div class="col_50">
          <h3>Source Access Designz</h3>
          <p>
            Obere Bachstra&szlig;e 15<br>
            35606 Solms<br>
            Germany
          </p>
        </div>
        
        <div class="col_50">
          <h3>Contact</h3>
          <p>Hans Christian Reinl<br>
            <a href="mailto:info@drublic.de">info@drublic.de</a><br>
            +49 176 44508482<br>
          </p>
          
          <p>Finanzamt Wetzlar<br>
          Tax ID: 039 860 01625</p>
        </div>
      </div>
      
      
      <h3>Some things&hellip;</h3>
      
      <p>There is no warranty for integrity, completeness and currentness for this website.<br>
        Furthermore Hans Christian Reinl and Source Access Designz don't take any liability concerning external links.</p>
      <p>Please notice the copyright law for each of the presented pages.</p>
      
      <p>Please be aware of the fact that we store some of the data while you visit this this page. For doing this we mostly use <a href="http://piwik.org/" target="_blank">Piwik</a>.</p>
    </section>
    
    
    
    
    <!--! Contact -->
    <section class="contact">
      <h2>Contact me</h2>
      
      <div class="clearfix">
        <form action="contact/send" method="post">
          <p>Feel free to write me an email. But be aware that there are also other means of communication. If you have questions regarding a project, please contact me through the project's website. I am on <a href="http://twitter.com/#!/drublic" target="_blank">Twitter</a>.</p>
          
          <fieldset>
            <label for="contact-name">Name:</label>
            <input type="text" name="contact-name" id="contact-name">
          </fieldset>
          
          <fieldset>
            <label for="contact-mail">E-Mail:</label>
            <input type="email" name="contact-mail" id="contact-mail">
          </fieldset>
          
          <fieldset>
            <label for="contact-message">Your Message:</label>
            <textarea name="contact-message" id="contact-message"></textarea>
          </fieldset>
          
          <fieldset>
            <input type="submit" value="Send the Message">
          </fieldset>
        </form>
      </div>
      
    </section>
    
    
    <footer>

    </footer>
  </div> <!--! end of #container -->


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
  <script>window.jQuery || document.write("<script src='js/libs/jquery-1.5.1.min.js'>\x3C/script>")</script>


  <!-- scripts concatenated and minified via ant build script-->
  <script src="js/plugins.js"></script>
  <script src="js/twitter-text.js"></script>
  <script src="js/script.js"></script>
  <!-- end scripts-->


  <!--[if lt IE 7 ]>
    <script src="js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
  <![endif]-->


  <!-- mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID -->
  <script>
    var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
    g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
    s.parentNode.insertBefore(g,s)}(document,"script"));
  </script>

</body>
</html>