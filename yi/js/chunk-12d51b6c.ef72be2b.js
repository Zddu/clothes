(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12d51b6c"],{"24fd":function(e,t,a){},c233:function(e,t,a){"use strict";var n=a("24fd"),l=a.n(n);l.a},d035:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"copy"},[a("div",{staticClass:"titles"},[a("a-space",[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",size:"medium ",format:"yyyy-MM-dd"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("el-input",{attrs:{placeholder:"请输入内容",size:"medium "},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),a("el-button",{attrs:{size:"medium "},on:{click:e.queryMyorderlist1}},[e._v("查询")])],1)],1),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.PageSize,e.currentPage*e.PageSize),border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"orderSn",label:"订单编号"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"orderName",label:"订单名称"}}),a("el-table-column",{attrs:{prop:"customerCode",label:"客户代码"}}),a("el-table-column",{attrs:{prop:"createTime",label:"保存时间"}}),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("复制订单信息")])]}}])})],1)],1),a("div",{staticClass:"tabListPage"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},l=[],r=a("36b4"),i={data:function(){return{value1:"",input:"",tableData:[],currentPage:1,totalCount:1,pageSizes:[10,20,30,40],PageSize:10}},mounted:function(){},methods:{queryMyorderlist1:function(){var e=this;Object(r["t"])({token:this.$store.getters.getToken,pageNo:1,queryTime:this.value1,queryName:this.input}).then((function(t){e.tableData=t.data.records,e.$set(e.tableData),e.totalCount=e.tableData.length}))},handleEdit:function(e,t){},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1},handleCurrentChange:function(e){this.currentPage=e}}},u=i,s=(a("c233"),a("2877")),o=Object(s["a"])(u,n,l,!1,null,"68b4dd5d",null);t["default"]=o.exports}}]);