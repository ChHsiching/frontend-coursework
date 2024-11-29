let remainingGuesses = 10; // 初始化剩余猜测次数为10次
const targetNumber = Math.floor(Math.random() * 101); // 生成一个0到100之间的随机数，作为目标数字

// 禁用所有与游戏交互的按钮
document.getElementById("guessInput").disabled = true;
document.querySelector(".game button:nth-of-type(2)").disabled = true;
document.querySelector(".game button:nth-of-type(3)").disabled = true;

/**
 * 重新开始游戏，重置剩余猜测次数和相关输入输出
 */
function startGame() {
    remainingGuesses = 10; // 重置剩余猜测次数为10次
    document.getElementById("guessInput").disabled = false; // 启用输入框
    document.querySelector(".game button:nth-of-type(2)").disabled = false; // 启用“检查”按钮
    document.querySelector(".game button:nth-of-type(3)").disabled = false; // 启用“开始新游戏”按钮
    document.getElementById("remainingGuesses").textContent = remainingGuesses; // 更新显示剩余猜测次数的元素
    document.getElementById("result").textContent = ""; // 清除结果展示区域
}

/**
 * 检查用户输入的数字是否等于目标数字
 */
function checkGuess() {
    if (remainingGuesses > 0) { // 如果还有剩余猜测次数
        const guessInput = document.getElementById("guessInput"); // 获取用户输入框
        const userGuess = parseInt(guessInput.value, 10); // 将输入框的值转换为整数

        if (!isNaN(userGuess)) { // 检查是否是一个有效的数字
            if (userGuess === targetNumber) { // 如果猜对了
                document.getElementById("result").textContent = "恭喜你,猜对了!"; // 显示“猜对了”提示
                guessInput.disabled = true; // 禁用输入框
                document.querySelector(".game button:nth-of-type(2)").disabled = true; // 禁用“检查”按钮
                document.querySelector(".game button:nth-of-type(3)").disabled = true; // 禁用“开始新游戏”按钮
            } else if (userGuess < targetNumber) { // 如果猜的数字太小
                document.getElementById("result").textContent = "太小了,再试一次。"; // 显示“太小了”提示
            } else { // 如果猜的数字太大
                document.getElementById("result").textContent = "太大了,再试一次。"; // 显示“太大了”提示
            }
            remainingGuesses--; // 减少剩余猜测次数
            document.getElementById("remainingGuesses").textContent = remainingGuesses; // 更新显示剩余猜测次数的元素
        } else {
            alert("请输入一个有效的数字!"); // 如果输入无效，弹出警告框提示用户
        }
    } else {
        alert("机会用完了,游戏结束!"); // 如果没有剩余猜测次数，弹出警告框提示用户
        guessInput.disabled = true; // 禁用输入框
        document.querySelector(".game button:nth-of-type(2)").disabled = true; // 禁用“检查”按钮
        document.querySelector(".game button:nth-of-type(3)").disabled = true; // 禁用“开始新游戏”按钮
    }
}