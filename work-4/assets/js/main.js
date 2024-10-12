/**
 * 侧边栏选中高亮效果
 */
// 获取所有的列表项
const items = document.querySelectorAll('.setting-title');

// 为每个列表项添加点击事件监听器
items.forEach(item => {
  item.addEventListener('click', () => {
    // 移除所有列表项的 active 类
    items.forEach(i => i.classList.remove('setting-title-active'));
    
    // 为当前点击的项添加 active 类
    item.classList.add('setting-title-active');
  });
});

/**
 * 使清除输入框的按钮无法被 tab 选中
 * 用户可以通过 tab 切换输入框
 */
// 将所有类名为 clear-btn 的按钮的 tabindex 设置为 -1
const buttons = document.querySelectorAll('.clear-btn');
buttons.forEach(button => {
    button.setAttribute('tabindex', '-1');
});