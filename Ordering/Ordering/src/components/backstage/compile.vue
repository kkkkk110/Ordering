<template>
    <div>
        <h3 style="text-align:center;margin-bottom:12px">编辑菜品</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="菜品编号" prop="number">
                <el-input v-model="msgObj.number"></el-input>
            </el-form-item>
            <el-form-item label="菜品名称" prop="name">
                <el-input v-model="msgObj.name"></el-input>
            </el-form-item>
            <el-form-item label="菜品价格" prop="price">
                <el-input v-model="msgObj.price"></el-input>
            </el-form-item>
            <el-form-item label="会员价" prop="VIPprice">
                <el-input v-model="msgObj.VIPprice"></el-input>
            </el-form-item>
            <el-form-item label="所属菜类" prop="cailei">
                <el-select v-model="msgObj.FenLei" placeholder="选择分类">
                    <el-option v-for="(obj, index) in this.$store.state.backstagejs.classify" :value="obj.name" :label="obj.name" :key="index">{{obj.name}}</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否折扣" prop="region">
                <el-select v-model="ruleForm.discount" placeholder="选择分类">
                    <el-option label="是" value="是"></el-option>
                    <el-option label="否" value="否"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="菜品详情" prop="desc">
                <el-input type="textarea" v-model="msgObj.TeSe"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                <el-button type="danger" @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  // import Vue from 'vue';
    import Axios from 'axios';
    export default {
        name: 'addComponent',
        props: ['msgObj'],
        data() {
            return {
                ruleForm: {
                    number: '',
                    name: '',
                    price: '',
                    VIPprice: '',
                    cailei: '',
                    discount: '是',
                    // date1: '',
                    // date2: '',
                    delivery: false,
                    type: [],
                    desc: ''
                },
                rules: {
                    // number: [
                    //   { required: true, message: '请输入菜品编号', trigger: 'blur' },
                    // ],
                    // name: [
                    //   { required: true, message: '请输入菜品名称', trigger: 'blur' },
                    //   // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    // ],
                    // price: [
                    //   { required: true, message: '请输入菜品价格', trigger: 'blur' },
                    // ],
                    // cailei: [
                    //   { required: true, message: '请选择菜品分类', trigger: 'change' }
                    // ],
                    // date1: [
                    //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    // ],
                    // date2: [
                    //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    // ],
                    // type: [
                    //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    // ],
                    // desc: [
                    //   { required: true, message: '请填写活菜品详情', trigger: 'blur' }
                    // ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                // console.log(this.$parent.msg)
                // console.log('adasd', this.$store.state.backstagejs.category)
                // console.log(this.$parent.currentIndex)
                console.log(this.msgObj)
                let str = `name=${this.msgObj.name}&number=${this.msgObj.number}&TeSe=${this.msgObj.TeSe}&FenLei=${this.msgObj.FenLei}&price=${this.msgObj.price}&VIPprice=${this.msgObj.VIPprice}&id=${this.msgObj.id}`
                console.log(str)
                Axios.get('http://localhost:1212/renewal?' + str).then(function(res){
                    this.$parent.shade = false;
                    this.$parent.compileshade = false;
                    this.$message({ type: 'success',message: '修改成功!'})
                    // console.log(this.msgObj)
                    let idx, arr = this.$store.state.backstagejs.classify;
                    for(let i = 0; i< arr.length; i ++){
                        if(arr[i].name == this.msgObj.FenLei){
                            idx = i;
                            break;
                        }
                    }
                    this.$parent.btn(this.msgObj.FenLei, idx);
                }.bind(this))
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            cancel(){
                this.$parent.shade = false;
                this.$parent.compileshade = false;
            },
            abcb: function(){
                console.log(666)
            }
        },
        created: function(){
            // console.log(this.$parent.msg)
            console.log('adasd', this.$store.state.backstagejs.msg)
        },
        mounted: function(){
            console.log('666', this.$children)
        }
    }
</script>