var page = getUrlParameter('page');
var cat = getUrlParameter('cat');
var movieID = getUrlParameter('id');
var tvID = getUrlParameter('id');
var personID = getUrlParameter('id');
var query = getUrlParameter('q');

$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});

function index_movielist(){
  $.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
    $("#banner").append("<a id='bannerlink1' class='carousel-item active' href='javascript:movieSelected("+result.results[0].id+")'></a>");
    $('#bannerlink1').css('background-image', 'url(https://image.tmdb.org/t/p/w1400_and_h450_face'+result.results[0].backdrop_path + ')');
    $("#banner").append("<a id='bannerlink2' class='carousel-item' href='javascript:movieSelected("+result.results[1].id+")'></a>");
    $('#bannerlink2').css('background-image', 'url(https://image.tmdb.org/t/p/w1400_and_h450_face'+result.results[1].backdrop_path + ')');
    $("#banner").append("<a id='bannerlink3' class='carousel-item' href='javascript:movieSelected("+result.results[2].id+")'></a>");
    $('#bannerlink3').css('background-image', 'url(https://image.tmdb.org/t/p/w1400_and_h450_face'+result.results[2].backdrop_path + ')');
  });

  $.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#movie_nowplaying").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                     "<div class='card h-100'>"+
                                     "<a href='javascript:movieSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                     "<div class='card-footer'>"+val.title+"</div>"+
                                     "</a></div></div>");
        return key<2;
    });
  });

  $.getJSON("https://api.themoviedb.org/3/tv/popular?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#tv_popular").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                  "<div class='card h-100'>"+
                                  "<a href='javascript:tvSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                  "<div class='card-footer'>"+val.name+"</div>"+
                                  "</a></div></div>");
        return key<2;
    });
  });

  $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#movie_popular").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                  "<div class='card h-100'>"+
                                  "<a href='javascript:movieSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                  "<div class='card-footer'>"+val.title+"</div>"+
                                  "</a></div></div>");
        return key<2;
    });
  });

  $.getJSON("https://api.themoviedb.org/3/tv/top_rated?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#tv_toprated").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                  "<div class='card h-100'>"+
                                  "<a href='javascript:tvSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                  "<div class='card-footer'>"+val.name+"</div>"+
                                  "</a></div></div>");
        return key<2;
    });
  });

  $.getJSON("https://api.themoviedb.org/3/movie/top_rated?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#movie_toprated").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                  "<div class='card h-100'>"+
                                  "<a href='javascript:movieSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                  "<div class='card-footer'>"+val.title+"</div>"+
                                  "</a></div></div>");
        return key<2;
    });
  });

  $.getJSON("https://api.themoviedb.org/3/tv/on_the_air?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#tv_airing").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                  "<div class='card h-100'>"+
                                  "<a href='javascript:tvSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                  "<div class='card-footer'>"+val.name+"</div>"+
                                  "</a></div></div>");
        return key<2;
    });
  });

  $.getJSON("https://api.themoviedb.org/3/movie/upcoming?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#movie_upcoming").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                  "<div class='card h-100'>"+
                                  "<a href='javascript:movieSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                  "<div class='card-footer'>"+val.title+"</div>"+
                                  "</a></div></div>");
        return key<2;
    });
  });

  $.getJSON("https://api.themoviedb.org/3/tv/airing_today?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page=1",function(result){
      $.each(result.results,function(key,val){
        $("#tv_airingtoday").append("<div class='col-lg-4 col-md-4 mb-4'>"+
                                  "<div class='card h-100'>"+
                                  "<a href='javascript:tvSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                  "<div class='card-footer'>"+val.name+"</div>"+
                                  "</a></div></div>");
        return key<2;
    });
  });

}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function allmovie(){
  var catTitle = "";
  if (cat=="now_playing"){
    catTitle = "Now Playing Movies";
  }
  else if (cat=="popular") {
    catTitle = "Popular Movies";
  }
  else if (cat=="top_rated") {
    catTitle = "Top Rated Movies";
  }
  else if (cat=="upcoming") {
    catTitle = "Upcoming Movies";
  }
  $("#subheader").html(catTitle);
  var url = "https://api.themoviedb.org/3/movie/"+cat+"?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page="+page;
  $.getJSON(url,function(result){
      $.each(result.results,function(key,val){
        $("#movielist").append("<div class='col-lg-3 col-md-6 mb-3'>"+
                                     "<div class='card h-100'>"+
                                     "<a href='javascript:movieSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                     "<div class='card-footer'>"+val.title+"</div>"+
                                     "</a></div></div>");
        return key<19;
    });
    paging(result.total_pages);
  });
}

function alltv(){
  var catTitle = "";
  if (cat=="popular"){
    catTitle = "Popular TV Shows";
  }
  else if (cat=="top_rated") {
    catTitle = "Top Rated TV Shows";
  }
  else if (cat=="on_the_air") {
    catTitle = "Currently Airing TV Shows";
  }
  else if (cat=="airing_today") {
    catTitle = "TV Shows Airing Today";
  }
  $("#subheader").html(catTitle);
  var url = "https://api.themoviedb.org/3/tv/"+cat+"?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page="+page;
  $.getJSON(url,function(result){
      $.each(result.results,function(key,val){
        $("#tvlist").append("<div class='col-lg-3 col-md-6 mb-3'>"+
                                     "<div class='card h-100'>"+
                                     "<a href='javascript:tvSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                     "<div class='card-footer'>"+val.name+"</div>"+
                                     "</a></div></div>");
        return key<19;
    });
    paging(result.total_pages);
  });
}

function allpeople(){
  $("#subheader").html("Popular People");
  var url = "https://api.themoviedb.org/3/person/popular?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&page="+page;
  $.getJSON(url,function(result){
      $.each(result.results,function(key,val){
        $("#peoplelist").append("<div class='col-lg-3 col-md-6 mb-3'>"+
                                     "<div class='card h-100'>"+
                                     "<a href='javascript:personSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.profile_path+"' onerror='imgError(this)'>"+
                                     "<div class='card-footer'>"+val.name+"</div>"+
                                     "</a></div></div>");
        return key<19;
    });
    paging(result.total_pages);
  });
}

function results(){
  var catTitle = "";
  var url = "https://api.themoviedb.org/3/search/"+cat+"?api_key=66f3ab397c36aa48ab54a211db41720e&language=en-US&query="+query+"&page="+page;
  $.getJSON(url,function(result){
    if (cat=="movie"){
      catTitle = "Search > Movie Results";
      $.each(result.results,function(key,val){
        $("#resultlist").append("<div class='col-lg-3 col-md-6 mb-3'>"+
                                     "<div class='card h-100'>"+
                                     "<a href='javascript:movieSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                     "<div class='card-footer'>"+val.title+"</div>"+
                                     "</a></div></div>");
        return key<19;
      });
      paging(result.total_pages);
    }
    else if (cat=="tv") {
      catTitle = "Search > TV Show Results";
      $.each(result.results,function(key,val){
        $("#resultlist").append("<div class='col-lg-3 col-md-6 mb-3'>"+
                                     "<div class='card h-100'>"+
                                     "<a href='javascript:tvSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.poster_path+"' onerror='imgError(this)'>"+
                                     "<div class='card-footer'>"+val.name+"</div>"+
                                     "</a></div></div>");
        return key<19;
      });
      paging(result.total_pages);
    }
    else if (cat=="person") {
      catTitle = "Search > People Results";
      $.each(result.results,function(key,val){
        $("#resultlist").append("<div class='col-lg-3 col-md-6 mb-3'>"+
                                     "<div class='card h-100'>"+
                                     "<a href='javascript:personSelected("+val.id+")'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500"+val.profile_path+"' onerror='imgError(this)'>"+
                                     "<div class='card-footer'>"+val.name+"</div>"+
                                     "</a></div></div>");
        return key<19;
      });
      paging(result.total_pages);
    }
    $("#subheader").html(catTitle);
  });
}

function back(){
  page--;
  window.location.href = '?cat='+cat+'&page='+page;
}

function next(){
  if (page<1){
    window.location.href = '?cat='+cat+'&page=2';
  } else {
  page++;
  window.location.href = '?cat='+cat+'&page='+page;
  }
}

function backSearch(){
  page--;
  window.location.href = '?cat='+cat+'&q='+query+'&page='+page;
}

function nextSearch(){
  if (page<1){
    window.location.href = '?cat='+cat+'&q='+query+'&page=2';
  } else {
  page++;
  window.location.href = '?cat='+cat+'&q='+query+'&page='+page;
  }
}

function paging(totalpage){
  if (page<2) {
    $('#page_back').css('display', 'none');
  }
  if ((page==totalpage) || (totalpage==1)){
    $('#page_next').css('display', 'none');

  }
  console.log(totalpage);
}

function movieSelected(id){
  movieID = id;
  window.location.href = 'movie.html?id='+movieID;
  return false;
}

function tvSelected(id){
  tvID = id;
  window.location.href = 'tv.html?id='+tvID;
  return false;
}

function personSelected(id){
  personID = id;
  window.location.href = 'person.html?id='+personID;
  return false;
}

function mapAndJoin(arr, key) {
  return arr.map(function(o) {
    return o[key];
  }).join(", ");
}

function imgError(image) {
    image.onerror = "";
    image.src = "img/no-image.png";
    return true;
}

function getMovie(){
  $.getJSON("https://api.themoviedb.org/3/movie/"+movieID+"?api_key=66f3ab397c36aa48ab54a211db41720e",function(jd){
    var genres = mapAndJoin(jd.genres, 'name');
    var companies = mapAndJoin(jd.production_companies, 'name');
    var totalrevenue = numeral(jd.revenue).format('($0,0)');

    $('#bgmovie').css('background-image', 'url(https://image.tmdb.org/t/p/original/' + jd.backdrop_path + ')');
    $("#movie_title").html("<img class='col-lg-4 col-md-4' src='https://image.tmdb.org/t/p/original"+jd.poster_path+"' onerror='imgError(this)'>");
    $("#title").html(jd.title);
    $("#tagline").html(jd.tagline);
    $("#overview").html(jd.overview);
    $("#genres").html(genres);
    $("#companies").html(companies);
    $("#release_date").html(jd.release_date);
    $("#runtime").html(jd.runtime+" mins");
    $("#revenue").html(totalrevenue);
    $("#vote").html(jd.vote_average+" / 10");
  });
}

function getTv(){
  $.getJSON("https://api.themoviedb.org/3/tv/"+tvID+"?api_key=66f3ab397c36aa48ab54a211db41720e",function(jd){
    var genres = mapAndJoin(jd.genres, 'name');
    var companies = mapAndJoin(jd.production_companies, 'name');

    $('#bgtv').css('background-image', 'url(https://image.tmdb.org/t/p/original/' + jd.backdrop_path + ')');
    $("#tv_title").html("<img class='col-lg-4 col-md-4' src='https://image.tmdb.org/t/p/original"+jd.poster_path+"' onerror='imgError(this)'>");
    $("#title").html(jd.name);
    $("#tagline").html(jd.status);
    $("#overview").html(jd.overview);
    $("#genres").html(genres);
    $("#companies").html(companies);
    $("#release_date").html(jd.first_air_date);
    $("#vote").html(jd.vote_average+" / 10");
  });
}

function getPerson(){
  $.getJSON("https://api.themoviedb.org/3/person/"+personID+"?api_key=66f3ab397c36aa48ab54a211db41720e",function(jd){

    $("#person_title").html("<img class='col-lg-4 col-md-4' src='https://image.tmdb.org/t/p/original"+jd.profile_path+"' onerror='imgError(this)'>");
    $("#title").html(jd.name);
    $("#tagline").html(jd.known_for_department);
    $("#overview").html(jd.biography);
    $("#birth_place").html(jd.place_of_birth);
    $("#birth_date").html(jd.birthday);
  });
}
