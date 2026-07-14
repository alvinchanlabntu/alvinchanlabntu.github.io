---
title: Team
nav:
  order: 3
  tooltip: Lab members
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## Principal Investigator

{% include list.html data="members" component="member-card" filter="role == 'principal-investigator'" %}

{% include section.html %}

## Postdoctoral Researchers

{% include list.html data="members" component="member-card" filter="role == 'postdoc'" sort="order" %}

{% include section.html %}

## PhD Students

{% include list.html data="members" component="member-card" filter="role == 'phd'" sort="order" %}

{% include section.html %}

## Research Assistants

{% include list.html data="members" component="member-card" filter="role == 'research-assistant'" %}
