<template>
    <div class="blog-index" id="blog-index">
        <section class="cta-section theme-bg-light py-5">
            <div class="container text-center">
                <h2 class="heading">A Blog Made For Developers</h2>
                <div class="intro">Welcome to my blog.</div>
<!--                <form class="signup-form form-inline justify-content-center pt-3">-->
<!--                    <div class="form-group">-->
<!--                        <label class="sr-only" for="semail">Search</label>-->
<!--                        <input type="email" id="semail" name="semail1" class="form-control mr-md-1 semail" placeholder="keywords">-->
<!--                    </div>-->
<!--                    <button type="submit" class="btn btn-primary">Search</button>-->
<!--                </form>-->
            </div><!--//container-->
        </section>
        <section class="blog-list px-3 py-5 p-md-5">
            <div class="container">

                <div v-for="(value,key,index) in datalist"  class="item mb-5">
                    <div class="media">
                        <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="value.img" alt="image">
                        <div class="media-body">
                            <h3 class="title mb-1"><a href="javascript:void(0);" @click="toArticle(value.id)">{{value.title}}</a></h3>
                            <div class="meta mb-1"><span class="date">{{value.update_date}} 发布</span><span class="time">{{value.read_nums}} 阅读</span><span class="comment"><a href="#">{{value.comment_nums}} 评论</a></span></div>
                            <div class="intro">{{value.introduction}}...</div>
                            <a class="more-link" href="javascript:void(0);" @click="toArticle(value.id)">Read more &rarr;</a>
                        </div><!--//media-body-->
                    </div><!--//media-->
                </div><!--//item-->


                <nav class="blog-nav nav nav-justified my-5">
                    <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                    <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
                </nav>

            </div>
        </section>
    </div>
</template>


<script>
    export default {
        name: 'blog-index',
        data() {
            return {
                msg: 'this is index',
                datalist:[
                    {
                        id:1,
                        title:"这是文章标题1",
                        introduction:"这是文章的简介这是文章的简介这是文章的简介",
                        img:require("../assets/images/blog/blog-post-thumb-1.jpg"),
                        update_date:"2019-08-16",
                        read_nums:"5",
                        comment_nums:"6",
                    },
                    {
                        id:2,
                        title:"这是文章标题2",
                        introduction:"这是文章的简介这是文章的简介这是文章的简介",
                        img:require("../assets/images/blog/blog-post-thumb-2.jpg"),
                        update_date:"2019-08-16",
                        read_nums:"5",
                        comment_nums:"6",
                    },
                    {
                        id:3,
                        title:"这是文章标题3",
                        introduction:"这是文章的简介这是文章的简介这是文章的简介",
                        img:require("../assets/images/blog/blog-post-thumb-3.jpg"),
                        update_date:"2019-08-16",
                        read_nums:"5",
                        comment_nums:"6",
                    },
                    {
                        id:4,
                        title:"这是文章标题4",
                        introduction:"这是文章的简介这是文章的简介这是文章的简介",
                        img:require("../assets/images/blog/blog-post-thumb-4.jpg"),
                        update_date:"2019-08-16",
                        read_nums:"5",
                        comment_nums:"6",
                    }
                ],
                toArticle:function(id){
                    this.$router.push({
                        path: '/article',
                        query: {
                            id: id
                        }
                    })
                },
            }
        },
        components:{
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
