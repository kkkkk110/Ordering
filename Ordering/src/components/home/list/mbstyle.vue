<template>
    <div id="mb-style">
        <h1>面包</h1>
        <span><router-link to="/listhome">返回</router-link></span>
        <ul>
            <li v-for="(obj, index) in listh2" >
                <img :src="'./src/assets/imgs/mianbao/'+obj.img" >
                <span>{{obj.name}}</span><span>{{obj.price}}元</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
import './mbstyle.scss';
    import axios from 'axios';
    import $ from 'jquery'
	export default {
        data:function(){
            return{
            listh2:[],
            }
        },
        created: function(){
            console.log(1111)
        axios.post('http://localhost:1212/lh').then(function (res) {
            console.log(999)
       for(var i=0;i<res.data.length;i++){
            if(res.data[i].FenLei=='面包'){

            this.listh2.push(res.data[i]);
            }
        }
         console.log(this.listh2);
        
        console.log(res.data.FenLei);
          console.log(res.data);
        }.bind(this));
        }

            }

	
</script>