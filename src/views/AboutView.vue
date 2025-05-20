<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { dataService } from '../services/dataService';
import type { AObject } from './../interfaces/AObject'; // Import interface

export default defineComponent({
  name: 'HomeView',
  setup() {
    // Sử dụng ref để tạo một reactive reference cho objectA
    const objectA = ref<AObject | null>(null); // Khởi tạo với kiểu AObject hoặc null

    const fetchObjectA = () => {
      // Gọi phương thức từ service để lấy dữ liệu
      objectA.value = dataService.getAObject();
    };

    // Khi component được mount, gọi fetchObjectA
    onMounted(() => {
      fetchObjectA();
    });

    return {
      objectA
    };
  }
});
</script>

<template>

  <h1 class="transition-all w-1/4 duration-300 hover:text-black text-2xl text-blue-200 font-bold border-2 border-red-500 flex justify-center items-center align-middle h-[100px] hover:bg-amber-300">about view</h1>


 <div class="home">
    <h1>Trang chủ</h1>
    <div v-if="objectA">
      <h2>Thông tin Object A:</h2>
      <p><strong>ID:</strong> {{ objectA.id }}</p>
      <p><strong>Tên:</strong> {{ objectA.name }}</p>
      <p><strong>Mô tả:</strong> {{ objectA.description }}</p>
      <p><strong>Phiên bản:</strong> {{ objectA.version }}</p>
    </div>
    <div v-else>
      <p>Đang tải dữ liệu Object A...</p>
    </div>
  </div>
</template>

