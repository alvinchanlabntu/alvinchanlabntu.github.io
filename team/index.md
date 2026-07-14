---
title: Team
nav:
  order: 3
  tooltip: Lab members
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Our AI and Wet Lab teams work together across machine learning, nanomedicine, and experimental science. Select a member to view their profile and contact links.

{% include section.html %}

## Principal Investigator

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}

{% include section.html %}

## Postdoctoral Researchers

{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}

{% include section.html %}

## PhD Students

{% include list.html data="members" component="portrait" filter="role == 'phd'" %}

{% include section.html %}

## Research Assistants

{% include list.html data="members" component="portrait" filter="role == 'research-assistant'" %}
