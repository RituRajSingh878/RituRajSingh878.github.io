---
layout: page
title: Archive
permalink: /archive/
---


<ul>
  {% for post in site.posts %}
    {% if post.news == false %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <br>
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
    {% if post.link %}
    <time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.link }}">{{ post.title }}</a><br>
       {% else %}
    <time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a><br>
    {% endif %}
   {% endif %}
  {% endfor %}
</ul>
