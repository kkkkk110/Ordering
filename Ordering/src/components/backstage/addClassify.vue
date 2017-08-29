<template>
    <div>
        <h3 style="text-align:center;margin-bottom:12px">新增菜品分类</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
           <!--  <el-form-item label="使用范围" prop="number">
                <el-input v-model="ruleForm.number"></el-input>
            </el-form-item> -->
            <el-form-item label="分类名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
           <!--    <div style="margin: 15px 0;"></div> -->
              <span>使用范围:</span>
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            <el-form-item label="是否折扣" prop="region">
                <el-select v-model="ruleForm.discount" placeholder="选择分类">
                    <el-option label="是" value="是"></el-option>
                    <el-option label="否" value="否"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="分类详情" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="danger" @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    // import Vue from 'vue';
    import Axios from 'axios';
    const cityOptions = ['堂食', '快餐', '外卖', '微信点餐'];
    export default {
        name: 'addComponent',
        data() {
            return {
                checkAll: true,
                checkedCities: ['堂食'],
                cities: cityOptions,
                isIndeterminate: true,
                ruleForm: {
                    name: '',
                    discount: '',
                    delivery: false,
                    desc: ''
                },
                rules: {
                   
                    name: [{ required: true, message: '请输入分类名称', trigger: 'blur' },],
                    desc: [{ required: true, message: '请填写分类详情', trigger: 'blur' }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                console.log(this)
                // Axios.get('http://localhost:1212/addclassify?name=' + this.ruleForm.name).then(function(res){
                //     this.$parent.shade = false;
                //     this.$parent.classifyshade = false;
                //     this.$parent.$store.dispatch('classify');
                //     this.$message({ type: 'success',message: '添加成功!'});       
                // }.bind(this))
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            cancel(){
                this.$parent.shade = false;
                this.$parent.classifyshade = false;
            },
            handleCheckAllChange(event) {
                this.checkedCities = event.target.checked ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        },
        created: function(){
            // console.log('aaa', this)
        }
    }
</script>