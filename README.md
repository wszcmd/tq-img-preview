fork from https://github.com/xLogic92/vue-picture-preview

tq@img-preview
=============

## 安装

### NPM

```sh
npm install --save tq@img-preview
```

### demo

```sh
cd example
npm i
npm run serve
```


## 使用
首先在项目的入口文件中引入, 调用 Vue.use 安装。

```javascript
import imgPreview from 'tq@img-preview'
Vue.use(imgPreview)
```


对于所有图片都可以使用 v-preview 指令来绑定他们的预览功能

```HTML
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
        preview-nav-enable='false'
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
```

```javascript
export default {
  data(){
    return {
      list380:[
        {src:'http://img6.hangkong.com/118574-99.jpg?0',title:'380-1'},
        {src:'http://img6.hangkong.com/117998-99.jpg?0',title:'380-2'},
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
```
## API

* **preview-title-enable**: (boolean) 设置 _preview-title-enable="false"_ 将禁用底部标题. 默认值: true.
* **group**: (string) 设置 _string_ 同一group会作为一组 一同显示。不设置group 只实现普通 预览
