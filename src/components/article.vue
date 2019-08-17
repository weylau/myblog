<template>
    <div class="blog-article" id="blog-article">
        <article class="blog-post px-3 py-5 p-md-5">
            <div class="container">

                <header class="blog-post-header">
                    <h2 class="title mb-2">{{title}}</h2>
                    <div class="meta mb-3"><span class="date">{{update_date}} 发布</span><span class="time">{{update_date}} 阅读</span><span class="comment"><a href="#">{{comment_nums}} 评论</a></span></div>
                </header>

                <div class="blog-post-body" id="show-content">
                </div>

                <nav class="blog-nav nav nav-justified my-5">
                    <a class="nav-link-prev nav-item nav-link rounded-left" href="index.html">上一篇文章标题00<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                    <a class="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">下一篇文章标题02<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
                </nav>

            </div><!--//container-->
        </article>
    </div>
</template>


<script>
    export default {
        name: 'blog-article',
        data() {
            return {
                id:1,
                title:"01-为什么需要消息队列",
                introduction:"为什么需要消息队列",
                update_date:"2019-08-16",
                read_nums:"5",
                comment_nums:"6",
                content: "## 哪些问题适合使用消息队列来解决\n" +
                    "### 异步处理\n" +
                    ">如:秒杀系统\n" +
                    "\n" +
                    "- 可以更快的返回结果\n" +
                    "\n" +
                    "- 减少等待，自然实现了步骤之间的并发，提高系统总体性能\n" +
                    "\n" +
                    "### 流量控制\n" +
                    "#### 1、使用消息队列隔离网关和后台服务\n" +
                    "\n" +
                    "#####流程\n" +
                    "\n" +
                    "- 网关在收到请求后，将请求放入请求消息队列\n" +
                    "\n" +
                    "- 后端服务从请求消息队列中获取 APP 请求，完成后续秒杀处理\n" +
                    "\n" +
                    "![image.png](https://upload-images.jianshu.io/upload_images/3413571-e6c167cac8672b37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n" +
                    "#####缺点\n" +
                    "- 增加了系统调用链环节，导致总体的响应时延变长\n" +
                    "-上下游系统都要将同步调用改为异步消息，增加了系统的复杂度。\n" +
                    "\n" +
                    "#### 2、令牌桶\n" +
                    "> 不需要改变调用链，用一个有固定容量的消息队列加一个“令牌发生器”来实现：令牌发生器按照预估的处理能力，匀速生产令牌并放入令牌队列（如果队列满了则丢弃令牌），网关在收到请求时去令牌队列消费一个令牌，获取到令牌则继续调用后端秒杀服务，如果获取不到令牌则直接返回秒杀失败\n" +
                    "\n" +
                    "### 服务解耦\n" +
                    "\n" +
                    "## 其他场景\n" +
                    "- 作为发布 / 订阅系统实现一个微服务级系统间的观察者模式；\n" +
                    "- 连接流计算任务和数据；\n" +
                    "- 用于将消息广播给大量接收者\n" +
                    "\n" +
                    "## 消息队列会产生的问题和局限\n" +
                    "- 延迟问题\n" +
                    "- 增加系统复杂度\n" +
                    "- 可能产生数据不一致的问题\n" +
                    "\n" +
                    "\n" +
                    "*内容来源说明：文章中的部分内容以及图片来自《极客时间-消息队列高手课》，写文章目的只是作为学习后的总结和整理*",
            }
        },
        components:{
        },
        mounted(){ this.init(); },
        methods: {
            init(){
                var showdown  = require('showdown');
                var converter = new showdown.Converter();
                this.converter = converter;
                var html = this.converter.makeHtml(this.content);
                document.getElementById('show-content').innerHTML = html;
            },
        }
    }
</script>

<style lang="scss">
</style>
