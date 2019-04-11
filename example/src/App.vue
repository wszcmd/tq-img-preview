<template>
  <div id="app">
    <section >
      <div class="title">组1 380 (默认)</div>
      <img 
        v-for='(item,index) in list380'
        :src='item.src'
        :alt='item.title'
        v-preview="item.src"
        group='1'
        :key='index'
        class="img"
      />
    </section>
    <div>-----------------------------------------------------------------</div>
    <section >
      <div class="title">组2 350(preview-title-enable=false)</div>
      <img 
        v-for='(item,index) in list350'
        :src='item.src'
        :alt='item.title'
        v-preview="item.src"
        group='2'
        :key='index'
        preview-title-enable='false'
        class="img"
      />
    </section>
    <div>-----------------------------------------------------------------</div>
    <section >
      <div class="title">组3 787</div>
      <span 
        v-for='(item,index) in list787'
        :alt='item.title'
        v-preview="item.src"
        group='3'
        :key='index'
        class="span"
      >{{item.title}}</span>
    </section>
     <div>-----------------------------------------------------------------</div>
    <section >
      <div class="title">组4 单个</div>
      <img 
        v-for='(item,index) in list'
        :src='item.src'
        :alt='item.title'
        v-preview="item.src"
        :key='index'
        class="img"
      />
    </section>

  </div>
</template>

<script> 
export default {
  name: 'app',
  data(){
    return {
      list380:[
        {src:'http://img6.hangkong.com/118574-99.jpg?0',title:'380-1'},
        {src:'http://www.hangkong.com/uploadfile/2016/1221/20161221111513542.jpg',title:'380-2'},
        {src:'http://img6.hangkong.com/117973-99.jpg?0',title:'380-3'}
      ],
      list350:[
        {src:'http://img6.hangkong.com/118887-99.jpg?0',title:'350-1'},
        {src:'http://img6.hangkong.com/118565-99.jpg?0',title:'350-2'},
        {src:'http://img6.hangkong.com/118397-99.jpg?0',title:'350-3'}
      ],
      list787:[
        {src:'http://img6.hangkong.com/118873-99.jpg?0',title:'787-1'},
        {src:'http://img6.hangkong.com/118555-99.jpg?0',title:'787-2'},
        {src:'http://img6.hangkong.com/118260-99.jpg?0',title:'787-3'}
      ],
      list:[
        {src:'http://img6.hangkong.com/118888-99.jpg?0',title:'747'},
        {src:'http://img6.hangkong.com/16165-99.jpg?0',title:'安225'},
        {src:'http://img6.hangkong.com/8496-99.jpg?0',title:'歼20'}
      ]
    }
  }
}
</script>

<style>
.title{
  color: #666;
  font-size: 14px;
  line-height: 30px;
}
.img{
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.span{
  cursor: pointer;
  color: #2d8cf0;
  margin-right: 20px;
}
</style>
