<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
	<nav>
  		<ul>
    		<li class="col-4 nav-header"><a href="#">SSSS</a></li>
			<li class="col-1 settextnav"><a href="#">Men</a></li>
			<li class="col-1 settextnav"><a href="#">Women</a></li>
			<li class="col-1 settextnav"><a href="#">Promotion</a></li>
    		<li class="col-3 search">
			<div>
      		<form>
				<div class="search-bar">
					<input type="text" placeholder="Search">
					<div class="search-icon"></div>
				</div>
      		</form>
			</div>
    		</li>
			<router-link to="/cart"><img src="../assets/cart.png" alt="" height="40" width="40" ></router-link>
			

  		</ul>
	</nav>

	<div class="split">
		<div class="col-lg-5 detail-text">
			<p>รายละเอียดแบบวิทเทจยกระดับรุ่นไอคอนเพื่อนำสไตล์เหนือการเวลาที่ใส่ง่ายมาให้คุณ คู่นี้มาพร้อมกับหนังแท้และหนังสังเคราะห์ที่ให้สัมผัสแบบคลาสสิก</p>
			<p>ส่วนโลโก้ แบบเป็นเลเยอร์และโฟมเปลือย ส่วนที่ลิ้นรองเท้าก็เสริมลุคเรโทร</p>
			<p>แน่นอนว่าบางสิ่งบางอย่างก็ไม่เคยเปลี่ยน และ Nike Air ก็ยังคงช่วยลดแรงกระแทกในทุกย่างก้าวของคุณ</p>
		</div>
		
		<div class="col-lg-3 shoe-image">
			<img src="src\assets\ShoeShop01.png" alt="Shoe">
		</div>

		<div class="col-lg-2 sizing">
			<h3>Nike AirForce 1 '07 LV8</h3>
			<h5>Men shoe</h5>
			<h5>Select your size:</h5>
				<div class="button-box">
					<div class="left-buttons">
    					<button>43</button>
    					<button>45</button>
    					<button>47</button>
    					<button>49</button>
   	 					<button>51</button>
  					</div>

 				 	<div class="right-buttons">
    					<button>44</button>
    					<button>46</button>
    					<button>48</button>
    					<button>50</button>
    					<button>52</button>
 				 	</div>
				</div>

				<div class="price-details">
					<h5>฿4700</h5>
					<div class="price-btn">
						<button v-bind:class="buttonStyle" @click="onClick">Add to cart</button>
						<button v-bind:class="buttonStyle" @click="$emit('checkLogin')">Buy now</button>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    submitSearch() {
      console.log(`Searching for: ${this.searchQuery}`);
      // Perform search functionality here
    },
  },
};
</script>




<style scoped>
.settextnav a:hover{
	font-family: 'Prompt' !important;
	background-color: #9c9c9c;
	border-radius: 10px;
}
.nav-header{
	font-family: 'Inria Serif' !important;
	font-size: xx-large;
	text-align: left;
	margin-left: 50px;
}
nav{
	background-color: white;
}
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}
nav ul li {
  margin: 0 10px;
  text-align: center;
}

nav ul li a {
	font-size: larger;
	text-align: center;
	color: black;
	text-decoration: none;
	padding: 10px;
}

nav ul li.search {
  align-items: left;
}

nav ul li.search input[type="text"] {
  font-size: large;
  text-align: center;
  background-color: #D9D9D9;
  border: none;
  border-radius: 15px;
  color: black;
  padding: 5px;
}

nav ul li.search button[type="submit"] {
  background-color: transparent;
  border: solid 2px black;
  border-radius: 10px;
  cursor: pointer;
}
nav ul li.search button[type="submit"] i {
  color: black;
  font-size: 16px;
}
.split {
	margin: 0 auto;
	display: flex;
	min-height: 100vh;
	background: linear-gradient(to right,#D9D9D9 0%, #D9D9D9 65%, white 35%, white 100%);
	font-family: 'Prompt', sans-serif;
}
.detail-text{
	font-family: 'Prompt', sans-serif;
	margin-left: 20px;
	margin-right: 20px;
	font-size: xx-large;
	margin-top: 250px;
	color: black;
	text-align: center;
}
.shoe-image{
	margin-top: 100px;
	margin-right: 120px;
}
.sizing{
	margin-left: 20px;
	margin-top: 150px;
}
.sizing h3{
	font-size:xx-large;
}
.button-box {
	display: flex;
	align-items: center;
}
.left-buttons {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.right-buttons {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
.button-box button {
  padding: 7px;
  margin-top: 10px;
  margin-right: 10px;
  width: 100px;
  font-size: 20px;
  background-color: #D9D9D9;
  color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.button-28 {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.button-28:disabled {
  pointer-events: none;
}

.button-28:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}
.button-box button:hover {
  background-color: #9c9c9c;
}
.price-details{
	margin-top: 20px;
}
.price-details h5{
	margin-left: 20px;
}
.search-bar {
  position: relative;
  display: inline-block;
  width: 450px;
}
.search-icon {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 130px;
  width: 20px;
  height: 100%;
  background-image: url('../assets/search.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
}

</style>