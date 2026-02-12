---
layout: page
title: Projects
permalink: /projects/
---

<div class="page-header-section" style="text-align: center; margin: 3em 0 4em 0; position: relative; padding: 2em 0;">
  <div class="page-header-background" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(41, 128, 185, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%); border-radius: 20px; z-index: 0;"></div>
  <div style="position: relative; z-index: 1;">
    <div class="page-header-icon" style="font-size: 4em; color: #2980b9; margin-bottom: 0.5em; display: inline-block; animation: float 3s ease-in-out infinite;">
      <i class="fa fa-code"></i>
    </div>
    <h1 class="page-header-title" style="color: #2980b9; margin: 0.5em 0; font-size: 2.5em; font-weight: 700; letter-spacing: -0.5px;">
      My Projects
    </h1>
    <p class="page-header-subtitle" style="color: #666; font-size: 1.2em; margin-top: 0.5em; font-weight: 300;">
      Open source contributions, hackathon projects, and innovative solutions
    </p>
    <div class="page-header-divider" style="width: 80px; height: 4px; background: linear-gradient(to right, #2980b9, #3498db); margin: 1.5em auto; border-radius: 2px;"></div>
  </div>
</div>

<div class="cards">
{% for projects in site.projects reversed %}
<div class="card">
  <img class="card-img-top" src="{{ projects.image }}" alt="{{ projects.title }}">
  <div class="card-body">
    <h3 class="card-title">{{ projects.title }}</h3>
    <p class="card-text">{{ projects.description }}</p>
    {% if projects.github %}
    <a href="{{ projects.github }}"><i class="fa fa-github"></i>&nbsp;&nbsp;Project GitHub Link</a><br>
      {% else%}
    <span class="not-available"><i class="fa fa-github"></i>&nbsp;&nbsp;Not Available<br></span>
    {% endif %}
    {% if projects.weblink %}
    <a href="{{ projects.weblink }}"><i class="fa fa-link"></i>&nbsp;&nbsp;Web Link</a>
      {% else%}
    <span class="not-available"><i class="fa fa-link"></i>&nbsp;&nbsp;Not Available</span>
    {% endif %}
    <p class="card-language"><i class="fa fa-code"></i>&nbsp;&nbsp;{{ projects.languages }}</p>
    </div>
    {% if projects.github %}
              <ul class="actions">
	           <li><a class="github-button" href="{{ projects.github }}/archive/main.zip" aria-label="Download on GitHub">Download</a></li>
	           <li><a class="github-button" href="{{ projects.github }}" data-show-count="true" aria-label="Star on GitHub">Star</a></li>
	           <li><a class="github-button" href="{{ projects.github }}/fork" data-show-count="true" aria-label="Fork on GitHub">Fork</a></li>
              </ul>
       {% else %}
        <ul class="actions">
          <li style="color:red;">Project source code is not open sourced</li>
        </ul>
    {% endif %}
</div>
{% endfor %}
<!-- GitHub buttons -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
</div>
