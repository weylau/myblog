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
                        <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="value.img_path" alt="image">
                        <div class="media-body">
                            <h3 class="title mb-1"><a href="javascript:void(0);" @click="toArticle(value.article_id)">{{value.title}}</a></h3>
                            <div class="meta mb-1"><span class="date">{{value.update_date}} 发布</span>
<!--                                <span class="time">{{value.read_nums}} 阅读</span><span class="comment"><a href="#">{{value.comment_nums}} 评论</a></span>-->
                            </div>
                            <div class="intro">{{value.description}}...</div>
                            <a class="more-link" href="javascript:void(0);" @click="toArticle(value.article_id)">Read more &rarr;</a>
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
    import axios from 'axios'
    export default {
        // name: 'blog-index',
        data() {
            return {
                page:1,
                page_size:10,
                msg: 'this is index',
                datalist:[

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
        },
        created(){
            this.getList()
        },
        methods:{
            getList:function() {
                axios.get(this.Api.getList+"?page="+this.page+"&page_size="+this.page_size).then(res => {

                    res.data.data.forEach((item,index,arr)=>{
                        if (item.img_path == '') {
                            arr[index].img_path = this.getDefaultImg()
                        }
                        console.log(arr)
                    })
                    console.log(res.data.data)
                    this.datalist = res.data.data
                    this.page++
                })
            },
            getDefaultImg:function() {
                var num = Math.floor(Math.random() * 12) + 1
                console.log("getDefaultImg:"+num)
                return require("../assets/images/blog/blog-post-thumb-"+num+".jpg")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
