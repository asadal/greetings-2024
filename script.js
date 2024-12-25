document.getElementById("send-btn").addEventListener("click", function() {
    const message = document.getElementById("message").value;
    if (message.trim() === "") return;

    // 신문 이미지 조각화 애니메이션
    const newspaperImage = document.getElementById("newspaper-image");
    newspaperImage.style.transform = "scale(0.1)";

    // 신문 이미지 조각 흩날리기
    const snowflakes = [];
    for (let i = 0; i < 200; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;

        document.getElementById("newspaper-container").appendChild(snowflake);
        snowflakes.push(snowflake);
    }

    // 잠시 후 문구 형태로 재배치
    setTimeout(() => {
        // 신문 이미지 리셋
        newspaperImage.style.transform = "scale(1)";
        document.getElementById("newspaper-container").innerHTML = message.split("").map(char => {
            return `<span style="font-size: 20px; font-weight: bold; position: absolute;">${char}</span>`;
        }).join("");

        // 문구를 랜덤 위치에 배치
        let letters = document.querySelectorAll("#newspaper-container span");
        letters.forEach((letter, index) => {
            letter.style.top = `${Math.random() * 350}px`;
            letter.style.left = `${Math.random() * 350}px`;
        });

        // 눈송이 제거
        snowflakes.forEach(snowflake => snowflake.remove());
    }, 3000);
});