require.config({
    baseUrl:'./js',
    paths:{
        'flex':'./flexible',
        'swiper':'./swiper.min'
    }  
});
require(['flex','swiper'],function(flex,Swiper){
      new Swiper('.banner',{
          autoplay:{
              delay:2000
          },
          loop:true
      })
})