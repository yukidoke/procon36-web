function showContent() {
    const encryptedData = "sK7PLckcWB1zFPh3XncVuKNjGuf9XBLyCu+z+pzf40nMuHyHiOWzsMb5dIU5ax2ILi6QiE2KMTlVpgS209Q37fjkmO7N4pdu+ut9MoBkxr0vZsu/xBmWx9mBAg7iA4b3kvQ30dbW7E8bXO/16haDwA==";

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