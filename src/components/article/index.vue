<template>
    <div class="blog-article" id="blog-article">
        <article class="blog-post px-3 py-5 p-md-5">
            <div class="container">
                <button id = "backbtn" @click="toBack()">返回</button>
                <header class="blog-post-header">
                    <h2 class="title mb-2">{{detail.title}}</h2>
                    <div class="meta mb-3"><span class="date">{{detail.modify_time}} 发布</span>
                        <!--                        <span class="time">{{update_date}} 阅读</span><span class="comment"><a href="#">{{comment_nums}} 评论</a></span>-->
                    </div>
                </header>

                <div class="blog-post-body" v-highlight id="show-content">
                </div>
            </div><!--//container-->
        </article>
    </div>
</template>


<script>
    import axios from 'axios'
    import  hljs  from 'highlight.js';

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
                },
                toBack: function () {
                    this.$router.back()
                },

            }
        },
        components: {},
        mounted() {
        },
        created() {
            this.getDetail()
        },
        methods: {
            getDetail: function () {
                axios.get(this.Api.getDetail + "?id=" + this.article_id).then(res => {
                    if (res.data.ret == 0) {
                        html = res.data.data.contents
                        if (res.data.data.show_type == 2) {
                            var showdown = require('showdown');
                            var converter = new showdown.Converter();
                            console.log(res.data.data.contents)
                            var html = converter.makeHtml(res.data.data.contents);
                            res.data.data.contents = html;
                            console.log(res.data.data.contents)

                        }
                        document.getElementById('show-content').innerHTML = html;
                        this.detail = res.data.data
                    }
                })
            }
        },
        directives: {
            highlightjs: {
                inserted (el) {
                    // 遍历元素并且使用 highlight 进行处理
                    const preEl = document.querySelectorAll('pre code');
                    preEl.forEach(el => {
                        hljs.highlightBlock(el);
                    });
                }
            }
        }
    }
</script>

<style>
    #backbtn {
        border-radius: 5px;
        -webkit-opacity: .8;
        -moz-opacity: .8;
        opacity: .8;
        border: 1px solid rgba(255, 255, 255, 0.8);
        padding: .25rem .6rem;
        background: #fff;
        color: #5ECCA9;
        margin-bottom: 1rem;
        border: 2px solid #f1ecec;
    }
    .blog-post-header{
        padding-bottom: 1rem;
    }
</style>

