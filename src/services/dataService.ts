import type { AObject } from './../interfaces/AObject';

export const dataService = {
  getAObject(): AObject {
    // Đây là nơi bạn sẽ gọi API hoặc lấy dữ liệu từ nguồn khác.
    // Trong ví dụ này, chúng ta sẽ trả về một object tĩnh đã tuân theo interface AObject.
    return {
      id: 1,
      name: "Đối tượng A",
      description: "Đây là dữ liệu của Object A từ service.",
      version: "1.0.0"
    };
  }
};