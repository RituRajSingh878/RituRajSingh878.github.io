---
layout: post
title: Tackling LLM Challenges in Finance - Building Feedback Systems for Numerical Accuracy
date: 2025-12-12
comments: false
keywords: LLM, Finance, RAG, AI Agents, Numerical Accuracy, Thryyve AI
categories: AI, Finance, Machine Learning
news: false
---

## The Challenge: LLMs and Financial Data

Building a product for finance where numbers are the most crucial aspect, we've encountered a significant challenge: **LLMs lying confidently**. This is a major concern when working with financial data where accuracy is paramount.

## The Core Problem

LLMs excel at creating tasks to execute a given question with available tools, but they struggle when working directly with numbers or large datasets where context can be so extensive that it might not fit into the LLM's context window.

### The RAG Limitation

A common approach to address this is through **Retrieval-Augmented Generation (RAG)**, but this presents its own challenges:

- **Indexing plain numbers doesn't make sense on its own** - Finance is number-heavy, so the data layer has its own unique challenges
- Context windows are limited, making it difficult to include all relevant numerical context
- Financial data requires precise calculations that LLMs may not handle accurately

## The Missing Feedback System

As we've been building **Thryyve AI**, we've realized that relying blindly on LLMs' capability to do processing—like calculating or building analytical solutions—is problematic, especially when there's **no feedback system internally at runtime to evaluate the output in a deterministic way**.

This is one reason why coding work is getting automated much faster (like Cursor or Codex):

- ✅ **Coding has a feedback system** via compilation or unit test cases at runtime
- ✅ Agents can evaluate and improve based on this feedback
- ❌ **Most other workflows in finance or management lack this feedback system** at the core level

## Our Approach: Creating Feedback via Code

We took a different approach to tackle this problem. Instead of relying solely on LLMs for numerical processing, we're creating a feedback system using coding agents specifically for finance work:

1. **Agent writes code** to solve the problem
2. **LLM-based evaluator** validates the response
3. **Deterministic feedback loop** ensures accuracy

This approach allows us to:
- Leverage the deterministic nature of code execution
- Create a feedback mechanism similar to compilation/testing in software development
- Maintain accuracy in financial calculations and analysis

## The Path Forward

These problems still exist today, and finding innovative ways to create feedback systems for LLM-based financial applications is crucial. By combining the flexibility of LLMs with the determinism of code execution, we can build more reliable financial AI systems.

---

*This article discusses challenges and approaches in building AI systems for finance, focusing on creating feedback mechanisms for numerical accuracy.*

