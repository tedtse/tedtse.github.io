(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bf71"],{f0e6:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[e._m(0),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <InputNumberDispatcher :max="10" :min="1" v-model="value" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: 1\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(1),n("demo-block",[n("template",{slot:"source"},[n("element-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <InputNumberDispatcher :max="10" :min="1" :step="1.2" v-model="value" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: 1\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(2),n("demo-block",[n("template",{slot:"source"},[n("element-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <InputNumberDispatcher\n    :max="10000"\n    v-model="value"\n    :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, \',\')"\n    :parser="value => value.replace(/$s?|(,*)/g, \'\')"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: 1000\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(3),n("demo-block",[n("template",{slot:"source"},[n("element-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <Row>\n    <Col span="8">\n      <InputNumberDispatcher v-model="value3" size="small" />\n    </Col>\n    <Col span="8">\n      <InputNumberDispatcher v-model="value4" />\n    </Col>\n    <Col span="8">\n      <InputNumberDispatcher v-model="value5" size="large" />\n    </Col>\n  </Row>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value3: 2,\n      value4: 2,\n      value5: 2\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(4),n("demo-block",[n("div",[n("p",[e._v("通过组件的props属性 "),n("code",[e._v("${namespace}-state(kebeb-case)")]),e._v(" 或 "),n("code",[e._v("${namespace}State(camelCase)")]),e._v(" 控制 read or write 状态。优先级高于 局部配置的 ${namespace}State")])]),n("template",{slot:"source"},[n("element-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <Form :model="form">\n    <FormItem label="限制次数">\n      <InputNumberDispatcher\n        v-model="form.number"\n        :rw-dispatcher-state="state"\n        style="width: 300px"\n      />\n      <Icon :type="icon" style="font-size: 20px" @click="toggleState" />\n    </FormItem>\n  </Form>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      form: {\n        number: 5\n      },\n      state: \'write\',\n      icon: \'ios-eye-outline\'\n    }\n  },\n  methods: {\n    toggleState () {\n      if (this.state === \'write\') {\n        this.state = \'read\'\n        this.icon = \'ios-create-outline\'\n      } else {\n        this.state = \'write\'\n        this.icon = \'ios-eye-outline\'\n      }\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(5),n("demo-block",[n("div",[n("p",[e._v("通过组件的props属性 "),n("code",[e._v("${namespace}-render(kebeb-case)")]),e._v(" 或 "),n("code",[e._v("${namespace}Render(camelCase)")]),e._v(" 自定义 read 状态的渲染函数。")])]),n("template",{slot:"source"},[n("element-demo5")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <InputNumberDispatcher\n    v-model="number"\n    :rw-dispatcher-render="readStateRender"\n    placeholder="请输入内容"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      number: 0\n    }\n  },\n  methods: {\n    readStateRender (h, context) {\n      return h(\'span\', {\n        style: { color: \'green\' }\n      }, context.data.attrs.value)\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(6),n("demo-block",[n("div",[n("p",[e._v("通过 "),n("code",[e._v("#${namespace}Render")]),e._v("（cabelCase） 或 "),n("code",[e._v("v-slot:${namespace}Render")]),e._v("（cabelCase） 自定义 read 状态的渲染函数。")])]),n("template",{slot:"source"},[n("element-demo6")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <InputNumberDispatcher v-model="number" placeholder="请输入内容">\n    <template #rwDispatcherRender="{ data }">\n      <span style="color: red">{{ data.attrs.value }}</span>\n    </template>\n  </InputNumberDispatcher>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      number: 0\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(7),n("iview-attributes"),e._m(8),n("iview-scope-slot"),e._m(9),e._m(10)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[e._v("¶")]),e._v(" 基础用法")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"xiao-shu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xiao-shu","aria-hidden":"true"}},[e._v("¶")]),e._v(" 小数")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"ge-shi-hua-zhan-shi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ge-shi-hua-zhan-shi","aria-hidden":"true"}},[e._v("¶")]),e._v(" 格式化展示")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"chi-cun"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chi-cun","aria-hidden":"true"}},[e._v("¶")]),e._v(" 尺寸")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"zu-jian-pei-zhi----zhuang-tai"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-pei-zhi----zhuang-tai","aria-hidden":"true"}},[e._v("¶")]),e._v(" 组件配置 — 状态")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"zi-ding-yi-xuan-ran-han-shu----props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-xuan-ran-han-shu----props","aria-hidden":"true"}},[e._v("¶")]),e._v(" 自定义渲染函数 — props")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"zi-ding-yi-xuan-ran-han-shu----slot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-xuan-ran-han-shu----slot","aria-hidden":"true"}},[e._v("¶")]),e._v(" 自定义渲染函数 — slot")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"inputnumber-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputnumber-attributes","aria-hidden":"true"}},[e._v("¶")]),e._v(" InputNumber Attributes")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"inputnumber-scoped-slots"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputnumber-scoped-slots","aria-hidden":"true"}},[e._v("¶")]),e._v(" InputNumber Scoped Slots")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"qi-ta-shu-xing-slots-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-shu-xing-slots-events","aria-hidden":"true"}},[e._v("¶")]),e._v(" 其他属性、Slots、Events")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("与官方 "),n("code",[e._v("InputNumber")]),e._v(" 的完全一致，"),n("a",{attrs:{href:"https://www.iviewui.com/components/input-number#API"}},[e._v("官方组件")]),e._v("。")])}],s=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("bd86"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("InputNumberDispatcher",{attrs:{max:10,min:1},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]],2)},t=[],n={data:function(){return{value:1}}};return i({render:e,staticRenderFns:t},n)}(),"element-demo1":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("InputNumberDispatcher",{attrs:{max:10,min:1,step:1.2},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]],2)},t=[],n={data:function(){return{value:1}}};return i({render:e,staticRenderFns:t},n)}(),"element-demo2":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("InputNumberDispatcher",{attrs:{max:1e4,formatter:function(e){return("$ "+e).replace(/B(?=(d{3})+(?!d))/g,",")},parser:function(e){return e.replace(/$s?|(,*)/g,"")}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]],2)},t=[],n={data:function(){return{value:1e3}}};return i({render:e,staticRenderFns:t},n)}(),"element-demo3":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("Row",[n("Col",{attrs:{span:"8"}},[n("InputNumberDispatcher",{attrs:{size:"small"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("InputNumberDispatcher",{model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("InputNumberDispatcher",{attrs:{size:"large"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1)],1)]],2)},t=[],n={data:function(){return{value3:2,value4:2,value5:2}}};return i({render:e,staticRenderFns:t},n)}(),"element-demo4":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("Form",{attrs:{model:e.form}},[n("FormItem",{attrs:{label:"限制次数"}},[n("InputNumberDispatcher",{staticStyle:{width:"300px"},attrs:{"rw-dispatcher-state":e.state},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}}),e._v(" "),n("Icon",{staticStyle:{"font-size":"20px"},attrs:{type:e.icon},on:{click:e.toggleState}})],1)],1)]],2)},t=[],n={data:function(){return{form:{number:5},state:"write",icon:"ios-eye-outline"}},methods:{toggleState:function(){"write"===this.state?(this.state="read",this.icon="ios-create-outline"):(this.state="write",this.icon="ios-eye-outline")}}};return i({render:e,staticRenderFns:t},n)}(),"element-demo5":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("InputNumberDispatcher",{attrs:{"rw-dispatcher-render":e.readStateRender,placeholder:"请输入内容"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})]],2)},t=[],n={data:function(){return{number:0}},methods:{readStateRender:function(e,t){return e("span",{style:{color:"green"}},t.data.attrs.value)}}};return i({render:e,staticRenderFns:t},n)}(),"element-demo6":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("InputNumberDispatcher",{attrs:{placeholder:"请输入内容"},scopedSlots:e._u([{key:"rwDispatcherRender",fn:function(t){var r=t.data;return[n("span",{staticStyle:{color:"red"}},[e._v(e._s(r.attrs.value))])]}}]),model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})]],2)},t=[],n={data:function(){return{number:0}}};return i({render:e,staticRenderFns:t},n)}()}},o=c,u=n("2877"),m=Object(u["a"])(o,r,a,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22bf71.42339316.js.map