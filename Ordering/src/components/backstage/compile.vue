<template>
<div>
<h3 style="text-align:center;margin-bottom:12px">编辑菜品</h3>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="菜品编号" prop="number">
    <el-input v-model="ruleForm.number"></el-input>
  </el-form-item>
  <el-form-item label="菜品名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="菜品价格" prop="price">
    <el-input v-model="ruleForm.price"></el-input>
  </el-form-item>
   <el-form-item label="会员价" prop="VIPprice">
    <el-input v-model="ruleForm.VIPprice"></el-input>
  </el-form-item>
  <el-form-item label="所属菜类" prop="cailei">
    <el-select v-model="ruleForm.cailei" placeholder="选择分类">
      <el-option v-for="(obj, index) in this.$store.state.backstagejs.classify" :value="obj.name" :label="obj.name" :key="index">{{obj.name}}</el-option>
      <!-- <el-option label="区域二" value="beijing"></el-option> -->
    </el-select>
  </el-form-item>
  <el-form-item label="是否折扣" prop="region">
    <el-select v-model="ruleForm.discount" placeholder="选择分类">
      <el-option label="是" value="是"></el-option>
      <el-option label="否" value="否"></el-option>
    </el-select>
  </el-form-item>
 <!--  <el-form-item label="添加时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item> -->
  <el-form-item label="菜品详情" prop="desc">
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
  export default {
    name: 'addComponent',
    data() {
      return {
        ruleForm: {
          number: '',
          name: '',
          price: '',
          VIPprice: '',
          cailei: '',
          discount: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          desc: ''
        },
        rules: {
          number: [
            { required: true, message: '请输入菜品编号', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入菜品名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          price: [
            { required: true, message: '请输入菜品价格', trigger: 'blur' },
          ],
          cailei: [
            { required: true, message: '请选择菜品分类', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活菜品详情', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        console.log(this.ruleForm)
        let str = `name=${this.ruleForm.name}&number=${this.ruleForm.number}&TeSe=${this.ruleForm.desc}&FenLei=${this.ruleForm.cailei}&price=${this.ruleForm.price}&VIPprice=${this.ruleForm.VIPprice}`
        console.log(str)
       /* Axios.get('http://localhost:1212/add?' + str).then(function(res){
           this.$parent.shade = false;
           this.$parent.addshade = false;
           this.$message({ type: 'success',message: '提交成功!'})
           this.$parent.btn(this.$parent.head.substring(3), this.$parent.head.substring(0, 1)-1);
        }.bind(this))*/
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      cancel(){
        console.log(666)
        this.$parent.shade = false;
        this.$parent.compileshade = false;
      }
    },
    created: function(){
      // console.log('aaa', this)
    }

  }
</script>