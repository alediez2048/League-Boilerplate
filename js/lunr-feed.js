---

---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});
{% assign count = 0 %}{% for post in site.posts %}
index.add({
  title: {{post.title | jsonify}},
  category: {{post.categories | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  image: {{post.thumb | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
// console.log( jQuery.type(index) );
// builds reference data
var store = [{% for post in site.posts %}{
  "title": {{post.title | jsonify}},
  "link": {{ post.url | jsonify }},
  "image": {{ post.thumb | jsonify }},
  "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
  "category": {{ post.categories | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 40 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]
// builds search
$(document).ready(function() {
  $('#searchForm').on('submit', function(e){
          // Stop the default action
          e.preventDefault()

  // $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $('#search-query').val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="f">Found '+result.length+' result(s)</p><hr>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="widget-recent-posts"><div class="result entry"><img src={{ "/assets/images/blog/thumb/"| relative_url}}'+store[ref].image+' alt="'+store[ref].title+'" class="result-img"><div class="result entry-desc"><div class="entry-title"><a href={{ ""| relative_url}}'+store[ref].link+'  class="post-title">'+store[ref].title+'</a><p class="p">'+store[ref].category+' &minus; '+store[ref].date+'</p></div><p>'+store[ref].excerpt+'</p></div><hr></div>';
      resultdiv.append(searchitem);
    }
  });
});

$(document).ready(function() {
  $('input#search-nav').on('keyup', function () {
    var resultdivnav = $('#results-nav');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdivnav.empty();
    // Add status
    resultdivnav.prepend('<p class="f">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="widget-recent-posts"><div class="result entry"><img src={{ "/assets/images/blog/thumb/"| relative_url}}'+store[ref].image+' alt="'+store[ref].title+'" class="result-img"><div class="result entry-desc"><div class="entry-title"><a href={{ ""| relative_url}}'+store[ref].link+'  class="post-title">'+store[ref].title+'</a><p class="p">'+store[ref].category+' &minus; '+store[ref].date+'</p></div><a href={{ ""| relative_url}}'+store[ref].link+'  class="judul"><p>'+store[ref].excerpt+'</p></a></div><hr></div>';
      resultdivnav.append(searchitem);
    }
  });
});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
    layoutMode: 'fitRows'
  // options
});

// filter items on button click
$('.filter-button-group').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $('#results').empty();
  $('#cat-post-list').removeClass('hide')
  $grid.isotope({ filter: filterValue });
});
$('.button-group a.cat').on('click', function(){
  $('.button-group a.cat').removeClass('active');
  $(this).addClass('active');
});