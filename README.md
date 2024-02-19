<h2>Motivation</h2>
<p>Given <a href='https://www.nathankrasney.com'>www.nathankrasney.com</a> e.g. for tag 1.4 and using <a href='https://github.com/NathanKr/page-speed-insight-api-playground'>page-speed-insight-api-playground</a> i see that worst results are for the posts tab compared to the other tabs e.g. blog</p>
<p>Currently i can not say i understand this. however looking in page speed insight for the posts i see alot of js code under TBT (total blocking time) and looking inside i see react and react dom</p>
<p>So the question is - these posts are simple , they are create from .dx file so nothing special here --> so why not create html file for each post and serve it using next.js?</p>



<h2>Questions</h2>
<ul>
<li>How to make next.js load pre defined html page</li>
<li>How to handle post header (top compoent) and bottom (icons)</li>
</ul>

<h2>Answers</h2>
<h3>How to make next.js load pre defined html page</h3>
This is done using rewrites in next.config.js


<h2>Limitations</h2>
you can not rewrite a page that exist under pages directory



<h2>Points of interest</h2>
<ul>
<li>Using page speed insight on vercel for tab /about which serves 1.html the performance score is 1 and TBT is 0 => excelent results in terms of perforamnce</li>
<li>Using home page which is next.js page was 30-50 ms so next.js overhead is realy small !!!!!</li>
<li>Using www.nathankrasney.com/quiz is about x5 compare to home page here <strong>may be because of gtag !!!</strong> worth inestigating !!!</li>
</ul>

<h2>References</h2>
<ul>
<li><a href='https://blog.bitsrc.io/html-pages-in-nextjs-using-rewrites-bc5f56ea3ed'>How to Add Static HTML Pages in Next.js with Rewrites</a></li>
<li><a href='https://www.youtube.com/watch?v=hiLjA-tQtfU'>Trigger Rewrites with Nextjs in 10 minutes </a></li>
</ul>