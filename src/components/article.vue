<template>
    <div class="blog-article" id="blog-article">
        <article class="blog-post px-3 py-5 p-md-5">
            <div class="container">

                <header class="blog-post-header">
                    <h2 class="title mb-2">{{detail.title}}</h2>
                    <div class="meta mb-3"><span class="date">{{detail.modify_time}} 发布</span>
                        <!--                        <span class="time">{{update_date}} 阅读</span><span class="comment"><a href="#">{{comment_nums}} 评论</a></span>-->
                    </div>
                </header>

                <div class="blog-post-body" id="show-content">
                    {{detail.contents}}
                </div>

                <nav class="blog-nav nav nav-justified my-5">
                    <a class="nav-link-prev nav-item nav-link rounded-left" href="index.html">上一篇文章标题00<i
                            class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                    <a class="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">下一篇文章标题02<i
                            class="arrow-next fas fa-long-arrow-alt-right"></i></a>
                </nav>

            </div><!--//container-->
        </article>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name: 'blog-article',
        data() {
            return {
                article_id: this.$route.query.id,
                detail: {
                    title: "",
                    description: "",
                    modify_time: "",
                    contents: "",
                }

            }
        },
        components: {},
        mounted() {
            // this.init();
        },
        created() {
            this.getDetail()
        },
        methods: {
            // init(){
            //     var showdown  = require('showdown');
            //     var converter = new showdown.Converter();
            //     this.converter = converter;
            //     var html = this.converter.makeHtml(this.content);
            //     document.getElementById('show-content').innerHTML = html;
            // },
            getDetail: function () {
                axios.get(this.Api.getDetail + "?id=" + this.article_id).then(res => {
                    console.log(res.data)
                    this.detail = res.data.data

                })
            }
        }
    }
</script>

<style lang="scss">
</style>
