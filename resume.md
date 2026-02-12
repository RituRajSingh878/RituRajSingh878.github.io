---
layout: page
title: Resume
description: Ritu Raj Singh is a open-source developer who loves machine learning.
permalink: /resume/
---

<div style="text-align: center; margin: 2em 0; padding: 1.5em; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  <p style="color: white; font-size: 1.1em; margin-bottom: 1em;">
    <i class="fa fa-file-pdf-o" aria-hidden="true" style="font-size: 1.2em;"></i>
    <a href="https://drive.google.com/file/d/1_NpnQ8799kXhQ9xjku7dX-sGrtX7EXGK/view" target="_blank" style="color: white; text-decoration: underline; font-weight: bold;">
      Download/View Resume
    </a>
  </p>
  <p style="color: rgba(255,255,255,0.9); font-size: 0.9em;">
    I am open for machine learning roles. Please reach out via the contacts on the <a href="/about/" style="color: white; text-decoration: underline;">About</a> page.
  </p>
</div>

<h2 style="text-align: center; color: #2980b9; margin: 2em 0;">
  <i class="fa fa-graduation-cap"></i> Education
</h2>

{% assign education_items = site.data.education | default: "" %}
{% if education_items == "" %}
  {% assign education_items = "" | split: "," %}
  {% assign item1 = "title:Indian Institute of Technology (Banaras Hindu University) Varanasi, India|subtitle:Bachelors and Masters in Mathematics and Computing (Integrated Dual Degree)|description:CPI=8.53|location:Varanasi, India|date:July 2017 - May 2022|grade:CPI 8.53" | split: "|" %}
  {% assign item2 = "title:CBSE (XII)|subtitle:B.N.S ENGLISH SCHOOL NARIA VARANASI|description:|location:Varanasi, India|date:2016|grade:Percentage 84.60" | split: "|" %}
  {% assign item3 = "title:CBSE (X)|subtitle:B.N.S ENGLISH SCHOOL NARIA VARANASI|description:|location:Varanasi, India|date:2014|grade:Percentage 91.20" | split: "|" %}
{% endif %}

<div class="resume-timeline">
  <div class="resume-timeline-item">
    <div class="resume-timeline-dot"></div>
    <div class="resume-timeline-content">
      <div class="resume-timeline-title">Indian Institute of Technology (Banaras Hindu University) Varanasi, India</div>
      <div class="resume-timeline-subtitle">Bachelors and Masters in Mathematics and Computing (Integrated Dual Degree)</div>
      <div class="resume-timeline-meta">
        <span><i class="fa fa-map-marker"></i>Varanasi, India</span>
        <span><i class="fa fa-calendar"></i>July 2017 - May 2022</span>
        <span><i class="fa fa-graduation-cap"></i>CPI: 8.53</span>
      </div>
    </div>
  </div>
  
  <div class="resume-timeline-item">
    <div class="resume-timeline-dot"></div>
    <div class="resume-timeline-content">
      <div class="resume-timeline-title">CBSE (XII)</div>
      <div class="resume-timeline-subtitle">B.N.S ENGLISH SCHOOL NARIA VARANASI</div>
      <div class="resume-timeline-meta">
        <span><i class="fa fa-map-marker"></i>Varanasi, India</span>
        <span><i class="fa fa-calendar"></i>2016</span>
        <span><i class="fa fa-graduation-cap"></i>Percentage: 84.60</span>
      </div>
    </div>
  </div>
  
  <div class="resume-timeline-item">
    <div class="resume-timeline-dot"></div>
    <div class="resume-timeline-content">
      <div class="resume-timeline-title">CBSE (X)</div>
      <div class="resume-timeline-subtitle">B.N.S ENGLISH SCHOOL NARIA VARANASI</div>
      <div class="resume-timeline-meta">
        <span><i class="fa fa-map-marker"></i>Varanasi, India</span>
        <span><i class="fa fa-calendar"></i>2014</span>
        <span><i class="fa fa-graduation-cap"></i>Percentage: 91.20</span>
      </div>
    </div>
  </div>
</div>
