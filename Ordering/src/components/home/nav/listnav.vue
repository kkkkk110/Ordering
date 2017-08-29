<template>
	<div id="list-nav">
			<ul class="listnavl">
				<li><router-link to="/tlist">点心</router-link></li>
				<li><router-link to="/ypstyle">饮品</router-link></li>
				<li><router-link to="/mbstyle">面包</router-link></li>		
				<li><router-link to="/Wstyle">西餐</router-link></li>
				<li><router-link to="/Cstyle">中餐</router-link></li>
			</ul>
	    	<router-view></router-view>
	</div>
</template>

<script>

// import $ from 'jquery';
import './listnav.scss';
	export default {
}
</script>