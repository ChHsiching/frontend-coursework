// 获取音乐图标和背景音乐的 HTML 元素
const musicIcon = document.getElementById('music-icon');
const backgroundMusic = document.getElementById('background-music');

// 初始化一个变量来跟踪音乐播放状态，初始状态为 true（即默认播放）
let isPlaying = true;

// 为音乐图标添加点击事件监听器
musicIcon.addEventListener('click', () => {
    // 判断音乐是否正在播放
    if (isPlaying) {
        // 如果音乐在播放，则暂停音乐
        backgroundMusic.pause();
        // 停止图标的旋转动画
        musicIcon.style.animationPlayState = 'paused';
    } else {
        // 如果音乐未播放，则播放音乐
        backgroundMusic.play();
        // 恢复图标的旋转动画
        musicIcon.style.animationPlayState = 'running';
    }
    // 切换音乐的播放状态
    isPlaying = !isPlaying;
});

// 页面加载完成后自动播放背景音乐
window.onload = () => {
    backgroundMusic.play();
};

// 在 DOM 内容加载完成后执行
document.addEventListener("DOMContentLoaded", function () {
    // 获取诗歌内容的 HTML 元素
    const poemContent = document.getElementById("poem-content");

    // 为诗歌内容添加点击事件监听器
    poemContent.addEventListener("click", function () {
        // 添加渐隐效果的 CSS 类，触发渐隐动画
        poemContent.classList.add("fade-out");

        // 在渐隐动画结束后，替换诗歌内容
        poemContent.addEventListener("transitionend", function () {
            // 将诗歌内容替换为一张图片
            poemContent.innerHTML = '<img src="../assets/images/landscape.jpg" alt="古战场图片" title="将士在古战场拼杀" style="width: 100%;">';
            // 移除渐隐效果的 CSS 类，恢复到初始状态
            poemContent.classList.remove("fade-out");
        }, { once: true }); // 确保只执行一次
    });
});

// 当 DOM 内容加载完成后执行
document.addEventListener("DOMContentLoaded", function () {
    // 获取标题（h1）元素
    const title = document.querySelector("h1");

    // 定义点击标题后跳转到诗歌详情页面的函数
    function togglePoemDetails() {
        // 跳转到 poem-details.html 页面
        window.location.href = "poem-details.html";
    }

    // 为标题添加点击事件监听器，点击后执行跳转函数
    title.addEventListener("click", togglePoemDetails);
});
