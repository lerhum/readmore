Readmore Infine Js
===
Readmore is a tiny jquery plugin who expand or collapse text from html

Install
====
adding following to <head>
```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="src/infine.readmore.js"></script>
```
Use
====
js side
```js
$(document).ready(function(){
   $('.details').readmore(); 
});
```
html side
```html
 <div class="details col-sm-6 col-xs-12">
    <h2>Description :</h2>
    <p></p><p><span>Doté d’une fibre intelligente à base de cristaux de céramique et de millions de microcapsules à base de nouveaux principes actifs cosmétiques, le <strong>Cosmetex legging</strong> agit de manière instantanée et pour une durée illimitée. Il contribue à une perte centimétrique et une diminution de l’aspect <strong>peau d’orange</strong> tout en procurant une sensation unique de liberté, telle une seconde peau.</span><br><br><span>Le <strong>Cosmetex legging</strong> agit de deux manières complémentaires :</span></p>
</div>
```