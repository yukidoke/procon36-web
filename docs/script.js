function showContent() {
    const encryptedData = "U2FsdGVkX1/SNclpUqEDpW8MHmAWmm7s96yzoLhZktOC8KB0FNinkGc2JLETg+P1kR2be6ahNccopmfaCwGhovGwc0Y2rMpYcb0lSD5jQwqht+VJW5XU3KjnWfoBhps6tDth0VPLt+m4qq2Ao8qsqfMGyfmcKQunRQpS4oGNp4Y=";

    // ユーザーが入力したパスワードを取得
    const inputPassword = document.getElementById("passwordInput").value;
    const contentDiv = document.getElementById("articleContent");

    try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, inputPassword);
        const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (decryptedText) {
            contentDiv.innerHTML = decryptedText;
        } else {
            throw new Error("復号に失敗しました。");
        }
    } catch (e) {
        console.error(e);
        contentDiv.innerHTML = "<p style='color: red;'>パスワードが違います。</p>";
    }
}