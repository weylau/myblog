<template>
    <header id="blog-header" class="header text-center">
        <h1 class="blog-name pt-lg-4 mb-0"><a href="javascript:void(0);" @click="toPage('/')">{{blog_name}}</a></h1>

        <nav class="navbar navbar-expand-lg navbar-dark" >

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navigation" class="collapse navbar-collapse flex-column" >
                <div class="profile-section pt-3 pt-lg-0">
                    <img class="profile-image mb-3 rounded-circle mx-auto" :src="profile_image" alt="image" >

                    <div class="bio mb-3">learn to fail and fail to learn.<br><a href="javascript:void(0);" @click="toPage('/about')">About me</a></div><!--//bio-->
                    <ul class="social-list list-inline py-3 mx-auto">
                        <li class="list-inline-item"><a href="https://github.com/weylau" target="_blank"><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
                    </ul><!--//social-list-->
                    <hr>
                </div><!--//profile-section-->

                <ul class="navbar-nav flex-column text-left">
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0);" @click="toPage('/')"><i class="fas fa-home fa-fw mr-2"></i>首页<span class="sr-only">(current)</span></a>
                    </li>
<!--                    <li class="nav-item active">-->
<!--                        <a class="nav-link" href="index.html"><i class="fas fa-home fa-fw mr-2"></i>PHP</a>-->
<!--                    </li>-->
<!--                    <li class="nav-item active">-->
<!--                        <a class="nav-link" href="index.html"><i class="fas fa-home fa-fw mr-2"></i>GO</a>-->
<!--                    </li>-->
<!--                    <li class="nav-item active">-->
<!--                        <a class="nav-link" href="index.html"><i class="fas fa-home fa-fw mr-2"></i>前端</a>-->
<!--                    </li>-->
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0);" @click="toPage('/t')"><i class="fas fa-home fa-fw mr-2"></i>其他</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);" @click="toPage('/about')"><i class="fas fa-user fa-fw mr-2"></i>关于我</a>
                    </li>
                </ul>

<!--                <div class="my-2 my-md-3">-->
<!--                    <a class="btn btn-primary" href="#" target="_blank">Get in Touch</a>-->
<!--                </div>-->
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'blog-header',
        data() {
            return {
                blog_name: "Weylau's Blog",
                profile_image:require("../assets/images/profile.png"),
                toPage:function(page_router){
                    this.$router.push({
                        path: page_router,
                    })
                },
            }
        }
    }
</script>

<style>
    .social-list a{
        padding-top: 0;
    }
    .profile-section .profile-image{
        max-width: 120px;
    }
</style>
