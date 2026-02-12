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

  <div class="articles-container">
    {% for post in site.posts %}
    {% if post.news == false %}
    <article class="article-full">
      <header class="article-header">
        {% if post.link %}
        <h2 class="article-title">
          <a href="{{ post.link }}" target="_blank">{{ post.title }}</a>
          <span class="external-link-icon"><i class="fa fa-external-link"></i></span>
        </h2>
        {% else %}
        <h2 class="article-title">{{ post.title }}</h2>
        {% endif %}
        <div class="article-meta">
          <span class="article-date">
            <i class="fa fa-calendar"></i>
            {{ post.date | date: "%B %-d, %Y" }}
          </span>
          {% if post.categories.size > 0 %}
          <span class="article-categories">
            <i class="fa fa-folder"></i>
            {% for cat in post.categories %}
              {% if site.jekyll-archives %}
              <a href="{{ site.baseurl }}/category/{{ cat }}">{{ cat | capitalize }}</a>{% if forloop.last == false %}, {% endif %}
              {% else %}
              <a href="{{ site.baseurl }}/posts/#{{ cat }}">{{ cat | capitalize }}</a>{% if forloop.last == false %}, {% endif %}
              {% endif %}
            {% endfor %}
          </span>
          {% endif %}
        </div>
      </header>
      
      <div class="article-content">
        {% assign content_stripped = post.content | strip %}
        {% if content_stripped != '' %}
          {{ post.content }}
        {% elsif post.excerpt %}
          <p>{{ post.excerpt }}</p>
          {% if post.link %}
          <div style="margin-top: 1.5em; padding: 1em; background: #f8f9fa; border-left: 4px solid #2980b9; border-radius: 4px;">
            <strong>Note:</strong> This article is hosted externally. Click the button below to read the full content.
          </div>
          {% endif %}
        {% else %}
          <div style="padding: 2em; background: #f8f9fa; border-radius: 8px; color: #666; text-align: center;">
            {% if post.link %}
              <p><i class="fa fa-external-link" style="font-size: 2em; margin-bottom: 0.5em; color: #2980b9;"></i></p>
              <p>This article is available at an external link. Click below to read it.</p>
            {% else %}
              <p><i class="fa fa-file-text-o" style="font-size: 2em; margin-bottom: 0.5em; color: #999;"></i></p>
              <p>No content available for this article.</p>
            {% endif %}
          </div>
        {% endif %}
      </div>
      
      {% if post.link %}
      <div class="article-footer">
        <a href="{{ post.link }}" target="_blank" class="btn btn-outline">
          Read Full Article <i class="fa fa-external-link"></i>
        </a>
      </div>
      {% endif %}
    </article>
    
    {% unless forloop.last %}
    <hr class="article-divider">
    {% endunless %}
    {% endif %}
    {% endfor %}
  </div>
</div>

