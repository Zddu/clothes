<template>
    <div class="main-container">
        <div>
            <a-row>
                <a-col :span="5">
                    <div class="line">
                        <ul class="left-menu">
                            <li :class="{ active: xuanze == 1 }" @click="skipRouter(1)">
                                <a-tag style="color: #ffec70" color="#303030" v-if="leftType1?true:false">
                                    {{leftType1}}
                                </a-tag>
                                服装类别
                            </li>
                            <li :class="{ active: xuanze == 2 }" @click="skipRouter(2)">
                                <a-tag style="color: #ffec70" color="#303030" v-if="leftType2?true:false">
                                    {{leftType2}}
                                </a-tag>
                                服装品类
                            </li>
                            <li :class="{ active: xuanze == 3 }" @click="skipRouter(3)">
                                <a-tag style="color: #ffec70" color="#303030" v-if="leftType3?true:false">
                                    {{leftType3}}
                                </a-tag>
                                服装款式
                            </li>
                            <li :class="{ active: xuanze == 4 }" @click="skipRouter(4)">
                                <a-tag style="color: #ffec70" color="#303030" v-if="leftType4?true:false">
                                    {{leftType4}}
                                </a-tag>
                                服装版型
                            </li>
                            <li :class="{ active: xuanze == 5 }" @click="skipRouter(5)">
                                <a-tag style="color: #ffec70" color="#303030" v-if="leftType5?true:false">
                                    {{leftType5}}
                                </a-tag>
                                工艺类型
                            </li>
                        </ul>
                    </div>
                </a-col>
                <a-col :span="19">
                    <div class="content">
                        <ClothingType @child-event="parentGetData" v-if="xuanze == 1"/>
                        <ClothingTypeOne @child-event2="parentGetData2" v-if="xuanze == 2"/>
                        <ClothingStyle @child-event3="parentGetData3" v-if="xuanze == 3"/>
                        <ClothingFormat @child-event4="parentGetData4" v-if="xuanze == 4"/>
                        <ProcessType @child-event5="parentGetData5" v-if="xuanze == 5"/>
                    </div>
                </a-col>
            </a-row>
        </div>
        <transition>
            <ul v-if="flag" id="footer_choice" class="footer-choice bottom-menu">
                <li @click="childClick">产品列表</li>
                <li>保存模版</li>
                <li>重建订单</li>
            </ul>
        </transition>
        <div @click="changeStyle" class="spot-style"><img :src="bottomImg" alt=""/></div>
    </div>
</template>

<script>
    import { queryMstemplateinfo,queryCategoryinfo } from '@/api/ml';
    import ClothingType from '../ChildRoute/TypeSelection/ClothingType';
    import ClothingTypeOne from '../ChildRoute/TypeSelection/ClothingTypeOne';
    import ClothingStyle from '../ChildRoute/TypeSelection/ClothingStyle';
    import ClothingFormat from '../ChildRoute/TypeSelection/ClothingFormat';
    import ProcessType from '../ChildRoute/TypeSelection/ProcessType';

    export default {
        name: 'plbx1',
        components: { ProcessType, ClothingFormat, ClothingStyle, ClothingTypeOne, ClothingType },
        data() {
            return {
                leftType1: window.sessionStorage.getItem('leftType1'),
                leftType2: window.sessionStorage.getItem('leftType2'),
                leftType3: window.sessionStorage.getItem('leftType3'),
                leftType4: window.sessionStorage.getItem('leftType4'),
                leftType5: window.sessionStorage.getItem('leftType5'),
                id2:'',
                id3:'',
                id4:'',
                id5:'',
                xuanze: 1,
                templateData: [],
                //侧边导航菜单数据
                menuData: [],
                module: {
                    module_id: '1',
                    category_id: '0'
                },
                flag: true,
                visible: false,
                bottomImg: require('../../assets/cut1/icon88.png')
            };
        },
        created() {
        },
        mounted() {
            this.getMstemplateinfo();
            this.xuanze = window.sessionStorage.getItem("xuanze")?window.sessionStorage.getItem("xuanze"):1
        },
        methods: {
            skipRouter(val){
                this.xuanze = val;
                window.sessionStorage.setItem("xuanze",val)
            },
            childClick() {
                this.$emit('childByValue', 'show');
            },
            getDefault(){
                let data = '';
                if(!window.sessionStorage.getItem('leftType1')){
                    queryCategoryinfo(
                        {template_id: '1', category_ids: ''}
                    ).then(res1=>{
                        data  = res1.data[0]
                        this.leftType1 = res1.data[0].categoryName ;
                        queryCategoryinfo(
                            {template_id: '2', category_ids: data.id}
                        ).then(res=>{
                            console.log(res.data[0],'第二块');
                            this.$store.commit('ClothingCategory',  res.msg!=='暂无数据'?res.data[0].id:'');
                            this.leftType2 = res.data[0].categoryName
                            //第三块
                            queryCategoryinfo(
                                {template_id: '3', category_ids: data.id+","+res.data[0].id}
                            ).then(res1=>{
                                this.$store.commit('ClothingStyle',  res1.msg!=='暂无数据'?res1.data[0].id:'');
                                this.leftType3 = res1.data[0].categoryName
                                //第四块
                                queryCategoryinfo(
                                    {template_id: '4', category_ids: data.id+","+res.data[0].id+","+res1.data[0].id}
                                ).then(res2=>{
                                    this.$store.commit('ClothingFormat',  res2.msg!=='暂无数据'?res2.data[0].id:'');
                                    this.leftType4 = res2.data[0].categoryName
                                    console.log(res2.data);
                                    //第五块
                                    queryCategoryinfo(
                                        {template_id: '5', category_ids: data.id+","+res.data[0].id+","+res1.data[0].id+","+res2.data[0].id}
                                    ).then(res3=>{
                                        console.log(res3.data[0]);
                                        this.$store.commit('ProcessType', res3.msg!=='暂无数据'?res3.data[0].id:'');
                                        this.leftType5 = res3.data[0].categoryName;
                                        this.$store.commit('categoryIds', data.id+","+res.data[0].id+","+res1.data[0].id+","+res2.data[0].id+","+res3.data[0].id);
                                    })
                                })
                            })
                        })
                    })
                }else if(!window.sessionStorage.getItem('leftType2')){
                    queryCategoryinfo(
                        {template_id: '2', category_ids: this.$store.getters.getClothingType?this.$store.getters.getClothingType:'-1'}
                    ).then(res=>{
                        this.$store.commit('ClothingCategory',  res.msg!=='暂无数据'?res.data[0].id:'');
                        this.leftType2 = res.msg!=='暂无数据'?res.data[0].categoryName:'' ;
                        this.id2 = '';
                        this.id2 = res.data[0].id;
                        queryCategoryinfo(
                            {template_id: '3', category_ids: this.$store.getters.getClothingType+","+this.id2}
                        ).then(res1=>{
                            console.log("ClothingStyle",res1);
                            this.$store.commit('ClothingStyle',  res1.msg!=='暂无数据'?res1.data[0].id:'');
                            this.leftType3 = res1.msg!=='暂无数据'?res1.data[0].categoryName:'';
                            this.id3 = '';
                            this.id3 = res1.msg!=='暂无数据'?res1.data[0].id:'';
                            queryCategoryinfo(
                                {template_id: '4', category_ids: this.$store.getters.getClothingType+","+this.id2+","+this.id3}
                            ).then(res2=>{
                                this.$store.commit('ClothingFormat',  res2.msg!=='暂无数据'?res2.data[0].id:'');
                                this.leftType4 = res2.msg!=='暂无数据'? res2.data[0].categoryName:'';
                                this.id4 = '';
                                this.id4 = res2.msg!=='暂无数据'? res2.data[0].id:'';
                                //第五块
                                queryCategoryinfo(
                                    {template_id: '5', category_ids: this.$store.getters.getClothingType+","+this.id2+","+this.id3+","+this.id4}
                                ).then(res3=>{
                                    console.log(res3.data[0]);
                                    this.$store.commit('ProcessType', res3.msg!=='暂无数据'?res3.data[0].id:'');
                                    this.leftType5 = res3.msg!=='暂无数据'?res3.data[0].categoryName:'';
                                    this.id5 = '';
                                    this.id5 = res3.data[0].id;
                                    this.$store.commit('categoryIds', this.$store.getters.getClothingType+","+this.id2+","+this.id3+","+this.id4+","+this.id5);
                                })
                            })
                        })
                    })
                }else if (!window.sessionStorage.getItem('leftType3')){
                    queryCategoryinfo(
                        {template_id: '3', category_ids: this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory}
                    ).then(res1=>{
                        this.$store.commit('ClothingStyle',  res1.msg!=='暂无数据'?res1.data[0].id:'');
                        this.leftType3 = res1.data[0].categoryName?res1.data[0].categoryName:'';
                        this.id3 = '';
                        this.id3 = res1.data[0].id;
                        queryCategoryinfo(
                            {template_id: '4', category_ids: this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory+","+this.id3}
                        ).then(res2=> {
                            this.$store.commit('ClothingFormat', res2.msg!=='暂无数据'? res2.data[0].id : '');
                            this.leftType4 = res2.msg!=='暂无数据'?res2.data[0].categoryName:'';
                            this.id4 = '';
                            this.id4 = res2.data[0].id;
                            //第五块
                            queryCategoryinfo(
                                {
                                    template_id: '5',
                                    category_ids: this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory + "," + this.id3 + "," + this.id4
                                }
                            ).then(res3 => {
                                console.log(res3.data[0]);
                                this.$store.commit('ProcessType', res3.msg!=='暂无数据'? res3.data[0].id : '');
                                this.leftType5 = res3.msg!=='暂无数据'?res3.data[0].categoryName:'';
                                this.id5 = '';
                                this.id5 = res3.data[0].id;
                                this.$store.commit('categoryIds',this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory + "," + this.id3 + "," + this.id4 + "," + this.id5);
                            })
                        })
                    })
                }else if (!window.sessionStorage.getItem('leftType4')){
                    queryCategoryinfo(
                        {template_id: '4', category_ids: this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory+","+this.$store.getters.getClothingStyle}
                    ).then(res2=>{
                        this.$store.commit('ClothingFormat',  res2.msg!=='暂无数据'?res2.data[0].id:'');
                        this.leftType4 = res2.msg!=='暂无数据'?res2.data[0].categoryName:'';
                        this.id4 = '';
                        this.id4 = res2.data[0].id;
                        queryCategoryinfo(
                            {template_id: '5', category_ids: this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory+","+this.$store.getters.getClothingStyle+","+this.id4}
                        ).then(res3=>{
                            this.$store.commit('ProcessType', res3.msg!=='暂无数据'?res3.data[0].id:'');
                            this.leftType5 = res3.msg!=='暂无数据'?res3.data[0].categoryName:'';
                            this.id5 = '';
                            this.id5 = res3.data[0].id;
                            this.$store.commit('categoryIds', this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory+","+this.$store.getters.getClothingStyle+","+this.id4+","+this.id5);
                        })
                    })
                }else if(!window.sessionStorage.getItem('leftType5')){
                    queryCategoryinfo(
                        {template_id: '5', category_ids: this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory+","+this.$store.getters.getClothingStyle+","+this.$store.getters.getClothingFormat}
                    ).then(res3=>{
                        this.id5 = '';
                        this.id5 = res3.data[0].id;
                        this.$store.commit('ProcessType', this.id5);
                        this.leftType5 = res3.msg!=='暂无数据'?res3.data[0].categoryName:'';
                        this.$store.commit('categoryIds',this.$store.getters.getClothingType+","+this.$store.getters.getClothingCategory+","+this.$store.getters.getClothingStyle+","+this.$store.getters.getClothingFormat+","+this.id5)
                    })
                }
            },
            //请求module菜单
            getMstemplateinfo() {
                queryMstemplateinfo(this.module).then((res) => {
                    this.menuData = res.data;
                });
                let data = '';
                if(!window.sessionStorage.getItem('leftType1')){
                    queryCategoryinfo(
                        {template_id: '1', category_ids: ''}
                    ).then(res1=>{
                        data  = res1.data[0]
                        this.leftType1 = res1.data[0].categoryName ;
                        window.sessionStorage.setItem("leftType1",res1.data[0].categoryName);
                        queryCategoryinfo(
                            {template_id: '2', category_ids: data.id}
                        ).then(res=>{
                            console.log(res.data[0],'第二块');
                            this.$store.commit('ClothingCategory',  res.data[0].id?res.data[0].id:'');
                            window.sessionStorage.setItem("leftType2",res.data[0].categoryName);
                            this.leftType2 = res.data[0].categoryName
                            //第三块
                            queryCategoryinfo(
                                {template_id: '3', category_ids: data.id+","+res.data[0].id}
                            ).then(res1=>{
                                this.$store.commit('ClothingStyle',  res1.data[0].id?res1.data[0].id:'');
                                this.leftType3 = res1.data[0].categoryName
                                window.sessionStorage.setItem("leftType3",res1.data[0].categoryName);
                                //第四块
                                queryCategoryinfo(
                                    {template_id: '4', category_ids: data.id+","+res.data[0].id+","+res1.data[0].id}
                                ).then(res2=>{
                                    this.$store.commit('ClothingFormat',  res2.data[0].id?res2.data[0].id:'');
                                    this.leftType4 = res2.data[0].categoryName
                                    window.sessionStorage.setItem("leftType4",res2.data[0].categoryName);
                                    //第五块
                                    queryCategoryinfo(
                                        {template_id: '5', category_ids: data.id+","+res.data[0].id+","+res1.data[0].id+","+res2.data[0].id}
                                    ).then(res3=>{
                                        console.log(res3.data[0]);
                                        this.$store.commit('ProcessType', res3.data[0].id?res3.data[0].id:'');
                                        this.leftType5 = res3.data[0].categoryName;
                                        window.sessionStorage.setItem("leftType5",res3.data[0].categoryName);
                                        this.$store.commit('categoryIds', data.id+","+res.data[0].id+","+res1.data[0].id+","+res2.data[0].id+","+res3.data[0].id);
                                    })
                                })
                            })
                        })
                    })
                }else if(!window.sessionStorage.getItem('leftType2')){
                    queryCategoryinfo(
                        {template_id: '2', category_ids: data.id?data.id:''}
                    ).then(res=>{
                        console.log('ClothingCategory',res);
                        this.$store.commit('ClothingCategory',res.msg!=='暂无数据'?res.data[0].id:'');
                        this.leftType2 = res.msg!=='暂无数据'?res.data[0].categoryName:''  ;
                        this.id2 = '';
                        this.id2 = res.msg!=='暂无数据'?res.data[0].id:'';
                    })
                }else if (!window.sessionStorage.getItem('leftType3')){
                    queryCategoryinfo(
                        {template_id: '3', category_ids: data.id+","+this.id2}
                    ).then(res1=>{
                        this.$store.commit('ClothingStyle',  res1.msg!=='暂无数据'?res1.data[0].id:'');
                        this.leftType3 = res1.msg!=='暂无数据'?res1.data[0].categoryName:'';
                        this.id3 = '';
                        this.id3 = res1.data[0].id;
                    })
                }else if (!window.sessionStorage.getItem('leftType4')){
                    queryCategoryinfo(
                        {template_id: '4', category_ids: data.id+","+this.id2+","+this.id3}
                    ).then(res2=>{
                        this.$store.commit('ClothingFormat',  res2.msg!=='暂无数据'?res2.data[0].id:'');
                        this.leftType4 = res2.msg!=='暂无数据'?res2.data[0].categoryName:''
                        console.log(res2.data);
                        this.id4 = '';
                        this.id4 = res2.data[0].id;
                    })
                }else if(!window.sessionStorage.getItem('leftType5')){
                    queryCategoryinfo(
                        {template_id: '5', category_ids: data.id+","+this.id2+","+this.id3+","+this.id4}
                    ).then(res3=>{
                        console.log(res3.data[0]);
                        this.$store.commit('ProcessType', res3.msg!=='暂无数据'?res3.data[0].id:'');
                        this.leftType5 = res3.msg!=='暂无数据'?res3.data[0].categoryName:''
                    })
                }

            },

            parentGetData(data) {
                this.getDefault()
                this.leftType1 = data.categoryName;
            },
            parentGetData2(data) {
                this.getDefault()
                this.leftType2 = data;
            },
            parentGetData3(data) {
                this.getDefault()
                this.leftType3 = data;
            },
            parentGetData4(data) {
                this.getDefault()
                this.leftType4 = data;
            },
            parentGetData5(data) {
                this.getDefault()
                this.leftType5 = data;
            },
            changeStyle() {
                this.flag = !this.flag;
                let div = document.getElementById('footer_choice');
                div.style.width = 0 + 'px';
            },
            afterVisibleChange(val) {
                console.log('visible', val);
            },
            showDrawer() {
                this.visible = true;
            },
            onClose() {
                this.visible = false;
            }
        }
    };
</script>

<style scoped>
    .v-enter,
    .v-leave-to {
        /* 透明度为0 */
        width: 712px;
        /* 位移(x) */
    }

    /* v-enter-active [入场动画的时间段] */
    /* v-leave-active [离场动画的时间段] */
    .v-enter-active,
    .v-leave-active {
        /* 渐变 */
        transition: all 0.75s ease;
    }

    .bottom-menu li {
        float: left;
        position: relative;
        cursor: pointer;
        align-items: flex-start;
        margin-left: 30px;
    }

    .bottom-menu li {
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #585858;
        line-height: 28px;
    }

    .size {
        font-size: 13px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #303030;
        height: 27px;
        background: #ffec70;
        border-radius: 3px;
        text-align: center;
        line-height: 27px;
    }

    .imgs {
        width: 168px;
        height: 168px;
        margin-top: 6px;
    }

    .box {
        width: 177px;
        height: 224px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #f9d805;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .spot-style {
        width: 85px;
        height: 85px;
        background: #555555;
        border-radius: 45px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        right: -34px;
        bottom: -30px;
    }

    .bottom-menu {
        list-style: none;
        margin: 0;
        display: flex;
    }

    .bottom-menu li {
        float: left;
        position: relative;
        cursor: pointer;
        align-items: flex-start;
        margin-left: 30px;
    }

    .bottom-menu li {
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #585858;
        line-height: 28px;
    }

    .footer-choice {
        position: absolute;
        width: 420px;
        height: 86px;
        background: #e7e7e7;
        border-radius: 43px;
        right: -35px;
        bottom: -30px;
        display: flex;
        align-items: center;
    }

    .content {
        display: flex;
    }

    .head-type {
        width: 100%;
        padding: 6px 0;
    }

    .head-type .type-font {
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #303030;
    }

    .active {
        border-right: 1px solid #000c17;
    }

    .line {
        width: 200px;
        height: 100%;
        padding: 18px 0px 0px 0px;
        border-right: 1px solid #eeeeee;
    }

    .left-menu {
        list-style: none;
        padding: 0;
        text-align: end;
    }

    .left-menu li {
        line-height: 59px;
        padding: 0 15px 0px 0px;
    }

    .bottom-menu li > button span {
        cursor: pointer;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #585858;
        line-height: 28px;
    }

    .head-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f5f6f7;
    }

    .head-item-step {
        width: 1257px;
        height: 125px;
        background: #ffffff;
        padding: 44px 53px;
    }

    .main-container {
        margin-top: 20px;
        width: 1257px;
        min-height: 800px;
        background: #ffffff;
        position: relative;
    }
</style>
