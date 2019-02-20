import lgPreview from './vue-preview.vue'

export default {
    install: function (Vue, options) {
        const LOGIC_EVENT_BUS = new Vue({
            data(){
                return {
                    LOGIC_PREVIEW : {
                        isTitleEnable: true, //底部标题
                        show: false,
                        loading : true,
                        current: {
                            title: '',
                            src: '',
                            group:'',
                        },
                        list: {}
                    }
                }
            }
        })

        window.LOGIC_EVENT_BUS = LOGIC_EVENT_BUS

        Vue.component('lg-preview', lgPreview)

        //省略手动添加 <lg-preview></lg-preview>
        const mask = document.createElement('div')
        mask.setAttribute('id', 'tqMask')
        document.body.appendChild(mask)
        new Vue({
          el: '#tqMask',
          render: (h) => h('lg-preview')
        })

        const updateIndex = function (list,group) {
            list[group].forEach(function (item, index) {
                item.index = index + 1
            })
        }

        function getImage (src, previewItem) {
            return new Promise(function (resolve, reject) {
                const img = new window.Image()
                img.src = src
                img.onload = function () {
                    previewItem['naturalHeight'] = img.naturalHeight
                    previewItem['naturalWidth'] = img.naturalWidth
                    setTimeout(function () {
                        LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = false
                    },500)
                    resolve(img)
                }
                img.error = function (e) {
                    reject(e)
                }
            })
        }

        Vue.directive('preview', {
            bind: function (el,binding) {
                let group =  el.getAttribute('group')||"tqNoGroup"
                let title =  el.getAttribute('alt')||""
                var previewItem = {
                    title,
                    el: el,
                    index: 0,
                    src: binding.value,
                    group
                }
                if(!LOGIC_EVENT_BUS.LOGIC_PREVIEW.list[group]){
                    LOGIC_EVENT_BUS.LOGIC_PREVIEW.list[group]=[]
                }
                LOGIC_EVENT_BUS.LOGIC_PREVIEW.list[group].push(previewItem)
                updateIndex(LOGIC_EVENT_BUS.LOGIC_PREVIEW.list,group)
                el.addEventListener('click', function (e) {
                    e.stopPropagation()
                    LOGIC_EVENT_BUS.LOGIC_PREVIEW.isTitleEnable = el.getAttribute('preview-title-enable')== "false" ? false : true;
                    LOGIC_EVENT_BUS.LOGIC_PREVIEW.show = true
                    LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = true
                    LOGIC_EVENT_BUS.LOGIC_PREVIEW.current = previewItem
                    getImage(previewItem.src, previewItem)
                })
            },
            unbind: function (el) {
                let group =  el.getAttribute('group')||"tqNoGroup"
                if (el) {
                    LOGIC_EVENT_BUS.LOGIC_PREVIEW.list[group].forEach(function (item, index) {
                        if (el === item.el) {
                            LOGIC_EVENT_BUS.LOGIC_PREVIEW.list[group].splice(index, 1)
                        }
                    })
                }
                updateIndex(LOGIC_EVENT_BUS.LOGIC_PREVIEW.list,group)
            }
        })
    }
};
