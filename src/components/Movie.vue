<template>
    <div class="miniflix-movie card">
        <div class="wrapper"
            :style="{ background: `url(${movie.thumbnail}) center / cover no-repeat`}">
          <div class="header">
            <div class="date">
              <span class="year">{{ movie.year || "2018" }}</span>
            </div>
            <ul class="menu-content">
              <li>
                <span class="icon has-text-danger">
                    <i class="fas fa-heart"></i>
                </span>
                </li>
            </ul>
          </div>
          <div class="data">
            <div class="content">
              <!-- <span class="author"></span> -->
              <h1 class="title"><a href="#" title="play trailer">{{ movie.title || "Spiderman" }}</a></h1>
              <p class="text">{{ movie.description || "Blockbuster movie" }}</p>
              <a :href="'movie/'+ movie.slug" class="read-more">Read more</a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props: ["movie"]
}
</script>

<style scoped>
.card {
  float: left;
  /* padding: 0 1.7rem; */
  background-color: #0a0909;
  width: 25%;
}
.card .menu-content {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.card .menu-content::before,
.card .menu-content::after {
  content: "";
  display: table;
}
.card .menu-content::after {
  clear: both;
}
.card .menu-content li {
  display: inline-block;
}
.card .menu-content a {
  color: #fff;
}
.card .menu-content span {
  position: absolute;
  left: 50%;
  top: 0;
  font-size: 1em;
  font-weight: 700;
  transform: translate(-50%, 0);
}
.card .wrapper {
  background-color: #fff;
  min-height: 540px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
}
.card .wrapper:hover .data {
  transform: translateY(0);
}
.card .data {
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(calc(70px + 1em));
  transition: transform 0.3s;
}
.card .data .content {
  padding: 1em;
  position: relative;
  z-index: 1;
}
.card .author {
  font-size: 12px;
}
.card .title {
  margin-top: 10px;
}
.card .text {
  height: 70px;
  margin: 0;
}
.card input[type="checkbox"] {
  display: none;
}
.card input[type="checkbox"]:checked + .menu-content {
  transform: translateY(-60px);
}
.miniflix-movie .wrapper:hover .menu-content span {
  transform: translate(-50%, -20px);
  opacity: 1;
}
.miniflix-movie .header {
  color: #fff;
  padding: 1em;
}
.miniflix-movie .header::before,
.miniflix-movie .header::after {
  content: "";
  display: table;
}
.miniflix-movie .header::after {
  clear: both;
}
.miniflix-movie .header .date {
  float: left;
  font-size: 12px;
}
.miniflix-movie .menu-content {
  float: right;
}
.miniflix-movie .menu-content li {
  margin: 0 5px;
  position: relative;
}
.miniflix-movie .menu-content span {
  transition: all 0.3s;
  opacity: 0;
}
.miniflix-movie .data {
  color: #fff;
  transform: translateY(calc(70px + 4em));
}
.miniflix-movie .title a {
  color: #fff;
}
.miniflix-movie .read-more {
  display: block;
  width: 100px;
  margin: 2em auto 1em;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  position: relative;
  font-weight: 700;
}
.miniflix-movie .read-more::after {
  content: "\2192";
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 0.3s;
}
.miniflix-movie .read-more:hover::after {
  transform: translate(5px, -50%);
  opacity: 1;
}
</style>