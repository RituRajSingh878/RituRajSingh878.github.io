---
layout: page
title: About Me
description: Ritu Raj Singh is a open sourec contributor who loves machine learning.
permalink: /about/
---
<br>

Hi, I’m Ritu Raj Singh, final year student at **Indian Institute of Technology (BHU) Varanasi**. I am an active Open Source contributor.
Apart from Coding, I love going Hackathons, attending Conferences, and Travelling.

<br>

<h3 class="card"> <b>NEWS</b> </h3>
<div class="card" style="overflow-y: auto;max-height: 500px;">

<div class="card-body">
{% for post in site.posts %}
{% if post.news %}
<ul>
<time><b>{{ post.date | date:"%B %Y" }}</b></time>&nbsp;&nbsp;&nbsp;<p>{{ post.title }}</p>    
</ul>
{% endif %}
{% endfor %}

</div>
</div>

<br>
You can find me at these places but the most reliable way to reach me is to send an email.

<div align="center">
<p>
<a href="mailto:rituraj.singh.mat17@iitbhu.ac.in"><i class="fa fa-envelope-o fa-fw" aria-hidden="true" style="font-size:40px;color:#2980b9"></i></a>
&nbsp; &nbsp; &nbsp;
<a href="https://github.com/RituRajSingh878"><i class="fa fa-github" aria-hidden="true" style="font-size:40px;color:#2980b9"></i></a>
&nbsp; &nbsp; &nbsp;
<a href="https://twitter.com/RituRajSingh878"><i class="fa fa-twitter" aria-hidden="true" style="font-size:40px;color:#2980b9"></i></a>
&nbsp; &nbsp; &nbsp;
<a href="https://www.linkedin.com/in/ritu-raj-singh-786aa7160"><i class="fa fa-linkedin" aria-hidden="true" style="font-size:40px;color:#2980b9"></i></a>
&nbsp; &nbsp; &nbsp;
</p>
</div>

