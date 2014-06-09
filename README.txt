==============================
``edem.skin``
==============================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
E-Democracy's 2014 Skin and Layer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:Author: `Bill Bushey`_
:Contact: Bill Bushey <bill.bushey@e-democracy.org>
:Date: 2013-10-25
:Organization: `E-Democracy`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 3.0 License`_
  by `E-Democracy`_.

Introduction
===========

This egg provides the 2014 skin for forums.e-democracy.org.

Foundations
===========

The E-Democracy skin is a custom implementation of the skining system provided
by `gs.content.css`_, and takes cues from other implementations provided by
`gs.skin.blue`_ and `gs.skin.green`_. `gs.content.css`_ is itself based on
`Twitter Bootstrap`_.

This egg also includes `Yamm`_, a third party mega menu implementation for 
Bootstrap. Yamm's CSS is included in site.css, and it's license is in 
Yamm-LICENSE.txt.

Style Guide
===========

Text Links
----------

These are the standard links of the site. They appear nearly everywhere - user content, site navigation, static content, 
group meta content, sidebars, menus, footers, etc...

**Default**

:Selectors: a
:Description: Dark blue text (#135A87) | No background | Underline
:CSS:
  background: none;
  color: #135A87;
  text-decoration: underline;

**Hover**

:Selectors: a:hover
:Description: White text | Dark blue background (#135A87) | No underline
:CSS:
  background: #135A87;
  color: #FFFFFF;
  text-decoration: none;

**Visited**

:Selectors: a:visited
:Description: Purple text (#533A77) | No background | Underline
:CSS:
  background: none;
  color: #533A77;
  text-decoration: underline;

**Hovering Visited**

:Selectors: a:visited:hover
:Description: Purple background (#533A77) | White text color | No underline
:CSS:
  background: #533A77;
  color: #FFFFFF;
  text-decoration: none;


Muted
-----

Less important links and information. For example: keywords, disabled buttons. 

:Selectors: .muted
:Description: Like the regular text, but grey 
:CSS:
  color: #999;

Minimizing CSS
==============

In the templates/css folder:

    yui-compressor --type css --charset UTF-8 -v -o site-min.css site.css


Authors
=======

`Tim Leisio`_ performed the design work. `Michael JasonSmith`_ coded the CSS
and created the eggs which are a foundation for the E-Democracy skin. 
`Bill Bushey`_ coded the E-Democracy specific CSS and created this egg.

Resources
=========

- Code repository: https://github.com/e-democracy/edem.skin
- Questions and comments to http://groupserver.org/groups/development
- Report bugs at https://redmine.iopen.net/projects/edem

.. _E-Democracy: http://e-democracy.org/
.. _Bill Bushey: http://groupserver.org/p/wbushey
.. _Tim Leisio: http://www.timleisio.com/
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
.. _gs.content.css: https://source.iopen.net/groupserver/gs.content.css/summary
.. _gs.skin.blue: https://source.iopen.net/groupserver/gs.skin.blue/summary
.. _gs.skin.green: https://source.iopen.net/groupserver/gs.skin.green/summary
.. _Twitter Bootstrap: http://getbootstrap.com/
.. _Yamm: http://geedmo.github.io/yamm/
.. _Creative Commons Attribution-Share Alike 3.0 License:
   http://creativecommons.org/licenses/by-sa/3.0/
