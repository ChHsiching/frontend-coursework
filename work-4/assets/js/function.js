/**
 * 清除指定输入框内容
 * 
 * @param {string} inputId - 要清除的输入框 id
 */
function clearInput(inputId) {
    document.getElementById(inputId).value = '';
}

/**
 * 清除指定输入框内容
 * 
 * @param {string} inputId - 要清除的下拉框 id
 */
function clearSelect(inputId) {
    document.getElementById(inputId).value = '';
}