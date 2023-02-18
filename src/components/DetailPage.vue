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
	<div class="product-details">
		<div class="product-info">
			<p>
รายละเอียดแบบวินเทจยกระดับรุ่นไอคอนเพื่อนำสไตล์เหนือกาลเวลาที่ใส่ง่ายมาให้คุณ คู่นี้มาพร้อมหนังแท้และหนังสังเคราะห์ที่ให้สัมผัสแบบคลาสสิก ส่วนโลโก้ Swoosh แบบเป็นเลเยอร์และโฟมเปลือยที่ลิ้นรองเท้าก็เสริมลุคแบบเรโทร แน่นอนว่าบางสิ่งบางอย่าง
ก็ไม่เคยเปลี่ยน: ส่วน Nike Air ยังคงช่วยลดแรงกระแทกในทุกย่างก้าวของคุณ
			</p>
		</div>
		<div class="product-image">
		  <img src="../testproject/shoe02.png" alt="Product image">
		</div>
		<div class="product-sizing">
		  <h2>Nike Airforce1 '07 LV8</h2>
		  <h3>Men Shoe</h3>
		  <h4>฿4700</h4>
		  <p>Please select a size:</p>
		  <select>
			<option value="size-7">7</option>
			<option value="size-8">8</option>
			<option value="size-9">9</option>
		  </select>
		  <button class="add-to-cart">Add to Cart</button>
		</div>
	  </div>
</template>


<style scoped>
.product-details {
  display: grid;
  flex-direction: row;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr;
  width: 2000px;
}

.product-info {
  margin-right: 20px;
}

.product-image {
  margin-right: 20px;
}

.product-sizing {
  margin-top: 20px;
}

.add-to-cart {
  margin-top: 20px;
}
</style>