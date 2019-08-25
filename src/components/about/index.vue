<template>
    <div class="blog-about" id="blog-about">
        <article class="about-section py-5">
            <div class="container">
                <h2 class="title mb-3">关于我</h2>
                <p></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;90后程序员，出生于湖南长沙，2015年毕业于湖南科技大学，从事互联网后台开发多年，主要使用php、golang语言开发以及前端相关技术，生活中非常热爱运动，跑步、爬山、羽毛球</p>
                <p>
                </p>
                <p>
                </p>
                <figure><img class="img-fluid" :src="aboutme_img" alt="image"></figure>
            </div>
        </article><!--//about-section-->
    </div>
</template>


<script>
    export default {
        name: 'blog-about',
        data() {
            return {
                aboutme_img: require("../../assets/images/aboutme.jpg"),
            }
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
