<template>
    <div class="head-step">
        <div class="head-item-step">
            <el-steps :active="active" align-center>
                <el-step space="20%" title="填写基本信息" @click.native="steptitle(0)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon109.png" style="height: 25px; width: 25px" />
                    </template>
                </el-step>
                <el-step space="20%" title="品类版型选择" @click.native="steptitle(1)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon65.png" style="height: 25px; width: 25px" v-show="active<1"/>
                        <img src="../../assets/cut1/icon68.png" style="height: 25px; width: 25px" v-show="active>=1"/>
                    </template>
                </el-step>
                <el-step space="20%" title="选择面料辅料" @click.native="steptitle(2)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon78.png" style="height: 25px; width: 25px" v-show="active<2"/>
                        <img src="../../assets/cut1/icon81.png" style="height: 25px; width: 25px" v-show="active>=2"/>
                    </template>
                </el-step>
                <el-step space="20%" title="服装类别工艺" @click.native="steptitle(3)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon115.png" style="height: 25px; width: 25px" v-show="active<3"/>
                        <img src="../../assets/cut1/icon112.png" style="height: 25px; width: 25px" v-show="active>=3"/>
                    </template>
                </el-step>
                <el-step space="20%" title="选择绣字撞色" @click.native="steptitle(4)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon127.png" style="height: 25px; width: 25px" v-show="active<4"/>
                        <img src="../../assets/cut1/icon124.png" style="height: 25px; width: 25px" v-show="active>=4"/>
                    </template>
                </el-step>
                <el-step space="20%" title="量体信息录入" @click.native="steptitle(5)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon121.png" style="height: 25px; width: 25px" v-show="active<5"/>
                        <img src="../../assets/cut1/icon118.png" style="height: 25px; width: 25px" v-show="active>=5"/>
                    </template>
                </el-step>
            </el-steps>
        </div>
        <jbxx1 v-if="active == 0"></jbxx1>
        <plbx1 v-if="active == 1"></plbx1>
        <order7 v-if="active == 2"></order7>
        <fzlb v-if="active == 3"></fzlb>
        <xzxz1 v-if="active == 4"></xzxz1>
        <ltxx v-if="active == 5"></ltxx>
    </div>
</template>

<script>
import jbxx1 from "./jbxx1"
import plbx1 from "./plbx1"
import order7 from "./order7"
import fzlb from "./fzlb"
import xzxz1 from "./xzxz1"
import ltxx from "./ltxx"
export default {
    data() {
        return {
			active: 0
        };
    },
    components: {
        jbxx1,
        plbx1,
        order7,
        fzlb,
        xzxz1,
        ltxx
    },
    created() {},
    mounted() {
    },
    methods: {
        
        steptitle(index) {
            this.active = index
        },
    }
};
</script>

<style scoped>

.head-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f6f7;
    width: 100vw;
    padding-bottom: 20px;
}

.head-item-step {
    width: 1257px;
    height: 125px;
    background: #ffffff;
    padding: 44px 53px;
}

</style>
