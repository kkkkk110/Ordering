<template>
    <div id="W-style">
    <h1>西餐</h1>
        <span><router-link to="/listhome">返回</router-link></span>
        <ul>
            <li v-for="(obj, index) in listh" >
                <img :src="'./src/assets/imgs/western/'+obj.img" >
                <span>{{obj.name}}</span><span>{{obj.price}}元</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
import './Wstyle.scss';
import axios from 'axios';
// import $ from 'jquery'
	export default {
        data:function(){
            return{
            listh:[],
            }
        },
        beforeMount: function(){
        axios.post('http://localhost:1212/lh').then(function (res) {
       for(var i=0;i<res.data.length;i++){
           if(res.data[i].FenLei=='西餐'){
            this.listh.push(res.data[i]);
        }

            
        }
        console.log(this.listh);

        }.bind(this));
        }

            }

	
</script>