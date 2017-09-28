{% if book.story %}

<div id="inhalt" style="{{book.storycss}}"></div>

<script src="js/letsgo_daten.js"></script>
<script src="js/letsgo_app.js"></script>

{% else %}

[**Let's go !**](bereit_ja.md)

{% endif %}
