{"title":"A Travel Through Time – and Back","permalink":"a-travel-through-time-and-back","author":"Hans Christian","authorUrl":"","categories":["HTML5","Research"],"tags":["HTML WG","HTML5","Specification","time","W3C"],"headline":"A Travel Through Time – and Back","metaTags":"","metaDescription":"","date":"2011-11-04"}


		

		
					<figure class="aligncenter">
				<img width="780" height="280" src="http://drublic.de/blog/wp-content/uploads/2011/11/times-back.png" class="attachment-medium wp-post-image" alt="times-back" />			</figure>
		
							<div class="message">
				<h3>Hey there…</h3>
				<p>This post is 600 days old. It was written on 04.11.2011. Please make sure to be careful with the information provided and check a more recent source on this topic.</p>
			</div>
		
		<h2>Somehow… &lt;time&gt; Disappeared</h2>
<p>As you might have heard the <code>&lt;time&gt;</code>-element <a title="HTML5 Specification: Diff for drop `time` and replace it with `data`" href="http://html5.org/tools/web-apps-tracker?from=6782&amp;to=6783" target="_blank">was removed</a> from the HTML5 specification <a title="Oh dear, Hixie just dropped the time element from HTML5, added a replacement without any semantics. ~@peterwinnberg" href="https://twitter.com/#!/peterwinnberg/status/130193641523249152" target="_blank">last saturday</a> by Ian “Hixie” Hickson, the editor of the spec. Hixie decided to remove <code>&lt;time&gt;</code> and replace it by the more general <code>&lt;data&gt;</code>-element.</p>
<p>A question that came up: Why got<code>&lt;time&gt;</code>&nbsp;removed and why did nobody stop Hixie?</p>
<p>Well: There <a title="title" w3c="W3C" bugtracker="Bugtracker" -="-" consider="Consider" replacing="replacing"><code><time></time></code> with <data>" href="http://www.w3.org/Bugs/Public/show_bug.cgi?id=13240" target="_blank"was a discussion</data></a>&nbsp;on the bug-tracker about replacing <code>&lt;time&gt;</code> with <code>&lt;data&gt;.</code> But nothing about it on the mailing-list and stuff… and Hixie decided to drop <code>&lt;time&gt;</code> and replace it by the power he has as the editor.</p>
<p>Not only <code>&lt;time&gt;</code> was removed from the specification but also its attributes <code>datetime</code> and <code>pubdate</code>. <code>pubdate</code> was the only way to indicate when a blog post or web-page was published.</p>
<p>As I'm not into the processes at W3C and WHATWG I decided to dig a little bit into it and keep track of what was going on about that issue with <code>&lt;time&gt;</code>.</p>
<h2>Awesome Effects!</h2>
<p>I collected some useful information and posted the links on <a title="More links about the removing `time` from the spec." href="https://plus.google.com/u/0/112019818423540363330/posts/gEvnpH1Jpcn" target="_blank">Google+</a>. Also <a title="`time` as topic on revision 45 of Working Draft" href="http://workingdraft.de/45/" target="_blank">we talked about this issue</a> on the (german) podcast <a title="Working Draft - A Frontend-Development Podcast" href="http://workingdraft.de/" target="_blank">Working Draft</a>&nbsp;on monday. I was invited by <a title="@derSchepp on Twitter" href="https://twitter.com/#!/derSchepp" target="_blank">Christian "Schepp" Schäfer</a>&nbsp;to discuss about some stuff with himself and <a title="Made My Day - Webdesign from Karlsruhe" href="http://www.mademyday.de/" target="_blank">Marc</a>.</p>
<p>Steve Faulkner was the first one (for what I noticed) that <a href="https://twitter.com/#!/stevefaulkner/status/130245413751111680" target="_blank">tweeted</a> <a href="https://twitter.com/#!/stevefaulkner/status/130737094715899904" target="_blank">about</a> <a href="https://twitter.com/#!/stevefaulkner/status/130745836123594752" target="_blank">that</a> intensively and was really upset by the dropping. Furthermore it was&nbsp;<a title="If you don't like adding of `data` and/or dropping of `time` from HTML5 do something about it, that's what the W3C HTML WG is there for ~@stevefaulkner" href="https://twitter.com/stevefaulkner/status/130598711863689217" target="_blank">his tweet</a> that encouraged me to keep track of the whole story.</p>
<p><a href="http://drublic.de/blog/wp-content/uploads/2011/11/stevefaulkner-encourage.png"><img class="aligncenter size-full wp-image-520" title="If you don't like adding of `data` and/or dropping of `time` from HTML5 do something about it, that's what the W3C HTML WG is there for ~@stevefaulkner" src="http://drublic.de/blog/wp-content/uploads/2011/11/stevefaulkner-encourage.png" alt="" width="554" height="275" /></a></p>
<p>Steve <a title="Revert Request by Steve Faulkner" href="http://lists.w3.org/Archives/Public/public-html/2011Oct/0163.html" target="_blank">explained on the the mailing-list</a> of the W3C why he likes to revert the changes made by Hixie the day before. <a href="http://lists.w3.org/Archives/Public/public-html/2011Oct/0169.html" target="_blank">Others</a> <a href="http://lists.w3.org/Archives/Public/public-html/2011Oct/0170.html" target="_blank">also</a> <a href="http://lists.w3.org/Archives/Public/public-html-comments/2011Oct/0011.html" target="_blank">liked</a> the time-element and requested a revert.</p>
<p>There were some pretty good blog posts about that topic, as for instance</p>
<ul>
<li>Bruce Lawson- <a title="Bruce Lawson's personal blog" href="http://www.brucelawson.co.uk/2011/goodbye-html5-time-hello-data/" target="_blank">Goodbye HTML5 &lt;time&gt;, hello &lt;data&gt;!</a></li>
<li>Jeremy Keith - <a title="Adactio: Timeless" href="http://adactio.com/journal/4982/" target="_blank">Timeless</a></li>
<li>Oli Studholme - <a title="Goodbye time, datetime, and pubdate. Hello date and value." href="http://html5doctor.com/time-and-data-element/" target="_blank">Goodbye time, datetime, and pubdate. Hello date and value.</a></li>
<li>Eric Eggers - Etherpad with a <a href="http://willyou.typewith.me/p/9Zl7I2dOKs" target="_blank">collection of reasons</a> to keep &lt;time&gt;</li>
<li>The &lt;time&gt;-element also got its own page: <a title="Why No Time?" href="http://whynotime.com/" target="_blank">whynotime.com</a>&nbsp;by <a href="https://twitter.com/jack_l_smith" target="_blank">@jack_l_smith</a></li>
</ul>
<p>As it turns out <code>&lt;time&gt;</code> is wildly in use all over the web:</p>
<ul>
<li>the WordPress twentyeleven-theme <a title="Search for `time`" href="http://core.svn.wordpress.org/trunk/wp-content/themes/twentyeleven/functions.php" target="_blank">uses it</a></li>
<li><a title="The Bosten Globe" href="http://bostonglobe.com/" target="_blank">The Boston Globe</a>&nbsp;makes use of it</li>
<li>I'm using it on this page</li>
<li>And many others too…</li>
</ul>
<p>As so many people where effected by the change that was made to the spec and many people though it was a bad&nbsp;decision&nbsp;there was hope that this story was not over yet… And it wasn't.</p>
<p>Again Steve Faulkner tweeted:</p>
<blockquote><p>"I feel confident that <code>&lt;time&gt;</code> will be back in the W3C HTML5 specification by the end of the week"</p>
<p>~ Steve Faulkner, 31. Oct 2011 via <a href="https://twitter.com/#!/stevefaulkner/status/130992360158007296" target="_blank">Twitter</a></p></blockquote>
<p>This was a decent statement as you can say by today.<br />
There were proposals on how to deal with <code>&lt;time&gt;</code> and how to improve it for the future and get it back into the spec. A leading role in this process is held by <a title="Tantek.com" href="http://tantek.com/" target="_blank">Tantek Çelik</a>. Read <a title="Tantek Çelik on the future of `time`" href="http://www.brucelawson.co.uk/2011/goodbye-html5-time-hello-data/#comment-836013" target="_blank">his comment</a> on Bruce Lawson's post. Also <a title="W3Conversions .:. Web Standards Coding, Accessibility and Customized Corporate Training" href="http://www.w3conversions.com/" target="_blank">Stephanie Sullivan Rewis</a> has <a title="Stephanie Sullivan Rewis on `time`" href="http://www.brucelawson.co.uk/2011/goodbye-html5-time-hello-data/#comment-835958" target="_blank">some interesting thoughts</a>.</p>
<h2>And then - the Turningpoint</h2>
<p>Currently the <a title="TPAC 2011 - W3C Meetup" href="http://www.w3.org/2011/11/TPAC/" target="_blank">TPAC 2011</a> is happening which is a conference and meeting of the W3C and its members.<br />
At <time datetime="2011-11-03T11:30Z-0700">11:30h Pacific Daytime today</time> (Please notice my use of <code>&lt;time&gt;</code> in this case. Nice, right… right?) people of the <a title="W3C HTML Working Group" href="http://www.w3.org/html/wg/" target="_blank">W3C HTML Working Group</a> met and discussed about <code>&lt;time&gt;</code> and its removal. You could have followed the discussion on IRC on W3C's channel <a title="IRC #html-wg Cannel" href="irc://irc.w3.org:6665/html-wg" target="_blank">#html-wg</a>. <a title="Minutes on `time` at TPAC 2011" href="http://www.w3.org/2011/11/03-html-wg-minutes.html#item03" target="_blank">Here</a> you can find the "minutes" (a transcription) of it. Tantek added this as a point for discussion to <a title="The TPAC Agenda" href="http://www.w3.org/html/wg/wiki/TPAC2011" target="_blank">the Agenda</a>.</p>
<p>As this all was said, there <a title="Revert request for r6783" href="http://lists.w3.org/Archives/Public/public-html/2011Nov/0011.html" target="_blank">was a mail</a>&nbsp;on the mailing-list by the Chairs of the HTML WG asking the editor of the spec (Hixie) <q>"for a revert of this change to be completed no later than the end of day on Tuesday 8th of November"</q>. If Hixie will not change this until Tuesday the Chairs will ask the W3C staff <q>"to make this change"</q>. What ever this means then… I have no idea.</p>
<p>Today Tantek began to <a title="Tantek's new requirements to `time`" href="http://www.w3.org/wiki/User:Tantekelik/time_element" target="_blank">define some new requirements</a> for the <code>&lt;time&gt;</code>-element and its attribute <code>datetime</code> (especially the syntax of the mentioned attribute).</p>
<h2>So what's the conclusion now?</h2>
<p>All the things I mentioned above show how strong the community is and how many people try to get the best out of the tools we have.</p>
<p>Hixie's decision to remove the <code>&lt;time&gt;</code>-element in favor of the <code>&lt;data&gt;</code>-element was not found&nbsp;democratically&nbsp;by everyone contributing to the HTML5 spec but was a bossy behavior.</p>
<p>Personally I learnd a lot about the process within the W3C, the WHATWG, how the specification is build, and so on asf… This was pretty good and I feel good about how things work.</p>
<p>I hope there are more people who like keep a little bit more track of what is going on with all the new stuff and be part of decisions that are made.</p>
<p>Thank you for reading all the words I wrote.</p>
<p>Thank you Steve, Tantek, thank you <a title="@yatil on Twitter" href="https://twitter.com/#!/yatil" target="_blank">Eric Eggers</a>, <a title="@shelleypowers on Twitter" href="https://twitter.com/#!/shelleypowers" target="_blank">Shelley Powers</a>, thank you everyone who was able to do something about the odd removal of <code>&lt;time&gt;</code>. You guys rockkk!</p>
				

		
	