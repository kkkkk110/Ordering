<template>
    <div id="tdli">

        <ul>
            <li v-for="(obj, index) in listh" >
                <img :src="'./src/assets/imgs/all/'+obj.img" >
                <span>{{obj.name}}</span><span>{{obj.price}}元</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
import './tdlist.scss';
import axios from 'axios';
import $ from 'jquery'
	export default {
        data:function(){
            return{
            listh:[],
            }
        },
        beforeMount: function(){
        axios.post('http://localhost:1212/lh').then(function (res) {
       for(var i=0;i<res.data.length;i++){
           
            this.listh.push(res.data[i]);

            
        }
        console.log(this.listh);
        console.log('1231',this.listh[0].img)
        console.log(res.data.FenLei);
        console.log(res.data);
        console.log();
        console.log(999);
        }.bind(this));
        }

            }

	
</script>