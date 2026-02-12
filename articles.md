---
layout: page
title: Articles
description: Blog posts and articles by Ritu Raj Singh
permalink: /articles/
main_nav: true
---

<div class="articles-page">
  <div class="page-header-section" style="text-align: center; margin: 3em 0 4em 0; position: relative; padding: 2em 0;">
    <div class="page-header-background" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(41, 128, 185, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%); border-radius: 20px; z-index: 0;"></div>
    <div style="position: relative; z-index: 1;">
      <div class="page-header-icon" style="font-size: 4em; color: #2980b9; margin-bottom: 0.5em; display: inline-block; animation: float 3s ease-in-out infinite;">
        <i class="fa fa-book"></i>
      </div>
      <h1 class="page-header-title" style="color: #2980b9; margin: 0.5em 0; font-size: 2.5em; font-weight: 700; letter-spacing: -0.5px;">
        Articles & Blog Posts
      </h1>
      <p class="page-header-subtitle" style="color: #666; font-size: 1.2em; margin-top: 0.5em; font-weight: 300;">
        Insights, tutorials, and thoughts on technology, open source, and machine learning
      </p>
      <div class="page-header-divider" style="width: 80px; height: 4px; background: linear-gradient(to right, #2980b9, #3498db); margin: 1.5em auto; border-radius: 2px;"></div>
    </div>
  </div>

  <ul class="post-list">
    {% for post in site.posts %}
    {% if post.news == false %}
    <li>
     {% if post.link %}
      <h2> 
        <a class="post-link" href="{{ post.link}}">{{ post.title }}</a>
      </h2>
     {% else %}	
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      {% endif %}
      <section class="post-excerpt" itemprop="description">
        <p>{{ post.content | strip_html | truncatewords: 50 }}</p>
      </section>
      <section class="post-meta">
        <div class="post-date"><i class="fa fa-calendar"></i> {{ post.date | date: "%B %-d, %Y" }}</div>
        <div class="post-categories">
        {% if post.categories.size > 0 %}in {% for cat in post.categories %}
          {% if site.jekyll-archives %}
          <a href="{{ site.baseurl }}/category/{{ cat }}">{{ cat | capitalize }}</a>{% if forloop.last == false %}, {% endif %}
          {% else %}
          <a href="{{ site.baseurl }}/posts/#{{ cat }}">{{ cat | capitalize }}</a>{% if forloop.last == false %}, {% endif %}
          {% endif %}
        {% endfor %}{% endif %}
        </div>
      </section>
    </li>
    {% if forloop.last == false %}<hr>{% endif %}
    {% endif %}
    {% endfor %}
  </ul>
</div>

