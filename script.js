document.getElementById("one").addEventListener("click", function () {
    window.location.href = "blog.html";
});
// button works
const history_container = document.getElementById("history-part");
document.getElementById("my-btn-two").addEventListener("click", function () {
    document.getElementById("my-btn-one").classList.remove("bg-[#B4F461]", "border-[#B4F461]");
    document.getElementById("my-btn-two").classList.add("bg-[#B4F461]", "border-[#B4F461]");
    document.getElementById("donation-part-first").classList.add("hidden");
    document.getElementById("donation-part-second").classList.add("hidden");
    document.getElementById("donation-part-third").classList.add("hidden");
    history_container.classList.remove("hidden");
});
document.getElementById("my-btn-one").addEventListener("click", function () {
    document.getElementById("my-btn-two").classList.remove("bg-[#B4F461]", "border-[#B4F461]");
    document.getElementById("my-btn-one").classList.add("bg-[#B4F461]", "border-[#B4F461]");
    document.getElementById("donation-part-first").classList.remove("hidden");
    document.getElementById("donation-part-second").classList.remove("hidden");
    document.getElementById("donation-part-third").classList.remove("hidden");
    history_container.classList.add("hidden");
});
// button works ends

// time zone
const time = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    hour12: true,
});
// first
document.getElementById("first-donation-btn").addEventListener("click", function () {
    const available_balance = parseFloat(document.getElementById("available-balance").innerText);
    const first_taka = parseFloat(document.getElementById("first-donation").value);
    const first_amount = parseFloat(document.getElementById("first-amount").innerText);
    if ((available_balance < first_taka) || (first_taka < 0)) {
        alert("Please enter a valid amount.");
        document.getElementById("first-donation").value = "";
    } else {
        document.getElementById("first-donation-btn").setAttribute("onclick", my_modal_1.showModal());
        const new_first_amount = first_amount + first_taka;
        document.getElementById("first-amount").innerText = new_first_amount;
        const new_available_balance = available_balance - first_taka;
        document.getElementById("available-balance").innerText = new_available_balance;
        document.getElementById("first-donation").value = "";
        history_container.classList.add("flex", "flex-col", "justify-between", "items-center", "gap-2", "mt-4", "w-full");
        const new_item_one = document.createElement("div");
        new_item_one.classList.add("border-2", "rounded-md", "p-3");
        new_item_one.innerHTML = `
                <h4 class="font-bold ">${first_taka} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
                <p>Date: ${time} (Bangladesh Standard Time)</p>
            `;
        history_container.appendChild(new_item_one);
    }
}
);
document.getElementById("second-donation-btn").addEventListener("click", function () {
    const available_balance = parseFloat(document.getElementById("available-balance").innerText);
    const second_taka = parseFloat(document.getElementById("second-donation").value);
    const second_amount = parseFloat(document.getElementById("second-amount").innerText);
    if (available_balance < second_taka || (second_taka < 0)) {
        alert("Please enter a valid amount.");
        document.getElementById("second-donation").value = "";
    } else {
        document.getElementById("second-donation-btn").setAttribute("onclick", my_modal_2.showModal());
        const new_second_amount = second_amount + second_taka;
        document.getElementById("second-amount").innerText = new_second_amount;
        const new_available_balance = available_balance - second_taka;
        document.getElementById("available-balance").innerText = new_available_balance;
        document.getElementById("second-donation").value = "";
        history_container.classList.add("flex", "flex-col", "justify-between", "items-center", "gap-2", "mt-4", "w-full");
        const new_item_two = document.createElement("div");
        new_item_two.classList.add("border-2", "rounded-md", "p-3");
        new_item_two.innerHTML = `
                <h4 class="font-bold ">${second_taka} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
                <p>Date: ${time} (Bangladesh Standard Time)</p>
            `;
        history_container.appendChild(new_item_two);
    }
}
);
document.getElementById("third-donation-btn").addEventListener("click", function () {
    const available_balance = parseFloat(document.getElementById("available-balance").innerText);
    const third_taka = parseFloat(document.getElementById("third-donation").value);
    const third_amount = parseFloat(document.getElementById("third-amount").innerText);
    if (available_balance < third_taka || (third_taka < 0)) {
        alert("Please enter a valid amount.");
        document.getElementById("third-donation").value = "";
    } else {
        document.getElementById("third-donation-btn").setAttribute("onclick", my_modal_3.showModal());
        const new_third_amount = third_amount + third_taka;
        document.getElementById("third-amount").innerText = new_third_amount;
        const new_available_balance = available_balance - third_taka;
        document.getElementById("available-balance").innerText = new_available_balance;
        document.getElementById("third-donation").value = "";
        history_container.classList.add("flex", "flex-col", "justify-between", "items-center", "gap-2", "mt-4", "w-full");
        const new_item_three = document.createElement("div");
        new_item_three.classList.add("border-2", "rounded-md", "p-3");
        new_item_three.innerHTML = `
                <h4 class="font-bold ">${third_taka} Taka is Donated for  Aid for Injured in the Quota Movement, Bangladesh</h4>
                <p>Date: ${time} (Bangladesh Standard Time)</p>
            `;
        history_container.appendChild(new_item_three);
    }
}
);
// history code
