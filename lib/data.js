// data.js
// 用於集中管理網站內容的資料檔案

const data = {
  avatar: {
    image: '/public/images/avatar.jpg', // 大頭照圖片路徑
    text: '這是大頭照下的文字描述', // 大頭照下的文字
  },
  standardImages: {
    white: '/assets/BAKERY標準字/白/logo.png', // 標準字白色版本圖片路徑
    black: '/assets/BAKERY標準字/黑/logo.png', // 標準字黑色版本圖片路徑
  },
  sections: {
    work: {
      title: 'Work',
      description: '這是 Work 區域的描述文字',
      image: '/public/images/work.jpg',
    },
    commission: {
      title: 'Commission',
      description: '這是 Commission 區域的描述文字',
      image: '/public/images/commission.jpg',
    },
    contact: {
      title: 'Contact',
      description: '這是 Contact 區域的描述文字',
      image: '/public/images/contact.jpg',
    },
  },
};

export default data;